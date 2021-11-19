import { update } from 'lodash';
import { getStore, updateStore } from './store'

function reducer(action) {

    switch (action.type) {
        case "delete":
            // grabing the current store
            let store = getStore()
            let index = action.payload.index;
            let newStore = [...store.slice(0, index), ...store.slice(index + 1)]
            updateStore(newStore)
            action.cb()
            return "remove todoitem";

        case "edit":
            let editStore = getStore()
            let editIndex = getStore().findIndex((todoItem) => {
                return (todoItem.id === action.payload.id)
            })
            let editNewStore = [...editStore.slice(0, editIndex), action.payload, ...editStore.slice(editIndex + 1)]
            updateStore(editNewStore)
            action.cb()
            return "edit todoitem";

        case "add":
            let addStore = getStore()
            let newTodo = action.payload
            let addNewStore = [...addStore, newTodo]
            updateStore(addNewStore)
            action.cb()
            return "add new todoitem";
        default:
            return store
    }
}


export default reducer