"use strict"

import createStyleLink from "./elements/style.js"

import countries, 
    {
        selectRowClass, 
        selectTitleClass,
        imageContainerClass,
        selectBodyClass,
        mainSelectOptionClass
    } from "./constants/constants.js";

class ShadowElement extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.selectElementsList = countries;

        this.initializeFontAwesome()
        this.createStyles();

        this.mainOptionId = this.selectElementsList[0].id;
        this.mainSelect = this.createMainSelect();
        this.selectOptions = this.createSelectOptions();
        console.log(this.selectOptions);

        this.isOptionsShows = false;

        this.renderSelectBody();

    }

    initializeFontAwesome() {
        this.shadow.innerHTML = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
    }

    createStyles() {
        const style = createStyleLink("./styles/shadow-dom-styles/style.css");
        this.shadow.appendChild(style);
    }

    renderSelectBody() {
        const selectBody = document.createElement("div");
        selectBody.setAttribute("class", selectBodyClass);

        const mainSelect = this.mainSelect;

        selectBody.appendChild(mainSelect);

        const selectOptions = this.selectOptions;

        selectBody.appendChild(selectOptions)

        this.shadow.appendChild(selectBody);
    }

    createSelectOptions() {
        const selectOptions = document.createElement("div");
        selectOptions.setAttribute("class", "select__select-options");

        this.selectElementsList.forEach(select => {
            const title = this.createselectTitle(select.title);
            const image = this.createselectImage(select.img)
            const row = this.createRow(image, title);

            selectOptions.appendChild(row);
        });

        return selectOptions;
    }

    createMainSelect() {
        const title = this.createselectTitle(this.selectElementsList[0].title);
        const image = this.createselectImage(this.selectElementsList[0].img)
        const row = this.createRow(image, title);

        row.setAttribute("class", mainSelectOptionClass);

        const mainSelect = document.createElement("div");
        mainSelect.setAttribute("class", "select__main-option");

        const arrow = document.createElement("div");
        arrow.setAttribute("class", "select__arrow")
        arrow.innerHTML = '<i class="fa-solid fa-angle-down"></i>';

        mainSelect.appendChild(row);
        mainSelect.appendChild(arrow);
        mainSelect.addEventListener("click", this.onMainSelectClick)

        return mainSelect;
    }

    createRow(selectImageElement, selectTitleElement) {
        const selectRowHtml = document.createElement("div");

        selectRowHtml.setAttribute("class", selectRowClass);
        selectRowHtml.appendChild(selectTitleElement);
        selectRowHtml.appendChild(selectImageElement);

        return selectRowHtml;
    }

    createselectTitle(title) {
        const selectTitleHtml = document.createElement("h1");

        selectTitleHtml.setAttribute("class", selectTitleClass);
        selectTitleHtml.innerHTML = title;

        return selectTitleHtml;
    }

    createselectImage(img) {
        const selectImageHtml = document.createElement("div");

        selectImageHtml.setAttribute("class", imageContainerClass);
        selectImageHtml.innerHTML = img;

        return selectImageHtml;
    }

    toggleIsOptionsShows() {
        if (this.isOptionsShows === false) {
            this.isOptionsShows = true;
            return 
        }
        this.isOptionsShows = false;
    }

    onMainSelectClick() {
        this.selectOptions = [];
    }

}

customElements.define('custom-select', ShadowElement);