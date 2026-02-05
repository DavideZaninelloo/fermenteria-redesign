# PDR — Website Redesign  
**Cliente:** Fermenteria  
**Tipo progetto:** Sito vetrina + conversione prenotazioni  
**Obiettivo business:** Aumentare prenotazioni, contatti WhatsApp e percezione premium/artigianale

---

## 1. Contesto

Fermenteria è un ristorante biologico artigianale nel centro storico di Bassano del Grappa, con un forte posizionamento su:

- cucina **artigianale fatta da zero**
- ingredienti **biologici e a km 0**
- **tutto il menù disponibile gluten free**
- attenzione a vegani e vegetariani
- esperienza culinaria tradizionale ma sana e inclusiva

Il sito attuale risulta:
- poco emozionale  
- poco ottimizzato per mobile  
- con menù leggibile quasi solo via PDF  
- poco orientato alla prenotazione  

---

## 2. Obiettivi del Progetto

### Obiettivi Primari
1. Aumentare **prenotazioni e richieste via WhatsApp**
2. Rafforzare la percezione del ristorante come:
   - artigianale autentico  
   - biologico locale  
   - inclusivo (gluten free per tutti)
3. Rendere il **menù facile da consultare da mobile**

### Obiettivi Secondari
- Migliorare SEO locale (es. “ristorante bio Bassano”, “gluten free Bassano”)
- Migliorare immagine premium del locale
- Rendere il sito semplice da aggiornare in futuro

---

## 3. Target Utenti

### Persona 1 – Coppia o famiglia locale
- Vuole mangiare bene e sano
- Cerca opzioni gluten free o vegetariane
- Vuole vedere il menù prima di prenotare

### Persona 2 – Turista
- Cerca ristorante tipico ma non turistico
- Vuole qualità e autenticità
- Decide velocemente da mobile

### Persona 3 – Cliente con intolleranze
- Ha bisogno di sicurezza sugli ingredienti
- Vuole sentirsi incluso, non un “caso a parte”

---

## 4. Proposta di Valore

> “Cucina artigianale biologica, fatta a mano ogni giorno, dove tradizione italiana e inclusività si incontrano.”

Pilasti chiave da comunicare nel sito:
- Fatto a mano ogni giorno  
- Ingredienti bio e a km 0  
- Menù completamente disponibile gluten free  
- Tradizione italiana autentica, non industriale  

---

## 5. Struttura del Sito (Sitemap)

### Pagine principali
- `/` Home
- `/menu`
- `/contatti`
- `/privacy`
- `/cookie`

### Sezioni Homepage (ordine strategico)

1. Hero con claim forte + CTA prenotazione
2. Perché Fermenteria (artigianale / bio / inclusivo)
3. Piatti in evidenza (preview menù)
4. Vini & fermentazioni
5. Sezione Gluten Free / Inclusività
6. Recensioni clienti
7. Dove siamo (mappa + contatti)
8. Asporto & delivery
9. Chi siamo (storia + filosofia)

---

## 6. Funzionalità Richieste

### Funzionalità Essenziali
- Pulsante **WhatsApp fisso** sempre visibile
- Click-to-call telefono
- Menù in HTML filtrabile (oltre al PDF scaricabile)
- Mappa Google integrata
- Orari sempre visibili

### SEO & Tecniche
- Dati strutturati Schema.org `Restaurant`
- Ottimizzazione SEO locale (title, meta description, heading)
- Performance mobile alta (Lighthouse > 90)
- Immagini ottimizzate per web

---

## 7. Requisiti di Design

### Mood
- Artigianale moderno
- Caldo, naturale, non rustico
- Pulito e con percezione premium

### Stile visivo
- Colori neutri caldi + accento verde naturale
- Fotografie grandi, luminose, focus su mani, impasti, piatti
- Tipografia elegante ma semplice
- Animazioni leggere e fluide (non invadenti)

---

## 8. Contenuti da Richiedere al Cliente

Il cliente dovrà fornire:

- Foto dei piatti principali
- Foto della cucina e del team
- Orari aggiornati
- Menù aggiornato
- Lista vini
- Eventuali certificazioni (gluten free / bio)

---

## 9. KPI di Successo

Dopo il lancio il sito sarà considerato efficace se:

- Aumentano le richieste via WhatsApp
- Aumentano le visite alla pagina menù
- Tempo medio sulla pagina superiore a 1 minuto
- Aumento chiamate da dispositivi mobile

---

## 10. Stack Tecnico Proposto

- Frontend: Next.js + Tailwind CSS  
- Hosting: Vercel  
- Contenuti menù: file JSON o Markdown gestibili facilmente  
- Nessun backend complesso necessario  

---

## 11. Vincoli

- Mobile-first
- Caricamento veloce
- Accessibilità base (contrasto colori, testi leggibili)
- Conformità GDPR (cookie banner + privacy policy)

---

## 12. Output Attesi dal Progetto

- Nuova architettura del sito
- Copy completo per le sezioni principali
- Design system base (colori, font, componenti)
- Sito responsive pronto per pubblicazione

---

## 13. Strategia Immagini (Photo-Ready)

Al momento non sono disponibili foto professionali.  
Il sito deve quindi essere progettato con **spazi immagine già strutturati**, utilizzando placeholder temporanei, in modo che le foto reali possano essere inserite facilmente in futuro senza modifiche al layout.

### Obiettivi
- Mantenere un design visivamente forte anche senza foto definitive
- Definire chiaramente **che tipo di foto serviranno**
- Permettere una sostituzione immagini semplice (senza toccare il layout)

---

### Tipologie di Immagini da Prevedere

#### Hero Image
- Formato: orizzontale 16:9  
- Futuro contenuto: piatto iconico / mani che impastano / cucina in azione  

#### Sezione “Artigianale”
- 1 immagine verticale 4:5  
- Mani che lavorano pasta fresca o impasti  

#### Sezione “Bio & Km0”
- 1 immagine orizzontale  
- Ingredienti freschi e prodotti locali  

#### Sezione “Inclusivo / Gluten Free”
- 1 immagine piatto gluten free  

#### Piatti in Evidenza
- 6 immagini quadrate (1:1)  
- Piatti signature  

#### Vini & Fermentazioni
- 1 immagine verticale bottiglie o calici  

#### Chi Siamo
- 1 immagine cucina/team  
- 1 ritratto chef o fondatore  

#### Ambiente / Sala
- 1–2 immagini larghe 16:9  
- Interno ristorante, atmosfera  

---

### Requisiti Tecnici Immagini

- Uso di `next/image`
- Aspect ratio bloccati per evitare layout shift
- Supporto WebP/AVIF
- Lazy loading attivo

---

### Placeholder Strategy

Fino all’arrivo delle foto reali:

- Usare immagini placeholder coerenti (texture naturali, colori neutri)
- Applicare overlay leggero per leggibilità testi
- Inserire commenti nel codice per futura sostituzione immagini

---

### Future Content Flow

Quando il ristorante fornirà le foto:

1. Sostituzione file nella cartella `/public/images`
2. Nessuna modifica a layout o CSS necessaria
3. Possibile aggiunta futura di gallerie senza rifare le sezioni