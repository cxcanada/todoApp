import homePage from "../pages/home";
import todoPage from "../pages/todo";
import errorPage from "../pages/pageNotFound";

const Router = function(pathname) {
    const routes = {
        "/": homePage(),
        "/todo": todoPage(),
        "/pagenotfound": errorPage()
    }
    const app = document.querySelector("#app")
    app.innerHTML = ''
    app.appendChild(routes[pathname])
}

export default Router