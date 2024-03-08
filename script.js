
let searchBox = document.querySelector('#city');
let searchBtn = document.querySelector('#city-search');


async function getWeather(city) {
    const apiKey = 'b74e4fa1fd0bb2a372d3f9c7ef968d8e'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    try {
        if (response.status === 200) {
            document.querySelector('#error').style.display = "none";
            document.querySelector('.weather').style.display = "block";

            const data = await response.json();

            document.querySelector('#weather-des').innerHTML = data.weather[0].main;
            document.querySelector('#city-name').innerHTML = data.name;
            document.querySelector('#temp span').innerHTML = Math.round(data.main.temp);
            document.querySelector('#weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            document.querySelector('#wind span').innerHTML = data.wind.speed;
            document.querySelector('#humidity span').innerHTML = data.main.humidity;
        } else if (response.status === 404) {
            document.querySelector('#error').style.display = "block";
            document.querySelector('.weather').style.display = "none";
        }
    }    
    catch (error) {
        document.querySelector('#error').innerHTML = error;
        document.querySelector('#error').style.display = block;
        document.querySelector('.weather').style.display = none;
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(searchBox.value)
});

searchBox.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        searchBtn.click();
      }
});


// {
//     "coord": {
//         "lon": 73.8553,
//         "lat": 18.5196
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 297.96,
//         "feels_like": 297.2,
//         "temp_min": 297.96,
//         "temp_max": 297.96,
//         "pressure": 1014,
//         "humidity": 27,
//         "sea_level": 1014,
//         "grnd_level": 952
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 1.52,
//         "deg": 341,
//         "gust": 1.77
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1709920842,
//     "sys": {
//         "country": "IN",
//         "sunrise": 1709860703,
//         "sunset": 1709903552
//     },
//     "timezone": 19800,
//     "id": 1259229,
//     "name": "Pune",
//     "cod": 200
// }