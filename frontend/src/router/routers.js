import { qs } from './../utils/dom.js'
import {  } from './../components/login.js'
// importar funciones para renderizar la pagina

// rutas disponibles de la pagina
const routes = {
    "/": loginPage,
    "/characters": characterPage,
    "/locations": locationsPage,
    "/episodes": episodesPage
}

export const navigateTo = (path) => {
    history.pushState({}, "", path);
    router();
};

export const route = async () => {
    const app = qs('#app');
    const path = window.location.pathname;
    const page = routes[path];

    if(!page) {
        alert('ERROR DE PAGE NOT FOUND TO DO');
    }
    await page(app);
};