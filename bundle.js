/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --julius: \"Julius Sans One\", sans-serif;\n  --archivo: \"Archivo Narrow\", sans-serif;\n  --opensans: \"Open Sans\", sans-serif;\n  --doc-height: 100%;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n/* /////////// */\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  /* height: 100vh; fallback for Js load */\n  /* height: var(--doc-height); */\n}\n/* ///////////////// */\nbody {\n  /* height: 100%; */\n  background: rgb(31, 23, 170);\n  background: linear-gradient(\n    180deg,\n    rgb(31, 23, 170) 0%,\n    rgba(66, 66, 226, 1) 35%,\n    rgba(0, 212, 255, 1) 100%\n  );\n  /* position: relative; */\n  background: #317bdb;\n  background-repeat: no-repeat;\n  background-size: cover;\n  /* color: white; */\n}\n\n.main {\n  height: 100vh;\n  height: var(--doc-height);\n  position: relative;\n}\n\n.top,\n.mid {\n  padding: 5px;\n}\n\n.top {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  display: none;\n}\n\n.top-left {\n  display: flex;\n  align-items: center;\n}\n\n.input-container {\n  display: flex;\n  padding-left: 10px;\n  position: relative;\n  /* border: 1px solid rgb(151, 151, 151); */\n  background-color: rgba(135, 206, 235, 0.8);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,\n    rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;\n  border-radius: 10px;\n}\ninput {\n  width: 100%;\n  font-size: 28px;\n  font-family: var(--archivo);\n  /* position: relative; */\n  background: none;\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  padding-left: 0.2em;\n}\ninput::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\ninput:focus,\ninput:active {\n  outline: none;\n}\n\n/* .btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n} */\n\n/* ///////////////////////////// */\nbutton {\n  appearance: button;\n  background-color: #393d47;\n  border: solid transparent;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-width: 0 0 4px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  line-height: 20px;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 10px 5px 10px 15px;\n  text-align: center;\n  text-transform: uppercase;\n  touch-action: manipulation;\n  transform: translateZ(0);\n  transition: filter 0.2s;\n  user-select: none;\n  -webkit-user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\nbutton:after {\n  background-clip: padding-box;\n  /* background-color: #1cb0f6; */\n  background-color: #393d47;\n  border: solid transparent;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-width: 0 0 4px;\n  bottom: -4px;\n  content: \"\";\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n\nbutton:main,\nbutton:focus {\n  user-select: auto;\n}\n\nbutton:hover:not(:disabled) {\n  filter: brightness(1.1);\n}\n\nbutton:disabled {\n  cursor: auto;\n}\n\nbutton:active:after {\n  border-width: 0 0 0px;\n}\n\nbutton:active {\n  padding-bottom: 10px;\n}\n/* /////////////////////////// */\n\n.location-icon {\n  width: 30px;\n  /* position: absolute; */\n  /* left: 5px;\n  right: 0;\n  top: 5px;\n  bottom: 0; */\n  /* margin: auto; */\n}\n\n.city-name {\n  font-size: 32px;\n  font-family: var(--archivo);\n}\n\n.mid {\n  /* margin-top: 10px; */\n  width: 100%;\n  padding-block: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.top,\n.mid {\n  color: white;\n}\n\n.temperature {\n  font-size: 124px;\n  font-family: var(--opensans);\n  background: -webkit-linear-gradient(\n    rgba(255, 255, 255, 1) 20%,\n    rgba(255, 255, 255, 0.1)\n  );\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  line-height: 0.8;\n  margin-left: -8px;\n}\n\n.date-temp-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.datetime {\n  margin-bottom: 10px;\n  font-size: 24px;\n  letter-spacing: 2px;\n  font-family: var(--julius);\n}\n\n.feels-like {\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 1px;\n  margin-top: 20px;\n  font-family: var(--julius);\n  font-weight: 500;\n  /* font-style: italic; */\n}\n\n.temp-container {\n  /* margin-left: 10px; */\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.symbol {\n  font-size: 82px;\n}\n\n.current-weather-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 15px;\n}\n\n.weather-description {\n  font-size: 18px;\n  font-family: var(--julius);\n  margin-top: -20px;\n}\n\n.current-weather-icon {\n  width: 116px;\n}\n\n.bottom {\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  padding-block: 30px;\n  padding-top: 20px;\n  padding-bottom: 0;\n  width: 100%;\n  background: skyblue;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n  font-family: var(--archivo);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,\n    rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;\n}\n.bottom > p {\n  margin-top: 10px;\n  font-size: 24px;\n  color: black;\n  font-family: var(--archivo);\n}\n.cards-container {\n  display: flex;\n  margin-top: 20px;\n  width: 100vw;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 10px;\n  background: transparent;\n  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,\n    rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset; */\n}\n\n.weather-icon {\n  width: 84px;\n  /* width: 40px; */\n}\n\n.time {\n  font-family: var(--opensans);\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.temp-small {\n  margin-top: -5px;\n  font-size: 32px;\n}\n\n.extra-info {\n  /* background-color: white; */\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* padding: 50px; */\n  gap: 15px;\n  row-gap: 30px;\n  /* border-block: 1px solid white; */\n  /* border-bottom: 20px solid white; */\n  padding: 30px;\n  background: #393d47;\n  color: white;\n}\n\n.label-span-group {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* padding: 20px 10px; */\n\n  border-radius: 10px;\n}\n\n.label-span {\n  font-family: var(--opensans);\n  font-size: 18px;\n  color: skyblue;\n}\n\n.extra-info-span {\n  font-family: var(--opensans);\n  font-size: 32px;\n  padding: 12px 15px;\n}\n\n.white {\n  filter: invert(99%) sepia(0%) saturate(6%) hue-rotate(163deg) brightness(102%)\n    contrast(103%);\n}\n\n.row {\n  flex-direction: row;\n}\n.sunrise,\n.sunset {\n  font-size: 18px;\n}\n\n/* /////////////////////////// */\n/* C° to F ° SWiTCH */\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* /////////////////////////////////////// */\n\n.switch-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  /* padding-right: 15px; */\n  padding-block: 20px;\n}\n.celsius,\n.fahrenheit {\n  font-size: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-family: var(--archivo);\n  font-weight: bold;\n}\n\n@media screen and (min-width: 800px) {\n  .switch-container {\n    background: rgba(255, 255, 255, 0.2);\n  }\n  html {\n    background-color: whitesmoke;\n  }\n  body {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 2fr;\n    grid-template-areas:\n      \"main extra\"\n      \"bottom bottom\";\n    height: 100vh;\n    max-width: 800px;\n    margin: 0 auto;\n    border: 10px solid #393d47;\n    border-radius: 25px;\n    position: relative;\n  }\n  .main {\n    grid-area: main;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .bottom {\n    position: absolute;\n    grid-area: bottom;\n    /* width: 100%; */\n    height: 100%;\n    border-radius: unset;\n  }\n  .extra-info {\n    grid-area: extra;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n  .cards-container {\n    width: 100%;\n  }\n\n  .mid {\n    margin-bottom: 20%;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  body {\n    grid-template-rows: 2fr 1fr;\n  }\n\n  .mid {\n    margin-bottom: 40%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --julius: \"Julius Sans One\", sans-serif;\n  --archivo: \"Archivo Narrow\", sans-serif;\n  --opensans: \"Open Sans\", sans-serif;\n  --doc-height: 100%;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n/* /////////// */\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  /* height: 100vh; fallback for Js load */\n  /* height: var(--doc-height); */\n}\n/* ///////////////// */\nbody {\n  /* height: 100%; */\n  background: rgb(31, 23, 170);\n  background: linear-gradient(\n    180deg,\n    rgb(31, 23, 170) 0%,\n    rgba(66, 66, 226, 1) 35%,\n    rgba(0, 212, 255, 1) 100%\n  );\n  /* position: relative; */\n  background: #317bdb;\n  background-repeat: no-repeat;\n  background-size: cover;\n  /* color: white; */\n}\n\n.main {\n  height: 100vh;\n  height: var(--doc-height);\n  position: relative;\n}\n\n.top,\n.mid {\n  padding: 5px;\n}\n\n.top {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  display: none;\n}\n\n.top-left {\n  display: flex;\n  align-items: center;\n}\n\n.input-container {\n  display: flex;\n  padding-left: 10px;\n  position: relative;\n  /* border: 1px solid rgb(151, 151, 151); */\n  background-color: rgba(135, 206, 235, 0.8);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,\n    rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;\n  border-radius: 10px;\n}\ninput {\n  width: 100%;\n  font-size: 28px;\n  font-family: var(--archivo);\n  /* position: relative; */\n  background: none;\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  padding-left: 0.2em;\n}\ninput::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\ninput:focus,\ninput:active {\n  outline: none;\n}\n\n/* .btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n} */\n\n/* ///////////////////////////// */\nbutton {\n  appearance: button;\n  background-color: #393d47;\n  border: solid transparent;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-width: 0 0 4px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  line-height: 20px;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 10px 5px 10px 15px;\n  text-align: center;\n  text-transform: uppercase;\n  touch-action: manipulation;\n  transform: translateZ(0);\n  transition: filter 0.2s;\n  user-select: none;\n  -webkit-user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\nbutton:after {\n  background-clip: padding-box;\n  /* background-color: #1cb0f6; */\n  background-color: #393d47;\n  border: solid transparent;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-width: 0 0 4px;\n  bottom: -4px;\n  content: \"\";\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n\nbutton:main,\nbutton:focus {\n  user-select: auto;\n}\n\nbutton:hover:not(:disabled) {\n  filter: brightness(1.1);\n}\n\nbutton:disabled {\n  cursor: auto;\n}\n\nbutton:active:after {\n  border-width: 0 0 0px;\n}\n\nbutton:active {\n  padding-bottom: 10px;\n}\n/* /////////////////////////// */\n\n.location-icon {\n  width: 30px;\n  /* position: absolute; */\n  /* left: 5px;\n  right: 0;\n  top: 5px;\n  bottom: 0; */\n  /* margin: auto; */\n}\n\n.city-name {\n  font-size: 32px;\n  font-family: var(--archivo);\n}\n\n.mid {\n  /* margin-top: 10px; */\n  width: 100%;\n  padding-block: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.top,\n.mid {\n  color: white;\n}\n\n.temperature {\n  font-size: 124px;\n  font-family: var(--opensans);\n  background: -webkit-linear-gradient(\n    rgba(255, 255, 255, 1) 20%,\n    rgba(255, 255, 255, 0.1)\n  );\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  line-height: 0.8;\n  margin-left: -8px;\n}\n\n.date-temp-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.datetime {\n  margin-bottom: 10px;\n  font-size: 24px;\n  letter-spacing: 2px;\n  font-family: var(--julius);\n}\n\n.feels-like {\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 1px;\n  margin-top: 20px;\n  font-family: var(--julius);\n  font-weight: 500;\n  /* font-style: italic; */\n}\n\n.temp-container {\n  /* margin-left: 10px; */\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.symbol {\n  font-size: 82px;\n}\n\n.current-weather-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 15px;\n}\n\n.weather-description {\n  font-size: 18px;\n  font-family: var(--julius);\n  margin-top: -20px;\n}\n\n.current-weather-icon {\n  width: 116px;\n}\n\n.bottom {\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  padding-block: 30px;\n  padding-top: 20px;\n  padding-bottom: 0;\n  width: 100%;\n  background: skyblue;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n  font-family: var(--archivo);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,\n    rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;\n}\n.bottom > p {\n  margin-top: 10px;\n  font-size: 24px;\n  color: black;\n  font-family: var(--archivo);\n}\n.cards-container {\n  display: flex;\n  margin-top: 20px;\n  width: 100vw;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 10px;\n  background: transparent;\n  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,\n    rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset; */\n}\n\n.weather-icon {\n  width: 84px;\n  /* width: 40px; */\n}\n\n.time {\n  font-family: var(--opensans);\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.temp-small {\n  margin-top: -5px;\n  font-size: 32px;\n}\n\n.extra-info {\n  /* background-color: white; */\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* padding: 50px; */\n  gap: 15px;\n  row-gap: 30px;\n  /* border-block: 1px solid white; */\n  /* border-bottom: 20px solid white; */\n  padding: 30px;\n  background: #393d47;\n  color: white;\n}\n\n.label-span-group {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* padding: 20px 10px; */\n\n  border-radius: 10px;\n}\n\n.label-span {\n  font-family: var(--opensans);\n  font-size: 18px;\n  color: skyblue;\n}\n\n.extra-info-span {\n  font-family: var(--opensans);\n  font-size: 32px;\n  padding: 12px 15px;\n}\n\n.white {\n  filter: invert(99%) sepia(0%) saturate(6%) hue-rotate(163deg) brightness(102%)\n    contrast(103%);\n}\n\n.row {\n  flex-direction: row;\n}\n.sunrise,\n.sunset {\n  font-size: 18px;\n}\n\n/* /////////////////////////// */\n/* C° to F ° SWiTCH */\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* /////////////////////////////////////// */\n\n.switch-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  /* padding-right: 15px; */\n  padding-block: 20px;\n}\n.celsius,\n.fahrenheit {\n  font-size: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-family: var(--archivo);\n  font-weight: bold;\n}\n\n@media screen and (min-width: 800px) {\n  .switch-container {\n    background: rgba(255, 255, 255, 0.2);\n  }\n  html {\n    background-color: whitesmoke;\n  }\n  body {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 2fr;\n    grid-template-areas:\n      \"main extra\"\n      \"bottom bottom\";\n    height: 100vh;\n    max-width: 800px;\n    margin: 0 auto;\n    border: 10px solid #393d47;\n    border-radius: 25px;\n    position: relative;\n  }\n  .main {\n    grid-area: main;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .bottom {\n    position: absolute;\n    grid-area: bottom;\n    /* width: 100%; */\n    height: 100%;\n    border-radius: unset;\n  }\n  .extra-info {\n    grid-area: extra;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n  .cards-container {\n    width: 100%;\n  }\n\n  .mid {\n    margin-bottom: 20%;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  body {\n    grid-template-rows: 2fr 1fr;\n  }\n\n  .mid {\n    margin-bottom: 40%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/icons/map-marker-solid.svg":
/*!****************************************!*\
  !*** ./src/icons/map-marker-solid.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52bfeebe9c786e21e335.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons_map_marker_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/map-marker-solid.svg */ "./src/icons/map-marker-solid.svg");


