export function settingSearchData(data) {
    const searchResult = document.getElementById("searchResult");
    searchResult.classList.add("active");

    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const feelsLike = document.getElementById("feelsLike");
    const weather_condition = document.getElementById("weather_condition");
    const wind = document.getElementById("wind");

    cityName.textContent = `${data.locationName}`;
    temperature.textContent = `${data.celsius} °C`;
    weather_condition.textContent = `${data.weather_condition}`;
    feelsLike.textContent = `Feels like: ${data.celsius} °C`;
    wind.textContent = `Wind: ${data.wind} km/h`;
  }