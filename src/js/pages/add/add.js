import brandingHeader from "../../components/ui/brandingHeader"
import button from "../../components/ui/button"
import { Router } from "../../routes/route"
import { getStore } from "../../redux/store"
import reducer from "../../redux/reducers"
import form from "../../components/ui/form/form"
import input from "../../components/ui/input"
import { v4 as uuidv4 } from 'uuid';

const cancelButton = button("Cancel")
const addButton = button("Add")


const addPage = function() {
    // page layout
    const page = document.createElement('div')
    page.classList.add("container")
    const content = document.createElement('div')
    content.classList.add("content")
    const BrandingHeaderElements = brandingHeader()
    const userForm = form()



    function onCancelDelete(e) {
        Router('/todo')
    }

    function onAddTodo(e) {
        // const index = getStore().findIndex((todoItem) => {
        //     return (todoItem.id === props.id)
        // })
        // console.log(index)
        // handle form values
        let category = document.querySelector("#category");
        let title = document.querySelector("#title");
        let completed = document.querySelector("#complete");
        let endtime = document.querySelector("#endtime");

        const action = {
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
        reducer(action)

    }

    // userForm.append(addButton, cancelButton)
    content.append(userForm, addButton, cancelButton)
    page.append(BrandingHeaderElements)
    page.append(content)


    cancelButton.addEventListener('click', onCancelDelete)
    addButton.addEventListener('click', onAddTodo)



    return page
}

export default addPage