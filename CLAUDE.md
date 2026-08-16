# Webseiten — Projektkontext

Dieses Repo ist Kens Sammlung aus zwei Dingen:

1. **`sites/hani-hairstyle/`** — fertige Kunden-Website für den Friseursalon "Hani Hairstyle" (Neu-Ulm). Statisches HTML/CSS/JS, kein Build-Schritt.
2. **Root (`index.html`, `css/`, `js/`, `projects.json`, `manifest.json`, `sw.js`, `assets/icons/`)** — "Kens Webspace": Kens persönliche, installierbare PWA-Übersichtsseite über alle Websites, die er baut. Neue Projekte werden einfach in `projects.json` ergänzt, kein Code-Umbau nötig. Dunkles Blueprint-Theme.

## Branch

Diese Session arbeitet auf `claude/honey-hairstyle-website-vqf6bj` (nicht `main`). Für eigene/Tool-Repos (siehe unten) gilt künftig: direkt auf `main` committen, nicht auf einem Feature-Branch — Details dazu im nächsten Abschnitt.

## Offenes Problem: GitHub Pages deployt nicht

`.github/workflows/deploy-pages.yml` schlägt bei jedem Lauf sofort fehl (~1 Sekunde Laufzeit, keine Logs abrufbar — auch über die GitHub-API 404). Das ist untypisch für einen echten Step-Fehler und spricht dafür, dass der Job nie wirklich einen Runner bekommt.

**Aktuelle Hypothese (noch nicht verifiziert):** GitHub legt beim ersten Einrichten von Pages über Actions automatisch eine `github-pages`-Environment an, die Deployments auf bestimmte Branches beschränken kann (typischerweise den Default-Branch `main`). Unser Workflow läuft aber auf dem Feature-Branch `claude/honey-hairstyle-website-vqf6bj`, nicht auf `main` — das würde den sofortigen, logfreien Fehlschlag erklären.

Bereits ausgeschlossen:
- Repo ist public (bestätigt).
- Pages-Source ist auf "GitHub Actions" gestellt (bestätigt per Screenshot).
- `enablement: true` ist in `configure-pages@v5` gesetzt.

**Nächster Schritt:** Environment-Schutzregeln für `github-pages` in den Repo-Settings prüfen (Settings → Environments → github-pages → Deployment branches). Falls dort eine Branch-Beschränkung steht, entweder die Regel lockern oder den Workflow/die Site auf `main` bringen.

## Wiederverwendbares Tooling

Liegt bewusst **nicht** hier, sondern im Repo `kens-design-system` unter `tools/`, weil es repo-übergreifend gebraucht wird:

- `tools/deploy-pages.yml.template` — Vorlage für den GitHub-Actions-Pages-Workflow, inkl. der zwei manuellen Einmal-Schritte (Repo public stellen, Pages-Source setzen), die die Actions-Bot-Token nicht selbst erledigen kann.
- `tools/fetch-google-font.mjs` — Skript zum Selbst-Hosten von Google Fonts (latin-Subset, deckt deutsche Umlaute ab) ohne API-Key.
- `tools/README.md` — Kurzanleitung zu beidem plus die Main-Branch-Policy für eigene Repos.

## Verwandtes Repo

`kenrona72-hub/kens-design-system` — Kens React-Komponenten-Bibliothek (Button, Card, Badge, Tag, SectionHeading) auf einem CSS-Custom-Property-Token-Layer (`--kds-*`), damit Marken sich per `[data-brand="x"]`-Override umskinnen lassen. Läuft auf `main`, eigene GitHub-Pages-Showcase live unter `https://kenrona72-hub.github.io/kens-design-system/`. An claude.ai/design angebunden (design-sync), damit dort mit echten, markenkonformen Komponenten gebaut werden kann statt mit generischen.
