import { loginPage, setupLogin } from './../components/login.js';
import { createUserPage, setupCreateUser } from './../components/createUser.js';
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

export const notFoundView = () => `
    <main class="min-h-screen -[url('/fondoLogin.png')] bg-size-[100%_100%] bg-center bg-no-repeat flex items-center justify-center px-4 text-white ">
    <video autoplay muted loop playsinline class="fondo-home fixed top-0 left-0 size-[100%_100%] object-cover -z-10 min-h-screen min-w-screen">
    <source src="/fondohome.mp4" type="video/mp4"> </video>
        <section class="grid gap-4 text-center">
            <h1 class="text-3xl font-black text-purple-950">404</h1>
            <p class="text-purple-950">La ruta que buscas no existe.</p>
            <a href="/login" class="rounded-md bg-lime-400 px-4 py-2 font-bold uppercase text-slate-950">
                Volver al login
            </a>
        </section>
    </main>
`;

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