const locationIcon = document.querySelector(".location-icon");
locationIcon.src = _icons_map_marker_solid_svg__WEBPACK_IMPORTED_MODULE_1__;
// import getUserLocation from "./geolocation";

const app = {
  init: () => {
    app.showCurrentWeather("Iasi", "metric");
    app.showForecast("Iasi", "metric");
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", (e) => {
      app.handleChange(e.target.checked);
      // console.log(e.target.checked);
    });
    const searchBtn = document.getElementById("searchBtn");
    const input = document.getElementById("location");
    input.value = "Iasi";
    input.addEventListener("keypress", function (event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.querySelector(".btn").click();
      }
    });

    searchBtn.addEventListener("click", () => {
      if (!input.value) return;
      // app.getForecast(input.value);

      if (checkbox.checked === true) {
        app.showCurrentWeather(input.value, "imperial");
        app.showForecast(input.value, "imperial");
      } else if (checkbox.checked === false) {
        app.showCurrentWeather(input.value, "metric");
        app.showForecast(input.value, "metric");
      }
    });
  },

  handleChange: function (value) {
    const input = document.getElementById("location");
    if (value === true) {
      app.showCurrentWeather(input.value, "imperial");
      app.showForecast(input.value, "imperial");
    } else {
      app.showCurrentWeather(input.value, "metric");
      app.showForecast(input.value, "metric");
    }
  },

  showCurrentWeather: async (city, unit) => {
    try {
      const cityName = document.querySelector(".city-name");
      const temperature = document.querySelector(".temperature");
      const weatherDescription = document.querySelector(".weather-description");
      const currentWeatherIcon = document.querySelector(
        ".current-weather-icon"
      );
      const datetime = document.querySelector(".datetime");
      const feelsLike = document.querySelector(".feels-like");
      const humidity = document.querySelector(".humidity");
      const pressure = document.querySelector(".pressure");
      const sunrise = document.querySelector(".sunrise");
      const sunset = document.querySelector(".sunset");

      const currentWeatherData = await app.getCurrentWeather(city, unit);

      if (currentWeatherData === undefined)
        throw new Error("Invalid city name");
      console.log(currentWeatherData);
      const weatherClass = currentWeatherData.weather[0].main.toLowerCase();
      const backgroundSrc = `../src/images/${weatherClass}.jpg`;
      document.getElementById(
        "body"
      ).style.backgroundImage = `url(${backgroundSrc})`;

      cityName.textContent = currentWeatherData.name;
      datetime.textContent = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      feelsLike.textContent = `Feels like: ${Math.round(
        Number(currentWeatherData.main.feels_like)
      )}°`;
      temperature.textContent = `${Math.round(
        Number(currentWeatherData.main.temp)
      )}`;
      weatherDescription.textContent =
        currentWeatherData.weather[0].description;
      currentWeatherIcon.src = `http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@4x.png`;

      const sunriseTime = new Date(
        currentWeatherData.sys.sunrise * 1000
      ).toLocaleTimeString(["en-GB"], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const sunsetTime = new Date(
        currentWeatherData.sys.sunset * 1000
      ).toLocaleTimeString(["en-GB"], {
        hour: "2-digit",
        minute: "2-digit",
      });

      humidity.textContent = `${currentWeatherData.main.humidity}%`;
      pressure.textContent = `${currentWeatherData.main.pressure}`;
      sunrise.textContent = sunriseTime;
      sunset.textContent = sunsetTime;
    } catch (error) {}
  },

  showForecast: async (city, unit) => {
    try {
      const cards = [...document.querySelectorAll(".card")];
      const weatherData = await app.getForecast(city, unit);
      if (weatherData === undefined) throw new Error("Invalid city name");
      for (let i = 0; i < cards.length; i++) {
        const time = new Date(
          Number(`${weatherData.list[i].dt}000`)
        ).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

        cards[i].innerHTML = `<span class="time">${time}</span>
        <img src="http://openweathermap.org/img/wn/${
          weatherData.list[i].weather[0].icon
        }@2x.png" alt="${
          weatherData.list[i].weather[0].description
        }" class="weather-icon" />
        <span class="temp-small">${Math.round(
          Number(weatherData.list[i].main.temp)
        )}°</span>`;
      }
    } catch (error) {
      console.log(error);
    }
  },

  getCurrentWeather: async (city, unit) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c73916f071e17c792630e53c14121e04&units=${unit}`,
        { mode: "cors" }
      );
      if (!response.ok) throw new Error("Invalid city name");
      const data = await response.json();
      return data;
    } catch (error) {}
  },

  getForecast: async (city, unit) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c73916f071e17c792630e53c14121e04&units=${unit}`,
        { mode: "cors" }
      );
      if (!response.ok) throw new Error("Invalid city name");
      const data = await response.json();
      return data;
    } catch (error) {}
  },
};

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

