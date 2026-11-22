const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  const navLinks = navMenu.querySelectorAll("a");

  function openMenu() {
    navMenu.classList.add("is-open");
    navToggle.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close navigation menu");
  }

  function closeMenu() {
    navMenu.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
      closeMenu();
      navToggle.focus();
    }
  });
}

const galleryButtons = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");

let lastFocusedElement = null;

function openLightbox(button) {
  const imageSource = button.dataset.full;
  const caption = button.dataset.caption;
  const imageAlt = button.querySelector("img").alt;

  lastFocusedElement = button;

  lightboxImage.src = imageSource;
  lightboxImage.alt = imageAlt;
  lightboxCaption.textContent = caption;

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");

  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightboxCaption.textContent = "";

  document.body.style.overflow = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

if (galleryButtons.length && lightbox) {
  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(button);
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}