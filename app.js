// async function getWeather(){
//     const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=is_day,temperature_2m,relative_humidity_2m,wind_speed_10m");
//     return await response.json();
// }

// const data = await response.json();

// async function getWeather() {
//     const response = await fetch("http://127.0.0.1:8000/weather");
//     return await response.json();
// }

// const currentWeather = document.getElementById("current_weather")

async function getWeather() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m");
    return await response.json();
}

getWeather().then((data) => {
    console.log(data)
    const temperature = data.current.temperature_2m;
    const unit = data.current_units.temperature_2m;

    document.querySelector("#temperature").textContent =
        `${temperature}${unit}`;
});

// getWeather().then((data) => {

// }