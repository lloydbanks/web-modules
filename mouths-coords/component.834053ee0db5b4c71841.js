(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component/index.tsx":
/*!*********************************!*\
  !*** ./src/component/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ RibbonMouthsCoords
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consta_uikit_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @consta/uikit/Modal */ "./node_modules/@consta/uikit/__internal__/src/components/Modal/Modal.js");
/* harmony import */ var _consta_uikit_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @consta/uikit/Text */ "./node_modules/@consta/uikit/__internal__/src/components/Text/Text.js");
var _jsxFileName = "C:\\dev\\grad-brd\\gpn-ds-grad-fe\\modules\\ribbon-modal\\src\\component\\index.tsx";



function RibbonMouthsCoords() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    onClick: function onClick() {
      return setIsOpen(true);
    },
    className: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_consta_uikit_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    isOpen: isOpen,
    hasOverlay: true,
    onOverlayClick: function onOverlayClick() {
      return setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_consta_uikit_Text__WEBPACK_IMPORTED_MODULE_2__.Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443\u0441\u0442\u044C\u0435\u0432 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442")));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Modal/Modal.css":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Modal/Modal.css ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding: var(--space-5xl);\n}\n\n.Modal-Window {\n  z-index: 100;\n  overflow: auto;\n  min-width: 400px;\n  max-width: 90%;\n  min-height: 200px;\n  max-height: 90%;\n  background-color: var(--color-bg-default);\n  border-radius: var(--control-radius);\n  -webkit-box-shadow: 0 4px 12px rgba(var(--color-nums-shadow), 0.08), 0 9px 24px rgba(var(--color-nums-shadow), 0.16);\n  box-shadow: 0 4px 12px rgba(var(--color-nums-shadow), 0.08), 0 9px 24px rgba(var(--color-nums-shadow), 0.16);\n}\n\n.Modal-Window_position_center {\n  -ms-flex-item-align: safe center;\n  align-self: safe center;\n}\n\n.Modal-Window_position_top {\n  -ms-flex-item-align: safe flex-start;\n  align-self: safe flex-start;\n}\n\n.Modal-Overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  background: var(--color-bg-tone);\n  border: none;\n}\n\n.Modal_animate_appear,\n.Modal_animate_enter,\n.Modal_animate_exit,\n.Modal_animate_appearActive,\n.Modal_animate_enterActive,\n.Modal_animate_exitActive {\n  -webkit-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease;\n}\n\n.Modal_animate_appear,\n.Modal_animate_enter {\n  opacity: 0;\n}\n\n.Modal_animate_appearActive,\n.Modal_animate_enterActive {\n  opacity: 1;\n}\n\n.Modal_animate_exit {\n  opacity: 1;\n}\n\n.Modal_animate_exitActive {\n  opacity: 0;\n}", "",{"version":3,"sources":["webpack://./node_modules/@consta/uikit/__internal__/src/components/Modal/Modal.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,OAAO;EACP,SAAS;EACT,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,wBAAwB;EACxB,qBAAqB;EACrB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,yCAAyC;EACzC,oCAAoC;EACpC,oHAAoH;EACpH,4GAA4G;AAC9G;;AAEA;EACE,gCAAgC;EAChC,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;EACpC,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,UAAU;EACV,gCAAgC;EAChC,YAAY;AACd;;AAEA;;;;;;EAME,qCAAqC;EACrC,6BAA6B;AAC/B;;AAEA;;EAEE,UAAU;AACZ;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ","sourcesContent":[".Modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding: var(--space-5xl);\n}\n\n.Modal-Window {\n  z-index: 100;\n  overflow: auto;\n  min-width: 400px;\n  max-width: 90%;\n  min-height: 200px;\n  max-height: 90%;\n  background-color: var(--color-bg-default);\n  border-radius: var(--control-radius);\n  -webkit-box-shadow: 0 4px 12px rgba(var(--color-nums-shadow), 0.08), 0 9px 24px rgba(var(--color-nums-shadow), 0.16);\n  box-shadow: 0 4px 12px rgba(var(--color-nums-shadow), 0.08), 0 9px 24px rgba(var(--color-nums-shadow), 0.16);\n}\n\n.Modal-Window_position_center {\n  -ms-flex-item-align: safe center;\n  align-self: safe center;\n}\n\n.Modal-Window_position_top {\n  -ms-flex-item-align: safe flex-start;\n  align-self: safe flex-start;\n}\n\n.Modal-Overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  background: var(--color-bg-tone);\n  border: none;\n}\n\n.Modal_animate_appear,\n.Modal_animate_enter,\n.Modal_animate_exit,\n.Modal_animate_appearActive,\n.Modal_animate_enterActive,\n.Modal_animate_exitActive {\n  -webkit-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease;\n}\n\n.Modal_animate_appear,\n.Modal_animate_enter {\n  opacity: 0;\n}\n\n.Modal_animate_appearActive,\n.Modal_animate_enterActive {\n  opacity: 1;\n}\n\n.Modal_animate_exit {\n  opacity: 1;\n}\n\n.Modal_animate_exitActive {\n  opacity: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Text/Text.css":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Text/Text.css ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Text {\n  line-height: var(--line-height-text-m);\n}\n\n.Text_font_primary {\n  font-family: var(--font-primary);\n}\n\n.Text_font_mono {\n  font-family: var(--font-mono);\n}\n\n.Text_align_center {\n  text-align: center;\n}\n\n.Text_align_left {\n  text-align: left;\n}\n\n.Text_align_right {\n  text-align: right;\n}\n\n.Text_decoration_underline {\n  text-decoration: underline;\n}\n\n.Text_display_block {\n  display: block;\n}\n\n.Text_display_inlineBlock {\n  display: inline-block;\n}\n\n.Text_display_inline {\n  display: inline;\n}\n\n.Text_size_2xs {\n  font-size: var(--size-text-2xs);\n}\n\n.Text_size_xs {\n  font-size: var(--size-text-xs);\n}\n\n.Text_size_s {\n  font-size: var(--size-text-s);\n}\n\n.Text_size_m {\n  font-size: var(--size-text-m);\n}\n\n.Text_size_l {\n  font-size: var(--size-text-l);\n}\n\n.Text_size_xl {\n  font-size: var(--size-text-xl);\n}\n\n.Text_size_2xl {\n  font-size: var(--size-text-2xl);\n}\n\n.Text_size_3xl {\n  font-size: var(--size-text-3xl);\n}\n\n.Text_size_4xl {\n  font-size: var(--size-text-4xl);\n}\n\n.Text_size_5xl {\n  font-size: var(--size-text-5xl);\n}\n\n.Text_size_6xl {\n  font-size: var(--size-text-6xl);\n}\n\n.Text_lineHeight_xs {\n  line-height: var(--line-height-text-xs);\n}\n\n.Text_lineHeight_2xs {\n  line-height: var(--line-height-text-2xs);\n}\n\n.Text_lineHeight_s {\n  line-height: var(--line-height-text-s);\n}\n\n.Text_lineHeight_m {\n  line-height: var(--line-height-text-m);\n}\n\n.Text_lineHeight_l {\n  line-height: var(--line-height-text-l);\n}\n\n.Text_spacing_xs {\n  letter-spacing: 0.06em;\n}\n\n.Text_spacing_s {\n  letter-spacing: 0.1em;\n}\n\n.Text_spacing_m {\n  letter-spacing: 0.14em;\n}\n\n.Text_spacing_l {\n  letter-spacing: 0.2em;\n}\n\n.Text_fontStyle_italic {\n  font-style: italic;\n}\n\n.Text_transform_uppercase {\n  text-transform: uppercase;\n}\n\n.Text_type_blockquote {\n  margin-bottom: var(--space-l);\n  margin-left: var(--space-4xl);\n  padding-left: var(--space-m);\n  border-left: var(--space-xxs) solid var(--color-bg-brand);\n}\n\n.Text_type_h1,\n.Text_type_h2,\n.Text_type_h3 {\n  margin: 2em 0 1em;\n}\n\n.Text_type_p {\n  margin: 0 0 0.9em;\n}\n\n.Text_type_p:not(:last-child) {\n  margin-bottom: 0;\n}\n\n.Text_view_alert {\n  color: var(--color-typo-alert);\n}\n\n.Text_view_brand {\n  color: var(--color-typo-brand);\n}\n\n.Text_view_ghost {\n  color: var(--color-typo-ghost);\n}\n\n.Text_view_link {\n  color: var(--color-typo-link);\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n\n.Text_view_link :hover {\n  color: var(--color-typo-link-hover);\n}\n\n.Text_view_linkMinor {\n  color: var(--color-typo-link-minor);\n  text-decoration: none;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n\n.Text_view_linkMinor :hover {\n  color: var(--color-typo-link-hover);\n}\n\n.Text_view_primary {\n  color: var(--color-typo-primary);\n}\n\n.Text_view_secondary {\n  color: var(--color-typo-secondary);\n}\n\n.Text_view_success {\n  color: var(--color-typo-success);\n}\n\n.Text_view_warning {\n  color: var(--color-typo-warning);\n}\n\n.Text_weight_thin {\n  font-weight: 100;\n}\n\n.Text_weight_light {\n  font-weight: 300;\n}\n\n.Text_weight_regular {\n  font-weight: normal;\n}\n\n.Text_weight_semibold {\n  font-weight: 600;\n}\n\n.Text_weight_bold {\n  font-weight: bold;\n}\n\n.Text_weight_black {\n  font-weight: 900;\n}\n\n.Text_width_default {\n  max-width: 75ch;\n}", "",{"version":3,"sources":["webpack://./node_modules/@consta/uikit/__internal__/src/components/Text/Text.css"],"names":[],"mappings":"AAAA;EACE,sCAAsC;AACxC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;EAC7B,6BAA6B;EAC7B,4BAA4B;EAC5B,yDAAyD;AAC3D;;AAEA;;;EAGE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,qBAAqB;EACrB,eAAe;EACf,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;EACnC,qBAAqB;EACrB,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB","sourcesContent":[".Text {\n  line-height: var(--line-height-text-m);\n}\n\n.Text_font_primary {\n  font-family: var(--font-primary);\n}\n\n.Text_font_mono {\n  font-family: var(--font-mono);\n}\n\n.Text_align_center {\n  text-align: center;\n}\n\n.Text_align_left {\n  text-align: left;\n}\n\n.Text_align_right {\n  text-align: right;\n}\n\n.Text_decoration_underline {\n  text-decoration: underline;\n}\n\n.Text_display_block {\n  display: block;\n}\n\n.Text_display_inlineBlock {\n  display: inline-block;\n}\n\n.Text_display_inline {\n  display: inline;\n}\n\n.Text_size_2xs {\n  font-size: var(--size-text-2xs);\n}\n\n.Text_size_xs {\n  font-size: var(--size-text-xs);\n}\n\n.Text_size_s {\n  font-size: var(--size-text-s);\n}\n\n.Text_size_m {\n  font-size: var(--size-text-m);\n}\n\n.Text_size_l {\n  font-size: var(--size-text-l);\n}\n\n.Text_size_xl {\n  font-size: var(--size-text-xl);\n}\n\n.Text_size_2xl {\n  font-size: var(--size-text-2xl);\n}\n\n.Text_size_3xl {\n  font-size: var(--size-text-3xl);\n}\n\n.Text_size_4xl {\n  font-size: var(--size-text-4xl);\n}\n\n.Text_size_5xl {\n  font-size: var(--size-text-5xl);\n}\n\n.Text_size_6xl {\n  font-size: var(--size-text-6xl);\n}\n\n.Text_lineHeight_xs {\n  line-height: var(--line-height-text-xs);\n}\n\n.Text_lineHeight_2xs {\n  line-height: var(--line-height-text-2xs);\n}\n\n.Text_lineHeight_s {\n  line-height: var(--line-height-text-s);\n}\n\n.Text_lineHeight_m {\n  line-height: var(--line-height-text-m);\n}\n\n.Text_lineHeight_l {\n  line-height: var(--line-height-text-l);\n}\n\n.Text_spacing_xs {\n  letter-spacing: 0.06em;\n}\n\n.Text_spacing_s {\n  letter-spacing: 0.1em;\n}\n\n.Text_spacing_m {\n  letter-spacing: 0.14em;\n}\n\n.Text_spacing_l {\n  letter-spacing: 0.2em;\n}\n\n.Text_fontStyle_italic {\n  font-style: italic;\n}\n\n.Text_transform_uppercase {\n  text-transform: uppercase;\n}\n\n.Text_type_blockquote {\n  margin-bottom: var(--space-l);\n  margin-left: var(--space-4xl);\n  padding-left: var(--space-m);\n  border-left: var(--space-xxs) solid var(--color-bg-brand);\n}\n\n.Text_type_h1,\n.Text_type_h2,\n.Text_type_h3 {\n  margin: 2em 0 1em;\n}\n\n.Text_type_p {\n  margin: 0 0 0.9em;\n}\n\n.Text_type_p:not(:last-child) {\n  margin-bottom: 0;\n}\n\n.Text_view_alert {\n  color: var(--color-typo-alert);\n}\n\n.Text_view_brand {\n  color: var(--color-typo-brand);\n}\n\n.Text_view_ghost {\n  color: var(--color-typo-ghost);\n}\n\n.Text_view_link {\n  color: var(--color-typo-link);\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n\n.Text_view_link :hover {\n  color: var(--color-typo-link-hover);\n}\n\n.Text_view_linkMinor {\n  color: var(--color-typo-link-minor);\n  text-decoration: none;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n\n.Text_view_linkMinor :hover {\n  color: var(--color-typo-link-hover);\n}\n\n.Text_view_primary {\n  color: var(--color-typo-primary);\n}\n\n.Text_view_secondary {\n  color: var(--color-typo-secondary);\n}\n\n.Text_view_success {\n  color: var(--color-typo-success);\n}\n\n.Text_view_warning {\n  color: var(--color-typo-warning);\n}\n\n.Text_weight_thin {\n  font-weight: 100;\n}\n\n.Text_weight_light {\n  font-weight: 300;\n}\n\n.Text_weight_regular {\n  font-weight: normal;\n}\n\n.Text_weight_semibold {\n  font-weight: 600;\n}\n\n.Text_weight_bold {\n  font-weight: bold;\n}\n\n.Text_weight_black {\n  font-weight: 900;\n}\n\n.Text_width_default {\n  max-width: 75ch;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Theme {\n  --graphics-size-xs: 12px;\n  --graphics-size-s: 16px;\n  --graphics-size-m: 24px;\n  --graphics-size-l: 32px;\n  --graphics-size-xl: 40px;\n  --graphics-size-2xl: 60px;\n  --graphics-size-3xl: 80px;\n  --graphics-size-4xl: 120px;\n}\n\n.Theme *::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.Theme *::-webkit-scrollbar-track {\n  background-color: var(--color-scroll-bg);\n}\n\n.Theme *::-webkit-scrollbar-corner {\n  background-color: var(--color-scroll-bg);\n}\n\n.Theme *::-webkit-scrollbar-thumb {\n  background-color: var(--color-scroll-thumb);\n  border-radius: 4px;\n}\n\n.Theme *::-webkit-scrollbar-thumb:hover {\n  background-color: var(--color-scroll-thumb-hover);\n}", "",{"version":3,"sources":["webpack://./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,wBAAwB;EACxB,yBAAyB;EACzB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,iDAAiD;AACnD","sourcesContent":[".Theme {\n  --graphics-size-xs: 12px;\n  --graphics-size-s: 16px;\n  --graphics-size-m: 24px;\n  --graphics-size-l: 32px;\n  --graphics-size-xl: 40px;\n  --graphics-size-2xl: 60px;\n  --graphics-size-3xl: 80px;\n  --graphics-size-4xl: 120px;\n}\n\n.Theme *::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.Theme *::-webkit-scrollbar-track {\n  background-color: var(--color-scroll-bg);\n}\n\n.Theme *::-webkit-scrollbar-corner {\n  background-color: var(--color-scroll-bg);\n}\n\n.Theme *::-webkit-scrollbar-thumb {\n  background-color: var(--color-scroll-thumb);\n  border-radius: 4px;\n}\n\n.Theme *::-webkit-scrollbar-thumb:hover {\n  background-color: var(--color-scroll-thumb-hover);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* Базовые цвета от которых выстраивается вся политра */\n/* Базовый цвет содержимого, от которого выстраиваются цвета текста, иконок, ... */\n/* Базовый цвет поверхностей */\n/* Проектный цвет, от которого выстраивают акцентные состояния */\n/* Тонирующий цвет, от которого выстраиватся бордеры, паранджа, ... */\n/* Цвет ссылок и контролов, от которого выстраиваются все их состояния */\n/* Цвет системнный */\n/* Цвет успеха */\n/* Цвет ошибки */\n/* Цвет предупреждения */\n/* Цвет осторожности */\n/* Цвет нейтральный */\n/* stylelint-disable */\n.Theme_color_gpnDark {\n  /* //////////////////////////////\n  // Цвета фонов /////////////// */\n  --color-bg-default: rgb(34, 39, 43);\n  /* Цвет дефолта */\n  --color-bg-secondary: rgb(22, 26, 29);\n  /* Дополнительный цвет фона */\n  --color-bg-brand: rgb(0, 113, 178);\n  /* Цвет фона брендированый */\n  --color-bg-link: rgb(0, 120, 210);\n  /* Цвет фона ссылки */\n  --color-bg-border: rgba(255, 255, 255, 0.2);\n  /* Цвет границ */\n  --color-bg-stripe: rgba(246, 251, 253, 0.06);\n  /* Цвет зебры */\n  --color-bg-ghost: rgba(246, 251, 253, 0.1);\n  /* Цвет затенения */\n  --color-bg-tone: rgba(6, 20, 25, 0.85);\n  /* Цвет паранджи */\n  --color-bg-soft: rgba(255, 255, 255, 0.9);\n  /* Цвет молока */\n  --color-bg-system: rgb(75, 89, 99);\n  /* Цвет фона системнный */\n  --color-bg-normal: rgb(10, 165, 255);\n  /* Цвет фона нейтральный */\n  --color-bg-success: rgb(34, 195, 142);\n  /* Цвет фона успеха */\n  --color-bg-caution: rgb(242, 201, 76);\n  /* Цвет фона осторожности */\n  --color-bg-warning: rgb(243, 139, 0);\n  /* Цвет фона предупреждения */\n  --color-bg-alert: rgb(254, 67, 67);\n  /* Цвет фона ошибки */\n  --color-bg-critical: rgb(51, 0, 15);\n  /* Цвет фона системнный */\n  /* //////////////////////////////\n  // Цвета текста ////////////// */\n  --color-typo-primary: rgb(250, 250, 250);\n  /* Цвет основного текста */\n  --color-typo-secondary: rgba(255, 255, 255, 0.6);\n  /* Цвет второстепенного текста */\n  --color-typo-ghost: rgba(255, 255, 255, 0.3);\n  /* Цвет дополнительного текста */\n  --color-typo-brand: rgb(0, 113, 178);\n  /* Цвет брендового текста */\n  --color-typo-system: rgb(94, 121, 141);\n  /* Цвет фона системнный */\n  --color-typo-normal: rgb(0, 155, 245);\n  /* Цвет фона нейтральный */\n  --color-typo-success: rgb(15, 174, 121);\n  /* Цвет текста успеха */\n  --color-typo-caution: rgb(248, 199, 53);\n  /* Цвет текста осторожности */\n  --color-typo-warning: rgb(230, 130, 0);\n  /* Цвет текста предупреждения */\n  --color-typo-alert: rgb(247, 59, 59);\n  /* Цвет текста ошибки */\n  --color-typo-critical: rgb(97, 0, 29);\n  /* Цвет фона системнный */\n  --color-typo-link: rgb(15, 159, 255);\n  /* Цвет основной ссылки */\n  --color-typo-link-minor: rgb(111, 165, 200);\n  /* Цвет второстепенной ссылки */\n  --color-typo-link-hover: rgb(87, 188, 255);\n  /* Цвет ховера ссылки */\n  --color-nums-shadow: 0, 0, 0;\n  /* Значения RGB для указания теней в конструкции rgba(R,G,B, alpha) */\n  /* //////////////////////////////\n  // Цвета скроллбара ////////////// */\n  --color-scroll-bg: rgba(246, 251, 253, 0.06);\n  --color-scroll-thumb: rgba(246, 251, 253, 0.24);\n  --color-scroll-thumb-hover: rgba(246, 251, 253, 0.32);\n  /* /////////////////////////////\n  // Цвета контролов /////////// */\n  /* Default */\n  --color-control-bg-default: rgb(34, 39, 43);\n  /* Цвет фона контрола */\n  --color-control-typo-default: rgba(255, 255, 255, 0.8);\n  /* Цвет основного текста контрола */\n  --color-control-typo-placeholder: rgba(255, 255, 255, 0.35);\n  /* Цвет плейсхолдера контрола */\n  --color-control-bg-border-default: rgba(246, 251, 253, 0.28);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-default-hover: rgba(246, 251, 253, 0.52);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-bg-border-focus: rgb(5, 147, 255);\n  /* Цвет аутлайна контролов при фокусе */\n  /* TODO заменить на правило целиком */\n  --color-control-bg-focus: rgba(0, 120, 210, 0.4);\n  /* Цвет тени в состонии фокуса */\n  --color-control-bg-active: rgba(0, 120, 210, 0.7);\n  /* Цвет тени в состонии нажатия  */\n  /* Primary */\n  --color-control-bg-primary: rgb(0, 120, 210);\n  /* Цвет фона активного контрола */\n  --color-control-bg-primary-hover: rgb(0, 145, 255);\n  /* Цвет фона активного контрола по ховеру */\n  --color-control-typo-primary: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  --color-control-typo-primary-hover: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  /* Secondary */\n  --color-control-bg-secondary: rgba(34, 39, 43, 0);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary: rgb(0, 120, 210);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary-hover: rgb(0, 145, 255);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-typo-secondary: rgb(15, 159, 255);\n  /* Цвет второстепеного текста контрола */\n  --color-control-typo-secondary-hover: rgb(87, 188, 255);\n  /* Цвет акцентного текста */\n  /* Ghost */\n  --color-control-bg-ghost: rgba(250, 250, 250, 0.16);\n  /* Цвет фона дополнительного контрола */\n  --color-control-bg-ghost-hover: rgba(250, 250, 250, 0.23);\n  /* Цвет фона дополнительного контрола по ховеру */\n  --color-control-typo-ghost: rgba(255, 255, 255, 0.75);\n  /* Цвет дополнительного текста контрола */\n  --color-control-typo-ghost-hover: rgba(255, 255, 255, 0.9);\n  /* Цвет акцентного текста */\n  /* Clear */\n  --color-control-bg-clear: rgba(250, 250, 250, 0);\n  /* Цвет фона чистого контрола */\n  --color-control-bg-clear-hover: rgba(250, 250, 250, 0.23);\n  /* Цвет фона чистого контрола по ховеру */\n  --color-control-typo-clear: rgba(255, 255, 255, 0.75);\n  /* Цвет акцентного текста */\n  --color-control-typo-clear-hover: rgba(255, 255, 255, 0.9);\n  /* Цвет акцентного текста */\n  /* Disable */\n  --color-control-bg-disable: rgba(250, 250, 250, 0.16);\n  /* Цвет фона неактивного контрола */\n  --color-control-bg-border-disable: rgba(250, 250, 250, 0);\n  /* Цвет фона бордеров неактивного контрола */\n  --color-control-typo-disable: rgba(255, 255, 255, 0.24);\n  /* Цвет основного текста неактивного контрола */\n}\n\n/* stylelint-enable */", "",{"version":3,"sources":["webpack://./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB,uDAAuD;AACvD,kFAAkF;AAClF,8BAA8B;AAC9B,gEAAgE;AAChE,qEAAqE;AACrE,wEAAwE;AACxE,oBAAoB;AACpB,gBAAgB;AAChB,gBAAgB;AAChB,wBAAwB;AACxB,sBAAsB;AACtB,qBAAqB;AACrB,sBAAsB;AACtB;EACE;kCACgC;EAChC,mCAAmC;EACnC,iBAAiB;EACjB,qCAAqC;EACrC,6BAA6B;EAC7B,kCAAkC;EAClC,4BAA4B;EAC5B,iCAAiC;EACjC,qBAAqB;EACrB,2CAA2C;EAC3C,gBAAgB;EAChB,4CAA4C;EAC5C,eAAe;EACf,0CAA0C;EAC1C,mBAAmB;EACnB,sCAAsC;EACtC,kBAAkB;EAClB,yCAAyC;EACzC,gBAAgB;EAChB,kCAAkC;EAClC,yBAAyB;EACzB,oCAAoC;EACpC,0BAA0B;EAC1B,qCAAqC;EACrC,qBAAqB;EACrB,qCAAqC;EACrC,2BAA2B;EAC3B,oCAAoC;EACpC,6BAA6B;EAC7B,kCAAkC;EAClC,qBAAqB;EACrB,mCAAmC;EACnC,yBAAyB;EACzB;kCACgC;EAChC,wCAAwC;EACxC,0BAA0B;EAC1B,gDAAgD;EAChD,gCAAgC;EAChC,4CAA4C;EAC5C,gCAAgC;EAChC,oCAAoC;EACpC,2BAA2B;EAC3B,sCAAsC;EACtC,yBAAyB;EACzB,qCAAqC;EACrC,0BAA0B;EAC1B,uCAAuC;EACvC,uBAAuB;EACvB,uCAAuC;EACvC,6BAA6B;EAC7B,sCAAsC;EACtC,+BAA+B;EAC/B,oCAAoC;EACpC,uBAAuB;EACvB,qCAAqC;EACrC,yBAAyB;EACzB,oCAAoC;EACpC,yBAAyB;EACzB,2CAA2C;EAC3C,+BAA+B;EAC/B,0CAA0C;EAC1C,uBAAuB;EACvB,4BAA4B;EAC5B,qEAAqE;EACrE;sCACoC;EACpC,4CAA4C;EAC5C,+CAA+C;EAC/C,qDAAqD;EACrD;kCACgC;EAChC,YAAY;EACZ,2CAA2C;EAC3C,uBAAuB;EACvB,sDAAsD;EACtD,mCAAmC;EACnC,2DAA2D;EAC3D,+BAA+B;EAC/B,4DAA4D;EAC5D,+BAA+B;EAC/B,kEAAkE;EAClE,0CAA0C;EAC1C,iDAAiD;EACjD,uCAAuC;EACvC,qCAAqC;EACrC,gDAAgD;EAChD,gCAAgC;EAChC,iDAAiD;EACjD,kCAAkC;EAClC,YAAY;EACZ,4CAA4C;EAC5C,iCAAiC;EACjC,kDAAkD;EAClD,2CAA2C;EAC3C,gDAAgD;EAChD,2BAA2B;EAC3B,sDAAsD;EACtD,2BAA2B;EAC3B,cAAc;EACd,iDAAiD;EACjD,+BAA+B;EAC/B,qDAAqD;EACrD,+BAA+B;EAC/B,2DAA2D;EAC3D,0CAA0C;EAC1C,iDAAiD;EACjD,wCAAwC;EACxC,uDAAuD;EACvD,2BAA2B;EAC3B,UAAU;EACV,mDAAmD;EACnD,uCAAuC;EACvC,yDAAyD;EACzD,iDAAiD;EACjD,qDAAqD;EACrD,yCAAyC;EACzC,0DAA0D;EAC1D,2BAA2B;EAC3B,UAAU;EACV,gDAAgD;EAChD,+BAA+B;EAC/B,yDAAyD;EACzD,yCAAyC;EACzC,qDAAqD;EACrD,2BAA2B;EAC3B,0DAA0D;EAC1D,2BAA2B;EAC3B,YAAY;EACZ,qDAAqD;EACrD,mCAAmC;EACnC,yDAAyD;EACzD,4CAA4C;EAC5C,uDAAuD;EACvD,+CAA+C;AACjD;;AAEA,qBAAqB","sourcesContent":["@charset \"UTF-8\";\n/* Базовые цвета от которых выстраивается вся политра */\n/* Базовый цвет содержимого, от которого выстраиваются цвета текста, иконок, ... */\n/* Базовый цвет поверхностей */\n/* Проектный цвет, от которого выстраивают акцентные состояния */\n/* Тонирующий цвет, от которого выстраиватся бордеры, паранджа, ... */\n/* Цвет ссылок и контролов, от которого выстраиваются все их состояния */\n/* Цвет системнный */\n/* Цвет успеха */\n/* Цвет ошибки */\n/* Цвет предупреждения */\n/* Цвет осторожности */\n/* Цвет нейтральный */\n/* stylelint-disable */\n.Theme_color_gpnDark {\n  /* //////////////////////////////\n  // Цвета фонов /////////////// */\n  --color-bg-default: rgb(34, 39, 43);\n  /* Цвет дефолта */\n  --color-bg-secondary: rgb(22, 26, 29);\n  /* Дополнительный цвет фона */\n  --color-bg-brand: rgb(0, 113, 178);\n  /* Цвет фона брендированый */\n  --color-bg-link: rgb(0, 120, 210);\n  /* Цвет фона ссылки */\n  --color-bg-border: rgba(255, 255, 255, 0.2);\n  /* Цвет границ */\n  --color-bg-stripe: rgba(246, 251, 253, 0.06);\n  /* Цвет зебры */\n  --color-bg-ghost: rgba(246, 251, 253, 0.1);\n  /* Цвет затенения */\n  --color-bg-tone: rgba(6, 20, 25, 0.85);\n  /* Цвет паранджи */\n  --color-bg-soft: rgba(255, 255, 255, 0.9);\n  /* Цвет молока */\n  --color-bg-system: rgb(75, 89, 99);\n  /* Цвет фона системнный */\n  --color-bg-normal: rgb(10, 165, 255);\n  /* Цвет фона нейтральный */\n  --color-bg-success: rgb(34, 195, 142);\n  /* Цвет фона успеха */\n  --color-bg-caution: rgb(242, 201, 76);\n  /* Цвет фона осторожности */\n  --color-bg-warning: rgb(243, 139, 0);\n  /* Цвет фона предупреждения */\n  --color-bg-alert: rgb(254, 67, 67);\n  /* Цвет фона ошибки */\n  --color-bg-critical: rgb(51, 0, 15);\n  /* Цвет фона системнный */\n  /* //////////////////////////////\n  // Цвета текста ////////////// */\n  --color-typo-primary: rgb(250, 250, 250);\n  /* Цвет основного текста */\n  --color-typo-secondary: rgba(255, 255, 255, 0.6);\n  /* Цвет второстепенного текста */\n  --color-typo-ghost: rgba(255, 255, 255, 0.3);\n  /* Цвет дополнительного текста */\n  --color-typo-brand: rgb(0, 113, 178);\n  /* Цвет брендового текста */\n  --color-typo-system: rgb(94, 121, 141);\n  /* Цвет фона системнный */\n  --color-typo-normal: rgb(0, 155, 245);\n  /* Цвет фона нейтральный */\n  --color-typo-success: rgb(15, 174, 121);\n  /* Цвет текста успеха */\n  --color-typo-caution: rgb(248, 199, 53);\n  /* Цвет текста осторожности */\n  --color-typo-warning: rgb(230, 130, 0);\n  /* Цвет текста предупреждения */\n  --color-typo-alert: rgb(247, 59, 59);\n  /* Цвет текста ошибки */\n  --color-typo-critical: rgb(97, 0, 29);\n  /* Цвет фона системнный */\n  --color-typo-link: rgb(15, 159, 255);\n  /* Цвет основной ссылки */\n  --color-typo-link-minor: rgb(111, 165, 200);\n  /* Цвет второстепенной ссылки */\n  --color-typo-link-hover: rgb(87, 188, 255);\n  /* Цвет ховера ссылки */\n  --color-nums-shadow: 0, 0, 0;\n  /* Значения RGB для указания теней в конструкции rgba(R,G,B, alpha) */\n  /* //////////////////////////////\n  // Цвета скроллбара ////////////// */\n  --color-scroll-bg: rgba(246, 251, 253, 0.06);\n  --color-scroll-thumb: rgba(246, 251, 253, 0.24);\n  --color-scroll-thumb-hover: rgba(246, 251, 253, 0.32);\n  /* /////////////////////////////\n  // Цвета контролов /////////// */\n  /* Default */\n  --color-control-bg-default: rgb(34, 39, 43);\n  /* Цвет фона контрола */\n  --color-control-typo-default: rgba(255, 255, 255, 0.8);\n  /* Цвет основного текста контрола */\n  --color-control-typo-placeholder: rgba(255, 255, 255, 0.35);\n  /* Цвет плейсхолдера контрола */\n  --color-control-bg-border-default: rgba(246, 251, 253, 0.28);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-default-hover: rgba(246, 251, 253, 0.52);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-bg-border-focus: rgb(5, 147, 255);\n  /* Цвет аутлайна контролов при фокусе */\n  /* TODO заменить на правило целиком */\n  --color-control-bg-focus: rgba(0, 120, 210, 0.4);\n  /* Цвет тени в состонии фокуса */\n  --color-control-bg-active: rgba(0, 120, 210, 0.7);\n  /* Цвет тени в состонии нажатия  */\n  /* Primary */\n  --color-control-bg-primary: rgb(0, 120, 210);\n  /* Цвет фона активного контрола */\n  --color-control-bg-primary-hover: rgb(0, 145, 255);\n  /* Цвет фона активного контрола по ховеру */\n  --color-control-typo-primary: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  --color-control-typo-primary-hover: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  /* Secondary */\n  --color-control-bg-secondary: rgba(34, 39, 43, 0);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary: rgb(0, 120, 210);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary-hover: rgb(0, 145, 255);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-typo-secondary: rgb(15, 159, 255);\n  /* Цвет второстепеного текста контрола */\n  --color-control-typo-secondary-hover: rgb(87, 188, 255);\n  /* Цвет акцентного текста */\n  /* Ghost */\n  --color-control-bg-ghost: rgba(250, 250, 250, 0.16);\n  /* Цвет фона дополнительного контрола */\n  --color-control-bg-ghost-hover: rgba(250, 250, 250, 0.23);\n  /* Цвет фона дополнительного контрола по ховеру */\n  --color-control-typo-ghost: rgba(255, 255, 255, 0.75);\n  /* Цвет дополнительного текста контрола */\n  --color-control-typo-ghost-hover: rgba(255, 255, 255, 0.9);\n  /* Цвет акцентного текста */\n  /* Clear */\n  --color-control-bg-clear: rgba(250, 250, 250, 0);\n  /* Цвет фона чистого контрола */\n  --color-control-bg-clear-hover: rgba(250, 250, 250, 0.23);\n  /* Цвет фона чистого контрола по ховеру */\n  --color-control-typo-clear: rgba(255, 255, 255, 0.75);\n  /* Цвет акцентного текста */\n  --color-control-typo-clear-hover: rgba(255, 255, 255, 0.9);\n  /* Цвет акцентного текста */\n  /* Disable */\n  --color-control-bg-disable: rgba(250, 250, 250, 0.16);\n  /* Цвет фона неактивного контрола */\n  --color-control-bg-border-disable: rgba(250, 250, 250, 0);\n  /* Цвет фона бордеров неактивного контрола */\n  --color-control-typo-disable: rgba(255, 255, 255, 0.24);\n  /* Цвет основного текста неактивного контрола */\n}\n\n/* stylelint-enable */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* Базовые цвета от которых выстраивается вся политра */\n/* Базовый цвет содержимого, от которого выстраиваются цвета текста, иконок, ... */\n/* Базовый цвет поверхностей */\n/* Проектный цвет, от которого выстраивают акцентные состояния */\n/* Тонирующий цвет, от которого выстраиватся бордеры, паранджа, ... */\n/* Цвет ссылок и контролов, от которого выстраиваются все их состояния */\n/* Цвет системнный */\n/* Цвет успеха */\n/* Цвет ошибки */\n/* Цвет предупреждения */\n/* Цвет осторожности */\n/* Цвет нейтральный */\n/* stylelint-disable */\n.Theme_color_gpnDefault {\n  /* //////////////////////////////\n  // Цвета фонов /////////////// */\n  --color-bg-default: rgb(255, 255, 255);\n  /* Цвет дефолта */\n  --color-bg-secondary: rgb(236, 241, 244);\n  /* Цвет дефолта */\n  --color-bg-brand: rgb(0, 113, 178);\n  /* Цвет фона брендированый */\n  --color-bg-link: rgb(0, 120, 210);\n  /* Цвет фона ссылки */\n  --color-bg-border: rgba(0, 100, 158, 0.2);\n  /* Цвет границ */\n  --color-bg-stripe: rgba(0, 32, 51, 0.05);\n  /* Цвет зебры */\n  --color-bg-ghost: rgba(0, 32, 51, 0.08);\n  /* Цвет затенения */\n  --color-bg-tone: rgba(0, 32, 51, 0.85);\n  /* Цвет паранджи */\n  --color-bg-soft: rgba(255, 255, 255, 0.9);\n  /* Цвет молока */\n  --color-bg-system: rgb(206, 216, 222);\n  /* Цвет фона системнный */\n  --color-bg-normal: rgb(86, 185, 242);\n  /* Цвет фона нейтральный */\n  --color-bg-success: rgb(34, 195, 142);\n  /* Цвет фона успеха */\n  --color-bg-caution: rgb(242, 201, 76);\n  /* Цвет фона осторожности */\n  --color-bg-warning: rgb(243, 139, 0);\n  /* Цвет фона предупреждения */\n  --color-bg-alert: rgb(235, 87, 87);\n  /* Цвет фона ошибки */\n  --color-bg-critical: rgb(51, 0, 15);\n  /* Цвет фона системнный */\n  /* //////////////////////////////\n  // Цвета текста ////////////// */\n  --color-typo-primary: rgb(0, 32, 51);\n  /* Цвет основного текста */\n  --color-typo-secondary: rgba(0, 32, 51, 0.6);\n  /* Цвет второстепенного текста */\n  --color-typo-ghost: rgba(0, 32, 51, 0.3);\n  /* Цвет дополнительного текста */\n  --color-typo-brand: rgb(0, 113, 178);\n  /* Цвет брендового текста */\n  --color-typo-system: rgb(132, 167, 189);\n  /* Цвет фона системнный */\n  --color-typo-normal: rgb(51, 180, 255);\n  /* Цвет фона нейтральный */\n  --color-typo-success: rgb(9, 179, 123);\n  /* Цвет текста успеха */\n  --color-typo-caution: rgb(255, 161, 10);\n  /* Цвет текста осторожности */\n  --color-typo-warning: rgb(235, 109, 0);\n  /* Цвет текста предупреждения */\n  --color-typo-alert: rgb(235, 51, 51);\n  /* Цвет текста ошибки */\n  --color-typo-critical: rgb(51, 0, 15);\n  /* Цвет фона системнный */\n  --color-typo-link: rgb(0, 120, 210);\n  /* Цвет основной ссылки */\n  --color-typo-link-minor: rgb(28, 86, 130);\n  /* Цвет второстепенной ссылки */\n  --color-typo-link-hover: rgb(0, 142, 250);\n  /* Цвет ховера ссылки */\n  --color-nums-shadow: 0, 32, 51;\n  /* Значения RGB для указания теней в конструкции rgba(R,G,B, alpha) */\n  /* //////////////////////////////\n  // Цвета скроллбара ////////////// */\n  --color-scroll-bg: rgba(0, 66, 105, 0.06);\n  --color-scroll-thumb: rgba(0, 66, 105, 0.24);\n  --color-scroll-thumb-hover: rgba(0, 66, 105, 0.32);\n  /* /////////////////////////////\n  // Цвета контролов /////////// */\n  /* Default */\n  --color-control-bg-default: rgb(255, 255, 255);\n  /* Цвет фона контрола */\n  --color-control-typo-default: rgb(0, 32, 51);\n  /* Цвет основного текста контрола */\n  --color-control-typo-placeholder: rgba(0, 32, 51, 0.35);\n  /* Цвет плейсхолдера контрола */\n  --color-control-bg-border-default: rgba(0, 66, 105, 0.28);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-default-hover: rgba(0, 66, 105, 0.52);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-bg-border-focus: rgb(0, 145, 255);\n  /* Цвет аутлайна контролов при фокусе */\n  /* TODO заменить на правило целиком */\n  --color-control-bg-focus: rgba(0, 120, 210, 0.3);\n  /* Цвет тени в состонии фокуса */\n  --color-control-bg-active: rgba(0, 120, 210, 0.5);\n  /* Цвет тени в состонии нажатия  */\n  /* Primary */\n  --color-control-bg-primary: rgb(0, 120, 210);\n  /* Цвет фона активного контрола */\n  --color-control-bg-primary-hover: rgb(0, 145, 255);\n  /* Цвет фона активного контрола по ховеру */\n  --color-control-typo-primary: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  --color-control-typo-primary-hover: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  /* Secondary */\n  --color-control-bg-secondary: rgba(255, 255, 255, 0);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary: rgb(0, 120, 210);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary-hover: rgb(0, 145, 255);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-typo-secondary: rgb(0, 120, 210);\n  /* Цвет второстепеного текста контрола */\n  --color-control-typo-secondary-hover: rgb(0, 145, 255);\n  /* Цвет акцентного текста */\n  /* Ghost */\n  --color-control-bg-ghost: rgba(0, 66, 105, 0.07);\n  /* Цвет фона дополнительного контрола */\n  --color-control-bg-ghost-hover: rgba(0, 66, 105, 0.05);\n  /* Цвет фона дополнительного контрола по ховеру */\n  --color-control-typo-ghost: rgba(0, 57, 92, 0.8);\n  /* Цвет дополнительного текста контрола */\n  --color-control-typo-ghost-hover: rgba(0, 57, 92, 0.75);\n  /* Цвет акцентного текста */\n  /* Clear */\n  --color-control-bg-clear: rgba(0, 66, 105, 0);\n  /* Цвет фона чистого контрола */\n  --color-control-bg-clear-hover: rgba(0, 66, 105, 0.05);\n  /* Цвет фона чистого контрола по ховеру */\n  --color-control-typo-clear: rgba(0, 57, 92, 0.8);\n  /* Цвет акцентного текста */\n  --color-control-typo-clear-hover: rgba(0, 57, 92, 0.75);\n  /* Цвет акцентного текста */\n  /* Disable */\n  --color-control-bg-disable: rgba(0, 66, 105, 0.07);\n  /* Цвет фона неактивного контрола */\n  --color-control-bg-border-disable: rgba(0, 66, 105, 0);\n  /* Цвет фона бордеров неактивного контрола */\n  --color-control-typo-disable: rgba(0, 32, 51, 0.26);\n  /* Цвет основного текста неактивного контрола */\n}\n\n/* stylelint-enable */", "",{"version":3,"sources":["webpack://./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB,uDAAuD;AACvD,kFAAkF;AAClF,8BAA8B;AAC9B,gEAAgE;AAChE,qEAAqE;AACrE,wEAAwE;AACxE,oBAAoB;AACpB,gBAAgB;AAChB,gBAAgB;AAChB,wBAAwB;AACxB,sBAAsB;AACtB,qBAAqB;AACrB,sBAAsB;AACtB;EACE;kCACgC;EAChC,sCAAsC;EACtC,iBAAiB;EACjB,wCAAwC;EACxC,iBAAiB;EACjB,kCAAkC;EAClC,4BAA4B;EAC5B,iCAAiC;EACjC,qBAAqB;EACrB,yCAAyC;EACzC,gBAAgB;EAChB,wCAAwC;EACxC,eAAe;EACf,uCAAuC;EACvC,mBAAmB;EACnB,sCAAsC;EACtC,kBAAkB;EAClB,yCAAyC;EACzC,gBAAgB;EAChB,qCAAqC;EACrC,yBAAyB;EACzB,oCAAoC;EACpC,0BAA0B;EAC1B,qCAAqC;EACrC,qBAAqB;EACrB,qCAAqC;EACrC,2BAA2B;EAC3B,oCAAoC;EACpC,6BAA6B;EAC7B,kCAAkC;EAClC,qBAAqB;EACrB,mCAAmC;EACnC,yBAAyB;EACzB;kCACgC;EAChC,oCAAoC;EACpC,0BAA0B;EAC1B,4CAA4C;EAC5C,gCAAgC;EAChC,wCAAwC;EACxC,gCAAgC;EAChC,oCAAoC;EACpC,2BAA2B;EAC3B,uCAAuC;EACvC,yBAAyB;EACzB,sCAAsC;EACtC,0BAA0B;EAC1B,sCAAsC;EACtC,uBAAuB;EACvB,uCAAuC;EACvC,6BAA6B;EAC7B,sCAAsC;EACtC,+BAA+B;EAC/B,oCAAoC;EACpC,uBAAuB;EACvB,qCAAqC;EACrC,yBAAyB;EACzB,mCAAmC;EACnC,yBAAyB;EACzB,yCAAyC;EACzC,+BAA+B;EAC/B,yCAAyC;EACzC,uBAAuB;EACvB,8BAA8B;EAC9B,qEAAqE;EACrE;sCACoC;EACpC,yCAAyC;EACzC,4CAA4C;EAC5C,kDAAkD;EAClD;kCACgC;EAChC,YAAY;EACZ,8CAA8C;EAC9C,uBAAuB;EACvB,4CAA4C;EAC5C,mCAAmC;EACnC,uDAAuD;EACvD,+BAA+B;EAC/B,yDAAyD;EACzD,+BAA+B;EAC/B,+DAA+D;EAC/D,0CAA0C;EAC1C,iDAAiD;EACjD,uCAAuC;EACvC,qCAAqC;EACrC,gDAAgD;EAChD,gCAAgC;EAChC,iDAAiD;EACjD,kCAAkC;EAClC,YAAY;EACZ,4CAA4C;EAC5C,iCAAiC;EACjC,kDAAkD;EAClD,2CAA2C;EAC3C,gDAAgD;EAChD,2BAA2B;EAC3B,sDAAsD;EACtD,2BAA2B;EAC3B,cAAc;EACd,oDAAoD;EACpD,+BAA+B;EAC/B,qDAAqD;EACrD,+BAA+B;EAC/B,2DAA2D;EAC3D,0CAA0C;EAC1C,gDAAgD;EAChD,wCAAwC;EACxC,sDAAsD;EACtD,2BAA2B;EAC3B,UAAU;EACV,gDAAgD;EAChD,uCAAuC;EACvC,sDAAsD;EACtD,iDAAiD;EACjD,gDAAgD;EAChD,yCAAyC;EACzC,uDAAuD;EACvD,2BAA2B;EAC3B,UAAU;EACV,6CAA6C;EAC7C,+BAA+B;EAC/B,sDAAsD;EACtD,yCAAyC;EACzC,gDAAgD;EAChD,2BAA2B;EAC3B,uDAAuD;EACvD,2BAA2B;EAC3B,YAAY;EACZ,kDAAkD;EAClD,mCAAmC;EACnC,sDAAsD;EACtD,4CAA4C;EAC5C,mDAAmD;EACnD,+CAA+C;AACjD;;AAEA,qBAAqB","sourcesContent":["@charset \"UTF-8\";\n/* Базовые цвета от которых выстраивается вся политра */\n/* Базовый цвет содержимого, от которого выстраиваются цвета текста, иконок, ... */\n/* Базовый цвет поверхностей */\n/* Проектный цвет, от которого выстраивают акцентные состояния */\n/* Тонирующий цвет, от которого выстраиватся бордеры, паранджа, ... */\n/* Цвет ссылок и контролов, от которого выстраиваются все их состояния */\n/* Цвет системнный */\n/* Цвет успеха */\n/* Цвет ошибки */\n/* Цвет предупреждения */\n/* Цвет осторожности */\n/* Цвет нейтральный */\n/* stylelint-disable */\n.Theme_color_gpnDefault {\n  /* //////////////////////////////\n  // Цвета фонов /////////////// */\n  --color-bg-default: rgb(255, 255, 255);\n  /* Цвет дефолта */\n  --color-bg-secondary: rgb(236, 241, 244);\n  /* Цвет дефолта */\n  --color-bg-brand: rgb(0, 113, 178);\n  /* Цвет фона брендированый */\n  --color-bg-link: rgb(0, 120, 210);\n  /* Цвет фона ссылки */\n  --color-bg-border: rgba(0, 100, 158, 0.2);\n  /* Цвет границ */\n  --color-bg-stripe: rgba(0, 32, 51, 0.05);\n  /* Цвет зебры */\n  --color-bg-ghost: rgba(0, 32, 51, 0.08);\n  /* Цвет затенения */\n  --color-bg-tone: rgba(0, 32, 51, 0.85);\n  /* Цвет паранджи */\n  --color-bg-soft: rgba(255, 255, 255, 0.9);\n  /* Цвет молока */\n  --color-bg-system: rgb(206, 216, 222);\n  /* Цвет фона системнный */\n  --color-bg-normal: rgb(86, 185, 242);\n  /* Цвет фона нейтральный */\n  --color-bg-success: rgb(34, 195, 142);\n  /* Цвет фона успеха */\n  --color-bg-caution: rgb(242, 201, 76);\n  /* Цвет фона осторожности */\n  --color-bg-warning: rgb(243, 139, 0);\n  /* Цвет фона предупреждения */\n  --color-bg-alert: rgb(235, 87, 87);\n  /* Цвет фона ошибки */\n  --color-bg-critical: rgb(51, 0, 15);\n  /* Цвет фона системнный */\n  /* //////////////////////////////\n  // Цвета текста ////////////// */\n  --color-typo-primary: rgb(0, 32, 51);\n  /* Цвет основного текста */\n  --color-typo-secondary: rgba(0, 32, 51, 0.6);\n  /* Цвет второстепенного текста */\n  --color-typo-ghost: rgba(0, 32, 51, 0.3);\n  /* Цвет дополнительного текста */\n  --color-typo-brand: rgb(0, 113, 178);\n  /* Цвет брендового текста */\n  --color-typo-system: rgb(132, 167, 189);\n  /* Цвет фона системнный */\n  --color-typo-normal: rgb(51, 180, 255);\n  /* Цвет фона нейтральный */\n  --color-typo-success: rgb(9, 179, 123);\n  /* Цвет текста успеха */\n  --color-typo-caution: rgb(255, 161, 10);\n  /* Цвет текста осторожности */\n  --color-typo-warning: rgb(235, 109, 0);\n  /* Цвет текста предупреждения */\n  --color-typo-alert: rgb(235, 51, 51);\n  /* Цвет текста ошибки */\n  --color-typo-critical: rgb(51, 0, 15);\n  /* Цвет фона системнный */\n  --color-typo-link: rgb(0, 120, 210);\n  /* Цвет основной ссылки */\n  --color-typo-link-minor: rgb(28, 86, 130);\n  /* Цвет второстепенной ссылки */\n  --color-typo-link-hover: rgb(0, 142, 250);\n  /* Цвет ховера ссылки */\n  --color-nums-shadow: 0, 32, 51;\n  /* Значения RGB для указания теней в конструкции rgba(R,G,B, alpha) */\n  /* //////////////////////////////\n  // Цвета скроллбара ////////////// */\n  --color-scroll-bg: rgba(0, 66, 105, 0.06);\n  --color-scroll-thumb: rgba(0, 66, 105, 0.24);\n  --color-scroll-thumb-hover: rgba(0, 66, 105, 0.32);\n  /* /////////////////////////////\n  // Цвета контролов /////////// */\n  /* Default */\n  --color-control-bg-default: rgb(255, 255, 255);\n  /* Цвет фона контрола */\n  --color-control-typo-default: rgb(0, 32, 51);\n  /* Цвет основного текста контрола */\n  --color-control-typo-placeholder: rgba(0, 32, 51, 0.35);\n  /* Цвет плейсхолдера контрола */\n  --color-control-bg-border-default: rgba(0, 66, 105, 0.28);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-default-hover: rgba(0, 66, 105, 0.52);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-bg-border-focus: rgb(0, 145, 255);\n  /* Цвет аутлайна контролов при фокусе */\n  /* TODO заменить на правило целиком */\n  --color-control-bg-focus: rgba(0, 120, 210, 0.3);\n  /* Цвет тени в состонии фокуса */\n  --color-control-bg-active: rgba(0, 120, 210, 0.5);\n  /* Цвет тени в состонии нажатия  */\n  /* Primary */\n  --color-control-bg-primary: rgb(0, 120, 210);\n  /* Цвет фона активного контрола */\n  --color-control-bg-primary-hover: rgb(0, 145, 255);\n  /* Цвет фона активного контрола по ховеру */\n  --color-control-typo-primary: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  --color-control-typo-primary-hover: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  /* Secondary */\n  --color-control-bg-secondary: rgba(255, 255, 255, 0);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary: rgb(0, 120, 210);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary-hover: rgb(0, 145, 255);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-typo-secondary: rgb(0, 120, 210);\n  /* Цвет второстепеного текста контрола */\n  --color-control-typo-secondary-hover: rgb(0, 145, 255);\n  /* Цвет акцентного текста */\n  /* Ghost */\n  --color-control-bg-ghost: rgba(0, 66, 105, 0.07);\n  /* Цвет фона дополнительного контрола */\n  --color-control-bg-ghost-hover: rgba(0, 66, 105, 0.05);\n  /* Цвет фона дополнительного контрола по ховеру */\n  --color-control-typo-ghost: rgba(0, 57, 92, 0.8);\n  /* Цвет дополнительного текста контрола */\n  --color-control-typo-ghost-hover: rgba(0, 57, 92, 0.75);\n  /* Цвет акцентного текста */\n  /* Clear */\n  --color-control-bg-clear: rgba(0, 66, 105, 0);\n  /* Цвет фона чистого контрола */\n  --color-control-bg-clear-hover: rgba(0, 66, 105, 0.05);\n  /* Цвет фона чистого контрола по ховеру */\n  --color-control-typo-clear: rgba(0, 57, 92, 0.8);\n  /* Цвет акцентного текста */\n  --color-control-typo-clear-hover: rgba(0, 57, 92, 0.75);\n  /* Цвет акцентного текста */\n  /* Disable */\n  --color-control-bg-disable: rgba(0, 66, 105, 0.07);\n  /* Цвет фона неактивного контрола */\n  --color-control-bg-border-disable: rgba(0, 66, 105, 0);\n  /* Цвет фона бордеров неактивного контрола */\n  --color-control-typo-disable: rgba(0, 32, 51, 0.26);\n  /* Цвет основного текста неактивного контрола */\n}\n\n/* stylelint-enable */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDisplay.css":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDisplay.css ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* Базовые цвета от которых выстраивается вся политра */\n/* Базовый цвет содержимого, от которого выстраиваются цвета текста, иконок, ... */\n/* Базовый цвет поверхностей */\n/* Проектный цвет, от которого выстраивают акцентные состояния */\n/* Тонирующий цвет, от которого выстраиватся бордеры, паранджа, ... */\n/* Цвет ссылок и контролов, от которого выстраиваются все их состояния */\n/* Цвет системнный */\n/* Цвет успеха */\n/* Цвет ошибки */\n/* Цвет предупреждения */\n/* Цвет осторожности */\n/* Цвет нейтральный */\n/* stylelint-disable */\n.Theme_color_gpnDisplay {\n  /* //////////////////////////////\n  // Цвета фонов /////////////// */\n  --color-bg-default: rgb(0, 32, 51);\n  /* Цвет дефолта */\n  --color-bg-secondary: rgb(0, 45, 71);\n  /* Цвет дефолта */\n  --color-bg-brand: rgb(0, 113, 178);\n  /* Цвет фона брендированый */\n  --color-bg-link: rgb(0, 120, 210);\n  /* Цвет фона ссылки */\n  --color-bg-border: rgba(255, 255, 255, 0.2);\n  /* Цвет границ */\n  --color-bg-stripe: rgba(246, 251, 253, 0.05);\n  /* Цвет зебры */\n  --color-bg-ghost: rgba(246, 251, 253, 0.08);\n  /* Цвет затенения */\n  --color-bg-tone: rgba(0, 22, 31, 0.85);\n  /* Цвет паранджи */\n  --color-bg-soft: rgba(255, 255, 255, 0.9);\n  /* Цвет молока */\n  --color-bg-system: rgb(75, 98, 114);\n  /* Цвет фона системнный */\n  --color-bg-normal: rgb(10, 165, 255);\n  /* Цвет фона нейтральный */\n  --color-bg-success: rgb(34, 195, 142);\n  /* Цвет фона успеха */\n  --color-bg-caution: rgb(242, 201, 76);\n  /* Цвет фона осторожности */\n  --color-bg-warning: rgb(243, 139, 0);\n  /* Цвет фона предупреждения */\n  --color-bg-alert: rgb(245, 77, 77);\n  /* Цвет фона ошибки */\n  --color-bg-critical: rgb(51, 0, 15);\n  /* Цвет фона системнный */\n  /* //////////////////////////////\n  // Цвета текста ////////////// */\n  --color-typo-primary: rgb(238, 248, 251);\n  /* Цвет основного текста */\n  --color-typo-secondary: rgba(246, 251, 253, 0.6);\n  /* Цвет второстепенного текста */\n  --color-typo-ghost: rgba(246, 251, 253, 0.3);\n  /* Цвет дополнительного текста */\n  --color-typo-brand: rgb(0, 113, 178);\n  /* Цвет брендового текста */\n  --color-typo-system: rgb(96, 130, 154);\n  /* Цвет фона системнный */\n  --color-typo-normal: rgb(0, 155, 245);\n  /* Цвет фона нейтральный */\n  --color-typo-success: rgb(15, 174, 121);\n  /* Цвет текста успеха */\n  --color-typo-caution: rgb(248, 199, 53);\n  /* Цвет текста осторожности */\n  --color-typo-warning: rgb(230, 130, 0);\n  /* Цвет текста предупреждения */\n  --color-typo-alert: rgb(237, 69, 69);\n  /* Цвет текста ошибки */\n  --color-typo-critical: rgb(97, 0, 29);\n  /* Цвет фона системнный */\n  --color-typo-link: rgb(15, 159, 255);\n  /* Цвет основной ссылки */\n  --color-typo-link-minor: rgb(111, 165, 200);\n  /* Цвет второстепенной ссылки */\n  --color-typo-link-hover: rgb(87, 188, 255);\n  /* Цвет ховера ссылки */\n  --color-nums-shadow: 0, 3, 6;\n  /* Значения RGB для указания теней в конструкции rgba(R,G,B, alpha) */\n  /* //////////////////////////////\n  // Цвета скроллбара ////////////// */\n  --color-scroll-bg: rgba(246, 251, 253, 0.06);\n  --color-scroll-thumb: rgba(246, 251, 253, 0.24);\n  --color-scroll-thumb-hover: rgba(246, 251, 253, 0.32);\n  /* /////////////////////////////\n  // Цвета контролов /////////// */\n  /* Default */\n  --color-control-bg-default: rgb(0, 32, 51);\n  /* Цвет фона контрола */\n  --color-control-typo-default: rgba(246, 251, 253, 0.8);\n  /* Цвет основного текста контрола */\n  --color-control-typo-placeholder: rgba(246, 251, 253, 0.35);\n  /* Цвет плейсхолдера контрола */\n  --color-control-bg-border-default: rgba(246, 251, 253, 0.28);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-default-hover: rgba(246, 251, 253, 0.52);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-bg-border-focus: rgb(5, 147, 255);\n  /* Цвет аутлайна контролов при фокусе */\n  /* TODO заменить на правило целиком */\n  --color-control-bg-focus: rgba(0, 120, 210, 0.4);\n  /* Цвет тени в состонии фокуса */\n  --color-control-bg-active: rgba(0, 120, 210, 0.8);\n  /* Цвет тени в состонии нажатия  */\n  /* Primary */\n  --color-control-bg-primary: rgb(0, 120, 210);\n  /* Цвет фона активного контрола */\n  --color-control-bg-primary-hover: rgb(0, 145, 255);\n  /* Цвет фона активного контрола по ховеру */\n  --color-control-typo-primary: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  --color-control-typo-primary-hover: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  /* Secondary */\n  --color-control-bg-secondary: rgba(0, 32, 51, 0);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary: rgb(0, 120, 210);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary-hover: rgb(0, 145, 255);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-typo-secondary: rgb(15, 159, 255);\n  /* Цвет второстепеного текста контрола */\n  --color-control-typo-secondary-hover: rgb(87, 188, 255);\n  /* Цвет акцентного текста */\n  /* Ghost */\n  --color-control-bg-ghost: rgba(246, 251, 253, 0.16);\n  /* Цвет фона дополнительного контрола */\n  --color-control-bg-ghost-hover: rgba(246, 251, 253, 0.23);\n  /* Цвет фона дополнительного контрола по ховеру */\n  --color-control-typo-ghost: rgba(246, 251, 253, 0.75);\n  /* Цвет дополнительного текста контрола */\n  --color-control-typo-ghost-hover: rgba(246, 251, 253, 0.9);\n  /* Цвет акцентного текста */\n  /* Clear */\n  --color-control-bg-clear: rgba(246, 251, 253, 0);\n  /* Цвет фона чистого контрола */\n  --color-control-bg-clear-hover: rgba(246, 251, 253, 0.23);\n  /* Цвет фона чистого контрола по ховеру */\n  --color-control-typo-clear: rgba(246, 251, 253, 0.75);\n  /* Цвет акцентного текста */\n  --color-control-typo-clear-hover: rgba(246, 251, 253, 0.9);\n  /* Цвет акцентного текста */\n  /* Disable */\n  --color-control-bg-disable: rgba(246, 251, 253, 0.16);\n  /* Цвет фона неактивного контрола */\n  --color-control-bg-border-disable: rgba(246, 251, 253, 0);\n  /* Цвет фона бордеров неактивного контрола */\n  --color-control-typo-disable: rgba(246, 251, 253, 0.24);\n  /* Цвет основного текста неактивного контрола */\n}\n\n/* stylelint-enable */", "",{"version":3,"sources":["webpack://./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDisplay.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB,uDAAuD;AACvD,kFAAkF;AAClF,8BAA8B;AAC9B,gEAAgE;AAChE,qEAAqE;AACrE,wEAAwE;AACxE,oBAAoB;AACpB,gBAAgB;AAChB,gBAAgB;AAChB,wBAAwB;AACxB,sBAAsB;AACtB,qBAAqB;AACrB,sBAAsB;AACtB;EACE;kCACgC;EAChC,kCAAkC;EAClC,iBAAiB;EACjB,oCAAoC;EACpC,iBAAiB;EACjB,kCAAkC;EAClC,4BAA4B;EAC5B,iCAAiC;EACjC,qBAAqB;EACrB,2CAA2C;EAC3C,gBAAgB;EAChB,4CAA4C;EAC5C,eAAe;EACf,2CAA2C;EAC3C,mBAAmB;EACnB,sCAAsC;EACtC,kBAAkB;EAClB,yCAAyC;EACzC,gBAAgB;EAChB,mCAAmC;EACnC,yBAAyB;EACzB,oCAAoC;EACpC,0BAA0B;EAC1B,qCAAqC;EACrC,qBAAqB;EACrB,qCAAqC;EACrC,2BAA2B;EAC3B,oCAAoC;EACpC,6BAA6B;EAC7B,kCAAkC;EAClC,qBAAqB;EACrB,mCAAmC;EACnC,yBAAyB;EACzB;kCACgC;EAChC,wCAAwC;EACxC,0BAA0B;EAC1B,gDAAgD;EAChD,gCAAgC;EAChC,4CAA4C;EAC5C,gCAAgC;EAChC,oCAAoC;EACpC,2BAA2B;EAC3B,sCAAsC;EACtC,yBAAyB;EACzB,qCAAqC;EACrC,0BAA0B;EAC1B,uCAAuC;EACvC,uBAAuB;EACvB,uCAAuC;EACvC,6BAA6B;EAC7B,sCAAsC;EACtC,+BAA+B;EAC/B,oCAAoC;EACpC,uBAAuB;EACvB,qCAAqC;EACrC,yBAAyB;EACzB,oCAAoC;EACpC,yBAAyB;EACzB,2CAA2C;EAC3C,+BAA+B;EAC/B,0CAA0C;EAC1C,uBAAuB;EACvB,4BAA4B;EAC5B,qEAAqE;EACrE;sCACoC;EACpC,4CAA4C;EAC5C,+CAA+C;EAC/C,qDAAqD;EACrD;kCACgC;EAChC,YAAY;EACZ,0CAA0C;EAC1C,uBAAuB;EACvB,sDAAsD;EACtD,mCAAmC;EACnC,2DAA2D;EAC3D,+BAA+B;EAC/B,4DAA4D;EAC5D,+BAA+B;EAC/B,kEAAkE;EAClE,0CAA0C;EAC1C,iDAAiD;EACjD,uCAAuC;EACvC,qCAAqC;EACrC,gDAAgD;EAChD,gCAAgC;EAChC,iDAAiD;EACjD,kCAAkC;EAClC,YAAY;EACZ,4CAA4C;EAC5C,iCAAiC;EACjC,kDAAkD;EAClD,2CAA2C;EAC3C,gDAAgD;EAChD,2BAA2B;EAC3B,sDAAsD;EACtD,2BAA2B;EAC3B,cAAc;EACd,gDAAgD;EAChD,+BAA+B;EAC/B,qDAAqD;EACrD,+BAA+B;EAC/B,2DAA2D;EAC3D,0CAA0C;EAC1C,iDAAiD;EACjD,wCAAwC;EACxC,uDAAuD;EACvD,2BAA2B;EAC3B,UAAU;EACV,mDAAmD;EACnD,uCAAuC;EACvC,yDAAyD;EACzD,iDAAiD;EACjD,qDAAqD;EACrD,yCAAyC;EACzC,0DAA0D;EAC1D,2BAA2B;EAC3B,UAAU;EACV,gDAAgD;EAChD,+BAA+B;EAC/B,yDAAyD;EACzD,yCAAyC;EACzC,qDAAqD;EACrD,2BAA2B;EAC3B,0DAA0D;EAC1D,2BAA2B;EAC3B,YAAY;EACZ,qDAAqD;EACrD,mCAAmC;EACnC,yDAAyD;EACzD,4CAA4C;EAC5C,uDAAuD;EACvD,+CAA+C;AACjD;;AAEA,qBAAqB","sourcesContent":["@charset \"UTF-8\";\n/* Базовые цвета от которых выстраивается вся политра */\n/* Базовый цвет содержимого, от которого выстраиваются цвета текста, иконок, ... */\n/* Базовый цвет поверхностей */\n/* Проектный цвет, от которого выстраивают акцентные состояния */\n/* Тонирующий цвет, от которого выстраиватся бордеры, паранджа, ... */\n/* Цвет ссылок и контролов, от которого выстраиваются все их состояния */\n/* Цвет системнный */\n/* Цвет успеха */\n/* Цвет ошибки */\n/* Цвет предупреждения */\n/* Цвет осторожности */\n/* Цвет нейтральный */\n/* stylelint-disable */\n.Theme_color_gpnDisplay {\n  /* //////////////////////////////\n  // Цвета фонов /////////////// */\n  --color-bg-default: rgb(0, 32, 51);\n  /* Цвет дефолта */\n  --color-bg-secondary: rgb(0, 45, 71);\n  /* Цвет дефолта */\n  --color-bg-brand: rgb(0, 113, 178);\n  /* Цвет фона брендированый */\n  --color-bg-link: rgb(0, 120, 210);\n  /* Цвет фона ссылки */\n  --color-bg-border: rgba(255, 255, 255, 0.2);\n  /* Цвет границ */\n  --color-bg-stripe: rgba(246, 251, 253, 0.05);\n  /* Цвет зебры */\n  --color-bg-ghost: rgba(246, 251, 253, 0.08);\n  /* Цвет затенения */\n  --color-bg-tone: rgba(0, 22, 31, 0.85);\n  /* Цвет паранджи */\n  --color-bg-soft: rgba(255, 255, 255, 0.9);\n  /* Цвет молока */\n  --color-bg-system: rgb(75, 98, 114);\n  /* Цвет фона системнный */\n  --color-bg-normal: rgb(10, 165, 255);\n  /* Цвет фона нейтральный */\n  --color-bg-success: rgb(34, 195, 142);\n  /* Цвет фона успеха */\n  --color-bg-caution: rgb(242, 201, 76);\n  /* Цвет фона осторожности */\n  --color-bg-warning: rgb(243, 139, 0);\n  /* Цвет фона предупреждения */\n  --color-bg-alert: rgb(245, 77, 77);\n  /* Цвет фона ошибки */\n  --color-bg-critical: rgb(51, 0, 15);\n  /* Цвет фона системнный */\n  /* //////////////////////////////\n  // Цвета текста ////////////// */\n  --color-typo-primary: rgb(238, 248, 251);\n  /* Цвет основного текста */\n  --color-typo-secondary: rgba(246, 251, 253, 0.6);\n  /* Цвет второстепенного текста */\n  --color-typo-ghost: rgba(246, 251, 253, 0.3);\n  /* Цвет дополнительного текста */\n  --color-typo-brand: rgb(0, 113, 178);\n  /* Цвет брендового текста */\n  --color-typo-system: rgb(96, 130, 154);\n  /* Цвет фона системнный */\n  --color-typo-normal: rgb(0, 155, 245);\n  /* Цвет фона нейтральный */\n  --color-typo-success: rgb(15, 174, 121);\n  /* Цвет текста успеха */\n  --color-typo-caution: rgb(248, 199, 53);\n  /* Цвет текста осторожности */\n  --color-typo-warning: rgb(230, 130, 0);\n  /* Цвет текста предупреждения */\n  --color-typo-alert: rgb(237, 69, 69);\n  /* Цвет текста ошибки */\n  --color-typo-critical: rgb(97, 0, 29);\n  /* Цвет фона системнный */\n  --color-typo-link: rgb(15, 159, 255);\n  /* Цвет основной ссылки */\n  --color-typo-link-minor: rgb(111, 165, 200);\n  /* Цвет второстепенной ссылки */\n  --color-typo-link-hover: rgb(87, 188, 255);\n  /* Цвет ховера ссылки */\n  --color-nums-shadow: 0, 3, 6;\n  /* Значения RGB для указания теней в конструкции rgba(R,G,B, alpha) */\n  /* //////////////////////////////\n  // Цвета скроллбара ////////////// */\n  --color-scroll-bg: rgba(246, 251, 253, 0.06);\n  --color-scroll-thumb: rgba(246, 251, 253, 0.24);\n  --color-scroll-thumb-hover: rgba(246, 251, 253, 0.32);\n  /* /////////////////////////////\n  // Цвета контролов /////////// */\n  /* Default */\n  --color-control-bg-default: rgb(0, 32, 51);\n  /* Цвет фона контрола */\n  --color-control-typo-default: rgba(246, 251, 253, 0.8);\n  /* Цвет основного текста контрола */\n  --color-control-typo-placeholder: rgba(246, 251, 253, 0.35);\n  /* Цвет плейсхолдера контрола */\n  --color-control-bg-border-default: rgba(246, 251, 253, 0.28);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-default-hover: rgba(246, 251, 253, 0.52);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-bg-border-focus: rgb(5, 147, 255);\n  /* Цвет аутлайна контролов при фокусе */\n  /* TODO заменить на правило целиком */\n  --color-control-bg-focus: rgba(0, 120, 210, 0.4);\n  /* Цвет тени в состонии фокуса */\n  --color-control-bg-active: rgba(0, 120, 210, 0.8);\n  /* Цвет тени в состонии нажатия  */\n  /* Primary */\n  --color-control-bg-primary: rgb(0, 120, 210);\n  /* Цвет фона активного контрола */\n  --color-control-bg-primary-hover: rgb(0, 145, 255);\n  /* Цвет фона активного контрола по ховеру */\n  --color-control-typo-primary: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  --color-control-typo-primary-hover: rgb(255, 255, 255);\n  /* Цвет акцентного текста */\n  /* Secondary */\n  --color-control-bg-secondary: rgba(0, 32, 51, 0);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary: rgb(0, 120, 210);\n  /* Цвет фона бордеров котрола */\n  --color-control-bg-border-secondary-hover: rgb(0, 145, 255);\n  /* Цвет фона бордеров контрола по ховеру */\n  --color-control-typo-secondary: rgb(15, 159, 255);\n  /* Цвет второстепеного текста контрола */\n  --color-control-typo-secondary-hover: rgb(87, 188, 255);\n  /* Цвет акцентного текста */\n  /* Ghost */\n  --color-control-bg-ghost: rgba(246, 251, 253, 0.16);\n  /* Цвет фона дополнительного контрола */\n  --color-control-bg-ghost-hover: rgba(246, 251, 253, 0.23);\n  /* Цвет фона дополнительного контрола по ховеру */\n  --color-control-typo-ghost: rgba(246, 251, 253, 0.75);\n  /* Цвет дополнительного текста контрола */\n  --color-control-typo-ghost-hover: rgba(246, 251, 253, 0.9);\n  /* Цвет акцентного текста */\n  /* Clear */\n  --color-control-bg-clear: rgba(246, 251, 253, 0);\n  /* Цвет фона чистого контрола */\n  --color-control-bg-clear-hover: rgba(246, 251, 253, 0.23);\n  /* Цвет фона чистого контрола по ховеру */\n  --color-control-typo-clear: rgba(246, 251, 253, 0.75);\n  /* Цвет акцентного текста */\n  --color-control-typo-clear-hover: rgba(246, 251, 253, 0.9);\n  /* Цвет акцентного текста */\n  /* Disable */\n  --color-control-bg-disable: rgba(246, 251, 253, 0.16);\n  /* Цвет фона неактивного контрола */\n  --color-control-bg-border-disable: rgba(246, 251, 253, 0);\n  /* Цвет фона бордеров неактивного контрола */\n  --color-control-typo-disable: rgba(246, 251, 253, 0.24);\n  /* Цвет основного текста неактивного контрола */\n}\n\n/* stylelint-enable */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.Theme_control_gpnDefault {\n  --control-radius: 4px;\n  /* Основной радиус скругления контроллов */\n  --control-border-width: 1px;\n  /* Основная толщина контроллов */\n  --control-height-l: var(--space-4xl);\n  --control-height-m: var(--space-3xl);\n  --control-height-s: var(--space-2xl);\n  --control-height-xs: var(--space-xl);\n  --control-box-size-m: var(--space-m);\n  --control-box-size-l: var(--space-l);\n  --control-space-l: var(--space-xl);\n  --control-space-m: var(--space-l);\n  --control-space-s: var(--space-m);\n  --control-space-xs: var(--space-s);\n  --control-text-size-l: var(--size-text-l);\n  --control-text-size-m: var(--size-text-m);\n  --control-text-size-s: var(--size-text-s);\n  --control-text-size-xs: var(--size-text-xs);\n}", "",{"version":3,"sources":["webpack://./node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACE,qBAAqB;EACrB,0CAA0C;EAC1C,2BAA2B;EAC3B,gCAAgC;EAChC,oCAAoC;EACpC,oCAAoC;EACpC,oCAAoC;EACpC,oCAAoC;EACpC,oCAAoC;EACpC,oCAAoC;EACpC,kCAAkC;EAClC,iCAAiC;EACjC,iCAAiC;EACjC,kCAAkC;EAClC,yCAAyC;EACzC,yCAAyC;EACzC,yCAAyC;EACzC,2CAA2C;AAC7C","sourcesContent":["@charset \"UTF-8\";\n.Theme_control_gpnDefault {\n  --control-radius: 4px;\n  /* Основной радиус скругления контроллов */\n  --control-border-width: 1px;\n  /* Основная толщина контроллов */\n  --control-height-l: var(--space-4xl);\n  --control-height-m: var(--space-3xl);\n  --control-height-s: var(--space-2xl);\n  --control-height-xs: var(--space-xl);\n  --control-box-size-m: var(--space-m);\n  --control-box-size-l: var(--space-l);\n  --control-space-l: var(--space-xl);\n  --control-space-m: var(--space-l);\n  --control-space-s: var(--space-m);\n  --control-space-xs: var(--space-s);\n  --control-text-size-l: var(--size-text-l);\n  --control-text-size-m: var(--size-text-m);\n  --control-text-size-s: var(--size-text-s);\n  --control-text-size-xs: var(--size-text-xs);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Theme_font_gpnDefault {\n  --font-primary: \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Oxygen\", \"Ubuntu\",\n    \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  --font-mono: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  font-family: var(--font-primary);\n}", "",{"version":3,"sources":["webpack://./node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css"],"names":[],"mappings":"AAAA;EACE;wEACsE;EACtE,+EAA+E;EAC/E,gCAAgC;AAClC","sourcesContent":[".Theme_font_gpnDefault {\n  --font-primary: \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Oxygen\", \"Ubuntu\",\n    \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  --font-mono: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  font-family: var(--font-primary);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.Theme_size_gpnDefault {\n  /* Размер текста */\n  --size-text-2xs: 10px;\n  --size-text-xs: 12px;\n  --size-text-s: 14px;\n  --size-text-m: 16px;\n  --size-text-l: 18px;\n  --size-text-xl: 20px;\n  --size-text-2xl: 24px;\n  --size-text-3xl: 32px;\n  --size-text-4xl: 48px;\n  --size-text-5xl: 72px;\n  --size-text-6xl: 96px;\n  /* Межстрочный интервал */\n  --line-height-text-2xs: 1em;\n  --line-height-text-xs: 1.2em;\n  --line-height-text-s: 1.4em;\n  --line-height-text-m: 1.5em;\n  --line-height-text-l: 1.6em;\n}", "",{"version":3,"sources":["webpack://./node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACE,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,yBAAyB;EACzB,2BAA2B;EAC3B,4BAA4B;EAC5B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;AAC7B","sourcesContent":["@charset \"UTF-8\";\n.Theme_size_gpnDefault {\n  /* Размер текста */\n  --size-text-2xs: 10px;\n  --size-text-xs: 12px;\n  --size-text-s: 14px;\n  --size-text-m: 16px;\n  --size-text-l: 18px;\n  --size-text-xl: 20px;\n  --size-text-2xl: 24px;\n  --size-text-3xl: 32px;\n  --size-text-4xl: 48px;\n  --size-text-5xl: 72px;\n  --size-text-6xl: 96px;\n  /* Межстрочный интервал */\n  --line-height-text-2xs: 1em;\n  --line-height-text-xs: 1.2em;\n  --line-height-text-s: 1.4em;\n  --line-height-text-m: 1.5em;\n  --line-height-text-l: 1.6em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.Theme_space_gpnDefault {\n  /* Отступы */\n  --space-3xs: 2px;\n  --space-2xs: 4px;\n  --space-xs: 8px;\n  --space-s: 12px;\n  --space-m: 16px;\n  --space-l: 20px;\n  --space-xl: 24px;\n  --space-2xl: 32px;\n  --space-3xl: 40px;\n  --space-4xl: 48px;\n  --space-5xl: 72px;\n  --space-6xl: 96px;\n}", "",{"version":3,"sources":["webpack://./node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACE,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB","sourcesContent":["@charset \"UTF-8\";\n.Theme_space_gpnDefault {\n  /* Отступы */\n  --space-3xs: 2px;\n  --space-2xs: 4px;\n  --space-xs: 8px;\n  --space-s: 12px;\n  --space-m: 16px;\n  --space-l: 20px;\n  --space-xl: 24px;\n  --space-2xl: 32px;\n  --space-3xl: 40px;\n  --space-4xl: 48px;\n  --space-5xl: 72px;\n  --space-6xl: 96px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Modal/Modal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Modal/Modal.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => /* binding */ Modal
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/@consta/uikit/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.css */ "./node_modules/@consta/uikit/__internal__/src/components/Modal/Modal.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group */ "./node_modules/@consta/uikit/node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _hooks_useClickOutside_useClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useClickOutside/useClickOutside */ "./node_modules/@consta/uikit/__internal__/src/hooks/useClickOutside/useClickOutside.js");
/* harmony import */ var _utils_bem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/bem */ "./node_modules/@consta/uikit/__internal__/src/utils/bem.js");
/* harmony import */ var _utils_cnForCssTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cnForCssTransition */ "./node_modules/@consta/uikit/__internal__/src/utils/cnForCssTransition.js");
/* harmony import */ var _PortalWithTheme_PortalWithTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PortalWithTheme/PortalWithTheme */ "./node_modules/@consta/uikit/__internal__/src/components/PortalWithTheme/PortalWithTheme.js");
/* harmony import */ var _Theme_Theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Theme/Theme */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.js");









