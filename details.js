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

  const detailsContainer = document.getElementById("detailsContainer");
  const backButton = document.getElementById("backButton");

  backButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  async function fetchCountryDetails() {
    const countryName = localStorage.getItem("selectedCountry");

    if (!countryName) {
      detailsContainer.textContent = "No country selected.";
      return;
    }

    try {
      const response = await fetch("https://restcountries.com/v3.1/name/" + countryName);
      const data = await response.json();
      const country = data[0];
      showCountryDetails(country);
    } catch (error) {
      detailsContainer.textContent = "Failed to load country details.";
    }
  }

  function showCountryDetails(country) {
    detailsContainer.innerHTML = "";

    const flag = document.createElement("img");
    flag.src = country.flags.png;
    flag.alt = "";
    flag.className = "details-flag";

    const name = document.createElement("h2");
    name.textContent = country.name.common;

    const population = document.createElement("p");
    population.innerHTML = "<strong>Population:</strong> " + country.population.toLocaleString();

    const region = document.createElement("p");
    region.innerHTML = "<strong>Region:</strong> " + country.region;

    const subregion = document.createElement("p");
    subregion.innerHTML = "<strong>Sub Region:</strong> " + (country.subregion || "N/A");

    const capital = document.createElement("p");
    capital.innerHTML = "<strong>Capital:</strong> " + (country.capital ? country.capital[0] : "N/A");

    const domain = document.createElement("p");
    domain.innerHTML = "<strong>Top Level Domain:</strong> " + (country.tld ? country.tld.join(", ") : "N/A");

    let currencies = "N/A";
    if (country.currencies) {
      const currencyNames = Object.values(country.currencies).map(function (cur) {
        return cur.name;
      });
      currencies = currencyNames.join(", ");
    }
    const currenciesEl = document.createElement("p");
    currenciesEl.innerHTML = "<strong>Currencies:</strong> " + currencies;

    let languages = "N/A";
    if (country.languages) {
      const languageNames = Object.values(country.languages);
      languages = languageNames.join(", ");
    }
    const languagesEl = document.createElement("p");
    languagesEl.innerHTML = "<strong>Languages:</strong> " + languages;

    const bordersEl = document.createElement("div");
    bordersEl.className = "border-countries";
    let bordersContent = "<strong>Border Countries:</strong> ";
    if (country.borders && country.borders.length > 0) {
      bordersContent += country.borders.join(", ");
    } else {
      bordersContent += "None";
    }
    bordersEl.innerHTML = bordersContent;

    const col1 = document.createElement("div");
    col1.className = "details-col";
    col1.appendChild(document.createElement("p")).innerHTML = "<strong>Native Name:</strong> " + country.name.common;
    col1.appendChild(population);
    col1.appendChild(region);
    col1.appendChild(subregion);
    col1.appendChild(capital);

    const col2 = document.createElement("div");
    col2.className = "details-col";
    col2.appendChild(domain);
    col2.appendChild(currenciesEl);
    col2.appendChild(languagesEl);

    const detailsColumns = document.createElement("div");
    detailsColumns.className = "details-columns";
    detailsColumns.appendChild(col1);
    detailsColumns.appendChild(col2);

    const detailsInfo = document.createElement("div");
    detailsInfo.className = "details-info";
    detailsInfo.appendChild(name);
    detailsInfo.appendChild(detailsColumns);
    detailsInfo.appendChild(bordersEl);

    const detailsGrid = document.createElement("div");
    detailsGrid.className = "details-grid";
    detailsGrid.appendChild(flag);
    detailsGrid.appendChild(detailsInfo);

    detailsContainer.appendChild(detailsGrid);
  }

  fetchCountryDetails();
});
