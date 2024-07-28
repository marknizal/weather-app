import styled, { keyframes } from "styled-components";

export const getColorByWeather = (weather) => {
  if (!weather) return { bgColor: "#282c34", textColor: "white" };

  const mainWeather = weather.weather[0].main.toLowerCase();
  switch (mainWeather) {
    case "clear":
      return { bgColor: "#FFD700", textColor: "#000" };
    case "clouds":
      return { bgColor: "#B0C4DE", textColor: "#000" };
    case "rain":
      return { bgColor: "#4a6583", textColor: "#FFF" };
    case "thunderstorm":
      return { bgColor: "#2F4F4F", textColor: "#FFF" };
    case "snow":
      return { bgColor: "#FFF", textColor: "#000" };
    case "mist":
    case "smoke":
    case "haze":
    case "dust":
    case "fog":
    case "sand":
    case "ash":
    case "squall":
    case "tornado":
      return { bgColor: "#696969", textColor: "#FFF" }; // other
    default:
      return { bgColor: "#282c34", textColor: "white" }; // default
  }
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  transition: background-color 0.7s ease, color 0.7s ease;
  animation: ${fadeIn} 0.7s ease;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  gap: 10px;
  h1 {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #61dafb;
  cursor: pointer;
  &:hover {
    background-color: #21a1f1;
  }
`;

export const WeatherInfo = styled.div`
  margin-top: 20px;
  text-align: center;

  p {
    margin: 4px;
  }
`;
