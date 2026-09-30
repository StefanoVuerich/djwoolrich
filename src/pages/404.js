import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Pagina non trovata</h1>
        <p style={paragraphStyles}>
          Ci dispiace 😔, non abbiamo trovato la pagina che cercavi.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Prova a creare una pagina in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Torna alla home</Link>.
        </p>
        </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => (
  <Seo
    title={"Pagina non trovata — DJ Woolrich"}
    path="/404/"
    noindex
  />
)
