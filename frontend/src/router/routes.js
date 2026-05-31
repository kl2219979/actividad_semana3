import { loginPage, setupLogin } from './../components/login.js';
import { createUserPage, setupCreateUser } from './../components/createUser.js';
import { showCharacters, setupCharacters } from './../components/character.js';
// importar funciones para renderizar la pagina



// rutas disponibles de la pagina
export const routes = {
    "/": {
        render: loginPage,
        setup: setupLogin,
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
        render: showCharacters,
        setup: setupCharacters,
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

