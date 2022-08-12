"use strict"

import {imageContainerClass} from "../constants/constants.js"

function createselectImage(img) {
    const selectImageHtml = document.createElement("div");

    selectImageHtml.setAttribute("class", imageContainerClass);
    selectImageHtml.innerHTML = img;

    return selectImageHtml;
}

export default createselectImage;