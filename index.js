// fetch data from the GitHub ApI

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const profileContainer = document.getElementById("profile-container");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Fetch GitHub Profile Data
async function fetchProfileData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data.message === "Not Found") {
      throw new Error("User not found");
    }

    displayProfileData(data);
  } catch (error) {
    errorMessage.textContent = error.message;
    profileContainer.innerHTML = "";
  }
}

// Toggle Dark Mode
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
