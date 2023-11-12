function displayWeather(response) {
  let cityName = document.querySelector(".city-main");
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
  console.log(weatherIconName);
  weatherIcon.innerHTML = `<img
  src="media/${weatherIconName}.svg"
  class="main-icon" />`;
}

function searchCity(city) {
  let apiKey = "616b14cbd38253313b3b8852fa77335d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector(".search-field");
  //first put what you have, and then what you want to replace it with
  searchCity(searchFormInput.value);
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", handleSearch);

searchCity("gothenburg");
