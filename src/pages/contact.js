import React, { useState } from "react"
import Layout from "../components/Layout"
import Breadcrumb from "../components/Breadcrumb"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Link,
  FormControlLabel,
  Checkbox,
  InputAdornment,
} from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ErrorIcon from "@mui/icons-material/Error"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    servizio: "",
    data: "",
    messaggio: "",
  })
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateEmail = (email) => {
    // Regex email più robusta
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Validazione in tempo reale per email
    if (name === "email" && value.trim()) {
      if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Inserisci un'email valida",
        }))
      } else {
        setErrors((prev) => ({
          ...prev,
          email: "",
        }))
      }
    } else if (errors[name]) {
      // Pulisci l'errore per gli altri campi quando l'utente inizia a scrivere
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validazione Nome
    if (!formData.nome.trim()) {
      newErrors.nome = "Il nome è obbligatorio"
    }

    // Validazione Email
    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Inserisci un'email valida (es: nome@esempio.it)"
    }

    // Validazione Messaggio
    if (!formData.messaggio.trim()) {
      newErrors.messaggio = "Il messaggio è obbligatorio"
    } else if (formData.messaggio.trim().length < 10) {
      newErrors.messaggio = "Il messaggio deve contenere almeno 10 caratteri"
    }

    // Validazione Termini e Condizioni
    if (!acceptTerms) {
      newErrors.acceptTerms = "Devi accettare i Termini e Condizioni"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitted(true)
    // Qui aggiungerai l'integrazione con il servizio di email (Formspree, Netlify Forms, ecc.)
    console.log("Form data:", formData)

    // Reset form dopo 2 secondi
    setTimeout(() => {
      setFormData({
        nome: "",
        email: "",
        telefono: "",
        servizio: "",
        data: "",
        messaggio: "",
      })
      setAcceptTerms(false)
      setSubmitted(false)
    }, 2000)
  }

  const isFormValid = formData.nome.trim() && formData.email.trim() && formData.messaggio.trim() && acceptTerms

  return (
    <Layout>

      {/* ── BREADCRUMB ────────────────────────────────── */}
      <Breadcrumb
        items={[
          { label: "Home", link: "/" },
          { label: "Contatti", active: true },
        ]}
      />

      {/* ── HERO ──────────────────────────────────────── */}
      <Box
        sx={{
          minHeight: { xs: "50vh", md: "60vh" },
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          py: { xs: 10, md: 0 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              color: "#666",
              display: "block",
              mb: 2,
            }}
          >
            Contattami
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#1a1a1a",
              mb: 3,
              maxWidth: 500,
            }}
          >
            Raccontami il tuo
            <br />
            giorno speciale
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.05rem",
              color: "#666",
              lineHeight: 1.8,
              maxWidth: 420,
            }}
          >
            Verifica la disponibilità per il tuo evento o semplicemente
            inizia a dialogare. Ti rispondo entro 24 ore.
          </Typography>
        </Container>
      </Box>

      {/* ── CONTATTI RAPIDI ───────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {/* WhatsApp */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  backgroundColor: "#f5f5f5",
                  p: 4,
                  border: "1px solid #e8e8e8",
                  display: "flex",
                  gap: 3,
                  alignItems: "flex-start",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#25D366",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    borderRadius: "4px",
                  }}
                >
                  <WhatsAppIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#1a1a1a", mb: 1 }}
                  >
                    WhatsApp
                  </Typography>
                  <Typography sx={{ color: "#666", mb: 2, lineHeight: 1.6 }}>
                    Il modo più veloce per contattarmi. Disponibile su appuntamento.
                  </Typography>
                  <Link
                    href="https://wa.me/393298883327"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#25D366",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    +39 329 888 3327 →
                  </Link>
                </Box>
              </Box>
            </Grid>

            {/* Email */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  backgroundColor: "#f5f5f5",
                  p: 4,
                  border: "1px solid #e8e8e8",
                  display: "flex",
                  gap: 3,
                  alignItems: "flex-start",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#1a1a1a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    borderRadius: "4px",
                  }}
                >
                  <EmailIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#1a1a1a", mb: 1 }}
                  >
                    Email
                  </Typography>
                  <Typography sx={{ color: "#666", mb: 2, lineHeight: 1.6 }}>
                    Preferibilmente con dettagli del vostro evento o richiesta.
                  </Typography>
                  <Link
                    href="mailto:info@djwoolrich.it"
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    info@djwoolrich.it →
                  </Link>
                </Box>
              </Box>
            </Grid>

            {/* Telefono */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  backgroundColor: "#f5f5f5",
                  p: 4,
                  border: "1px solid #e8e8e8",
                  display: "flex",
                  gap: 3,
                  alignItems: "flex-start",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#1a1a1a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    borderRadius: "4px",
                  }}
                >
                  <PhoneIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#1a1a1a", mb: 1 }}
                  >
                    Telefono
                  </Typography>
                  <Typography sx={{ color: "#666", mb: 2, lineHeight: 1.6 }}>
                    Per conversazioni più approfondite, sono disponibile su appuntamento.
                  </Typography>
                  <Link
                    href="tel:+393298883327"
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    +39 329 888 3327 →
                  </Link>
                </Box>
              </Box>
            </Grid>

            {/* Zona */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  backgroundColor: "#f5f5f5",
                  p: 4,
                  border: "1px solid #e8e8e8",
                  display: "flex",
                  gap: 3,
                  alignItems: "flex-start",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#1a1a1a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    borderRadius: "4px",
                  }}
                >
                  <LocationOnIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#1a1a1a", mb: 1 }}
                  >
                    Zona di lavoro
                  </Typography>
                  <Typography sx={{ color: "#666", lineHeight: 1.6 }}>
                    Pordenone e dintorni
                    <br />
                    Nord-Est Italia
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── FORM DI CONTATTO ──────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f5f5f5" }}>
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              color: "#666",
              display: "block",
              mb: 1,
            }}
          >
            Modulo di contatto
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 6,
            }}
          >
            Inviami un messaggio
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "grid",
              gap: 3,
            }}
          >
            <Grid container spacing={3}>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#1a1a1a", fontWeight: 500 }}>
                    Nome <span style={{ color: "#d32f2f" }}>*</span>
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  error={!!errors.nome}
                  helperText={errors.nome}
                  variant="outlined"
                  placeholder="Il tuo nome completo"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {formData.nome.trim() && !errors.nome && (
                          <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "1.2rem" }} />
                        )}
                        {errors.nome && (
                          <ErrorIcon sx={{ color: "#d32f2f", fontSize: "1.2rem" }} />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: errors.nome ? "#ffebee" : formData.nome.trim() && !errors.nome ? "#f1f8f4" : "#fff",
                      "& fieldset": {
                        borderColor: errors.nome ? "#d32f2f" : formData.nome.trim() && !errors.nome ? "#4caf50" : "#e8e8e8",
                        borderWidth: errors.nome || (formData.nome.trim() && !errors.nome) ? "2px" : "1px",
                      },
                      "&:hover fieldset": { borderColor: errors.nome ? "#d32f2f" : formData.nome.trim() && !errors.nome ? "#4caf50" : "#999" },
                      "&.Mui-focused fieldset": { borderColor: errors.nome ? "#d32f2f" : "#1a1a1a" },
                    },
                  }}
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#1a1a1a", fontWeight: 500 }}>
                    Email <span style={{ color: "#d32f2f" }}>*</span>
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                  placeholder="il.tuo@email.com"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {formData.email.trim() && !errors.email && (
                          <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "1.2rem" }} />
                        )}
                        {errors.email && (
                          <ErrorIcon sx={{ color: "#d32f2f", fontSize: "1.2rem" }} />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: errors.email ? "#ffebee" : formData.email.trim() && !errors.email ? "#f1f8f4" : "#fff",
                      "& fieldset": {
                        borderColor: errors.email ? "#d32f2f" : formData.email.trim() && !errors.email ? "#4caf50" : "#e8e8e8",
                        borderWidth: errors.email || (formData.email.trim() && !errors.email) ? "2px" : "1px",
                      },
                      "&:hover fieldset": { borderColor: errors.email ? "#d32f2f" : formData.email.trim() && !errors.email ? "#4caf50" : "#999" },
                      "&.Mui-focused fieldset": { borderColor: errors.email ? "#d32f2f" : "#1a1a1a" },
                    },
                  }}
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#fff",
                      "& fieldset": { borderColor: "#e8e8e8" },
                      "&:hover fieldset": { borderColor: "#999" },
                      "&.Mui-focused fieldset": { borderColor: "#1a1a1a" },
                    },
                  }}
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Servizio interessato"
                  name="servizio"
                  value={formData.servizio}
                  onChange={handleInputChange}
                  placeholder="Es: DJ matrimonio, Feste private, Corporate event"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#fff",
                      "& fieldset": { borderColor: "#e8e8e8" },
                      "&:hover fieldset": { borderColor: "#999" },
                      "&.Mui-focused fieldset": { borderColor: "#1a1a1a" },
                    },
                  }}
                />
              </Grid>
              <Grid item size={{ xs: 12 }}>
                <Typography variant="body2" sx={{ color: "#666", mb: 1, fontSize: "0.875rem" }}>
                  Data evento (se prevista)
                </Typography>
                <TextField
                  fullWidth
                  name="data"
                  type="date"
                  value={formData.data}
                  onChange={handleInputChange}
                  variant="outlined"
                  slotProps={{
                    input: {
                      placeholder: "GG/MM/AAAA",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#fff",
                      "& fieldset": { borderColor: "#e8e8e8" },
                      "&:hover fieldset": { borderColor: "#999" },
                      "&.Mui-focused fieldset": { borderColor: "#1a1a1a" },
                    },
                  }}
                />
              </Grid>
              <Grid item size={{ xs: 12 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "#1a1a1a", fontWeight: 500 }}>
                    Messaggio <span style={{ color: "#d32f2f" }}>*</span>
                  </Typography>
                  {formData.messaggio.trim() && (
                    <Typography variant="caption" sx={{ color: "#999" }}>
                      {formData.messaggio.trim().length}/10 caratteri minimi
                    </Typography>
                  )}
                </Box>
                <TextField
                  fullWidth
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleInputChange}
                  required
                  error={!!errors.messaggio}
                  helperText={errors.messaggio}
                  multiline
                  rows={6}
                  placeholder="Raccontami il tuo evento, i tuoi gusti musicali, quello che ti interessa..."
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ alignSelf: "flex-start", mt: 1 }}>
                        {formData.messaggio.trim().length >= 10 && !errors.messaggio && (
                          <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "1.2rem" }} />
                        )}
                        {errors.messaggio && (
                          <ErrorIcon sx={{ color: "#d32f2f", fontSize: "1.2rem" }} />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: errors.messaggio ? "#ffebee" : formData.messaggio.trim().length >= 10 && !errors.messaggio ? "#f1f8f4" : "#fff",
                      "& fieldset": {
                        borderColor: errors.messaggio ? "#d32f2f" : formData.messaggio.trim().length >= 10 && !errors.messaggio ? "#4caf50" : "#e8e8e8",
                        borderWidth: errors.messaggio || (formData.messaggio.trim().length >= 10 && !errors.messaggio) ? "2px" : "1px",
                      },
                      "&:hover fieldset": { borderColor: errors.messaggio ? "#d32f2f" : formData.messaggio.trim().length >= 10 && !errors.messaggio ? "#4caf50" : "#999" },
                      "&.Mui-focused fieldset": { borderColor: errors.messaggio ? "#d32f2f" : "#1a1a1a" },
                    },
                  }}
                />
              </Grid>
            </Grid>

            {/* Checkbox Termini e Condizioni */}
            <Box sx={{ mt: 3, mb: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptTerms}
                    onChange={(e) => {
                      setAcceptTerms(e.target.checked)
                      // Pulisci l'errore quando l'utente accetta
                      if (errors.acceptTerms && e.target.checked) {
                        setErrors((prev) => ({
                          ...prev,
                          acceptTerms: "",
                        }))
                      }
                    }}
                    sx={{
                      color: "#1a1a1a",
                      "&.Mui-checked": {
                        color: "#1a1a1a",
                      },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: "#666", fontSize: "0.875rem" }}>
                    Accetto i{" "}
                    <Link
                      href="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#1a1a1a",
                        fontWeight: 600,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Termini e Condizioni
                    </Link>
                    {" *"}
                  </Typography>
                }
              />
              {errors.acceptTerms && (
                <Typography
                  variant="caption"
                  sx={{ color: "#d32f2f", display: "block", ml: 4, mt: 1 }}
                >
                  {errors.acceptTerms}
                </Typography>
              )}
            </Box>

            <Box sx={{ mt: 2 }}>
              {submitted && (
                <Box
                  sx={{
                    backgroundColor: "#e8f5e9",
                    color: "#2e7d32",
                    p: 2,
                    mb: 2,
                    border: "1px solid #81c784",
                    fontSize: "0.875rem",
                  }}
                >
                  ✓ Messaggio inviato con successo! Ti risponderò entro 24 ore.
                </Box>
              )}
              <Button
                type="submit"
                disabled={!isFormValid}
                disableElevation
                sx={{
                  backgroundColor: isFormValid ? "#1a1a1a" : "#ccc",
                  color: "#fff",
                  borderRadius: 0,
                  px: 5,
                  py: 1.8,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: isFormValid ? "#444" : "#ccc",
                  },
                  transition: "background-color 0.3s ease",
                  cursor: isFormValid ? "pointer" : "not-allowed",
                }}
              >
                {submitted ? "Messaggio inviato!" : "Invia messaggio"}
              </Button>
            </Box>
          </Box>

          <Typography
            variant="body2"
            sx={{ color: "#999", fontSize: "0.75rem", mt: 4 }}
          >
            I campi contrassegnati con * sono obbligatori.
            <br />
            Risponderò entro 24 ore durante i giorni lavorativi.
          </Typography>
        </Container>
      </Box>

      {/* ── FAQ RAPIDO ────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 6,
              textAlign: "center",
            }}
          >
            Domande frequenti
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                domanda: "Quanto tempo prima devo contattarvi?",
                risposta:
                  "Idealmente almeno 3-6 mesi prima dell'evento. Così avremo tempo per conoscerci bene e costruire la scaletta perfetta.",
              },
              {
                domanda: "Quali sono i vostri costi?",
                risposta:
                  "I prezzi variano a seconda del tipo di evento e dei servizi richiesti. Contattami per un preventivo personalizzato senza impegno.",
              },
              {
                domanda: "Qual è la vostra zona di lavoro?",
                risposta:
                  "Opero principalmente nel Nord-Est Italia, con base a Pordenone. Sono disponibile a valutare location fuori zona in base ai dettagli dell'evento.",
              },
            ].map((faq, idx) => (
              <Grid item size={{ xs: 12 }} key={idx}>
                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    p: 4,
                    border: "1px solid #e8e8e8",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#1a1a1a", mb: 1 }}
                  >
                    {faq.domanda}
                  </Typography>
                  <Typography sx={{ color: "#666", lineHeight: 1.8 }}>
                    {faq.risposta}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Layout>
  )
}

export default ContactPage

export const Head = () => <title>Contatti — DJ Woolrich</title>
