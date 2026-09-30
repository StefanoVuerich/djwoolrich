import React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Breadcrumb from "../components/Breadcrumb"
import { immaginiServizi } from "../images/illustrazioni"
import siteConfig from "../siteconfig.json"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
} from "@mui/material"
import Faq, { faqSchema } from "../components/Faq"
import Seo, { localBusinessSchema, breadcrumbSchema } from "../components/Seo"

const faqServizi = [
  {
    domanda: "Quali servizi offri come DJ a Pordenone?",
    risposta:
      "Offro servizi DJ per matrimoni, feste private (compleanni, anniversari, lauree) ed eventi aziendali, con impianto audio e luci professionali inclusi.",
  },
  {
    domanda: "In quali zone lavori?",
    risposta:
      "Mi sposto a Pordenone e provincia, in tutto il Friuli Venezia Giulia e in Veneto. Per eventi più distanti contattami per valutare la disponibilità.",
  },
  {
    domanda: "Come si richiede un preventivo?",
    risposta:
      "Puoi scrivermi dal modulo contatti, su WhatsApp o per telefono: ti rispondo con un preventivo gratuito e personalizzato in base a data, luogo e tipo di evento.",
  },
  {
    domanda: "L'impianto audio e le luci sono inclusi?",
    risposta:
      "Sì, porto un impianto audio e un set luci professionali adatti alla dimensione dell'evento, con backup tecnico.",
  },
]

