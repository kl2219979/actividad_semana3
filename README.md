# Rick and Morty SPA

Aplicacion web tipo SPA inspirada en Rick and Morty. Permite registrar usuarios, iniciar sesion, navegar por vistas protegidas, consultar personajes y episodios desde la API publica de Rick and Morty, y gestionar personajes personalizados usando `localStorage`.

## Caracteristicas

- Login y registro de usuarios con `json-server`.
- Rutas protegidas para vistas que requieren sesion.
- Vista de personajes con paginacion y filtros por estado y genero.
- Creacion, edicion y eliminacion de personajes personalizados con `localStorage`.
- Vista de episodios con paginacion y busqueda por temporada/capitulo.
- Vista de ubicaciones.
- Vista 404 personalizada.
- Alertas visuales con SweetAlert2.
- Estilos con Tailwind CSS.

## Tecnologias

- JavaScript ES Modules
- Vite
- Tailwind CSS
- SweetAlert2
- JSON Server
- Rick and Morty API
- LocalStorage

## Estructura del proyecto

```txt
actividad_semana3/
├── backend/
│   ├── db.json
│   ├── package.json
│   └── package-lock.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── character.js
    │   │   ├── createUser.js
    │   │   ├── episodes.js
    │   │   ├── locations.js
    │   │   ├── login.js
    │   │   └── notFoundView.js
    │   ├── router/
    │   │   ├── router.js
    │   │   └── routes.js
    │   ├── services/
    │   │   ├── api.js
    │   │   ├── authService.js
    │   │   └── userService.js
    │   ├── store/
    │   │   └── authStore.js
    │   ├── style/
    │   └── main.js
    ├── package.json
    └── vite.config.js
```

## Instalacion

Clona el repositorio y entra en la carpeta principal:

```bash
git clone https://github.com/kl2219979/actividad_semana3.git
cd actividad_semana3
```

Instala las dependencias del backend:

```bash
cd backend
npm install
```

Instala las dependencias del frontend:

```bash
cd ../frontend
npm install
```

## Ejecucion

Para que el login y el registro funcionen, primero inicia el backend:

```bash
cd backend
npm run dev
```

El servidor queda disponible en:

```txt
http://localhost:3000
```

Luego inicia el frontend en otra terminal:

```bash
cd frontend
npm run dev
```

Vite mostrara la URL local de la aplicacion, normalmente:

```txt
http://localhost:5173
```

## Scripts disponibles

Backend:

```bash
npm run dev
```

Levanta `json-server` usando `backend/db.json` en el puerto `3000`.

Frontend:

```bash
npm run dev
npm run build
npm run preview
```

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera la version de produccion.
- `npm run preview`: previsualiza el build.

## Usuarios de prueba

El backend usa `backend/db.json` como base de datos local. Un usuario disponible por defecto es:

```txt
Usuario: admin
Contraseña: 12345
```

Tambien puedes crear nuevos usuarios desde la vista de registro.

## Rutas principales

- `/login`: inicio de sesion.
- `/register`: registro de usuario.
- `/characters`: vista de personajes. Requiere sesion.
- `/episodes`: vista de episodios. Requiere sesion.
- `/locations`: vista de ubicaciones.
- Ruta no encontrada: muestra la vista 404.

## Funcionalidades por vista

### Login

Permite ingresar con un usuario existente en `db.json`. Si las credenciales son correctas, se guarda la sesion en `localStorage` y se redirige a `/characters`.

### Registro

Permite crear un usuario nuevo en el backend local. Si el usuario ya existe, se muestra una alerta.

### Personajes

Consume la API publica:

```txt
https://rickandmortyapi.com/api/character
```

Incluye:

- Paginacion.
- Filtro por estado.
- Filtro por genero.
- Creacion de personajes personalizados.
- Edicion de personajes.
- Eliminacion de personajes.
- Persistencia de cambios con `localStorage`.

Las funciones que manipulan personajes locales estan en:

```txt
frontend/src/services/userService.js
```

### Episodios

Consume la API publica:

```txt
https://rickandmortyapi.com/api/episode
```

Incluye:

- Paginacion.
- Busqueda por temporada y capitulo usando el formato `S01E01`.
- Boton para limpiar filtros.

### Ubicaciones

Vista destinada a mostrar ubicaciones del universo Rick and Morty.

## Autenticacion y rutas protegidas

La sesion se administra desde:

```txt
frontend/src/store/authStore.js
```

Las rutas se definen en:

```txt
frontend/src/router/routes.js
```

El router valida si una ruta requiere autorizacion mediante `isAuthorized`. Si el usuario no esta logueado e intenta entrar a una ruta protegida, se redirige a `/login`.

## Build de produccion

Para generar la version final del frontend:

```bash
cd frontend
npm run build
```

Los archivos generados quedan en:

```txt
frontend/dist
```

## Notas

- El backend debe estar activo para iniciar sesion o registrar usuarios.
- Los personajes creados, editados o eliminados se guardan en el navegador mediante `localStorage`.
- La informacion de personajes y episodios externos proviene de la Rick and Morty API.
- Si cambias de navegador o limpias el almacenamiento local, se perderan los personajes personalizados y la sesion guardada.
