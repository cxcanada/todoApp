import Router from "./routes/route";
import { createStore } from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";

const app = document.querySelector('#app')
Router(window.location.pathname)

const onAppInit = async function(e) {
    let todos = await dataFetcher("./data/todos.json")
    createStore(todos)
    console.log(todos)
}

window.addEventListener('load', onAppInit)