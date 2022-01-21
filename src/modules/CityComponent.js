import styled from 'styled-components';

const WeatherLogo=styled.img`
 width:140px;
 height:140px;
 margin:40px auto;
`
const ChooseCityLabel=styled.span`
color:black;
font-size: 18px;
font-weight: bold;
margin: 10px auto;
`
const SearchBox=styled.form`
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius:2px;
color:black;
font-size: 18px;
font-weight: bold;
margin: 10px auto;
& input{
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight:bold;
}
& button{
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color:black;
    border: none;
    outline:solid black 1px;
    font-weight:bold;
    cursor:pointer;
}
`

const CityComponent=(props)=>{
    const {updateCity,fetchWeather}=props;
   
    return(
        <>
        <WeatherLogo alt="logo" src="/icon/perfect-day.svg"/>
        <ChooseCityLabel>Find weather of  your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input placeholder='City' onChange={(e)=>{updateCity(e.target.value)}}/>
            <button type="submit">Search</button>
        </SearchBox>
        </>
    );
}

export default CityComponent;