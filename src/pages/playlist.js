import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Button, Container, Typography } from "@mui/material"
import Layout from "../components/Layout"
import Breadcrumb from "../components/Breadcrumb"
import PlaylistSection from "../components/PlaylistSection"
import Seo, { breadcrumbSchema } from "../components/Seo"

const PlaylistPage = () => (
  <Layout>
    {/* ── INTESTAZIONE ──────────────────────────────── */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#1a1a1a", textAlign: "center" }}>
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            color: "rgba(255, 255, 255, 0.6)",
            display: "block",
            mb: 2,
          }}
        >
          Playlist
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.25rem", md: "3.25rem" },
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#fff",
            mb: 3,
          }}
        >
          La musica del momento, per ogni occasione
        </Typography>
        <Typography
          sx={{
            fontSize: "1.05rem",
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: 1.8,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Le canzoni più ascoltate in questo momento, raccolte per genere e per tipo di evento. Ascolta le anteprime e scopri che atmosfera può avere la tua serata.
        </Typography>
      </Container>
    </Box>

    {/* ── BREADCRUMB ────────────────────────────────── */}
    <Breadcrumb
      items={[
        { label: "Home", link: "/" },
        { label: "Playlist", active: true },
      ]}
    />

    {/* ── PLAYLIST ──────────────────────────────────── */}
    <PlaylistSection
      sfondo="#fff"
      overline="Classifiche aggiornate"
      titolo="Scegli una playlist"
    />

    {/* ── CTA ───────────────────────────────────────── */}
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#f5f5f5", textAlign: "center" }}>
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: 700, color: "#1a1a1a", mb: 2 }}
        >
          Vuoi la colonna sonora perfetta per il tuo evento?
        </Typography>
        <Typography sx={{ color: "#666", mb: 4, lineHeight: 1.8 }}>
          Raccontami il tuo evento: costruisco insieme a te la scaletta giusta.
        </Typography>
        <Button
          component={GatsbyLink}
          to="/contact/#form-contatti"
          disableElevation
          sx={{
            backgroundColor: "#1a1a1a",
            color: "#fff",
            borderRadius: 0,
            px: 4,
            py: 1.5,
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            "&:hover": { backgroundColor: "#444" },
            transition: "background-color 0.3s ease",
          }}
        >
          Richiedi un preventivo
        </Button>
      </Container>
    </Box>
  </Layout>
)

export default PlaylistPage

export const Head = () => (
  <Seo
    title="Playlist | Le canzoni più popolari del momento"
    description="Le canzoni più ascoltate del momento, raccolte in playlist per genere e per evento: matrimonio, party, aperitivo. Ascolta le anteprime."
    path="/playlist/"
    schemas={[breadcrumbSchema([{ nome: "Home", path: "/" }, { nome: "Playlist", path: "/playlist/" }])]}
  />
)
