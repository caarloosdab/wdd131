// Display the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Display the last modified date of the document
document.getElementById('last-modified').textContent = document.lastModified;

// Wind Chill calculation
function calculateWindChill(temp, windSpeed) {
    // Wind chill calculation formula in Celsius
    // wind chill = 13.12 + 0.6215 * T - 11.37 * V^0.16 + 0.3965 * T * V^0.16
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Static values for temperature and wind speed
const temperature = 15; // °C
const windSpeed = 10; // km/h

// Check if wind chill calculation conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
    document.getElementById('wind-chill').textContent = `${windChill} °C`;
} else {
    document.getElementById('wind-chill').textContent = 'N/A';
}