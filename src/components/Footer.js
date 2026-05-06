import React from "react"
import { Box, Container, Typography, Grid, Link } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"
import IconButton from "@mui/material/IconButton"

const navLinks = [
  { label: "Chi Siamo", href: "/about" },
  { label: "DJ Matrimonio", href: "/services" },
  { label: "Canzoni Su Misura", href: "/custom-songs" },
  { label: "Blog", href: "/blog" },
  { label: "Contatti", href: "/contact" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie" },
]

const socialLinks = [
  { icon: <InstagramIcon fontSize="small" />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FacebookIcon fontSize="small" />, href: "https://facebook.com", label: "Facebook" },
  { icon: <YouTubeIcon fontSize="small" />, href: "https://youtube.com", label: "YouTube" },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #e8e8e8",
        pt: 8,
        pb: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: 6 }}>

          {/* Logo e descrizione */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#1a1a1a",
                mb: 2,
              }}
            >
              DJ Woolrich
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", lineHeight: 1.8, mb: 3, maxWidth: 280 }}
            >
              Musica per i tuoi momenti speciali. Matrimoni, eventi e canzoni
              su misura con professionalità e passione.
            </Typography>

            {/* Icone social */}
            <Box sx={{ display: "flex", gap: 0.5, ml: -1 }}>
              {socialLinks.map((s) => (
                <IconButton
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  disableRipple
                  sx={{
                    color: "#666",
                    p: 1,
                    borderRadius: 0,
                    "&:hover": { color: "#1a1a1a", backgroundColor: "transparent" },
                    transition: "color 0.3s ease",
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Link di navigazione */}
          <Grid item size={{ xs: 6, md: 3 }}>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                color: "#1a1a1a",
                display: "block",
                mb: 2,
              }}
            >
              Navigazione
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  sx={{
                    fontSize: "0.875rem",
                    color: "#666",
                    textDecoration: "none",
                    "&:hover": { color: "#1a1a1a" },
                    transition: "color 0.3s ease",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contatti */}
          <Grid item size={{ xs: 6, md: 5 }}>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                color: "#1a1a1a",
                display: "block",
                mb: 2,
              }}
            >
              Contatti
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              <Typography variant="body2" sx={{ color: "#666", fontSize: "0.875rem" }}>
                Disponibile su appuntamento
              </Typography>
              <Link
                href="mailto:info@djwoolrich.it"
                sx={{
                  fontSize: "0.875rem",
                  color: "#666",
                  textDecoration: "none",
                  "&:hover": { color: "#1a1a1a" },
                  transition: "color 0.3s ease",
                }}
              >
                info@djwoolrich.it
              </Link>
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: "0.875rem",
                  color: "#666",
                  textDecoration: "none",
                  "&:hover": { color: "#1a1a1a" },
                  transition: "color 0.3s ease",
                }}
              >
                WhatsApp
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Riga inferiore */}
        <Box
          sx={{
            borderTop: "1px solid #e8e8e8",
            pt: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: "#999", fontSize: "0.8rem" }}>
            &copy; {currentYear} DJ Woolrich. Tutti i diritti riservati.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                sx={{
                  fontSize: "0.8rem",
                  color: "#999",
                  textDecoration: "none",
                  "&:hover": { color: "#1a1a1a" },
                  transition: "color 0.3s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
