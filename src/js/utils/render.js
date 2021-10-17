import makeElement from "./makeElement";

const render = function(template, data) {
    const myTemplate = template(data)
    const elem = makeElement(myTemplate)
    return elem
}

export default render;