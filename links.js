document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "Light Mode";
  }

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "Dark Mode";
    }
  });

  const container = document.getElementById("borderDetailsContainer");

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (code) {
    container.textContent = "Border Country";
  } else {
    container.textContent = "No country code found.";
  }
});
