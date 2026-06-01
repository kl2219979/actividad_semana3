import { qs } from "../utils/dom.js";
import { routes} from "./routes.js";
import { notFoundView, setupNotFoundVideo } from "./../components/notFoundView.js"

export function navigateTo(path) {
    window.history.pushState({}, "", path);
    renderRouter();
}

export function checkAuth() {
  if (!authStore.isLogged) {
    navigateTo("/login"); 
  }
  else{
    renderRouter()
  }
}

checkAuth()

export function renderRouter () {
    const app = qs('#app')
    if(!app) {
        return
    }

    const currentPath = window.location.pathname
    const route = routes[currentPath] ?? {render: notFoundView, setup: setupNotFoundVideo}
    const render = route.render ?? notFoundView
    app.innerHTML = render()

    if (route.setup) {
        route.setup()
    }
}

export function initRouter() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a')

        if (!link) {
            return
        }
        const href = link.getAttribute('href')

        if (!href || !href.startsWith('/')) {
            return
        }

        e.preventDefault()
        navigateTo(href)
    })
    window.addEventListener("popstate", renderRouter)
    renderRouter()
}
