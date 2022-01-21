import {useState} from 'react';
import axios from "axios";
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherInfoComponent';
import styled from 'styled-components';


const Container=styled.div`
display:flex;
flex-direction:column;
margin: auto;
align-items: center;
box-shadow: 0 5px 5px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px;
background: white;
font-family:Montserrat;
`;

const AppLabel=styled.div`
color:black;
font-size:18px;
font-weight:bold;
`;

function App() {
  const [city,updateCity]= useState();
  const [weather,updateWeather]= useState();
  const API_KEY=process.env.REACT_APP_App_Key;

  const fetchWeather=async(e)=>{
    e.preventDefault();
    const response=
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>Weather Report</AppLabel>
      {weather?
      (<WeatherComponent weather={weather}/>):
      (<CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />)}
    </Container>
  );
}

export default App;
