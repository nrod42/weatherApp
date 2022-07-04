function getIcon(response) {
  const img = document.createElement('img');
  fetch(`https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`, { mode: 'cors',})
  .then((response) => {
    img.src = response.url;
  });
  return img
}

export default getIcon;
