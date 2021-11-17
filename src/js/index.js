import { Router } from "./routes/route";
import { createStore } from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";
import keyGenerator from "./utils/key"

const app = document.querySelector('#app')
Router(window.location.pathname)

const onAppInit = async function(e) {
    let todos = await dataFetcher("./data/todos.json")

    if (todos[0].id === undefined) {
        todos = [...keyGenerator(todos)]
    }

    createStore(todos)
}

window.addEventListener('load', onAppInit)