var modalPropWidth = ['auto'];
var modalPropWidthDefault = modalPropWidth[0];
var modalPropPosition = ['center', 'top'];
var modalPropPositionDefault = modalPropPosition[0];
var cnModal = (0,_utils_bem__WEBPACK_IMPORTED_MODULE_3__.cn)('Modal');
var Modal = function (props) {
    var isOpen = props.isOpen, onClose = props.onClose, onOpen = props.onOpen, _a = props.hasOverlay, hasOverlay = _a === void 0 ? true : _a, onOverlayClick = props.onOverlayClick, className = props.className, _b = props.width, width = _b === void 0 ? modalPropWidthDefault : _b, _c = props.position, position = _c === void 0 ? modalPropPositionDefault : _c, children = props.children, _d = props.container, container = _d === void 0 ? window.document.body : _d, refsForExcludeClickOutside = props.refsForExcludeClickOutside, rootClassName = props.rootClassName, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__rest)(props, ["isOpen", "onClose", "onOpen", "hasOverlay", "onOverlayClick", "className", "width", "position", "children", "container", "refsForExcludeClickOutside", "rootClassName"]);
    var ref = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    var theme = (0,_Theme_Theme__WEBPACK_IMPORTED_MODULE_6__.useTheme)().theme;
    (0,_hooks_useClickOutside_useClickOutside__WEBPACK_IMPORTED_MODULE_2__.useClickOutside)({
        isActive: !!onOverlayClick,
        ignoreClicksInsideRefs: (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArrays)([ref], (refsForExcludeClickOutside || [])),
        handler: function (event) { return onOverlayClick === null || onOverlayClick === void 0 ? void 0 : onOverlayClick(event); }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (isOpen) {
            onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        }
        else {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    }, [isOpen]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__.default, { "in": isOpen, unmountOnExit: true, appear: true, classNames: (0,_utils_cnForCssTransition__WEBPACK_IMPORTED_MODULE_4__.cnForCssTransition)(cnModal), timeout: 200 },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PortalWithTheme_PortalWithTheme__WEBPACK_IMPORTED_MODULE_5__.PortalWithTheme, { preset: theme, container: container, className: cnModal(null, [rootClassName]) },
            hasOverlay && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: cnModal('Overlay'), "aria-label": "\u041E\u0432\u0435\u0440\u043B\u044D\u0439" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({ className: cnModal('Window', { width: width, position: position }, [className]), ref: ref }, rest), children))));
};


