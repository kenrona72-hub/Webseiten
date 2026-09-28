/* DEQO Events – Version 1.5 – Konzeptvorschau
   Keine Datenbank, keine Registrierung, keine Zahlung, keine echte KI.
   Es werden keine Daten an externe Dienste gesendet oder dauerhaft gespeichert. */

/* ---------------------------------------------------------------
   Zentrale Kontaktziele.
   Bewusst leer: es liegen noch keine bestätigten DEQO-Kontaktdaten vor.
   Sobald Nummer, Terminlink oder Postfach feststehen, hier eintragen.
   Solange null, bleibt der Abschluss eine reine Demo-Bestätigung.
----------------------------------------------------------------- */
const DEQO_KONTAKT = {
  whatsapp: null,   // z. B. "https://wa.me/49XXXXXXXXXX"
  kalender: null,   // z. B. "https://cal.com/deqo-events/erstgespraech"
  email: null       // z. B. "hallo@deqo-events.de"
};

const KATEGORIEN = [
  { key: "Location", icon: "⌂", label: "Location" },
  { key: "Fotografie", icon: "◉", label: "Fotografie" },
  { key: "DJ & Musik", icon: "♫", label: "DJ & Musik" },
  { key: "Dekoration", icon: "✿", label: "Dekoration" },
  { key: "Floristik", icon: "❀", label: "Floristik" },
  { key: "Catering", icon: "♨", label: "Catering" }
];

