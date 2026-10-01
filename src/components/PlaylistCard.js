import React from "react"
import { Box, Typography } from "@mui/material"

// Mosaico 2x2 con le copertine dei primi quattro brani
export const CopertinaMosaico = ({ tracks, colore, dimensione = "100%" }) => (
  <Box
    sx={{
      width: dimensione,
      aspectRatio: "1 / 1",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      backgroundColor: colore,
      flexShrink: 0,
      overflow: "hidden",
    }}
  >
    {tracks.slice(0, 4).map((brano) =>
      brano.copertina ? (
        <Box
          key={brano.idBrano}
          component="img"
          src={brano.copertina}
          alt=""
          loading="lazy"
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <Box key={brano.idBrano} />
      )
    )}
  </Box>
)

const PlaylistCard = ({ playlist, onApri }) => (
  <Box
    component="button"
    type="button"
    onClick={() => onApri(playlist)}
    sx={{
      width: "100%",
      height: "100%",
      p: 2,
      textAlign: "left",
      cursor: "pointer",
      font: "inherit",
      backgroundColor: "#fff",
      border: "1px solid #e8e8e8",
      borderRadius: 0,
      transition: "all 0.3s ease",
      "&:hover, &:focus-visible": {
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        transform: "translateY(-4px)",
        borderColor: "#1a1a1a",
      },
    }}
  >
    <CopertinaMosaico tracks={playlist.tracks} colore={playlist.colore} />
    <Typography
      variant="h6"
      component="h3"
      sx={{ fontWeight: 700, color: "#1a1a1a", mt: 2, mb: 0.5 }}
    >
      {playlist.titolo}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        color: "#666",
        lineHeight: 1.6,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        mb: 1,
      }}
    >
      {playlist.descrizione}
    </Typography>
    <Typography
      variant="caption"
      sx={{ color: "#999", letterSpacing: "0.06em", textTransform: "uppercase" }}
    >
      {playlist.tracks.length} brani
    </Typography>
  </Box>
)

export default PlaylistCard