/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/PortalWithTheme/PortalWithTheme.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/PortalWithTheme/PortalWithTheme.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalWithTheme": () => /* binding */ PortalWithTheme
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/@consta/uikit/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Theme_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Theme/Theme */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.js");




var PortalWithTheme = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.container, container = _b === void 0 ? window.document.body : _b, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__rest)(_a, ["children", "container"]);
    return react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Theme_Theme__WEBPACK_IMPORTED_MODULE_2__.Theme, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ ref: ref }, rest), children), container);
});


/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Text/Text.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Text/Text.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textPropAlign": () => /* binding */ textPropAlign,
/* harmony export */   "textPropDisplay": () => /* binding */ textPropDisplay,
/* harmony export */   "textPropFont": () => /* binding */ textPropFont,
/* harmony export */   "textPropDecoration": () => /* binding */ textPropDecoration,
/* harmony export */   "textPropLineHeight": () => /* binding */ textPropLineHeight,
/* harmony export */   "textPropSize": () => /* binding */ textPropSize,
/* harmony export */   "textPropSizeDefault": () => /* binding */ textPropSizeDefault,
/* harmony export */   "textPropSpacing": () => /* binding */ textPropSpacing,
/* harmony export */   "textPropType": () => /* binding */ textPropType,
/* harmony export */   "textPropView": () => /* binding */ textPropView,
/* harmony export */   "textPropViewDefault": () => /* binding */ textPropViewDefault,
/* harmony export */   "textPropWeight": () => /* binding */ textPropWeight,
/* harmony export */   "textPropFontStyle": () => /* binding */ textPropFontStyle,
/* harmony export */   "textPropTransform": () => /* binding */ textPropTransform,
/* harmony export */   "textPropWidth": () => /* binding */ textPropWidth,
/* harmony export */   "cnText": () => /* binding */ cnText,
/* harmony export */   "Text": () => /* binding */ Text
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/@consta/uikit/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.css */ "./node_modules/@consta/uikit/__internal__/src/components/Text/Text.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_bem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/bem */ "./node_modules/@consta/uikit/__internal__/src/utils/bem.js");
/* harmony import */ var _utils_types_PropsWithAsAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/types/PropsWithAsAttributes */ "./node_modules/@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes.js");





