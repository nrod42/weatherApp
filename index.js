const body = document.querySelector('body');
const searchBtn = document.querySelector('.searchBtn');
const search = document.getElementById('search');
const locationHeading = document.querySelector('.locationHeading');
const tempInfo = document.querySelector('.tempInfo');
const slider = document.querySelector('input[type="checkbox"]');

let defaultUnit = 'imperial';
let currentLocation = 'New York';
getWeather(currentLocation,defaultUnit);

searchBtn.addEventListener('click', () => {
    currentLocation = search.value;
    getWeather(currentLocation, defaultUnit);
});

search.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        currentLocation = search.value;
        getWeather(currentLocation, defaultUnit);
    }
})

slider.addEventListener('change', () => {
    slider.checked ? defaultUnit = 'metric' : defaultUnit = 'imperial';
    getWeather(currentLocation, defaultUnit);
})

function getWeather (location, units) {
    if (!location) return;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=f46fb1cd5788b8eb6ce7708fb28aa589&units=${units}`, {mode:'cors'})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response)
        locationHeading.textContent = response.name;
        dayCard(response);
        setBackground(response);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
}

function dayCard (obj) {
    while (tempInfo.firstElementChild) {
        tempInfo.firstElementChild.remove();
    };
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('cardWrapper');
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = 'Today';
    cardWrapper.appendChild(cardTitle);

    getIcon(obj.weather, cardWrapper)

    const temp = document.createElement('p');
    const feelsLike = document.createElement('p');
    const hiLo = document.createElement('p');
    const humidity = document.createElement('p');
    const pressure = document.createElement('p');
    const windSpeed = document.createElement('p');
    const weatherDesc = document.createElement('p');

    let tempUnit;
    defaultUnit === 'imperial' ? tempUnit = 'F' : tempUnit = 'C';

    temp.textContent = `${Math.round(obj.main.temp)} \u00B0${tempUnit}`;
    feelsLike.textContent = `Feels Like: ${Math.round(obj.main.feels_like)} \u00B0${tempUnit}`;
    hiLo.textContent = `Hi/Low: ${Math.round(obj.main.temp_max)}/${Math.round(obj.main.temp_min)} \u00B0${tempUnit}`
    humidity.textContent = `Humidity: ${obj.main.humidity}%`;
    pressure.textContent = `Pressure: ${obj.main.pressure} hPa`;
    windSpeed.textContent = `Wind Speed: ${obj.wind.speed}`;
    weatherDesc.textContent = `${obj.weather[0].description}`;

    cardWrapper.appendChild(temp);
    cardWrapper.appendChild(feelsLike);
    cardWrapper.appendChild(hiLo);
    cardWrapper.appendChild(humidity);
    cardWrapper.appendChild(pressure);
    cardWrapper.appendChild(windSpeed);
    cardWrapper.appendChild(weatherDesc);

    tempInfo.appendChild(cardWrapper);  
}

function getIcon (obj, append) {
    fetch(`http://openweathermap.org/img/wn/${obj[0].icon}@2x.png`, {mode: "cors"})
    .then((response) => {
        const iconImg = response.url;
        const img = document.createElement('img')
        img.src = iconImg;
        append.appendChild(img)
    })    
}

function setBackground (obj) {
    const hour = getHour(obj);
    if (hour >= 6 && hour <= 18) {
        body.style.backgroundImage = 'url(./img/day.jpg)';
    } else if (hour > 18 && hour <= 20) {
        body.style.backgroundImage = 'url(./img/afternoon.jpg)';
    } else {
        body.style.backgroundImage = 'url(./img/night.jpg)';
    }
}

function getHour (obj) {
    const currentTime = new Date().toUTCString().slice(17,19);
    const locationTZ = obj.timezone/3600;
    return parseInt(currentTime, 10) + locationTZ;
}