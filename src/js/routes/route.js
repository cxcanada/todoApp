import homePage from "../pages/home";
import todoPage from "../pages/todo";

const Router = function(pathname) {
    const routes = {
        "/": homePage(),
        "/todo": todoPage()
            // "/pagenotfound": pageNotFoundPage()
    }
    const app = document.querySelector("#app")
    app.innerHTML = ''
    app.appendChild(routes[pathname])
}

export default Router