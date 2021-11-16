import makeElement from "../../utils/makeElement";

const tagLine = function(tagline = "ui tagline", className = "ui-heading") {
    const templateString = `<p class="${className}">${tagline}</p>`
    const element = makeElement(templateString)
    return element
}

export default tagLine