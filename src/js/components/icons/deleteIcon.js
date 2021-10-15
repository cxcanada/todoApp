import makeElement from '../../utils/makeElement'

const deleteIcon = function(className = "ui-logo") {
    const templateString = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ${className}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
    `

    const elem = makeElement(templateString)
    return elem
}
export default deleteIcon;