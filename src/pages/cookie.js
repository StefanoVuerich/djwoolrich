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
            2. Tipologie di Cookie Utilizzati e Durata
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
              Cookie Tecnici (Sessione)
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", lineHeight: 1.9 }}
            >
              <strong>Necessità:</strong> Essenziali per il corretto funzionamento del sito web.<br />
              <strong>Durata:</strong> Rimangono fino alla chiusura del browser (sessione)<br />
              <strong>Consenso:</strong> Non richiedono consenso esplicito
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
              Cookie di Analisi (Google Analytics)
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", lineHeight: 1.9 }}
            >
              <strong>Necessità:</strong> Ci aiutano a capire come utilizzate il nostro sito, quali pagine visitate e quali azioni compite. Questi cookie raccolgono dati di navigazione in forma aggregata.<br />
              <strong>Durata:</strong> 13 mesi<br />
              <strong>Consenso:</strong> Richiedono il vostro consenso esplicito prima di essere installati<br />
              <strong>Nota:</strong> Questo cookie verrà bloccato fino a quando non darete il vostro consenso tramite il banner cookie.
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
              Cookie di Preferenza e Consenso
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", lineHeight: 1.9 }}
            >
              <strong>Necessità:</strong> Utilizzati per ricordare le vostre preferenze, come le impostazioni di lingua, tema, e soprattutto le vostre scelte di consenso ai cookie.<br />
              <strong>Durata:</strong> 12 mesi<br />
              <strong>Consenso:</strong> Necessari per documentare le vostre scelte di privacy
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
            Utilizziamo Google Analytics per raccogliere informazioni su come gli utenti interagiscono con il nostro sito. Questi dati vengono trattati secondo la{" "}
            <Typography
              component="a"
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#1a1a1a",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Google Analytics Privacy Policy
            </Typography>. Google Analytics non caricherà fino a quando non avrete fornito il consenso tramite il banner cookie.
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
            4. EmailJS e Modulo di Contatto
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Il modulo di contatto utilizza EmailJS per inviare le vostre richieste. EmailJS potrebbe impostare cookie tecnici necessari per il funzionamento del servizio. Per ulteriori informazioni, consultate la{" "}
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
              Privacy Policy di EmailJS
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
            5. Come Gestire i Cookie
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
            6. Cookie di Terze Parti
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
            7. Banner di Consenso e Consenso Granulare
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
          >
            Quando visitate il nostro sito per la prima volta, comparirà un banner che vi chiede il consenso per l'uso di cookie non tecnici. <strong>Nessun cookie di analisi o preferenza sarà installato fino a quando non avrete espresso il vostro consenso.</strong>
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, fontWeight: 600, mb: 1 }}
          >
            Le vostre opzioni nel banner:
          </Typography>
          <Box component="ul" sx={{ pl: 2, color: "#666", lineHeight: 1.9 }}>
            <li><strong>Rifiuta tutto:</strong> Rifiuta tutti i cookie non tecnici (consigliato se non volete essere tracciati)</li>
            <li><strong>Accetta tutto:</strong> Accetta tutti i cookie, inclusi analisi e preferenze</li>
            <li><strong>Personalizza:</strong> Apre un pannello dove potete scegliere singolarmente ogni categoria di cookie</li>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mt: 2 }}
          >
            <strong>Diritto di cambiare idea:</strong> Potete modificare le vostre preferenze ai cookie in qualsiasi momento tramite le impostazioni del sito o contattandoci direttamente a {siteConfig.email}.
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
            8. Contatti e Diritti
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Se avete domande sull'uso dei cookie o desiderate ritirare il vostro consenso, potete contattarci a {siteConfig.email}. Avete anche il diritto di presentare un reclamo all'autorità di protezione dei dati competente.
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
            9. Conformità Normativa e Autorità Competente
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
          >
            Questa Cookie Policy è conforme a:
          </Typography>
          <Box component="ul" sx={{ pl: 2, color: "#666", lineHeight: 1.9, mb: 2 }}>
            <li>GDPR (Regolamento (UE) 2016/679)</li>
            <li>Codice della Privacy italiano (D.Lgs. 196/2003, come modificato dal D.Lgs. 101/2018)</li>
            <li>Linee Guida del Garante per la Protezione dei Dati Personali</li>
            <li>Linee Guida AGCOM sui cookie</li>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Per informazioni sulla normativa italiana sui cookie, visitate il sito del{" "}
            <Typography
              component="a"
              href="https://www.garanteprivacy.it/temi/cookie"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#1a1a1a",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Garante per la Protezione dei Dati Personali
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
            10. Modifiche a Questa Policy
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            Ci riserviamo il diritto di aggiornare questa Cookie Policy per riflettere i cambiamenti nei nostri processi o per adeguarci a eventuali nuove normative. Vi invitiamo a consultarla regolarmente.
          </Typography>
        </Box>

        <Box sx={{ p: 4, backgroundColor: "#f5f5f5", border: "1px solid #e8e8e8" }}>
          <Typography
            variant="body2"
            sx={{ color: "#666", lineHeight: 1.9 }}
          >
            <strong>Ultima modifica:</strong> {ULTIMA_MODIFICA}
            <br />
            Per domande sui cookie, contattate {siteConfig.email}
          </Typography>
        </Box>
      </Container>
    </Box>

  </Layout>
)

export default CookiePage

export const Head = () => (
  <Seo
    title={`Cookie Policy — ${siteConfig.name}`}
    path="/cookie/"
    noindex
  />
)
