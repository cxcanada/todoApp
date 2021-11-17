import makeElement from "~/src/js/utils/makeElement"
import * as styles from './styles.module.scss'

const input = function(label = "input label", id = "inputId", inputType = "text") {
    const template = `
        <label for="${id}">${label}
            <input class="${styles}" id="${id}" type="${inputType}"> 
        </label>
    `
    const element = makeElement(template)

    return element
}

export default input