var textPropAlign = ['left', 'center', 'right'];
var textPropDisplay = ['block', 'inlineBlock', 'inline'];
var textPropFont = ['primary', 'mono'];
var textPropDecoration = ['underline'];
var textPropLineHeight = ['2xs', 'xs', 's', 'm', 'l'];
var textPropSize = [
    'm',
    '2xs',
    'xs',
    's',
    'l',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
];
var textPropSizeDefault = textPropSize[0];
var textPropSpacing = ['xs', 's', 'm', 'l'];
var textPropType = ['blockquote', 'p', 'h3', 'h2', 'h1'];
var textPropView = [
    'primary',
    'alert',
    'brand',
    'ghost',
    'link',
    'linkMinor',
    'primary',
    'secondary',
    'success',
    'warning',
];
var textPropViewDefault = textPropView[0];
var textPropWeight = ['black', 'bold', 'light', 'regular', 'semibold', 'thin'];
var textPropFontStyle = ['italic'];
var textPropTransform = ['uppercase'];
var textPropWidth = ['default'];
var cnText = (0,_utils_bem__WEBPACK_IMPORTED_MODULE_2__.cn)('Text');
var Text = (0,_utils_types_PropsWithAsAttributes__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'div' : _a, align = props.align, decoration = props.decoration, display = props.display, font = props.font, lineHeight = props.lineHeight, _b = props.size, size = _b === void 0 ? textPropSizeDefault : _b, spacing = props.spacing, fontStyle = props.fontStyle, transform = props.transform, type = props.type, _c = props.view, view = _c === void 0 ? textPropViewDefault : _c, weight = props.weight, width = props.width, className = props.className, children = props.children, otherProps = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(props, ["as", "align", "decoration", "display", "font", "lineHeight", "size", "spacing", "fontStyle", "transform", "type", "view", "weight", "width", "className", "children"]);
    var Tag = as;
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Tag, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, otherProps, { className: cnText({
            align: align,
            decoration: decoration,
            display: display,
            font: font,
            lineHeight: lineHeight,
            size: size,
            spacing: spacing,
            fontStyle: fontStyle,
            transform: transform,
            type: type,
            view: view,
            weight: weight,
            width: width
        }, [className]), ref: ref }), children));
});


