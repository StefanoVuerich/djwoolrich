# Cookie Banner e Google Analytics - Configurazione

Questo documento spiega come è configurato il cookie banner e come completare la configurazione di Google Analytics.

## 🍪 Cookie Banner

Un banner cookies è stato implementato per conformità GDPR italiano. Il banner:

- ✅ Appare la prima volta che l'utente visita il sito
- ✅ Blocca la navigazione fino all'accettazione
- ✅ Offre tre opzioni: Rifiuta Tutto, Personalizza, Accetta Tutto
- ✅ Consente scelta granulare di quali cookie accettare:
  - Cookie Tecnici (sempre abilitati, non richiedono consenso)
  - Cookie di Analisi (Google Analytics)
  - Cookie di Preferenza (tema, lingua, ecc)
- ✅ Salva la preferenza in localStorage per non mostrare di nuovo il banner
- ✅ Link a Cookie Policy per ulteriori dettagli

### File Coinvolti

- `src/components/CookieBanner.js` - Componente del banner
- `src/components/Layout.js` - Integrazione del banner in tutte le pagine
- `.env.local` - Configurazione (vedi sotto)

---

## 📊 Google Analytics - Configurazione

### Passo 1: Creare Account Google Analytics

1. Vai a [Google Analytics](https://analytics.google.com/)
2. Accedi con il tuo account Google
3. Crea una nuova proprietà per il tuo sito `djwoolrich.it`
4. Seleziona "Web" come piattaforma
5. Completa la configurazione iniziale

### Passo 2: Ottenere il Measurement ID

1. Nella proprietà creata, vai a **Admin** → **Proprietà** → **Sorgenti dati** → **Web**
2. Troverai il **Measurement ID** nel formato `G-XXXXXXXXXX`
3. Copia questo ID

### Passo 3: Aggiungere ID nel .env.local

Nel file `.env.local`, aggiungi:

```
GATSBY_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

Sostituisci `G-XXXXXXXXXX` con il tuo Measurement ID.

Esempio:
```
GATSBY_GOOGLE_ANALYTICS_ID=G-ABC123DEF45
```

### Passo 4: Riavviare il Dev Server

Dopo aver modificato `.env.local`, riavvia il dev server:

```bash
gatsby clean
gatsby develop
```

---

## 🔒 Comportamento del Cookie Banner

### Primo Accesso

- Banner appare in basso
- Utente può scegliere:
  - **Rifiuta Tutto**: Solo cookie tecnici, niente analytics
  - **Personalizza**: Scelta granulare di ogni categoria
  - **Accetta Tutto**: Tutti i cookie attivati

### Dopo Accettazione

- Banner scompare
- Preferenza salvata in localStorage con chiave `cookieConsent`
- Google Analytics carica (se analytics è stato accettato)
- Banner non mostra più a meno che localStorage non sia cancellato

### Cambio Preferenze

L'utente può:
1. Cancellare localStorage manualmente dal browser
2. Contattare info@djwoolrich.it per cambiare preferenze (vedi Cookie Policy)

---

## 📋 Verifica Configurazione

### Verificare che il Banner Funzioni

1. Apri Developer Tools (F12)
2. Vai a **Application** → **Local Storage**
3. Cerca la chiave `cookieConsent`
4. Dovrebbe contenere oggetto JSON simile a:
   ```json
   {
     "analytics": true,
     "preferences": true,
     "timestamp": "2026-05-07T10:30:00.000Z"
   }
   ```

### Verificare Google Analytics

1. Se analytics è accettato, dovresti vedere script Google Analytics caricato
2. Apri Network tab in Developer Tools
3. Cerca requests a `googletagmanager.com`
4. Dovresti vederne uno con tuo Measurement ID

### Reset e Test

Per testare il banner di nuovo:
1. Developer Tools → Application → Local Storage
2. Elimina la chiave `cookieConsent`
3. Refresh pagina
4. Banner dovrebbe riapparire

---

## 🛡️ Privacy e Sicurezza

### Google Analytics

- Configura **anonimizzazione IP** nelle impostazioni di Google Analytics per GDPR compliance
- Considera di escludere IP interni (utenti DJ Woolrich)

### GDPR Compliance

Il sistema è conforme a:
- ✅ GDPR (Regolamento 2016/679)
- ✅ ePrivacy Directive
- ✅ Linee Guida Garante Privacy italiano
- ✅ Blocco preventivo degli script (Google Analytics non carica senza consenso)
- ✅ Consenso granulare (scelta per ogni categoria)
- ✅ Documentazione (Cookie Policy completa)

---

## 📞 Supporto

Se hai problemi:

1. Verifica che `.env.local` sia configurato correttamente
2. Pulisci cache: `gatsby clean` 
3. Riavvia: `gatsby develop`
4. Controlla console (F12) per errori

Per domande su GDPR e privacy:
- Vedi `/privacy` per Privacy Policy
- Vedi `/cookie` per Cookie Policy
- Contatta: info@djwoolrich.it
