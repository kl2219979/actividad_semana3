import { loginPage, setupLogin } from './../components/login.js';
import { createUserPage, setupCreateUser } from './../components/createUser.js';
import { showCharacters, setupCharacters } from './../components/character.js';
import { showEpisodes, setupEpisodes } from './../components/episodes.js';



// rutas disponibles de la pagina
export const routes = {
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
        isAuthorized: true,
    },
    "/locations": {
        render: null,
        setup: null,
        isAuthorized: true,
    },
    "/episodes": {
        render: showEpisodes,
        setup: setupEpisodes,
        isAuthorized: true,
    }
}

