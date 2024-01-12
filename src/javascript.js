let now = new Date();
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
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let current = document.getElementById("current");

function updateDateTime() {
  current.innerHTML = `${day} ${hours}:${minutes}`;
}

function showTemp(response) {
  let temperatureElement = document.querySelector("#digits");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperature}`;
}

function searchCity(cityName) {
  let apiKey = "534dd2d011179t13o36a0c86f3da3b34";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function city(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  let cityName = document.querySelector("#place");
  cityName.innerHTML = input.value;
  searchCity(input.value);
  updateDateTime();
}

let formElement = document.querySelector("#city-form");
formElement.addEventListener("submit", city);

searchCity("Sydney");
updateDateTime();
