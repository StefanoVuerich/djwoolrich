import React from "react"
import Layout from "../components/Layout"
import Breadcrumb from "../components/Breadcrumb"
import {
  Box,
  Container,
  Typography,
} from "@mui/material"

const PrivacyPage = () => (
  <Layout>

    {/* ── BREADCRUMB ────────────────────────────────── */}
    <Breadcrumb
      items={[
        { label: "Home", link: "/" },
        { label: "Privacy Policy", active: true },
      ]}
    />

    {/* ── HERO ──────────────────────────────────────── */}
    <Box
      sx={{
        minHeight: { xs: "40vh", md: "50vh" },
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        py: { xs: 10, md: 0 },
      }}
    >
      <Container maxWidth="lg">
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
          Privacy Policy
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.05rem",
            color: "#666",
            lineHeight: 1.8,
            maxWidth: 600,
          }}
        >
          Come proteggiamo i vostri dati personali
        </Typography>
      </Container>
    </Box>

    {/* ── CONTENUTO ─────────────────────────────────── */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            1. Titolare del Trattamento
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            DJ Woolrich è titolare del trattamento dei dati personali forniti attraverso il nostro sito web. Per qualsiasi domanda relativa alla privacy, potete contattarci a info@djwoolrich.it.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            2. Dati Raccolti
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
          >
            Raccogliamo i seguenti dati personali quando compilate il modulo di contatto:
          </Typography>
          <Box component="ul" sx={{ pl: 2, color: "#666", lineHeight: 1.9 }}>
            <li>Nome completo</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono</li>
            <li>Tipo di servizio richiesto</li>
            <li>Data dell'evento (se prevista)</li>
            <li>Messaggio o richiesta specifica</li>
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            3. Base Giuridica del Trattamento
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Trattiamo i vostri dati personali sulla base del vostro consenso esplicito, fornito quando compilate il modulo di contatto. Potete ritirare il consenso in qualsiasi momento contattandoci.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            4. Finalità del Trattamento
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
          >
            I vostri dati vengono utilizzati esclusivamente per:
          </Typography>
          <Box component="ul" sx={{ pl: 2, color: "#666", lineHeight: 1.9 }}>
            <li>Rispondere alle vostre richieste di informazioni</li>
            <li>Verificare la disponibilità per gli eventi</li>
            <li>Fornire preventivi personalizzati</li>
            <li>Comunicazioni relative agli eventi prenotati</li>
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            5. Destinatari dei Dati
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            I vostri dati non vengono condivisi con terze parti, salvo quando necessario per l'esecuzione dei servizi richiesti (ad esempio, fornitori di servizi di email o hosting).
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            6. Periodo di Conservazione
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            I dati personali vengono conservati per il tempo necessario a completare la comunicazione e a fornire i servizi richiesti. Successivamente, vengono cancellati o anonimizzati, salvo obblighi legali di conservazione.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            7. Diritti dell'Interessato
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
          >
            In conformità al GDPR, avete i seguenti diritti:
          </Typography>
          <Box component="ul" sx={{ pl: 2, color: "#666", lineHeight: 1.9 }}>
            <li>Diritto di accesso ai vostri dati personali</li>
            <li>Diritto di rettifica dei dati inesatti</li>
            <li>Diritto all'oblio (cancellazione)</li>
            <li>Diritto a limitare il trattamento</li>
            <li>Diritto alla portabilità dei dati</li>
            <li>Diritto di opposizione al trattamento</li>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mt: 2 }}
          >
            Per esercitare tali diritti, contattate info@djwoolrich.it.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            8. Sicurezza dei Dati
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Implementiamo misure di sicurezza appropriate per proteggere i vostri dati personali da accessi non autorizzati, alterazione, divulgazione o distruzione.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            9. Modifiche alla Privacy Policy
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento. Vi invitiamo a consultarla periodicamente per restare informati.
          </Typography>
        </Box>

        <Box sx={{ p: 4, backgroundColor: "#f5f5f5", border: "1px solid #e8e8e8" }}>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            <strong>Ultima modifica:</strong> {new Date().toLocaleDateString('it-IT')}
            <br />
            Per domande sulla privacy, contattate info@djwoolrich.it
          </Typography>
        </Box>
      </Container>
    </Box>

  </Layout>
)

export default PrivacyPage

export const Head = () => <title>Privacy Policy — DJ Woolrich</title>