/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "presetGpnDefault": () => /* reexport safe */ _presets_presetGpnDefault__WEBPACK_IMPORTED_MODULE_2__.presetGpnDefault,
/* harmony export */   "presetGpnDark": () => /* reexport safe */ _presets_presetGpnDark__WEBPACK_IMPORTED_MODULE_3__.presetGpnDark,
/* harmony export */   "presetGpnDisplay": () => /* reexport safe */ _presets_presetGpnDisplay__WEBPACK_IMPORTED_MODULE_4__.presetGpnDisplay,
/* harmony export */   "cnTheme": () => /* binding */ cnTheme,
/* harmony export */   "generateThemeClassNames": () => /* binding */ generateThemeClassNames,
/* harmony export */   "ThemeContext": () => /* binding */ ThemeContext,
/* harmony export */   "Theme": () => /* binding */ Theme,
/* harmony export */   "useTheme": () => /* binding */ useTheme
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/@consta/uikit/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_bem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/bem */ "./node_modules/@consta/uikit/__internal__/src/utils/bem.js");
/* harmony import */ var _presets_presetGpnDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presets/presetGpnDefault */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDefault.js");
/* harmony import */ var _presets_presetGpnDark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presets/presetGpnDark */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDark.js");
/* harmony import */ var _presets_presetGpnDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presets/presetGpnDisplay */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDisplay.js");







