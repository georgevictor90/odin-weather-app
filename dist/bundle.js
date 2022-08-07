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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFlBQVksTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUs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QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxLQUFLLGdEQUFnRCxLQUFLO0FBQ3hILFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxtQkFBbUI7QUFDOUQ7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1qdWxpdXM6IFxcXCJKdWxpdXMgU2FucyBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1hcmNoaXZvOiBcXFwiQXJjaGl2byBOYXJyb3dcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1vcGVuc2FuczogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWRvYy1oZWlnaHQ6IDEwMCU7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi8qIC8vLy8vLy8vLy8vICovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAvKiBoZWlnaHQ6IDEwMHZoOyBmYWxsYmFjayBmb3IgSnMgbG9hZCAqL1xcbiAgLyogaGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTsgKi9cXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8gKi9cXG5ib2R5IHtcXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gIGJhY2tncm91bmQ6IHJnYigzMSwgMjMsIDE3MCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDE4MGRlZyxcXG4gICAgcmdiKDMxLCAyMywgMTcwKSAwJSxcXG4gICAgcmdiYSg2NiwgNjYsIDIyNiwgMSkgMzUlLFxcbiAgICByZ2JhKDAsIDIxMiwgMjU1LCAxKSAxMDAlXFxuICApO1xcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgYmFja2dyb3VuZDogIzMxN2JkYjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG4ubWFpbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgaGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvcCxcXG4ubWlkIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRvcCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvcC1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTUxLCAxNTEsIDE1MSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMjA2LCAyMzUsIDAuOCk7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAzMHB4IDUwcHggLTEycHggaW5zZXQsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMThweCAyNnB4IC0xOHB4IGluc2V0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tYXJjaGl2byk7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBwYWRkaW5nLWxlZnQ6IDAuMmVtO1xcbn1cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuaW5wdXQ6YWN0aXZlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIC5idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59ICovXFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXG5idXR0b24ge1xcbiAgYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2Q0NztcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItd2lkdGg6IDAgMCA0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW46IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5idXR0b246YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMxY2IwZjY7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZDQ3O1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci13aWR0aDogMCAwIDRweDtcXG4gIGJvdHRvbTogLTRweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbmJ1dHRvbjptYWluLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICB1c2VyLXNlbGVjdDogYXV0bztcXG59XFxuXFxuYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG5idXR0b246YWN0aXZlOmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogMCAwIDBweDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxuXFxuLmxvY2F0aW9uLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAvKiBsZWZ0OiA1cHg7XFxuICByaWdodDogMDtcXG4gIHRvcDogNXB4O1xcbiAgYm90dG9tOiAwOyAqL1xcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xcbn1cXG5cXG4uY2l0eS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1hcmNoaXZvKTtcXG59XFxuXFxuLm1pZCB7XFxuICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJsb2NrOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG5cXG4udG9wLFxcbi5taWQge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiAxMjRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1vcGVuc2Fucyk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAyMCUsXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKVxcbiAgKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbGluZS1oZWlnaHQ6IDAuODtcXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbn1cXG5cXG4uZGF0ZS10ZW1wLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5kYXRldGltZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1qdWxpdXMpO1xcbn1cXG5cXG4uZmVlbHMtbGlrZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tanVsaXVzKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXFxufVxcblxcbi50ZW1wLWNvbnRhaW5lciB7XFxuICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnN5bWJvbCB7XFxuICBmb250LXNpemU6IDgycHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ud2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tanVsaXVzKTtcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWljb24ge1xcbiAgd2lkdGg6IDExNnB4O1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmctYmxvY2s6IDMwcHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBza3libHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBmb250LWZhbWlseTogdmFyKC0tYXJjaGl2byk7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAzMHB4IDUwcHggLTEycHggaW5zZXQsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMThweCAyNnB4IC0xOHB4IGluc2V0O1xcbn1cXG4uYm90dG9tID4gcCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWFyY2hpdm8pO1xcbn1cXG4uY2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAvKiBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAzMHB4IDUwcHggLTEycHggaW5zZXQsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMThweCAyNnB4IC0xOHB4IGluc2V0OyAqL1xcbn1cXG5cXG4ud2VhdGhlci1pY29uIHtcXG4gIHdpZHRoOiA4NHB4O1xcbiAgLyogd2lkdGg6IDQwcHg7ICovXFxufVxcblxcbi50aW1lIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1vcGVuc2Fucyk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4udGVtcC1zbWFsbCB7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4uZXh0cmEtaW5mbyB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIC8qIHBhZGRpbmc6IDUwcHg7ICovXFxuICBnYXA6IDE1cHg7XFxuICByb3ctZ2FwOiAzMHB4O1xcbiAgLyogYm9yZGVyLWJsb2NrOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAvKiBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJhY2tncm91bmQ6ICMzOTNkNDc7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sYWJlbC1zcGFuLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLyogcGFkZGluZzogMjBweCAxMHB4OyAqL1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxhYmVsLXNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW5zYW5zKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiBza3libHVlO1xcbn1cXG5cXG4uZXh0cmEtaW5mby1zcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1vcGVuc2Fucyk7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxufVxcblxcbi53aGl0ZSB7XFxuICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg2JSkgaHVlLXJvdGF0ZSgxNjNkZWcpIGJyaWdodG5lc3MoMTAyJSlcXG4gICAgY29udHJhc3QoMTAzJSk7XFxufVxcblxcbi5yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLnN1bnJpc2UsXFxuLnN1bnNldCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcbi8qIEPCsCB0byBGIMKwIFNXaVRDSCAqL1xcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgd2lkdGg6IDI2cHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59XFxuXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcblxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIC8qIHBhZGRpbmctcmlnaHQ6IDE1cHg7ICovXFxuICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xcbn1cXG4uY2Vsc2l1cyxcXG4uZmFocmVuaGVpdCB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWFyY2hpdm8pO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAuc3dpdGNoLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIH1cXG4gIGh0bWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJtYWluIGV4dHJhXFxcIlxcbiAgICAgIFxcXCJib3R0b20gYm90dG9tXFxcIjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjMzkzZDQ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuYm90dG9tIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBncmlkLWFyZWE6IGJvdHRvbTtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XFxuICB9XFxuICAuZXh0cmEtaW5mbyB7XFxuICAgIGdyaWQtYXJlYTogZXh0cmE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbiAgLmNhcmRzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm1pZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgfVxcblxcbiAgLm1pZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVDQUF1QztFQUN2Qyx1Q0FBdUM7RUFDdkMsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQSxnQkFBZ0I7QUFDaEI7O0VBRUUsVUFBVTtFQUNWLFNBQVM7RUFDVCx3Q0FBd0M7RUFDeEMsK0JBQStCO0FBQ2pDO0FBQ0Esc0JBQXNCO0FBQ3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qjs7Ozs7R0FLQztFQUNELHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7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Q3BCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWp1bGl1czogXFxcIkp1bGl1cyBTYW5zIE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWFyY2hpdm86IFxcXCJBcmNoaXZvIE5hcnJvd1xcXCIsIHNhbnMtc2VyaWY7XFxuICAtLW9wZW5zYW5zOiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tZG9jLWhlaWdodDogMTAwJTtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLyogLy8vLy8vLy8vLy8gKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIGhlaWdodDogMTAwdmg7IGZhbGxiYWNrIGZvciBKcyBsb2FkICovXFxuICAvKiBoZWlnaHQ6IHZhcigtLWRvYy1oZWlnaHQpOyAqL1xcbn1cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLyAqL1xcbmJvZHkge1xcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgYmFja2dyb3VuZDogcmdiKDMxLCAyMywgMTcwKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTgwZGVnLFxcbiAgICByZ2IoMzEsIDIzLCAxNzApIDAlLFxcbiAgICByZ2JhKDY2LCA2NiwgMjI2LCAxKSAzNSUsXFxuICAgIHJnYmEoMCwgMjEyLCAyNTUsIDEpIDEwMCVcXG4gICk7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICBiYWNrZ3JvdW5kOiAjMzE3YmRiO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAvKiBjb2xvcjogd2hpdGU7ICovXFxufVxcblxcbi5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBoZWlnaHQ6IHZhcigtLWRvYy1oZWlnaHQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9wLFxcbi5taWQge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9wIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9wLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTEsIDE1MSwgMTUxKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM1LCAyMDYsIDIzNSwgMC44KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNTBweCAtMTJweCBpbnNldCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDI2cHggLTE4cHggaW5zZXQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1hcmNoaXZvKTtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIHBhZGRpbmctbGVmdDogMC4yZW07XFxufVxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5pbnB1dDphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogLmJ0biB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn0gKi9cXG5cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBidXR0b247XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZDQ3O1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci13aWR0aDogMCAwIDRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIG1hcmdpbjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjJzO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbmJ1dHRvbjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzFjYjBmNjsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNkNDc7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAgNHB4O1xcbiAgYm90dG9tOiAtNHB4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuYnV0dG9uOm1haW4sXFxuYnV0dG9uOmZvY3VzIHtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbn1cXG5cXG5idXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbmJ1dHRvbjphY3RpdmU6YWZ0ZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMHB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXG5cXG4ubG9jYXRpb24taWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gIC8qIGxlZnQ6IDVweDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1cHg7XFxuICBib3R0b206IDA7ICovXFxuICAvKiBtYXJnaW46IGF1dG87ICovXFxufVxcblxcbi5jaXR5LW5hbWUge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWFyY2hpdm8pO1xcbn1cXG5cXG4ubWlkIHtcXG4gIC8qIG1hcmdpbi10b3A6IDEwcHg7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYmxvY2s6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcblxcbi50b3AsXFxuLm1pZCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICBmb250LXNpemU6IDEyNHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW5zYW5zKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDIwJSxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXFxuICApO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBsaW5lLWhlaWdodDogMC44O1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxufVxcblxcbi5kYXRlLXRlbXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmRhdGV0aW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWp1bGl1cyk7XFxufVxcblxcbi5mZWVscy1saWtlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1qdWxpdXMpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cXG59XFxuXFxuLnRlbXAtY29udGFpbmVyIHtcXG4gIC8qIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uc3ltYm9sIHtcXG4gIGZvbnQtc2l6ZTogODJweDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi53ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1qdWxpdXMpO1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogMTE2cHg7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZy1ibG9jazogMzBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHNreWJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1hcmNoaXZvKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNTBweCAtMTJweCBpbnNldCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDI2cHggLTE4cHggaW5zZXQ7XFxufVxcbi5ib3R0b20gPiBwIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogdmFyKC0tYXJjaGl2byk7XFxufVxcbi5jYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIC8qIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNTBweCAtMTJweCBpbnNldCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDI2cHggLTE4cHggaW5zZXQ7ICovXFxufVxcblxcbi53ZWF0aGVyLWljb24ge1xcbiAgd2lkdGg6IDg0cHg7XFxuICAvKiB3aWR0aDogNDBweDsgKi9cXG59XFxuXFxuLnRpbWUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW5zYW5zKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi50ZW1wLXNtYWxsIHtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5leHRyYS1pbmZvIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgLyogcGFkZGluZzogNTBweDsgKi9cXG4gIGdhcDogMTVweDtcXG4gIHJvdy1nYXA6IDMwcHg7XFxuICAvKiBib3JkZXItYmxvY2s6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gIC8qIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgd2hpdGU7ICovXFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogIzM5M2Q0NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxhYmVsLXNwYW4tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBwYWRkaW5nOiAyMHB4IDEwcHg7ICovXFxuXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubGFiZWwtc3BhbiB7XFxuICBmb250LWZhbWlseTogdmFyKC0tb3BlbnNhbnMpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHNreWJsdWU7XFxufVxcblxcbi5leHRyYS1pbmZvLXNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW5zYW5zKTtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXG59XFxuXFxuLndoaXRlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDYlKSBodWUtcm90YXRlKDE2M2RlZykgYnJpZ2h0bmVzcygxMDIlKVxcbiAgICBjb250cmFzdCgxMDMlKTtcXG59XFxuXFxuLnJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uc3VucmlzZSxcXG4uc3Vuc2V0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxuLyogQ8KwIHRvIEYgwrAgU1dpVENIICovXFxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyICovXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NmYzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxuXFxuLnN3aXRjaC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogcGFkZGluZy1yaWdodDogMTVweDsgKi9cXG4gIHBhZGRpbmctYmxvY2s6IDIwcHg7XFxufVxcbi5jZWxzaXVzLFxcbi5mYWhyZW5oZWl0IHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tYXJjaGl2byk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIC5zd2l0Y2gtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgfVxcbiAgaHRtbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICB9XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgXFxcIm1haW4gZXh0cmFcXFwiXFxuICAgICAgXFxcImJvdHRvbSBib3R0b21cXFwiO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICMzOTNkNDc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5ib3R0b20ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGdyaWQtYXJlYTogYm90dG9tO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcXG4gIH1cXG4gIC5leHRyYS1pbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiBleHRyYTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuICAuY2FyZHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubWlkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICB9XFxuXFxuICAubWlkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExvY2F0aW9uSWNvbiBmcm9tIFwiLi9pY29ucy9tYXAtbWFya2VyLXNvbGlkLnN2Z1wiO1xuY29uc3QgbG9jYXRpb25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1pY29uXCIpO1xubG9jYXRpb25JY29uLnNyYyA9IExvY2F0aW9uSWNvbjtcbi8vIGltcG9ydCBnZXRVc2VyTG9jYXRpb24gZnJvbSBcIi4vZ2VvbG9jYXRpb25cIjtcblxuY29uc3QgYXBwID0ge1xuICBpbml0OiAoKSA9PiB7XG4gICAgYXBwLnNob3dDdXJyZW50V2VhdGhlcihcIklhc2lcIiwgXCJtZXRyaWNcIik7XG4gICAgYXBwLnNob3dGb3JlY2FzdChcIklhc2lcIiwgXCJtZXRyaWNcIik7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGFwcC5oYW5kbGVDaGFuZ2UoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5jaGVja2VkKTtcbiAgICB9KTtcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ0blwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG4gICAgaW5wdXQudmFsdWUgPSBcIklhc2lcIjtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBcIkVudGVyXCIga2V5IG9uIHRoZSBrZXlib2FyZFxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgZGVmYXVsdCBhY3Rpb24sIGlmIG5lZWRlZFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBidXR0b24gZWxlbWVudCB3aXRoIGEgY2xpY2tcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5cIikuY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFpbnB1dC52YWx1ZSkgcmV0dXJuO1xuICAgICAgLy8gYXBwLmdldEZvcmVjYXN0KGlucHV0LnZhbHVlKTtcblxuICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgYXBwLnNob3dDdXJyZW50V2VhdGhlcihpbnB1dC52YWx1ZSwgXCJpbXBlcmlhbFwiKTtcbiAgICAgICAgYXBwLnNob3dGb3JlY2FzdChpbnB1dC52YWx1ZSwgXCJpbXBlcmlhbFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2tib3guY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgYXBwLnNob3dDdXJyZW50V2VhdGhlcihpbnB1dC52YWx1ZSwgXCJtZXRyaWNcIik7XG4gICAgICAgIGFwcC5zaG93Rm9yZWNhc3QoaW5wdXQudmFsdWUsIFwibWV0cmljXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZUNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgYXBwLnNob3dDdXJyZW50V2VhdGhlcihpbnB1dC52YWx1ZSwgXCJpbXBlcmlhbFwiKTtcbiAgICAgIGFwcC5zaG93Rm9yZWNhc3QoaW5wdXQudmFsdWUsIFwiaW1wZXJpYWxcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcC5zaG93Q3VycmVudFdlYXRoZXIoaW5wdXQudmFsdWUsIFwibWV0cmljXCIpO1xuICAgICAgYXBwLnNob3dGb3JlY2FzdChpbnB1dC52YWx1ZSwgXCJtZXRyaWNcIik7XG4gICAgfVxuICB9LFxuXG4gIHNob3dDdXJyZW50V2VhdGhlcjogYXN5bmMgKGNpdHksIHVuaXQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktbmFtZVwiKTtcbiAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZVwiKTtcbiAgICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1kZXNjcmlwdGlvblwiKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmN1cnJlbnQtd2VhdGhlci1pY29uXCJcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZXRpbWVcIik7XG4gICAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzLWxpa2VcIik7XG4gICAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG4gICAgICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlc3N1cmVcIik7XG4gICAgICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5yaXNlXCIpO1xuICAgICAgY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5zZXRcIik7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IGF3YWl0IGFwcC5nZXRDdXJyZW50V2VhdGhlcihjaXR5LCB1bml0KTtcblxuICAgICAgaWYgKGN1cnJlbnRXZWF0aGVyRGF0YSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNpdHkgbmFtZVwiKTtcbiAgICAgIGNvbnN0IHdlYXRoZXJDbGFzcyA9IGN1cnJlbnRXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW4udG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRTcmMgPSBgLi4vc3JjL2ltYWdlcy8ke3dlYXRoZXJDbGFzc30uanBnYDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBcImJvZHlcIlxuICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmFja2dyb3VuZFNyY30pYDtcblxuICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlckRhdGEubmFtZTtcbiAgICAgIGRhdGV0aW1lLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KTtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke01hdGgucm91bmQoXG4gICAgICAgIE51bWJlcihjdXJyZW50V2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlKVxuICAgICAgKX3CsGA7XG4gICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgIE51bWJlcihjdXJyZW50V2VhdGhlckRhdGEubWFpbi50ZW1wKVxuICAgICAgKX1gO1xuICAgICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgICAgY3VycmVudFdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICBjdXJyZW50V2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Y3VycmVudFdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbn1ANHgucG5nYDtcblxuICAgICAgY29uc3Qgc3VucmlzZVRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgY3VycmVudFdlYXRoZXJEYXRhLnN5cy5zdW5yaXNlICogMTAwMFxuICAgICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoW1wiZW4tR0JcIl0sIHtcbiAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc3Vuc2V0VGltZSA9IG5ldyBEYXRlKFxuICAgICAgICBjdXJyZW50V2VhdGhlckRhdGEuc3lzLnN1bnNldCAqIDEwMDBcbiAgICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKFtcImVuLUdCXCJdLCB7XG4gICAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSk7XG5cbiAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHl9JWA7XG4gICAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlfWA7XG4gICAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gc3VucmlzZVRpbWU7XG4gICAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBzdW5zZXRUaW1lO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9LFxuXG4gIHNob3dGb3JlY2FzdDogYXN5bmMgKGNpdHksIHVuaXQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FyZHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXTtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgYXBwLmdldEZvcmVjYXN0KGNpdHksIHVuaXQpO1xuICAgICAgaWYgKHdlYXRoZXJEYXRhID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2l0eSBuYW1lXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoXG4gICAgICAgICAgTnVtYmVyKGAke3dlYXRoZXJEYXRhLmxpc3RbaV0uZHR9MDAwYClcbiAgICAgICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1HQlwiLCB7IGhvdXI6IFwiMi1kaWdpdFwiLCBtaW51dGU6IFwiMi1kaWdpdFwiIH0pO1xuXG4gICAgICAgIGNhcmRzW2ldLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInRpbWVcIj4ke3RpbWV9PC9zcGFuPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7XG4gICAgICAgICAgd2VhdGhlckRhdGEubGlzdFtpXS53ZWF0aGVyWzBdLmljb25cbiAgICAgICAgfUAyeC5wbmdcIiBhbHQ9XCIke1xuICAgICAgICAgIHdlYXRoZXJEYXRhLmxpc3RbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgICB9XCIgY2xhc3M9XCJ3ZWF0aGVyLWljb25cIiAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXAtc21hbGxcIj4ke01hdGgucm91bmQoXG4gICAgICAgICAgTnVtYmVyKHdlYXRoZXJEYXRhLmxpc3RbaV0ubWFpbi50ZW1wKVxuICAgICAgICApfcKwPC9zcGFuPmA7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0Q3VycmVudFdlYXRoZXI6IGFzeW5jIChjaXR5LCB1bml0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9YzczOTE2ZjA3MWUxN2M3OTI2MzBlNTNjMTQxMjFlMDQmdW5pdHM9JHt1bml0fWAsXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICAgKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2l0eSBuYW1lXCIpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9LFxuXG4gIGdldEZvcmVjYXN0OiBhc3luYyAoY2l0eSwgdW5pdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZhcHBpZD1jNzM5MTZmMDcxZTE3Yzc5MjYzMGU1M2MxNDEyMWUwNCZ1bml0cz0ke3VuaXR9YCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgICApO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjaXR5IG5hbWVcIik7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH0sXG59O1xuXG5jb25zdCBkb2N1bWVudEhlaWdodCA9ICgpID0+IHtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBkb2Muc3R5bGUuc2V0UHJvcGVydHkoXCItLWRvYy1oZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YCk7XG59O1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZG9jdW1lbnRIZWlnaHQpO1xuZG9jdW1lbnRIZWlnaHQoKTtcblxuYXBwLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==