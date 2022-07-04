import singleDayCard from './singleDayCard';
import setBackground from './setBackground';

function getWeather(location, unit) {
  const locationHeading = document.querySelector('.locationHeading');
  const tempInfo = document.querySelector('.tempInfo');
  if (!location) return;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=f46fb1cd5788b8eb6ce7708fb28aa589&units=${unit}`,
    { mode: 'cors' },
  )
    .then((response) => {
      return response.json();
    })
    .then(async (response) => {
      locationHeading.textContent = response.name;
      const card = await singleDayCard(response, unit);
      tempInfo.appendChild(card);
      setBackground(response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export default getWeather;
