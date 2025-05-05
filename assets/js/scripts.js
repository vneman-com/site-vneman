const startBtn = document.getElementById("startBtn");
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === "::1";

if (isLocalhost) {
  startBtn.addEventListener("click", () => {
    window.location.href = "http://localhost:8080/auth/login";
  });
} else {
  startBtn.addEventListener("click", () => {
    window.location.href = "https://vneman.com/auth/login";
  });
  console.log("Environnement production");
}
