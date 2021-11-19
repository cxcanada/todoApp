import makeElement from "../../utils/makeElement";

// create a single todo item element for deletePage
const todoDisplay = function({ id, title, category, isComplete, endDate }) {
    let className = null
    if (isComplete) {
        className = "completed"
    } else {
        className = "incompleted"
    }
    const template = `       
    <div class="todo-display">
        <h2>${category}</h2>
        <p> ${title} </p>
        <p>Due By: ${endDate}</p>
        <p class="${className}">Completed</p> 
    </div>        
    `
    return makeElement(template)
}

export default todoDisplay