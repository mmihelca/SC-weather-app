//display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();
let h3 = document.querySelector("h3");
let hour = now.getHours();
let minute = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

if (minute < 10) {
  minute = `0${minute}`;
}
if (hour < 10) {
  hour = `0${hour}`;
}
let currentTime = document.querySelector("h3");
h3.innerHTML = `${day}, ${hour}:${minute}`;

//Add a search engine: a search bar with a button. When searching for a city (i.e. Paris),
//display the city name on the page after the user submits the form.
function changeCityName(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-field");
  let query = searchInput.value;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = query;

  function getTemperature(response) {
    let temperature = Math.round(response.data.temperature.current);
    let tempCelsius = document.querySelector("#temperature-display");
    tempCelsius.innerHTML = `${temperature}`;
  }

  let apiKey = "35ee71bff3b1ft217b0aao934d002bd5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTemperature);
}
let searchForm = document.querySelector("#search-form");
let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", changeCityName);

//In your project, when a user searches for a city (example: Sydney), it should display the name of the city on the result page and the current temperature of the city.

//change from celsius to fahrenheit
/* function toggleToFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("h2");
  temperature.innerHTML = "54";
}

function toggleToCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("h2");
  temperature.innerHTML = "12";
}

let fahrenheit = document.querySelector("#fahrenheit-link");
let celsius = document.querySelector("#celsius-link");
fahrenheit.addEventListener("click", toggleToFahrenheit);
celsius.addEventListener("click", toggleToCelsius); */
