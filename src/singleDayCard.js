import getIcon from './getIcon';

function singleDayCard(response, defaultUnit) {
  const tempInfo = document.querySelector('.tempInfo');
  while (tempInfo.firstElementChild) {
    tempInfo.firstElementChild.remove();
  }
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('cardWrapper');
  const cardTitle = document.createElement('h2');
  cardTitle.textContent = 'Today';
  cardWrapper.appendChild(cardTitle);

  const temp = document.createElement('p');
  const feelsLike = document.createElement('p');
  const hiLo = document.createElement('p');
  const humidity = document.createElement('p');
  const pressure = document.createElement('p');
  const windSpeed = document.createElement('p');
  const weatherDesc = document.createElement('p');

  let tempUnit, windSpeedUnit;
  if (defaultUnit === 'imperial') {
    tempUnit = 'F';
    windSpeedUnit = 'mph'
  } else {
    tempUnit = 'C';
    windSpeedUnit = 'm/s'
  }

  temp.textContent = `${Math.round(response.main.temp)} \u00B0${tempUnit}`;
  feelsLike.textContent = `Feels Like: ${Math.round(response.main.feels_like)} \u00B0${tempUnit}`;
  hiLo.textContent = `Hi/Low: ${Math.round(response.main.temp_max)}/${Math.round(
    response.main.temp_min,
  )} \u00B0${tempUnit}`;
  humidity.textContent = `Humidity: ${response.main.humidity}%`;
  pressure.textContent = `Pressure: ${response.main.pressure} hPa`;
  windSpeed.textContent = `Wind Speed: ${response.wind.speed} ${windSpeedUnit}`;
  weatherDesc.textContent = `${response.weather[0].description}`;

  cardWrapper.appendChild(weatherDesc);
  cardWrapper.appendChild(getIcon(response));
  cardWrapper.appendChild(temp);
  cardWrapper.appendChild(feelsLike);
  cardWrapper.appendChild(hiLo);
  cardWrapper.appendChild(humidity);
  cardWrapper.appendChild(pressure);
  cardWrapper.appendChild(windSpeed);

  return cardWrapper;
}

export default singleDayCard;
