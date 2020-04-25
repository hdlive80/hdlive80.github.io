
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a5dd040c5a9240563b57042bf760401f';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a5dd040c5a9240563b57042bf760401f';
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then( function (jsonObject) {
        document.getElementById('current').textContent = jsonObject.weather[0].main;
        document.getElementById('hightemp').textContent = jsonObject.main.temp_max;
        document.getElementById('humid').textContent = jsonObject.main.humidity;
        document.getElementById('windspeed').textContent = jsonObject.wind.speed;
        document.getElementById('current').textContent = capitalizeFLetter(jsonObject.weather[0].description);
})

fetch(forecastUrl)
    .then(function (response) {
        return response.json();
    })
    .then( function (jsonObject) {
        const forecasts = jsonObject.list.filter(item => item.dt_txt.includes('18:00:00'));
        const rows = document.querySelectorAll('tr td span');
        const icons = document.querySelectorAll('tr td img');
        const days = document.querySelectorAll('th');

        for (let i = 0; i < rows.length; i++) {
            const date = new Date(forecasts[i].dt_txt);
            const day = weekdays[date.getDay()];
            rows[i].textContent = Math.round(forecasts[i].main.temp);
            icons[i].setAttribute('src', `https://openweathermap.org/img/wn/${forecasts[i].weather[0].icon}@2x.png`);
            days[i].textContent = day;
        }
    })

    fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        for (let i=0; i<3; i++){
        document.getElementById(`event${i+1}`).textContent = jsObject.towns[1].events[i];
        }
    });