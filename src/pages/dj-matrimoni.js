import React from "react"
import Layout from "../components/Layout"
import Breadcrumb from "../components/Breadcrumb"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Divider,
} from "@mui/material"

// Dati servizi matrimoniali
const serviziMatrimoniali = [
  {
    titolo: "Cerimonia e Cocktail",
    descrizione: "La fase più delicata del vostro giorno, dove la musica deve accompagnare ogni momento con eleganza e consapevolezza.",
    punti: [
      "Musica per cerimonia emozionante",
      "Sottofondo per cocktail in giardino",
      "Coordinamento con fotografi e videografi",
      "Impianto audio personalizzato",
    ],
  },
  {
    titolo: "Ricezione e Intrattenimento",
    descrizione: "Dal primo brindisi all'ultimo ballo: creo il flusso musicale perfetto che tiene viva l'energia della festa.",
    punti: [
      "Apertura con brani che rompono il ghiaccio",
      "Scaletta personalizzata per i momenti chiave",
      "Letture e sorprese musicali",
      "Gestione dell'energia della sala tutto il tempo",
    ],
  },
  {
    titolo: "Servizio Completo",
    descrizione: "Vi seguo in ogni aspetto: dal primo incontro al giorno del matrimonio, come un vero direttore musicale della vostra festa.",
    punti: [
      "Consulenze musicali senza limite",
      "Adattamenti in tempo reale durante l'evento",
      "Coordinamento con altri servizi",
      "Disponibilità per emergenze last-minute",
    ],
  },
]

// Processo di lavoro
const processoLavoro = [
  {
    numero: "1.",
    titolo: "La vostra storia",
    descrizione: "Vi incontro per ascoltare la vostra storia d'amore, i vostri gusti, i vostri dubbi e i vostri desideri musicali.",
  },
  {
    numero: "2.",
    titolo: "La scaletta",
    descrizione: "Creo una scaletta dettagliata che segue il ritmo della giornata, considerando ogni transizione e ogni momento speciale.",
  },
  {
    numero: "3.",
    titolo: "Gli aggiustamenti",
    descrizione: "Rimaniamo in contatto per perfezionare ogni dettaglio, aggiungere brani, rimuoverne altri fino a quando non è perfetto.",
  },
  {
    numero: "4.",
    titolo: "Il grande giorno",
    descrizione: "Sono presente con il mio impianto professionale, pronto ad adattarmi al momento e a far vibrare il vostro matrimonio.",
  },
]

