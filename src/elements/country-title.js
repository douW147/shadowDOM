"use strict"

import {selectTitleClass} from "../constants/constants.js"

function createselectTitle(title) {
    const selectTitleHtml = document.createElement("h1");

    selectTitleHtml.setAttribute("class", selectTitleClass);
    selectTitleHtml.innerHTML = title;

    return selectTitleHtml;
}

export default createselectTitle;