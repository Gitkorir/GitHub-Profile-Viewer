// fetch data from the GitHub ApI

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Toggle Dark Mode
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
