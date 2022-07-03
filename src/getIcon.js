function getIcon(response, dest) {
  fetch(`http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`, {
    mode: 'cors',
  }).then((response) => {
    const img = document.createElement('img');
    const iconImg = response.url;
    img.src = iconImg;
    dest.appendChild(img);
  });
}

export default getIcon;
