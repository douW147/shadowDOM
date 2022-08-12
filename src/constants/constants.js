"use strict"

const countries = [
    {
        id: 0,
        title: "United States",
        img: '<img src="https://countryflagsapi.com/png/us" alt="The United States Of America flag"/>'
    },
    {
        id: 1,
        title: "Australia",
        img: '<img src="https://countryflagsapi.com/png/au" alt="Australia flag"/>'
    },
    {
        id: 2,
        title: "Austria",
        img: '<img src="https://countryflagsapi.com/png/at" alt="Austria flag"/>'
    },
    {
        id: 3,
        title: "Belgium",
        img: '<img src="https://countryflagsapi.com/png/be" alt="Belgium flag"/>'
    },
    {
        id: 4,
        title: "Bulgaria",
        img: '<img src="https://countryflagsapi.com/png/bg" alt="Bulgaria flag"/>'
    },
];

export const imageContainerClass = "select__select-image-container";
export const selectTitleClass = "select__select-title";
export const selectRowClass = "select__select-row";
export const mainSelectClassName = "custom-select";
export const selectBodyClass = "select";
export const mainSelectOptionClass = "select__main-select-row";
export const selectOptionsListClass = "select__select-options-list"; 
export const selectOptionsListDisableClass = "select__select-options-list select__select-options-list_disable"; 
export const mainSelectOptionRowContainerClass = "select__select-row select_select-row_main";

export const fontAwesomeCDN = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />';

export const arrowHtml = '<i class="fa-solid fa-angle-down"></i>';

export default countries;