import makeElement from '../../utils/makeElement'

const errorIcon = function(className = "ui-logo") {
    const templateString = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ${className}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
`
    const elem = makeElement(templateString)
    return elem
}
export default errorIcon