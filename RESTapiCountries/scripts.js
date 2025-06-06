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

  const countriesContainer = document.getElementById("countriesContainer");
  const searchInput = document.getElementById("searchInput");
  const regionFilter = document.getElementById("regionFilter");
  const sortSelect = document.getElementById("sortSelect");

  let allCountries = [];

  async function fetchCountries() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital");
      const data = await response.json();

      if (Array.isArray(data)) {
        allCountries = data;
        applyFilters();
      } else {
        countriesContainer.textContent = "Unexpected response from API.";
      }
    } catch (error) {
      countriesContainer.textContent = "Failed to load countries.";
    }
  }

  function applyFilters() {
    let filtered = allCountries.slice();

    const searchText = searchInput.value.toLowerCase();
    if (searchText !== "") {
      filtered = filtered.filter(function (country) {
        return country.name.common.toLowerCase().includes(searchText);
      });
    }

    const selectedRegion = regionFilter.value;
    if (selectedRegion !== "") {
      filtered = filtered.filter(function (country) {
        return country.region === selectedRegion;
      });
    }

    const sortOrder = sortSelect.value;
    if (sortOrder === "az") {
      filtered.sort(function (a, b) {
        return a.name.common.localeCompare(b.name.common);
      });
    } else if (sortOrder === "za") {
      filtered.sort(function (a, b) {
        return b.name.common.localeCompare(a.name.common);
      });
    }

    renderCountries(filtered);
  }

  function renderCountries(countries) {
    countriesContainer.innerHTML = "";

    countries.forEach(function (country) {
      const card = document.createElement("div");
      card.className = "country-card";

      const img = document.createElement("img");
      img.src = country.flags.png;
      img.alt = "";
      card.appendChild(img);

      const title = document.createElement("h2");
      title.textContent = country.name.common;
      card.appendChild(title);

      const pop = document.createElement("p");
      pop.textContent = "Population: " + country.population.toLocaleString();
      card.appendChild(pop);

      const region = document.createElement("p");
      region.textContent = "Region: " + country.region;
      card.appendChild(region);

      const capital = document.createElement("p");
      capital.textContent = "Capital: " + (country.capital ? country.capital[0] : "N/A");
      card.appendChild(capital);

      card.addEventListener("click", function () {
        localStorage.setItem("selectedCountry", country.name.common);
        window.location.href = "details.html";
      });

      countriesContainer.appendChild(card);
    });
  }

  searchInput.addEventListener("input", applyFilters);
  regionFilter.addEventListener("change", applyFilters);
  sortSelect.addEventListener("change", applyFilters);

  fetchCountries();
});
