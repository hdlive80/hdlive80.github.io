const hightemp = document.getElementById("hightemp").textContent;
const windspeed = document.getElementById("windspeed").textContent;

const windchill = Math.floor(35.74 + (0.6215 * hightemp) - (35.75 * windspeed**0.16) + (0.4275 * hightemp * windspeed**0.16))

document.getElementById('windchill').textContent = windchill;
