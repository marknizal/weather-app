import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
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
