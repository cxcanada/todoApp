import { update } from 'lodash';
import { getStore, updateStore } from './store'

function reducer(action) {

    switch (action.type) {
        case "delete":
            // grabing the current store
            const store = getStore()
            const index = action.payload.index;
            const newStore = [...store.slice(0, index), ...store.slice(index + 1)]
            console.log(newStore)
            updateStore(newStore)
            action.cb()
            return "remove todoitem";

        case "edit":
            const editStore = getStore()
            const editedItem = action.payload
            const targetIndex = getStore().findIndex((todoItem) => {
                return (todoItem.id === action.payload.id)
            })
            editStore[targetIndex] = action.payload
            console.log(editStore)
            updateStore(editStore)
            action.cb()
            return "edit todoitem";

        case "add":
            const addStore = getStore()
            const newTodo = action.payload
            const addNewStore = [...addStore, newTodo]
            console.log(addNewStore)
            updateStore(addNewStore)
            action.cb()
            return "add new todoitem";
        default:
            return store
    }
}


export default reducer