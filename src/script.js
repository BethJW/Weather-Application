function submitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Todays' weather in ${searchInput.value}`;
}
let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", submitSearch);
