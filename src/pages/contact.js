import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Breadcrumb from "../components/Breadcrumb"
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
} from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"

const ContactPage = () => {

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
      <ContactForm />

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
