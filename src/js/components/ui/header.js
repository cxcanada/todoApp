// level one heading component
import makeElement from "../../utils/makeElement"

const header = function(title = "ui h1 header", className = "ui-heading") {
    const templateString = `<h1 class="${className}">${title}</h1>`
    const element = makeElement(templateString)

    return element
}

export default header