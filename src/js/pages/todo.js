import brandingHeader from "../components/ui/brandingHeader";
// import makeElement from "../utils/makeElement";

const todoPage = function() {
    const pageHeader = document.createElement('header')
    const BrandingHeaderElements = brandingHeader();
    pageHeader.append(BrandingHeaderElements)
    return pageHeader
}

export default todoPage