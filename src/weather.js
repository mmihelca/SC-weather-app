let weather = {
  paris: {
    name: "Paris",
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    name: "Tokyo",
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    name: "Lisbon",
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    name: "San Francisco",
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    name: "Oslo",
    temp: -5,
    humidity: 20,
  },
};

let cityEntered = prompt("Enter a city");
let userCity = cityEntered.toLowerCase();

function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

if (weather[userCity]) {
  let cityInfo = weather[userCity];
  let fahrenheit = celsiusToFahrenheit(cityInfo.temp);
  let celsius = Math.round(cityInfo.temp);
  alert(
    `It is currently ${celsius}°C (${fahrenheit}°F) in ${cityInfo.name} with a humidity of ${cityInfo.humidity}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${userCity}`
  );
}
