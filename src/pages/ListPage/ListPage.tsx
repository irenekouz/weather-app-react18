import { City } from "core/interfaces/city.interface";
import { useNavigate } from "react-router";
import { COUNTRY_CODE_TO_NAME_MAP, CITY_LIST } from "core/constants/city-data.constant";
import { ROUTES, replaceRouteId } from "core/constants/routes.constant";
import './list-page.css';
import { useState, useMemo } from "react";
import { Virtuoso } from "react-virtuoso";
import { LocationType } from "core/enums/location-type.enum";
import SearchInput from "components/SearchInput/SearchInput";
 
const cities = CITY_LIST;
const countries = COUNTRY_CODE_TO_NAME_MAP;

type RowType = Partial<City> & { type: LocationType };

let currentCountry = '';
const rows: RowType[] = cities.reduce((acc: RowType[], city: City) => {
    if (city.country !== currentCountry) {
        currentCountry = city.country;
        acc.push({ type: LocationType.country, name: countries[currentCountry] });
    }
    acc.push({
        type: LocationType.city,
        ...city
    });
    return acc;
},[]);

const RowComponent = (props: any) => {
   const row = props.row;

    if (row.type === LocationType.country) {
        return <div className="row__country"><b>{row.name}</b></div>;
    }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(replaceRouteId(ROUTES.CITY, row.id!));
    };
    return <div className="row__city"><span onClick={handleClick}>{row.name}</span></div>;
};

const ListPage = () => {
    const [search, setSearch] = useState('');

    const onSearchChange = (e: any) => {
        setSearch(e.target.value);
    };

    const filtered = useMemo(() => {
        const searchValue = search.trim().toLowerCase();
        if (!searchValue) {
            return rows;
        }

        let currentCountry: RowType;
        let currentCountryCities: RowType[] = [];
        let result: RowType[] = [];

        const filterCityFn = (row: RowType) => {
            return row.type === LocationType.city && row.name?.toLowerCase().includes(searchValue);
        }

        rows.forEach((row: RowType) => {
            if (row.type === LocationType.country) {
                if (!currentCountry) {
                    currentCountry = row;
                } else if (currentCountry.name !== row.name) {
                    if (currentCountryCities.length > 0) {
                        result = [
                            ...result,
                            currentCountry,
                            ...currentCountryCities,
                        ];
                    }
                    currentCountryCities = [];
                    currentCountry = row;
                }
            } else if (filterCityFn(row)) {
                currentCountryCities.push(row);
            }
        });
        return result;
    }, [search]);

    return (
        <div>
            <SearchInput
                search={search}
                onSearchChange={onSearchChange}
                placeholder="Search for cities"
            />
            { filtered.length > 0
            && <Virtuoso
                style={{ height: '100%' }}
                itemContent={(index) => <RowComponent row={filtered[index]}/>}
                totalCount={filtered.length}
                />}
        </div>
    );
}

export default ListPage;

// List page (may also be a flyout or any other kind of menu), where user can see the weather for all cities in the World (all available cities)
// sorted by country and city title