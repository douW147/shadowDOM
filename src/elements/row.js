"use strict"

import {countriesRowClass} from "../constants/constants.js"

function createRow(countryImageElement, countryTitleElement) {
    const countryRowHtml = document.createElement("div");

    countryRowHtml.setAttribute("class", countriesRowClass);
    countryRowHtml.appendChild(countryTitleElement);
    countryRowHtml.appendChild(countryImageElement);

    return countryRowHtml;
}

export default createRow;