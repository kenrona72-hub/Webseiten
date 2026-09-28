# DEQO Events – Version 1.5 (Konzeptvorschau)

Klickbare Verkaufsdemo für Gencer und Dogukan. Statisches HTML, CSS und Vanilla JavaScript.
Kein Framework, keine Datenbank, keine Registrierung, keine Zahlung, keine echte KI.

## Lokal starten

```bash
cd deqo-events
python3 -m http.server 4173
# http://localhost:4173
```

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Struktur und Texte |
| `styles.css` | Design, Layout, Responsive, reduced-motion |
| `app.js` | Demo-Daten, Suche, Filter, Favoriten, Dialoge, Anfrage |

## Was Version 1.5 gegenüber Version 1 ändert

- Eigene Farbwelt: warmes Creme, tiefes Pflaume, zurückhaltendes Champagnergold. Kein Nachbau der Referenz-PDF.
- Zwei getrennte Einstiege: Haupt-CTA `Anbieter finden` im Hero, sekundär `Als Anbieter sichtbar werden`.
- Suche wirkt wirklich: eingegebener Ort verändert Überschrift und die Ortsangabe jedes Demo-Profils.
- Filter sind echte Filter: Kategorie, Umkreis, Bewertung, Budget, Personenzahl, Ausstattung, Sortierung.
- Aktive Filter als Chips sichtbar und einzeln entfernbar.
- Horizontale Strecke auf drei Karten gekürzt (Wünsche, Anbieter, DEQO Complete), erst nach der Ergebnisliste.
  Kein Scroll-Hijacking. Desktop mit Pfeilen und Punkten, mobil mit `scroll-snap`.
  Passen alle Karten ins Bild, blenden sich Pfeile und Punkte aus statt tot dazustehen.
- Anfrage als validierter Demo-Dialog: Name, Eventdatum, Ort, Gästezahl, Kontakt. Abschluss klar als Demo-Bestätigung.
- Anbieterbereich als eigener Funnel: Nutzen, Profilvorschau, danach erst Konzeptpreise.

## Bewusst entfernt

- **Sprachumschalter (DE/EN/TR/SQ):** zeigte nur einen Hinweis und versprach eine Funktion, die es nicht gibt.
- **Chat-Widget „Ayla“:** wirkte wie eine KI-Beraterin, war aber ein festes Antwortskript. Für eine ehrliche Demo ungeeignet.
- **Erfundene Vertrauensbelege:** keine Nutzerzahlen, keine Partnerlogos, keine echten Google-Bewertungen.

## Noch Demo, bewusst so

- Alle Anbieter, Bilder, Preise und Sternwerte sind Beispieldaten und auf jeder Karte als `Demo-Profil` markiert.
- Bewertungen stehen ausdrücklich als „Demo-Bewertungen, Beispielwert“.
- Preise 29 / 59 / 99 Euro sind als Konzeptpreise gekennzeichnet, nicht buchbar.
- Bilder liegen bei Unsplash und werden per URL geladen.
- Favoriten werden nur lokal im Browser des Betrachters gemerkt (`localStorage`), sonst wird nichts gespeichert.
- Das Anfrageformular sendet nichts. Die Eingaben bleiben im Browser und werden nicht übertragen.

## Offener Platzhalter vor Veröffentlichung

In `app.js` ganz oben:

```js
const DEQO_KONTAKT = {
  whatsapp: null,   // z. B. "https://wa.me/49XXXXXXXXXX"
  kalender: null,   // z. B. "https://cal.com/deqo-events/erstgespraech"
  email: null       // z. B. "hallo@deqo-events.de"
};
```

Bewusst leer, weil noch keine bestätigten DEQO-Kontaktdaten vorliegen. Solange die Werte `null` sind,
endet jede Anfrage in einer Demo-Bestätigung mit dem Hinweis, dass das Ziel noch hinterlegt wird.
Sobald Nummer, Terminlink oder Postfach feststehen, reicht der Eintrag an dieser einen Stelle.

Ebenfalls offen vor einer echten Veröffentlichung: Impressum, Datenschutzerklärung und Bildrechte.

## Geprüft

Automatisierter Browsertest (Chromium) auf 1440x900 und 390x844, 38 Prüfungen ohne Fehler:
kein horizontaler Überlauf, Ortsübernahme in Überschrift und Ergebnissen, Kategorie- und Bewertungsfilter,
entfernbare Filterchips, Favoritenzähler, Detaildialog, Anfrageformular mit Validierung und Demo-Bestätigung,
Journey per Pfeil und Wischen, vertikales Scrollen bleibt frei, Tastaturfokus sichtbar, keine Konsolenfehler,
`prefers-reduced-motion` ohne Animation.
