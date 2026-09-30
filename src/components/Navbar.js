import React, { useState } from "react"
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Container, Box } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import { Link as GatsbyLink } from "gatsby"
import siteConfig from "../siteconfig.json"

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Chi Siamo", to: "/about" },
  { label: "DJ Matrimoni", to: "/dj-matrimoni" },
  { label: "Servizi", to: "/services" },
  { label: "Contatti", to: "/contact" },
]

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget)
  const handleMenuClose = () => setAnchorEl(null)

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e8e8e8",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>

          {/* Logo */}
          <Typography
            variant="h6"
            component={GatsbyLink}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              textDecoration: "none",
              "&:hover": { opacity: 0.6 },
              transition: "opacity 0.3s ease",
            }}
          >
            {siteConfig.name}
          </Typography>

          {/* Menu desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
            {menuItems.map((item) => (
              <Button
                key={item.to}
                component={GatsbyLink}
                to={item.to}
                disableRipple
                sx={{
                  color: "#1a1a1a",
                  textTransform: "none",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  px: 2,
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                    opacity: 0.5,
                  },
                  transition: "opacity 0.3s ease",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Hamburger mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={handleMenuOpen}
              disableRipple
              sx={{ color: "#1a1a1a", p: 1 }}
              aria-label="apri menu"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              elevation={0}
              PaperProps={{
                sx: {
                  width: "100vw",
                  maxWidth: "100%",
                  left: "0 !important",
                  right: 0,
                  borderRadius: 0,
                  border: "none",
                  borderTop: "1px solid #e8e8e8",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.06)",
                  py: 1,
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.to}
                  component={GatsbyLink}
                  to={item.to}
                  onClick={handleMenuClose}
                  sx={{
                    fontSize: "1rem",
                    py: 1.5,
                    px: 3,
                    color: "#1a1a1a",
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
