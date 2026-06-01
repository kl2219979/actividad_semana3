import {qs} from './../utils/dom.js';
import {fetchApi} from "../services/api.js"
const URL_LOCATION = 'https://rickandmortyapi.com/api/location';

export function showLocations() {
return `
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
        Pagina <span id="pagina">1</span> de 7
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
    id="locations-view"
    class="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
    ></div>
</div>
</section>
</main>
`;
}
function emptyState(message) {
    return `<p class="rounded-md border border-slate-800 bg-slate-900 p-4 text-slate-300">${message}</p>`;
}
export async function setupLocations() {
let numberPage = 1;
const btnAnterior = qs("#btnAnterior");
const btnSiguiente = qs("#btnSiguiente");
const currentPage = qs("#pagina");
const endpoint = `https://rickandmortyapi.com/api/location/?page=${numberPage}`;


function actualizarPagina () {
currentPage.textContent = numberPage;
};

btnSiguiente.addEventListener("click", () => {
if (numberPage < 7) {
    numberPage += 1;
    cargarlocaciones();
    actualizarPagina();
}
});

btnAnterior.addEventListener("click", () => {
if (numberPage > 1) {
    numberPage -= 1;
    cargarlocaciones();
    actualizarPagina();
} else {
    alert("Estas en la pagina 1, no puedes retroceder");
}
});

const cargarlocaciones= async () => {
try {      
    const endpoint = `https://rickandmortyapi.com/api/location/?page=${numberPage}`;
    const respuesta = await fetch(endpoint);

    console.log(respuesta);
    // si la respuesta es correcta
    if (respuesta.status === 200) {
    const datos = await respuesta.json();
    console.log(datos);
    let personajes = "";
    datos.results.forEach((personaje) => {
    personajes += `
    <article class="portal-card group relative h-auto w-full overflow-hidden rounded-md border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-lime-400 p-4 flex justify-between items-center gap-4">
  
  <!-- Contenedor de la Información (Izquierda) -->
  <div class="flex-1 min-w-0">
    <h2 class="text-xl font-bold text-white truncate">${personaje.name}</h2>
    
    <dl class="mt-4 flex flex-col w-full gap-2 text-sm text-slate-300">
      <div class="flex justify-between gap-4">
        <dt>Tipo</dt>
        <dd class="font-semibold text-slate-100 truncate">${personaje.type}</dd>
      </div>
      <div class="flex justify-between gap-4">
        <dt>Dimensión</dt>
        <dd class="font-semibold text-slate-100 truncate">${personaje.dimension}</dd>
      </div>
      <div class="flex justify-between gap-4">
        <dt>Residentes</dt>
        <dd class="font-semibold text-slate-100 truncate">${personaje.residents.length}</dd>
      </div>
    </dl>
  </div>

  
  <div class="grid  gap-2 shrink-0">
    <button data-id="${personaje.id}" class="rounded-md bg-yellow-500 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-yellow-400 transition-colors">
      Editar
    </button>
    <button data-id="${personaje.id}" class="rounded-md bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-500 transition-colors">
      Eliminar
    </button>
  </div>

</article>`       
    
    ;
    });
    qs("#locations-view").innerHTML = personajes;
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
cargarlocaciones();

}