/* Beispieldaten für die Vorschau. Keine echten Anbieter, keine echten Bewertungen. */
const providers = [
  {
    id: "maison-amour", name: "Maison d’Amour", category: "Location",
    distance: 8, rating: 4.9, reviews: 126, price: 3900,
    capacityMin: 300, capacityMax: 650, capacityLabel: "300 bis 650 Personen",
    area: "Innen- und Außenbereich", style: "Zeitlose Eleganz",
    tags: ["innen", "aussen", "parkplatz"],
    features: ["Lichtdurchfluteter Festsaal", "Private Gartenanlage", "Exklusiver Veranstaltungstag"],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
    description: "Ein eleganter Rückzugsort für große Feste, mit wandelbarem Saal, weitläufigem Garten und ruhigem Ambiente."
  },
  {
    id: "atelier-noir", name: "Atelier Noir", category: "Location",
    distance: 17, rating: 4.8, reviews: 94, price: 2900,
    capacityMin: 300, capacityMax: 500, capacityLabel: "300 bis 500 Personen",
    area: "Loft und Innenhof", style: "Moderner Industrial Look",
    tags: ["innen", "aussen", "barrierefrei"],
    features: ["Flexible Raumaufteilung", "Professionelle Lichttechnik", "Catering frei wählbar"],
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=80",
    description: "Klare Architektur trifft warme Lichtstimmung. Ein wandelbarer Ort für Paare, die modern feiern wollen."
  },
  {
    id: "villa-aurelia", name: "Villa Aurelia", category: "Location",
    distance: 14, rating: 4.7, reviews: 83, price: 3400,
    capacityMin: 300, capacityMax: 450, capacityLabel: "300 bis 450 Personen",
    area: "Villa, Terrasse und Garten", style: "Romantisches Anwesen",
    tags: ["innen", "aussen"],
    features: ["Historische Architektur", "Freie Trauung im Garten", "Braut-Suite inklusive"],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80",
    description: "Eine charaktervolle Villa mit großzügigem Garten und stilvollen Räumen für emotionale Trauungen."
  },
  {
    id: "palmengarten", name: "Der Palmengarten", category: "Location",
    distance: 21, rating: 4.6, reviews: 71, price: 2600,
    capacityMin: 300, capacityMax: 600, capacityLabel: "300 bis 600 Personen",
    area: "Glashaus und Außenbereich", style: "Botanische Leichtigkeit",
    tags: ["innen", "aussen", "barrierefrei", "parkplatz"],
    features: ["Natürliches Tageslicht", "Grüne Kulisse", "Freie Trauung möglich"],
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80",
    description: "Natur, Licht und moderne Transparenz ergeben eine außergewöhnliche Kulisse für einen stilvollen Tag."
  },
  {
    id: "forum-vision", name: "Forum Vision", category: "Location",
    distance: 19, rating: 4.5, reviews: 62, price: 2200,
    capacityMin: 350, capacityMax: 900, capacityLabel: "350 bis 900 Personen",
    area: "Eventhalle und Lounge", style: "Urban und großzügig",
    tags: ["innen", "barrierefrei", "parkplatz"],
    features: ["Große Tanzfläche", "Moderne Eventtechnik", "Ausreichend Parkplätze"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
    description: "Großzügige Flächen, moderne Technik und viel Gestaltungsfreiheit für große Hochzeiten."
  },
  {
    id: "studio-lumen", name: "Studio Lumen", category: "Fotografie",
    distance: 6, rating: 4.9, reviews: 108, price: 1900,
    capacityMin: 0, capacityMax: 9999, capacityLabel: "Ganztagesbegleitung",
    area: "Reportage und Portrait", style: "Natürlich und ruhig",
    tags: ["barrierefrei"],
    features: ["Zwei Fotografen möglich", "Bildauswahl in 14 Tagen", "Onlinegalerie inklusive"],
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1000&q=80",
    description: "Dokumentarische Hochzeitsfotografie ohne gestellte Posen. Der Tag wird begleitet, nicht inszeniert."
  },
  {
    id: "licht-und-linie", name: "Licht & Linie", category: "Fotografie",
    distance: 24, rating: 4.6, reviews: 57, price: 1400,
    capacityMin: 0, capacityMax: 9999, capacityLabel: "Halb- oder Ganztag",
    area: "Foto und Video kombinierbar", style: "Editorial",
    tags: [],
    features: ["Foto und Video aus einer Hand", "Drohnenaufnahmen möglich", "Highlight-Film in 4 Wochen"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    description: "Bildsprache mit klarer Linie, ruhigem Schnitt und Fokus auf die Menschen des Tages."
  },
  {
    id: "nachtklang", name: "Nachtklang", category: "DJ & Musik",
    distance: 11, rating: 4.8, reviews: 75, price: 1200,
    capacityMin: 0, capacityMax: 9999, capacityLabel: "Bis 800 Gäste beschallbar",
    area: "DJ, Technik und Licht", style: "Vom Empfang bis zur letzten Stunde",
    tags: ["parkplatz"],
    features: ["Absprache der Playlist", "Licht- und Tontechnik", "Mehrsprachige Moderation"],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80",
    description: "Musikalische Begleitung, die zur Feier passt statt zum Standardset. Technik wird komplett gestellt."
  },
  {
    id: "atelier-serein", name: "Atelier Serein", category: "Dekoration",
    distance: 16, rating: 4.7, reviews: 49, price: 1800,
    capacityMin: 0, capacityMax: 9999, capacityLabel: "Konzept und Aufbau",
    area: "Tischkonzept, Licht und Textil", style: "Reduziert und warm",
    tags: ["innen", "aussen"],
    features: ["Konzept vor Ort", "Auf- und Abbau", "Mietmobiliar verfügbar"],
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=80",
    description: "Dekoration, die den Raum ruhig macht statt voll. Konzept, Aufbau und Abbau kommen aus einer Hand."
  },
  {
    id: "flora-nocturna", name: "Flora Nocturna", category: "Floristik",
    distance: 9, rating: 4.9, reviews: 64, price: 950,
    capacityMin: 0, capacityMax: 9999, capacityLabel: "Brautstrauß bis Raumfloristik",
    area: "Saisonale Blumen", style: "Natürlich gebunden",
    tags: ["innen", "aussen"],
    features: ["Saisonale Auswahl", "Brautstrauß und Anstecker", "Lieferung am Morgen"],
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1000&q=80",
    description: "Florale Gestaltung nach Saison statt nach Katalog. Von der Anstecknadel bis zur Raumfloristik."
  },
  {
    id: "tafelwerk", name: "Tafelwerk", category: "Catering",
    distance: 22, rating: 4.6, reviews: 88, price: 2400,
    capacityMin: 100, capacityMax: 700, capacityLabel: "100 bis 700 Personen",
    area: "Menü, Buffet und Spätsnack", style: "Regional und saisonal",
    tags: ["innen", "aussen", "parkplatz"],
    features: ["Probeessen vorab", "Vegetarisch und vegan", "Service und Geschirr"],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80",
    description: "Küche mit regionalem Einkauf, abgestimmt auf Ablauf und Gästezahl. Probeessen ist Teil der Planung."
  }
];

/* ---------------------------------------------------------------
   Zustand
----------------------------------------------------------------- */
let gespeicherteFavoriten = [];
try {
  gespeicherteFavoriten = JSON.parse(localStorage.getItem("deqoFavorites") || "[]");
  if (!Array.isArray(gespeicherteFavoriten)) gespeicherteFavoriten = [];
} catch (fehler) {
  gespeicherteFavoriten = [];
}

const state = {
  location: "Stuttgart",
  category: "Location",
  radius: 50,
  guests: 300,
  minRating: 4,
  maxPrice: 5000,
  sort: "rating",
  features: new Set(),
  favorites: new Set(gespeicherteFavoriten)
};

const el = id => document.getElementById(id);
const providerList = el("providerList");
const providerDialog = el("providerDialog");
const requestDialog = el("requestDialog");
const toast = el("toast");
let letzterFokus = null;

const PREIS = neu => neu.toLocaleString("de-DE");

/* ---------------------------------------------------------------
   Aufbau der Kategorie-Auswahl
----------------------------------------------------------------- */
function baueKategorien() {
  const optionen = KATEGORIEN.map(k => `<option value="${k.key}">${k.label}</option>`).join("");
  el("heroCategory").innerHTML = optionen;
  el("categoryFilter").innerHTML = optionen;
  el("heroCategory").value = state.category;
  el("categoryFilter").value = state.category;

  el("categoryRail").innerHTML = KATEGORIEN.map(k => `
    <button type="button" data-category="${k.key}" aria-pressed="${k.key === state.category}">
      <i aria-hidden="true">${k.icon}</i>${k.label}
    </button>`).join("");

  el("categoryRail").querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      el("categoryFilter").value = state.category;
      el("heroCategory").value = state.category;
      aktualisiere();
    });
  });
}

