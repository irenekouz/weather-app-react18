export const themeClassNameWithModifier = (className: string, isLightTheme: boolean) => {
    return `${className} ${className}--${isLightTheme ? 'light' : 'dark'}`;
};