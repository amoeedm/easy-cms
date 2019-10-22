
# Presentasjon: Easy CMS Populate
<br/>
1. Om Google Chrome utvidelser<br/>
2. Arkitektur: Easy CMS Populate<br/>
3. Prosess: start til nåværende versjon<br/>
4. Mulige forbedringer<br/>
<br/>

## 1 Om Google Chrome utvidelser

* Nødvendig: `manifest.json` (info og rettigheter).<br/>
* Arkitektur:<br/>
<div align="center"><img src="chromeArchitecture.png"></div>
<br/><br/>

## 2 Arkitektur: Easy CMS Populate

<div align="center"><img src="currentArchitecture.png"></div>

### 2.1 Handlingssekvens

|  #  |      Handling      |  Konsekvens |
|----------|-------------|------|
| 1 |  Klikk på ikon | `popup.html` åpnes |
| 2 |  Klikk på skjemaknapp på `popup.html`   |  `popup.js` lytter og sender data til aktiv fane i Chrome |
| 3 |  |  `background.js` lytter til melding, henter `url` og sender data til `Google Sheets` med `Sheets API`    |
| 4 | | Brukeren autentiseres med `OAuth2` |
| 5 | | Regnearket fylles etter mal |

<br/>
<br/>

## 3 Prosess: start til nåværende versjon

1. Ide.<br/>
2. Plattform?<br/>
3. `popup.html` med debugging.<br/>
4. `popup.js` med debugging.<br/>
5. Message sending? `content.js`?<br/>
6. Google Sheet API. <br/>
7. Levering.<br/><br/>

## 4 Mulige forbedringer

* Bruke `content.js` og oppdatere generell Google Sheet, hente DOM-element med `url` og oppdaterer.
* Leveres pakket istedenfor upakket.
* Lage andre maler for automatisert utfylling, og la brukeren hake av malen.
