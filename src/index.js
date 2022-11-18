import getWeather from './getWeather';
import './style.css';

const searchBtn = document.querySelector('.searchBtn');
const search = document.getElementById('search');
const slider = document.querySelector('input[type="checkbox"]');

let defaultUnit = 'imperial';
let currentLocation = 'New York';

getWeather(currentLocation, defaultUnit);

searchBtn.addEventListener('click', () => {
  currentLocation = search.value;
  getWeather(currentLocation, defaultUnit);
});

search.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    currentLocation = search.value;
    getWeather(currentLocation, defaultUnit);
  }
});

slider.addEventListener('change', () => {
  defaultUnit = slider.checked ? 'metric' : 'imperial';
  getWeather(currentLocation, defaultUnit);
});
