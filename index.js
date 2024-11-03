document.addEventListener('DOMContentLoaded', () => {
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    getWeatherBtn.addEventListener('click', () => {
        const cityName = cityInput.value;

        if (cityName) {
            getWeather(cityName);
        } else {
            alert('Please enter a city name.');
        }
    });

    async function getWeather(city) {
        // const apiKey = 'c7e2d85beb7f76ba1e53c616d84ab3df'; 
        // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7e2d85beb7f76ba1e53c616d84ab3df&units=metric`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (response.ok) {
                displayWeather(data);
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function displayWeather(data) {
        const { name, main, weather } = data;

        const weatherHtml = `
            <h2>${name}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Weather: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
        `;

        weatherInfo.innerHTML = weatherHtml;
    }
});