/* ---------------------------------------------------------------
   Filterlogik
----------------------------------------------------------------- */
function gefilterteAnbieter() {
  return providers
    .filter(p => p.category === state.category)
    .filter(p => p.distance <= state.radius)
    .filter(p => p.rating >= state.minRating)
    .filter(p => p.price <= state.maxPrice)
    .filter(p => state.guests === 0 || p.capacityMax >= state.guests)
    .filter(p => [...state.features].every(f => p.tags.includes(f)))
    .sort((a, b) => {
      if (state.sort === "price") return a.price - b.price;
      if (state.sort === "distance") return a.distance - b.distance;
      return b.rating - a.rating;
    });
}

function ortText(p) {
  const ort = state.location.trim();
  if (!ort) return `${p.distance} km entfernt`;
  return p.distance <= 10 ? `${ort} · ${p.distance} km` : `Umkreis ${ort} · ${p.distance} km`;
}

/* ---------------------------------------------------------------
   Darstellung
----------------------------------------------------------------- */
function aktualisiere() {
  const ort = state.location.trim();
  const treffer = gefilterteAnbieter();
  const kategorieLabel = state.category === "Location" ? "Locations" : state.category;

  el("resultsTitle").textContent = ort
    ? `${kategorieLabel} rund um ${ort}`
    : `${kategorieLabel} in eurer Region`;
  const personenText = state.guests === 0 ? "Gästezahl egal" : `ab ${state.guests} Personen`;
  el("searchSummary").textContent =
    `${treffer.length} ${treffer.length === 1 ? "Demo-Profil" : "Demo-Profile"} · ${state.radius} km · ${personenText}`;

  zeichneAktiveFilter();
  zeichneListe(treffer);
}

