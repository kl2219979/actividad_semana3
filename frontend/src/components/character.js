import {qs} from './../utils/dom.js';
import { alertWarning }from './../utils/alerts.js';
import { authStore } from '../store/authStore.js';
import { navigateTo } from '../router/router.js';

export function showCharacters() {
  return `
  <header class="w-full sticky top-0 z-10 bg-slate-800 backdrop-blur-sm border-b border-slate-800/50">
    <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <div class="flex-shrink-0">
        <img src="/public/logo.svg" alt="Logo" class="h-20 w-auto">
      </div>
      <h1 class="text-2xl md:text-3xl font-bold text-white drop-shadow-lg text-center flex-1">
        Characters
      </h1>
      <div class="flex items-center gap-6">
        <nav class="flex items-center gap-6">
          <a href="/episodes" class="text-sm font-semibold text-slate-300 hover:text-lime-400 transition">Episodes</a>
          <a href="/locations" class="text-sm font-semibold text-slate-300 hover:text-lime-400 transition">Locations</a>
        </nav>
        <button id="LogoutBtn" class="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
          Logout
        </button>
      </div>
    </div>
  </header>
  
    <div id="characters-view" class="mx-auto w-full max-w-6xl mt-6">
    <form id="character-form" class="portal-panel grid gap-4 rounded-lg border border-lime-400/40 bg-black/75 p-4 shadow-[0_0_28px_rgba(132,204,22,0.16)] backdrop-blur-md transition-all duration-300">
      <div>
        <h2 class="portal-title mt-1 text-xl font-black text-lime-300">Crear Nuevo Personaje</h2>
        <p class="text-xs text-slate-400 mt-1">Registra los datos biologicos del personaje.</p>
      </div>

      <section class="grid gap-3 grid-cols-1 md:grid-cols-3">
        <label class="grid gap-1.5 text-xs font-semibold text-slate-300">
          Nombre del personaje
          <input
            class="h-9 rounded-md bg-slate-950/90 px-3 text-xs text-lime-50 outline-none transition-all placeholder:text-slate-600 border border-lime-400/25 focus:border-lime-400 focus:shadow-[0_0_10px_rgba(163,230,53,0.15)]"
            name="name" type="text" placeholder="Cronenberg Morty" required>
        </label>

        <label class="grid gap-1.5 text-xs font-semibold text-slate-300">
          Especie o Raza
          <input
            class="h-9 rounded-md bg-slate-950/90 px-3 text-xs text-lime-50 outline-none transition-all placeholder:text-slate-600 border border-lime-400/25 focus:border-lime-400 focus:shadow-[0_0_10px_rgba(163,230,53,0.15)]"
            name="species" type="text" placeholder="Ej: Humano, Clone, Cyborg" required>
        </label>

        <label class="grid gap-1.5 text-xs font-semibold text-slate-300">
          Genero
          <select name="gender" required
            class="h-9 rounded-md bg-slate-950/90 px-3 text-xs text-lime-50 outline-none transition-all border border-lime-400/25 focus:border-lime-400 focus:shadow-[0_0_10px_rgba(163,230,53,0.15)]">
            <option value="">Selecciona una opcion</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </label>
      </section>

      <section class="grid gap-3 grid-cols-1 md:grid-cols-3">
        <label class="grid gap-1.5 text-xs font-semibold text-slate-300">
          Estado del personaje
          <select name="status" required
            class="h-9 rounded-md bg-slate-950/90 px-3 text-xs text-lime-50 outline-none transition-all border border-lime-400/25 focus:border-lime-400 focus:shadow-[0_0_10px_rgba(163,230,53,0.15)]">
            <option value="">Selecciona una opcion</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">unknown</option>
          </select>
        </label>

        <label class="grid gap-1.5 text-xs font-semibold text-slate-300">
          URL de Imagen del Personaje
          <input id="form-image-input"
            class="h-9 rounded-md bg-slate-950/90 px-3 text-xs text-lime-50 outline-none transition-all placeholder:text-slate-600 border border-lime-400/25 focus:border-lime-400 focus:shadow-[0_0_10px_rgba(163,230,53,0.15)]"
            name="image" type="url" placeholder="https://example.com/imagen.png">
        </label>

        <div class="grid gap-1.5 text-xs font-semibold text-slate-300">
          <span class="invisible">jjsjs</span>
          <button type="submit"
            class="pulse-glow h-9 w-full rounded-md bg-lime-400 px-5 text-[11px] font-black uppercase text-slate-950 shadow-[0_0_18px_rgba(132,204,22,0.35)] transition-all hover:bg-lime-300">
            Crear Personaje
          </button>
        </div>
      </section>
    </form>
  </div>
  <main class="relative min-h-screen px-4 text-white">
    <div class="fixed inset-0 -z-10 bg-[url('/fondoImagen.png')] bg-cover bg-center bg-no-repeat"></div>
    <section class="min-h-screen px-4 py-6">
    <div class="mx-auto max-w-6xl">
      <div
        class="rounded-md border border-lime-400/30 bg-slate-900 p-3.5 text-white shadow-[0_0_25px_rgba(132,204,22,0.12)]"
      >
        <div class="flex gap-4">
          <button
            id="btnAnterior"
            class="rounded-md border border-sky-500 bg-none px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Atras
          </button>

          <p class="rounded-md border border-lime-300/40 bg-lime-300/90 px-3 py-2 text-sm font-bold text-slate-950">
            Pagina <span id="pagina">1</span> de 42
          </p>

          <button
            id="btnSiguiente"
            class="rounded-md border border-sky-500 bg-none px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Siguiente
          </button>
        </div>
      </div>

      <div
        id="personajes"
        class="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      ></div>
    </div>
  </section>
    </main>
    `;
}

