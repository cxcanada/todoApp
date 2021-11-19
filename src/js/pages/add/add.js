import brandingHeader from "../../components/ui/brandingHeader"
import button from "../../components/ui/button"
import { Router } from "../../routes/route"
import reducer from "../../redux/reducers"
import { emptyForm } from "../../components/ui/form"
import { v4 as uuidv4 } from 'uuid';

const cancelButton = button("Cancel")
const addButton = button("Add", "btn-add")

const addPage = function() {
    // page layout
    const page = document.createElement('div')
    page.classList.add("container")
    const content = document.createElement('div')
    content.classList.add("content")
    const BrandingHeaderElements = brandingHeader()
    const userForm = emptyForm()

    // cleanup function to remove event listener after click
    function cleanUp() {
        cancelButton.removeEventListener('click', onCancelAdd)
        addButton.removeEventListener('click', onAddTodo)
    }

    // event handler
    function onCancelAdd(e) {
        cleanUp()
        Router('/todo')
    }

    function onAddTodo(e) {
        // handle form values
        let category = document.querySelector("#category");
        let title = document.querySelector("#title");
        let completed = document.querySelector("#complete");
        let endtime = document.querySelector("#endtime");

        let action = {
            type: 'add',
            payload: {
                "id": uuidv4().substr(0, 8),
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

    content.append(userForm, addButton, cancelButton)
    page.append(BrandingHeaderElements)
    page.append(content)


    cancelButton.addEventListener('click', onCancelAdd)
    addButton.addEventListener('click', onAddTodo)

    return page
}

export default addPage