app.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFlBQVksTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUs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VUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsOERBQThELEtBQUssZ0RBQWdELEtBQUs7QUFDeEgsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLG1CQUFtQjtBQUM5RDtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWp1bGl1czogXFxcIkp1bGl1cyBTYW5zIE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWFyY2hpdm86IFxcXCJBcmNoaXZvIE5hcnJvd1xcXCIsIHNhbnMtc2VyaWY7XFxuICAtLW9wZW5zYW5zOiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tZG9jLWhlaWdodDogMTAwJTtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLyogLy8vLy8vLy8vLy8gKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIGhlaWdodDogMTAwdmg7IGZhbGxiYWNrIGZvciBKcyBsb2FkICovXFxuICAvKiBoZWlnaHQ6IHZhcigtLWRvYy1oZWlnaHQpOyAqL1xcbn1cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLyAqL1xcbmJvZHkge1xcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgYmFja2dyb3VuZDogcmdiKDMxLCAyMywgMTcwKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTgwZGVnLFxcbiAgICByZ2IoMzEsIDIzLCAxNzApIDAlLFxcbiAgICByZ2JhKDY2LCA2NiwgMjI2LCAxKSAzNSUsXFxuICAgIHJnYmEoMCwgMjEyLCAyNTUsIDEpIDEwMCVcXG4gICk7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICBiYWNrZ3JvdW5kOiAjMzE3YmRiO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAvKiBjb2xvcjogd2hpdGU7ICovXFxufVxcblxcbi5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBoZWlnaHQ6IHZhcigtLWRvYy1oZWlnaHQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9wLFxcbi5taWQge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9wIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9wLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTEsIDE1MSwgMTUxKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM1LCAyMDYsIDIzNSwgMC44KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNTBweCAtMTJweCBpbnNldCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDI2cHggLTE4cHggaW5zZXQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1hcmNoaXZvKTtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIHBhZGRpbmctbGVmdDogMC4yZW07XFxufVxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5pbnB1dDphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogLmJ0biB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn0gKi9cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBidXR0b247XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZDQ3O1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci13aWR0aDogMCAwIDRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIG1hcmdpbjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjJzO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbmJ1dHRvbjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzFjYjBmNjsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNkNDc7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAgNHB4O1xcbiAgYm90dG9tOiAtNHB4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuYnV0dG9uOm1haW4sXFxuYnV0dG9uOmZvY3VzIHtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbn1cXG5cXG5idXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbmJ1dHRvbjphY3RpdmU6YWZ0ZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMHB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXG5cXG4ubG9jYXRpb24taWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gIC8qIGxlZnQ6IDVweDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1cHg7XFxuICBib3R0b206IDA7ICovXFxuICAvKiBtYXJnaW46IGF1dG87ICovXFxufVxcblxcbi5jaXR5LW5hbWUge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWFyY2hpdm8pO1xcbn1cXG5cXG4ubWlkIHtcXG4gIC8qIG1hcmdpbi10b3A6IDEwcHg7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYmxvY2s6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcblxcbi50b3AsXFxuLm1pZCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICBmb250LXNpemU6IDEyNHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW5zYW5zKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDIwJSxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXFxuICApO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBsaW5lLWhlaWdodDogMC44O1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxufVxcblxcbi5kYXRlLXRlbXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmRhdGV0aW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWp1bGl1cyk7XFxufVxcblxcbi5mZWVscy1saWtlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1qdWxpdXMpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cXG59XFxuXFxuLnRlbXAtY29udGFpbmVyIHtcXG4gIC8qIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uc3ltYm9sIHtcXG4gIGZvbnQtc2l6ZTogODJweDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi53ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1qdWxpdXMpO1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogMTE2cHg7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZy1ibG9jazogMzBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHNreWJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1hcmNoaXZvKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNTBweCAtMTJweCBpbnNldCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDI2cHggLTE4cHggaW5zZXQ7XFxufVxcbi5ib3R0b20gPiBwIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogdmFyKC0tYXJjaGl2byk7XFxufVxcbi5jYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIC8qIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNTBweCAtMTJweCBpbnNldCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDI2cHggLTE4cHggaW5zZXQ7ICovXFxufVxcblxcbi53ZWF0aGVyLWljb24ge1xcbiAgd2lkdGg6IDg0cHg7XFxuICAvKiB3aWR0aDogNDBweDsgKi9cXG59XFxuXFxuLnRpbWUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW5zYW5zKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi50ZW1wLXNtYWxsIHtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5leHRyYS1pbmZvIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgLyogcGFkZGluZzogNTBweDsgKi9cXG4gIGdhcDogMTVweDtcXG4gIHJvdy1nYXA6IDMwcHg7XFxuICAvKiBib3JkZXItYmxvY2s6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gIC8qIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgd2hpdGU7ICovXFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogIzM5M2Q0NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxhYmVsLXNwYW4tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBwYWRkaW5nOiAyMHB4IDEwcHg7ICovXFxuXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubGFiZWwtc3BhbiB7XFxuICBmb250LWZhbWlseTogdmFyKC0tb3BlbnNhbnMpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHNreWJsdWU7XFxufVxcblxcbi5leHRyYS1pbmZvLXNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW5zYW5zKTtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXG59XFxuXFxuLndoaXRlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDE2M2RlZykgYnJpZ2h0bmVzcygxMDIlKVxcbiAgICBjb250cmFzdCgxMDMlKTtcXG59XFxuXFxuLnJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uc3VucmlzZSxcXG4uc3Vuc2V0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxuLyogQ8KwIHRvIEYgwrAgU1dpVENIICovXFxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyICovXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NmYzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxuXFxuLnN3aXRjaC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogcGFkZGluZy1yaWdodDogMTVweDsgKi9cXG4gIHBhZGRpbmctYmxvY2s6IDIwcHg7XFxufVxcbi5jZWxzaXVzLFxcbi5mYWhyZW5oZWl0IHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tYXJjaGl2byk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIC5zd2l0Y2gtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgfVxcbiAgaHRtbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICB9XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgXFxcIm1haW4gZXh0cmFcXFwiXFxuICAgICAgXFxcImJvdHRvbSBib3R0b21cXFwiO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICMzOTNkNDc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5ib3R0b20ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGdyaWQtYXJlYTogYm90dG9tO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcXG4gIH1cXG4gIC5leHRyYS1pbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiBleHRyYTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuICAuY2FyZHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubWlkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICB9XFxuXFxuICAubWlkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHVDQUF1QztFQUN2QyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBLGdCQUFnQjtBQUNoQjs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNULHdDQUF3QztFQUN4QywrQkFBK0I7QUFDakM7QUFDQSxzQkFBc0I7QUFDdEI7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCOzs7OztHQUtDO0VBQ0Qsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhC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a0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tanVsaXVzOiBcXFwiSnVsaXVzIFNhbnMgT25lXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tYXJjaGl2bzogXFxcIkFyY2hpdm8gTmFycm93XFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tb3BlbnNhbnM6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1kb2MtaGVpZ2h0OiAxMDAlO1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4vKiAvLy8vLy8vLy8vLyAqL1xcbmh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogaGVpZ2h0OiAxMDB2aDsgZmFsbGJhY2sgZm9yIEpzIGxvYWQgKi9cXG4gIC8qIGhlaWdodDogdmFyKC0tZG9jLWhlaWdodCk7ICovXFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vICovXFxuYm9keSB7XFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDIzLCAxNzApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxODBkZWcsXFxuICAgIHJnYigzMSwgMjMsIDE3MCkgMCUsXFxuICAgIHJnYmEoNjYsIDY2LCAyMjYsIDEpIDM1JSxcXG4gICAgcmdiYSgwLCAyMTIsIDI1NSwgMSkgMTAwJVxcbiAgKTtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gIGJhY2tncm91bmQ6ICMzMTdiZGI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuXFxuLm1haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGhlaWdodDogdmFyKC0tZG9jLWhlaWdodCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b3AsXFxuLm1pZCB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b3Age1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b3AtbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MSwgMTUxLCAxNTEpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDIwNiwgMjM1LCAwLjgpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMzBweCA1MHB4IC0xMnB4IGluc2V0LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMjZweCAtMThweCBpbnNldDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbmlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWFyY2hpdm8pO1xcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjJlbTtcXG59XFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbmlucHV0OmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiAuYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufSAqL1xcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxuYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNkNDc7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAgNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnM7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuYnV0dG9uOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNiMGY2OyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2Q0NztcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItd2lkdGg6IDAgMCA0cHg7XFxuICBib3R0b206IC00cHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5idXR0b246bWFpbixcXG5idXR0b246Zm9jdXMge1xcbiAgdXNlci1zZWxlY3Q6IGF1dG87XFxufVxcblxcbmJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZTphZnRlciB7XFxuICBib3JkZXItd2lkdGg6IDAgMCAwcHg7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcblxcbi5sb2NhdGlvbi1pY29uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgLyogbGVmdDogNXB4O1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDVweDtcXG4gIGJvdHRvbTogMDsgKi9cXG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cXG59XFxuXFxuLmNpdHktbmFtZSB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tYXJjaGl2byk7XFxufVxcblxcbi5taWQge1xcbiAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ibG9jazogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG59XFxuXFxuLnRvcCxcXG4ubWlkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogMTI0cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tb3BlbnNhbnMpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMjAlLFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcXG4gICk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGxpbmUtaGVpZ2h0OiAwLjg7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG59XFxuXFxuLmRhdGUtdGVtcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZGF0ZXRpbWUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tanVsaXVzKTtcXG59XFxuXFxuLmZlZWxzLWxpa2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWp1bGl1cyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcbn1cXG5cXG4udGVtcC1jb250YWluZXIge1xcbiAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5zeW1ib2wge1xcbiAgZm9udC1zaXplOiA4MnB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLndlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWp1bGl1cyk7XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1pY29uIHtcXG4gIHdpZHRoOiAxMTZweDtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nLWJsb2NrOiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWFyY2hpdm8pO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMzBweCA1MHB4IC0xMnB4IGluc2V0LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMjZweCAtMThweCBpbnNldDtcXG59XFxuLmJvdHRvbSA+IHAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1hcmNoaXZvKTtcXG59XFxuLmNhcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLyogYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMzBweCA1MHB4IC0xMnB4IGluc2V0LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMjZweCAtMThweCBpbnNldDsgKi9cXG59XFxuXFxuLndlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogODRweDtcXG4gIC8qIHdpZHRoOiA0MHB4OyAqL1xcbn1cXG5cXG4udGltZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tb3BlbnNhbnMpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnRlbXAtc21hbGwge1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLmV4dHJhLWluZm8ge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAvKiBwYWRkaW5nOiA1MHB4OyAqL1xcbiAgZ2FwOiAxNXB4O1xcbiAgcm93LWdhcDogMzBweDtcXG4gIC8qIGJvcmRlci1ibG9jazogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgLyogYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB3aGl0ZTsgKi9cXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMzkzZDQ3O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGFiZWwtc3Bhbi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIHBhZGRpbmc6IDIwcHggMTBweDsgKi9cXG5cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5sYWJlbC1zcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1vcGVuc2Fucyk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuLmV4dHJhLWluZm8tc3BhbiB7XFxuICBmb250LWZhbWlseTogdmFyKC0tb3BlbnNhbnMpO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcbn1cXG5cXG4ud2hpdGUge1xcbiAgZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgwJSkgc2F0dXJhdGUoNiUpIGh1ZS1yb3RhdGUoMTYzZGVnKSBicmlnaHRuZXNzKDEwMiUpXFxuICAgIGNvbnRyYXN0KDEwMyUpO1xcbn1cXG5cXG4ucm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5zdW5yaXNlLFxcbi5zdW5zZXQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXG4vKiBDwrAgdG8gRiDCsCBTV2lUQ0ggKi9cXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2ZjM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXG5cXG4uc3dpdGNoLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICAvKiBwYWRkaW5nLXJpZ2h0OiAxNXB4OyAqL1xcbiAgcGFkZGluZy1ibG9jazogMjBweDtcXG59XFxuLmNlbHNpdXMsXFxuLmZhaHJlbmhlaXQge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1hcmNoaXZvKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xcbiAgLnN3aXRjaC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICB9XFxuICBodG1sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwibWFpbiBleHRyYVxcXCJcXG4gICAgICBcXFwiYm90dG9tIGJvdHRvbVxcXCI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgIzM5M2Q0NztcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgLm1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgLmJvdHRvbSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZ3JpZC1hcmVhOiBib3R0b207XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xcbiAgfVxcbiAgLmV4dHJhLWluZm8ge1xcbiAgICBncmlkLWFyZWE6IGV4dHJhO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG4gIC5jYXJkcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5taWQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgYm9keSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gIH1cXG5cXG4gIC5taWQge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgTG9jYXRpb25JY29uIGZyb20gXCIuL2ljb25zL21hcC1tYXJrZXItc29saWQuc3ZnXCI7XG5jb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWljb25cIik7XG5sb2NhdGlvbkljb24uc3JjID0gTG9jYXRpb25JY29uO1xuLy8gaW1wb3J0IGdldFVzZXJMb2NhdGlvbiBmcm9tIFwiLi9nZW9sb2NhdGlvblwiO1xuXG5jb25zdCBhcHAgPSB7XG4gIGluaXQ6ICgpID0+IHtcbiAgICBhcHAuc2hvd0N1cnJlbnRXZWF0aGVyKFwiSWFzaVwiLCBcIm1ldHJpY1wiKTtcbiAgICBhcHAuc2hvd0ZvcmVjYXN0KFwiSWFzaVwiLCBcIm1ldHJpY1wiKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgYXBwLmhhbmRsZUNoYW5nZShlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIH0pO1xuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnRuXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiSWFzaVwiO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIElmIHRoZSB1c2VyIHByZXNzZXMgdGhlIFwiRW50ZXJcIiBrZXkgb24gdGhlIGtleWJvYXJkXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSBkZWZhdWx0IGFjdGlvbiwgaWYgbmVlZGVkXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIGJ1dHRvbiBlbGVtZW50IHdpdGggYSBjbGlja1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blwiKS5jbGljaygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIWlucHV0LnZhbHVlKSByZXR1cm47XG4gICAgICAvLyBhcHAuZ2V0Rm9yZWNhc3QoaW5wdXQudmFsdWUpO1xuXG4gICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBhcHAuc2hvd0N1cnJlbnRXZWF0aGVyKGlucHV0LnZhbHVlLCBcImltcGVyaWFsXCIpO1xuICAgICAgICBhcHAuc2hvd0ZvcmVjYXN0KGlucHV0LnZhbHVlLCBcImltcGVyaWFsXCIpO1xuICAgICAgfSBlbHNlIGlmIChjaGVja2JveC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICBhcHAuc2hvd0N1cnJlbnRXZWF0aGVyKGlucHV0LnZhbHVlLCBcIm1ldHJpY1wiKTtcbiAgICAgICAgYXBwLnNob3dGb3JlY2FzdChpbnB1dC52YWx1ZSwgXCJtZXRyaWNcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG4gICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICBhcHAuc2hvd0N1cnJlbnRXZWF0aGVyKGlucHV0LnZhbHVlLCBcImltcGVyaWFsXCIpO1xuICAgICAgYXBwLnNob3dGb3JlY2FzdChpbnB1dC52YWx1ZSwgXCJpbXBlcmlhbFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwLnNob3dDdXJyZW50V2VhdGhlcihpbnB1dC52YWx1ZSwgXCJtZXRyaWNcIik7XG4gICAgICBhcHAuc2hvd0ZvcmVjYXN0KGlucHV0LnZhbHVlLCBcIm1ldHJpY1wiKTtcbiAgICB9XG4gIH0sXG5cbiAgc2hvd0N1cnJlbnRXZWF0aGVyOiBhc3luYyAoY2l0eSwgdW5pdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1uYW1lXCIpO1xuICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpO1xuICAgICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgY29uc3QgY3VycmVudFdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuY3VycmVudC13ZWF0aGVyLWljb25cIlxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGV0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRldGltZVwiKTtcbiAgICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHMtbGlrZVwiKTtcbiAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbiAgICAgIGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZVwiKTtcbiAgICAgIGNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnJpc2VcIik7XG4gICAgICBjb25zdCBzdW5zZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnNldFwiKTtcblxuICAgICAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0gYXdhaXQgYXBwLmdldEN1cnJlbnRXZWF0aGVyKGNpdHksIHVuaXQpO1xuXG4gICAgICBpZiAoY3VycmVudFdlYXRoZXJEYXRhID09PSB1bmRlZmluZWQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2l0eSBuYW1lXCIpO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJEYXRhKTtcbiAgICAgIGNvbnN0IHdlYXRoZXJDbGFzcyA9IGN1cnJlbnRXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW4udG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRTcmMgPSBgLi4vc3JjL2ltYWdlcy8ke3dlYXRoZXJDbGFzc30uanBnYDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBcImJvZHlcIlxuICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmFja2dyb3VuZFNyY30pYDtcblxuICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlckRhdGEubmFtZTtcbiAgICAgIGRhdGV0aW1lLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KTtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke01hdGgucm91bmQoXG4gICAgICAgIE51bWJlcihjdXJyZW50V2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlKVxuICAgICAgKX3CsGA7XG4gICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgIE51bWJlcihjdXJyZW50V2VhdGhlckRhdGEubWFpbi50ZW1wKVxuICAgICAgKX1gO1xuICAgICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgICAgY3VycmVudFdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICBjdXJyZW50V2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Y3VycmVudFdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbn1ANHgucG5nYDtcblxuICAgICAgY29uc3Qgc3VucmlzZVRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgY3VycmVudFdlYXRoZXJEYXRhLnN5cy5zdW5yaXNlICogMTAwMFxuICAgICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoW1wiZW4tR0JcIl0sIHtcbiAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc3Vuc2V0VGltZSA9IG5ldyBEYXRlKFxuICAgICAgICBjdXJyZW50V2VhdGhlckRhdGEuc3lzLnN1bnNldCAqIDEwMDBcbiAgICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKFtcImVuLUdCXCJdLCB7XG4gICAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSk7XG5cbiAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHl9JWA7XG4gICAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlfWA7XG4gICAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gc3VucmlzZVRpbWU7XG4gICAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBzdW5zZXRUaW1lO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9LFxuXG4gIHNob3dGb3JlY2FzdDogYXN5bmMgKGNpdHksIHVuaXQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FyZHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXTtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgYXBwLmdldEZvcmVjYXN0KGNpdHksIHVuaXQpO1xuICAgICAgaWYgKHdlYXRoZXJEYXRhID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2l0eSBuYW1lXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoXG4gICAgICAgICAgTnVtYmVyKGAke3dlYXRoZXJEYXRhLmxpc3RbaV0uZHR9MDAwYClcbiAgICAgICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1HQlwiLCB7IGhvdXI6IFwiMi1kaWdpdFwiLCBtaW51dGU6IFwiMi1kaWdpdFwiIH0pO1xuXG4gICAgICAgIGNhcmRzW2ldLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInRpbWVcIj4ke3RpbWV9PC9zcGFuPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7XG4gICAgICAgICAgd2VhdGhlckRhdGEubGlzdFtpXS53ZWF0aGVyWzBdLmljb25cbiAgICAgICAgfUAyeC5wbmdcIiBhbHQ9XCIke1xuICAgICAgICAgIHdlYXRoZXJEYXRhLmxpc3RbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgICB9XCIgY2xhc3M9XCJ3ZWF0aGVyLWljb25cIiAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXAtc21hbGxcIj4ke01hdGgucm91bmQoXG4gICAgICAgICAgTnVtYmVyKHdlYXRoZXJEYXRhLmxpc3RbaV0ubWFpbi50ZW1wKVxuICAgICAgICApfcKwPC9zcGFuPmA7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0Q3VycmVudFdlYXRoZXI6IGFzeW5jIChjaXR5LCB1bml0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9YzczOTE2ZjA3MWUxN2M3OTI2MzBlNTNjMTQxMjFlMDQmdW5pdHM9JHt1bml0fWAsXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICAgKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2l0eSBuYW1lXCIpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9LFxuXG4gIGdldEZvcmVjYXN0OiBhc3luYyAoY2l0eSwgdW5pdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZhcHBpZD1jNzM5MTZmMDcxZTE3Yzc5MjYzMGU1M2MxNDEyMWUwNCZ1bml0cz0ke3VuaXR9YCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgICApO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjaXR5IG5hbWVcIik7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH0sXG59O1xuXG5jb25zdCBkb2N1bWVudEhlaWdodCA9ICgpID0+IHtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBkb2Muc3R5bGUuc2V0UHJvcGVydHkoXCItLWRvYy1oZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YCk7XG59O1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZG9jdW1lbnRIZWlnaHQpO1xuZG9jdW1lbnRIZWlnaHQoKTtcblxuYXBwLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==