var cnTheme = (0,_utils_bem__WEBPACK_IMPORTED_MODULE_1__.cn)('Theme');
function generateThemeClassNames(preset) {
    return {
        color: {
            primary: cnTheme({ color: preset.color.primary }),
            accent: cnTheme({ color: preset.color.accent }),
            invert: cnTheme({ color: preset.color.invert })
        },
        control: cnTheme({ control: preset.control }),
        font: cnTheme({ font: preset.font }),
        size: cnTheme({ size: preset.size }),
        space: cnTheme({ space: preset.space })
    };
}
var defaultContextValue = {
    theme: _presets_presetGpnDefault__WEBPACK_IMPORTED_MODULE_2__.presetGpnDefault,
    themeClassNames: generateThemeClassNames(_presets_presetGpnDefault__WEBPACK_IMPORTED_MODULE_2__.presetGpnDefault)
};
var ThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContextValue);
var Theme = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
    var className = props.className, children = props.children, preset = props.preset, otherProps = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(props, ["className", "children", "preset"]);
    var mods = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, preset), { color: preset.color.primary });
    var themeClassNames = generateThemeClassNames(preset);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ThemeContext.Provider, { value: { theme: preset, themeClassNames: themeClassNames } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, otherProps, { ref: ref, className: cnTheme(mods, [className]) }), children)));
});
function useTheme() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
}


