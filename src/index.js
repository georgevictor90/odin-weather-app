import "./style.css";
import LocationIcon from "./icons/map-marker-solid.svg";
const locationIcon = document.querySelector(".location-icon");
locationIcon.src = LocationIcon;
// import getUserLocation from "./geolocation";

const app = {
  init: () => {
    app.showCurrentWeather("Iasi", "metric");
    app.showForecast("Iasi", "metric");
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", (e) => {
      app.handleChange(e.target.checked);
      // console.log(e.target.checked);
    });
    const searchBtn = document.getElementById("searchBtn");
    const input = document.getElementById("location");
    input.value = "Iasi";
    input.addEventListener("keypress", function (event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.querySelector(".btn").click();
      }
    });

    searchBtn.addEventListener("click", () => {
      if (!input.value) return;
      // app.getForecast(input.value);

      if (checkbox.checked === true) {
        app.showCurrentWeather(input.value, "imperial");
        app.showForecast(input.value, "imperial");
      } else if (checkbox.checked === false) {
        app.showCurrentWeather(input.value, "metric");
        app.showForecast(input.value, "metric");
      }
    });
  },

  handleChange: function (value) {
    const input = document.getElementById("location");
    if (value === true) {
      app.showCurrentWeather(input.value, "imperial");
      app.showForecast(input.value, "imperial");
    } else {
      app.showCurrentWeather(input.value, "metric");
      app.showForecast(input.value, "metric");
    }
  },

  showCurrentWeather: async (city, unit) => {
    try {
      const cityName = document.querySelector(".city-name");
      const temperature = document.querySelector(".temperature");
      const weatherDescription = document.querySelector(".weather-description");
      const currentWeatherIcon = document.querySelector(
        ".current-weather-icon"
      );
      const datetime = document.querySelector(".datetime");
      const feelsLike = document.querySelector(".feels-like");
      const humidity = document.querySelector(".humidity");
      const pressure = document.querySelector(".pressure");
      const sunrise = document.querySelector(".sunrise");
      const sunset = document.querySelector(".sunset");

      const currentWeatherData = await app.getCurrentWeather(city, unit);

      if (currentWeatherData === undefined)
        throw new Error("Invalid city name");
      const weatherClass = currentWeatherData.weather[0].main.toLowerCase();
      const backgroundSrc = `../src/images/${weatherClass}.jpg`;
      document.getElementById(
        "body"
      ).style.backgroundImage = `url(${backgroundSrc})`;

      cityName.textContent = currentWeatherData.name;
      datetime.textContent = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      feelsLike.textContent = `Feels like: ${Math.round(
        Number(currentWeatherData.main.feels_like)
      )}°`;
      temperature.textContent = `${Math.round(
        Number(currentWeatherData.main.temp)
      )}`;
      weatherDescription.textContent =
        currentWeatherData.weather[0].description;
      currentWeatherIcon.src = `http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@4x.png`;

      const sunriseTime = new Date(
        currentWeatherData.sys.sunrise * 1000
      ).toLocaleTimeString(["en-GB"], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const sunsetTime = new Date(
        currentWeatherData.sys.sunset * 1000
      ).toLocaleTimeString(["en-GB"], {
        hour: "2-digit",
        minute: "2-digit",
      });

      humidity.textContent = `${currentWeatherData.main.humidity}%`;
      pressure.textContent = `${currentWeatherData.main.pressure}`;
      sunrise.textContent = sunriseTime;
      sunset.textContent = sunsetTime;
    } catch (error) {}
  },

  showForecast: async (city, unit) => {
    try {
      const cards = [...document.querySelectorAll(".card")];
      const weatherData = await app.getForecast(city, unit);
      if (weatherData === undefined) throw new Error("Invalid city name");
      for (let i = 0; i < cards.length; i++) {
        const time = new Date(
          Number(`${weatherData.list[i].dt}000`)
        ).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

        cards[i].innerHTML = `<span class="time">${time}</span>
        <img src="http://openweathermap.org/img/wn/${
          weatherData.list[i].weather[0].icon
        }@2x.png" alt="${
          weatherData.list[i].weather[0].description
        }" class="weather-icon" />
        <span class="temp-small">${Math.round(
          Number(weatherData.list[i].main.temp)
        )}°</span>`;
      }
    } catch (error) {
      console.log(error);
    }
  },

  getCurrentWeather: async (city, unit) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c73916f071e17c792630e53c14121e04&units=${unit}`,
        { mode: "cors" }
      );
      if (!response.ok) throw new Error("Invalid city name");
      const data = await response.json();
      return data;
    } catch (error) {}
  },

  getForecast: async (city, unit) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c73916f071e17c792630e53c14121e04&units=${unit}`,
        { mode: "cors" }
      );
      if (!response.ok) throw new Error("Invalid city name");
      const data = await response.json();
      return data;
    } catch (error) {}
  },
};

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

app.init();
