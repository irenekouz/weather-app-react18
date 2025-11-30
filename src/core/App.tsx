import { Routes, Route } from 'react-router';
import MainPage from 'pages/MainPage/MainPage';
import ListPage from 'pages/ListPage/ListPage';
import InfoPage from 'pages/InfoPage/InfoPage';
import FeedbackPage from 'pages/FeedbackPage/FeedbackPage';
import CityDetailsPage from 'pages/city-details-page/CityDetailsPage';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import NavBar from 'components/NavBar/NavBar';
import { ROUTES } from './constants/routes.constant';
import { useState, useEffect } from 'react';
import ThemeContext from 'context/theme.context';

const App = () => {
    const [theme, setTheme] = useState({
        isLight: true,
        changeTheme: (value: boolean) => {
            setTheme({
                ...theme,
                isLight: value,
            });
        }
    });

    useEffect(() => {
        const root = window.document.getElementById('root') as HTMLElement;
        root.className = `theme-${theme.isLight ? 'light' : 'dark'}`;
    }, [theme]);

    return(
        <ThemeContext.Provider value={theme}>
            <Header />
            <NavBar />
            <Routes>
                <Route path={ROUTES.MAIN} element={<MainPage/>}></Route>
                <Route path={ROUTES.LIST} element={<ListPage/>}></Route>
                <Route path={ROUTES.INFO} element={<InfoPage/>}></Route>
                <Route path={ROUTES.FEEDBACK} element={<FeedbackPage/>}></Route>
                <Route path={ROUTES.CITY} element={<CityDetailsPage/>}></Route>
            </Routes>
            <Footer />
        </ThemeContext.Provider>
    );
}
export default App;
