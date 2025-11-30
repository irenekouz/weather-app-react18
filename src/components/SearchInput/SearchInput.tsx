import './search-input.css';
import { useContext } from 'react';
import themeContext from 'context/theme.context';
import { themeClassNameWithModifier } from 'utils/theme-class-name-builder';

type SearchInputProps = {
    search: string;
    onSearchChange: (e: any) => void;
    placeholder: string;
};
const SearchInput = ({ search, onSearchChange, placeholder}: SearchInputProps) => {
    const theme = useContext(themeContext);
    const themeClass = themeClassNameWithModifier('search-input', theme.isLight);
    return (
        <input
                type="text"
                value={search}
                onChange={onSearchChange}
                placeholder={placeholder}
                className={themeClass}
            />
    );
};
export default SearchInput;