function zeichneAktiveFilter() {
  const chips = [];
  const ort = state.location.trim();
  if (ort) chips.push({ label: "Ort", wert: ort, key: "ort" });
  chips.push({ label: "Kategorie", wert: state.category, key: "kategorie" });
  chips.push({ label: "Umkreis", wert: `${state.radius} km`, key: "radius" });
  if (state.guests > 0) chips.push({ label: "Gäste", wert: `ab ${state.guests}`, key: "guests" });
  if (state.minRating > 0) chips.push({ label: "Bewertung", wert: `ab ${String(state.minRating).replace(".", ",")}`, key: "rating" });
  if (state.maxPrice < 5000) chips.push({ label: "Preis", wert: `bis ${PREIS(state.maxPrice)} €`, key: "preis" });
  state.features.forEach(f => {
    const namen = { innen: "Innenbereich", aussen: "Außenbereich", barrierefrei: "Barrierefrei", parkplatz: "Parkplätze" };
    chips.push({ label: "Ausstattung", wert: namen[f], key: `feature:${f}` });
  });

  el("activeFilters").innerHTML = chips.map(c => `
    <span class="active-filter"><b>${c.label}:</b> ${c.wert}
      ${c.key === "kategorie" ? "" : `<button type="button" data-clear="${c.key}" aria-label="${c.label} ${c.wert} entfernen">×</button>`}
    </span>`).join("");

  el("activeFilters").querySelectorAll("[data-clear]").forEach(button => {
    button.addEventListener("click", () => entferneFilter(button.dataset.clear));
  });
}

function entferneFilter(key) {
  if (key === "ort") { state.location = ""; el("locationFilter").value = ""; el("heroLocation").value = ""; }
  if (key === "radius") { state.radius = 100; el("radiusFilter").value = "100"; el("heroRadius").value = "100"; }
  if (key === "guests") { state.guests = 0; el("heroGuests").value = "0"; setzePersonenChips(); }
  if (key === "rating") { state.minRating = 0; el("ratingFilter").value = "0"; }
  if (key === "preis") { state.maxPrice = 5000; el("priceRange").value = "5000"; setzePreisAusgabe(); }
  if (key.startsWith("feature:")) {
    const f = key.split(":")[1];
    state.features.delete(f);
    const box = document.querySelector(`[data-feature="${f}"]`);
    if (box) box.checked = false;
  }
  aktualisiere();
}

function zeichneListe(treffer) {
  if (!treffer.length) {
    providerList.innerHTML = `
      <div class="empty-state">
        <h3>Keine Demo-Profile für diese Auswahl</h3>
        <p>In dieser Vorschau sind nur wenige Beispielprofile hinterlegt. Setzt die Filter zurück oder fragt direkt an, dann meldet sich DEQO mit passenden Anbietern.</p>
        <div class="provider-actions">
          <button type="button" class="button button-outline" data-reset-inline>Filter zurücksetzen</button>
          <button type="button" class="button button-primary" data-open-request="allgemein">Anfrage starten</button>
        </div>
      </div>`;
    bindeAktionen();
    return;
  }

  providerList.innerHTML = treffer.map(p => {
    const favorit = state.favorites.has(p.id);
    return `
    <article class="provider-card">
      <div class="provider-image" style="background-image:url('${p.image}')">
        <span class="provider-badge">Demo-Profil</span>
        <button type="button" class="favorite-button ${favorit ? "active" : ""}" data-favorite="${p.id}"
          aria-pressed="${favorit}" aria-label="${p.name} als Favorit speichern">${favorit ? "♥" : "♡"}</button>
      </div>
      <div class="provider-main">
        <h3>${p.name}</h3>
        <p class="location">⌖ ${ortText(p)}</p>
        <span class="rating">★ ${p.rating.toFixed(1).replace(".", ",")} <small>(${p.reviews} Demo-Bewertungen, Beispielwert)</small></span>
        <div class="provider-facts">
          <span>${p.capacityLabel}</span>
          <span>${p.area}</span>
          <span>${p.style}</span>
        </div>
      </div>
      <div class="provider-side">
        <div>
          <span>Merkmale</span>
          <ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
        </div>
        <div>
          <p class="provider-price">ab ${PREIS(p.price)} € <small>(Beispielpreis)</small></p>
          <div class="provider-actions">
            <button type="button" class="button button-outline" data-detail="${p.id}">Mehr erfahren</button>
            <button type="button" class="button button-primary" data-request="${p.id}">Anfragen</button>
          </div>
        </div>
      </div>
    </article>`;
  }).join("");

  bindeAktionen();
}

