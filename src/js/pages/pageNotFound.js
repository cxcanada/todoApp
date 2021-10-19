import brandingHeader from "../components/ui/brandingHeader";
import link from "../components/ui/link";
import errorMsg from "../components/ui/errorMessage";

const errorPage = function() {
    const pageHeader = document.createElement('header')
    const BrandingHeaderElements = brandingHeader()
    const errMessage = errorMsg("Where Is My Cake?")
    const linkElm = link("Travel Back", "/")

    pageHeader.append(BrandingHeaderElements)
    pageHeader.append(errMessage)
    pageHeader.append(linkElm)

    return pageHeader
}

export default errorPage