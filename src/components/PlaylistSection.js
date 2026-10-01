import React, { useState } from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import PlaylistCard, { CopertinaMosaico } from "./PlaylistCard"
import TrackList from "./TrackList"
import useDeezerPreview from "../hooks/useDeezerPreview"

// Sezione con le playlist generate dalle classifiche Deezer.
// `limite` mostra solo le prime N playlist; `mostraTutte` aggiunge il link alla pagina dedicata.
const PlaylistSection = ({
  limite,
  mostraTutte = false,
  sfondo = "#f5f5f5",
  overline = "Musica del momento",
  titolo = "Le playlist più ascoltate",
}) => {
  const data = useStaticQuery(graphql`
    query {
      allDeezerPlaylist(sort: { ordine: ASC }) {
        nodes {
          playlistId
          titolo
          descrizione
          tipo
          colore
          tracks {
            idBrano
            titolo
            artista
            copertina
            durata
            link
          }
        }
      }
    }
  `)

  const [selezionata, setSelezionata] = useState(null)
  const anteprima = useDeezerPreview()

  const tutte = data.allDeezerPlaylist.nodes
  const playlists = limite ? tutte.slice(0, limite) : tutte

  // Senza dati (es. API non raggiungibile in build) la sezione non viene mostrata
  if (playlists.length === 0) return null

  const chiudi = () => {
    anteprima.ferma()
    setSelezionata(null)
  }

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: sfondo }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center" }}>
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
            {overline}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#1a1a1a",
            }}
          >
            {titolo}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {playlists.map((playlist) => (
            <Grid item size={{ xs: 6, md: 4, lg: 3 }} key={playlist.playlistId}>
              <PlaylistCard playlist={playlist} onApri={setSelezionata} />
            </Grid>
          ))}
        </Grid>

        {mostraTutte && (
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              component={GatsbyLink}
              to="/playlist/"
              disableElevation
              sx={{
                backgroundColor: "#1a1a1a",
                color: "#fff",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                "&:hover": { backgroundColor: "#444" },
                transition: "background-color 0.3s ease",
              }}
            >
              Tutte le playlist
            </Button>
          </Box>
        )}

        <Typography
          variant="caption"
          sx={{ display: "block", textAlign: "center", color: "#999", mt: 6 }}
        >
          Classifiche e anteprime audio fornite da Deezer. Aggiornate ogni giorno.
        </Typography>
      </Container>

      <Dialog
        open={Boolean(selezionata)}
        onClose={chiudi}
        fullWidth
        maxWidth="sm"
        scroll="paper"
        slotProps={{ paper: { sx: { borderRadius: 0 } } }}
      >
        {selezionata && (
          <>
            <DialogTitle
              component="div"
              sx={{ display: "flex", alignItems: "center", gap: 2, pr: 7 }}
            >
              <CopertinaMosaico
                tracks={selezionata.tracks}
                colore={selezionata.colore}
                dimensione={72}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
                  {selezionata.titolo}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  {selezionata.descrizione}
                </Typography>
              </Box>
              <IconButton
                aria-label="Chiudi"
                onClick={chiudi}
                sx={{ position: "absolute", right: 12, top: 12 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ p: 1 }}>
              <TrackList tracks={selezionata.tracks} anteprima={anteprima} />
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  )
}

export default PlaylistSection
