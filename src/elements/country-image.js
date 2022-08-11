"use strict"

import {imageContainerClass} from "../constants/constants.js"

function createCountryImage(img) {
    const countryImageHtml = document.createElement("div");

    countryImageHtml.setAttribute("class", imageContainerClass);
    countryImageHtml.innerHTML = img;

    return countryImageHtml;
}

export default createCountryImage;