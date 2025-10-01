// Menú móvil desplegable
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Animación al hacer scroll (scroll reveal)
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Se ejecuta solo una vez por elemento
    }
  });
}, { threshold: 0.2 });

reveals.forEach((el, i) => {
  setTimeout(() => {
    observer.observe(el);
  }, i * 200); // efecto escalonado
});