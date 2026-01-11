window.addEventListener("load", () => {
  const logo = document.querySelector(".brand img");
  if (logo) {
    logo.classList.add("logo-visible");
  }
});
// ===== SECTION REVEAL ANIMATION =====
const revealSections = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

revealSections.forEach((section) => {
  revealObserver.observe(section);
});
