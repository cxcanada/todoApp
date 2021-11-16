import brandingHeader from "../components/ui/brandingHeader";
import todoItem from "../components/cards/todoItem";
import todoList from "../components/cards/todoList";
import { getStore } from "../redux/store";
import addIcon from "../components/icons/addIcon";
import { Router } from "../routes/route";


const todoPage = function() {
    const onDeleteTodoItem = function(e) {
        const itemId = { id: e.currentTarget.parentElement.dataset.key }
        console.log(itemId)
        Router("/delete", itemId)
    }
    const todos = getStore()
    console.log(todos)
    const page = document.createElement("div")
    const content = document.createElement('div')
    content.classList.add("todo-content")
    page.classList.add("container")
    const brandingHeaderElements = brandingHeader()
    const container = todoList()
    const addNewTodo = addIcon("add-todo")
    page.append(brandingHeaderElements)
    content.append(addNewTodo)
    if (todos !== null) {
        const ul = container.querySelector("ul")
        const elements = todos.map(elem => todoItem(elem))
        elements.forEach(element => {
            element.querySelector(".btn-delete").addEventListener("click", onDeleteTodoItem)
            ul.append(element)
        })
        content.append(container)
    }
    page.append(content)





    return page
}

export default todoPage