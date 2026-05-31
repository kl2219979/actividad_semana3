import {qs} from './../utils/dom.js';

export function showCharacters() {
  return `
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
    `;
}

export function setupCharacters() {
  let numberPage = 1;
  const btnAnterior = qs("#btnAnterior");
  const btnSiguiente = qs("#btnSiguiente");
  const currentPage = qs("#pagina");
  const endpoint = `https://rickandmortyapi.com/api/character/?page=${numberPage}`;
  cargarPersonajes();

  const actualizarPagina = () => {
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
      alert("Estas en la pagina 1, no puedes retroceder");
    }
  });

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

    <!-- Imagen -->
    <img
        src="${personaje.image}"
        alt="${personaje.name}"
        loading="lazy"
        
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    >

    <!-- Overlay oscuro -->
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
            ${personaje.episode.length} episodios
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
  
}
