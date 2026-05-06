import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Breadcrumb from "../components/Breadcrumb"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Divider,
} from "@mui/material"

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

    {/* ── BREADCRUMB ────────────────────────────────── */}
    <Breadcrumb
      items={[
        { label: "Home", link: "/" },
        { label: "Chi Siamo", active: true },
      ]}
    />

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
          <Grid item size={{ xs: 12, md: 6 }}>
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
              La mia storia
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
              DJ Woolrich
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
              Un DJ che non suona solo musica, ma racconta storie. Per me la musica
              è lo strumento per far rivivere il cuore di ogni evento, dal primo
              momento del giorno speciale fino all'ultimo ballo.
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
                Contattami
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

          {/* Foto hero DJ */}
          <Grid item size={{ xs: 12, md: 6 }}>
            {heroImg && (
              <Box
                sx={{
                  overflow: "hidden",
                }}
              >
                <GatsbyImage image={heroImg} alt="DJ Woolrich - Foto Hero" />
              </Box>
            )}
          </Grid>
        </Grid>
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
                <GatsbyImage image={profileImg} alt="DJ Woolrich - Foto Profilo" />
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
              Presentazione
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
              Una passione che
              <br />
              diventa realtà
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
            >
              Sono DJ Woolrich, un artista che scrive, compone e produce musica
              originale. Da anni lavoro nel mondo della musica matrimoniale nel
              Nord-Est Italia, portando la mia visione personale di cosa significhi
              dirigere la colonna sonora del giorno più importante della vostra vita.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
            >
              Non credo che il ruolo del DJ sia semplicemente premere play. Per me,
              la musica non è solo far ballare le persone. È raccontare storie. È
              accompagnare ogni momento della vostra celebrazione con consapevolezza,
              leggendo la sala e creando quella atmosfera magica che resterà nei vostri
              ricordi per sempre.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#666", lineHeight: 1.9 }}
            >
              Lavoro come direttore musicale: penso al timing, alla scaletta, al flusso
              emotivo della serata. Ascolto la vostra storia, comprendo i vostri gusti
              e costruisco con voi una colonna sonora unica, personalizzata, che riflette
              chi siete davvero.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* ── APPROCCIO ─────────────────────────────────── */}
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
          Metodologia
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
          Il mio approccio
        </Typography>

        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 6 }}>
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
                Ascolto e Comprensione
              </Typography>
              <Divider sx={{ mb: 3, borderColor: "#e8e8e8" }} />
              <Typography
                variant="body2"
                sx={{ color: "#666", lineHeight: 1.8 }}
              >
                Prima di ogni evento, mi prendo il tempo per conoscervi. Qual è la
                vostra storia? Quali sono i vostri gusti musicali? Quali momenti
                volete che siano indimenticabili? Le risposte diventano la base della
                mia scaletta.
              </Typography>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
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
                Direzione Musicale
              </Typography>
              <Divider sx={{ mb: 3, borderColor: "#e8e8e8" }} />
              <Typography
                variant="body2"
                sx={{ color: "#666", lineHeight: 1.8 }}
              >
                Non improvviso mai. Preparo una scaletta dettagliata che segue il
                ritmo della vostra giornata, considerando ogni transizione, ogni
                momento solenne e ogni istante di pura festa. La musica giusta al
                momento giusto.
              </Typography>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
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
                Composizioni Originali
              </Typography>
              <Divider sx={{ mb: 3, borderColor: "#e8e8e8" }} />
              <Typography
                variant="body2"
                sx={{ color: "#666", lineHeight: 1.8 }}
              >
                Offro anche il servizio di composizione di canzoni personalizzate. Una
                musica unica, originale, creata specificatamente per voi. Perfetta per
                la prima danza, per sorprendere la persona cara, per immortalare un
                momento.
              </Typography>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
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
                Leggerezza e Adattamento
              </Typography>
              <Divider sx={{ mb: 3, borderColor: "#e8e8e8" }} />
              <Typography
                variant="body2"
                sx={{ color: "#666", lineHeight: 1.8 }}
              >
                Anche con la migliore preparazione, ogni evento è unico. Sono pronto ad
                adattarmi al momento, a leggere l'energia della sala e a fare le scelte
                giuste per mantenere l'atmosfera perfetta.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* ── CITAZIONE ─────────────────────────────────── */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#1a1a1a" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "#fff",
            mb: 2,
          }}
        >
          "La musica per me non è solo far ballare le persone.
          <br />
          È raccontare storie."
        </Typography>
        <Box
          sx={{
            width: 32,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.3)",
            mx: "auto",
            mb: 2,
          }}
        />
        <Typography sx={{ fontSize: "0.8rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>
          DJ Woolrich
        </Typography>
      </Container>
    </Box>

    {/* ── CTA FINALE ────────────────────────────────── */}
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
          }}
        >
          Parliamo del vostro giorno
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#666", mb: 5, lineHeight: 1.8 }}
        >
          Se riconoscete in questa filosofia l'approccio che cercate, sarò felice
          di ascoltare la vostra storia e di lavorare insieme a voi per creare la
          colonna sonora del vostro momento speciale.
        </Typography>
        <Button
          href="/contact"
          disableElevation
          sx={{
            backgroundColor: "#1a1a1a",
            color: "#fff",
            borderRadius: 0,
            px: 5,
            py: 1.8,
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            "&:hover": { backgroundColor: "#444" },
            transition: "background-color 0.3s ease",
          }}
        >
          Contattami
        </Button>
      </Container>
    </Box>

  </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Chi sono — DJ Woolrich</title>
