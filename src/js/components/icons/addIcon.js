import makeElement from '../../utils/makeElement'

const addIcon = function(className = "ui-logo") {
    const templateString = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ${className}" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
    `

    const elem = makeElement(templateString)
    return elem
}
export default addIcon;