import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { immaginiServizi } from "../images/illustrazioni"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from "@mui/material"

// Tutti i servizi
const allServices = [
  {
    titolo: "DJ Matrimonio",
    sottotitolo: "La musica perfetta per il vostro grande giorno",
  },
  {
    titolo: "DJ per Feste Private",
    sottotitolo: "Anima la vostra festa con la giusta colonna sonora",
  },
  {
    titolo: "DJ per Corporate Events",
    sottotitolo: "Professionisti che capiscono il vostro stile aziendale",
  },
  {
    titolo: "DJ per Feste di Compleanno",
    sottotitolo: "Rendi il compleanno un giorno indimenticabile",
  },
  {
    titolo: "Impianto Audio e Luci Professionali",
    sottotitolo: "Tecnologia di qualità per il vostro evento",
  },
  {
    titolo: "Karaoke DJ",
    sottotitolo: "Il divertimento della musica dal vivo",
  },
]

// Citazione
const citazione = {
  testo: "La musica — quella la ricorderete per sempre.",
  autore: "DJ Woolrich",
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(name: { eq: "hero" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      profileImage: file(name: { eq: "profile" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const heroImg = getImage(data.heroImage)
  const profileImg = getImage(data.profileImage)

  return (
    <Layout>

    {/* ── HERO ──────────────────────────────────────── */}
    <Box
      sx={{
        minHeight: { xs: "60vh", md: "80vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 10, md: 0 },
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {heroImg && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            "& .gatsby-image-wrapper": {
              width: "100%",
              height: "100%",
            },
          }}
        >
          <GatsbyImage image={heroImg} alt="DJ Hero Background" />
        </Box>
      )}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid item size={{ xs: 12, md: 12 }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                color: "rgba(255, 255, 255, 0.7)",
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
                color: "#fff",
                mb: 3,
              }}
            >
            Musica per i tuoi momenti speciali.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.05rem",
                color: "rgba(255, 255, 255, 0.85)",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              DJ matrimonio e canzoni su misura. 
              <br/>
              Porto la musica giusta nel momento giusto, perché i ricordi durano per sempre.
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
                  color: "#fff",
                  borderRadius: 0,
                  px: 4,
                  py: 1.5,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: "1px solid #fff",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  transition: "background-color 0.3s ease",
                }}
              >
                Scopri i servizi
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      </Box>
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

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {allServices.map((service) => (
            <Grid item size={{ xs: 12, md: 6, lg: 4 }} key={service.titolo}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e8e8e8",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                    borderColor: "#1a1a1a",
                  },
                }}
              >
                <Box
                  component="img"
                  src={immaginiServizi[service.titolo]}
                  alt={service.titolo}
                  loading="lazy"
                  sx={{ width: "100%", aspectRatio: "3 / 2", objectFit: "cover", display: "block" }}
                />
                <Box sx={{ p: 4, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#1a1a1a",
                    mb: 2,
                    fontSize: "1rem",
                  }}
                >
                  {service.titolo}
                </Typography>
                <Typography
                  sx={{
                    color: "#666",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  {service.sottotitolo}
                </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center" }}>
          <Button
            href="/services"
            disableElevation
            sx={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              borderRadius: 0,
              px: 5,
              py: 1.5,
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "#444" },
              transition: "background-color 0.3s ease",
            }}
          >
            Scopri Tutti i Dettagli
          </Button>
        </Box>
      </Container>
    </Box>

    {/* ── CHI SONO ──────────────────────────────────── */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Foto profilo DJ */}
          <Grid item size={{ xs: 12, md: 5 }}>
            {profileImg && (
              <Box
                sx={{
                  border: "1px solid #e8e8e8",
                  overflow: "hidden",
                }}
              >
                <GatsbyImage image={profileImg} alt="DJ Woolrich" />
              </Box>
            )}
          </Grid>

          <Grid item size={{ xs: 12, md: 7 }}>
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
}

export default IndexPage

export const Head = () => <title>DJ Woolrich — Musica per i tuoi momenti speciali</title>
