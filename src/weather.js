function displayWeather(response) {
  let cityName = document.querySelector(".city-main");
  //first put what you have, and then what you want to replace it with
  cityName.innerHTML = response.data.name;

  let countryElement = document.querySelector(".country-main");
  country = response.data.sys.country;
  countryElement.innerHTML = `${country}`;

  let temperatureElement = document.querySelector(".temperature-main");
  temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = temperature + "°C";

  let description = document.querySelector(".weather-description");
  description.innerHTML = response.data.weather[0].description;

  let humidityELement = document.querySelector(".humidity");
  let humidity = response.data.main.humidity;
  humidityELement.innerHTML = `Humidity: <strong>${humidity}%</strong>`;

  let windElement = document.querySelector(".wind");
  let wind = response.data.wind.speed;
  windElement.innerHTML = `Wind: <strong>${wind}km/h</strong>`;

  let realFeel = document.querySelector(".feels-like");
  feelsLike = Math.round(response.data.main.feels_like);
  realFeel.innerHTML = `Feels like: <strong>${feelsLike}°C</strong>`;

  let now = new Date(response.data.dt * 1000);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let currentTime = document.querySelector(".day-and-time");
  currentTime.innerHTML = `${day} ${hours}:${minutes}`;

  let weatherIcon = document.querySelector(".left");
  weatherIconName = response.data.weather[0].icon;
  weatherIcon.innerHTML = `<img
  src="media/${weatherIconName}.svg"
  class="main-icon" />`;

  getForecast(response.data.name);
}

function searchCity(city) {
  let apiKey = "616b14cbd38253313b3b8852fa77335d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector(".search-field");
  searchCity(searchFormInput.value);
}

function getForecast(city) {
  let apiKey = "616b14cbd38253313b3b8852fa77335d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  if (date.getDate() === today.getDate()) {
    return "Today";
  } else if (date.getDate() === tomorrow.getDate()) {
    return "Tomorrow";
  } else {
    return days[date.getDay()];
  }
}
function displayForecast(response) {
  forecastElement.innerHTML = "";

  response.data.list.forEach(function (day, index) {
    let maxTemp = Math.round(day.main.temp_max);
    let minTemp = Math.round(day.main.temp_min);
    let smallIcon = day.weather[0].icon;
    //the list array contains 40 items (3-hour forecast, so it has to be divided by 8 to get the five day forecast 😰)
    if (index % 8 === 0) {
      let dayName = formatDay(day.dt);
      console.log(dayName);
      forecastElement.innerHTML =
        forecastElement.innerHTML +
        `<div class="forecast-days">
         ${dayName} <br />
          <span> <img src="media/daily_forecast/${smallIcon}.svg" class="forecast-icon" /></span>
          <br />
          <span class="max-min-temp"><strong>${maxTemp}°C</strong> | ${minTemp}°C</span>
        </div>`;
    }
  });
}
let forecastElement = document.querySelector(".forecast");

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", handleSearch);

searchCity("gothenburg");

let newYorkButton = document.querySelector("#new-york");
let sydneyButton = document.querySelector("#sydney");
let parisButton = document.querySelector("#paris");
let dubaiButton = document.querySelector("#dubai");

newYorkButton.addEventListener("click", function () {
  searchCity("New York");
});
sydneyButton.addEventListener("click", function () {
  searchCity("Sydney");
});
parisButton.addEventListener("click", function () {
  searchCity("Paris");
});
dubaiButton.addEventListener("click", function () {
  searchCity("Dubai");
});
