import brandingHeader from "../../components/ui/brandingHeader"
import button from "../../components/ui/button"
import { Router } from "../../routes/route"
import { getStore } from "../../redux/store"
import reducer from "../../redux/reducers"
import todoDisplay from "../../components/cards/todoDisplay"

const cancelButton = button("Cancel")
const deleteButton = button("Delete")

const deletePage = function(props) {
    // checking props
    console.log(props)
    console.log(props.id)

    // page layout
    const page = document.createElement('div')
    page.classList.add("container")
    const content = document.createElement('div')
    content.classList.add("content")
    const BrandingHeaderElements = brandingHeader()

    // variable for todo item card display
    let selectedTodo

    // filter through store to get selected todo item
    for (let i = 0; i <= getStore().length - 1; i++) {
        if (getStore()[i].id == props.id) {
            selectedTodo = getStore()[i]
        }
    }

    // create todo item element
    const currentTodo = todoDisplay(selectedTodo)

    // event handler
    function onCancelDelete(e) {
        Router('/todo')
    }

    function onDeleteTodo(e) {
        const index = getStore().findIndex((todoItem) => {
            return (todoItem.id === props.id)
        })
        const action = {
            type: 'delete',
            payload: { index },
            cb: () => Router('/todo')
        }
        reducer(action)
    }

    cancelButton.addEventListener('click', onCancelDelete)
    deleteButton.addEventListener('click', onDeleteTodo)

    content.append(currentTodo)
    content.append(cancelButton, deleteButton)
    page.append(BrandingHeaderElements, content)

    return page
}

export default deletePage