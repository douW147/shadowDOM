function createCountryImage() {
    const countryImageHtml = document.createElement("div");

    countryImageHtml.setAttribute("class", "country-row__country-image");

    return countryImageHtml;
}

export default createCountryImage;