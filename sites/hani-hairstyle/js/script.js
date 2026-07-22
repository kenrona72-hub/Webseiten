(function () {
  "use strict";

  /* Sticky header background on scroll */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav toggle */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navToggle.classList.toggle("active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  /* Mobile dropdown (Services) toggle by tapping the parent link */
  var dropdownParent = document.querySelector(".has-dropdown > a");
  if (dropdownParent) {
    dropdownParent.addEventListener("click", function (e) {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        dropdownParent.parentElement.classList.toggle("open");
      }
    });
  }

  /* Close mobile nav after choosing a link */
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 860 && !link.parentElement.classList.contains("has-dropdown")) {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  });

  /* Services tabs */
  var tabButtons = document.querySelectorAll(".tab-btn");
  var tabPanels = document.querySelectorAll(".tab-panel");
  function activateTab(id) {
    tabButtons.forEach(function (btn) {
      var isActive = btn.dataset.tab === id;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    tabPanels.forEach(function (panel) {
      panel.classList.toggle("active", panel.id === id);
    });
  }
  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () { activateTab(btn.dataset.tab); });
  });
  /* Deep-link support: #tab-faerben etc. jumps to Services and opens the right tab */
  document.querySelectorAll('a[href^="#tab-"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href").slice(1);
      activateTab(id);
    });
  });

  /* Scroll reveal with a subtle stagger inside each section */
  var revealEls = document.querySelectorAll(".reveal");
  revealEls.forEach(function (el) {
    var siblings = Array.prototype.slice.call(el.parentElement.querySelectorAll(":scope > .reveal"));
    var index = siblings.indexOf(el);
    if (index > -1) el.style.transitionDelay = Math.min(index * 90, 360) + "ms";
  });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* Custom cursor dot (desktop, fine pointer only) */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.body.classList.add("has-fine-pointer");
    var dot = document.getElementById("cursorDot");
    document.addEventListener("mousemove", function (e) {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      dot.classList.add("visible");
    });
    document.addEventListener("mouseleave", function () { dot.classList.remove("visible"); });
    document.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("mouseenter", function () { dot.classList.add("grow"); });
      el.addEventListener("mouseleave", function () { dot.classList.remove("grow"); });
    });
  }

  /* Lightbox for gallery */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");
  document.querySelectorAll("[data-lightbox]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var img = link.querySelector("img");
      lightboxImg.src = link.getAttribute("href");
      lightboxImg.alt = img ? img.alt : "";
      lightbox.classList.add("open");
    });
  });
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
})();
