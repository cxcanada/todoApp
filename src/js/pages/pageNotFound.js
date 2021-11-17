import brandingHeader from "../components/ui/brandingHeader";
import link from "../components/ui/link";
import errorMsg from "../components/ui/errorMessage";
import errorIcon from "../components/icons/errorIcon";

const errorPage = function() {
    const page = document.createElement('div')
    page.classList.add("container")
    const content = document.createElement('div')
    content.classList.add("content")
    const BrandingHeaderElements = brandingHeader()

    const errMessage = errorMsg("404 Not Found :(")
    const linkElm = link("Home", "/", "to-home")
    const notFoundIcon = errorIcon('ui-not-found');
    content.append(errMessage)
    content.append(notFoundIcon)
    content.append(linkElm)

    page.append(BrandingHeaderElements)
    page.append(content)

    return page
}

export default errorPage