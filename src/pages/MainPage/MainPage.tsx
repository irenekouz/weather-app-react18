import { City } from 'core/interfaces/city.interface';
import { Weather } from 'core/interfaces/weather.interface';
import useFetch from 'hooks/useFetch';
import { useState, useCallback, useEffect } from 'react';
import { getWeatherByCityUrl, getCityByCoordinatesUrl } from 'utils/url-builder';
import WeatherCityCard from 'components/WeatherCityCard/WeatherCityCard';
import AirConditionsCard from 'components/AirConditionsCard/AirConditionsCard';
import './main-page.css';

type MainPageProps = {
    latitude?: number;
    longitude?: number;
};
const MainPage = (props: MainPageProps) => {
    // coordinates
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);

    // weather data
    const [weather, setWeather] = useState<Weather | null>(null);
    const [weatherLoading, setWeatherLoading] = useState(true);
    const [weatherError, setWeatherError] = useState<Error | null>(null);

    // city data
    const [city, setCity] = useState<City | null>(null);
    const [cityLoading, setCityLoading] = useState(true);
    const [cityError, setCityError] = useState<Error | null>(null);

    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            // fetching current weather
            useFetch(getWeatherByCityUrl(latitude, longitude))
                .then((data: Weather) => {
                        setWeather(data);
                        setWeatherLoading(false);
                }, error => {
                        setWeatherError(error);
                        setWeatherLoading(false);
                });

            // fetching city data
            useFetch(getCityByCoordinatesUrl(latitude, longitude))
                .then((data: City[]) => {
                        setCity(data[0]);
                        setCityLoading(false);
                }, error => {
                        setCityError(error);
                        setCityLoading(false);
                });
        }
    }, [latitude, longitude]);

    const setDefaultCity = useCallback(() => {
        // default to Minsk coordinates
        setLatitude(53.900002);
        setLongitude(27.566668);
    }, [latitude, longitude]);

    useEffect(() => {
        if (props.latitude && props.longitude) {
            setLatitude(props.latitude);
            setLongitude(props.longitude);
        } else if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setDefaultCity();
                })
        } else {
            setDefaultCity();
        }
    }, [props.latitude, props.longitude]);

    if (weatherLoading || cityLoading) {
        return <div>Loading...</div>;
    }

    if (weatherError) {
        return <div>Error: {weatherError.message}</div>;
    }

    if (cityError) {
        return <div>Error: {cityError.message}</div>;
    }

    if (weather && city) {
        return (
            <div className='main'>
                <WeatherCityCard city={city} weather={weather} />
                <AirConditionsCard weather={weather.main} wind={weather.wind} />
            </div>
        );
    }
}

export default MainPage;
// Main page with weather for the current location.