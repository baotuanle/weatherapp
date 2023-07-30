import { getData, makeData} from './modules/weather.js';
import {settingSearchData} from './modules/view.js';

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

searchBtn.addEventListener("click", async () => {
    try {
        if (searchInput.value === "") return;
        const weatherData = await getData(searchInput.value);
        console.log(weatherData);
        const processedData = await makeData(weatherData);
        settingSearchData(processedData);
        } catch (error) {
        alert("Error fetching data");
        }
});


