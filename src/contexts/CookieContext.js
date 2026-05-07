import React, { createContext, useState, useContext } from "react"

const CookieContext = createContext()

export const CookieProvider = ({ children }) => {
  const [showCookieBanner, setShowCookieBanner] = useState(false)

  const openCookiePreferences = () => {
    setShowCookieBanner(true)
  }

  const closeCookieBanner = () => {
    setShowCookieBanner(false)
  }

  return (
    <CookieContext.Provider
      value={{
        showCookieBanner,
        setShowCookieBanner,
        openCookiePreferences,
        closeCookieBanner,
      }}
    >
      {children}
    </CookieContext.Provider>
  )
}

export const useCookieContext = () => {
  const context = useContext(CookieContext)
  if (!context) {
    throw new Error("useCookieContext deve essere usato dentro CookieProvider")
  }
  return context
}
