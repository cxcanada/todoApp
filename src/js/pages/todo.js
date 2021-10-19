import brandingHeader from "../components/ui/brandingHeader";
import link from "../components/ui/link";
import userTemplate from "../templates/userTemplate";
import { dataFetcher } from "../utils/dataFetcher";
import render from "../utils/render"

const todoPage = function() {
    const page = document.querySelector("#app")
    const BrandingHeaderElements = brandingHeader()
    const linkElm = link("ERROR", "/pagenotfound")

    // const userData = await dataFetcher('../data/todos.json')
    // let defaultItem = null

    page.append(BrandingHeaderElements)
    page.append(linkElm)
        // for (var i = 0; i < 5; i++) {
        //     defaultItem = render(userTemplate, userData[i])
        //     pageHeader.append(defaultItem)
        // }

    return pageHeader
}

export default todoPage