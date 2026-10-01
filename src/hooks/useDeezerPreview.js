import { useCallback, useEffect, useRef, useState } from "react"

const TIMEOUT_JSONP_MS = 8000

// Gli URL di anteprima Deezer sono firmati e scadono dopo poche ore:
// si richiede quello aggiornato al momento del click (JSONP, l'API non ha CORS).
const richiediUrlAnteprima = (idBrano) =>
  new Promise((resolve, reject) => {
    const nomeCallback = `deezerCb_${idBrano}_${Date.now()}`
    const script = document.createElement("script")

    const pulisci = () => {
      clearTimeout(timer)
      delete window[nomeCallback]
      script.remove()
    }

    const timer = setTimeout(() => {
      pulisci()
      reject(new Error("Timeout richiesta anteprima"))
    }, TIMEOUT_JSONP_MS)

    window[nomeCallback] = (risposta) => {
      pulisci()
      if (risposta?.preview) resolve(risposta.preview)
      else reject(new Error("Anteprima non disponibile"))
    }

    script.onerror = () => {
      pulisci()
      reject(new Error("Errore di rete"))
    }
    script.src = `https://api.deezer.com/track/${idBrano}?output=jsonp&callback=${nomeCallback}`
    document.head.appendChild(script)
  })

// Gestisce la riproduzione di un'unica anteprima alla volta
const useDeezerPreview = () => {
  const audioRef = useRef(null)
  const richiestaRef = useRef(0)
  const [idInRiproduzione, setIdInRiproduzione] = useState(null)
  const [idInCaricamento, setIdInCaricamento] = useState(null)
  const [idInErrore, setIdInErrore] = useState(null)
  const [progresso, setProgresso] = useState(0)

  const ferma = useCallback(() => {
    richiestaRef.current += 1 // invalida eventuali richieste in corso
    audioRef.current?.pause()
    audioRef.current = null
    setIdInRiproduzione(null)
    setIdInCaricamento(null)
    setProgresso(0)
  }, [])

  const toggle = useCallback(
    async (idBrano) => {
      if (idBrano === idInRiproduzione) {
        ferma()
        return
      }
      ferma()
      setIdInErrore(null)
      setIdInCaricamento(idBrano)
      const numeroRichiesta = richiestaRef.current

      try {
        const url = await richiediUrlAnteprima(idBrano)
        if (numeroRichiesta !== richiestaRef.current) return

        const audio = new Audio(url)
        audio.ontimeupdate = () =>
          setProgresso(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0)
        audio.onended = ferma
        audioRef.current = audio

        await audio.play()
        if (numeroRichiesta !== richiestaRef.current) return
        setIdInCaricamento(null)
        setIdInRiproduzione(idBrano)
      } catch {
        if (numeroRichiesta !== richiestaRef.current) return
        setIdInCaricamento(null)
        setIdInErrore(idBrano)
      }
    },
    [idInRiproduzione, ferma]
  )

  // Ferma l'audio quando il componente viene smontato
  useEffect(() => ferma, [ferma])

  return { idInRiproduzione, idInCaricamento, idInErrore, progresso, toggle, ferma }
}

export default useDeezerPreview
