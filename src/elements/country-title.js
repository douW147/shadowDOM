"use strict"

import {countrieTitleClass} from "../constants/constants.js"

function createCountryTitle(title) {
    const countryTitleHtml = document.createElement("h1");

    countryTitleHtml.setAttribute("class", countrieTitleClass);
    countryTitleHtml.innerHTML = title;

    return countryTitleHtml;
}

export default createCountryTitle;