function bindeAktionen() {
  providerList.querySelectorAll("[data-favorite]").forEach(b =>
    b.addEventListener("click", () => toggleFavorit(b.dataset.favorite)));
  providerList.querySelectorAll("[data-detail]").forEach(b =>
    b.addEventListener("click", () => zeigeAnbieter(b.dataset.detail)));
  providerList.querySelectorAll("[data-request]").forEach(b =>
    b.addEventListener("click", () => oeffneAnfrage(b.dataset.request)));
  providerList.querySelectorAll("[data-open-request]").forEach(b =>
    b.addEventListener("click", () => oeffneAnfrage(b.dataset.openRequest)));
  const reset = providerList.querySelector("[data-reset-inline]");
  if (reset) reset.addEventListener("click", setzeFilterZurück);
}

function toggleFavorit(id) {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  try {
    localStorage.setItem("deqoFavorites", JSON.stringify([...state.favorites]));
  } catch (fehler) { /* privater Modus: Favoriten bleiben nur in dieser Sitzung */ }
  el("favoriteCount").textContent = state.favorites.size;
  aktualisiere();
  zeigeHinweis(state.favorites.has(id) ? "Zu euren Favoriten gespeichert." : "Aus den Favoriten entfernt.");
}

/* ---------------------------------------------------------------
   Detaildialog
----------------------------------------------------------------- */
function zeigeAnbieter(id) {
  const p = providers.find(item => item.id === id);
  if (!p) return;
  letzterFokus = document.activeElement;
  el("dialogContent").innerHTML = `
    <div class="dialog-hero" style="background-image:url('${p.image}')">
      <p class="eyebrow light">Demo-Profil · ${p.category} · ${ortText(p)}</p>
      <h2>${p.name}</h2>
    </div>
    <div class="dialog-body">
      <div>
        <span class="rating">★ ${p.rating.toFixed(1).replace(".", ",")} <small>(${p.reviews} Demo-Bewertungen, Beispielwert)</small></span>
        <p>${p.description}</p>
        <div class="dialog-features">${p.features.map(f => `<span>✓ ${f}</span>`).join("")}</div>
      </div>
      <div>
        <div class="provider-facts">
          <span>${p.capacityLabel}</span>
          <span>${p.area}</span>
          <span>ab ${PREIS(p.price)} € (Beispielpreis)</span>
        </div>
        <p class="form-hint">Alle Angaben sind Beispieldaten dieser Vorschau.</p>
        <button type="button" class="button button-primary" data-dialog-request="${p.id}">Anfrage starten</button>
      </div>
    </div>`;
  providerDialog.showModal();
  el("dialogContent").querySelector("[data-dialog-request]").addEventListener("click", () => {
    providerDialog.close();
    oeffneAnfrage(p.id);
  });
}

/* ---------------------------------------------------------------
   Anfrage: validierter Demo-Dialog
----------------------------------------------------------------- */
const ANFRAGE_TITEL = {
  complete: { titel: "Kostenloses Erstgespräch vormerken", text: "DEQO meldet sich zu Datum, Rahmen und Budget. In dieser Vorschau wird nichts versendet." },
  anbieter: { titel: "Anbieter-Erstgespräch vormerken", text: "Kurz eure Eckdaten, dann klären wir Sichtbarkeit und Profil. In dieser Vorschau wird nichts versendet." },
  allgemein: { titel: "Anfrage starten", text: "Sagt uns die Eckdaten, dann kommen passende Anbieter zurück. In dieser Vorschau wird nichts versendet." }
};

