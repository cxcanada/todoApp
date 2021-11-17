import makeElement from "../../../utils/makeElement"
import * as styles from './styles.module.scss'

function form() {
    const template = `
    <form class="${styles}">
    <label for="category">Category
    <input id="category" type="text" required>
    </label>

    <label for="title">Title
    <input id="title" type="text" required>
    </label>

    <label for="complete">Complete
    <input id="complete" type="checkbox">
    </label>

    <label for="endtime">End Date
    <input id="endtime" type="date" required>
    </label>
</label>
    </form>
    `
    const element = makeElement(template)
    return element
}

export default form