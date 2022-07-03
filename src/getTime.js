function getTime(response) {
  const currentTime = new Date().toUTCString().slice(17, 19);
  const locationTZ = response.timezone / 3600;
  return parseInt(currentTime, 10) + locationTZ;
}

export default getTime;
