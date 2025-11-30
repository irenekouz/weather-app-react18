export const ROUTES = {
    MAIN: '/',
    LIST: '/list',
    INFO: '/info',
    FEEDBACK: '/feedback',
    CITY: '/list/:id',
};

export const replaceRouteId = (route: string, id: number | string) => {
    return route.replace(':id', id.toString());
};