// Combine branding components for todoPage: logo, header and tagline
import header from "./header";
import logo from "../icons/logo";
import tagLine from "./tagline";

const brandingHeader = function() {
    const brandingHeader = document.createElement('header')
    brandingHeader.classList.add('ui-branding-header')
    const h1 = header('Peace of Cake')
    const tag = tagLine("Not As Hard As You Thought")
    const brandLogo = logo("ui-small-logo")
    brandingHeader.append(brandLogo)
    brandingHeader.append(h1)
    brandingHeader.append(tag)
    return brandingHeader
}

export default brandingHeader