export function setupCharacters() {
  let numberPage = 1;
  const btnAnterior = qs("#btnAnterior");
  const btnSiguiente = qs("#btnSiguiente");
  const currentPage = qs("#pagina");
  const endpoint = `https://rickandmortyapi.com/api/character/?page=${numberPage}`;
  const Logout = qs("#LogoutBtn");
  

  function actualizarPagina () {
    currentPage.textContent = numberPage;
  };

  btnSiguiente.addEventListener("click", () => {
    if (numberPage < 42) {
      numberPage += 1;
      cargarPersonajes();
      actualizarPagina();
    }
  });

  btnAnterior.addEventListener("click", () => {
    if (numberPage > 1) {
      numberPage -= 1;
      cargarPersonajes();
      actualizarPagina();
    } else {
      alertWarning("Estas en la pagina 1, no puedes retroceder");
    }
  });

    Logout.addEventListener("click",()=>{
    authStore.onLogout();
    navigateTo('/login');
  
  })

  function crearPersonajes() {

  form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData.entries());
  createCharacter(dataObject,"customCharacter");
  renderCharacter(dataObject);

  form.reset();
  
  

})}

function renderCharacter(character) {
  const newCharacter = `
    <article class="portal-card group relative h-96 w-full overflow-hidden rounded-md border border-slate-800 bg-slate-900">
      <img src="${character.image || '/public/default.png'}" alt="${character.name}" class="h-full w-full object-cover">
      <div class="absolute bottom-0 left-0 p-5 text-white">
        <h2 class="mt-2 text-lg font-black">${character.name}</h2>
        <p class="text-xs text-slate-300">
          ${character.species} | ${character.gender} | ${character.status}
        </p>
        <p class="mt-2 text-[11px] text-slate-400">Personaje creado manualmente</p>
      </div>
    </article>
  `;
  qs("#personajes").innerHTML += newCharacter;
}


  


  const cargarPersonajes = async () => {
    try {
      const endpoint = `https://rickandmortyapi.com/api/character/?page=${numberPage}`;
      const respuesta = await fetch(endpoint);

      console.log(respuesta);
      // si la respuesta es correcta
      if (respuesta.status === 200) {
        const datos = await respuesta.json();

        let personajes = "";
        datos.results.forEach((personaje) => {
          personajes += `
        <article class="portal-card group relative h-96 w-full overflow-hidden rounded-md border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-lime-400">

    <img
        src="${personaje.image}"
        alt="${personaje.name}"
        loading="lazy"
        
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    >

    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

    <!-- Contenido -->
    <div class="absolute bottom-0 left-0 p-5 text-white">

        <h2 class="mt-2 text-lg font-black text-white truncate drop-shadow-md">
            ${personaje.name}
        </h2>

        <p class="text-xs text-slate-300 truncate">
            ${personaje.species} <span class="mx-1">|</span> ${personaje.gender}
            <span class="mx-1">|</span> ${personaje.status}
        </p>

        <p class="mt-2 text-[11px] text-slate-400 leading-relaxed"">
            Ha aparecido en
            ${personaje.episode.length} ${personaje.episode.length == 1 ? "episodio" : "episodios"}
        </p>

        <div class="mt-4 flex gap-2">
            <button
                data-id="${personaje.id}"
                class="rounded-md bg-yellow-500 px-3 py-1 text-xs font-semibold text-white transition hover:bg-yellow-600"
            >
                Editar
            </button>

            <button
                data-id="${personaje.id}"
                class="rounded-md bg-red-700 px-3 py-1 text-xs font-semibold text-white transition hover:bg-red-600"
            >
                Eliminar
            </button>
        </div>

    </div>

</article>
        
        
        `;
        });
        qs("#personajes").innerHTML = personajes;
      } else if (respuesta.status === 401) {
        console.log("pusiste la llave mal");
      } else if (respuesta.status === 404) {
        console.log("no existe");
      } else {
        console.log("Hubo un error raro y no sabemos que paso");
      }
    } catch (error) {
      console.log(error);
    }
  };
  cargarPersonajes();

  let personajeGuardado = getCharacter();
  if (personajeGuardado) {
    renderCharacter(personajeGuardado);
  }

  crearPersonajes();
  

  
}
