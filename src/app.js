import createCountryImage from "./elements/country-image.js";
import createCountryTitle from "./elements/country-title.js";
import createRow from "./elements/row.js";
import createStyleLink from "./elements/style.js"

import countries from "./constants/constants.js";

const shadowRootElementId = "shadow-host";
const shadowRoot = document.getElementById(shadowRootElementId);
shadowRoot.attachShadow({mode: "open"});

const styleHtml = createStyleLink("../styles/shadow-styles/style.css");
shadowRoot.appendChild(styleHtml);

const template = document.createElement("template");
shadowRoot.appendChild(template);

countries.forEach(countrie => {
    const countrieTitleHTml = createCountryTitle(countrie.title);
    const countrieImageHtml = createCountryImage();
    const rowHtml = createRow();

    countrieImageHtml.innerHTML = countrie.img;
    
    rowHtml.appendChild(countrieTitleHTml);
    rowHtml.appendChild(countrieImageHtml);
    
    template.appendChild(rowHtml);
});

shadowRoot.innerHTML ="kjfnkjrjgr";

