# Setup EmailJS per Invio Email

Questo progetto utilizza **EmailJS** per gestire l'invio dei messaggi dal form di contatto.

## Procedura di Configurazione

### 1. Creare un Account EmailJS

1. Vai su [emailjs.com](https://www.emailjs.com/)
2. Clicca su **Sign Up** e crea un account gratuito
3. Completa la registrazione e accedi al dashboard

### 2. Configurare un Email Service

1. Nel dashboard, vai su **Email Services**
2. Clicca su **Add Service**
3. Scegli il provider email (consigliato: **Gmail**)
4. Segui le istruzioni per connettere il tuo account email
5. Copia il **Service ID** (esempio: `service_abc123xyz`)

### 3. Creare un Template Email

1. Nel dashboard, vai su **Email Templates**
2. Clicca su **Create New Template**
3. Configura il template così:

**Template Name:** `contact_form` (o il nome che preferisci)

**Subject (Riga d'oggetto):**
```
Nuovo messaggio da {{from_name}}
```

**HTML Content:**
```html
<p>Ciao,</p>

<p>Hai ricevuto un nuovo messaggio dal form di contatto:</p>

<hr>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefono:</strong> {{telefono}}</p>
<p><strong>Servizio interessato:</strong> {{servizio}}</p>
<p><strong>Data evento:</strong> {{data}}</p>
<p><strong>Accetta Termini e Condizioni:</strong> {{accept_terms}}</p>

<hr>

<p><strong>Messaggio:</strong></p>
<p>{{messaggio}}</p>

<hr>

<p>Saluti,<br>
DJ Woolrich Website</p>
```

4. Clicca su **Save**
5. Copia il **Template ID** dal template creato

### 4. Ottenere la Public Key

1. Nel dashboard, vai su **Account**
2. Clicca su **API Keys**
3. Copia la **Public Key**

### 5. Aggiornare il file .env.local

Modifica il file `.env.local` nella root del progetto e aggiungi i valori ottenuti:

```env
GATSBY_EMAILJS_PUBLIC_KEY=your_public_key_here
GATSBY_EMAILJS_SERVICE_ID=your_service_id_here
GATSBY_EMAILJS_TEMPLATE_ID=your_template_id_here
```

**Esempio completo:**
```env
GATSBY_EMAILJS_PUBLIC_KEY=abc123xyz_public_key_123xyz
GATSBY_EMAILJS_SERVICE_ID=service_abc123xyz
GATSBY_EMAILJS_TEMPLATE_ID=template_xyz789abc
```

### 6. Testare l'Integrazione

1. Riavvia il server di sviluppo:
```bash
gatsby develop
```

2. Vai alla pagina `/contact`
3. Compila e invia il form di test
4. Verifica che ricevi l'email nel tuo inbox

## Variabili del Template

Nel template email puoi usare le seguenti variabili:

- `{{from_name}}` - Nome dell'utente
- `{{from_email}}` - Email dell'utente
- `{{telefono}}` - Numero di telefono
- `{{servizio}}` - Servizio interessato
- `{{data}}` - Data dell'evento
- `{{messaggio}}` - Messaggio principale
- `{{accept_terms}}` - Flag di accettazione Termini e Condizioni (Sì/No)
- `{{to_email}}` - Email di destinazione (info@djwoolrich.it)

## Limitazioni Piano Gratuito

Il piano gratuito di EmailJS consente:
- ✓ 200 email al mese
- ✓ 1 email service
- ✓ Template illimitati
- ✓ Form illimitati

Se avrai volume maggiore, puoi upgrade a un piano a pagamento.

## Troubleshooting

### "Invalid credentials" o errore di autenticazione
- Verifica che la Public Key sia corretta
- Controlla che il Service ID esista e sia attivo
- Riavvia il server

### Email non ricevute
- Controlla lo spam
- Verifica il template nel dashboard EmailJS
- Assicurati che il servizio email sia connesso correttamente

### CORS Error
- Le variabili d'ambiente devono iniziare con `GATSBY_` per essere accessibili al browser
- Non mettere le credenziali nel codice sorgente

## Note di Sicurezza

- La **Public Key** è sicura da esporre (è pensata per questo)
- Non condividere le credenziali nel repository
- Il file `.env.local` è già nel `.gitignore`
