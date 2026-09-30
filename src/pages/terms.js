import React from "react"
import Layout from "../components/Layout"
import Breadcrumb from "../components/Breadcrumb"
import siteConfig from "../siteconfig.json"
import {
  Box,
  Container,
  Typography,
} from "@mui/material"

const TermsPage = () => (
  <Layout>

    {/* ── BREADCRUMB ────────────────────────────────── */}
    <Breadcrumb
      items={[
        { label: "Home", link: "/" },
        { label: "Termini e Condizioni", active: true },
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
          }}
        >
          Termini e Condizioni
        </Typography>
      </Container>
    </Box>

    {/* ── CONTENUTO ─────────────────────────────────── */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth="md">

        {/* Sezione 1 */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
            mt: 4,
          }}
        >
          1. Introduzione
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Questi Termini e Condizioni ("Termini") regolano l'utilizzo del sito web
          {siteConfig.domain} e dei servizi offerti da {siteConfig.name}. Accedendo e
          utilizzando il sito, accetti di essere vincolato da questi Termini. Se
          non accetti alcuna parte di questi Termini, ti preghiamo di non utilizzare
          il sito.
        </Typography>

        {/* Sezione 2 */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
            mt: 4,
          }}
        >
          2. Servizi Offerti
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          {siteConfig.name} offre i seguenti servizi:
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
            pl: 3,
            "& li": { mb: 1 },
          }}
        >
          <li>DJ matrimonio e servizi di musica per eventi privati</li>
          <li>Composizione e produzione di canzoni personalizzate</li>
          <li>Consulenza musicale per occasioni speciali</li>
        </Box>

        {/* Sezione 3 */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
            mt: 4,
          }}
        >
          3. Preventivi e Prenotazioni
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Tutti i preventivi forniti tramite il sito sono indicativi e non vincolanti.
          Una prenotazione diventa effettiva solo dopo la conferma scritta da parte
          di {siteConfig.name} e il versamento di un deposito cauzionale (se richiesto).
          Ogni evento è valutato individualmente in base ai dettagli specifici
          forniti dal cliente.
        </Typography>

        {/* Sezione 4 */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
            mt: 4,
          }}
        >
          4. Cancellazione e Rimborsi
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Le politiche di cancellazione e rimborso saranno comunicate al momento
          della prenotazione e specificate nel contratto di servizio. Ogni caso di
          cancellazione sarà valutato individualmente in base alle circostanze e alla
          data dell'evento.
        </Typography>

        {/* Sezione 5 */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
            mt: 4,
          }}
        >
          5. Proprietà Intellettuale
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Tutto il contenuto del sito, inclusi testi, immagini, grafica e musica,
          è protetto da leggi sul diritto d'autore. Le canzoni composte
          specificatamente per il cliente rimangono di proprietà del cliente, ma
          {siteConfig.name} mantiene i diritti d'autore della composizione musicale.
        </Typography>

        {/* Sezione 6 */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
            mt: 4,
          }}
        >
          6. Limitazione di Responsabilità
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          {siteConfig.name} non è responsabile per danni indiretti, incidentali o
          conseguenti derivanti dall'uso del sito o dei servizi. La responsabilità
          totale di {siteConfig.name} non supera l'importo pagato per i servizi forniti.
        </Typography>

        {/* Sezione 7 */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
            mt: 4,
          }}
        >
          7. Privacy e Dati Personali
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          I dati personali forniti tramite il modulo di contatto saranno utilizzati
          esclusivamente per rispondere alle tue richieste e fornire i servizi
          richiesti. Consulta la nostra{" "}
          <Typography
            component="a"
            href="/privacy"
            sx={{
              color: "#1a1a1a",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Privacy Policy
          </Typography>{" "}
          per ulteriori dettagli su come gestiamo i dati.
        </Typography>

        {/* Sezione 8 */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
            mt: 4,
          }}
        >
          8. Elaborazione dei Dati e Servizi Esterni
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Per gestire le richieste di contatto inviate tramite il modulo, utilizziamo EmailJS,
          un servizio esterno di elaborazione email. I dati del modulo saranno inviati a EmailJS
          per elaborare l'invio della email. Consulta la{" "}
          <Typography
            component="a"
            href="/privacy"
            sx={{
              color: "#1a1a1a",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Privacy Policy
          </Typography>{" "}
          per ulteriori dettagli su come i tuoi dati vengono trattati.
        </Typography>

        {/* Sezione 9 */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
            mt: 4,
          }}
        >
          9. Modifiche ai Termini
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          {siteConfig.name} si riserva il diritto di modificare questi Termini in qualsiasi
          momento. Le modifiche entreranno in vigore al momento della pubblicazione
          sul sito. L'uso continuato del sito dopo le modifiche costituisce
          accettazione dei nuovi Termini.
        </Typography>

        {/* Sezione 10 */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
            mt: 4,
          }}
        >
          10. Legge Applicabile e Competenza Territoriale
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Questi Termini e Condizioni sono disciplinati dalla legge italiana, in particolare dal
          Codice Civile, dal Codice del Consumo (D.Lgs. 206/2005) e dalle normative sulla
          protezione dei dati personali (GDPR e D.Lgs. 196/2003). Qualsiasi controversia relativa
          a questi Termini sarà sottoposta alla competenza esclusiva dei tribunali competenti
          territorialmente in Italia. Se siete consumatori residenti nell'UE, le vostre diritti di
          consumatore previsti dalla legge sono comunque garantiti.
        </Typography>

        {/* Sezione 11 */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 2,
            mt: 4,
          }}
        >
          11. Contatti
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Per domande su questi Termini e Condizioni, contattaci a:
        </Typography>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            p: 3,
            border: "1px solid #e8e8e8",
            mb: 4,
          }}
        >
          <Typography sx={{ color: "#1a1a1a", fontWeight: 600, mb: 1 }}>
            Email:
          </Typography>
          <Typography
            component="a"
            href={`mailto:${siteConfig.email}`}
            sx={{
              color: "#1a1a1a",
              textDecoration: "none",
              mb: 2,
              display: "block",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {siteConfig.email}
          </Typography>
          <Typography sx={{ color: "#1a1a1a", fontWeight: 600, mb: 1 }}>
            WhatsApp:
          </Typography>
          <Typography
            component="a"
            href="https://wa.me/393298883327"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#1a1a1a",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            +39 329 888 3327
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "#999",
            fontSize: "0.875rem",
            borderTop: "1px solid #e8e8e8",
            pt: 4,
            mt: 8,
          }}
        >
          Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
        </Typography>
      </Container>
    </Box>

  </Layout>
)

export default TermsPage

export const Head = () => <title>{`Termini e Condizioni — ${siteConfig.name}`}</title>