/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDark.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDark.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "presetGpnDark": () => /* binding */ presetGpnDark
/* harmony export */ });
/* harmony import */ var _Theme_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Theme.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css");
/* harmony import */ var _color_Theme_color_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_color/Theme_color_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css");
/* harmony import */ var _color_Theme_color_gpnDark_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_color/Theme_color_gpnDark.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css");
/* harmony import */ var _control_Theme_control_gpnDefault_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_control/Theme_control_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css");
/* harmony import */ var _font_Theme_font_gpnDefault_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_font/Theme_font_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css");
/* harmony import */ var _size_Theme_size_gpnDefault_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_size/Theme_size_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css");
/* harmony import */ var _space_Theme_space_gpnDefault_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_space/Theme_space_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css");







var presetGpnDark = {
    color: {
        primary: 'gpnDark',
        accent: 'gpnDark',
        invert: 'gpnDefault'
    },
    control: 'gpnDefault',
    font: 'gpnDefault',
    size: 'gpnDefault',
    space: 'gpnDefault'
};


/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDefault.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDefault.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "presetGpnDefault": () => /* binding */ presetGpnDefault
/* harmony export */ });
/* harmony import */ var _Theme_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Theme.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css");
/* harmony import */ var _color_Theme_color_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_color/Theme_color_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css");
/* harmony import */ var _color_Theme_color_gpnDark_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_color/Theme_color_gpnDark.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css");
/* harmony import */ var _control_Theme_control_gpnDefault_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_control/Theme_control_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css");
/* harmony import */ var _font_Theme_font_gpnDefault_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_font/Theme_font_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css");
/* harmony import */ var _size_Theme_size_gpnDefault_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_size/Theme_size_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css");
/* harmony import */ var _space_Theme_space_gpnDefault_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_space/Theme_space_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css");







var presetGpnDefault = {
    color: {
        primary: 'gpnDefault',
        accent: 'gpnDark',
        invert: 'gpnDark'
    },
    control: 'gpnDefault',
    font: 'gpnDefault',
    size: 'gpnDefault',
    space: 'gpnDefault'
};


/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDisplay.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDisplay.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "presetGpnDisplay": () => /* binding */ presetGpnDisplay
/* harmony export */ });
/* harmony import */ var _Theme_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Theme.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css");
/* harmony import */ var _color_Theme_color_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_color/Theme_color_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css");
/* harmony import */ var _color_Theme_color_gpnDark_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_color/Theme_color_gpnDark.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css");
/* harmony import */ var _color_Theme_color_gpnDisplay_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_color/Theme_color_gpnDisplay.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDisplay.css");
/* harmony import */ var _control_Theme_control_gpnDefault_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_control/Theme_control_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css");
/* harmony import */ var _font_Theme_font_gpnDefault_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_font/Theme_font_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css");
/* harmony import */ var _size_Theme_size_gpnDefault_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_size/Theme_size_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css");
/* harmony import */ var _space_Theme_space_gpnDefault_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_space/Theme_space_gpnDefault.css */ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css");








