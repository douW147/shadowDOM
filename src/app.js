"use strict"

import createCountryImage from "./elements/country-image.js";
import createCountryTitle from "./elements/country-title.js";
import createRow from "./elements/row.js";
import createStyleLink from "./elements/style.js"

import countries, {countriesContainerClass} from "./constants/constants.js";

class ShadowElement extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const style = createStyleLink("./styles/shadow-dom-styles/style.css")
        shadow.appendChild(style);

        const countriesContainer = document.createElement('div');
        countriesContainer.setAttribute('class', countriesContainerClass)

        countries.forEach(countrie => {
            const title = createCountryTitle(countrie.title);
            const image = createCountryImage(countrie.img);
            const row = createRow(image, title);

            countriesContainer.appendChild(row);
        });  

        shadow.appendChild(countriesContainer);
    }
}

customElements.define('shadow-host', ShadowElement)