// Configurazione delle playlist generate dalle classifiche Deezer.
// File CommonJS: viene letto da gatsby-node.js a build-time.
//
// Tipi di fonte:
//  - { tipo: "playlist", id } -> playlist pubblica Deezer
//  - { tipo: "chart", id }    -> classifica per genere (0 = tutti i generi)
//
// Le fonti vengono mescolate in modo alternato (round-robin) e deduplicate.
// L'ordine dell'array e' quello di visualizzazione: le prime voci compaiono anche in home.

const FONTE_TOP_ITALIA = { tipo: "playlist", id: 1116187241 }

const playlists = [
  {
    id: "top-italia",
    titolo: "Top Italia",
    descrizione: "I brani più ascoltati in Italia in questo momento.",
    tipo: "mood",
    colore: "#1a1a1a",
    fonti: [FONTE_TOP_ITALIA],
    limite: 30,
  },
  {
    id: "matrimonio",
    titolo: "Matrimonio",
    descrizione:
      "Successi che mettono d'accordo tutti gli ospiti, senza testi espliciti.",
    tipo: "mood",
    colore: "#8a6d5a",
    fonti: [
      FONTE_TOP_ITALIA,
      { tipo: "chart", id: 132 },
      { tipo: "chart", id: 165 },
    ],
    senzaEsplicito: true,
    limite: 30,
  },
  {
    id: "party",
    titolo: "Party",
    descrizione: "Hit da ballare per festeggiare fino a tardi.",
    tipo: "mood",
    colore: "#c0392b",
    fonti: [
      { tipo: "chart", id: 113 },
      { tipo: "chart", id: 197 },
      FONTE_TOP_ITALIA,
    ],
    limite: 30,
  },
  {
    id: "aperitivo",
    titolo: "Aperitivo",
    descrizione: "Sonorità morbide e radiofoniche per cocktail e cena.",
    tipo: "mood",
    colore: "#d68910",
    fonti: [
      { tipo: "chart", id: 132 },
      { tipo: "chart", id: 165 },
      { tipo: "chart", id: 144 },
    ],
    senzaEsplicito: true,
    limite: 30,
  },
  {
    id: "pop",
    titolo: "Pop",
    descrizione: "La classifica pop del momento.",
    tipo: "genere",
    colore: "#2e86c1",
    fonti: [{ tipo: "chart", id: 132 }],
    limite: 30,
  },
  {
    id: "hip-hop",
    titolo: "Hip-Hop & Rap",
    descrizione: "Rap e hip-hop più ascoltati.",
    tipo: "genere",
    colore: "#5b2c6f",
    fonti: [{ tipo: "chart", id: 116 }],
    limite: 30,
  },
  {
    id: "dance",
    titolo: "Dance",
    descrizione: "Dance ed elettronica da pista.",
    tipo: "genere",
    colore: "#117a65",
    fonti: [
      { tipo: "chart", id: 113 },
      { tipo: "chart", id: 106 },
    ],
    limite: 30,
  },
  {
    id: "latin",
    titolo: "Latin",
    descrizione: "Reggaeton e ritmi latini del momento.",
    tipo: "genere",
    colore: "#e67e22",
    fonti: [{ tipo: "chart", id: 197 }],
    limite: 30,
  },
  {
    id: "rock",
    titolo: "Rock",
    descrizione: "I brani rock più popolari.",
    tipo: "genere",
    colore: "#34495e",
    fonti: [{ tipo: "chart", id: 152 }],
    limite: 30,
  },
  {
    id: "r-and-b",
    titolo: "R&B",
    descrizione: "R&B e soul in classifica.",
    tipo: "genere",
    colore: "#7d3c98",
    fonti: [{ tipo: "chart", id: 165 }],
    limite: 30,
  },
]

module.exports = { playlists }
