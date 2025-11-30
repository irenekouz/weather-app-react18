import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import "./header.css";
import imgUrl from "src/assets/images/logo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src={imgUrl} alt="logo" height="24" />
                <span>Weather</span>
            </div>
            <ThemeSwitch/>
        </div>
    );
}

export default Header;