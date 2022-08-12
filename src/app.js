"use strict"

import createStyleLink from "./elements/style.js"

import countries, 
    {
        selectRowClass, 
        selectTitleClass,
        imageContainerClass,
        selectBodyClass,
        mainSelectOptionClass,
        selectOptionsListClass,
        mainSelectOptionRowContainerClass,
        selectOptionsListDisableClass,
        fontAwesomeCDN,
        arrowHtml
    } from "./constants/constants.js";

class ShadowElement extends HTMLElement {

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});

        this.selectElementsList = countries;
        this.isSelectOptionsShows = false;
        this.mainOtionId = 0;

        this.initializeFontAwesome()
        this.createStyles();

        this.selectMainOption = this.createMainSelectOption();
        this.selectOptions = this.createSelectOptions();
        this.selectBody = this.createSelectBody();

        this.shadow.appendChild(this.selectBody);
    }

    initializeFontAwesome() {
        this.shadow.innerHTML = fontAwesomeCDN;
    }

    createStyles() {
        const style = createStyleLink("./styles/shadow-dom-styles/style.css");
        this.shadow.appendChild(style);
    }

    createMainSelectOption() {
        const mainSelectOption = document.createElement("div");
        mainSelectOption.setAttribute("class", mainSelectOptionClass);

        const arrow = this.createSelectArrow();
        const row = this.createRow(this.selectElementsList[0]);
        
        const mainSelectOptionRowContainer = this.createMainSelectOptionRowContainer();
        mainSelectOptionRowContainer.appendChild(row);

        mainSelectOption.appendChild(mainSelectOptionRowContainer);
        mainSelectOption.appendChild(arrow);
        mainSelectOption.addEventListener("click", () => {
            this.onMainSelectOptionClick();
        });

        return mainSelectOption;
    }

    createSelectOptions() {
        const selectOptionList = document.createElement("div");
        selectOptionList.setAttribute("class", selectOptionsListDisableClass);

        const filteredElements = this.selectElementsList.filter(listItem => listItem.id !== this.mainOtionId);
        filteredElements.forEach(selectElement => {
            const row = this.createRow(selectElement);

            row.addEventListener("click", () => {
                this.onSelectOptionRowClick(row);
            });

            selectOptionList.appendChild(row);
        })

        return selectOptionList;
    }

    createSelectBody() {
        const selectBody = document.createElement("div");
        selectBody.setAttribute("class", selectBodyClass);

        selectBody.appendChild(this.selectMainOption);
        selectBody.appendChild(this.selectOptions);

        return selectBody;
    }

    createRow(selectElement) {
        const title = this.createselectTitle(selectElement.title);
        const image = this.createselectImage(selectElement.img);

        const selectRowHtml = document.createElement("div");
        selectRowHtml.setAttribute("class", selectRowClass);
        selectRowHtml.setAttribute("id", selectElement.id);

        selectRowHtml.appendChild(title);
        selectRowHtml.appendChild(image);

        return selectRowHtml;
    }

    createMainSelectOptionRowContainer() {
        const mainSelectOptionRowContainer = document.createElement("div");
        mainSelectOptionRowContainer.setAttribute("class", mainSelectOptionRowContainerClass);

        return mainSelectOptionRowContainer;
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

    createSelectArrow() {
        const arrow = document.createElement("div");
        arrow.setAttribute("class", "select__arrow")
        arrow.innerHTML = arrowHtml;

        return arrow;
    }

    setMainRowOption(selectionElementId) {
        const newTitle = this.selectElementsList[selectionElementId].title;
        const newImage = this.selectElementsList[selectionElementId].img;
        const newId = selectionElementId;

        this.setMainOptionTitle(newTitle);
        this.setMainOptionImageContainer(newImage);
        this.setMainRowId(newId);
    }

    setMainOptionTitle(newTitle) {
        this.selectMainOption.children[0].children[0].children[0].innerText = newTitle;
    }
    
    setMainOptionImageContainer(newImage) {
        return this.selectMainOption.children[0].children[0].children[1].innerHTML = newImage;
    }

    setMainRowId(newId) {
        this.selectMainOption.children[0].children[0].id = newId
    }

    setRowOption(row) {
        const currentMainOptionId = this.mainOtionId;
        const currentMainTitle = this.selectElementsList[currentMainOptionId].title;
        const currentMainImage = this.selectElementsList[currentMainOptionId].img;

        row.id = currentMainOptionId;
        row.children[0].innerText = currentMainTitle;
        row.children[1].innerHTML = currentMainImage;
    }

    setMainOptinIndex(index) {
        this.mainOtionId = index;
    }

    onMainSelectOptionClick() {
        if (this.isSelectOptionsShows === false) {
            this.selectOptions.setAttribute("class", selectOptionsListClass);
        } else {
            this.selectOptions.setAttribute("class", selectOptionsListDisableClass);
        }

        this.toggleIsOptionsShows();
    }

    onSelectOptionRowClick(row) {
        const rowIdInSelectionList = row.id;

        this.setRowOption(row);

        this.setMainRowOption(rowIdInSelectionList);

        this.setMainOptinIndex(rowIdInSelectionList);

        this.onMainSelectOptionClick();
    }

    toggleIsOptionsShows() {
        this.isSelectOptionsShows = this.isSelectOptionsShows === true ? false : true;
    }
}

customElements.define('custom-select', ShadowElement);