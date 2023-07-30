export async function getData(city) {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7aa0e87b3a094a37906165204233007&q=${city}&aqi=no`, {mode: 'cors'});
        const weatherData = await response.json();
        return weatherData;
    }
    catch (error) {
        alert("Error recieving data");
        return null;
    }
}

 export async function makeData(weatherData) {
    const { location, current } = weatherData;
    const processedData = {
        locationName: location.name,
        weather_condition:  current.condition.text,
        celsius: current.temp_c,
        feel_celsius: current.feelslike_c,
        wind:  current.wind_kph,
    }
    return processedData; 
}