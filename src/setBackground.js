import getTime from './getTime';

function setBackground(response) {
  const body = document.querySelector('body');
  const hour = getTime(response);
  if (hour >= 6 && hour <= 18) {
    body.style.backgroundImage = 'url(/src/img/day.jpg)';
  } else if (hour > 18 && hour <= 20) {
    body.style.backgroundImage = 'url(/src/img/afternoon.jpg)';
  } else {
    body.style.backgroundImage = 'url(/src/img/night.jpg)';
  }
}

export default setBackground;
