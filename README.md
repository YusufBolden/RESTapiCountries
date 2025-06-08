# REST Countries API with Color Theme Switcher

## 🌍 Overview

This project is part of a cumulative assessment of front-end development skills in HTML, CSS, and JavaScript. I chose the **REST Countries API with Color Theme Switcher** challenge from [Frontend Mentor](https://www.frontendmentor.io). The goal was to build an application that dynamically fetches and displays country information using the REST Countries API, supports light/dark themes, and implements features such as search, region filtering, sorting, and detailed views.

## 🚀 Live Demo

[View the deployed site on Github pages](https://yusufbolden.github.io/RESTapiCountries/)

## 💡 Features

- Fully responsive layout for mobile, tablet, and desktop
- Theme switcher (light/dark mode)
- Search for a country by name
- Filter countries by region
- Sort countries alphabetically (A–Z / Z–A)
- View detailed information on a selected country
- Border countries are listed
- Interactive Leaflet map of the selected country

## 🛠️ Technologies Used

- HTML5
- CSS3 (with custom styles)
- JavaScript (ES6+)
- REST Countries API (`https://restcountries.com/v3.1`)
- Leaflet.js for map rendering
- Git + GitHub for version control and documentation

## 📁 Project Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/rest-countries-project.git
   cd rest-countries-project
   ```

2. Open `index.html` in your browser, or deploy using Netlify, GitHub Pages, or Vercel.

## 🔄 Folder Structure

```
.
├── index.html
├── details.html
├── links.html
├── styles.css
├── scripts.js
├── details.js
├── links.js
└── README.md
```

## 📌 Deployment

Deployed using **Github pages**  
URL: [https://yusufbolden.github.io/RESTapiCountries/](https://yusufbolden.github.io/RESTapiCountries/)

---

## 🧠 Reflection

This project was a comprehensive challenge that tested a wide range of front-end development skills. Below is a summary of the main issues encountered and how they were resolved:

### 1. **API Data Fetching Errors**

Initially, the app failed to load countries due to an incorrect usage of the REST Countries API. I received this error:

```
Unexpected API response:
Object { message: "'fields' query not specified", status: 400 }
```

**Resolution:**  
I corrected the fetch URL by explicitly specifying all required fields in the API call. This ensured a predictable and minimal payload with only the necessary data.

### 2. **Incorrect Data Handling**

At one point, the app failed with:

```
TypeError: countries.forEach is not a function
```

**Resolution:**  
I discovered that the `fetch` call was returning an object instead of an array due to incorrect handling of the response. I added validation to confirm the response was an array before passing it to `renderCountries`.

### 3. **Unused Search, Filter, and Sort Inputs**

Despite adding the UI for search, region filter, and sorting, they were not functional because the corresponding input event listeners weren’t implemented.

**Resolution:**  
I added listeners for all controls and ensured the search, filter, and sort values were used to dynamically filter the data before rendering. This was done in a clean and beginner-friendly way using `Array.prototype.filter`, `sort`, and basic string matching logic.

### 4. **Card Navigation and `details.html` Routing**

Clicking on a country card did not initially route to the `details.html` view properly.

**Resolution:**  
I updated the click logic to store the selected country in `localStorage`, allowing the `details.html` script to fetch and render it. This made the navigation smooth and avoided needing query strings or server routing.

### 5. **Theme Toggle Not Persisting**

Although dark/light mode worked on `index.html`, it did not persist to `details.html`.

**Resolution:**  
I shared the theme state between pages by storing the user’s preference in `localStorage`, and applied it on DOM load in both `scripts.js` and `details.js`.

### 6. **Interactive Map Integration**

To enrich the user experience, I added an interactive map on the country detail page using Leaflet.js. It dynamically centers the map based on the country's coordinates and places a marker at its location.

**Resolution:**  
After fetching the selected country’s data, the map initializes with the correct latitude and longitude using Leaflet. This feature is responsive and visually enhances the country detail view.

---

## 📈 Additional Features

- Clickable border countries: Clicking a border country loads a new page (`links.html`) showing the selected neighbor's basic details.
- Leaflet-powered map: Dynamically displays each country's location and updates as different countries are selected.
- Mobile-optimized layout and improved responsive behavior.

---

## 📚 Resources

- [REST Countries API v3.1](https://restcountries.com)
- [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher)
- [Leaflet.js Documentation](https://leafletjs.com/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [GitHub Pages Deployment Guide](https://docs.github.com/en/pages)

---

## 📌 Submission Checklist

- [x] All project files included in GitHub repository
- [x] Application deployed and link included
- [x] README.md with setup, features, and reflection
- [x] Fully functional search, filter, sort, and theme toggle
- [x] Responsive design across all devices

---

## 🧑🏿‍💻 Author

Created by [Yusuf Bolden](https://github.com/YusufBolden) as part of the Module 7 - JavaScript, HTML and CSS project.

Feedback and suggestions are welcome!

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).