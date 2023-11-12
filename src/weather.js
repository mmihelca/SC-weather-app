function handleSearch(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector(".search-field");
  let cityName = document.querySelector(".city-main");
  //first put what you have, and then what you want to replace it with
  cityName.innerHTML = searchFormInput.value;
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", handleSearch);
