import { NavLink } from "react-router";
import { useContext } from "react";
import { ROUTES } from "core/constants/routes.constant";
import "./nav-bar.css";
import themeContext from "context/theme.context";
import { themeClassNameWithModifier } from "utils/theme-class-name-builder";

const NavBar = () => {
    const theme = useContext(themeContext);
    const themeClass = themeClassNameWithModifier('navbar', theme.isLight);
    return (
        <nav className={themeClass}>
            <ul>
                <li>
                    <NavLink to={ROUTES.MAIN} className={({ isActive }) => isActive ? 'active' : ''}>Weather</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.LIST} className={({ isActive }) => isActive ? 'active' : ''}>Cities</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.INFO} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.FEEDBACK} className={({ isActive }) => isActive ? 'active' : ''}>Feedback</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;