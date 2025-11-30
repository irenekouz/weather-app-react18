import { useParams } from "react-router";
import { CITY_ID_TO_DATA_MAP } from "core/constants/city-data.constant";
import { useNavigate } from "react-router";
import { ROUTES } from "core/constants/routes.constant";
import MainPage from "../MainPage/MainPage";
import { useCallback, useMemo } from "react";
import './city-details-page.css';
import imgUrl from "src/assets/images/back.png";

const CityDetailsPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const cityId = Number(params.id);
    const city = useMemo(() => {
        return CITY_ID_TO_DATA_MAP[cityId];
    }, [cityId]);

    const backToList = useCallback(() => {
        navigate(ROUTES.LIST);
    }, [navigate]);

    return (
        <div className="city-details">
            <div className="back-to-list" onClick={backToList}>
                <img src={imgUrl} alt="" height="20"/>
                <a>Back to list</a>
            </div>
            <h2>Weather for city {city.name} ({city.countryName})</h2>
            <MainPage latitude={city.coord.lat} longitude={city.coord.lon} />
        </div>
    );
}

export default CityDetailsPage;

// Page with details about chosen (in a list from previous point) city.