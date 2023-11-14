function search(city) {
  let apiKey = `b9b10f3af19o1ba6ec0aed0664cb453t`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log(apiUrl);
}

function submitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Todays' weather in ${searchInput.value}`;
  search(searchInput.value);
}
let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", submitSearch);
