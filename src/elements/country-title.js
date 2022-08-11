function createCountryTitle(title) {
    const countryTitleHtml = document.createElement("h1");

    countryTitleHtml.setAttribute("class", "country-row__country-title");
    countryTitleHtml.innerHTML = title;

    return countryTitleHtml;
}

export default createCountryTitle;