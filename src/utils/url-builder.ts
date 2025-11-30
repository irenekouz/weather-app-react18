const apiKey: string = '1656ac9f565d61ddcbfac2c3b5e79a7b';
const baseUrl: string = `https://api.openweathermap.org`;
const currentWeatherApi: string = `${baseUrl}/data/2.5/weather?appid=${apiKey}`;
const geoCodingApi: string = `${baseUrl}/geo/1.0/reverse?appid=${apiKey}`;

export const getWeatherByCityUrl = (latitude: number, longitude: number): string => {
    return `${currentWeatherApi}&lat=${latitude}&lon=${longitude}&units=metric`
}

export const getCityByCoordinatesUrl = (latitude: number, longitude: number): string => {
    return `${geoCodingApi}&lat=${latitude}&lon=${longitude}`
}

export const getIconUrl = (iconCode: string): string => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};