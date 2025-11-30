import './info-page.css';
import { useContext } from "react";
import themeContext from "context/theme.context";

const InfoPage = () => {
    const theme = useContext(themeContext);
    const themeClass = theme.isLight ? 'light' : 'dark';
    return (
        <div className={ 'about about--' + themeClass}>
            <div className="about__content">
                <p>This project is a personal, non-commercial weather application created as part of practice of React development.</p>
                <p>It uses the OpenWeatherMap API to provide weather data from cities all around the world.</p>
            </div>
        </div>
    );
}

export default InfoPage;

// Info page where user can see some information about the service.