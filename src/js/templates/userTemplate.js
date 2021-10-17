const userTemplate = function(userData = {}) {
    let isHidden = "";
    if (userData.isComplete == true)
        isHidden = "hidden"
    const template = `
    <div class="${userData.category} todo-item">    
        <h2>${userData.category}</h2>
        <p>${userData.endDate}</p>
        <p ${isHidden} class="complete">${userData.isComplete}</p>
    </div>
    `
    return template
}

export default userTemplate;