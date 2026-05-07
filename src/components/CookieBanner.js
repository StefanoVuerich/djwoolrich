import React, { useState, useEffect } from "react"
import { Box, Container, Typography, Button, Checkbox, FormControlLabel } from "@mui/material"
import { useCookieContext } from "../contexts/CookieContext"

const CookieBanner = ({ onConsent }) => {
  const { showCookieBanner, setShowCookieBanner, closeCookieBanner } = useCookieContext()
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState({
    analytics: false,
    preferences: false,
  })

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent")
    if (!hasConsent) {
      setShowCookieBanner(true)
    }
  }, [setShowCookieBanner])

  const handleAcceptAll = () => {
    const consent = {
      analytics: true,
      preferences: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(consent))
    closeCookieBanner()
    onConsent(consent)
  }

  const handleRejectAll = () => {
    const consent = {
      analytics: false,
      preferences: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(consent))
    closeCookieBanner()
    onConsent(consent)
  }

  const handleSavePreferences = () => {
    const consent = {
      analytics: preferences.analytics,
      preferences: preferences.preferences,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(consent))
    closeCookieBanner()
    onConsent(consent)
  }

  const handlePreferenceChange = (event) => {
    setPreferences({
      ...preferences,
      [event.target.name]: event.target.checked,
    })
  }

  if (!showCookieBanner) {
    return null
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1a1a1a",
        color: "#fff",
        zIndex: 9999,
        borderTop: "1px solid #444",
        boxShadow: "0 -4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 3,
          }}
        >
          {/* Testo principale */}
          {!showDetails && (
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.9)",
                  mb: 2,
                }}
              >
                Utilizziamo cookie tecnici essenziali e, con il tuo consenso, cookie di analisi
                (Google Analytics) e preferenze per migliorare la tua esperienza sul sito.{" "}
                <Typography
                  component="a"
                  href="/cookie"
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    textDecoration: "underline",
                    cursor: "pointer",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  Scopri di più sulla nostra Cookie Policy
                </Typography>.
              </Typography>

              {/* Pulsanti azione */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  onClick={handleRejectAll}
                  disableElevation
                  sx={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    borderRadius: 0,
                    px: 3,
                    py: 1,
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    border: "1px solid #fff",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    transition: "all 0.3s ease",
                  }}
                >
                  Rifiuta Tutto
                </Button>

                <Button
                  onClick={() => setShowDetails(true)}
                  disableElevation
                  sx={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    borderRadius: 0,
                    px: 3,
                    py: 1,
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    border: "1px solid #fff",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    transition: "all 0.3s ease",
                  }}
                >
                  Personalizza
                </Button>

                <Button
                  onClick={handleAcceptAll}
                  disableElevation
                  sx={{
                    backgroundColor: "#fff",
                    color: "#1a1a1a",
                    borderRadius: 0,
                    px: 3,
                    py: 1,
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    "&:hover": { backgroundColor: "#e8e8e8" },
                    transition: "all 0.3s ease",
                  }}
                >
                  Accetta Tutto
                </Button>
              </Box>
            </Box>
          )}

          {/* Pannello personalizzazione */}
          {showDetails && (
            <Box sx={{ width: "100%", flex: 1 }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                Personalizza i tuoi Preferimenti Cookie
              </Typography>

              {/* Cookie Tecnici - sempre abilitati */}
              <Box sx={{ mb: 3, pb: 2, borderBottom: "1px solid #444" }}>
                <FormControlLabel
                  control={<Checkbox checked={true} disabled sx={{ color: "#fff" }} />}
                  label={
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        Cookie Tecnici (Obbligatori)
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        Necessari per il funzionamento del sito. Sempre attivi.
                      </Typography>
                    </Box>
                  }
                />
              </Box>

              {/* Google Analytics */}
              <Box sx={{ mb: 3, pb: 2, borderBottom: "1px solid #444" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={preferences.analytics}
                      onChange={handlePreferenceChange}
                      name="analytics"
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": { color: "#fff" },
                      }}
                    />
                  }
                  label={
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        Cookie di Analisi (Google Analytics)
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        Ci aiutano a capire come utilizzate il sito. Durata: 13 mesi.
                      </Typography>
                    </Box>
                  }
                />
              </Box>

              {/* Cookie di Preferenza */}
              <Box sx={{ mb: 3 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={preferences.preferences}
                      onChange={handlePreferenceChange}
                      name="preferences"
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": { color: "#fff" },
                      }}
                    />
                  }
                  label={
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        Cookie di Preferenza
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        Ricordano le vostre preferenze (tema, lingua). Durata: 12 mesi.
                      </Typography>
                    </Box>
                  }
                />
              </Box>

              {/* Pulsanti salvataggio */}
              <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
                <Button
                  onClick={() => setShowDetails(false)}
                  disableElevation
                  sx={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    borderRadius: 0,
                    px: 3,
                    py: 1,
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    border: "1px solid #fff",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    transition: "all 0.3s ease",
                  }}
                >
                  Indietro
                </Button>

                <Button
                  onClick={handleSavePreferences}
                  disableElevation
                  sx={{
                    backgroundColor: "#fff",
                    color: "#1a1a1a",
                    borderRadius: 0,
                    px: 3,
                    py: 1,
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    "&:hover": { backgroundColor: "#e8e8e8" },
                    transition: "all 0.3s ease",
                  }}
                >
                  Salva Preferenze
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default CookieBanner
