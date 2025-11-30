import citiesData from "assets/city.list.min.json";
import countriesData from "assets/country.list.json";
import { City } from "core/interfaces/city.interface";

const CITY_LIST = citiesData as City[];

const COUNTRY_CODE_TO_NAME_MAP = (countriesData as Array<{Code: string, Name: string}>).reduce((acc, el: {Code: string, Name: string}) => {
    acc[el.Code] = el.Name;
  return acc;
}, {} as {[key: string]: string});

type CityWithCountryName = City & { countryName: string; };

const CITY_ID_TO_DATA_MAP = (citiesData as City[]).reduce((acc, el: City) => {
    acc[el.id] = {
        ...el,
        countryName: COUNTRY_CODE_TO_NAME_MAP[el.country]
    };
    return acc;
}, {} as {[key: number]: CityWithCountryName});

export { COUNTRY_CODE_TO_NAME_MAP, CITY_ID_TO_DATA_MAP, CITY_LIST };