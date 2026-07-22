(function () {
  "use strict";

  var STATUS_LABEL = { live: "Live", entwurf: "Entwurf" };

  function cardHTML(p) {
    var tags = p.stack.map(function (t) { return "<span>" + t + "</span>"; }).join("");
    var status = p.status in STATUS_LABEL ? p.status : "entwurf";
    return (
      '<a class="project-card" href="' + p.url + '">' +
        '<div class="card-thumb">' +
          '<img src="' + p.thumbnail + '" alt="' + p.name + '" loading="lazy">' +
          '<span class="card-status" data-status="' + status + '">' + STATUS_LABEL[status] + "</span>" +
        "</div>" +
        '<div class="card-body">' +
          '<h2 class="card-title">' + p.name + "</h2>" +
          '<p class="card-tagline">' + p.tagline + "</p>" +
          '<p class="card-desc">' + p.description + "</p>" +
          '<div class="card-foot">' +
            '<div class="card-tags">' + tags + "</div>" +
            '<span class="card-open">Öffnen →</span>' +
          "</div>" +
        "</div>" +
      "</a>"
    );
  }

  var placeholderHTML =
    '<div class="project-card is-placeholder">' +
      '<span class="plus">+</span>' +
      "<span>Weitere Projekte folgen</span>" +
    "</div>";

  fetch("projects.json")
    .then(function (res) { return res.json(); })
    .then(function (projects) {
      var grid = document.getElementById("cardGrid");
      grid.innerHTML = projects.map(cardHTML).join("") + placeholderHTML;

      document.getElementById("projectCount").textContent = projects.length;
      document.getElementById("liveCount").textContent =
        projects.filter(function (p) { return p.status === "live"; }).length;

      var dates = projects.map(function (p) { return p.date; }).sort();
      document.getElementById("lastUpdated").textContent = dates.length ? dates[dates.length - 1] : "—";
    })
    .catch(function (err) {
      document.getElementById("cardGrid").innerHTML =
        '<p style="color:#8fa3b3;font-family:var(--mono)">Projekte konnten nicht geladen werden: ' + err.message + "</p>";
    });

  /* PWA install prompt */
  var installBtn = document.getElementById("installBtn");
  var deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;
  });

  installBtn.addEventListener("click", function () {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.finally(function () {
      deferredPrompt = null;
      installBtn.hidden = true;
    });
  });

  window.addEventListener("appinstalled", function () {
    installBtn.hidden = true;
  });

  /* Service worker registration */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () { /* offline support is best-effort */ });
    });
  }
})();
