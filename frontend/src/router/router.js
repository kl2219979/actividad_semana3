import { qs } from "../utils/dom";
import { routes, notFoundView } from "./routes";


export function renderRouter () {
    const app = qs('#app')
    if(!app) {
        return
    }

    const currentPath = window.location.pathname
    console.log(currentPath)
    const route = routes[currentPath] ?? {render: notFoundView}
    console.log(route)
    app.innerHTML = route.render()

    if(route.setup) {
        route.setup()
    }
}

export function initRouter() {
    document.addEventListener('click', (e) => {
        const link = event.target.closest('a')

        if(!link) {
            return
        }
        const href = link.getAttribute('href')

        if (!href || !href.startsWith('/')) {
            return
        }

        event.preventDefault()
        window.history.pushState({}, "", href)
        renderRouter()
    })
    window.addEventListener("popstate", renderRouter)
    renderRouter()
}