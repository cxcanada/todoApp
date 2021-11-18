import makeElement from "../../../utils/makeElement"
import * as styles from './styles.module.scss'

function emptyForm() {
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
    </form>
    `
    const element = makeElement(template)
    return element
}

function uncheckedForm({ title = "", category = "", endDate = "" }) {
    const template = `
    <form class="${styles}">
        <label for="category">Category
            <input id="category" type="text" value="${category}" required>
        </label>

        <label for="title">Title
            <input id="title" type="text" value="${title}" required>
        </label>

        <label for="complete">Complete
            <input id="complete" type="checkbox">
        </label>

        <label for="endtime">End Date
            <input id="endtime" type="date" value="${endDate}" required>
        </label>
    </form>
    `
    const element = makeElement(template)
    return element
}

function checkedForm({ title = "", category = "", endDate = "" }) {
    const template = `
    <form class="${styles}">
        <label for="category">Category
            <input id="category" type="text" value="${category}" required>
        </label>

        <label for="title">Title
            <input id="title" type="text" value="${title}" required>
        </label>

        <label for="complete">Complete
            <input id="complete" checked  type="checkbox">
        </label>

        <label for="endtime">End Date
            <input id="endtime" type="date" value="${endDate}" required>
        </label>
    </form>
    `
    const element = makeElement(template)
    return element
}

export { emptyForm, uncheckedForm, checkedForm }