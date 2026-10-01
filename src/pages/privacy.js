import React from "react"
import Layout from "../components/Layout"
import Breadcrumb from "../components/Breadcrumb"
import siteConfig from "../siteconfig.json"
import {
  Box,
  Container,
  Typography,
} from "@mui/material"
import Seo from "../components/Seo"

// Data fissa di ultimo aggiornamento (da modificare solo quando cambia il testo)
const ULTIMA_MODIFICA = "01/10/2026"

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
            {siteConfig.name} è titolare del trattamento dei dati personali forniti attraverso il nostro sito web. Per qualsiasi domanda relativa alla privacy, potete contattarci a {siteConfig.email}.
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
            5. Destinatari dei Dati e Processori
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
          >
            I vostri dati non vengono condivisi con terze parti, salvo quando necessario per l'esecuzione dei servizi richiesti.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, fontWeight: 600, mb: 1 }}
          >
            EmailJS - Responsabile del Trattamento:
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            I dati personali forniti tramite il modulo di contatto (nome, email, telefono, messaggio) vengono inviati a <strong>EmailJS</strong> (emailjs.com), un servizio di elaborazione email che funge da Responsabile del Trattamento dei Dati. EmailJS elabora i vostri dati esclusivamente per inviare la email a {siteConfig.name}. I dati non vengono conservati da EmailJS oltre il tempo necessario per l'invio. Per ulteriori informazioni sulla privacy di EmailJS, consultate la loro{" "}
            <Typography
              component="a"
              href="https://www.emailjs.com/legal/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#1a1a1a",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Privacy Policy
            </Typography>.
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
            I dati personali vengono conservati per il seguente periodo:
          </Typography>
          <Box component="ul" sx={{ pl: 2, color: "#666", lineHeight: 1.9, mt: 2 }}>
            <li><strong>Contatti generici:</strong> 12 mesi dopo l'ultimo contatto</li>
            <li><strong>Clienti con evento prenotato:</strong> fino a 12 mesi dopo la conclusione dell'evento</li>
            <li><strong>Obblighi contabili:</strong> 10 anni (per legge italiana)</li>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mt: 2 }}
          >
            Successivamente al termine previsto, i dati vengono cancellati o anonimizzati, salvo diversi obblighi legali di conservazione.
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
            Per esercitare tali diritti, contattate {siteConfig.email}.
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
            9. Come Ritirare il Consenso
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Potete ritirare il vostro consenso al trattamento dei dati personali in qualsiasi momento contattandoci a <strong>{siteConfig.email}</strong>. Una volta ritirato il consenso, non continueremo a elaborare i vostri dati per le finalità comunicate, salvo obblighi legali.
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
            10. Autorità di Controllo
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
          >
            Se ritenete che il vostro diritto alla privacy sia stato violato, potete presentare un reclamo all'autorità di protezione dei dati competente:
          </Typography>
          <Box sx={{
            backgroundColor: "#f5f5f5",
            p: 3,
            border: "1px solid #e8e8e8",
            mb: 2,
          }}>
            <Typography variant="body2" sx={{ color: "#1a1a1a", fontWeight: 600, mb: 1 }}>
              Garante per la Protezione dei Dati Personali (Italia)
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.9 }}>
              Piazza Venezia 11 - 00187 Roma<br />
              <Typography
                component="a"
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#1a1a1a",
                  fontWeight: 600,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                www.garanteprivacy.it
              </Typography>
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
            11. Modifiche alla Privacy Policy
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
            <strong>Ultima modifica:</strong> {ULTIMA_MODIFICA}
            <br />
            Per domande sulla privacy, contattate {siteConfig.email}
          </Typography>
        </Box>
      </Container>
    </Box>

  </Layout>
)

export default PrivacyPage

export const Head = () => (
  <Seo
    title={`Privacy Policy — ${siteConfig.name}`}
    path="/privacy/"
    noindex
  />
)
