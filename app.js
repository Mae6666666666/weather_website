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
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto");
    return await response.json();
}

getWeather().then((data) => {
    console.log(data)
    const temperature = data.current.temperature_2m;
    const unit = data.current_units.temperature_2m;

    document.querySelector("#temperature").textContent =
        `${temperature}${unit}`;
        
    const max_temperature = data.daily.temperature_2m_max[0];

    document.querySelector("#high").textContent =
        `${max_temperature}${unit}`;

    const min_temperature = data.daily.temperature_2m_min[0];

    document.querySelector("#low").textContent =
        `${min_temperature}${unit}`;

    const date_1 = data.daily.time[1];

    document.querySelector("#tomorrow").textContent =
        date_1;

    const date_2 = data.daily.time[2];

    document.querySelector("#second-day").textContent =
        date_2;

    const date_3 = data.daily.time[3];

    document.querySelector("#third-day").textContent =
        date_3;

    const date_4 = data.daily.time[4];

    document.querySelector("#fourth-day").textContent =
        date_4;

    const date_5 = data.daily.time[5];

    document.querySelector("#fifth-day").textContent =
        date_5;

    const date_6 = data.daily.time[6];

    document.querySelector("#sixth-day").textContent =
        date_6;
    
    // tomorrow day highs and lows:

    const tomorrow_max_temperature = data.daily.temperature_2m_max[1];

    document.querySelector("#tomorrow-high").textContent =
        `${tomorrow_max_temperature}${unit}`;

    
    const tomorrow_min_temperature = data.daily.temperature_2m_min[1];

    document.querySelector("#tomorrow-low").textContent =
        `${tomorrow_min_temperature}${unit}`;

    // second day highs and lows:

    const second_max_temperature = data.daily.temperature_2m_max[2];

    document.querySelector("#second-high").textContent =
        `${second_max_temperature}${unit}`;

    
    const second_min_temperature = data.daily.temperature_2m_min[2];

    document.querySelector("#second-low").textContent =
        `${second_min_temperature}${unit}`;

    // third day highs and lows:

    const third_max_temperature = data.daily.temperature_2m_max[3];

    document.querySelector("#third-high").textContent =
        `${third_max_temperature}${unit}`;

    
    const third_min_temperature = data.daily.temperature_2m_min[3];

    document.querySelector("#third-low").textContent =
        `${third_min_temperature}${unit}`;

    // fourth day highs and lows:

    const fourth_max_temperature = data.daily.temperature_2m_max[4];

    document.querySelector("#fourth-high").textContent =
        `${fourth_max_temperature}${unit}`;

    
    const fourth_min_temperature = data.daily.temperature_2m_min[4];

    document.querySelector("#fourth-low").textContent =
        `${fourth_min_temperature}${unit}`;

    // fifth day highs and lows:

    const fifth_max_temperature = data.daily.temperature_2m_max[5];

    document.querySelector("#fifth-high").textContent =
        `${third_max_temperature}${unit}`;

    
    const fifth_min_temperature = data.daily.temperature_2m_min[5];

    document.querySelector("#fifth-low").textContent =
        `${fifth_min_temperature}${unit}`;
    
    // sixth day highs and lows:

    const sixth_max_temperature = data.daily.temperature_2m_max[6];

    document.querySelector("#sixth-high").textContent =
        `${sixth_max_temperature}${unit}`;

    
    const sixth_min_temperature = data.daily.temperature_2m_min[6];

    document.querySelector("#sixth-low").textContent =
        `${sixth_min_temperature}${unit}`;
});