var presetGpnDisplay = {
    color: {
        primary: 'gpnDisplay',
        accent: 'gpnDark',
        invert: 'gpnDefault'
    },
    control: 'gpnDefault',
    font: 'gpnDefault',
    size: 'gpnDefault',
    space: 'gpnDefault'
};


/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/hooks/useClickOutside/useClickOutside.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/hooks/useClickOutside/useClickOutside.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useClickOutside": () => /* binding */ useClickOutside
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useClickOutside(_a) {
    var isActive = _a.isActive, ignoreClicksInsideRefs = _a.ignoreClicksInsideRefs, handler = _a.handler;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!isActive) {
            return;
        }
        var handleClick = function (event) {
            var target = event.target;
            var shouldCallHandler = ignoreClicksInsideRefs.every(function (ref) { var _a; return !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(target)); });
            shouldCallHandler && handler(event);
        };
        document.addEventListener('mousedown', handleClick);
        return function () { return document.removeEventListener('mousedown', handleClick); };
    }, [isActive, ignoreClicksInsideRefs, handler]);
}


/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/utils/bem.js":
/*!******************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/utils/bem.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cn": () => /* binding */ cn,
/* harmony export */   "withPrefix": () => /* binding */ withPrefix
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/@consta/uikit/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bem-react/classname */ "./node_modules/@consta/uikit/node_modules/@bem-react/classname/index.js");


var reactBemNaming = { e: '-', m: '_', v: '_' };
var cn = (0,_bem_react_classname__WEBPACK_IMPORTED_MODULE_0__.withNaming)(reactBemNaming);
var withPrefix = function (prefix) { return (0,_bem_react_classname__WEBPACK_IMPORTED_MODULE_0__.withNaming)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ n: prefix + "--" }, reactBemNaming)); };


/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/utils/cnForCssTransition.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/utils/cnForCssTransition.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cnForCssTransition": () => /* binding */ cnForCssTransition
/* harmony export */ });
function cnForCssTransition(cnFunction, animateName) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (animateName === void 0) { animateName = 'animate'; }
    return {
        appear: cnFunction((_a = {}, _a[animateName] = 'appear', _a)),
        appearActive: cnFunction((_b = {}, _b[animateName] = 'appearActive', _b)),
        appearDone: cnFunction((_c = {}, _c[animateName] = 'appearDone', _c)),
        enter: cnFunction((_d = {}, _d[animateName] = 'enter', _d)),
        enterActive: cnFunction((_e = {}, _e[animateName] = 'enterActive', _e)),
        enterDone: cnFunction((_f = {}, _f[animateName] = 'enterDone', _f)),
        exit: cnFunction((_g = {}, _g[animateName] = 'exit', _g)),
        exitActive: cnFunction((_h = {}, _h[animateName] = 'exitActive', _h)),
        exitDone: cnFunction((_j = {}, _j[animateName] = 'exitDone', _j))
    };
}


/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forwardRefWithAs": () => /* binding */ forwardRefWithAs
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function forwardRefWithAs(render) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(render);
}


/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _extends
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _inheritsLoose
/* harmony export */ });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _objectWithoutPropertiesLoose
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/@bem-react/classname/build/classname.development.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/@bem-react/classname/build/classname.development.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * BEM className configure function.
 *
 * @example
 * ``` ts
 *
 * import { withNaming } from '@bem-react/classname';
 *
 * const cn = withNaming({ n: 'ns-', e: '__', m: '_' });
 *
 * cn('block', 'elem'); // 'ns-block__elem'
 * ```
 *
 * @param preset settings for the naming convention
 */
function withNaming(preset) {
    var nameSpace = preset.n || '';
    var modValueDelimiter = preset.v || preset.m;
    function stringify(b, e, m, mix) {
        var entityName = e ? nameSpace + b + preset.e + e : nameSpace + b;
        var className = entityName;
        if (m) {
            var modPrefix = ' ' + className + preset.m;
            for (var k in m) {
                if (m.hasOwnProperty(k)) {
                    var modVal = m[k];
                    if (modVal === true) {
                        className += modPrefix + k;
                    }
                    else if (modVal) {
                        className += modPrefix + k + modValueDelimiter + modVal;
                    }
                }
            }
        }
        if (mix !== undefined) {
            for (var i = 0, len = mix.length; i < len; i++) {
                var value = mix[i];
                // Skipping non-string values and empty strings
                if (typeof value !== 'string' || !value)
                    continue;
                var mixes = value.split(' ');
                for (var j = 0; j < mixes.length; j++) {
                    var val = mixes[j];
                    if (val !== entityName) {
                        className += ' ' + val;
                    }
                }
            }
        }
        return className;
    }
    return function cnGenerator(b, e) {
        return function (elemOrMods, elemModsOrBlockMix, elemMix) {
            if (typeof elemOrMods === 'string') {
                if (Array.isArray(elemModsOrBlockMix)) {
                    return stringify(b, elemOrMods, undefined, elemModsOrBlockMix);
                }
                return stringify(b, elemOrMods, elemModsOrBlockMix, elemMix);
            }
            return stringify(b, e, elemOrMods, elemModsOrBlockMix);
        };
    };
}
/**
 * BEM Entity className initializer with React naming preset.
 *
 * @example
 * ``` ts
 *
 * import { cn } from '@bem-react/classname';
 *
 * const cat = cn('Cat');
 *
 * cat(); // Cat
 * cat({ size: 'm' }); // Cat_size_m
 * cat('Tail'); // Cat-Tail
 * cat('Tail', { length: 'small' }); // Cat-Tail_length_small
 *
 * const dogPaw = cn('Dog', 'Paw');
 *
 * dogPaw(); // Dog-Paw
 * dogPaw({ color: 'black', exists: true }); // Dog-Paw_color_black Dog-Paw_exists
 * ```
 *
 * @see https://en.bem.info/methodology/naming-convention/#react-style
 */
var cn = withNaming({
    e: '-',
    m: '_',
});

exports.cn = cn;
exports.withNaming = withNaming;


/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/@bem-react/classname/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/@bem-react/classname/index.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./build/classname.development.js */ "./node_modules/@consta/uikit/node_modules/@bem-react/classname/build/classname.development.js")
}


/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/dom-helpers/esm/addClass.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/dom-helpers/esm/addClass.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ addClass
/* harmony export */ });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/@consta/uikit/node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0,_hasClass__WEBPACK_IMPORTED_MODULE_0__.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/dom-helpers/esm/hasClass.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/dom-helpers/esm/hasClass.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ hasClass
/* harmony export */ });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/dom-helpers/esm/removeClass.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/dom-helpers/esm/removeClass.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ removeClass
/* harmony export */ });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/object-assign/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/object-assign/index.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/prop-types/checkPropTypes.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/prop-types/checkPropTypes.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/@consta/uikit/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/@consta/uikit/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/@consta/uikit/node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/@consta/uikit/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/@consta/uikit/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/prop-types/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/prop-types/index.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/@consta/uikit/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/@consta/uikit/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/react-is/cjs/react-is.development.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/react-is/cjs/react-is.development.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/react-is/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/react-is/index.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/@consta/uikit/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/react-transition-group/esm/CSSTransition.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/react-transition-group/esm/CSSTransition.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@consta/uikit/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@consta/uikit/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@consta/uikit/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/@consta/uikit/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/@consta/uikit/node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/@consta/uikit/node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/@consta/uikit/node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/@consta/uikit/node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, _Transition__WEBPACK_IMPORTED_MODULE_7__.default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
}) : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSSTransition);

/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/react-transition-group/esm/Transition.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/react-transition-group/esm/Transition.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UNMOUNTED": () => /* binding */ UNMOUNTED,
/* harmony export */   "EXITED": () => /* binding */ EXITED,
/* harmony export */   "ENTERING": () => /* binding */ ENTERING,
/* harmony export */   "ENTERED": () => /* binding */ ENTERED,
/* harmony export */   "EXITING": () => /* binding */ EXITING,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@consta/uikit/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@consta/uikit/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/@consta/uikit/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/@consta/uikit/node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/@consta/uikit/node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/@consta/uikit/node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default().findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__.default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default().findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__.default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default().findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__.default.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default().Children.only(children), childProps))
    );
  };

  return Transition;
}((react__WEBPACK_IMPORTED_MODULE_3___default().Component));

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__.default;
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    current: typeof Element === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any) : prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element.isRequired)]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Enable or disable enter transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Enable or disable exit transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
} : 0; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);

/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null));

/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/react-transition-group/esm/config.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/react-transition-group/esm/config.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeoutsShape": () => /* binding */ timeoutsShape,
/* harmony export */   "classNamesShape": () => /* binding */ classNamesShape
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/@consta/uikit/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
}).isRequired]) : 0;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
})]) : 0;

/***/ }),

/***/ "./node_modules/@consta/uikit/node_modules/tslib/tslib.es6.js":
/*!********************************************************************!*\
  !*** ./node_modules/@consta/uikit/node_modules/tslib/tslib.es6.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => /* binding */ __extends,
/* harmony export */   "__assign": () => /* binding */ __assign,
/* harmony export */   "__rest": () => /* binding */ __rest,
/* harmony export */   "__decorate": () => /* binding */ __decorate,
/* harmony export */   "__param": () => /* binding */ __param,
/* harmony export */   "__metadata": () => /* binding */ __metadata,
/* harmony export */   "__awaiter": () => /* binding */ __awaiter,
/* harmony export */   "__generator": () => /* binding */ __generator,
/* harmony export */   "__createBinding": () => /* binding */ __createBinding,
/* harmony export */   "__exportStar": () => /* binding */ __exportStar,
/* harmony export */   "__values": () => /* binding */ __values,
/* harmony export */   "__read": () => /* binding */ __read,
/* harmony export */   "__spread": () => /* binding */ __spread,
/* harmony export */   "__spreadArrays": () => /* binding */ __spreadArrays,
/* harmony export */   "__await": () => /* binding */ __await,
/* harmony export */   "__asyncGenerator": () => /* binding */ __asyncGenerator,
/* harmony export */   "__asyncDelegator": () => /* binding */ __asyncDelegator,
/* harmony export */   "__asyncValues": () => /* binding */ __asyncValues,
/* harmony export */   "__makeTemplateObject": () => /* binding */ __makeTemplateObject,
/* harmony export */   "__importStar": () => /* binding */ __importStar,
/* harmony export */   "__importDefault": () => /* binding */ __importDefault,
/* harmony export */   "__classPrivateFieldGet": () => /* binding */ __classPrivateFieldGet,
/* harmony export */   "__classPrivateFieldSet": () => /* binding */ __classPrivateFieldSet
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Modal/Modal.css":
/*!********************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Modal/Modal.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../css-loader/dist/cjs.js!../../../../../../scoped-css-loader/index.js!../../../../../../sass-loader/dist/cjs.js!./Modal.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Modal/Modal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Modal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Modal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Text/Text.css":
/*!******************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Text/Text.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Text_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../css-loader/dist/cjs.js!../../../../../../scoped-css-loader/index.js!../../../../../../sass-loader/dist/cjs.js!./Text.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Text/Text.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Text_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Text_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css":
/*!********************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../css-loader/dist/cjs.js!../../../../../../scoped-css-loader/index.js!../../../../../../sass-loader/dist/cjs.js!./Theme.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_color_gpnDark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../css-loader/dist/cjs.js!../../../../../../../scoped-css-loader/index.js!../../../../../../../sass-loader/dist/cjs.js!./Theme_color_gpnDark.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_color_gpnDark_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_color_gpnDark_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_color_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../css-loader/dist/cjs.js!../../../../../../../scoped-css-loader/index.js!../../../../../../../sass-loader/dist/cjs.js!./Theme_color_gpnDefault.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_color_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_color_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDisplay.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDisplay.css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_color_gpnDisplay_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../css-loader/dist/cjs.js!../../../../../../../scoped-css-loader/index.js!../../../../../../../sass-loader/dist/cjs.js!./Theme_color_gpnDisplay.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDisplay.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_color_gpnDisplay_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_color_gpnDisplay_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_control_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../css-loader/dist/cjs.js!../../../../../../../scoped-css-loader/index.js!../../../../../../../sass-loader/dist/cjs.js!./Theme_control_gpnDefault.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_control_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_control_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_font_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../css-loader/dist/cjs.js!../../../../../../../scoped-css-loader/index.js!../../../../../../../sass-loader/dist/cjs.js!./Theme_font_gpnDefault.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_font_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_font_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_size_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../css-loader/dist/cjs.js!../../../../../../../scoped-css-loader/index.js!../../../../../../../sass-loader/dist/cjs.js!./Theme_size_gpnDefault.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_size_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_size_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_space_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../css-loader/dist/cjs.js!../../../../../../../scoped-css-loader/index.js!../../../../../../../sass-loader/dist/cjs.js!./Theme_space_gpnDefault.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/scoped-css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_space_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_scoped_css_loader_index_js_sass_loader_dist_cjs_js_Theme_space_gpnDefault_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/component/index.tsx");
/******/ })()

));
//# sourceMappingURL=component.834053ee0db5b4c71841.js.map