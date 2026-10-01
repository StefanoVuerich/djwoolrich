import React from "react"
import {
  Box,
  CircularProgress,
  IconButton,
  LinearProgress,
  Link,
  Typography,
} from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

// Formatta i secondi come m:ss
const formattaDurata = (secondi) => {
  const minuti = Math.floor(secondi / 60)
  const resto = String(secondi % 60).padStart(2, "0")
  return `${minuti}:${resto}`
}

const TrackList = ({ tracks, anteprima }) => {
  const { idInRiproduzione, idInCaricamento, idInErrore, progresso, toggle } = anteprima

  return (
    <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0 }}>
      {tracks.map((brano, indice) => {
        const inRiproduzione = brano.idBrano === idInRiproduzione
        const inCaricamento = brano.idBrano === idInCaricamento
        const inErrore = brano.idBrano === idInErrore

        return (
          <Box
            component="li"
            key={brano.idBrano}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              py: 1,
              px: 1,
              position: "relative",
              backgroundColor: inRiproduzione ? "#f5f5f5" : "transparent",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <Typography
              variant="body2"
              sx={{ width: 24, textAlign: "right", color: "#999", flexShrink: 0 }}
            >
              {indice + 1}
            </Typography>

            <IconButton
              size="small"
              onClick={() => toggle(brano.idBrano)}
              aria-label={`${inRiproduzione ? "Ferma" : "Ascolta anteprima di"} ${brano.titolo}`}
              sx={{ color: "#1a1a1a", border: "1px solid #e8e8e8", flexShrink: 0 }}
            >
              {inCaricamento ? (
                <CircularProgress size={20} color="inherit" />
              ) : inRiproduzione ? (
                <PauseIcon fontSize="small" />
              ) : (
                <PlayArrowIcon fontSize="small" />
              )}
            </IconButton>

            {brano.copertina && (
              <Box
                component="img"
                src={brano.copertina}
                alt=""
                loading="lazy"
                sx={{ width: 40, height: 40, objectFit: "cover", flexShrink: 0 }}
              />
            )}

            <Box sx={{ minWidth: 0, flexGrow: 1 }}>
              <Typography
                variant="body2"
                noWrap
                sx={{ fontWeight: 600, color: "#1a1a1a" }}
              >
                {brano.titolo}
              </Typography>
              <Typography variant="caption" noWrap sx={{ color: "#666", display: "block" }}>
                {inErrore ? "Anteprima non disponibile" : brano.artista}
              </Typography>
            </Box>

            <Typography
              variant="caption"
              sx={{ color: "#999", display: { xs: "none", sm: "block" } }}
            >
              {formattaDurata(brano.durata)}
            </Typography>

            {brano.link && (
              <Link
                href={brano.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Apri ${brano.titolo} su Deezer`}
                sx={{ color: "#666", display: "flex" }}
              >
                <OpenInNewIcon fontSize="small" />
              </Link>
            )}

            {inRiproduzione && (
              <LinearProgress
                variant="determinate"
                value={progresso}
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 2,
                  backgroundColor: "transparent",
                  "& .MuiLinearProgress-bar": { backgroundColor: "#1a1a1a" },
                }}
              />
            )}
          </Box>
        )
      })}
    </Box>
  )
}

export default TrackList
