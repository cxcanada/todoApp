import homePage from "../pages/home";
import todoPage from "../pages/todo";
import errorPage from "../pages/pageNotFound";
import deletePage from "../pages/delete";
import addPage from "../pages/add";
import editPage from "../pages/edit";

const routes = {
    "/": homePage,
    "/todo": todoPage,
    "/delete": deletePage,
    "/add": addPage,
    "/edit": editPage
}

const Router = function(pathname, id = null) {
    const isValidRoute = Object.keys(routes).find(key => key === pathname)
    const app = document.querySelector("#app")
    app.innerHTML = ''

    window.history.pushState({},
        pathname,
        window.location.origin + pathname
    )

    if (isValidRoute === undefined) {
        app.appendChild(errorPage())
    } else {
        app.appendChild(routes[isValidRoute](id))
    }
}

export { Router }