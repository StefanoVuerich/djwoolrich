import React from "react"
import Layout from "../components/Layout"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material"
import PhoneIcon from "@mui/icons-material/Phone"
import FavoriteIcon from "@mui/icons-material/Favorite"
import MusicNoteIcon from "@mui/icons-material/MusicNote"

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2c3e50 0%, #3d5a80 100%)",
          color: "white",
          py: { xs: 6, md: 10 },
          textAlign: "center",
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "3.5rem" },
            }}
          >
            DJ Woolrich
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              mb: 4,
              fontSize: { xs: "1rem", md: "1.5rem" },
              opacity: 0.9,
            }}
          >
            Musica per i tuoi momenti speciali
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#FFA500",
              color: "white",
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#FF8C00",
              },
            }}
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contattami su WhatsApp
          </Button>
        </Container>
      </Box>

      {/* Chi Siamo Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Immagine placehoder */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#e0e0e0",
                height: 400,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#999", textAlign: "center" }}
              >
                [Foto Profilo DJ]
              </Typography>
            </Box>
          </Grid>

          {/* Testo */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "#2c3e50",
              }}
            >
              Chi sono
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                color: "#555",
                fontSize: "1.1rem",
              }}
            >
              Sono DJ Woolrich, specializzato nella musica per i vostri momenti
              più importanti. Con anni di esperienza nel settore, garantisco
              intrattenimento musicale di qualità per matrimoni, feste e
              celebrazioni speciali.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                color: "#555",
                fontSize: "1.1rem",
              }}
            >
              La musica - quella la ricorderete per sempre. Questo è il mio
              motto. Mi impegno a creare l’atmosfera perfetta per il vostro
              evento.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#2c3e50",
                color: "#2c3e50",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              Scopri di più
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Servizi Section */}
      <Box sx={{ backgroundColor: "#f9f9f9", py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 6,
              textAlign: "center",
              color: "#2c3e50",
            }}
          >
            I Miei Servizi
          </Typography>

          <Grid container spacing={4}>
            {/* Servizio 1: DJ Matrimonio */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#ff6b6b",
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: 80, color: "white" }} />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: 700, color: "#2c3e50" }}
                  >
                    DJ Matrimonio
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#666", lineHeight: 1.8, mb: 2 }}
                  >
                    Trasforma il tuo matrimonio in una festa indimenticabile.
                    Musica selezionata su misura per la vostra cerimonia e
                    ricevimento.
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    <li>Cerimonia e ricevimento</li>
                    <li>Musica personalizzata</li>
                    <li>Impianto audio professionale</li>
                    <li>Esperienza e professionalità</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Servizio 2: Canzoni Su Misura */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#4ecdc4",
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MusicNoteIcon sx={{ fontSize: 80, color: "white" }} />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: 700, color: "#2c3e50" }}
                  >
                    Canzoni Su Misura
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#666", lineHeight: 1.8, mb: 2 }}
                  >
                    Momenti speciali meritano musica speciale. Creo canzoni
                    personalizzate per le vostre occasioni più importanti.
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    <li>Musica personalizzata</li>
                    <li>Per matrimoni e celebrazioni</li>
                    <li>Testi e melodie uniche</li>
                    <li>Ricordi che durano per sempre</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonial Section */}
      <Container maxWidth="md" sx={{ mb: 8, textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontStyle: "italic",
            color: "#2c3e50",
            fontWeight: 300,
            mb: 2,
            fontSize: "1.5rem",
            lineHeight: 1.8,
          }}
        >
          "La musica - quella la ricorderete per sempre"
        </Typography>
        <Typography variant="body2" sx={{ color: "#999" }}>
          — DJ Woolrich
        </Typography>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ backgroundColor: "#2c3e50", color: "white", py: 8 }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            Pronto a rendere il tuo evento indimenticabile?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: "1.1rem",
              opacity: 0.9,
            }}
          >
            Contattami per una consulenza gratuita
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                sx={{
                  backgroundColor: "#FFA500",
                  color: "white",
                  px: 4,
                  "&:hover": {
                    backgroundColor: "#FF8C00",
                  },
                }}
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 4,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                href="mailto:email@example.com"
              >
                Email
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>DJ Woolrich - Musica per i tuoi momenti speciali</title>
