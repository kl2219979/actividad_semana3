import { credencialSuccess } from "../utils/alerts.js";
import { credencialError } from "../utils/alerts.js";


export function createCharacter(character) {
    try {
  localStorage.setItem("customCharacters", JSON.stringify(character));
  credencialSuccess("Personaje creado correctamente");
} catch (error) {
  console.error("Error al crear el personaje:", error)
  credencialError("No se pudo crear el personaje");

}
}

export function getCharacter() {
    try {
  const characterData = localStorage.getItem("customCharacters");
  return characterData ? JSON.parse(characterData) : null;
} catch (error) {
  console.error("Error al obtener el personaje:", error)
  credencialError("No se pudo obtener el personaje");
  return null;
}
}
