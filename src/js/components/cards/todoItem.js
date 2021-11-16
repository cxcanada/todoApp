import makeElement from "../../utils/makeElement";

const todoItem = function({ id, title, category, isComplete, endDate }) {
    let className = null
    if (isComplete) {
        className = "completed"
    } else {
        className = "incompleted"
    }
    const template = `       
  <li data-key="${id}" class="todo-item">
    <h2>${category}</h2>
    <p> ${title}  -   Due: ${endDate}</p>
    <p class="${className}">Completed</p> 
    <p class="controls" data-key="${id}"><button class="btn btn-edit" id="edit">Edit</button><button class="btn btn-delete" id="delete">Delete</button></p>      
  </li>        
  `
    return makeElement(template)
}

export default todoItem