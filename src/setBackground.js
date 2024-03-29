import getTime from './getTime';

function setBackground(time) {
  const body = document.querySelector('body');
  const hour = getTime(time);

  if (hour >= 6 && hour < 18) {
    body.style.backgroundImage = 'url(./img/day.jpg)';
  } else if (hour >= 18 && hour < 20) {
    body.style.backgroundImage = 'url(./img/afternoon.jpg)';
  } else {
    body.style.backgroundImage = 'url(./img/night.jpg)';
  }
}

export default setBackground;
