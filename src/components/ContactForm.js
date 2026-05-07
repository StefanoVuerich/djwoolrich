import React, { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import emailjs from "@emailjs/browser"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Link,
  FormControlLabel,
  Checkbox,
  InputAdornment,
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ErrorIcon from "@mui/icons-material/Error"

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      nome: "",
      email: "",
      telefono: "",
      servizio: "",
      data: "",
      messaggio: "",
      acceptTerms: false,
    },
  })

  const messaggioValue = watch("messaggio")

  useEffect(() => {
    if (process.env.GATSBY_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.GATSBY_EMAILJS_PUBLIC_KEY)
    }
  }, [])

  const onSubmit = async (data) => {
    setLoading(true)
    setSubmitError("")

    try {
      await emailjs.send(
        process.env.GATSBY_EMAILJS_SERVICE_ID || "",
        process.env.GATSBY_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: data.nome,
          from_email: data.email,
          telefono: data.telefono || "Non fornito",
          servizio: data.servizio || "Non specificato",
          data: data.data || "Non specificata",
          messaggio: data.messaggio,
          accept_terms: data.acceptTerms ? "Sì" : "No",
          to_email: "info@djwoolrich.it",
        }
      )

      setSubmitted(true)
      setLoading(false)
      reset()

      setTimeout(() => {
        setSubmitted(false)
      }, 2000)
    } catch (error) {
      setLoading(false)
      setSubmitError("Errore nell'invio del messaggio. Riprova più tardi o contattami direttamente.")
      console.error("EmailJS error:", error)
    }
  }

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="md">
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
          Modulo di contatto
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 6,
          }}
        >
          Inviami un messaggio
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "grid",
            gap: 3,
          }}
        >
          <Grid container spacing={3}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" sx={{ color: "#1a1a1a", fontWeight: 500 }}>
                  Nome <span style={{ color: "#d32f2f" }}>*</span>
                </Typography>
              </Box>
              <Controller
                name="nome"
                control={control}
                rules={{ required: "Il nome è obbligatorio" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errors.nome}
                    helperText={errors.nome?.message}
                    variant="outlined"
                    placeholder="Il tuo nome completo"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {field.value && !errors.nome && (
                            <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "1.2rem" }} />
                          )}
                          {errors.nome && (
                            <ErrorIcon sx={{ color: "#d32f2f", fontSize: "1.2rem" }} />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: errors.nome ? "#ffebee" : field.value && !errors.nome ? "#f1f8f4" : "#fff",
                        "& fieldset": {
                          borderColor: errors.nome ? "#d32f2f" : field.value && !errors.nome ? "#4caf50" : "#e8e8e8",
                          borderWidth: errors.nome || (field.value && !errors.nome) ? "2px" : "1px",
                        },
                        "&:hover fieldset": { borderColor: errors.nome ? "#d32f2f" : field.value && !errors.nome ? "#4caf50" : "#999" },
                        "&.Mui-focused fieldset": { borderColor: errors.nome ? "#d32f2f" : "#1a1a1a" },
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" sx={{ color: "#1a1a1a", fontWeight: 500 }}>
                  Email <span style={{ color: "#d32f2f" }}>*</span>
                </Typography>
              </Box>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "L'email è obbligatoria",
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Inserisci un'email valida (es: nome@esempio.it)",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    variant="outlined"
                    placeholder="il.tuo@email.com"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {field.value && !errors.email && (
                            <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "1.2rem" }} />
                          )}
                          {errors.email && (
                            <ErrorIcon sx={{ color: "#d32f2f", fontSize: "1.2rem" }} />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: errors.email ? "#ffebee" : field.value && !errors.email ? "#f1f8f4" : "#fff",
                        "& fieldset": {
                          borderColor: errors.email ? "#d32f2f" : field.value && !errors.email ? "#4caf50" : "#e8e8e8",
                          borderWidth: errors.email || (field.value && !errors.email) ? "2px" : "1px",
                        },
                        "&:hover fieldset": { borderColor: errors.email ? "#d32f2f" : field.value && !errors.email ? "#4caf50" : "#999" },
                        "&.Mui-focused fieldset": { borderColor: errors.email ? "#d32f2f" : "#1a1a1a" },
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <Controller
                name="telefono"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Telefono"
                    type="tel"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#fff",
                        "& fieldset": { borderColor: "#e8e8e8" },
                        "&:hover fieldset": { borderColor: "#999" },
                        "&.Mui-focused fieldset": { borderColor: "#1a1a1a" },
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <Controller
                name="servizio"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Servizio interessato"
                    placeholder="Es: DJ matrimonio, Feste private, Corporate event"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#fff",
                        "& fieldset": { borderColor: "#e8e8e8" },
                        "&:hover fieldset": { borderColor: "#999" },
                        "&.Mui-focused fieldset": { borderColor: "#1a1a1a" },
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item size={{ xs: 12 }}>
              <Typography variant="body2" sx={{ color: "#666", mb: 1, fontSize: "0.875rem" }}>
                Data evento (se prevista)
              </Typography>
              <Controller
                name="data"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="date"
                    variant="outlined"
                    slotProps={{
                      input: {
                        placeholder: "GG/MM/AAAA",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#fff",
                        "& fieldset": { borderColor: "#e8e8e8" },
                        "&:hover fieldset": { borderColor: "#999" },
                        "&.Mui-focused fieldset": { borderColor: "#1a1a1a" },
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item size={{ xs: 12 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Typography variant="body2" sx={{ color: "#1a1a1a", fontWeight: 500 }}>
                  Messaggio <span style={{ color: "#d32f2f" }}>*</span>
                </Typography>
                {messaggioValue && (
                  <Typography variant="caption" sx={{ color: "#999" }}>
                    {messaggioValue.trim().length}/10 caratteri minimi
                  </Typography>
                )}
              </Box>
              <Controller
                name="messaggio"
                control={control}
                rules={{
                  required: "Il messaggio è obbligatorio",
                  minLength: {
                    value: 10,
                    message: "Il messaggio deve contenere almeno 10 caratteri",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    rows={6}
                    error={!!errors.messaggio}
                    helperText={errors.messaggio?.message}
                    placeholder="Raccontami il tuo evento, i tuoi gusti musicali, quello che ti interessa..."
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" sx={{ alignSelf: "flex-start", mt: 1 }}>
                          {field.value?.trim().length >= 10 && !errors.messaggio && (
                            <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "1.2rem" }} />
                          )}
                          {errors.messaggio && (
                            <ErrorIcon sx={{ color: "#d32f2f", fontSize: "1.2rem" }} />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: errors.messaggio ? "#ffebee" : field.value?.trim().length >= 10 && !errors.messaggio ? "#f1f8f4" : "#fff",
                        "& fieldset": {
                          borderColor: errors.messaggio ? "#d32f2f" : field.value?.trim().length >= 10 && !errors.messaggio ? "#4caf50" : "#e8e8e8",
                          borderWidth: errors.messaggio || (field.value?.trim().length >= 10 && !errors.messaggio) ? "2px" : "1px",
                        },
                        "&:hover fieldset": { borderColor: errors.messaggio ? "#d32f2f" : field.value?.trim().length >= 10 && !errors.messaggio ? "#4caf50" : "#999" },
                        "&.Mui-focused fieldset": { borderColor: errors.messaggio ? "#d32f2f" : "#1a1a1a" },
                      },
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>

          {/* Checkbox Termini e Condizioni */}
          <Box sx={{ mt: 3, mb: 2 }}>
            <Controller
              name="acceptTerms"
              control={control}
              rules={{
                required: "Devi accettare i Termini e Condizioni",
              }}
              render={({ field }) => (
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value}
                        sx={{
                          color: "#1a1a1a",
                          "&.Mui-checked": {
                            color: "#1a1a1a",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2" sx={{ color: "#666", fontSize: "0.875rem" }}>
                        Accetto i{" "}
                        <Link
                          href="/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: "#1a1a1a",
                            fontWeight: 600,
                            textDecoration: "none",
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          Termini e Condizioni
                        </Link>
                        {" *"}
                      </Typography>
                    }
                  />
                  {errors.acceptTerms && (
                    <Typography
                      variant="caption"
                      sx={{ color: "#d32f2f", display: "block", ml: 4, mt: 1 }}
                    >
                      {errors.acceptTerms.message}
                    </Typography>
                  )}
                </Box>
              )}
            />
          </Box>

          <Box sx={{ mt: 2 }}>
            {submitted && (
              <Box
                sx={{
                  backgroundColor: "#e8f5e9",
                  color: "#2e7d32",
                  p: 2,
                  mb: 2,
                  border: "1px solid #81c784",
                  fontSize: "0.875rem",
                }}
              >
                ✓ Messaggio inviato con successo! Ti risponderò entro 24 ore.
              </Box>
            )}
            {submitError && (
              <Box
                sx={{
                  backgroundColor: "#ffebee",
                  color: "#c62828",
                  p: 2,
                  mb: 2,
                  border: "1px solid #ef5350",
                  fontSize: "0.875rem",
                }}
              >
                ✗ {submitError}
              </Box>
            )}
            <Button
              type="submit"
              disabled={loading}
              disableElevation
              sx={{
                backgroundColor: loading ? "#999" : "#1a1a1a",
                color: "#fff",
                borderRadius: 0,
                px: 5,
                py: 1.8,
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: loading ? "#999" : "#444",
                },
                transition: "background-color 0.3s ease",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Invio in corso..." : submitted ? "Messaggio inviato!" : "Invia messaggio"}
            </Button>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{ color: "#999", fontSize: "0.75rem", mt: 4 }}
        >
          I campi contrassegnati con * sono obbligatori.
          <br />
          Risponderò entro 24 ore durante i giorni lavorativi.
        </Typography>
      </Container>
    </Box>
  )
}

export default ContactForm
