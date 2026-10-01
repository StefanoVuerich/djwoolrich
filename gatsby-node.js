const { playlists } = require("./src/data/playlists")

const DEEZER_API = "https://api.deezer.com"
const TIMEOUT_MS = 15000
const BRANI_PER_FONTE = 100

// Definisce lo schema in modo esplicito, cosi' le query funzionano anche senza nodi
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type DeezerPlaylist implements Node @dontInfer {
      playlistId: String!
      titolo: String!
      descrizione: String
      tipo: String
      colore: String
      ordine: Int
      tracks: [DeezerTrack!]!
    }

    type DeezerTrack {
      idBrano: String!
      titolo: String!
      artista: String!
      copertina: String
      durata: Int
      link: String
    }
  `)
}

// Recupera i brani di una singola fonte Deezer (classifica o playlist)
const recuperaBrani = async (fonte) => {
  const percorso =
    fonte.tipo === "playlist"
      ? `playlist/${fonte.id}/tracks`
      : `chart/${fonte.id}/tracks`

  const risposta = await fetch(
    `${DEEZER_API}/${percorso}?limit=${BRANI_PER_FONTE}`,
    { signal: AbortSignal.timeout(TIMEOUT_MS) }
  )
  if (!risposta.ok) throw new Error(`HTTP ${risposta.status} su ${percorso}`)

  const json = await risposta.json()
  if (!Array.isArray(json.data)) {
    throw new Error(`Risposta non valida su ${percorso}: ${JSON.stringify(json.error)}`)
  }
  return json.data
}

// Unisce piu' elenchi alternando un brano per fonte, scartando i duplicati
const mescolaFonti = (elenchi) => {
  const visti = new Set()
  const risultato = []
  const lunghezzaMax = Math.max(0, ...elenchi.map((e) => e.length))

  for (let i = 0; i < lunghezzaMax; i++) {
    for (const elenco of elenchi) {
      const brano = elenco[i]
      if (brano && !visti.has(brano.id)) {
        visti.add(brano.id)
        risultato.push(brano)
      }
    }
  }
  return risultato
}

const normalizzaBrano = (brano) => ({
  idBrano: String(brano.id),
  titolo: brano.title_short || brano.title,
  artista: brano.artist?.name || "",
  copertina: brano.album?.cover_medium || null,
  durata: brano.duration || 0,
  link: brano.link || null,
})

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  // Le chiamate sono condivise tra playlist che usano la stessa fonte
  const cacheFonti = new Map()
  const brani = (fonte) => {
    const chiave = `${fonte.tipo}:${fonte.id}`
    if (!cacheFonti.has(chiave)) cacheFonti.set(chiave, recuperaBrani(fonte))
    return cacheFonti.get(chiave)
  }

  await Promise.all(
    playlists.map(async (playlist, ordine) => {
      try {
        const elenchi = await Promise.all(playlist.fonti.map(brani))

        let tracce = mescolaFonti(elenchi)
        if (playlist.senzaEsplicito) {
          tracce = tracce.filter((b) => !b.explicit_lyrics)
        }
        tracce = tracce.slice(0, playlist.limite).map(normalizzaBrano)

        if (tracce.length === 0) {
          reporter.warn(`Playlist "${playlist.titolo}" senza brani, saltata`)
          return
        }

        const contenuto = {
          playlistId: playlist.id,
          titolo: playlist.titolo,
          descrizione: playlist.descrizione,
          tipo: playlist.tipo,
          colore: playlist.colore,
          ordine,
          tracks: tracce,
        }

        actions.createNode({
          ...contenuto,
          id: createNodeId(`deezer-playlist-${playlist.id}`),
          internal: {
            type: "DeezerPlaylist",
            contentDigest: createContentDigest(contenuto),
          },
        })
      } catch (errore) {
        // Un errore dell'API non deve far fallire la build del sito
        reporter.warn(`Playlist "${playlist.titolo}" non caricata: ${errore.message}`)
      }
    })
  )
}
