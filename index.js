// fetch data from the GitHub ApI

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const errorMessage = document.getElementById("error-message");
const profileContainer = document.getElementById("profile-container");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Fetch GitHub Profile Data
async function fetchProfileData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      if (response.status === 403) {
        throw new Error("User not found or API rate limit exceeded");
      } else if (response.status === 404) {
        throw new Error("User not found");
      }
    }
    const data = await response.json();
    displayProfileData(data);
    fetchRepositories(username);
  } catch (error) {
    errorMessage.textContent = error.message;
    profileContainer.innerHTML = "";
  }
}

// Display Profile Data
function displayProfileData(data) {
  profileContainer.innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar">
        <h2>${data.name}</h2>
        <p>${data.bio || "No bio available"}</p>
        <p>Location: ${data.location || "Not specified"}</p>
        <h3>Public Repositories:</h3>
        <ul>
            ${data.public_repos}
        </ul>
    `;
}
//fetching Repositories
async function fetchRepositories(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    //handle an ApI response
    if (!response.ok) {
      throw new Error("could not fetch repositories.");
    }
    const repos = await response.json();
    dispalyRepositories(repos);
  } catch (error) {
    console, log("Error fetching repositories:");
  }
}
// Display Repositories
function displayRepositories(repos) {
  let repoList = "";
  repos.forEach((repo) => {
    repoList += `<li>${repo.name} - ${
      repo.description || "No description"
    }</li>`;
  });

  const repoSection = `
    <h3>Repositories:</h3>
    <ul>${repoList}</ul>
  `;

  profileContainer.innerHTML += repoSection;
}
// Event Listeners
searchBtn.addEventListener("click", () => fetchProfileData(searchInput.value));
searchInput.addEventListener("keyup", () => {
  searchBtn.disabled = !searchInput.value.trim();
});

// Toggle Dark Mode
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
