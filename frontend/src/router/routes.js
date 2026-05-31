import { qs } from './../utils/dom.js';
import { loginPage, setupLogin } from './../components/login.js';
import { createUserPage, setupCreateUser } from './../components/createUser.js';
// importar funciones para renderizar la pagina

// rutas disponibles de la pagina
export const routes = {
    "/": {
        render: null,
        setup: null,
        isAuthorized: false,
    },
    "/login": {
        render: loginPage,
        setup: setupLogin,
        isAuthorized: false,
    },
    "/register": {
        render: createUserPage,
        setup: setupCreateUser,
        isAuthorized: false,
    },
    "/characters": {
        render: null,
        setup: null,
        isAuthorized: false,
    },
    "/locations": {
        render: null,
        setup: null,
        isAuthorized: false,
    },
    "/episodes": {
        render: null,
        setup: null,
        isAuthorized: false,
    }
}

export const notFoundView = null;

// export const navigateTo = (path) => {
//     history.pushState({}, "", path);
//     router();
// };

// export const router = async () => {
//     const app = qs('#app');
//     const path = window.location.pathname;
//     const page = routes[path];

//     if(!page) {
//         alert('ERROR DE PAGE NOT FOUND TO DO');
//     }
//     await page(app);
// };
