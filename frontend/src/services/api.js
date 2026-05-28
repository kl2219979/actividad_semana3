// responsabilidad de comunicarse con la APi

//url para personajes, ubicaciones y episodios
const URL_CHARACTER = 'https://rickandmortyapi.com/api/character'
const URL_LOCATION = ''
const URL_EPISODES = ''

// funcion que trae los datos de la APi Rick and Morty
async function fetchApi(url) {
    const response = await fetch(url)
    if (!response.ok) {
        const text = response.text().catch(() => response.statusText);
        throw new Error(`HTTP ${response.status}: ${text}`);
    }
    const data = await response.json();
}

