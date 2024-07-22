# GameMaster

GameMaster è più di un semplice database: è la tua risorsa completa per esplorare, scoprire e immergerti nel vasto mondo dei videogiochi. Con una vasta collezione di titoli e informazioni dettagliate, GameMaster ti aiuta a trovare i giochi più recenti, a riscoprire i classici intramontabili e a seguire le ultime novità del settore.

## Tecnologie Utilizzate

- **React.js**
- **Bootstrap**
- **Axios**
- **React Router DOM**
- **react-lottie**
- **Sass (SCSS)**
- **styled-components**
- **Formspree**

## Sviluppo

Il progetto è sviluppato in tre parti principali:

### Home

Nella homepage, gli utenti possono inserire il nome di un videogioco nell'input per cercare informazioni dettagliate su di esso.

### Chi Siamo

La pagina di descrizione del team e di cosa facciamo. Qui troverai informazioni sul team di sviluppo e sulla missione di GameMaster.

### Contattaci

In questa sezione è presente un form per contattare il team di GameMaster. Il form è realizzato utilizzando le API di Formspree.

### Errore

Pagina di errore se l'utente reindirizza il sito in un posto sbagliato.

### Pagina Singola

Cliccando sulla card, l'utente può visualizzare tutte le informazioni dettagliate sul gioco.

## Struttura del Progetto

- **src/**
  - **components/**: Contiene i componenti React riutilizzabili.
  - **screens/**: Contiene le schermate principali (Home, Chi Siamo, Contattaci, Error e Single Game).
  - **style/**: Contiene i file di stile SCSS.
  - **utils/**: Contiene utility functions e custom hooks.
  - **useFetch.js**: Custom hook per gestire il fetch dei dati dai server.
