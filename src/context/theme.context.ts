import { createContext } from "react";

const themeContext = createContext({
  isLight: false,
  changeTheme: (value: boolean) => {},
});
export default themeContext;
