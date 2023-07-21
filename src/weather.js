const OPEN_WEATHER_MAP_API_KEY = "1582f627ab547f4f7530a268b561454e";

const reloadButton = document.querySelector(".weather i");

const printWeather = (weather) => {
	const city = weather.name;
	const temp = weather.main.temp;
	const weatherName = weather.weather[0].main;
	const weatherIcon = weather.weather[0].icon;
	const iconURL = `https://openweathermap.org/img/wn/${weatherIcon}.png`;

	const cityElement = document.querySelector(".weather p:first-child");
	const weatherElement = document.querySelector(".weather p:last-child");
	const iconElement = document.querySelector(".weather img");

	cityElement.innerText = city;
	weatherElement.innerText = `${weatherName} ${temp}℃`;
	iconElement["src"] = iconURL;
};

const fetchWeather = (position) => {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=metric`;
	fetch(url).then((res) =>
		res.json().then((weather) => printWeather(weather))
	);
};

const loadWeather = () => {
	navigator.geolocation.getCurrentPosition(
		(position) => fetchWeather(position),
		(error) => alert(error.message)
	);
};

loadWeather();
reloadButton.addEventListener("click", loadWeather);
reloadButton.addEventListener("mouseenter", () =>
	reloadButton.classList.add("fa-spin")
);
reloadButton.addEventListener("mouseleave", () =>
	reloadButton.classList.remove("fa-spin")
);
