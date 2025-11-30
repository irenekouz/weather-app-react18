import { useContext } from "react";
import themeContext from "context/theme.context";
import './theme-switch.css';
import RadioGroup from "components/RadioGroup/RadioGroup";

const ThemeSwitch = () => {
    const theme = useContext(themeContext);
    const handleThemeChange = () => {
        theme.changeTheme(!theme.isLight);
    };
    const options = [
        { label: 'Light mode', value: 'light' },
        { label: 'Dark mode', value: 'dark' }
    ];
    return (
        <RadioGroup
                name="theme"
                options={options}
                onChange={handleThemeChange}
                selectedValue={theme.isLight ? 'light' : 'dark'}
                className="theme-switch"
            />
    );
};
export default ThemeSwitch;