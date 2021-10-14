const $33fd5a7c3aa1c90e$var$makeElement = function(templateString = ``) {
    const docFragment = document.createRange().createContextualFragment(templateString);
    const element = docFragment.children[0];
    return element;
};
var $33fd5a7c3aa1c90e$export$2e2bcd8739ae039 = $33fd5a7c3aa1c90e$var$makeElement;


const $93f656ad0e1cee22$var$header = function(title = "ui h1 header", className = "ui-heading") {
    const templateString = `<h1 class="${className}">${title}</h1>`;
    const element = $33fd5a7c3aa1c90e$export$2e2bcd8739ae039(templateString);
    return element;
};
var $93f656ad0e1cee22$export$2e2bcd8739ae039 = $93f656ad0e1cee22$var$header;




const $7488c150662d5491$var$onRequestPage = function(evt) {
    evt.preventDefault();
    $ed1d884fc82851fd$export$2e2bcd8739ae039(evt.currentTarget.dataset.path);
    return false;
};
const $7488c150662d5491$var$link = function(title = 'ui link', path = '/', className = 'ui-link') {
    const templateString = `<a href='${path}' class='${className}' data-path='${path}'>${title}</a>`;
    const elem = $33fd5a7c3aa1c90e$export$2e2bcd8739ae039(templateString);
    elem.addEventListener('click', $7488c150662d5491$var$onRequestPage);
    return elem;
};
var $7488c150662d5491$export$2e2bcd8739ae039 = $7488c150662d5491$var$link;



const $5daf465a4f8f0a0b$var$logo = function(className = "ui-logo") {
    const templateString = `
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ${className}" fill="#d8b174" viewBox="0 0 24 24" stroke="#906622">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" 
  stroke="#906622" fill="#d8b174" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
</svg>
`;
    elem = $33fd5a7c3aa1c90e$export$2e2bcd8739ae039(templateString);
    return elem;
};
var $5daf465a4f8f0a0b$export$2e2bcd8739ae039 = $5daf465a4f8f0a0b$var$logo;



const $eab9a311f082db3d$var$tagLine = function(tagline = "ui tagline", className = "ui-heading") {
    const templateString = `<p class="${className}">${tagline}</p>`;
    const element = $33fd5a7c3aa1c90e$export$2e2bcd8739ae039(templateString);
    return element;
};
var $eab9a311f082db3d$export$2e2bcd8739ae039 = $eab9a311f082db3d$var$tagLine;


// import makeElement from "../utils/makeElement";
const $b741325c949eb200$var$homePage = function() {
    const pageHeader = document.createElement('header');
    pageHeader.classList.add('ui-page-header');
    const h1 = $93f656ad0e1cee22$export$2e2bcd8739ae039('Peace of Cake');
    const linkElm = $7488c150662d5491$export$2e2bcd8739ae039('TO DO', '/todo');
    const tag = $eab9a311f082db3d$export$2e2bcd8739ae039("Not As Hard As You Thought");
    const brandLogo = $5daf465a4f8f0a0b$export$2e2bcd8739ae039("ui-logo");
    pageHeader.append(h1);
    pageHeader.append(brandLogo);
    pageHeader.append(tag);
    pageHeader.append(linkElm);
    return pageHeader;
};
var $b741325c949eb200$export$2e2bcd8739ae039 = $b741325c949eb200$var$homePage;






const $ccc6aceb67b63685$var$brandingHeader = function() {
    const brandingHeader = document.createElement('header');
    brandingHeader.classList.add('ui-branding-header');
    const h1 = $93f656ad0e1cee22$export$2e2bcd8739ae039('Peace of Cake');
    const tag = $eab9a311f082db3d$export$2e2bcd8739ae039("Not As Hard As You Thought");
    const brandLogo = $5daf465a4f8f0a0b$export$2e2bcd8739ae039("ui-small-logo");
    brandingHeader.append(brandLogo);
    brandingHeader.append(h1);
    brandingHeader.append(tag);
    return brandingHeader;
};
var $ccc6aceb67b63685$export$2e2bcd8739ae039 = $ccc6aceb67b63685$var$brandingHeader;


// import makeElement from "../utils/makeElement";
const $0aa8c9d258f5dc58$var$todoPage = function() {
    const pageHeader = document.createElement('header');
    const BrandingHeaderElements = $ccc6aceb67b63685$export$2e2bcd8739ae039();
    pageHeader.append(BrandingHeaderElements);
    return pageHeader;
};
var $0aa8c9d258f5dc58$export$2e2bcd8739ae039 = $0aa8c9d258f5dc58$var$todoPage;


const $ed1d884fc82851fd$var$Router = function(pathname) {
    const routes = {
        "/": $b741325c949eb200$export$2e2bcd8739ae039(),
        "/todo": $0aa8c9d258f5dc58$export$2e2bcd8739ae039()
    };
    const app = document.querySelector("#app");
    app.innerHTML = '';
    app.appendChild(routes[pathname]);
};
var $ed1d884fc82851fd$export$2e2bcd8739ae039 = $ed1d884fc82851fd$var$Router;


const $fe154b27d0fab001$var$app = document.querySelector('#app');
$ed1d884fc82851fd$export$2e2bcd8739ae039("/");


//# sourceMappingURL=index.js.map
