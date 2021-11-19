import makeElement from "../../utils/makeElement";

// todoItem template with buttons for todo(directory) page.
const todoItem = function({ id, title, category, isComplete, endDate }) {
    let className = null
    if (isComplete) {
        className = "completed"
    } else {
        className = "incompleted"
    }

    let categoryClass = category.toLowerCase()

    const template = `       
  <li data-key="${id}" class="todo-item ${categoryClass} ">
    <h2>${category}</h2>
    <p> ${title}</p>
    <p> Due By: ${endDate}</p>
    <p class="${className}">Completed</p> 
    <p class="controls" data-key="${id}">
      <button class="btn btn-edit" id="edit">Edit</button>
      <button class="btn btn-delete" id="delete">Delete</button>
    </p>      
  </li>        
  `
    return makeElement(template)
}

export default todoItem