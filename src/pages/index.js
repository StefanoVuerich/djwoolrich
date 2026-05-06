import React from "react"
import Layout from "../components/Layout"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Divider,
} from "@mui/material"

// Dati servizi
const servizi = [
  {
    titolo: "DJ Matrimonio",
    descrizione:
      "Rendi il tuo matrimonio indimenticabile con la musica giusta. Dalla cerimonia al ricevimento, creo l'atmosfera perfetta per ogni momento della vostra giornata speciale.",
    punti: [
      "Cerimonia, cocktail e ricevimento",
      "Playlist personalizzata con gli sposi",
      "Impianto audio e luci professionale",
      "Coordinamento con il wedding planner",
    ],
    cta: "Verifica disponibilità",
    ctaHref: "/contact",
  },
  {
    titolo: "Canzone Su Misura",
    descrizione:
      "Un regalo unico e personale. Compongo canzoni originali su commissione per matrimoni, anniversari, compleanni o qualsiasi momento speciale che vuoi celebrare.",
    punti: [
      "Testo e melodia originali",
      "Basata sulla vostra storia vera",
      "Consegna in formato audio professionale",
      "Perfetta per la prima danza",
    ],
    cta: "Richiedi una canzone",
    ctaHref: "/contact",
  },
]

// Citazione
const citazione = {
  testo: "La musica — quella la ricorderete per sempre.",
  autore: "DJ Woolrich",
}

const IndexPage = () => (
  <Layout>

    {/* ── HERO ──────────────────────────────────────── */}
    <Box
      sx={{
        minHeight: { xs: "60vh", md: "80vh" },
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        py: { xs: 10, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
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
              DJ · Pordenone e dintorni
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#1a1a1a",
                mb: 3,
              }}
            >
              Musica per i
              <br />
              tuoi momenti
              <br />
              speciali.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.05rem",
                color: "#666",
                lineHeight: 1.8,
                mb: 4,
                maxWidth: 420,
              }}
            >
              DJ matrimonio e canzoni su misura. Porto la musica giusta
              nel momento giusto, perché i ricordi durano per sempre.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                href="/contact"
                disableElevation
                sx={{
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                  borderRadius: 0,
                  px: 4,
                  py: 1.5,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  "&:hover": { backgroundColor: "#444" },
                  transition: "background-color 0.3s ease",
                }}
              >
                Verifica disponibilità
              </Button>
              <Button
                href="/services"
                disableElevation
                sx={{
                  backgroundColor: "transparent",
                  color: "#1a1a1a",
                  borderRadius: 0,
                  px: 4,
                  py: 1.5,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: "1px solid #1a1a1a",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                  transition: "background-color 0.3s ease",
                }}
              >
                Scopri i servizi
              </Button>
            </Box>
          </Grid>

          {/* Placeholder foto hero */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "4/5",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "#aaa", fontSize: "0.875rem" }}>
                Foto DJ
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* ── CITAZIONE ─────────────────────────────────── */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "#1a1a1a",
            mb: 2,
          }}
        >
          "{citazione.testo}"
        </Typography>
        <Box
          sx={{
            width: 32,
            height: 1,
            backgroundColor: "#e8e8e8",
            mx: "auto",
            mb: 2,
          }}
        />
        <Typography sx={{ fontSize: "0.8rem", letterSpacing: "0.1em", color: "#999", textTransform: "uppercase" }}>
          {citazione.autore}
        </Typography>
      </Container>
    </Box>

    {/* ── SERVIZI ───────────────────────────────────── */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
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
          Cosa faccio
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 8,
          }}
        >
          I miei servizi
        </Typography>

        <Grid container spacing={4}>
          {servizi.map((s) => (
            <Grid item xs={12} md={6} key={s.titolo}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  p: { xs: 4, md: 5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e8e8e8",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#1a1a1a", mb: 2 }}
                >
                  {s.titolo}
                </Typography>
                <Divider sx={{ mb: 3, borderColor: "#e8e8e8" }} />
                <Typography
                  variant="body2"
                  sx={{ color: "#666", lineHeight: 1.8, mb: 3 }}
                >
                  {s.descrizione}
                </Typography>
                <Box
                  component="ul"
                  sx={{ pl: 0, mb: 4, listStyle: "none", flexGrow: 1 }}
                >
                  {s.punti.map((p) => (
                    <Box
                      component="li"
                      key={p}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                        mb: 1.2,
                        fontSize: "0.875rem",
                        color: "#444",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          backgroundColor: "#1a1a1a",
                          mt: "8px",
                          flexShrink: 0,
                        }}
                      />
                      {p}
                    </Box>
                  ))}
                </Box>
                <Button
                  href={s.ctaHref}
                  disableElevation
                  sx={{
                    alignSelf: "flex-start",
                    backgroundColor: "#1a1a1a",
                    color: "#fff",
                    borderRadius: 0,
                    px: 3,
                    py: 1.2,
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    "&:hover": { backgroundColor: "#444" },
                    transition: "background-color 0.3s ease",
                  }}
                >
                  {s.cta}
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* ── CHI SONO ──────────────────────────────────── */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Placeholder immagine */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "1/1",
                backgroundColor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #e8e8e8",
              }}
            >
              <Typography sx={{ color: "#aaa", fontSize: "0.875rem" }}>
                Foto profilo
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
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
              Chi sono
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 700,
                color: "#1a1a1a",
                mb: 3,
              }}
            >
              DJ Woolrich
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
            >
              Sono un DJ specializzato in matrimoni ed eventi privati. Con anni
              di esperienza sul campo, so come leggere la sala e creare
              l'atmosfera giusta per ogni momento della vostra celebrazione.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#666", lineHeight: 1.9, mb: 4 }}
            >
              Ogni evento è unico: ascolto le vostre storie, i vostri gusti
              musicali e costruisco insieme a voi la colonna sonora perfetta
              per un giorno che non dimenticherete.
            </Typography>
            <Button
              href="/about"
              disableElevation
              sx={{
                backgroundColor: "transparent",
                color: "#1a1a1a",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: "1px solid #1a1a1a",
                "&:hover": { backgroundColor: "#f5f5f5" },
                transition: "background-color 0.3s ease",
              }}
            >
              Scopri di più
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* ── CTA FINALE ────────────────────────────────── */}
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#1a1a1a",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            fontWeight: 700,
            color: "#fff",
            mb: 2,
          }}
        >
          Hai una data in mente?
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(255,255,255,0.6)", mb: 5, lineHeight: 1.8 }}
        >
          Contattami per verificare la disponibilità e ricevere un preventivo
          personalizzato senza impegno.
        </Typography>
        <Button
          href="/contact"
          disableElevation
          sx={{
            backgroundColor: "#fff",
            color: "#1a1a1a",
            borderRadius: 0,
            px: 5,
            py: 1.8,
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            "&:hover": { backgroundColor: "#e8e8e8" },
            transition: "background-color 0.3s ease",
          }}
        >
          Contattami ora
        </Button>
      </Container>
    </Box>

  </Layout>
)

export default IndexPage

export const Head = () => <title>DJ Woolrich — Musica per i tuoi momenti speciali</title>
