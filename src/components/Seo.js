import React from "react"
import siteConfig from "../siteconfig.json"

// URL pubblico di base (host + pathPrefix), senza slash finale
const baseUrl = `${siteConfig.siteUrl}${siteConfig.pathPrefix}`

// URL dei profili social effettivamente configurati
const socialUrls = Object.values(siteConfig.social).filter(Boolean)

// Schema LocalBusiness riutilizzabile in più pagine
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  "@id": `${baseUrl}/#business`,
  name: siteConfig.name,
  description: siteConfig.descrizione,
  url: `${baseUrl}/`,
  image: `${baseUrl}${siteConfig.immagineOg}`,
  email: siteConfig.email,
  telephone: siteConfig.telefono,
  areaServed: siteConfig.zonaServita.map(nome => ({
    "@type": "AdministrativeArea",
    name: nome,
  })),
  ...(socialUrls.length > 0 && { sameAs: socialUrls }),
}

// Costruisce il BreadcrumbList a partire da [{ nome, path }]
export const breadcrumbSchema = voci => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: voci.map((voce, indice) => ({
    "@type": "ListItem",
    position: indice + 1,
    name: voce.nome,
    item: `${baseUrl}${voce.path}`,
  })),
})

/**
 * Componente per la Head API di Gatsby.
 * `path` è il percorso della pagina senza prefisso (es. "/services/").
 * `schemas` è un array di oggetti JSON-LD.
 */
const Seo = ({
  title,
  description = siteConfig.descrizione,
  path = "/",
  noindex = false,
  schemas = [],
  children,
}) => {
  const url = `${baseUrl}${path}`
  const image = `${baseUrl}${siteConfig.immagineOg}`

  return (
    <>
      <html lang="it" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, indice) => (
        <script key={indice} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      {children}
    </>
  )
}

export default Seo
