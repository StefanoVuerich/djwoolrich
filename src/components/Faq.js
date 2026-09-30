import React from "react"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// Costruisce lo schema FAQPage da [{ domanda, risposta }]
export const faqSchema = voci => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: voci.map(voce => ({
    "@type": "Question",
    name: voce.domanda,
    acceptedAnswer: { "@type": "Answer", text: voce.risposta },
  })),
})

const Faq = ({ titolo = "Domande frequenti", voci }) => (
  <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
    <Container maxWidth="md">
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.75rem", md: "2.25rem" },
          fontWeight: 700,
          color: "#1a1a1a",
          textAlign: "center",
          mb: 6,
        }}
      >
        {titolo}
      </Typography>
      {voci.map(voce => (
        <Accordion
          key={voce.domanda}
          disableGutters
          elevation={0}
          square
          sx={{ borderBottom: "1px solid #e8e8e8", "&:before": { display: "none" } }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h3" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
              {voce.domanda}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#666", lineHeight: 1.8 }}>
              {voce.risposta}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
)

export default Faq
