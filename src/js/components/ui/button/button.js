import makeElement from "~/src/js/utils/makeElement"
import * as styles from './styles.module.scss'
const button = function(label = "ui button", uiStyles) {
    const template = `<button class="btn ${styles[uiStyles] || styles.btn}">${label}</button>`
    const element = makeElement(template)

    return element
}

export default button