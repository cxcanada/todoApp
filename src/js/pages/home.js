import header from "../components/ui/header";
import link from "../components/ui/link";
import logo from "../components/icons/logo";
import tagLine from "../components/ui/tagline";
// import makeElement from "../utils/makeElement";

const homePage = function() {
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('ui-page-header')
    const h1 = header('Peace of Cake')
    const linkElm = link('TO DO', '/todo')
    const tag = tagLine("Not As Hard As You Thought")
    const brandLogo = logo("ui-logo")
    pageHeader.append(h1)
    pageHeader.append(brandLogo)
    pageHeader.append(tag)
    pageHeader.append(linkElm)

    return pageHeader
}

export default homePage