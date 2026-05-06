import React from "react"
import { Box } from "@mui/material"
import Navbar from "./Navbar"
import Footer from "./Footer"

// Layout wrapper per visualizzare Navbar e Footer su tutte le pagine
const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