function heute() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function oeffneAnfrage(ziel) {
  letzterFokus = document.activeElement;
  const anbieter = providers.find(p => p.id === ziel);
  const kopf = anbieter
    ? { titel: `Anfrage an ${anbieter.name}`, text: "Drei Schritte: Eckdaten eintragen, prüfen, abschicken. In dieser Vorschau wird nichts versendet." }
    : (ANFRAGE_TITEL[ziel] || ANFRAGE_TITEL.allgemein);

  el("requestContent").innerHTML = `
    <div class="request-head">
      <h2 id="requestTitle">${kopf.titel}</h2>
      <p>${kopf.text}</p>
    </div>
    <form class="request-form" id="requestForm" novalidate>
      <div class="form-row">
        <label for="reqName">Name</label>
        <input id="reqName" name="name" type="text" autocomplete="name" required />
        <span class="form-error" id="errName"></span>
      </div>
      <div class="form-grid">
        <div class="form-row">
          <label for="reqDate">Eventdatum</label>
          <input id="reqDate" name="datum" type="date" min="${heute()}" required />
          <span class="form-error" id="errDate"></span>
        </div>
        <div class="form-row">
          <label for="reqGuests">Gästezahl</label>
          <input id="reqGuests" name="personen" type="number" min="1" max="5000" inputmode="numeric" required />
          <span class="form-error" id="errGuests"></span>
        </div>
      </div>
      <div class="form-row">
        <label for="reqPlace">Ort</label>
        <input id="reqPlace" name="ort" type="text" autocomplete="address-level2" required />
        <span class="form-error" id="errPlace"></span>
      </div>
      <div class="form-row">
        <label for="reqContact">Kontakt (E-Mail oder Telefon)</label>
        <input id="reqContact" name="kontakt" type="text" autocomplete="email" required />
        <span class="form-error" id="errContact"></span>
      </div>
      <p class="form-hint">Demo-Formular. Die Eingaben bleiben in diesem Browser und werden nicht versendet oder gespeichert.</p>
      <button type="submit" class="button button-primary">Anfrage abschicken</button>
    </form>`;

  el("reqPlace").value = state.location.trim();
  el("reqGuests").value = state.guests > 0 ? state.guests : "";
  requestDialog.showModal();
  el("reqName").focus();

  el("requestForm").addEventListener("submit", event => {
    event.preventDefault();
    pruefeUndSende(anbieter ? anbieter.name : kopf.titel);
  });
}

function setzeFehler(inputId, errorId, text) {
  const input = el(inputId);
  input.setAttribute("aria-invalid", text ? "true" : "false");
  el(errorId).textContent = text || "";
  return !text;
}

function pruefeUndSende(zielName) {
  const name = el("reqName").value.trim();
  const datum = el("reqDate").value;
  const personen = el("reqGuests").value.trim();
  const ort = el("reqPlace").value.trim();
  const kontakt = el("reqContact").value.trim();

  const istEmail = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(kontakt);
  const istTelefon = /^[+0][\d\s/()-]{6,}$/.test(kontakt);
  const personenZahl = Number(personen);
  const datumGueltig = Boolean(datum) && datum >= heute();

  const pruefungen = [
    setzeFehler("reqName", "errName", name.length >= 2 ? "" : "Bitte den Namen eintragen."),
    setzeFehler("reqDate", "errDate", datumGueltig ? "" : "Bitte ein Datum ab heute wählen."),
    setzeFehler("reqGuests", "errGuests", Number.isFinite(personenZahl) && personenZahl >= 1 && personenZahl <= 5000 ? "" : "Bitte eine Zahl zwischen 1 und 5000."),
    setzeFehler("reqPlace", "errPlace", ort.length >= 2 ? "" : "Bitte den Ort eintragen."),
    setzeFehler("reqContact", "errContact", istEmail || istTelefon ? "" : "Bitte E-Mail oder Telefonnummer eintragen.")
  ];

  if (pruefungen.includes(false)) {
    const ersterFehler = el("requestForm").querySelector('[aria-invalid="true"]');
    if (ersterFehler) ersterFehler.focus();
    return;
  }

  const datumLesbar = new Date(datum + "T00:00:00").toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
  const weiterleitung = DEQO_KONTAKT.whatsapp || DEQO_KONTAKT.kalender || DEQO_KONTAKT.email;

  el("requestContent").innerHTML = `
    <div class="request-confirm">
      <span class="confirm-flag">Demo-Bestätigung</span>
      <h3>Danke, ${name}.</h3>
      <p>So wäre die Anfrage an <b>${zielName}</b> herausgegangen. In dieser Vorschau wird nichts versendet und nichts gespeichert.</p>
      <div class="confirm-summary">
        <span><b>Datum:</b> ${datumLesbar}</span>
        <span><b>Ort:</b> ${ort}</span>
        <span><b>Gäste:</b> ${personenZahl}</span>
        <span><b>Kontakt:</b> ${kontakt}</span>
      </div>
      <p>${weiterleitung
        ? "In der Vollversion geht die Anfrage direkt an das hinterlegte DEQO-Postfach."
        : "Das Ziel für WhatsApp, Kalender oder Postfach ist zentral in app.js vorbereitet und wird eingetragen, sobald die DEQO-Kontaktdaten feststehen."}</p>
      <button type="button" class="button button-primary" id="confirmClose">Schließen</button>
    </div>`;
  el("confirmClose").addEventListener("click", () => requestDialog.close());
  el("confirmClose").focus();
}

