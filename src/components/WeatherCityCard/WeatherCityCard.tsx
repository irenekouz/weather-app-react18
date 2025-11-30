import { City } from "core/interfaces/city.interface";
import { Weather } from "core/interfaces/weather.interface";
import { getIconUrl } from 'utils/url-builder';
import './weather-city-card.css'
import { useContext } from "react";
import themeContext from "context/theme.context";
import { themeClassNameWithModifier } from "utils/theme-class-name-builder";

type WeatherCityCardProps = {
    city: City;
    weather: Weather;
};

const WeatherCityCard = (props: WeatherCityCardProps) => {
    const {city, weather} = props;
    const theme = useContext(themeContext);
    const themeClass = themeClassNameWithModifier('card', theme.isLight);
    return (
        <div className={themeClass}>
            <div className='card__left'>
                <div className='card__city'>{ city.name }</div>
                <div className='card__conditions'>{ weather?.weather[0].main }</div>
                <div className='card__temp'>{ Math.round(weather?.main?.temp) }{'\u00B0'}</div>
            </div>
            <div className='card__right'>
                <img src={getIconUrl(weather?.weather[0]?.icon)} alt="weather icon" />
            </div>
        </div>
    );
};
export default WeatherCityCard;