import makeElement from "../../utils/makeElement"
import button from "../../components/ui/button"
import { Router } from "../../routes/route"
import { getStore } from "../../redux/store"
import reducer from "../../redux/reducers"

const cancelButton = button("cancel")
const deleteButton = button("delete")


const deletePage = function(props) {
    console.log(props)
    const page = document.createElement('div')

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

        reducer()
    }


    let headerTemplate = `
        <header class="welcome center-in-page">
            <h1>Delete A Task</h1>
            <p>Remove A Task From List</p> 
            <div></div>
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
    cancelButton.addEventListener('click', onCancelDelete)
    deleteButton.addEventListener('click', onDeleteTodo)

    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)

    return page
}

export default deletePage