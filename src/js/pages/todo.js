import brandingHeader from "../components/ui/brandingHeader";
import userTemplate from "../templates/userTemplate";
import { dataFetcher } from "../utils/dataFetcher";
import render from "../utils/render"

const todoPage = function() {
    const pageHeader = document.createElement('header')
    const BrandingHeaderElements = brandingHeader()

    // const userData = await dataFetcher('../data/todos.json')
    // let defaultItem = null

    pageHeader.append(BrandingHeaderElements)

    // for (var i = 0; i < 5; i++) {
    //     defaultItem = render(userTemplate, userData[i])
    //     pageHeader.append(defaultItem)
    // }

    return pageHeader
}

export default todoPage