import React from "react"
import { Box, Container, Typography } from "@mui/material"
import { Link as GatsbyLink } from "gatsby"

const Breadcrumb = ({ items }) => {
  return (
    <Box sx={{ backgroundColor: "#fff", borderBottom: "1px solid #e8e8e8", py: 2 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <Typography
                  sx={{
                    color: "#999",
                    fontSize: "0.875rem",
                    mx: 0.5,
                  }}
                >
                  /
                </Typography>
              )}
              {item.link ? (
                <Typography
                  component={GatsbyLink}
                  to={item.link}
                  sx={{
                    fontSize: "0.875rem",
                    color: "#1a1a1a",
                    textDecoration: "none",
                    fontWeight: item.active ? 500 : 400,
                    "&:hover": { opacity: 0.6 },
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {item.label}
                </Typography>
              ) : (
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "#666",
                    fontWeight: item.active ? 500 : 400,
                  }}
                >
                  {item.label}
                </Typography>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Breadcrumb
