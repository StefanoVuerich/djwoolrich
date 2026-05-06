import React from "react"
import { Box, Container, Typography, Grid, Link } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import IconButton from "@mui/material/IconButton"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2c3e50",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Colonna 1: Chi Siamo */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              DJ Woolrich
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.8 }}>
              Musica dal vivo per i tuoi eventi speciali. Con esperienza nel settore,
              offriamo intrattenimento musicale professionale di qualità.
            </Typography>
          </Grid>

          {/* Colonna 2: Link Veloci */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Link Veloci
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="/"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Chi Siamo
              </Link>
              <Link
                href="/services"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Servizi
              </Link>
              <Link
                href="/contact"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Contatti
              </Link>
            </Box>
          </Grid>

          {/* Colonna 3: Social Media */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Seguici
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                color="inherit"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divisore */}
        <Box sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", py: 3 }}>
          <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.6)", textAlign: "center" }}>
            &copy; {currentYear} DJ Woolrich. Tutti i diritti riservati.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