/* ---------------------------------------------------------------
   Hinweise
----------------------------------------------------------------- */
let toastTimer;
function zeigeHinweis(text) {
  clearTimeout(toastTimer);
  toast.textContent = text;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* ---------------------------------------------------------------
   Bedienelemente
----------------------------------------------------------------- */
function setzePersonenChips() {
  document.querySelectorAll("#guestChips .filter-chip").forEach(chip => {
    chip.classList.toggle("active", Number(chip.dataset.guests) === state.guests);
  });
}

function setzePreisAusgabe() {
  el("priceOutput").textContent = state.maxPrice >= 5000 ? "bis 5.000 €" : `bis ${PREIS(state.maxPrice)} €`;
}

function setzeFilterZurück() {
  state.category = "Location";
  state.radius = 50;
  state.guests = 300;
  state.minRating = 4;
  state.maxPrice = 5000;
  state.sort = "rating";
  state.features.clear();
  el("categoryFilter").value = "Location";
  el("heroCategory").value = "Location";
  el("radiusFilter").value = "50";
  el("heroRadius").value = "50";
  el("heroGuests").value = "300";
  el("ratingFilter").value = "4";
  el("sortFilter").value = "rating";
  el("priceRange").value = "5000";
  document.querySelectorAll("[data-feature]").forEach(box => { box.checked = false; });
  setzePersonenChips();
  setzePreisAusgabe();
  aktualisiere();
  zeigeHinweis("Filter wurden zurückgesetzt.");
}

function verbindeBedienung() {
  el("heroSearch").addEventListener("submit", event => {
    event.preventDefault();
    state.location = el("heroLocation").value.trim();
    state.category = el("heroCategory").value;
    state.radius = Number(el("heroRadius").value);
    state.guests = Number(el("heroGuests").value);
    el("locationFilter").value = state.location;
    el("categoryFilter").value = state.category;
    el("radiusFilter").value = String(state.radius);
    setzePersonenChips();
    aktualisiere();
    el("finden").scrollIntoView({ behavior: "smooth", block: "start" });
    zeigeHinweis(state.location ? `Ergebnisse für ${state.location} aktualisiert.` : "Ergebnisse aktualisiert.");
  });

  el("locationFilter").addEventListener("input", event => {
    state.location = event.target.value;
    el("heroLocation").value = event.target.value;
    aktualisiere();
  });

  el("categoryFilter").addEventListener("change", event => {
    state.category = event.target.value;
    el("heroCategory").value = state.category;
    aktualisiere();
  });

  el("radiusFilter").addEventListener("change", event => {
    state.radius = Number(event.target.value);
    el("heroRadius").value = event.target.value;
    aktualisiere();
  });

  el("ratingFilter").addEventListener("change", event => {
    state.minRating = Number(event.target.value);
    aktualisiere();
  });

  el("sortFilter").addEventListener("change", event => {
    state.sort = event.target.value;
    aktualisiere();
  });

  el("priceRange").addEventListener("input", event => {
    state.maxPrice = Number(event.target.value);
    setzePreisAusgabe();
    aktualisiere();
  });

  document.querySelectorAll("#guestChips .filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      state.guests = Number(chip.dataset.guests);
      el("heroGuests").value = String(state.guests);
      setzePersonenChips();
      aktualisiere();
    });
  });

  document.querySelectorAll("[data-feature]").forEach(box => {
    box.addEventListener("change", () => {
      if (box.checked) state.features.add(box.dataset.feature);
      else state.features.delete(box.dataset.feature);
      aktualisiere();
    });
  });

  el("resetFilters").addEventListener("click", setzeFilterZurück);

  el("favoritesButton").addEventListener("click", () => {
    zeigeHinweis(state.favorites.size
      ? `${state.favorites.size} ${state.favorites.size === 1 ? "Favorit" : "Favoriten"} gespeichert.`
      : "Noch keine Favoriten gespeichert.");
  });

  document.querySelectorAll("[data-open-request]").forEach(button => {
    button.addEventListener("click", () => oeffneAnfrage(button.dataset.openRequest));
  });

  const menuButton = el("menuButton");
  const mobileNav = el("mobileNav");
  menuButton.addEventListener("click", () => {
    const offen = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(offen));
  });
  mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));

  el("closeDialog").addEventListener("click", () => providerDialog.close());
  el("closeRequest").addEventListener("click", () => requestDialog.close());
  [providerDialog, requestDialog].forEach(dialog => {
    dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("close", () => { if (letzterFokus && letzterFokus.focus) letzterFokus.focus(); });
  });
}

