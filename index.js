// fetch data from the GitHub ApI
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Toggle Dark Mode
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
