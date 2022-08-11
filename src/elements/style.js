"use strict"

function createStyleLink(href) {
    const styleLinkHtml = document.createElement("link");

    styleLinkHtml.setAttribute("rel", "stylesheet");
    styleLinkHtml.setAttribute("href", href);

    return styleLinkHtml;
}

export default createStyleLink;