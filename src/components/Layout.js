import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import Navbar from "./Navbar"
import Footer from "./Footer"
import CookieBanner from "./CookieBanner"
import { CookieProvider } from "../contexts/CookieContext"
import "../styles/style.scss"

// Layout wrapper per visualizzare Navbar e Footer su tutte le pagine
const Layout = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState(
    typeof window !== "undefined" ? localStorage.getItem("cookieConsent") : null
  )

  useEffect(() => {
    // Carica Google Analytics in modo sicuro con il consenso
    if (typeof window !== "undefined") {
      const consentData = localStorage.getItem("cookieConsent")
      if (consentData) {
        try {
          const consent = JSON.parse(consentData)
          loadGoogleAnalytics(consent.analytics)
        } catch (e) {
          console.error("Errore parsing cookie consent:", e)
        }
      }
    }
  }, [cookieConsent])

  const loadGoogleAnalytics = (analyticsConsent) => {
    if (typeof window === "undefined") return

    // Imposta il consenso per Google Analytics
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: analyticsConsent ? "granted" : "denied",
      })
    }

    // Se utente ha dato consenso e GA non è ancora caricato, carica Google Analytics
    if (analyticsConsent && !window.dataLayer) {
      const gaId = process.env.GATSBY_GOOGLE_ANALYTICS_ID || "G-XXXXXXXXXX"

      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      gtag("js", new Date())
      gtag("config", gaId)

      // Carica lo script di Google Analytics in modo asincrono
      const script = document.createElement("script")
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      document.head.appendChild(script)
    }
  }

  const handleCookieConsent = (consent) => {
    setCookieConsent(JSON.stringify(consent))
    loadGoogleAnalytics(consent.analytics)
  }

  return (
    <CookieProvider>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <CookieBanner onConsent={handleCookieConsent} />
        <Navbar />
        <Box sx={{ flex: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </CookieProvider>
  )
}

export default Layout
