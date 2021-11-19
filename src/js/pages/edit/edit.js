import brandingHeader from "../../components/ui/brandingHeader"
import button from "../../components/ui/button"
import { Router } from "../../routes/route"
import reducer from "../../redux/reducers"
import { uncheckedForm, checkedForm } from "../../components/ui/form"
import { v4 as uuidv4 } from 'uuid';
import { getStore } from "../../redux/store"

const cancelButton = button("Cancel")
const editButton = button("Edit", "btn-edit")

const editPage = function(props) {
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

    // create form with selected todo item
    let userForm
        // determine if the isComplete is true
        // if it is true, load checked form
    if (selectedTodo.isComplete == true) {
        userForm = checkedForm(selectedTodo)
    }
    // else load uncheck form
    else {
        userForm = uncheckedForm(selectedTodo)
    }

    // cleanup function to remove event listener after click
    function cleanUp() {
        cancelButton.removeEventListener('click', onCancelDelete)
        editButton.removeEventListener('click', onEditTodo)
    }

    // event handler
    function onCancelDelete(e) {
        cleanUp()
        Router('/todo')
    }

    function onEditTodo(e) {
        // handle form values
        let category = document.querySelector("#category")
        let title = document.querySelector("#title")
        let completed = document.querySelector("#complete")
        let endtime = document.querySelector("#endtime")
        console.log(e.currentTarget.parentElement)
        let action = {
            type: 'edit',
            payload: {
                "id": selectedTodo.id,
                "category": category.value,
                "title": title.value,
                "isComplete": completed.checked,
                "endDate": endtime.value,
            },
            cb: () => Router('/todo')
        }
        cleanUp()
        reducer(action)
    }

    content.append(userForm, editButton, cancelButton)
    page.append(BrandingHeaderElements)
    page.append(content)

    cancelButton.addEventListener('click', onCancelDelete)
    editButton.addEventListener('click', onEditTodo)

    return page
}

export default editPage