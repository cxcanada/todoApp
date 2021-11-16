import makeElement from '../../utils/makeElement'
import { Router } from '../../routes/route'

const onRequestPage = function(evt) {
    evt.preventDefault()
    Router(evt.currentTarget.dataset.path)
    return false
}

const link = function(title = 'ui link', path = '/', className = 'ui-link') {
    const templateString = `<a href='${path}' class='${className}' data-path='${path}'>${title}</a>`
    const elem = makeElement(templateString)
    elem.addEventListener('click', onRequestPage)
    return elem
}

export default link