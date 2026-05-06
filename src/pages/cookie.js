import React from "react"
import Layout from "../components/Layout"
import Breadcrumb from "../components/Breadcrumb"
import {
  Box,
  Container,
  Typography,
} from "@mui/material"

const CookiePage = () => (
  <Layout>

    {/* ── BREADCRUMB ────────────────────────────────── */}
    <Breadcrumb
      items={[
        { label: "Home", link: "/" },
        { label: "Cookie Policy", active: true },
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
          Cookie Policy
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
          Informazioni sull'uso dei cookie sul nostro sito
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
            1. Cosa Sono i Cookie
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            I cookie sono piccoli file di testo che vengono memorizzati sul vostro dispositivo quando visitate il nostro sito web. Questi file contengono informazioni che ci aiutano a migliorare la vostra esperienza di navigazione.
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
            2. Tipologie di Cookie Utilizzati
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
          >
            Utilizziamo i seguenti tipi di cookie:
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#1a1a1a",
                mb: 1,
              }}
            >
              Cookie Tecnici
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", lineHeight: 1.9 }}
            >
              Necessari per il corretto funzionamento del sito web. Questi cookie non richiedono il vostro consenso esplicito.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#1a1a1a",
                mb: 1,
              }}
            >
              Cookie di Analisi
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", lineHeight: 1.9 }}
            >
              Ci aiutano a capire come utilizzate il nostro sito, quali pagine visitate e quali azioni compite. Questi cookie raccolgono dati in forma anonima.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#1a1a1a",
                mb: 1,
              }}
            >
              Cookie di Preferenza
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", lineHeight: 1.9 }}
            >
              Utilizzati per ricordare le vostre preferenze, come le impostazioni di lingua o tema, per personalizzare la vostra esperienza.
            </Typography>
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
            3. Strumenti di Analisi
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Utilizziamo Google Analytics per raccogliere informazioni su come gli utenti interagiscono con il nostro sito. Questi dati vengono trattati secondo la Google Analytics Privacy Policy.
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
            4. Come Gestire i Cookie
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
          >
            Potete controllare e/o eliminare i cookie in qualsiasi momento. La maggior parte dei browser vi permette di:
          </Typography>
          <Box component="ul" sx={{ pl: 2, color: "#666", lineHeight: 1.9 }}>
            <li>Visualizzare i cookie salvati sul vostro dispositivo</li>
            <li>Eliminare i cookie specifici</li>
            <li>Bloccare tutti i cookie</li>
            <li>Ricevere una notifica quando viene impostato un cookie</li>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mt: 2 }}
          >
            Per istruzioni su come gestire i cookie nel vostro browser, consultate le impostazioni di privacy del vostro dispositivo.
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
            5. Cookie di Terze Parti
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Alcuni cookie possono essere impostati da servizi di terze parti (ad esempio, piattaforme di social media). Non abbiamo il controllo diretto su questi cookie. Vi invitiamo a consultare la Cookie Policy delle terze parti per saperne di più.
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
            6. Consenso ai Cookie
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Quando visitate il nostro sito per la prima volta, vi chiederemo il consenso per l'uso di cookie non tecnici. Potete modificare le vostre preferenze in qualsiasi momento.
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
            7. Contatti e Diritti
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Se avete domande sull'uso dei cookie o desiderate ritirare il vostro consenso, potete contattarci a info@djwoolrich.it. Avete anche il diritto di presentare un reclamo all'autorità di protezione dei dati competente.
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
            8. Modifiche a Questa Policy
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Ci riserviamo il diritto di aggiornare questa Cookie Policy per riflettere i cambiamenti nei nostri processi. Vi invitiamo a consultarla regolarmente.
          </Typography>
        </Box>

        <Box sx={{ p: 4, backgroundColor: "#f5f5f5", border: "1px solid #e8e8e8" }}>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            <strong>Ultima modifica:</strong> {new Date().toLocaleDateString('it-IT')}
            <br />
            Per domande sui cookie, contattate info@djwoolrich.it
          </Typography>
        </Box>
      </Container>
    </Box>

  </Layout>
)

export default CookiePage

export const Head = () => <title>Cookie Policy — DJ Woolrich</title>
