
# Presentasjon: Easy CMS Populate
<br/>
1. Om Google Chrome utvidelser<br/>
2. Arkitektur: Easy CMS Populate<br/>
3. Prosess: start til nåværende versjon<br/>
4. Mulige forbedringer<br/>
<br>

## 1. Om Google Chrome utvidelser

* Nødvendig: `manifest.json` (info og rettigheter).<br/>
* Arkitektur:<br/>
<div align="center"><img src="chromeArchitecture.png"></div>
<br/><br/>

## 2. Arkitektur: Easy CMS Populate

<div align="center"><img src="currentArchitecture.png"></div>

### 2.1 Handlingssekvens

|  #  |      Handling      |  Konsekvens |
|----------|-------------|------|
| 1 |  Klikk på ikon | `popup.html` åpnes |
| 2 |  Klikk på skjemaknapp på `popup.html`   |  `popup.js` lytter og sender data til aktiv fane i Chrome |
| 3 |  |  `background.js` lytter til melding og sender data til `Google Sheets` med `Sheets API`    |
| 4 | | Brukeren autentiseres med `OAuth2` |
| 5 | | Regnearket fylles etter mal |
