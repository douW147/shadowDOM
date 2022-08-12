"use strict"

import {selectRowClass} from "../constants/constants.js"

function createRow(selectImageElement, selectTitleElement) {
    const selectRowHtml = document.createElement("div");

    selectRowHtml.setAttribute("class", selectRowClass);
    selectRowHtml.appendChild(selectTitleElement);
    selectRowHtml.appendChild(selectImageElement);

    return selectRowHtml;
}

export default createRow;