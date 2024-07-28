import React, { useState, useEffect } from "react";
import axios from "axios";
import { TiWeatherPartlySunny } from "react-icons/ti";
import {
  getColorByWeather,
  Container,
  TitleWrapper,
  Form,
  Input,
  Button,
  WeatherInfo,
} from "./WeatherApp.styled";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherByLocation = async (latitude, longitude) => {
      const API_KEY = "8e73df35fd9d80c5c8d93289ab7e888e";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

      try {
        console.log(`API URL: ${URL}`);
        const response = await axios.get(URL);
        console.log("Response Data:", response.data);
        setWeather(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching the weather data:", error);
        setError("Unable to fetch weather data for your location.");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherByLocation(latitude, longitude);
          },
          (error) => {
            console.error("Error getting user's location:", error);
            setError("Unable to retrieve your location.");
            setLoading(false);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setError("Geolocation is not supported by your browser.");
        setLoading(false);
      }
    };

    getUserLocation();
  }, []);

  const getWeather = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when fetching weather by city
    const API_KEY = "8e73df35fd9d80c5c8d93289ab7e888e";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      console.log(`API URL: ${URL}`);
      const response = await axios.get(URL);
      console.log("Response Data:", response.data);
      setWeather(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching the weather data:", error);
      setError("City not found. Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const { bgColor, textColor } = getColorByWeather(weather);

  return (
    <Container bgColor={bgColor} textColor={textColor}>
      <TitleWrapper>
        <TiWeatherPartlySunny />
        <h1>Weather</h1>
      </TitleWrapper>
      <Form onSubmit={getWeather}>
        <Input
          type="text"
          placeholder="Enter city.."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && !loading && (
        <WeatherInfo>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </WeatherInfo>
      )}
    </Container>
  );
};

export default WeatherApp;
