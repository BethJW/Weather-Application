function refreshWeather(response) {
  let temperature = response.data.temperature.current;
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = Math.round(temperature);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Today's weather in ${response.data.city}`;
  let WeatherDescription = document.querySelector("#description");
  WeatherDescription.innerHTML = `Today you will have ${response.data.condition.description}`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.temperature.humidity}%`;
  let wind = document.querySelector("#wind");
  let windSpeed = Math.round(response.data.wind.speed);
  wind.innerHTML = `Wind: ${windSpeed}km/h`;
  let date = new Date(response.data.time * 1000);
  let time = document.querySelector("#currentTime");
  time.innerHTML = formatDate(date);
  let icon = document.querySelector("#icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}"  class="current-image"/>`;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let number = date.getDate();
  let day = days[date.getDay()];
  return `It is ${day}, ${number} ${month} and the time is ${hours}:${minutes}`;
}

function search(city) {
  let apiKey = `b9b10f3af19o1ba6ec0aed0664cb453t`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function submitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  search(searchInput.value);
}

function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let forecastHtml = "";
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="col-2">
            <div class="forecast-date">${day}</div>
            <img src="src/images/Sun.png" width="50px" />
            <div class="forecast-temp">
              <span class="max">10</span> <span class="min">12</span>
            </div>
          </div>
`;
  });
  let forecastElement = document.querySelector("#row");
  forecastElement.innerHTML = forecastHtml;
}

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", submitSearch);

search("Crewe");
displayForecast();
