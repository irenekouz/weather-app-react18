import "./air-conditions-card.css";
import { useContext } from "react";
import themeContext from "context/theme.context";
import { Main, Wind } from "core/interfaces/weather.interface";
import { themeClassNameWithModifier } from "utils/theme-class-name-builder";

type AirConditionsCardProps = {
    weather: Main;
    wind?: Wind;
};

const AirConditionsCard = ({ weather, wind }: AirConditionsCardProps) => {
    const theme = useContext(themeContext);
    const themeClass = themeClassNameWithModifier('air-conditions-card', theme.isLight);
    return (
       <div className={themeClass}>
            <h3>Air Conditions</h3>
            <div>Humidity: { weather.humidity }%</div>
            <div>Real feel: { Math.round(weather.feels_like) }°C</div>
            { wind && <div>Wind: { wind.speed } m/s</div> }
       </div>
    );
};
export default AirConditionsCard;