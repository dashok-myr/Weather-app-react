import React, { useState } from "react";
import HeroBackground from "./components/HeroBackground/HeroBackground.component";
import WeatherCard from "./components/WeatherCard/WeatherCard.component";
import WeatherForm from "./components/WeatherForm.component";
import { getCity, getWeather } from "./App.utils";

function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [err, setErr] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onButtonSubmit = async (event) => {
    event.preventDefault();
    try {
      const cityData = await getCity(input);
      const weatherData = await getWeather(cityData.Key);
      const weather = {
        cityName: cityData.EnglishName,
        text: weatherData.WeatherText,
        temperature: weatherData.Temperature.Metric.Value,
        icon: weatherData.WeatherIcon,
      };
      setWeather(weather);
    } catch (e) {
      setErr(e);
    }
  };
  return (
    <>
      <HeroBackground />
      <WeatherForm
        onInputChange={onInputChange}
        input={input}
        onButtonSubmit={onButtonSubmit}
      />
      <WeatherCard weather={weather} error={err} />
    </>
  );
}

export default App;
