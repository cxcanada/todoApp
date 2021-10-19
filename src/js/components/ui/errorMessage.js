import makeElement from '../../utils/makeElement'

const errorMsg = function(msg = "Error!", className = "error") {
    const templateString = `<p class="${className}">${msg}</p>`
    const elem = makeElement(templateString)
    return elem
}

export default errorMsg