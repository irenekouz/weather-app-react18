import { City } from "core/interfaces/city.interface";
import { NavLink } from "react-router";
import { ROUTES, replaceRouteId } from "core/constants/routes.constant";
import { PropsWithChildren } from "react";

type CityLinkProps = PropsWithChildren<{
  city: City;
}>;

const CityLink = (props: CityLinkProps) => {
    const city = props.city;
    return (
        <li>
            <NavLink to={`/city/${city.id}`}>{city.name} ({city.country})</NavLink>
        </li>
    );
}

export default CityLink;