const DjMatrimoniPage = () => (
  <Layout>

    {/* ── BREADCRUMB ────────────────────────────────── */}
    <Breadcrumb
      items={[
        { label: "Home", link: "/" },
        { label: "DJ Matrimoni", active: true },
      ]}
    />

    {/* ── HERO ──────────────────────────────────────── */}
    <Box
      sx={{
        minHeight: { xs: "60vh", md: "80vh" },
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        py: { xs: 10, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                color: "#666",
                display: "block",
                mb: 2,
              }}
            >
              Musica per il vostro giorno speciale
            </Typography>
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
              DJ Matrimonio
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.05rem",
                color: "#666",
                lineHeight: 1.8,
                mb: 4,
                maxWidth: 420,
              }}
            >
              Dalla cerimonia al ricevimento, come direttore musicale della vostra festa. Ascolto la vostra storia, costruisco una scaletta personalizzata e creo l'atmosfera magica che rimarrà nei vostri ricordi per sempre.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                href="/contact"
                disableElevation
                sx={{
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                  borderRadius: 0,
                  px: 4,
                  py: 1.5,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  "&:hover": { backgroundColor: "#444" },
                  transition: "background-color 0.3s ease",
                }}
              >
                Iniziamo a parlarne
              </Button>
              <Button
                href="/about"
                disableElevation
                sx={{
                  backgroundColor: "transparent",
                  color: "#1a1a1a",
                  borderRadius: 0,
                  px: 4,
                  py: 1.5,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: "1px solid #1a1a1a",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                  transition: "background-color 0.3s ease",
                }}
              >
                Chi sono
              </Button>
            </Box>
          </Grid>

          {/* Placeholder foto hero */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "4/5",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "#aaa", fontSize: "0.875rem" }}>
                Foto matrimonio
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* ── CITAZIONE ─────────────────────────────────── */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "#1a1a1a",
            mb: 2,
          }}
        >
          "Non suono solo musica.
          <br />
          Dirigo la colonna sonora del vostro giorno più importante."
        </Typography>
        <Box
          sx={{
            width: 32,
            height: 1,
            backgroundColor: "#e8e8e8",
            mx: "auto",
            mb: 2,
          }}
        />
        <Typography sx={{ fontSize: "0.8rem", letterSpacing: "0.1em", color: "#999", textTransform: "uppercase" }}>
          DJ Woolrich
        </Typography>
      </Container>
    </Box>

    {/* ── COSA OFFRO ────────────────────────────────── */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            color: "#666",
            display: "block",
            mb: 1,
          }}
        >
          I miei servizi
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 8,
          }}
        >
          Cosa offro per il vostro matrimonio
        </Typography>

        <Grid container spacing={4}>
          {serviziMatrimoniali.map((s) => (
            <Grid item size={{ xs: 12, md: 6 }} key={s.titolo}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  p: { xs: 4, md: 5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e8e8e8",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#1a1a1a", mb: 2 }}
                >
                  {s.titolo}
                </Typography>
                <Divider sx={{ mb: 3, borderColor: "#e8e8e8" }} />
                <Typography
                  variant="body2"
                  sx={{ color: "#666", lineHeight: 1.8, mb: 3 }}
                >
                  {s.descrizione}
                </Typography>
                <Box
                  component="ul"
                  sx={{ pl: 0, mb: 4, listStyle: "none", flexGrow: 1 }}
                >
                  {s.punti.map((p) => (
                    <Box
                      component="li"
                      key={p}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                        mb: 1.2,
                        fontSize: "0.875rem",
                        color: "#444",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          backgroundColor: "#1a1a1a",
                          mt: "8px",
                          flexShrink: 0,
                        }}
                      />
                      {p}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* ── IL MIO PROCESSO ────────────────────────────– */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            color: "#666",
            display: "block",
            mb: 1,
          }}
        >
          Come lavoro
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 8,
          }}
        >
          Il mio processo
        </Typography>

        <Grid container spacing={4}>
          {processoLavoro.map((step, idx) => (
            <Grid item size={{ xs: 12, md: 6 }} key={idx}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    mb: 1,
                    lineHeight: 1,
                  }}
                >
                  {step.numero}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "#1a1a1a", mb: 2 }}
                >
                  {step.titolo}
                </Typography>
                <Typography
                  sx={{ color: "#666", lineHeight: 1.8 }}
                >
                  {step.descrizione}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* ── COSA RENDE UNICO ──────────────────────────– */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Placeholder immagine */}
          <Grid item size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "1/1",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #e8e8e8",
              }}
            >
              <Typography sx={{ color: "#aaa", fontSize: "0.875rem" }}>
                Foto working
              </Typography>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 7 }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                color: "#666",
                display: "block",
                mb: 1,
              }}
            >
              La differenza
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 700,
                color: "#1a1a1a",
                mb: 3,
              }}
            >
              Cosa rende il mio servizio unico
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
            >
              Non sono solo un DJ che mette dischi. Sono un direttore musicale che ascolta attentamente la vostra storia, i vostri gusti e i vostri sogni.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#666", lineHeight: 1.9, mb: 2 }}
            >
              Creo una scaletta personalizzata che segue il ritmo emotivo della vostra giornata. Dalla cerimonia che emoziona al ricevimento che celebra: ogni brano è scelto con consapevolezza, ogni transizione è pensata per mantenere la giusta energia.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#666", lineHeight: 1.9, mb: 4 }}
            >
              Il giorno del matrimonio non improvviso mai. Leggo la sala, ascolto il vostro pubblico e adatto la musica al momento, mantenendo sempre la visione che abbiamo costruito insieme.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                "Ascolto consapevole della vostra storia",
                "Scaletta personalizzata e dettagliata",
                "Impianto audio e luci professionale",
                "Adattamento in tempo reale durante l'evento",
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#1a1a1a",
                      flexShrink: 0,
                    }}
                  />
                  <Typography sx={{ color: "#666", fontSize: "0.95rem" }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* ── ZONA DI LAVORO ────────────────────────────– */}
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="overline"
          sx={{
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            color: "#666",
            display: "block",
            mb: 1,
          }}
        >
          Dove lavoro
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 4,
          }}
        >
          Nord-Est Italia
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#666", lineHeight: 1.9, mb: 3 }}
        >
          Opero principalmente nel Nord-Est Italia con base a Pordenone. Sono disponibile per matrimoni nella regione Friuli-Venezia Giulia, Veneto e zone limitrofe.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#666", lineHeight: 1.9, mb: 6 }}
        >
          Per location fuori dall'area, contattatemi comunque: valuterò ogni richiesta in base ai dettagli dell'evento.
        </Typography>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            p: { xs: 4, md: 6 },
            border: "1px solid #e8e8e8",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#1a1a1a", mb: 2 }}
          >
            Contattami per verificare la disponibilità
          </Typography>
          <Typography
            sx={{ color: "#666", lineHeight: 1.8, mb: 4 }}
          >
            Hai una data in mente? Ti consiglio di contattarmi almeno 3-6 mesi prima per assicurarti la disponibilità e per avere tempo di conoscerci bene.
          </Typography>
          <Button
            href="/contact"
            disableElevation
            sx={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              borderRadius: 0,
              px: 5,
              py: 1.8,
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "#444" },
              transition: "background-color 0.3s ease",
            }}
          >
            Verifica disponibilità
          </Button>
        </Box>
      </Container>
    </Box>

    {/* ── CTA FINALE ────────────────────────────────– */}
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#1a1a1a",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            fontWeight: 700,
            color: "#fff",
            mb: 2,
          }}
        >
          Iniziamo a dialogare
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(255,255,255,0.6)", mb: 5, lineHeight: 1.8 }}
        >
          Raccontami della vostra storia, della vostra visione, dei vostri desideri musicali. Sarò felice di ascoltare e di costruire insieme a voi la colonna sonora del vostro giorno speciale.
        </Typography>
        <Button
          href="/contact"
          disableElevation
          sx={{
            backgroundColor: "#fff",
            color: "#1a1a1a",
            borderRadius: 0,
            px: 5,
            py: 1.8,
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            "&:hover": { backgroundColor: "#e8e8e8" },
            transition: "background-color 0.3s ease",
          }}
        >
          Contattami
        </Button>
      </Container>
    </Box>

  </Layout>
)

export default DjMatrimoniPage

export const Head = () => <title>DJ Matrimonio — DJ Woolrich</title>
