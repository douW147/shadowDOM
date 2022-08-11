function createRow(countryImageElement, countryTitleElement) {
    const countryRowHtml = document.createElement("div");

    countryRowHtml.setAttribute("class", "country-row");
    return countryRowHtml;
}

export default createRow;