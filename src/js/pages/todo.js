import brandingHeader from "../components/ui/brandingHeader";
import todoItem from "../components/cards/todoItem";
import todoList from "../components/cards/todoList";
import { getStore } from "../redux/store";
import addIcon from "../components/icons/addIcon";
import { Router } from "../routes/route";


const todoPage = function() {

    // event handler
    const onDeleteTodoItem = function(e) {
        const itemId = { id: e.currentTarget.parentElement.dataset.key }
        Router("/delete", itemId)
    }

    const onEditTodoItem = function(e) {
        const itemId = { id: e.currentTarget.parentElement.dataset.key }
        Router("/edit", itemId)
    }

    // read data 
    const todos = getStore()
    console.log(todos)

    // page layout
    const page = document.createElement("div")
    const content = document.createElement('div')
    content.classList.add("todo-content")
    page.classList.add("container")
    const brandingHeaderElements = brandingHeader()
    const container = todoList()
    const addNewTodo = addIcon("add-todo")
    addNewTodo.addEventListener("click", function(e) {
        Router("/add")
    })
    page.append(brandingHeaderElements)
    content.append(addNewTodo)
    if (todos !== null) {
        const ul = container.querySelector("ul")
        const elements = todos.map(elem => todoItem(elem))
        elements.forEach(element => {
            element.querySelector(".btn-delete").addEventListener("click", onDeleteTodoItem)
            element.querySelector(".btn-edit").addEventListener("click", onEditTodoItem)
            ul.append(element)
        })
        content.append(container)
    }
    page.append(content)

    return page
}

export default todoPage