const servicesData = [
  {
    titolo: "DJ Matrimonio",
    sottotitolo: "La musica perfetta per il vostro grande giorno",
    descrizione:
      "Ogni matrimonio è una storia unica. Come DJ specializzato in matrimoni a Pordenone e provincia, garantisco una musica impeccabile per ogni momento della vostra celebrazione. Dalla cerimonia al brindisi, dal primo ballo al ricevimento, creo un'atmosfera indimenticabile che rispecchia il vostro stile e le vostre emozioni.",
    dettagli: [
      "Consulenza musicale personalizzata con gli sposi",
      "Musica per cerimonia, cocktail e ricevimento",
      "Impianto audio e luci professionali",
      "Coordinamento con il wedding planner e il venue",
      "Playlist studiata per ogni fascia di ospiti",
      "Animazione e giochi musicali opzionali",
      "Backup tecnico e assistenza h24",
    ],
  },
  {
    titolo: "DJ per Feste Private",
    sottotitolo: "Anima la vostra festa con la giusta colonna sonora",
    descrizione:
      "Compleanno, anniversario, festa di laurea o festa di fine stagione: qualsiasi occasione merita una musica speciale. Come DJ per feste private garantisco un'atmosfera coinvolgente e divertente, adattando la musica al vostro pubblico e al vostro stile. Dal classico al moderno, dalla musica italiana ai grandi successi internazionali.",
    dettagli: [
      "Selezione musicale personalizzata",
      "Impianto audio professionale",
      "Illuminazione d'ambiente",
      "Giochi musicali e animazione",
      "Disponibilità per spazi interni ed esterni",
      "Pacchetti flessibili e convenienti",
      "Professionalità e discrezione garantite",
    ],
  },
  {
    titolo: "DJ per Corporate Events",
    sottotitolo: "Professionisti che capiscono il vostro stile aziendale",
    descrizione:
      "Un evento aziendale richiede equilibrio tra professionalità e atmosfera piacevole. Come DJ per aziende e enti, creo l'ambiente ideale per cene di gala, team building, inaugurazioni e conferenze. Musica di qualità che favorisce la comunicazione e il networking, senza distrarre dagli obiettivi dell'evento.",
    dettagli: [
      "Musica di sottofondo elegante e discreta",
      "Gestione dell'audio per conferenze e presentazioni",
      "Selezione musicale in linea con l'immagine aziendale",
      "Supporto tecnico completo",
      "Consulenza pre-evento",
      "Servizio professionale e affidabile",
      "Referenze da clienti corporate",
    ],
  },
  {
    titolo: "DJ per Feste di Compleanno",
    sottotitolo: "Rendi il compleanno un giorno indimenticabile",
    descrizione:
      "Che sia un compleanno per bambini, adolescenti o adulti, la giusta musica fa la differenza. Come DJ specializzato in feste di compleanno, garantisco animazione musicale che diverte e coinvolge tutti gli ospiti. Dalle canzoni scatenate ai giochi musicali, fino alle sorprese sonore personalizzate.",
    dettagli: [
      "Animazione e giochi musicali divertenti",
      "Playlist personalizzata per fasce d'età",
      "Gestione del microfono per auguri e dediche",
      "Effetti sonori e light show",
      "Disponibilità anche per spazi ridotti",
      "Adattabilità ai vostri gusti musicali",
      "Professionalità che mette a suo agio i genitori",
    ],
  },
  {
    titolo: "Impianto Audio e Luci Professionali",
    sottotitolo: "Tecnologia di qualità per il vostro evento",
    descrizione:
      "Qualità audio e illuminazione professionale sono fondamentali per il successo di un evento. Offro impianti audio digitali ad alta fedeltà e sistemi di illuminazione moderni che trasformano l'atmosfera dello spazio. Disponibili sia in abbinamento ai servizi DJ sia come servizio indipendente.",
    dettagli: [
      "Impianto audio digitale ad alta fedeltà",
      "Cablaggio professionale e gestione tecnica",
      "Illuminazione LED programmabile",
      "Effetti luci sincronizzati con la musica",
      "Assistenza tecnica durante l'evento",
      "Paccchetti personalizzati in base allo spazio",
      "Consulenza tecnica gratuita",
    ],
  },
  {
    titolo: "Karaoke DJ",
    sottotitolo: "Il divertimento della musica dal vivo",
    descrizione:
      "Portate il divertimento ai massimi livelli con il karaoke! Come DJ karaoke professionale, gestisco il catalogo, il sound e l'atmosfera per garantire un'esperienza divertente e coinvolgente. Perfetto per feste di amici, compleanni, addii al nubilato e team building.",
    dettagli: [
      "Catalogo karaoke vasto e sempre aggiornato",
      "Gestione profesionale del microfono",
      "Effetti sonori e bonus musicali",
      "Creazione di sfide musicali divertenti",
      "Hosting e animazione inclusa",
      "Adatto a tutti i livelli di bravura",
      "Garanzia di divertimento per tutti",
    ],
  },
]

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(name: { eq: "hero" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const heroImg = getImage(data.heroImage)

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────── */}
      <Box
        sx={{
          minHeight: { xs: "60vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {heroImg && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              "& .gatsby-image-wrapper": {
                width: "100%",
                height: "100%",
              },
            }}
          >
            <GatsbyImage image={heroImg} alt={`${siteConfig.name} - Servizi`} />
          </Box>
        )}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
          <Container maxWidth="lg">
            <Typography
              variant="overline"
              sx={{
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                color: "rgba(255, 255, 255, 0.6)",
                display: "block",
                mb: 2,
              }}
            >
              I Miei Servizi
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#fff",
                mb: 3,
              }}
            >
              Servizi DJ Professionali
              <br />a Pordenone
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.05rem",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.8,
                maxWidth: 600,
                mb: 4,
              }}
            >
              Dalla musica per matrimoni alle feste private, dai corporate events alla consulenza musicale: scopri tutti i servizi professionali che offro per rendere il vostro evento speciale indimenticabile.
            </Typography>
            <Button
              href="#services"
              disableElevation
              sx={{
                backgroundColor: "#fff",
                color: "#1a1a1a",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                "&:hover": { backgroundColor: "#e8e8e8" },
                transition: "background-color 0.3s ease",
              }}
            >
              Scopri i Servizi
            </Button>
          </Container>
        </Box>
      </Box>

      {/* ── BREADCRUMB ────────────────────────────────── */}
      <Breadcrumb
        items={[
          { label: "Home", link: "/" },
          { label: "Servizi", active: true },
        ]}
      />

      {/* ── SERVIZI ───────────────────────────────────– */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }} id="services">
        <Container maxWidth="lg">
          <Box sx={{ mb: 8, textAlign: "center" }}>
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
              Esperienza Professionale
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                fontWeight: 700,
                color: "#1a1a1a",
                mb: 3,
              }}
            >
              Una Soluzione Musicale per Ogni Occasione
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "#666",
                lineHeight: 1.8,
                maxWidth: 700,
                mx: "auto",
              }}
            >
              Che si tratti di un matrimonio, una festa privata, un evento aziendale o una festa di compleanno, ho il servizio musicale giusto per voi. Professionismo, qualità e dedizione al dettaglio garantiti.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {servicesData.map((service) => (
              <Grid item size={{ xs: 12, md: 6 }} key={service.titolo}>
                <Card
                  sx={{
                    backgroundColor: "#f9f9f9",
                    "--card-pad": { xs: "32px", md: "40px" },
                    p: "var(--card-pad)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #e8e8e8",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 12px 48px rgba(0,0,0,0.1)",
                      transform: "translateY(-8px)",
                      borderColor: "#1a1a1a",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={immaginiServizi[service.titolo]}
                    alt={service.titolo}
                    loading="lazy"
                    sx={{
                      width: "calc(100% + 2 * var(--card-pad))",
                      mx: "calc(-1 * var(--card-pad))",
                      mt: "calc(-1 * var(--card-pad))",
                      mb: 4,
                      aspectRatio: "3 / 2",
                      objectFit: "cover",
                      display: "block",
                      maxWidth: "none",
                    }}
                  />
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: "#1a1a1a",
                      mb: 1,
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    {service.titolo}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#999",
                      fontStyle: "italic",
                      mb: 3,
                      fontSize: "0.875rem",
                    }}
                  >
                    {service.sottotitolo}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#666",
                      lineHeight: 1.8,
                      mb: 4,
                      flexGrow: 1,
                    }}
                  >
                    {service.descrizione}
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "#1a1a1a",
                        mb: 2,
                        fontSize: "0.875rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Cosa Include:
                    </Typography>
                    <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
                      {service.dettagli.map((dettaglio) => (
                        <Box
                          component="li"
                          key={dettaglio}
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
                          {dettaglio}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Button
                    component={GatsbyLink}
                    to="/contact/#form-contatti"
                    disableElevation
                    sx={{
                      alignSelf: "flex-start",
                      backgroundColor: "#1a1a1a",
                      color: "#fff",
                      borderRadius: 0,
                      px: 3,
                      py: 1.2,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      "&:hover": { backgroundColor: "#444" },
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    Richiedi Informazioni
                    </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── PERCHÉ SCEGLIERMI ─────────────────────────– */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 8,
              textAlign: "center",
            }}
          >
            Perché Scegliere {siteConfig.name}
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                titolo: "Esperienza Professionale",
                descrizione:
                  "Anni di esperienza nel settore dell'intrattenimento musicale con centinaia di eventi gestiti con successo.",
              },
              {
                titolo: "Personalizzazione Totale",
                descrizione:
                  "Ogni servizio è personalizzato in base alle vostre esigenze, preferenze e visione dell'evento.",
              },
              {
                titolo: "Impianti di Qualità",
                descrizione:
                  "Utilizzo impianti audio e sistemi di illuminazione professionali e affidabili per la migliore resa.",
              },
              {
                titolo: "Ascolto e Dedizione",
                descrizione:
                  "Mi dedico completamente a capire le vostre necessità e a superare le vostre aspettative.",
              },
              {
                titolo: "Professionalità Garantita",
                descrizione:
                  "Serietà, puntualità e professionalità sono i valori fondamentali del mio lavoro.",
              },
              {
                titolo: "Copertura Territoriale",
                descrizione:
                  "Opero a Pordenone e in tutta la provincia del Friuli Venezia Giulia, con possibilità di trasferte.",
              },
            ].map((item) => (
              <Grid item size={{ xs: 12, md: 6 }} key={item.titolo}>
                <Box
                  sx={{
                    p: 4,
                    backgroundColor: "#fff",
                    border: "1px solid #e8e8e8",
                    borderRadius: 0,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: "#1a1a1a",
                      mb: 2,
                    }}
                  >
                    {item.titolo}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.descrizione}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Faq voci={faqServizi} />

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
            component="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 700,
              color: "#fff",
              mb: 2,
            }}
          >
            Pronto a Rendere il Vostro Evento Indimenticabile?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.6)",
              mb: 5,
              lineHeight: 1.8,
            }}
          >
            Contattatemi senza impegno per discutere dei vostri servizi necessari. Vi fornirò una consulenza gratuita e un preventivo personalizzato.
          </Typography>
          <Button
            component={GatsbyLink}
            to="/contact/#form-contatti"
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
            Contattami Ora
          </Button>
        </Container>
      </Box>
    </Layout>
  )
}

export default ServicesPage

export const Head = () => (
  <Seo
    title={"Servizi DJ a Pordenone | Matrimoni, Feste, Eventi Aziendali"}
    description={"Servizi DJ professionali a Pordenone: matrimoni, feste private ed eventi aziendali in Friuli Venezia Giulia e Veneto. Scopri cosa include ogni servizio."}
    path="/services/"
    schemas={[faqSchema(faqServizi), breadcrumbSchema([{ nome: "Home", path: "/" }, { nome: "Servizi", path: "/services/" }])]}
  />
)