/* ---------------------------------------------------------------
   Kurze horizontale Strecke: drei Karten, freiwillig, ohne Scroll-Zwang
----------------------------------------------------------------- */
function verbindeJourney() {
  const track = el("journeyTrack");
  const karten = [...track.querySelectorAll(".journey-card")];
  const dots = el("journeyDots");
  const prev = el("journeyPrev");
  const next = el("journeyNext");
  const sanft = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  dots.innerHTML = karten.map((karte, i) =>
    `<button type="button" role="tab" data-index="${i}" aria-selected="${i === 0}" aria-label="Schritt ${i + 1} von ${karten.length}"></button>`).join("");

  function aktuellerIndex() {
    if (track.scrollLeft <= 4) return 0;
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) return karten.length - 1;
    let index = 0;
    let kleinster = Infinity;
    karten.forEach((karte, i) => {
      const abstand = Math.abs(karte.offsetLeft - track.scrollLeft);
      if (abstand < kleinster) { kleinster = abstand; index = i; }
    });
    return index;
  }

  function geheZu(index) {
    const ziel = karten[Math.max(0, Math.min(karten.length - 1, index))];
    track.scrollTo({ left: ziel.offsetLeft, behavior: sanft ? "smooth" : "auto" });
  }

  function aktualisiereSteuerung() {
    const beweglich = track.scrollWidth - track.clientWidth > 8;
    prev.parentElement.classList.toggle("hidden", !beweglich);
    dots.classList.toggle("hidden", !beweglich);
    const index = aktuellerIndex();
    dots.querySelectorAll("button").forEach((dot, i) => dot.setAttribute("aria-selected", String(i === index)));
    const amAnfang = track.scrollLeft <= 4;
    const amEnde = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    prev.disabled = amAnfang;
    next.disabled = amEnde;
  }

  prev.addEventListener("click", () => geheZu(aktuellerIndex() - 1));
  next.addEventListener("click", () => geheZu(aktuellerIndex() + 1));
  dots.querySelectorAll("button").forEach(dot =>
    dot.addEventListener("click", () => geheZu(Number(dot.dataset.index))));
  track.addEventListener("scroll", aktualisiereSteuerung, { passive: true });
  track.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") { event.preventDefault(); geheZu(aktuellerIndex() + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); geheZu(aktuellerIndex() - 1); }
  });
  window.addEventListener("resize", aktualisiereSteuerung);
  aktualisiereSteuerung();
}

/* ---------------------------------------------------------------
   Start
----------------------------------------------------------------- */
baueKategorien();
verbindeBedienung();
verbindeJourney();
el("locationFilter").value = state.location;
el("favoriteCount").textContent = state.favorites.size;
setzePersonenChips();
setzePreisAusgabe();
aktualisiere();
