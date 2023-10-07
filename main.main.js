"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["main"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Tourney_Expanded-Light.ttf */ "./src/Tourney_Expanded-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Tourney_SemiCondensed-Black.ttf */ "./src/Tourney_SemiCondensed-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Tourney-Italic";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: "Tourney_SemiCondensed-Black";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

body {
    height: 100vh;
    margin: 0;
    font-family: "Tourney_SemiCondensed-Black";
}

button {
    font-family: "Tourney_SemiCondensed-Black";
}

header,
footer {
    padding: 50px;
    background-color: rgb(6, 6, 105);
    color: aliceblue;
    font-family: "Tourney-Italic";
}

header > h1 {
    margin: 0;
    font-size: 80px;
    text-align: center;
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.overlay {
    background-color: black;
    opacity: .5;
    position: fixed;
    z-index: 2;
    height: 100vh;
    top: 0;
    left: 0;
    width: 100%;
}

.overlayHalf {
    background-color: black;
    opacity: .5;
    position: fixed;
    z-index: 2;
    height: inherit;
    width: inherit;
}

.ngDiv {
    border: none;
    border-radius: 5px;
    position: absolute;
    z-index: 3;
    max-width: 400px;
    background-color: white;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ngh1 {
    font-size: 50px;
}

.vsText {
    font-size: 40px;
}

.pvpButton,
.pveButton {
    padding: 20px;
    font-size: 35px;
    border-radius: 5px;
    border: none;
}

.pvpButton:hover,
.pveButton:hover {
    color: white;
    background-color: rgb(6, 6, 105);
}

.idp {
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
}

.giDiv {
    padding: 40px;
    border-radius: 5px;
    background-color: white;
    position: absolute;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pvpForm,
.pveForm {
    width: max-content;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.p1Div,
.p2Div {
    display: flex;
    gap: 30px;
}

input {
    font-family: "Tourney_SemiCondensed-Black";
    background-color: rgb(239, 239, 239);
    border: none;
    border-radius: 5px;
    width: 200px;
    font-size: 32px;
}

.pvpSubmit,
.pveSubmit {
    padding: 15px;
    font-size: 28px;
    border-radius: 5px;
    border: none;
}

.pvpSubmit:hover,
.pveSubmit:hover {
    background-color: rgb(6, 6, 105);
    color: white;
}

/* used to hide things */

.hide {
    display: none;
}

/* prep divs */

.prepParent {
    position: absolute;
    z-index: 3;
    display: flex;
    gap: 40px;
    align-items: center;
}

.prepDiv {
    padding: 40px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.prepH1 {
    margin-bottom: 10px;
}

.p_mess {
    margin-top: 0;
    margin-bottom: 10px;
}

.placementDiv {
    display: flex;
    justify-content: space-evenly;
}

.prepGrid {
    display: grid;
    grid-template-columns: repeat(10, 30px);
    grid-template-rows: repeat(10, 30px);
    gap: 5px;

}

.prepBox {
    height: 30px;
    width: 30px;
    background-color: grey;
}

.prepBox:hover {
    border: solid;
    border-width: 2px;
    border-color: orange;
}

.p_right {
    width: 207px;
}

.shipsH2 {
    margin-top: 0;
    margin-bottom: 10px;
}

.oriH3_1,
.oriH3_2 {
    margin-top: 0;
    margin-bottom: 10px;
}

.rtButton {
    height: 30px;
    width: 100px;
    border: none;
    border-radius: 5px;
}

.rtButton:hover {
    background-color: rgb(6, 6, 105);
    color: white;
}

.shipsDiv {
    padding-top: 15px;
}

.shipSelector {
    background-color: rgb(239, 239, 239);
    margin-bottom: 5px;
    border-radius: 5px;
    font-size: 18px;
    padding: 6px;
}

.selected {
    background-color: rgb(6, 6, 105);
    color: white;
}

.prepSB {
    margin-top: 30px;
    height: 30px;
    width: 100px;
    border: none;
    border-radius: 5px;
}

.prepSB:hover {
    color: white;
    background-color: rgb(6, 6, 105);
}

/* game section */

.gs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    
}

.gsRight {
    position: relative;
}

.gsLeft {
    position: relative;
}

.overlayHalf {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.gsMessage {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 24px;
}

.scores {
    font-size: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);    
}

.pscoreboard1,
.pscoreboard2 {
    margin: 15px;
    text-align: center;
}

.boardContainer {
    display: flex;
    gap: 70px;
}

#p1Board,
#p2Board {
    display: grid;
    grid-template-columns: repeat(10, 50px);
    grid-template-rows: repeat(10, 50px);
    gap: 5px;
}

.box {
    height: 50px;
    width: 50px;
    background-color: grey;
}

.box:hover {
    background-color: yellow;
}

footer {
    min-height: 92px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: \"Tourney-Italic\";\n    src: url(\"Tourney_Expanded-Light.ttf\");\n}\n\n@font-face {\n    font-family: \"Tourney_SemiCondensed-Black\";\n    src: url(\"Tourney_SemiCondensed-Black.ttf\");\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n    font-family: \"Tourney_SemiCondensed-Black\";\n}\n\nbutton {\n    font-family: \"Tourney_SemiCondensed-Black\";\n}\n\nheader,\nfooter {\n    padding: 50px;\n    background-color: rgb(6, 6, 105);\n    color: aliceblue;\n    font-family: \"Tourney-Italic\";\n}\n\nheader > h1 {\n    margin: 0;\n    font-size: 80px;\n    text-align: center;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.overlay {\n    background-color: black;\n    opacity: .5;\n    position: fixed;\n    z-index: 2;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n.overlayHalf {\n    background-color: black;\n    opacity: .5;\n    position: fixed;\n    z-index: 2;\n    height: inherit;\n    width: inherit;\n}\n\n.ngDiv {\n    border: none;\n    border-radius: 5px;\n    position: absolute;\n    z-index: 3;\n    max-width: 400px;\n    background-color: white;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.ngh1 {\n    font-size: 50px;\n}\n\n.vsText {\n    font-size: 40px;\n}\n\n.pvpButton,\n.pveButton {\n    padding: 20px;\n    font-size: 35px;\n    border-radius: 5px;\n    border: none;\n}\n\n.pvpButton:hover,\n.pveButton:hover {\n    color: white;\n    background-color: rgb(6, 6, 105);\n}\n\n.idp {\n    position: absolute;\n    z-index: 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.giDiv {\n    padding: 40px;\n    border-radius: 5px;\n    background-color: white;\n    position: absolute;\n    z-index: 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.pvpForm,\n.pveForm {\n    width: max-content;\n    font-size: 32px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n}\n\n.p1Div,\n.p2Div {\n    display: flex;\n    gap: 30px;\n}\n\ninput {\n    font-family: \"Tourney_SemiCondensed-Black\";\n    background-color: rgb(239, 239, 239);\n    border: none;\n    border-radius: 5px;\n    width: 200px;\n    font-size: 32px;\n}\n\n.pvpSubmit,\n.pveSubmit {\n    padding: 15px;\n    font-size: 28px;\n    border-radius: 5px;\n    border: none;\n}\n\n.pvpSubmit:hover,\n.pveSubmit:hover {\n    background-color: rgb(6, 6, 105);\n    color: white;\n}\n\n/* used to hide things */\n\n.hide {\n    display: none;\n}\n\n/* prep divs */\n\n.prepParent {\n    position: absolute;\n    z-index: 3;\n    display: flex;\n    gap: 40px;\n    align-items: center;\n}\n\n.prepDiv {\n    padding: 40px;\n    border-radius: 5px;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.prepH1 {\n    margin-bottom: 10px;\n}\n\n.p_mess {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.placementDiv {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.prepGrid {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n    gap: 5px;\n\n}\n\n.prepBox {\n    height: 30px;\n    width: 30px;\n    background-color: grey;\n}\n\n.prepBox:hover {\n    border: solid;\n    border-width: 2px;\n    border-color: orange;\n}\n\n.p_right {\n    width: 207px;\n}\n\n.shipsH2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.oriH3_1,\n.oriH3_2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.rtButton {\n    height: 30px;\n    width: 100px;\n    border: none;\n    border-radius: 5px;\n}\n\n.rtButton:hover {\n    background-color: rgb(6, 6, 105);\n    color: white;\n}\n\n.shipsDiv {\n    padding-top: 15px;\n}\n\n.shipSelector {\n    background-color: rgb(239, 239, 239);\n    margin-bottom: 5px;\n    border-radius: 5px;\n    font-size: 18px;\n    padding: 6px;\n}\n\n.selected {\n    background-color: rgb(6, 6, 105);\n    color: white;\n}\n\n.prepSB {\n    margin-top: 30px;\n    height: 30px;\n    width: 100px;\n    border: none;\n    border-radius: 5px;\n}\n\n.prepSB:hover {\n    color: white;\n    background-color: rgb(6, 6, 105);\n}\n\n/* game section */\n\n.gs {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 20px;\n    \n}\n\n.gsRight {\n    position: relative;\n}\n\n.gsLeft {\n    position: relative;\n}\n\n.overlayHalf {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.gsMessage {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 24px;\n}\n\n.scores {\n    font-size: 24px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);    \n}\n\n.pscoreboard1,\n.pscoreboard2 {\n    margin: 15px;\n    text-align: center;\n}\n\n.boardContainer {\n    display: flex;\n    gap: 70px;\n}\n\n#p1Board,\n#p2Board {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    gap: 5px;\n}\n\n.box {\n    height: 50px;\n    width: 50px;\n    background-color: grey;\n}\n\n.box:hover {\n    background-color: yellow;\n}\n\nfooter {\n    min-height: 92px;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gameBoardFactory = () => {
    
    let placedShips = [];
    let sunkenCount = 0;
    const maxSunken = 5;
    let gameOver = false;
    let board = [];
    for (let i = 0; i < 10; i++) {
        board.push([]);
        for (let j = 0; j < 10; j++) {
            board[i].push("");
        }
    }

    const getBoard = () => {
        return board;
    };

    const getSunkenCount = () => {
        return sunkenCount;
    };

    const getGameStatus = () => {
        return gameOver;
    }; 

    // true = horizontal, false = vertical
    let shipOrientation = true;

    const rotateShip = () => {
        if (shipOrientation) {
            shipOrientation = false;
            return shipOrientation;
        } else {
            shipOrientation = true;
            return shipOrientation;
        } 
    };

    const getShipOrientation = () => {
        return shipOrientation;
    };

    const shipFactory = (shipLength, cruiserStatus) => {
   
        return {
            shipLength,
            hits: 0,
            sunkStatus: false,
            cruiserStatus,
            hit: function() {
                this.hits++;
            },
            isSunk: function() {
                if (this.shipLength === this.hits) this.sunkStatus = true;
            }
        };
    };

    const placeAIShip = (shipLength, yCoord, xCoord, aiOrientation) => {
        if (shipLength === 5) {
            let carrier = shipFactory(shipLength, null);
            if (aiOrientation === 0) { // horizontal
                for (let i = xCoord; i < xCoord + shipLength; i++) {
                    board[yCoord][i] = carrier;
                }

            } else { // 1 which is vertical
                for (let i = yCoord; i < yCoord + shipLength; i++) {
                    board[i][xCoord] = carrier;
                }

            }

        } else if (shipLength === 4) {
            let battleship = shipFactory(shipLength, null);
            if (aiOrientation === 0) {
                for (let i = xCoord; i < xCoord + shipLength; i++) {
                    board[yCoord][i] = battleship;
                }

            } else {
                for (let i = yCoord; i < yCoord + shipLength; i++) {
                    board[i][xCoord] = battleship;
                }

            }

        } else if (shipLength === 3) {
            let threeHitter = shipFactory(shipLength, null);
            if (aiOrientation === 0) {
                for (let i = xCoord; i < xCoord + shipLength; i++) {
                    board[yCoord][i] = threeHitter;
                }
                
            } else {
                for (let i = yCoord; i < yCoord + shipLength; i++) {
                    board[i][xCoord] = threeHitter;
                }
                
            }

        } else if (shipLength === 2) {
            let destroyer = shipFactory(shipLength, null);
            if (aiOrientation === 0) {
                for (let i = xCoord; i < xCoord + shipLength; i++) {
                    board[yCoord][i] = destroyer;
                }
                
            } else {
                for (let i = yCoord; i < yCoord + shipLength; i++) {
                    board[i][xCoord] = destroyer;
                }

            }

        }
    }
    
    const placeShip = (shipLength, yCoord, xCoord, cruiserStat) => {
        if (shipLength === 5) {
            let carrier = shipFactory(shipLength, null);
            if (getShipOrientation()) {
                if (board[yCoord].length - xCoord >= shipLength){
                    for (let i = xCoord; i < xCoord + shipLength; i++) {
                        board[yCoord][i] = carrier;
                    }
                    if (!placedShips.includes("carrier")) placedShips.push("carrier");

                } else {
                    return "Not enough space. Cannot place carrier here.";

                }

            } else {
                if (board.length - yCoord >= shipLength) {
                    for (let i = yCoord; i < yCoord + shipLength; i++) {
                        board[i][xCoord] = carrier;
                    }
                    if (!placedShips.includes("carrier")) placedShips.push("carrier");

                } else {
                    return "Not enough space. Cannot place carrier here.";

                }

            }

        } else if (shipLength === 4) {
            let battleship = shipFactory(shipLength, null);
            if (getShipOrientation()) {
                if (board[yCoord].length - xCoord >= shipLength){
                    for (let i = xCoord; i < xCoord + shipLength; i++) {
                        board[yCoord][i] = battleship;
                    }
                    if (!placedShips.includes("battleship")) placedShips.push("battleship");

                } else {
                    return "Not enough space. Cannot place battleship here.";

                }

            } else {
                if (board.length - yCoord >= shipLength) {
                    for (let i = yCoord; i < yCoord + shipLength; i++) {
                        board[i][xCoord] = battleship;
                    }
                    if (!placedShips.includes("battleship")) placedShips.push("battleship");

                } else {
                    return "Not enough space. Cannot place battleship here.";

                }

            }
         
        } else if (shipLength === 3) {
            if (cruiserStat) {
                let cruiser = shipFactory(shipLength, true);
                if (getShipOrientation()) {
                    if (board[yCoord].length - xCoord >= shipLength){
                        for (let i = xCoord; i < xCoord + shipLength; i++) {
                            board[yCoord][i] = cruiser;
                        }
                        if (!placedShips.includes("cruiser")) placedShips.push("cruiser");

                    } else {
                        return "Not enough space. Cannot place cruiser here.";

                    }
    
                } else {
                    if (board.length - yCoord >= shipLength) {
                        for (let i = yCoord; i < yCoord + shipLength; i++) {
                            board[i][xCoord] = cruiser;
                        }
                        if (!placedShips.includes("cruiser")) placedShips.push("cruiser");

                    } else {
                        return "Not enough space. Cannot place cruiser here.";

                    }

                }
    
            } else {
                let submarine = shipFactory(shipLength, false);
                if (getShipOrientation()) {
                    if (board[yCoord].length - xCoord >= shipLength){
                        for (let i = xCoord; i < xCoord + shipLength; i++) {
                            board[yCoord][i] = submarine;
                        }
                        if (!placedShips.includes("submarine")) placedShips.push("submarine");

                    } else {
                        return "Not enough space. Cannot place submarine here.";

                    }
    
                } else {
                    if (board.length - yCoord >= shipLength) {
                        for (let i = yCoord; i < yCoord + shipLength; i++) {
                            board[i][xCoord] = submarine;
                        }
                        if (!placedShips.includes("submarine")) placedShips.push("submarine");

                    } else {
                        return "Not enough space. Cannot place submarine here.";

                    }

                }

            }

        } else {
            let destroyer = shipFactory(shipLength, null);
            if (getShipOrientation()) {
                if (board[yCoord].length - xCoord >= shipLength){
                    for (let i = xCoord; i < xCoord + shipLength; i++) {
                        board[yCoord][i] = destroyer;
                    }
                    if (!placedShips.includes("destroyer")) placedShips.push("destroyer");

                } else {
                    return "Not enough space. Cannot place destroyer here.";

                }

            } else {
                if (board.length - yCoord >= shipLength) {
                    for (let i = yCoord; i < yCoord + shipLength; i++) {
                        board[i][xCoord] = destroyer;
                    }
                    if (!placedShips.includes("destroyer")) placedShips.push("destroyer");

                } else {
                    return "Not enough space. Cannot place destroyer here.";

                }

            }

        }

    };

    const receiveAttack = (yCoord, xCoord) => {
        let results = {
            status: "",
            sunk: null,
            gameOver: false
        };
        if (board[yCoord][xCoord] === "") {
            board[yCoord][xCoord] = "M";
            results.status = "M";
            return results;

        } else if (board[yCoord][xCoord] === "M" || board[yCoord][xCoord] === "X") {
            return "You cannot strike the same spot twice";

        } else {
            board[yCoord][xCoord].hit();
            board[yCoord][xCoord].isSunk();
            results.status = "X";
            if (board[yCoord][xCoord].sunkStatus) {
                sunkenCount++;
                results.sunk = true;
                if (allSunk()) {
                    results.gameOver = true;
                    board[yCoord][xCoord] = "X";
                    return results;
    
                } else {
                    board[yCoord][xCoord] = "X";
                    return results;

                }

            }
            board[yCoord][xCoord] = "X";
            return results;

        }

    };

    const allSunk = () => {
        if (maxSunken === getSunkenCount()) {
            return true;

        } else {
            return false;
            
        }

    };

    const getShips = () => {
        return placedShips;
        
    }

    return {
        getBoard,
        getGameStatus,
        getSunkenCount,
        rotateShip,
        getShipOrientation, 
        placeShip,
        placeAIShip,
        receiveAttack,
        getShips
    };
};
// module.exports = gameBoardFactory;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoardFactory);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loadUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadUI */ "./src/loadUI.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _prepDivFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prepDivFactory */ "./src/prepDivFactory.js");





const body = document.querySelector("body");
let selectedLength = 5;
const overlayDiv = document.createElement("div");
overlayDiv.classList.add("overlay");
body.appendChild(overlayDiv);
(0,_loadUI__WEBPACK_IMPORTED_MODULE_1__["default"])(body);
const newGameDiv = document.querySelector(".ngDiv");
const gameInformationDiv = document.querySelector(".giDiv");
const pvpButton = document.querySelector(".pvpButton");
const pveButton = document.querySelector(".pveButton");
const pvpForm = document.querySelector(".pvpForm");
const pveForm = document.querySelector(".pveForm");
const pvpSubmitButton = document.querySelector(".pvpSubmit");
const pveSubmitButton = document.querySelector(".pveSubmit");
const prepParent = document.querySelector(".prepParent");
const pvp1Input = document.querySelector("#pvp1Input");
const pvp2Input = document.querySelector("#pvp2Input");
const pve1Input = document.querySelector("#pve1Input");
const gsMessage = document.querySelector(".gsMessage");
const pScoreBoard1 = document.querySelector(".pscoreboard1");
const pScoreBoard2 = document.querySelector(".pscoreboard2");
const leftBoardO = document.querySelector(".gslO");
const rightBoardO = document.querySelector(".gsrO");
const gameTilesA = document.querySelectorAll(".board_a");
const gameTilesB = document.querySelectorAll(".board_b");
let neighbors = [];

const setAIBoard = (board) => {
    let totalPlaced = 0;
    while (totalPlaced < 5) {
        let orientation = Math.floor(Math.random()*2); // potentially switch orientation every loop, 0 for horizontal, 1 for vertical
        let length = 0;
        if (totalPlaced === 0) { // place the carrier
            length = 5;
            let xStart = Math.floor(Math.random()*10);
            let yStart = Math.floor(Math.random()*10);
            if (orientation === 0) {
                if ((xStart + length < 10) && (10 - xStart >= length)) {
                    if (board.getBoard()[yStart][xStart] === "" && board.getBoard()[yStart][xStart+1] === "" && board.getBoard()[yStart][xStart+2] === "" && board.getBoard()[yStart][xStart+3] === "" && board.getBoard()[yStart][xStart+4] === "") {
                        board.placeAIShip(5, yStart, xStart, orientation);
                        totalPlaced++;
                    }
                    
                }

            } else if (orientation === 1) {
                if ((yStart + length < 10) && (10 - yStart >= length)) {
                    if (board.getBoard()[yStart][xStart] === "" && board.getBoard()[yStart+1][xStart] === "" && board.getBoard()[yStart+2][xStart] === "" && board.getBoard()[yStart+3][xStart] === "" && board.getBoard()[yStart+4][xStart] === "") {
                        board.placeAIShip(5, yStart, xStart, orientation);
                        totalPlaced++;
                    }
                }

            }

        } else if (totalPlaced === 1) { // place the battleship
            length = 4;
            let xStart = Math.floor(Math.random()*10);
            let yStart = Math.floor(Math.random()*10);
            if (orientation === 0) {
                if ((xStart + length < 10) && (10 - xStart >= length)) {
                    if (board.getBoard()[yStart][xStart] === "" && board.getBoard()[yStart][xStart+1] === "" && board.getBoard()[yStart][xStart+2] === "" && board.getBoard()[yStart][xStart+3] === "") {
                        board.placeAIShip(4, yStart, xStart, orientation);
                        totalPlaced++;
                    }
                }

            } else if (orientation === 1) {
                if ((yStart + length < 10) && (10 - yStart >= length)) {
                    if (board.getBoard()[yStart][xStart] === "" && board.getBoard()[yStart+1][xStart] === "" && board.getBoard()[yStart+2][xStart] === "" && board.getBoard()[yStart+3][xStart] === "") {
                        board.placeAIShip(4, yStart, xStart, orientation);
                        totalPlaced++;
                    }
                }

            }

        } else if (totalPlaced === 2) { // place the cruiser
            length = 3;
            let xStart = Math.floor(Math.random()*10);
            let yStart = Math.floor(Math.random()*10);
            if (orientation === 0) {
                if ((xStart + length < 10) && (10 - xStart >= length)) {
                    if (board.getBoard()[yStart][xStart] === "" && board.getBoard()[yStart][xStart+1] === "" && board.getBoard()[yStart][xStart+2] === "") {
                        board.placeAIShip(3, yStart, xStart, orientation);
                        totalPlaced++;
                    }
                }

            } else if (orientation === 1) {
                if ((yStart + length < 10) && (10 - yStart >= length)) {
                    if (board.getBoard()[yStart][xStart] === "" && board.getBoard()[yStart+1][xStart] === "" && board.getBoard()[yStart+2][xStart] === "") {
                        board.placeAIShip(3, yStart, xStart, orientation);
                        totalPlaced++;
                    }
                }

            }

        } else if (totalPlaced === 3) { // place the sub
            length = 3;
            let xStart = Math.floor(Math.random()*10);
            let yStart = Math.floor(Math.random()*10);
            if (orientation === 0) {
                if ((xStart + length < 10) && (10 - xStart >= length)) {
                    if (board.getBoard()[yStart][xStart] === "" && board.getBoard()[yStart][xStart+1] === "" && board.getBoard()[yStart][xStart+2] === "") {
                        board.placeAIShip(3, yStart, xStart, orientation);
                        totalPlaced++;
                    }
                }

            } else if (orientation === 1) {
                if ((yStart + length < 10) && (10 - yStart >= length)) {
                    if (board.getBoard()[yStart][xStart] === "" && board.getBoard()[yStart+1][xStart] === "" && board.getBoard()[yStart+2][xStart] === "") {
                        board.placeAIShip(3, yStart, xStart, orientation);
                        totalPlaced++;
                    }
                }

            }

        } else if (totalPlaced === 4) { // place the destroyer
            length = 2;
            let xStart = Math.floor(Math.random()*10);
            let yStart = Math.floor(Math.random()*10);
            if (orientation === 0) {
                if ((xStart + length < 10) && (10 - xStart >= length)) {
                    if (board.getBoard()[yStart][xStart] === "" && board.getBoard()[yStart][xStart+1] === "") {
                        board.placeAIShip(2, yStart, xStart, orientation);
                        totalPlaced++;
                    }
                }

            } else if (orientation === 1) {
                if ((yStart + length < 10) && (10 - yStart >= length)) {
                    if (board.getBoard()[yStart][xStart] === "" && board.getBoard()[yStart+1][xStart] === "") {
                        board.placeAIShip(2, yStart, xStart, orientation);
                        totalPlaced++;
                    }
                }

            }

        }
        
    };
}

const aiAttack = (enemyBoard, humanName, neighborArray) => {

    let miss = false;
    let xCoord = 0;
    let yCoord = 0;
    let attack;
    let targetTile;

    while (!miss) {
        xCoord = Math.floor(Math.random()*10);
        yCoord = Math.floor(Math.random()*10);

        if (neighborArray.length > 0) {
            let attackCoords = neighborArray.pop();
            attack = enemyBoard.receiveAttack(attackCoords.y, attackCoords.x);

            if (attack === "You cannot strike the same spot twice") {
                gsMessage.innerText = `Message: Try again. ${attack}.`;

            } else if (attack.gameOver === true) {
                gsMessage.innerText = `Message: Game Over! AI Wins! Refresh the browser to play again.`;
                pScoreBoard1.innerText = `${humanName} has ${5 - Number(enemyBoard.getSunkenCount())} ships left.`;
                targetTile = document.querySelector(`#m_a_${attackCoords.x}${attackCoords.y}`);
                targetTile.style.backgroundColor = "red";
                overlayDiv.classList.remove("hide");
                return;

            } else if (attack.status === "M") {
                gsMessage.innerText = `Message: AI missed. Switching turns.`;
                pScoreBoard1.innerText = `${humanName} has ${5 - Number(enemyBoard.getSunkenCount())} ships left.`;
                targetTile = document.querySelector(`#m_a_${attackCoords.x}${attackCoords.y}`);
                targetTile.style.backgroundColor = "cyan";
                miss = true;

            } else {
                if (attack.sunk === true) {
                    gsMessage.innerText = `Message: Ship sunk! AI may fire again.`;
                    pScoreBoard1.innerText = `${humanName} has ${5 - Number(enemyBoard.getSunkenCount())} ships left.`;
                    targetTile = document.querySelector(`#m_a_${attackCoords.x}${attackCoords.y}`);
                    targetTile.style.backgroundColor = "red";

                } else {
                    gsMessage.innerText = `Message: Hit! AI may fire again.`;
                    pScoreBoard1.innerText = `${humanName} has ${5 - Number(enemyBoard.getSunkenCount())} ships left.`;
                    targetTile = document.querySelector(`#m_a_${attackCoords.x}${attackCoords.y}`);
                    targetTile.style.backgroundColor = "red";

                    if (attackCoords.direction === "north" || attackCoords.direction === "south") {
                        neighborArray = neighborArray.filter((element) => {
                            if (element.direction === "north" || element.direction === "south") {
                                return true;
                            }
                        })
                        if (attackCoords.direction === "north" && (attackCoords.y-1) >= 0) {
                            neighborArray.push({direction: "north", y: attackCoords.y-1, x: attackCoords.x})

                        } else if (attackCoords.direction === "south" && (attackCoords.y+1 <= 9)) {
                            neighborArray.push({direction: "south", y: attackCoords.y+1, x: attackCoords.x})

                        }

                    } else if (attackCoords.direction === "east" || attackCoords.direction === "west") {
                        neighborArray = neighborArray.filter((element) => {
                            if (element.direction === "east" || element.direction === "west") {
                                return true;
                            }
                        })
                        if (attackCoords.direction === "east" && (attackCoords.x+1) <= 9) {
                            neighborArray.push({direction: "east", y: attackCoords.y, x: attackCoords.x+1})

                        } else if (attackCoords.direction === "west" && (attackCoords.x-1) >= 0) {
                            neighborArray.push({direction: "west", y: attackCoords.y, x: attackCoords.x-1})

                        }

                    }
                    
                }

            }

        } else {
            attack = enemyBoard.receiveAttack(yCoord, xCoord);
            if (attack === "You cannot strike the same spot twice") {
                gsMessage.innerText = `Message: Try again. ${attack}.`;

            } else if (attack.gameOver === true) {
                gsMessage.innerText = `Message: Game Over! AI Wins! Refresh the browser to play again.`;
                pScoreBoard1.innerText = `${humanName} has ${5 - Number(enemyBoard.getSunkenCount())} ships left.`;
                targetTile = document.querySelector(`#m_a_${xCoord}${yCoord}`);
                targetTile.style.backgroundColor = "red";
                overlayDiv.classList.remove("hide");
                return;

            } else if (attack.status === "M") {
                gsMessage.innerText = `Message: AI missed. Switching turns.`;
                pScoreBoard1.innerText = `${humanName} has ${5 - Number(enemyBoard.getSunkenCount())} ships left.`;
                targetTile = document.querySelector(`#m_a_${xCoord}${yCoord}`);
                targetTile.style.backgroundColor = "cyan";
                miss = true;

            } else {
                if (attack.sunk === true) {
                    gsMessage.innerText = `Message: Ship sunk! AI may fire again.`;
                    pScoreBoard1.innerText = `${humanName} has ${5 - Number(enemyBoard.getSunkenCount())} ships left.`;
                    targetTile = document.querySelector(`#m_a_${xCoord}${yCoord}`);
                    targetTile.style.backgroundColor = "red";

                } else {
                    gsMessage.innerText = `Message: Hit! AI may fire again.`;
                    pScoreBoard1.innerText = `${humanName} has ${5 - Number(enemyBoard.getSunkenCount())} ships left.`;
                    targetTile = document.querySelector(`#m_a_${xCoord}${yCoord}`);
                    targetTile.style.backgroundColor = "red";
                    if ((yCoord-1 >= 0) && enemyBoard.getBoard()[yCoord-1][xCoord] !== "M" && enemyBoard.getBoard()[yCoord-1][xCoord] !== "X") neighborArray.push({direction: "north", y: (yCoord-1), x: xCoord});
                    if ((xCoord+1 <= 9) && enemyBoard.getBoard()[yCoord][xCoord+1] !== "M" && enemyBoard.getBoard()[yCoord][xCoord+1] !== "X") neighborArray.push({direction: "east", y: (yCoord), x: (xCoord+1)});
                    if ((xCoord-1 >= 0) && enemyBoard.getBoard()[yCoord][xCoord-1] !== "M" && enemyBoard.getBoard()[yCoord][xCoord-1] !== "X") neighborArray.push({direction: "west", y: (yCoord), x: (xCoord-1)});
                    if ((yCoord+1 <= 9) && enemyBoard.getBoard()[yCoord+1][xCoord] !== "M" && enemyBoard.getBoard()[yCoord+1][xCoord] !== "X") neighborArray.push({direction: "south", y: (yCoord+1), x: xCoord});
                    
                }

            }


        }                    
        
    }

}

const paintTiles = (board, order) => {
    let boardLayout = board.getBoard();
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const targetPrepBox = document.querySelector(`#${order}_${j}${i}`);
            (boardLayout[i][j] !== "") ? targetPrepBox.style.backgroundColor = "green" : targetPrepBox.style.backgroundColor = "grey";
        }
    }

}

const cleanTheBoard = (board, lengthOfShip, statusOfCruiser) => {
    if (lengthOfShip !== 3) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j ++) {
                if (board[i][j].shipLength === lengthOfShip) board[i][j] = "";
            }
        }

    } else {
        if (statusOfCruiser) {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j ++) {
                    if (board[i][j].cruiserStatus === true) board[i][j] = "";
                }
            }

        } else {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j ++) {
                    if (board[i][j].cruiserStatus === false) board[i][j] = "";
                }
            }

        }

    }
    
}

pvpButton.addEventListener("click", (e) => {
    newGameDiv.classList.add("hide");
    gameInformationDiv.classList.remove("hide");
    pveForm.classList.add("hide");

});

pveButton.addEventListener("click", (e) => {
    newGameDiv.classList.add("hide");
    gameInformationDiv.classList.remove("hide");
    pvpForm.classList.add("hide");

});

pvpSubmitButton.addEventListener("click", (e) => {
    if (pvp1Input.checkValidity() && pvp2Input.checkValidity()) {
        e.preventDefault();
        const name1 = pvp1Input.value;
        const name2 = pvp2Input.value;
        let p1Name = document.querySelector(".p1name");
        p1Name.innerText = `${name1}'s Board:`;
        let p2Name = document.querySelector(".p2name")
        p2Name.innerText = `${name2}'s Board:`;
        let newP1score = document.querySelector(".pscoreboard1");
        let newP2score = document.querySelector(".pscoreboard2");
        newP1score.innerText = `${name1} has 5 ships left.`;
        newP2score.innerText = `${name2} has 5 ships left.`;
        let pvpBoard1 = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])();
        let pvpBoard2 = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])();
        gameInformationDiv.classList.add("hide");
        let pregamePrep1 = (0,_prepDivFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(pvp1Input.value,1);
        let pregamePrep2 = (0,_prepDivFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(pvp2Input.value,2);

        // create players here

        pvpForm.reset();
        prepParent.appendChild(pregamePrep1);
        prepParent.appendChild(pregamePrep2);
        let prepDivP1 = document.querySelector(`[data-PrepDiv="1"]`);
        let prepDivP2 = document.querySelector(`[data-PrepDiv="2"]`);
        prepDivP2.style = "display: none;";
        const prepMessage = document.querySelectorAll(".p_mess")[0];
        const prepMessage2 = document.querySelectorAll(".p_mess")[1];
        const oriH3 = document.querySelector(".oriH3_1");
        const rotate1 = document.querySelector(".rotate_1");
        let cruiserStat;
        const carrier1Div = document.querySelector(".carrier_1");
        const battleship1Div = document.querySelector(".battleship_1");
        const cruiser1Div = document.querySelector(".cruiser_1");
        const submarine1Div = document.querySelector(".submarine_1");
        const destroyer1Div = document.querySelector(".destroyer_1");
        const oriH3_2 = document.querySelector(".oriH3_2");
        const rotate2 = document.querySelector(".rotate_2");
        const carrier2Div = document.querySelector(".carrier_2");
        const battleship2Div = document.querySelector(".battleship_2");
        const cruiser2Div = document.querySelector(".cruiser_2");
        const submarine2Div = document.querySelector(".submarine_2");
        const destroyer2Div = document.querySelector(".destroyer_2");
        let cleanBoard1 = pvpBoard1.getBoard();
        let cleanBoard2 = pvpBoard2.getBoard();
        const prep1Tiles = document.querySelectorAll(".prepboard_a");
        let prepSubmit1 = document.querySelector("[data-submitButton='1']");
        prepSubmit1.disabled = true;
        const prep2Tiles = document.querySelectorAll(".prepboard_b");
        let prepSubmit2 = document.querySelector("[data-submitButton='2']");
        prepSubmit2.disabled = true;

        rotate1.addEventListener("click", (e) => {
            pvpBoard1.rotateShip();
            (oriH3.innerText === "Orientation: Horizontal") ? oriH3.innerText = "Orientation: Vertical" : oriH3.innerText = "Orientation: Horizontal"; 

        });

        carrier1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Carrier Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 5;
            carrier1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        battleship1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Battleship Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 4;
            battleship1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        cruiser1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Cruiser Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 3;
            cruiser1Div.classList.add("selected");
            cruiserStat = true;
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        submarine1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Submarine Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 3;
            submarine1Div.classList.add("selected");
            cruiserStat = false;
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        destroyer1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Destroyer Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 2;
            destroyer1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        prep1Tiles.forEach(tiles => tiles.addEventListener("click", (e) => {            
            let tileId = e.target.getAttribute("id");
            let idArray = tileId.split("");
            if (selectedLength === 5) {
                cleanTheBoard(cleanBoard1, 5);
                if (pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+4] === undefined) {
                        prepMessage.innerText = "Message: Error, carrier out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+4] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Carrier placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the carrier here will cause a collision.";

                        }

                    }

                } else if (!pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 5 ) {
                        prepMessage.innerText = "Message: Error, carrier out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+3][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+4][Number(idArray[2])] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Carrier placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the carrier here will cause a collision.";

                        }

                    }

                } 
                    
            } else if (selectedLength === 4) {
                cleanTheBoard(cleanBoard1, 4);
                if (pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === undefined) {
                        prepMessage.innerText = "Message: Error, battleship out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Battleship placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the battleship here will cause a collision.";

                        }

                    }

                } else if (!pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 4 ) {
                        prepMessage.innerText = "Message: Error, battleship out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+3][Number(idArray[2])] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Battleship placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the battleship here will cause a collision.";

                        }

                    }

                } 

            } else if (selectedLength === 3) {
                cleanTheBoard(cleanBoard1, 3, cruiserStat);
                if (pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined) {
                        (cruiserStat) ? prepMessage.innerText = "Message: Error, cruiser out of bounds." : prepMessage.innerText = "Message: Error, submarine out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            (cruiserStat) ? prepMessage.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage.innerText = "Message: Submarine placed, select and place another ship.";

                        } else {
                            (cruiserStat) ? prepMessage.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage.innerText = "Message: Error, placing the submarine here will cause a collision.";

                        }

                    }

                } else if (!pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 3 ) {
                        (cruiserStat) ? prepMessage.innerText = "Message: Error, cruiser out of bounds." : prepMessage.innerText = "Message: Error, submarine out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            (cruiserStat) ? prepMessage.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage.innerText = "Message: Submarine placed, select and place another ship.";
                            
                        } else {
                            (cruiserStat) ? prepMessage.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage.innerText = "Message: Error, placing the submarine here will cause a collision.";

                        }

                    }

                } 

            } else if (selectedLength === 2) {
                cleanTheBoard(cleanBoard1, 2);
                if (pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined) {
                        prepMessage.innerText = "Message: Error, destroyer out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Destroyer placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                        }

                    }

                } else if (!pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 2 ) {
                        prepMessage.innerText = "Message: Error, destroyer out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Destroyer placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                        }

                    }

                } 

            }

        }));

        prepSubmit1.addEventListener("click", (e) => {
            prepDivP1.style = "display: none;";
            prepDivP2.style = "display: flex";

            rotate2.addEventListener("click", (e) => {
                pvpBoard2.rotateShip();
                (oriH3_2.innerText === "Orientation: Horizontal") ? oriH3_2.innerText = "Orientation: Vertical" : oriH3_2.innerText = "Orientation: Horizontal";

            });
    
            carrier2Div.addEventListener("click", (e) => {
                let otherSelected = document.querySelectorAll(".selected");
                selectedLength = 5;
                carrier2Div.classList.add("selected");
                for (let i = 0; i < otherSelected.length; i ++) {
                    if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
                }
            
            });
            
            battleship2Div.addEventListener("click", (e) => {
                let otherSelected = document.querySelectorAll(".selected");
                selectedLength = 4;
                battleship2Div.classList.add("selected");
                for (let i = 0; i < otherSelected.length; i ++) {
                    if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
                }
            
            });
            
            cruiser2Div.addEventListener("click", (e) => {
                let otherSelected = document.querySelectorAll(".selected");
                selectedLength = 3;
                cruiser2Div.classList.add("selected");
                cruiserStat = true;
                for (let i = 0; i < otherSelected.length; i ++) {
                    if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
                }
            
            });
            
            submarine2Div.addEventListener("click", (e) => {
                let otherSelected = document.querySelectorAll(".selected");
                selectedLength = 3;
                submarine2Div.classList.add("selected");
                cruiserStat = false;
                for (let i = 0; i < otherSelected.length; i ++) {
                    if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
                }
            
            });
            
            destroyer2Div.addEventListener("click", (e) => {
                let otherSelected = document.querySelectorAll(".selected");
                selectedLength = 2;
                destroyer2Div.classList.add("selected");
                for (let i = 0; i < otherSelected.length; i ++) {
                    if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
                }
            
            });
    
            prep2Tiles.forEach(tiles => tiles.addEventListener("click", (e) => {
                let tileId = e.target.getAttribute("id");
                let idArray = tileId.split("");                
                if (selectedLength === 5) {
                    cleanTheBoard(cleanBoard2, 5);
                    if (pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+3] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+4] === undefined) {
                            prepMessage2.innerText = "Message: Error, carrier out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+3] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+4] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Carrier placed, select and place another ship.";

                            } else {
                                prepMessage2.innerText = "Message: Error, placing the carrier here will cause a collision.";

                            }

                        }
    
                    } else if (!pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2.length - Number(idArray[3]) < 5 ) {
                            prepMessage2.innerText = "Message: Error, carrier out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+3][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+4][Number(idArray[2])] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Carrier placed, select and place another ship.";

                            } else {
                                prepMessage2.innerText = "Message: Error, placing the carrier here will cause a collision.";

                            }

                        }

                    } 
                        
                } else if (selectedLength === 4) {
                    cleanTheBoard(cleanBoard2, 4);
                    if (pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+3] === undefined) {
                            prepMessage2.innerText = "Message: Error, battleship out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+3] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Battleship placed, select and place another ship.";
    
                            } else {
                                prepMessage2.innerText = "Message: Error, placing the battleship here will cause a collision.";

                            }

                        }
    
                    } else if (!pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2.length - Number(idArray[3]) < 4 ) {
                            prepMessage2.innerText = "Message: Error, battleship out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+3][Number(idArray[2])] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Battleship placed, select and place another ship.";
    
                            } else {
                                prepMessage2.innerText = "Message: Error, placing the battleship here will cause a collision.";

                            }

                        }

                    } 
    
                } else if (selectedLength === 3) {
                    cleanTheBoard(cleanBoard2, 3, cruiserStat);
                    if (pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === undefined) {
                            (cruiserStat) ? prepMessage2.innerText = "Message: Error, cruiser out of bounds." : prepMessage2.innerText = "Message: Error, submarine out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                (cruiserStat) ? prepMessage2.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage2.innerText = "Message: Submarine placed, select and place another ship.";

                            } else {
                                (cruiserStat) ? prepMessage2.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage2.innerText = "Message: Error, placing the submarine here will cause a collision.";

                            }

                        }
    
                    } else if (!pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2.length - Number(idArray[3]) < 3 ) {
                            (cruiserStat) ? prepMessage2.innerText = "Message: Error, cruiser out of bounds." : prepMessage2.innerText = "Message: Error, submarine out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+2][Number(idArray[2])] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                (cruiserStat) ? prepMessage2.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage2.innerText = "Message: Submarine placed, select and place another ship.";
    
                            } else {
                                (cruiserStat) ? prepMessage2.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage2.innerText = "Message: Error, placing the submarine here will cause a collision.";

                            }

                        }

                    } 
    
                } else if (selectedLength === 2) {
                    cleanTheBoard(cleanBoard2, 2);
                    if (pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === undefined) {
                            prepMessage2.innerText = "Message: Error, destroyer out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Destroyer placed, select and place another ship.";
    
                            } else {
                                prepMessage2.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                            }

                        }
    
                    } else if (!pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2.length - Number(idArray[3]) < 2 ) {
                            prepMessage2.innerText = "Message: Error, destroyer out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+1][Number(idArray[2])] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Destroyer placed, select and place another ship.";

                            } else {
                                prepMessage2.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                            }

                        }

                    } 
    
                }
    
            }));

            prepSubmit2.addEventListener("click", (e) => {
                prepDivP2.style = "display: none;";
                prepParent.classList.add("hide");
                overlayDiv.classList.add("hide");
                leftBoardO.classList.add("overlayHalf");
            });
        });
        // testing 
        
        gameTilesA.forEach(tiles => tiles.addEventListener("click", (e) => {
            let tileId = e.target.getAttribute("id");
            let idArray = tileId.split("");
            let attack = pvpBoard1.receiveAttack(Number(idArray[5]), Number(idArray[4]));
            if (attack === "You cannot strike the same spot twice") {
                gsMessage.innerText = `Message: Try again. ${attack}.`;

            } else if (attack.gameOver === true) {
                gsMessage.innerText = `Message: Game Over! ${name2} Wins! Refresh the browser to play again.`;
                pScoreBoard1.innerText = `${name1} has ${5 - Number(pvpBoard1.getSunkenCount())} ships left.`;
                e.target.style.backgroundColor = "red";
                overlayDiv.classList.remove("hide");
                rightBoardO.classList.remove("overlayHalf");

            } else if (attack.status === "M") {
                gsMessage.innerText = `Message: ${name2} missed. Switching turns.`;
                pScoreBoard1.innerText = `${name1} has ${5 - Number(pvpBoard1.getSunkenCount())} ships left.`;
                e.target.style.backgroundColor = "cyan";
                rightBoardO.classList.remove("overlayHalf");
                leftBoardO.classList.add("overlayHalf");

            } else {
                if (attack.sunk === true) {
                    gsMessage.innerText = `Message: Ship sunk! ${name2} may fire again.`;
                    pScoreBoard1.innerText = `${name1} has ${5 - Number(pvpBoard1.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "red";

                } else {
                    gsMessage.innerText = `Message: Hit! ${name2} may fire again.`;
                    pScoreBoard1.innerText = `${name1} has ${5 - Number(pvpBoard1.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "red";

                }

            }

        }));

        gameTilesB.forEach(tiles => tiles.addEventListener("click", (e) => {
            let tileId = e.target.getAttribute("id");
            let idArray = tileId.split("");
            let attack = pvpBoard2.receiveAttack(Number(idArray[5]), Number(idArray[4]));
            if (attack === "You cannot strike the same spot twice") {
                gsMessage.innerText = `Message: Try again. ${attack}.`;

            } else if (attack.gameOver === true) {
                gsMessage.innerText = `Message: Game Over! ${name1} Wins! Refresh the browser to play again.`;
                pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                e.target.style.backgroundColor = "red";
                overlayDiv.classList.remove("hide");
                leftBoardO.classList.remove("overlayHalf");

            } else if (attack.status === "M") {
                gsMessage.innerText = `Message: ${name1} missed. Switching turns.`;
                pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                e.target.style.backgroundColor = "cyan";
                leftBoardO.classList.remove("overlayHalf");
                rightBoardO.classList.add("overlayHalf");

            } else {
                if (attack.sunk === true) {
                    gsMessage.innerText = `Message: Ship sunk! ${name1} may fire again.`;
                    pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "red";

                } else {
                    gsMessage.innerText = `Message: Hit! ${name1} may fire again.`;
                    pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "red";

                }

            }
            
        }));

    } 

});

pveSubmitButton.addEventListener("click", (e) => {
    if (pve1Input.checkValidity()) {
        e.preventDefault();
        let pveBoard1 = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])();
        let name1 = document.querySelector("#pve1Input").value;
        let p1eSB = document.querySelector(".pscoreboard1");
        p1eSB.innerText = `${name1} has 5 ships left.`;
        let p1Name = document.querySelector(".p1name");
        p1Name.innerText = `${name1}'s Board:`;
        let aiName = "AI";
        let p2eSB = document.querySelector(".pscoreboard2");
        p2eSB.innerText = `${aiName} has 5 ships left.`;
        let p2Name = document.querySelector(".p2name");
        p2Name.innerText = `${aiName}'s Board:`;
        let aiBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])();
        gameInformationDiv.classList.add("hide");
        let pregamePrep1 = (0,_prepDivFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(pve1Input.value, 1);
        prepParent.appendChild(pregamePrep1);
        setAIBoard(aiBoard);
        console.log(aiBoard.getBoard());
        
        // create players here

        pveForm.reset();
        let prepDivP1 = document.querySelector(`[data-PrepDiv="1"]`);
        const prepMessage = document.querySelector(".p_mess");
        const oriH3 = document.querySelector(".oriH3_1");
        const rotate1 = document.querySelector(".rotate_1");
        let cruiserStat;
        const carrier1Div = document.querySelector(".carrier_1");
        const battleship1Div = document.querySelector(".battleship_1");
        const cruiser1Div = document.querySelector(".cruiser_1");
        const submarine1Div = document.querySelector(".submarine_1");
        const destroyer1Div = document.querySelector(".destroyer_1");
        let cleanBoard1 = pveBoard1.getBoard();
        const prep1Tiles = document.querySelectorAll(".prepboard_a");
        let prepSubmit1 = document.querySelector("[data-submitButton='1']");
        prepSubmit1.disabled = true;

        rotate1.addEventListener("click", (e) => {
            pveBoard1.rotateShip();
            (oriH3.innerText === "Orientation: Horizontal") ? oriH3.innerText = "Orientation: Vertical" : oriH3.innerText = "Orientation: Horizontal"; 

        });

        carrier1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Carrier Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 5;
            carrier1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        battleship1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Battleship Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 4;
            battleship1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        cruiser1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Cruiser Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 3;
            cruiser1Div.classList.add("selected");
            cruiserStat = true;
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        submarine1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Submarine Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 3;
            submarine1Div.classList.add("selected");
            cruiserStat = false;
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        destroyer1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Destroyer Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 2;
            destroyer1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });

        prep1Tiles.forEach(tiles => tiles.addEventListener("click", (e) => {            
            let tileId = e.target.getAttribute("id");
            let idArray = tileId.split("");
            if (selectedLength === 5) {
                cleanTheBoard(cleanBoard1, 5);
                if (pveBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+4] === undefined) {
                        prepMessage.innerText = "Message: Error, carrier out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+4] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Carrier placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the carrier here will cause a collision.";

                        }

                    }

                } else if (!pveBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 5 ) {
                        prepMessage.innerText = "Message: Error, carrier out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+3][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+4][Number(idArray[2])] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Carrier placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the carrier here will cause a collision.";

                        }

                    }

                } 
                    
            } else if (selectedLength === 4) {
                cleanTheBoard(cleanBoard1, 4);
                if (pveBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === undefined) {
                        prepMessage.innerText = "Message: Error, battleship out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Battleship placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the battleship here will cause a collision.";

                        }

                    }

                } else if (!pveBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 4 ) {
                        prepMessage.innerText = "Message: Error, battleship out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+3][Number(idArray[2])] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Battleship placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the battleship here will cause a collision.";

                        }

                    }

                } 

            } else if (selectedLength === 3) {
                cleanTheBoard(cleanBoard1, 3, cruiserStat);
                if (pveBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined) {
                        (cruiserStat) ? prepMessage.innerText = "Message: Error, cruiser out of bounds." : prepMessage.innerText = "Message: Error, submarine out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            (cruiserStat) ? prepMessage.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage.innerText = "Message: Submarine placed, select and place another ship.";

                        } else {
                            (cruiserStat) ? prepMessage.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage.innerText = "Message: Error, placing the submarine here will cause a collision.";

                        }

                    }

                } else if (!pveBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 3 ) {
                        (cruiserStat) ? prepMessage.innerText = "Message: Error, cruiser out of bounds." : prepMessage.innerText = "Message: Error, submarine out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            (cruiserStat) ? prepMessage.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage.innerText = "Message: Submarine placed, select and place another ship.";
                            
                        } else {
                            (cruiserStat) ? prepMessage.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage.innerText = "Message: Error, placing the submarine here will cause a collision.";

                        }

                    }

                } 

            } else if (selectedLength === 2) {
                cleanTheBoard(cleanBoard1, 2);
                if (pveBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined) {
                        prepMessage.innerText = "Message: Error, destroyer out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Destroyer placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                        }

                    }

                } else if (!pveBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 2 ) {
                        prepMessage.innerText = "Message: Error, destroyer out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Destroyer placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                        }

                    }

                } 

            }

        }));

        prepSubmit1.addEventListener("click", (e) => {
            prepDivP1.style = "display: none;";
            prepParent.classList.add("hide");
            overlayDiv.classList.add("hide");

            gameTilesB.forEach(tiles => tiles.addEventListener("click", (e) => {
                let tileId = e.target.getAttribute("id");
                let idArray = tileId.split("");
                let attack = aiBoard.receiveAttack(Number(idArray[5]), Number(idArray[4]));
                if (attack === "You cannot strike the same spot twice") {
                    gsMessage.innerText = `Message: Try again. ${attack}.`;
    
                } else if (attack.gameOver === true) {
                    gsMessage.innerText = `Message: Game Over! ${name1} Wins!`;
                    pScoreBoard2.innerText = `${aiName} has ${5 - Number(aiBoard.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "red";
                    overlayDiv.classList.remove("hide");
    
                } else if (attack.status === "M") {
                    gsMessage.innerText = `Message: ${name1} missed. Switching turns.`;
                    pScoreBoard2.innerText = `${aiName} has ${5 - Number(aiBoard.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "cyan";
                    aiAttack(pveBoard1, name1, neighbors);
    
                } else {
                    if (attack.sunk === true) {
                        gsMessage.innerText = `Message: Ship sunk! ${name1} may fire again.`;
                        pScoreBoard2.innerText = `${aiName} has ${5 - Number(aiBoard.getSunkenCount())} ships left.`;
                        e.target.style.backgroundColor = "red";
    
                    } else {
                        gsMessage.innerText = `Message: Hit! ${name1} may fire again.`;
                        pScoreBoard2.innerText = `${aiName} has ${5 - Number(aiBoard.getSunkenCount())} ships left.`;
                        e.target.style.backgroundColor = "red";
    
                    }
    
                }
                
            }));

        });
    }
});


/***/ }),

/***/ "./src/loadUI.js":
/*!***********************!*\
  !*** ./src/loadUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadUI = (body) => {
    
    const header = document.createElement("header");
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = "BATTLESHIP"
    header.appendChild(headerTitle);
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    main.appendChild(content);
    const newGameDiv = document.createElement("div");
    newGameDiv.classList.add("ngDiv");
    const ngh1 = document.createElement("h1");
    ngh1.classList.add("ngh1");
    ngh1.innerText = "Play against...";
    const pvpButton = document.createElement("button");
    pvpButton.classList.add("pvpButton");
    pvpButton.innerText = "a human";
    const vsText = document.createElement("p");
    vsText.classList.add("vsText");
    vsText.innerText = "OR";
    const pveButton = document.createElement("button");
    pveButton.classList.add("pveButton");
    pveButton.innerText = "an AI";
    content.appendChild(newGameDiv);
    newGameDiv.appendChild(ngh1);
    newGameDiv.appendChild(pvpButton);
    newGameDiv.appendChild(vsText);
    newGameDiv.appendChild(pveButton);
    const gameInformationDiv = document.createElement("div");
    gameInformationDiv.classList.add("giDiv");
    gameInformationDiv.classList.add("hide");
    content.appendChild(gameInformationDiv);
    const pvpForm = document.createElement("form");
    pvpForm.classList.add("pvpForm");
    const pvpSubmitButton = document.createElement("button");
    pvpSubmitButton.classList.add("pvpSubmit");
    pvpSubmitButton.innerText = "Submit";
    const pvp1Div = document.createElement("div");
    pvp1Div.classList.add("pvp1Div");
    const pvp1Label = document.createElement("label");
    pvp1Label.setAttribute("for", "pvp1Input");
    pvp1Label.innerText = "Player 1 - Enter name: "
    const pvp1Input = document.createElement("input");
    pvp1Input.setAttribute("name", "pvp1Input");
    pvp1Input.setAttribute("id", "pvp1Input");
    pvp1Input.required = true;
    const pvp2Div = document.createElement("div");
    pvp2Div.classList.add("pvp2Div");
    const pvp2Label = document.createElement("label");
    pvp2Label.setAttribute("for", "pvp2Input");
    pvp2Label.innerText = "Player 2 - Enter name: ";
    const pvp2Input = document.createElement("input");
    pvp2Input.required = true;
    pvp2Input.setAttribute("name", "pvp2Input");
    pvp2Input.setAttribute("id", "pvp2Input");
    gameInformationDiv.appendChild(pvpForm);
    pvpForm.appendChild(pvp1Div);
    pvp1Div.appendChild(pvp1Label);
    pvp1Div.appendChild(pvp1Input);
    pvpForm.appendChild(pvp2Div);
    pvp2Div.appendChild(pvp2Label);
    pvp2Div.appendChild(pvp2Input);
    pvpForm.appendChild(pvpSubmitButton);
    const pveForm = document.createElement("form");
    pveForm.classList.add("pveForm");
    const pveSubmitButton = document.createElement("button");
    pveSubmitButton.classList.add("pveSubmit");
    pveSubmitButton.innerText = "Submit";
    const pve1Div = document.createElement("div");
    pve1Div.classList.add("pve1Div");
    const pve1Label = document.createElement("label");
    pve1Label.setAttribute("for", "pve1Input");
    pve1Label.innerText = "Player 1 - Enter name: "
    const pve1Input = document.createElement("input");
    pve1Input.setAttribute("name", "pve1Input");
    pve1Input.setAttribute("id", "pve1Input");
    pve1Input.required = true;
    gameInformationDiv.appendChild(pveForm);
    pveForm.appendChild(pve1Div);
    pve1Div.appendChild(pve1Label);
    pve1Div.appendChild(pve1Input);
    pveForm.appendChild(pveSubmitButton);
    const prepParent = document.createElement("div");
    prepParent.classList.add("prepParent");
    content.appendChild(prepParent);
    const gameSection = document.createElement("div");
    gameSection.classList.add("gs");
    const gsScoreboardDiv = document.createElement("div");
    gsScoreboardDiv.classList.add("scDiv");
    const gsMessage = document.createElement("p");
    gsMessage.classList.add("gsMessage");
    gsMessage.innerText = "Message: ";
    const scoreContainer = document.createElement("div");
    scoreContainer.classList.add("scores");
    const p1Score = document.createElement("p");
    p1Score.classList.add("pscoreboard1");
    p1Score.innerText = "Player 1 has 5 ships left.";
    const p2Score = document.createElement("p");
    p2Score.classList.add("pscoreboard2");
    p2Score.innerText = "Player 2 has 5 ships left.";
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("boardContainer");
    const gsLeft = document.createElement("div");
    gsLeft.classList.add("gsLeft");
    const gsLeftOverlay = document.createElement("div");
    gsLeftOverlay.classList.add("gslO");
    const gsRight = document.createElement("div");
    gsRight.classList.add("gsRight");
    const gsRightOverlay = document.createElement("div");
    gsRightOverlay.classList.add("gsrO");
    gameSection.appendChild(gsScoreboardDiv);
    gsScoreboardDiv.appendChild(gsMessage);
    gsScoreboardDiv.appendChild(scoreContainer);
    scoreContainer.appendChild(p1Score);
    scoreContainer.appendChild(p2Score);
    gameSection.appendChild(boardContainer);
    boardContainer.appendChild(gsLeft);
    boardContainer.appendChild(gsRight);
    const gsLeftH2 = document.createElement("h2");
    gsLeftH2.classList.add("gsh2");
    gsLeftH2.classList.add("p1name");
    gsLeftH2.innerText = "Player 1: ";
    const gsRightH2 = document.createElement("h2");
    gsRightH2.classList.add("gsh2")
    gsRightH2.classList.add("p2name");
    gsRightH2.innerText = "Player 2: ";
    const p1Board = document.createElement("div");
    p1Board.setAttribute("id", "p1Board");
    const p2Board = document.createElement("div");
    p2Board.setAttribute("id", "p2Board");
    gsLeft.appendChild(gsLeftOverlay);
    gsLeft.appendChild(gsLeftH2);
    gsLeft.appendChild(p1Board);
    gsRight.appendChild(gsRightOverlay);
    gsRight.appendChild(gsRightH2);
    gsRight.appendChild(p2Board);
    const rowCreator = (grid, order, rowNumber) => {
        (order === 1) ? order = "a" : order = "b";
        for (let i = 0; i < 10; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.classList.add(`board_${order}`);
            box.setAttribute("id", `m_${order}_${i}${rowNumber}`);
            grid.appendChild(box);
        }

    }
    rowCreator(p1Board, 1, 0);
    rowCreator(p1Board, 1, 1);
    rowCreator(p1Board, 1, 2);
    rowCreator(p1Board, 1, 3);
    rowCreator(p1Board, 1, 4);
    rowCreator(p1Board, 1, 5);
    rowCreator(p1Board, 1, 6);
    rowCreator(p1Board, 1, 7);
    rowCreator(p1Board, 1, 8);
    rowCreator(p1Board, 1, 9);
    rowCreator(p2Board, 2, 0);
    rowCreator(p2Board, 2, 1);
    rowCreator(p2Board, 2, 2);
    rowCreator(p2Board, 2, 3);
    rowCreator(p2Board, 2, 4);
    rowCreator(p2Board, 2, 5);
    rowCreator(p2Board, 2, 6);
    rowCreator(p2Board, 2, 7);
    rowCreator(p2Board, 2, 8);
    rowCreator(p2Board, 2, 9);
    content.appendChild(gameSection);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadUI);

/***/ }),

/***/ "./src/prepDivFactory.js":
/*!*******************************!*\
  !*** ./src/prepDivFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const prepDivFactory = (name, order) => {
    const prepDiv = document.createElement("div");
    prepDiv.classList.add("prepDiv");
    prepDiv.setAttribute("data-prepDiv", `${order}`);
    const prepH1 = document.createElement("h1");
    prepH1.classList.add("prepH1");
    prepH1.innerText = `${name}, please place your ships on the grid.`;
    const prepMessages = document.createElement("p");
    prepMessages.classList.add("p_mess");
    prepMessages.innerText = "Message: Please select a ship and place it on the grid.";
    const placementDiv = document.createElement("div");
    placementDiv.classList.add("placementDiv");
    const placementLeft = document.createElement("div");
    placementLeft.classList.add("p_left");
    const placementRight = document.createElement("div");
    placementRight.classList.add("p_right");
    const prepGrid = document.createElement("div");
    prepGrid.classList.add("prepGrid");
    prepGrid.setAttribute("data-order", `${order}`);

    const rowCreator = (grid, order, rowNumber) => {
        (order === 1) ? order = "a" : order = "b";
        for (let i = 0; i < 10; i++) {
            const prepBox = document.createElement("div");
            prepBox.classList.add("prepBox");
            prepBox.classList.add(`prepboard_${order}`);
            prepBox.setAttribute("id", `${order}_${i}${rowNumber}`);
            grid.appendChild(prepBox);
        }    
    }

    rowCreator(prepGrid, order, 0);
    rowCreator(prepGrid, order, 1);
    rowCreator(prepGrid, order, 2);
    rowCreator(prepGrid, order, 3);
    rowCreator(prepGrid, order, 4);
    rowCreator(prepGrid, order, 5);
    rowCreator(prepGrid, order, 6);
    rowCreator(prepGrid, order, 7);
    rowCreator(prepGrid, order, 8);
    rowCreator(prepGrid, order, 9);

    
    const oriH3 = document.createElement("h3");
    oriH3.classList.add(`oriH3_${order}`);
    oriH3.innerText = "Orientation: Horizontal";
    const rotateButton = document.createElement("button");
    rotateButton.classList.add("rtButton");
    rotateButton.classList.add(`rotate_${order}`);
    rotateButton.innerText = "Rotate";
    const shipsDiv = document.createElement("div");
    shipsDiv.classList.add("shipsDiv");
    const shipsH2 = document.createElement("h2");
    shipsH2.classList.add("shipsH2");
    shipsH2.innerText = "Ships";
    const carrierDiv = document.createElement("div");
    carrierDiv.innerText = "Carrier";
    carrierDiv.classList.add("shipSelector");
    carrierDiv.classList.add(`carrier_${order}`);
    const battleshipDiv = document.createElement("div");
    battleshipDiv.innerText = "Battleship";
    battleshipDiv.classList.add("shipSelector");
    battleshipDiv.classList.add(`battleship_${order}`);
    const cruiserDiv = document.createElement("div");
    cruiserDiv.innerText = "Cruiser";
    cruiserDiv.classList.add("shipSelector");
    cruiserDiv.classList.add(`cruiser_${order}`);
    const submarineDiv = document.createElement("div");
    submarineDiv.innerText = "Submarine";
    submarineDiv.classList.add("shipSelector");
    submarineDiv.classList.add(`submarine_${order}`);
    const destroyerDiv = document.createElement("div");
    destroyerDiv.innerText = "Destroyer";
    destroyerDiv.classList.add("shipSelector");
    destroyerDiv.classList.add(`destroyer_${order}`);

    shipsDiv.appendChild(shipsH2);
    shipsDiv.appendChild(carrierDiv);
    shipsDiv.appendChild(battleshipDiv);
    shipsDiv.appendChild(cruiserDiv);
    shipsDiv.appendChild(submarineDiv);
    shipsDiv.appendChild(destroyerDiv);

    const prepSubmit = document.createElement("button");
    prepSubmit.innerText = "Submit";
    prepSubmit.classList.add("prepSB");
    prepSubmit.setAttribute("data-submitButton", `${order}`);
    // add icons for the ships here. event listeners will later be attached.

    prepDiv.appendChild(prepH1);
    prepDiv.appendChild(prepMessages);
    prepDiv.appendChild(placementDiv);
    placementDiv.appendChild(placementLeft);
    placementLeft.appendChild(prepGrid);
    placementDiv.appendChild(placementRight);
    placementRight.appendChild(oriH3);
    placementRight.appendChild(rotateButton);
    placementRight.appendChild(shipsDiv);
    placementRight.appendChild(prepSubmit);

    return prepDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prepDivFactory);

/***/ }),

/***/ "./src/Tourney_Expanded-Light.ttf":
/*!****************************************!*\
  !*** ./src/Tourney_Expanded-Light.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aeea5fdd2698ecee9276.ttf";

/***/ }),

/***/ "./src/Tourney_SemiCondensed-Black.ttf":
/*!*********************************************!*\
  !*** ./src/Tourney_SemiCondensed-Black.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7871efea3a20caa8726d.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSUFBNkM7QUFDekYsNENBQTRDLDZJQUFrRDtBQUM5Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxzQ0FBc0Msc0NBQXNDLCtDQUErQyxHQUFHLGdCQUFnQixtREFBbUQsb0RBQW9ELEdBQUcsVUFBVSxvQkFBb0IsZ0JBQWdCLG1EQUFtRCxHQUFHLFlBQVksbURBQW1ELEdBQUcscUJBQXFCLG9CQUFvQix1Q0FBdUMsdUJBQXVCLHNDQUFzQyxHQUFHLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHlCQUF5QixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLEdBQUcsY0FBYyw4QkFBOEIsa0JBQWtCLHNCQUFzQixpQkFBaUIsb0JBQW9CLGFBQWEsY0FBYyxrQkFBa0IsR0FBRyxrQkFBa0IsOEJBQThCLGtCQUFrQixzQkFBc0IsaUJBQWlCLHNCQUFzQixxQkFBcUIsR0FBRyxZQUFZLG1CQUFtQix5QkFBeUIseUJBQXlCLGlCQUFpQix1QkFBdUIsOEJBQThCLG9CQUFvQixvQkFBb0IsNkJBQTZCLDBCQUEwQixHQUFHLFdBQVcsc0JBQXNCLEdBQUcsYUFBYSxzQkFBc0IsR0FBRyw2QkFBNkIsb0JBQW9CLHNCQUFzQix5QkFBeUIsbUJBQW1CLEdBQUcseUNBQXlDLG1CQUFtQix1Q0FBdUMsR0FBRyxVQUFVLHlCQUF5QixpQkFBaUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyxZQUFZLG9CQUFvQix5QkFBeUIsOEJBQThCLHlCQUF5QixpQkFBaUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRyx5QkFBeUIseUJBQXlCLHNCQUFzQixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRyxxQkFBcUIsb0JBQW9CLGdCQUFnQixHQUFHLFdBQVcsbURBQW1ELDJDQUEyQyxtQkFBbUIseUJBQXlCLG1CQUFtQixzQkFBc0IsR0FBRyw2QkFBNkIsb0JBQW9CLHNCQUFzQix5QkFBeUIsbUJBQW1CLEdBQUcseUNBQXlDLHVDQUF1QyxtQkFBbUIsR0FBRyx3Q0FBd0Msb0JBQW9CLEdBQUcsb0NBQW9DLHlCQUF5QixpQkFBaUIsb0JBQW9CLGdCQUFnQiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQix5QkFBeUIsOEJBQThCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsYUFBYSwwQkFBMEIsR0FBRyxhQUFhLG9CQUFvQiwwQkFBMEIsR0FBRyxtQkFBbUIsb0JBQW9CLG9DQUFvQyxHQUFHLGVBQWUsb0JBQW9CLDhDQUE4QywyQ0FBMkMsZUFBZSxLQUFLLGNBQWMsbUJBQW1CLGtCQUFrQiw2QkFBNkIsR0FBRyxvQkFBb0Isb0JBQW9CLHdCQUF3QiwyQkFBMkIsR0FBRyxjQUFjLG1CQUFtQixHQUFHLGNBQWMsb0JBQW9CLDBCQUEwQixHQUFHLHlCQUF5QixvQkFBb0IsMEJBQTBCLEdBQUcsZUFBZSxtQkFBbUIsbUJBQW1CLG1CQUFtQix5QkFBeUIsR0FBRyxxQkFBcUIsdUNBQXVDLG1CQUFtQixHQUFHLGVBQWUsd0JBQXdCLEdBQUcsbUJBQW1CLDJDQUEyQyx5QkFBeUIseUJBQXlCLHNCQUFzQixtQkFBbUIsR0FBRyxlQUFlLHVDQUF1QyxtQkFBbUIsR0FBRyxhQUFhLHVCQUF1QixtQkFBbUIsbUJBQW1CLG1CQUFtQix5QkFBeUIsR0FBRyxtQkFBbUIsbUJBQW1CLHVDQUF1QyxHQUFHLCtCQUErQixvQkFBb0IsNkJBQTZCLDhCQUE4QixvQkFBb0IsU0FBUyxjQUFjLHlCQUF5QixHQUFHLGFBQWEseUJBQXlCLEdBQUcsa0JBQWtCLHlCQUF5QixhQUFhLGNBQWMsbUJBQW1CLGtCQUFrQixHQUFHLGdCQUFnQixvQkFBb0IsMEJBQTBCLHNCQUFzQixHQUFHLGFBQWEsc0JBQXNCLG9CQUFvQixnREFBZ0QsR0FBRyxtQ0FBbUMsbUJBQW1CLHlCQUF5QixHQUFHLHFCQUFxQixvQkFBb0IsZ0JBQWdCLEdBQUcseUJBQXlCLG9CQUFvQiw4Q0FBOEMsMkNBQTJDLGVBQWUsR0FBRyxVQUFVLG1CQUFtQixrQkFBa0IsNkJBQTZCLEdBQUcsZ0JBQWdCLCtCQUErQixHQUFHLFlBQVksdUJBQXVCLEdBQUcsbUJBQW1CO0FBQzl1UDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQy9WMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxxQ0FBcUMseUJBQXlCO0FBQzlEO0FBQ0E7O0FBRUEsY0FBYyxPQUFPO0FBQ3JCLHFDQUFxQyx5QkFBeUI7QUFDOUQ7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLHFDQUFxQyx5QkFBeUI7QUFDOUQ7QUFDQTs7QUFFQSxjQUFjO0FBQ2QscUNBQXFDLHlCQUF5QjtBQUM5RDtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0EscUNBQXFDLHlCQUF5QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QscUNBQXFDLHlCQUF5QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLHFDQUFxQyx5QkFBeUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLHFDQUFxQyx5QkFBeUI7QUFDOUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlCQUF5QjtBQUNsRTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCOztBQUVBOztBQUVBLGNBQWM7QUFDZDtBQUNBLHlDQUF5Qyx5QkFBeUI7QUFDbEU7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjs7QUFFQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlCQUF5QjtBQUNsRTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCOztBQUVBOztBQUVBLGNBQWM7QUFDZDtBQUNBLHlDQUF5Qyx5QkFBeUI7QUFDbEU7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlCQUF5QjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSw2Q0FBNkMseUJBQXlCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUJBQXlCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLDZDQUE2Qyx5QkFBeUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlCQUF5QjtBQUNsRTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCOztBQUVBOztBQUVBLGNBQWM7QUFDZDtBQUNBLHlDQUF5Qyx5QkFBeUI7QUFDbEU7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7QUNqVlY7QUFDUztBQUNhO0FBQ0c7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVLDhCQUE4QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVUsOEJBQThCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVSw4QkFBOEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVLDhCQUE4QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RCxPQUFPOztBQUVwRSxjQUFjO0FBQ2Q7QUFDQSw0Q0FBNEMsV0FBVyxNQUFNLHlDQUF5QztBQUN0Ryw0REFBNEQsZUFBZSxFQUFFLGVBQWU7QUFDNUY7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBLDRDQUE0QyxXQUFXLE1BQU0seUNBQXlDO0FBQ3RHLDREQUE0RCxlQUFlLEVBQUUsZUFBZTtBQUM1RjtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsZ0RBQWdELFdBQVcsTUFBTSx5Q0FBeUM7QUFDMUcsZ0VBQWdFLGVBQWUsRUFBRSxlQUFlO0FBQ2hHOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBLGdEQUFnRCxXQUFXLE1BQU0seUNBQXlDO0FBQzFHLGdFQUFnRSxlQUFlLEVBQUUsZUFBZTtBQUNoRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsZ0RBQWdELDJEQUEyRDs7QUFFM0csMEJBQTBCO0FBQzFCLGdEQUFnRCwyREFBMkQ7O0FBRTNHOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLGdEQUFnRCwwREFBMEQ7O0FBRTFHLDBCQUEwQjtBQUMxQixnREFBZ0QsMERBQTBEOztBQUUxRzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQSw2REFBNkQsT0FBTzs7QUFFcEUsY0FBYztBQUNkO0FBQ0EsNENBQTRDLFdBQVcsTUFBTSx5Q0FBeUM7QUFDdEcsNERBQTRELE9BQU8sRUFBRSxPQUFPO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQSw0Q0FBNEMsV0FBVyxNQUFNLHlDQUF5QztBQUN0Ryw0REFBNEQsT0FBTyxFQUFFLE9BQU87QUFDNUU7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGdEQUFnRCxXQUFXLE1BQU0seUNBQXlDO0FBQzFHLGdFQUFnRSxPQUFPLEVBQUUsT0FBTztBQUNoRjs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQSxnREFBZ0QsV0FBVyxNQUFNLHlDQUF5QztBQUMxRyxnRUFBZ0UsT0FBTyxFQUFFLE9BQU87QUFDaEY7QUFDQSxtS0FBbUssNkNBQTZDO0FBQ2hOLG1LQUFtSyw4Q0FBOEM7QUFDak4sbUtBQW1LLDhDQUE4QztBQUNqTixtS0FBbUssNkNBQTZDO0FBQ2hOO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsd0JBQXdCLFFBQVE7QUFDaEMsNkRBQTZELE1BQU0sR0FBRyxFQUFFLEVBQUUsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQSw0QkFBNEIsUUFBUTtBQUNwQyxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLDRCQUE0QixRQUFRO0FBQ3BDLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixNQUFNO0FBQ3BDO0FBQ0EsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDLGtDQUFrQyxPQUFPO0FBQ3pDLHdCQUF3QixzREFBZ0I7QUFDeEMsd0JBQXdCLHNEQUFnQjtBQUN4QztBQUNBLDJCQUEyQiwyREFBYztBQUN6QywyQkFBMkIsMkRBQWM7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBOztBQUVBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjs7QUFFQTs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjs7QUFFQTs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDBCQUEwQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwQkFBMEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwQkFBMEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwQkFBMEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMEJBQTBCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELE9BQU87O0FBRXBFLGNBQWM7QUFDZCw2REFBNkQsT0FBTztBQUNwRSw0Q0FBNEMsT0FBTyxNQUFNLHdDQUF3QztBQUNqRztBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkLGtEQUFrRCxPQUFPO0FBQ3pELDRDQUE0QyxPQUFPLE1BQU0sd0NBQXdDO0FBQ2pHO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQSxpRUFBaUUsT0FBTztBQUN4RSxnREFBZ0QsT0FBTyxNQUFNLHdDQUF3QztBQUNyRzs7QUFFQSxrQkFBa0I7QUFDbEIsMkRBQTJELE9BQU87QUFDbEUsZ0RBQWdELE9BQU8sTUFBTSx3Q0FBd0M7QUFDckc7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELE9BQU87O0FBRXBFLGNBQWM7QUFDZCw2REFBNkQsT0FBTztBQUNwRSw0Q0FBNEMsT0FBTyxNQUFNLHdDQUF3QztBQUNqRztBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkLGtEQUFrRCxPQUFPO0FBQ3pELDRDQUE0QyxPQUFPLE1BQU0sd0NBQXdDO0FBQ2pHO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQSxpRUFBaUUsT0FBTztBQUN4RSxnREFBZ0QsT0FBTyxNQUFNLHdDQUF3QztBQUNyRzs7QUFFQSxrQkFBa0I7QUFDbEIsMkRBQTJELE9BQU87QUFDbEUsZ0RBQWdELE9BQU8sTUFBTSx3Q0FBd0M7QUFDckc7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQWdCO0FBQ3hDO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQztBQUNBLDhCQUE4QixNQUFNO0FBQ3BDO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQztBQUNBLDhCQUE4QixPQUFPO0FBQ3JDLHNCQUFzQixzREFBZ0I7QUFDdEM7QUFDQSwyQkFBMkIsMkRBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBOztBQUVBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBOztBQUVBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjs7QUFFQTs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUzs7QUFFVDtBQUNBLDZDQUE2QztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsT0FBTztBQUN4RTtBQUNBLGtCQUFrQjtBQUNsQixpRUFBaUUsT0FBTztBQUN4RSxnREFBZ0QsUUFBUSxNQUFNLHNDQUFzQztBQUNwRztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsc0RBQXNELE9BQU87QUFDN0QsZ0RBQWdELFFBQVEsTUFBTSxzQ0FBc0M7QUFDcEc7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EscUVBQXFFLE9BQU87QUFDNUUsb0RBQW9ELFFBQVEsTUFBTSxzQ0FBc0M7QUFDeEc7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QiwrREFBK0QsT0FBTztBQUN0RSxvREFBb0QsUUFBUSxNQUFNLHNDQUFzQztBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViLFNBQVM7QUFDVDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2p1Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQSx1Q0FBdUMsTUFBTTtBQUM3Qyx3Q0FBd0MsTUFBTSxHQUFHLEVBQUUsRUFBRSxVQUFVO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUNoTHJCO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7QUFDQSwwQkFBMEIsS0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE1BQU07O0FBRWpEO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQsMENBQTBDLE1BQU0sR0FBRyxFQUFFLEVBQUUsVUFBVTtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxNQUFNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxNQUFNO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE1BQU07QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2xvYWRVSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcHJlcERpdkZhY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIlRvdXJuZXlfRXhwYW5kZWQtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiVG91cm5leV9TZW1pQ29uZGVuc2VkLUJsYWNrLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRvdXJuZXktSXRhbGljXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRvdXJuZXlfU2VtaUNvbmRlbnNlZC1CbGFja1wiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogXCJUb3VybmV5X1NlbWlDb25kZW5zZWQtQmxhY2tcIjtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJUb3VybmV5X1NlbWlDb25kZW5zZWQtQmxhY2tcIjtcbn1cblxuaGVhZGVyLFxuZm9vdGVyIHtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2LCAxMDUpO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgZm9udC1mYW1pbHk6IFwiVG91cm5leS1JdGFsaWNcIjtcbn1cblxuaGVhZGVyID4gaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBvcGFjaXR5OiAuNTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub3ZlcmxheUhhbGYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IC41O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLm5nRGl2IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5naDEge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLnZzVGV4dCB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ucHZwQnV0dG9uLFxuLnB2ZUJ1dHRvbiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnB2cEJ1dHRvbjpob3Zlcixcbi5wdmVCdXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcbn1cblxuLmlkcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ2lEaXYge1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHZwRm9ybSxcbi5wdmVGb3JtIHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMzBweDtcbn1cblxuLnAxRGl2LFxuLnAyRGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMzBweDtcbn1cblxuaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRvdXJuZXlfU2VtaUNvbmRlbnNlZC1CbGFja1wiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbi5wdnBTdWJtaXQsXG4ucHZlU3VibWl0IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ucHZwU3VibWl0OmhvdmVyLFxuLnB2ZVN1Ym1pdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDEwNSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiB1c2VkIHRvIGhpZGUgdGhpbmdzICovXG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBwcmVwIGRpdnMgKi9cblxuLnByZXBQYXJlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA0MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcmVwRGl2IHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4ucHJlcEgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucF9tZXNzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wbGFjZW1lbnREaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5wcmVwR3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xuICAgIGdhcDogNXB4O1xuXG59XG5cbi5wcmVwQm94IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLnByZXBCb3g6aG92ZXIge1xuICAgIGJvcmRlcjogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5wX3JpZ2h0IHtcbiAgICB3aWR0aDogMjA3cHg7XG59XG5cbi5zaGlwc0gyIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5vcmlIM18xLFxuLm9yaUgzXzIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnJ0QnV0dG9uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ydEJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDEwNSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2hpcHNEaXYge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4uc2hpcFNlbGVjdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogNnB4O1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2LCAxMDUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByZXBTQiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcmVwU0I6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcbn1cblxuLyogZ2FtZSBzZWN0aW9uICovXG5cbi5ncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgXG59XG5cbi5nc1JpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5nc0xlZnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm92ZXJsYXlIYWxmIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZ3NNZXNzYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uc2NvcmVzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyAgICBcbn1cblxuLnBzY29yZWJvYXJkMSxcbi5wc2NvcmVib2FyZDIge1xuICAgIG1hcmdpbjogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2FyZENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDcwcHg7XG59XG5cbiNwMUJvYXJkLFxuI3AyQm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcbiAgICBnYXA6IDVweDtcbn1cblxuLmJveCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5ib3g6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuZm9vdGVyIHtcbiAgICBtaW4taGVpZ2h0OiA5MnB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3Qiw0Q0FBc0M7QUFDMUM7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsNENBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixVQUFVO0lBQ1YsYUFBYTtJQUNiLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JB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bnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUb3VybmV5LUl0YWxpY1xcXCI7XFxuICAgIHNyYzogdXJsKFxcXCJUb3VybmV5X0V4cGFuZGVkLUxpZ2h0LnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUb3VybmV5X1NlbWlDb25kZW5zZWQtQmxhY2tcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiVG91cm5leV9TZW1pQ29uZGVuc2VkLUJsYWNrLnR0ZlxcXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIlRvdXJuZXlfU2VtaUNvbmRlbnNlZC1CbGFja1xcXCI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVG91cm5leV9TZW1pQ29uZGVuc2VkLUJsYWNrXFxcIjtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2LCAxMDUpO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBmb250LWZhbWlseTogXFxcIlRvdXJuZXktSXRhbGljXFxcIjtcXG59XFxuXFxuaGVhZGVyID4gaDEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcmxheUhhbGYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogLjU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG59XFxuXFxuLm5nRGl2IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZ2gxIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4udnNUZXh0IHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4ucHZwQnV0dG9uLFxcbi5wdmVCdXR0b24ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHZwQnV0dG9uOmhvdmVyLFxcbi5wdmVCdXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2LCAxMDUpO1xcbn1cXG5cXG4uaWRwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdpRGl2IHtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHZwRm9ybSxcXG4ucHZlRm9ybSB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5wMURpdixcXG4ucDJEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbmlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUb3VybmV5X1NlbWlDb25kZW5zZWQtQmxhY2tcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLnB2cFN1Ym1pdCxcXG4ucHZlU3VibWl0IHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnB2cFN1Ym1pdDpob3ZlcixcXG4ucHZlU3VibWl0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDEwNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogdXNlZCB0byBoaWRlIHRoaW5ncyAqL1xcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogcHJlcCBkaXZzICovXFxuXFxuLnByZXBQYXJlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByZXBEaXYge1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcmVwSDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucF9tZXNzIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnBsYWNlbWVudERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ucHJlcEdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ2FwOiA1cHg7XFxuXFxufVxcblxcbi5wcmVwQm94IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnByZXBCb3g6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5wX3JpZ2h0IHtcXG4gICAgd2lkdGg6IDIwN3B4O1xcbn1cXG5cXG4uc2hpcHNIMiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5vcmlIM18xLFxcbi5vcmlIM18yIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnJ0QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucnRCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2hpcHNEaXYge1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuXFxuLnNoaXBTZWxlY3RvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJlcFNCIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJlcFNCOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcXG59XFxuXFxuLyogZ2FtZSBzZWN0aW9uICovXFxuXFxuLmdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4uZ3NSaWdodCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdzTGVmdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm92ZXJsYXlIYWxmIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5nc01lc3NhZ2Uge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5zY29yZXMge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7ICAgIFxcbn1cXG5cXG4ucHNjb3JlYm9hcmQxLFxcbi5wc2NvcmVib2FyZDIge1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3MHB4O1xcbn1cXG5cXG4jcDFCb2FyZCxcXG4jcDJCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmJveCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5ib3g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDkycHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZ2FtZUJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgcGxhY2VkU2hpcHMgPSBbXTtcbiAgICBsZXQgc3Vua2VuQ291bnQgPSAwO1xuICAgIGNvbnN0IG1heFN1bmtlbiA9IDU7XG4gICAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG4gICAgbGV0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGJvYXJkLnB1c2goW10pO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGJvYXJkW2ldLnB1c2goXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRTdW5rZW5Db3VudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1bmtlbkNvdW50O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRHYW1lU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2FtZU92ZXI7XG4gICAgfTsgXG5cbiAgICAvLyB0cnVlID0gaG9yaXpvbnRhbCwgZmFsc2UgPSB2ZXJ0aWNhbFxuICAgIGxldCBzaGlwT3JpZW50YXRpb24gPSB0cnVlO1xuXG4gICAgY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbikge1xuICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gc2hpcE9yaWVudGF0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBzaGlwT3JpZW50YXRpb247XG4gICAgICAgIH0gXG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNoaXBPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBPcmllbnRhdGlvbjtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hpcEZhY3RvcnkgPSAoc2hpcExlbmd0aCwgY3J1aXNlclN0YXR1cykgPT4ge1xuICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaGlwTGVuZ3RoLFxuICAgICAgICAgICAgaGl0czogMCxcbiAgICAgICAgICAgIHN1bmtTdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgY3J1aXNlclN0YXR1cyxcbiAgICAgICAgICAgIGhpdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNTdW5rOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwTGVuZ3RoID09PSB0aGlzLmhpdHMpIHRoaXMuc3Vua1N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlQUlTaGlwID0gKHNoaXBMZW5ndGgsIHlDb29yZCwgeENvb3JkLCBhaU9yaWVudGF0aW9uKSA9PiB7XG4gICAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBsZXQgY2FycmllciA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgsIG51bGwpO1xuICAgICAgICAgICAgaWYgKGFpT3JpZW50YXRpb24gPT09IDApIHsgLy8gaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB4Q29vcmQ7IGkgPCB4Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeUNvb3JkXVtpXSA9IGNhcnJpZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyAxIHdoaWNoIGlzIHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHlDb29yZDsgaSA8IHlDb29yZCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXVt4Q29vcmRdID0gY2FycmllcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHNoaXBMZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIGxldCBiYXR0bGVzaGlwID0gc2hpcEZhY3Rvcnkoc2hpcExlbmd0aCwgbnVsbCk7XG4gICAgICAgICAgICBpZiAoYWlPcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB4Q29vcmQ7IGkgPCB4Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeUNvb3JkXVtpXSA9IGJhdHRsZXNoaXA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB5Q29vcmQ7IGkgPCB5Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbaV1beENvb3JkXSA9IGJhdHRsZXNoaXA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBsZXQgdGhyZWVIaXR0ZXIgPSBzaGlwRmFjdG9yeShzaGlwTGVuZ3RoLCBudWxsKTtcbiAgICAgICAgICAgIGlmIChhaU9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHhDb29yZDsgaSA8IHhDb29yZCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFt5Q29vcmRdW2ldID0gdGhyZWVIaXR0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geUNvb3JkOyBpIDwgeUNvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW3hDb29yZF0gPSB0aHJlZUhpdHRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBsZXQgZGVzdHJveWVyID0gc2hpcEZhY3Rvcnkoc2hpcExlbmd0aCwgbnVsbCk7XG4gICAgICAgICAgICBpZiAoYWlPcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB4Q29vcmQ7IGkgPCB4Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeUNvb3JkXVtpXSA9IGRlc3Ryb3llcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB5Q29vcmQ7IGkgPCB5Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbaV1beENvb3JkXSA9IGRlc3Ryb3llcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwTGVuZ3RoLCB5Q29vcmQsIHhDb29yZCwgY3J1aXNlclN0YXQpID0+IHtcbiAgICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIGxldCBjYXJyaWVyID0gc2hpcEZhY3Rvcnkoc2hpcExlbmd0aCwgbnVsbCk7XG4gICAgICAgICAgICBpZiAoZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbeUNvb3JkXS5sZW5ndGggLSB4Q29vcmQgPj0gc2hpcExlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB4Q29vcmQ7IGkgPCB4Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW3lDb29yZF1baV0gPSBjYXJyaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGxhY2VkU2hpcHMuaW5jbHVkZXMoXCJjYXJyaWVyXCIpKSBwbGFjZWRTaGlwcy5wdXNoKFwiY2FycmllclwiKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBlbm91Z2ggc3BhY2UuIENhbm5vdCBwbGFjZSBjYXJyaWVyIGhlcmUuXCI7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLmxlbmd0aCAtIHlDb29yZCA+PSBzaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB5Q29vcmQ7IGkgPCB5Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW3hDb29yZF0gPSBjYXJyaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGxhY2VkU2hpcHMuaW5jbHVkZXMoXCJjYXJyaWVyXCIpKSBwbGFjZWRTaGlwcy5wdXNoKFwiY2FycmllclwiKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBlbm91Z2ggc3BhY2UuIENhbm5vdCBwbGFjZSBjYXJyaWVyIGhlcmUuXCI7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHNoaXBMZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIGxldCBiYXR0bGVzaGlwID0gc2hpcEZhY3Rvcnkoc2hpcExlbmd0aCwgbnVsbCk7XG4gICAgICAgICAgICBpZiAoZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbeUNvb3JkXS5sZW5ndGggLSB4Q29vcmQgPj0gc2hpcExlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB4Q29vcmQ7IGkgPCB4Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW3lDb29yZF1baV0gPSBiYXR0bGVzaGlwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGxhY2VkU2hpcHMuaW5jbHVkZXMoXCJiYXR0bGVzaGlwXCIpKSBwbGFjZWRTaGlwcy5wdXNoKFwiYmF0dGxlc2hpcFwiKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBlbm91Z2ggc3BhY2UuIENhbm5vdCBwbGFjZSBiYXR0bGVzaGlwIGhlcmUuXCI7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLmxlbmd0aCAtIHlDb29yZCA+PSBzaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB5Q29vcmQ7IGkgPCB5Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW3hDb29yZF0gPSBiYXR0bGVzaGlwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGxhY2VkU2hpcHMuaW5jbHVkZXMoXCJiYXR0bGVzaGlwXCIpKSBwbGFjZWRTaGlwcy5wdXNoKFwiYmF0dGxlc2hpcFwiKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBlbm91Z2ggc3BhY2UuIENhbm5vdCBwbGFjZSBiYXR0bGVzaGlwIGhlcmUuXCI7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIGlmIChjcnVpc2VyU3RhdCkge1xuICAgICAgICAgICAgICAgIGxldCBjcnVpc2VyID0gc2hpcEZhY3Rvcnkoc2hpcExlbmd0aCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZFt5Q29vcmRdLmxlbmd0aCAtIHhDb29yZCA+PSBzaGlwTGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB4Q29vcmQ7IGkgPCB4Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZFt5Q29vcmRdW2ldID0gY3J1aXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGxhY2VkU2hpcHMuaW5jbHVkZXMoXCJjcnVpc2VyXCIpKSBwbGFjZWRTaGlwcy5wdXNoKFwiY3J1aXNlclwiKTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90IGVub3VnaCBzcGFjZS4gQ2Fubm90IHBsYWNlIGNydWlzZXIgaGVyZS5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmxlbmd0aCAtIHlDb29yZCA+PSBzaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geUNvb3JkOyBpIDwgeUNvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRbaV1beENvb3JkXSA9IGNydWlzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYWNlZFNoaXBzLmluY2x1ZGVzKFwiY3J1aXNlclwiKSkgcGxhY2VkU2hpcHMucHVzaChcImNydWlzZXJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBlbm91Z2ggc3BhY2UuIENhbm5vdCBwbGFjZSBjcnVpc2VyIGhlcmUuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc3VibWFyaW5lID0gc2hpcEZhY3Rvcnkoc2hpcExlbmd0aCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRbeUNvb3JkXS5sZW5ndGggLSB4Q29vcmQgPj0gc2hpcExlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geENvb3JkOyBpIDwgeENvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRbeUNvb3JkXVtpXSA9IHN1Ym1hcmluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGxhY2VkU2hpcHMuaW5jbHVkZXMoXCJzdWJtYXJpbmVcIikpIHBsYWNlZFNoaXBzLnB1c2goXCJzdWJtYXJpbmVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBlbm91Z2ggc3BhY2UuIENhbm5vdCBwbGFjZSBzdWJtYXJpbmUgaGVyZS5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmxlbmd0aCAtIHlDb29yZCA+PSBzaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geUNvb3JkOyBpIDwgeUNvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRbaV1beENvb3JkXSA9IHN1Ym1hcmluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGxhY2VkU2hpcHMuaW5jbHVkZXMoXCJzdWJtYXJpbmVcIikpIHBsYWNlZFNoaXBzLnB1c2goXCJzdWJtYXJpbmVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBlbm91Z2ggc3BhY2UuIENhbm5vdCBwbGFjZSBzdWJtYXJpbmUgaGVyZS5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgsIG51bGwpO1xuICAgICAgICAgICAgaWYgKGdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW3lDb29yZF0ubGVuZ3RoIC0geENvb3JkID49IHNoaXBMZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geENvb3JkOyBpIDwgeENvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFt5Q29vcmRdW2ldID0gZGVzdHJveWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGxhY2VkU2hpcHMuaW5jbHVkZXMoXCJkZXN0cm95ZXJcIikpIHBsYWNlZFNoaXBzLnB1c2goXCJkZXN0cm95ZXJcIik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3QgZW5vdWdoIHNwYWNlLiBDYW5ub3QgcGxhY2UgZGVzdHJveWVyIGhlcmUuXCI7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLmxlbmd0aCAtIHlDb29yZCA+PSBzaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB5Q29vcmQ7IGkgPCB5Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW3hDb29yZF0gPSBkZXN0cm95ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwbGFjZWRTaGlwcy5pbmNsdWRlcyhcImRlc3Ryb3llclwiKSkgcGxhY2VkU2hpcHMucHVzaChcImRlc3Ryb3llclwiKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBlbm91Z2ggc3BhY2UuIENhbm5vdCBwbGFjZSBkZXN0cm95ZXIgaGVyZS5cIjtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHlDb29yZCwgeENvb3JkKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHRzID0ge1xuICAgICAgICAgICAgc3RhdHVzOiBcIlwiLFxuICAgICAgICAgICAgc3VuazogbnVsbCxcbiAgICAgICAgICAgIGdhbWVPdmVyOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBpZiAoYm9hcmRbeUNvb3JkXVt4Q29vcmRdID09PSBcIlwiKSB7XG4gICAgICAgICAgICBib2FyZFt5Q29vcmRdW3hDb29yZF0gPSBcIk1cIjtcbiAgICAgICAgICAgIHJlc3VsdHMuc3RhdHVzID0gXCJNXCI7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcblxuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW3lDb29yZF1beENvb3JkXSA9PT0gXCJNXCIgfHwgYm9hcmRbeUNvb3JkXVt4Q29vcmRdID09PSBcIlhcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiWW91IGNhbm5vdCBzdHJpa2UgdGhlIHNhbWUgc3BvdCB0d2ljZVwiO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2FyZFt5Q29vcmRdW3hDb29yZF0uaGl0KCk7XG4gICAgICAgICAgICBib2FyZFt5Q29vcmRdW3hDb29yZF0uaXNTdW5rKCk7XG4gICAgICAgICAgICByZXN1bHRzLnN0YXR1cyA9IFwiWFwiO1xuICAgICAgICAgICAgaWYgKGJvYXJkW3lDb29yZF1beENvb3JkXS5zdW5rU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgc3Vua2VuQ291bnQrKztcbiAgICAgICAgICAgICAgICByZXN1bHRzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChhbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3lDb29yZF1beENvb3JkXSA9IFwiWFwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFt5Q29vcmRdW3hDb29yZF0gPSBcIlhcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkW3lDb29yZF1beENvb3JkXSA9IFwiWFwiO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChtYXhTdW5rZW4gPT09IGdldFN1bmtlbkNvdW50KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxhY2VkU2hpcHM7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEJvYXJkLFxuICAgICAgICBnZXRHYW1lU3RhdHVzLFxuICAgICAgICBnZXRTdW5rZW5Db3VudCxcbiAgICAgICAgcm90YXRlU2hpcCxcbiAgICAgICAgZ2V0U2hpcE9yaWVudGF0aW9uLCBcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBwbGFjZUFJU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgZ2V0U2hpcHNcbiAgICB9O1xufTtcbi8vIG1vZHVsZS5leHBvcnRzID0gZ2FtZUJvYXJkRmFjdG9yeTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkRmFjdG9yeTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkVUkgZnJvbSAnLi9sb2FkVUknO1xuaW1wb3J0IGdhbWVCb2FyZEZhY3RvcnkgZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IHByZXBEaXZGYWN0b3J5IGZyb20gJy4vcHJlcERpdkZhY3RvcnknO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5sZXQgc2VsZWN0ZWRMZW5ndGggPSA1O1xuY29uc3Qgb3ZlcmxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5vdmVybGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5RGl2KTtcbmxvYWRVSShib2R5KTtcbmNvbnN0IG5ld0dhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5nRGl2XCIpO1xuY29uc3QgZ2FtZUluZm9ybWF0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5naURpdlwiKTtcbmNvbnN0IHB2cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHZwQnV0dG9uXCIpO1xuY29uc3QgcHZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wdmVCdXR0b25cIik7XG5jb25zdCBwdnBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wdnBGb3JtXCIpO1xuY29uc3QgcHZlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHZlRm9ybVwiKTtcbmNvbnN0IHB2cFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHZwU3VibWl0XCIpO1xuY29uc3QgcHZlU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wdmVTdWJtaXRcIik7XG5jb25zdCBwcmVwUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVwUGFyZW50XCIpO1xuY29uc3QgcHZwMUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwdnAxSW5wdXRcIik7XG5jb25zdCBwdnAySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3B2cDJJbnB1dFwiKTtcbmNvbnN0IHB2ZTFJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHZlMUlucHV0XCIpO1xuY29uc3QgZ3NNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nc01lc3NhZ2VcIik7XG5jb25zdCBwU2NvcmVCb2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBzY29yZWJvYXJkMVwiKTtcbmNvbnN0IHBTY29yZUJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHNjb3JlYm9hcmQyXCIpO1xuY29uc3QgbGVmdEJvYXJkTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsT1wiKTtcbmNvbnN0IHJpZ2h0Qm9hcmRPID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nc3JPXCIpO1xuY29uc3QgZ2FtZVRpbGVzQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRfYVwiKTtcbmNvbnN0IGdhbWVUaWxlc0IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkX2JcIik7XG5sZXQgbmVpZ2hib3JzID0gW107XG5cbmNvbnN0IHNldEFJQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBsZXQgdG90YWxQbGFjZWQgPSAwO1xuICAgIHdoaWxlICh0b3RhbFBsYWNlZCA8IDUpIHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpOyAvLyBwb3RlbnRpYWxseSBzd2l0Y2ggb3JpZW50YXRpb24gZXZlcnkgbG9vcCwgMCBmb3IgaG9yaXpvbnRhbCwgMSBmb3IgdmVydGljYWxcbiAgICAgICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgICAgIGlmICh0b3RhbFBsYWNlZCA9PT0gMCkgeyAvLyBwbGFjZSB0aGUgY2FycmllclxuICAgICAgICAgICAgbGVuZ3RoID0gNTtcbiAgICAgICAgICAgIGxldCB4U3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgbGV0IHlTdGFydCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoKHhTdGFydCArIGxlbmd0aCA8IDEwKSAmJiAoMTAgLSB4U3RhcnQgPj0gbGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydCsxXSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0KzJdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnQrM10gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydCs0XSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucGxhY2VBSVNoaXAoNSwgeVN0YXJ0LCB4U3RhcnQsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGxhY2VkKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh5U3RhcnQgKyBsZW5ndGggPCAxMCkgJiYgKDEwIC0geVN0YXJ0ID49IGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnRdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0KzFdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnQrMl1beFN0YXJ0XSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydCszXVt4U3RhcnRdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0KzRdW3hTdGFydF0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnBsYWNlQUlTaGlwKDUsIHlTdGFydCwgeFN0YXJ0LCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBsYWNlZCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmICh0b3RhbFBsYWNlZCA9PT0gMSkgeyAvLyBwbGFjZSB0aGUgYmF0dGxlc2hpcFxuICAgICAgICAgICAgbGVuZ3RoID0gNDtcbiAgICAgICAgICAgIGxldCB4U3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgbGV0IHlTdGFydCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoKHhTdGFydCArIGxlbmd0aCA8IDEwKSAmJiAoMTAgLSB4U3RhcnQgPj0gbGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydCsxXSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0KzJdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnQrM10gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnBsYWNlQUlTaGlwKDQsIHlTdGFydCwgeFN0YXJ0LCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBsYWNlZCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh5U3RhcnQgKyBsZW5ndGggPCAxMCkgJiYgKDEwIC0geVN0YXJ0ID49IGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnRdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0KzFdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnQrMl1beFN0YXJ0XSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydCszXVt4U3RhcnRdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZUFJU2hpcCg0LCB5U3RhcnQsIHhTdGFydCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQbGFjZWQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodG90YWxQbGFjZWQgPT09IDIpIHsgLy8gcGxhY2UgdGhlIGNydWlzZXJcbiAgICAgICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgICAgICBsZXQgeFN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIGxldCB5U3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh4U3RhcnQgKyBsZW5ndGggPCAxMCkgJiYgKDEwIC0geFN0YXJ0ID49IGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnRdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnQrMV0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydCsyXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucGxhY2VBSVNoaXAoMywgeVN0YXJ0LCB4U3RhcnQsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGxhY2VkKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHlTdGFydCArIGxlbmd0aCA8IDEwKSAmJiAoMTAgLSB5U3RhcnQgPj0gbGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnQrMV1beFN0YXJ0XSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydCsyXVt4U3RhcnRdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZUFJU2hpcCgzLCB5U3RhcnQsIHhTdGFydCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQbGFjZWQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodG90YWxQbGFjZWQgPT09IDMpIHsgLy8gcGxhY2UgdGhlIHN1YlxuICAgICAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgICAgIGxldCB4U3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgbGV0IHlTdGFydCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoKHhTdGFydCArIGxlbmd0aCA8IDEwKSAmJiAoMTAgLSB4U3RhcnQgPj0gbGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydCsxXSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0KzJdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZUFJU2hpcCgzLCB5U3RhcnQsIHhTdGFydCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQbGFjZWQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICgoeVN0YXJ0ICsgbGVuZ3RoIDwgMTApICYmICgxMCAtIHlTdGFydCA+PSBsZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0XSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydCsxXVt4U3RhcnRdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0KzJdW3hTdGFydF0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnBsYWNlQUlTaGlwKDMsIHlTdGFydCwgeFN0YXJ0LCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBsYWNlZCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmICh0b3RhbFBsYWNlZCA9PT0gNCkgeyAvLyBwbGFjZSB0aGUgZGVzdHJveWVyXG4gICAgICAgICAgICBsZW5ndGggPSAyO1xuICAgICAgICAgICAgbGV0IHhTdGFydCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICBsZXQgeVN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICgoeFN0YXJ0ICsgbGVuZ3RoIDwgMTApICYmICgxMCAtIHhTdGFydCA+PSBsZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0XSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0KzFdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZUFJU2hpcCgyLCB5U3RhcnQsIHhTdGFydCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQbGFjZWQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICgoeVN0YXJ0ICsgbGVuZ3RoIDwgMTApICYmICgxMCAtIHlTdGFydCA+PSBsZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0XSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydCsxXVt4U3RhcnRdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZUFJU2hpcCgyLCB5U3RhcnQsIHhTdGFydCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQbGFjZWQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfTtcbn1cblxuY29uc3QgYWlBdHRhY2sgPSAoZW5lbXlCb2FyZCwgaHVtYW5OYW1lLCBuZWlnaGJvckFycmF5KSA9PiB7XG5cbiAgICBsZXQgbWlzcyA9IGZhbHNlO1xuICAgIGxldCB4Q29vcmQgPSAwO1xuICAgIGxldCB5Q29vcmQgPSAwO1xuICAgIGxldCBhdHRhY2s7XG4gICAgbGV0IHRhcmdldFRpbGU7XG5cbiAgICB3aGlsZSAoIW1pc3MpIHtcbiAgICAgICAgeENvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgeUNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcblxuICAgICAgICBpZiAobmVpZ2hib3JBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNrQ29vcmRzID0gbmVpZ2hib3JBcnJheS5wb3AoKTtcbiAgICAgICAgICAgIGF0dGFjayA9IGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2tDb29yZHMueSwgYXR0YWNrQ29vcmRzLngpO1xuXG4gICAgICAgICAgICBpZiAoYXR0YWNrID09PSBcIllvdSBjYW5ub3Qgc3RyaWtlIHRoZSBzYW1lIHNwb3QgdHdpY2VcIikge1xuICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogVHJ5IGFnYWluLiAke2F0dGFja30uYDtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2suZ2FtZU92ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IEdhbWUgT3ZlciEgQUkgV2lucyEgUmVmcmVzaCB0aGUgYnJvd3NlciB0byBwbGF5IGFnYWluLmA7XG4gICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQxLmlubmVyVGV4dCA9IGAke2h1bWFuTmFtZX0gaGFzICR7NSAtIE51bWJlcihlbmVteUJvYXJkLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNtX2FfJHthdHRhY2tDb29yZHMueH0ke2F0dGFja0Nvb3Jkcy55fWApO1xuICAgICAgICAgICAgICAgIHRhcmdldFRpbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBvdmVybGF5RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2suc3RhdHVzID09PSBcIk1cIikge1xuICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogQUkgbWlzc2VkLiBTd2l0Y2hpbmcgdHVybnMuYDtcbiAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDEuaW5uZXJUZXh0ID0gYCR7aHVtYW5OYW1lfSBoYXMgJHs1IC0gTnVtYmVyKGVuZW15Qm9hcmQuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICB0YXJnZXRUaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI21fYV8ke2F0dGFja0Nvb3Jkcy54fSR7YXR0YWNrQ29vcmRzLnl9YCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImN5YW5cIjtcbiAgICAgICAgICAgICAgICBtaXNzID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrLnN1bmsgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBTaGlwIHN1bmshIEFJIG1heSBmaXJlIGFnYWluLmA7XG4gICAgICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMS5pbm5lclRleHQgPSBgJHtodW1hbk5hbWV9IGhhcyAkezUgLSBOdW1iZXIoZW5lbXlCb2FyZC5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI21fYV8ke2F0dGFja0Nvb3Jkcy54fSR7YXR0YWNrQ29vcmRzLnl9YCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFRpbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogSGl0ISBBSSBtYXkgZmlyZSBhZ2Fpbi5gO1xuICAgICAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDEuaW5uZXJUZXh0ID0gYCR7aHVtYW5OYW1lfSBoYXMgJHs1IC0gTnVtYmVyKGVuZW15Qm9hcmQuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNtX2FfJHthdHRhY2tDb29yZHMueH0ke2F0dGFja0Nvb3Jkcy55fWApO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUaWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFja0Nvb3Jkcy5kaXJlY3Rpb24gPT09IFwibm9ydGhcIiB8fCBhdHRhY2tDb29yZHMuZGlyZWN0aW9uID09PSBcInNvdXRoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yQXJyYXkgPSBuZWlnaGJvckFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmRpcmVjdGlvbiA9PT0gXCJub3J0aFwiIHx8IGVsZW1lbnQuZGlyZWN0aW9uID09PSBcInNvdXRoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tDb29yZHMuZGlyZWN0aW9uID09PSBcIm5vcnRoXCIgJiYgKGF0dGFja0Nvb3Jkcy55LTEpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvckFycmF5LnB1c2goe2RpcmVjdGlvbjogXCJub3J0aFwiLCB5OiBhdHRhY2tDb29yZHMueS0xLCB4OiBhdHRhY2tDb29yZHMueH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrQ29vcmRzLmRpcmVjdGlvbiA9PT0gXCJzb3V0aFwiICYmIChhdHRhY2tDb29yZHMueSsxIDw9IDkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JBcnJheS5wdXNoKHtkaXJlY3Rpb246IFwic291dGhcIiwgeTogYXR0YWNrQ29vcmRzLnkrMSwgeDogYXR0YWNrQ29vcmRzLnh9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tDb29yZHMuZGlyZWN0aW9uID09PSBcImVhc3RcIiB8fCBhdHRhY2tDb29yZHMuZGlyZWN0aW9uID09PSBcIndlc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JBcnJheSA9IG5laWdoYm9yQXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGlyZWN0aW9uID09PSBcImVhc3RcIiB8fCBlbGVtZW50LmRpcmVjdGlvbiA9PT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tDb29yZHMuZGlyZWN0aW9uID09PSBcImVhc3RcIiAmJiAoYXR0YWNrQ29vcmRzLngrMSkgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yQXJyYXkucHVzaCh7ZGlyZWN0aW9uOiBcImVhc3RcIiwgeTogYXR0YWNrQ29vcmRzLnksIHg6IGF0dGFja0Nvb3Jkcy54KzF9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGFja0Nvb3Jkcy5kaXJlY3Rpb24gPT09IFwid2VzdFwiICYmIChhdHRhY2tDb29yZHMueC0xKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JBcnJheS5wdXNoKHtkaXJlY3Rpb246IFwid2VzdFwiLCB5OiBhdHRhY2tDb29yZHMueSwgeDogYXR0YWNrQ29vcmRzLngtMX0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdHRhY2sgPSBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeUNvb3JkLCB4Q29vcmQpO1xuICAgICAgICAgICAgaWYgKGF0dGFjayA9PT0gXCJZb3UgY2Fubm90IHN0cmlrZSB0aGUgc2FtZSBzcG90IHR3aWNlXCIpIHtcbiAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IFRyeSBhZ2Fpbi4gJHthdHRhY2t9LmA7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBHYW1lIE92ZXIhIEFJIFdpbnMhIFJlZnJlc2ggdGhlIGJyb3dzZXIgdG8gcGxheSBhZ2Fpbi5gO1xuICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMS5pbm5lclRleHQgPSBgJHtodW1hbk5hbWV9IGhhcyAkezUgLSBOdW1iZXIoZW5lbXlCb2FyZC5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgIHRhcmdldFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbV9hXyR7eENvb3JkfSR7eUNvb3JkfWApO1xuICAgICAgICAgICAgICAgIHRhcmdldFRpbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBvdmVybGF5RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2suc3RhdHVzID09PSBcIk1cIikge1xuICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogQUkgbWlzc2VkLiBTd2l0Y2hpbmcgdHVybnMuYDtcbiAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDEuaW5uZXJUZXh0ID0gYCR7aHVtYW5OYW1lfSBoYXMgJHs1IC0gTnVtYmVyKGVuZW15Qm9hcmQuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICB0YXJnZXRUaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI21fYV8ke3hDb29yZH0ke3lDb29yZH1gKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRUaWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3lhblwiO1xuICAgICAgICAgICAgICAgIG1pc3MgPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2suc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IFNoaXAgc3VuayEgQUkgbWF5IGZpcmUgYWdhaW4uYDtcbiAgICAgICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQxLmlubmVyVGV4dCA9IGAke2h1bWFuTmFtZX0gaGFzICR7NSAtIE51bWJlcihlbmVteUJvYXJkLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbV9hXyR7eENvb3JkfSR7eUNvb3JkfWApO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUaWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IEhpdCEgQUkgbWF5IGZpcmUgYWdhaW4uYDtcbiAgICAgICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQxLmlubmVyVGV4dCA9IGAke2h1bWFuTmFtZX0gaGFzICR7NSAtIE51bWJlcihlbmVteUJvYXJkLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbV9hXyR7eENvb3JkfSR7eUNvb3JkfWApO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUaWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoeUNvb3JkLTEgPj0gMCkgJiYgZW5lbXlCb2FyZC5nZXRCb2FyZCgpW3lDb29yZC0xXVt4Q29vcmRdICE9PSBcIk1cIiAmJiBlbmVteUJvYXJkLmdldEJvYXJkKClbeUNvb3JkLTFdW3hDb29yZF0gIT09IFwiWFwiKSBuZWlnaGJvckFycmF5LnB1c2goe2RpcmVjdGlvbjogXCJub3J0aFwiLCB5OiAoeUNvb3JkLTEpLCB4OiB4Q29vcmR9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh4Q29vcmQrMSA8PSA5KSAmJiBlbmVteUJvYXJkLmdldEJvYXJkKClbeUNvb3JkXVt4Q29vcmQrMV0gIT09IFwiTVwiICYmIGVuZW15Qm9hcmQuZ2V0Qm9hcmQoKVt5Q29vcmRdW3hDb29yZCsxXSAhPT0gXCJYXCIpIG5laWdoYm9yQXJyYXkucHVzaCh7ZGlyZWN0aW9uOiBcImVhc3RcIiwgeTogKHlDb29yZCksIHg6ICh4Q29vcmQrMSl9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh4Q29vcmQtMSA+PSAwKSAmJiBlbmVteUJvYXJkLmdldEJvYXJkKClbeUNvb3JkXVt4Q29vcmQtMV0gIT09IFwiTVwiICYmIGVuZW15Qm9hcmQuZ2V0Qm9hcmQoKVt5Q29vcmRdW3hDb29yZC0xXSAhPT0gXCJYXCIpIG5laWdoYm9yQXJyYXkucHVzaCh7ZGlyZWN0aW9uOiBcIndlc3RcIiwgeTogKHlDb29yZCksIHg6ICh4Q29vcmQtMSl9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh5Q29vcmQrMSA8PSA5KSAmJiBlbmVteUJvYXJkLmdldEJvYXJkKClbeUNvb3JkKzFdW3hDb29yZF0gIT09IFwiTVwiICYmIGVuZW15Qm9hcmQuZ2V0Qm9hcmQoKVt5Q29vcmQrMV1beENvb3JkXSAhPT0gXCJYXCIpIG5laWdoYm9yQXJyYXkucHVzaCh7ZGlyZWN0aW9uOiBcInNvdXRoXCIsIHk6ICh5Q29vcmQrMSksIHg6IHhDb29yZH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbn1cblxuY29uc3QgcGFpbnRUaWxlcyA9IChib2FyZCwgb3JkZXIpID0+IHtcbiAgICBsZXQgYm9hcmRMYXlvdXQgPSBib2FyZC5nZXRCb2FyZCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFByZXBCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtvcmRlcn1fJHtqfSR7aX1gKTtcbiAgICAgICAgICAgIChib2FyZExheW91dFtpXVtqXSAhPT0gXCJcIikgPyB0YXJnZXRQcmVwQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIiA6IHRhcmdldFByZXBCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY29uc3QgY2xlYW5UaGVCb2FyZCA9IChib2FyZCwgbGVuZ3RoT2ZTaGlwLCBzdGF0dXNPZkNydWlzZXIpID0+IHtcbiAgICBpZiAobGVuZ3RoT2ZTaGlwICE9PSAzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArKykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXS5zaGlwTGVuZ3RoID09PSBsZW5ndGhPZlNoaXApIGJvYXJkW2ldW2pdID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXR1c09mQ3J1aXNlcikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0uY3J1aXNlclN0YXR1cyA9PT0gdHJ1ZSkgYm9hcmRbaV1bal0gPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0uY3J1aXNlclN0YXR1cyA9PT0gZmFsc2UpIGJvYXJkW2ldW2pdID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIFxufVxuXG5wdnBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbmV3R2FtZURpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBnYW1lSW5mb3JtYXRpb25EaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgcHZlRm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxufSk7XG5cbnB2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBuZXdHYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGdhbWVJbmZvcm1hdGlvbkRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICBwdnBGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG59KTtcblxucHZwU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChwdnAxSW5wdXQuY2hlY2tWYWxpZGl0eSgpICYmIHB2cDJJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuYW1lMSA9IHB2cDFJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgbmFtZTIgPSBwdnAySW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBwMU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAxbmFtZVwiKTtcbiAgICAgICAgcDFOYW1lLmlubmVyVGV4dCA9IGAke25hbWUxfSdzIEJvYXJkOmA7XG4gICAgICAgIGxldCBwMk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAybmFtZVwiKVxuICAgICAgICBwMk5hbWUuaW5uZXJUZXh0ID0gYCR7bmFtZTJ9J3MgQm9hcmQ6YDtcbiAgICAgICAgbGV0IG5ld1Axc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBzY29yZWJvYXJkMVwiKTtcbiAgICAgICAgbGV0IG5ld1Ayc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBzY29yZWJvYXJkMlwiKTtcbiAgICAgICAgbmV3UDFzY29yZS5pbm5lclRleHQgPSBgJHtuYW1lMX0gaGFzIDUgc2hpcHMgbGVmdC5gO1xuICAgICAgICBuZXdQMnNjb3JlLmlubmVyVGV4dCA9IGAke25hbWUyfSBoYXMgNSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgIGxldCBwdnBCb2FyZDEgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIGxldCBwdnBCb2FyZDIgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIGdhbWVJbmZvcm1hdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgbGV0IHByZWdhbWVQcmVwMSA9IHByZXBEaXZGYWN0b3J5KHB2cDFJbnB1dC52YWx1ZSwxKTtcbiAgICAgICAgbGV0IHByZWdhbWVQcmVwMiA9IHByZXBEaXZGYWN0b3J5KHB2cDJJbnB1dC52YWx1ZSwyKTtcblxuICAgICAgICAvLyBjcmVhdGUgcGxheWVycyBoZXJlXG5cbiAgICAgICAgcHZwRm9ybS5yZXNldCgpO1xuICAgICAgICBwcmVwUGFyZW50LmFwcGVuZENoaWxkKHByZWdhbWVQcmVwMSk7XG4gICAgICAgIHByZXBQYXJlbnQuYXBwZW5kQ2hpbGQocHJlZ2FtZVByZXAyKTtcbiAgICAgICAgbGV0IHByZXBEaXZQMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLVByZXBEaXY9XCIxXCJdYCk7XG4gICAgICAgIGxldCBwcmVwRGl2UDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1QcmVwRGl2PVwiMlwiXWApO1xuICAgICAgICBwcmVwRGl2UDIuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmU7XCI7XG4gICAgICAgIGNvbnN0IHByZXBNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wX21lc3NcIilbMF07XG4gICAgICAgIGNvbnN0IHByZXBNZXNzYWdlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucF9tZXNzXCIpWzFdO1xuICAgICAgICBjb25zdCBvcmlIMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3JpSDNfMVwiKTtcbiAgICAgICAgY29uc3Qgcm90YXRlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm90YXRlXzFcIik7XG4gICAgICAgIGxldCBjcnVpc2VyU3RhdDtcbiAgICAgICAgY29uc3QgY2FycmllcjFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnJpZXJfMVwiKTtcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcDFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhdHRsZXNoaXBfMVwiKTtcbiAgICAgICAgY29uc3QgY3J1aXNlcjFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNydWlzZXJfMVwiKTtcbiAgICAgICAgY29uc3Qgc3VibWFyaW5lMURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWFyaW5lXzFcIik7XG4gICAgICAgIGNvbnN0IGRlc3Ryb3llcjFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3Ryb3llcl8xXCIpO1xuICAgICAgICBjb25zdCBvcmlIM18yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcmlIM18yXCIpO1xuICAgICAgICBjb25zdCByb3RhdGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGVfMlwiKTtcbiAgICAgICAgY29uc3QgY2FycmllcjJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnJpZXJfMlwiKTtcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcDJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhdHRsZXNoaXBfMlwiKTtcbiAgICAgICAgY29uc3QgY3J1aXNlcjJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNydWlzZXJfMlwiKTtcbiAgICAgICAgY29uc3Qgc3VibWFyaW5lMkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWFyaW5lXzJcIik7XG4gICAgICAgIGNvbnN0IGRlc3Ryb3llcjJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3Ryb3llcl8yXCIpO1xuICAgICAgICBsZXQgY2xlYW5Cb2FyZDEgPSBwdnBCb2FyZDEuZ2V0Qm9hcmQoKTtcbiAgICAgICAgbGV0IGNsZWFuQm9hcmQyID0gcHZwQm9hcmQyLmdldEJvYXJkKCk7XG4gICAgICAgIGNvbnN0IHByZXAxVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXBib2FyZF9hXCIpO1xuICAgICAgICBsZXQgcHJlcFN1Ym1pdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc3VibWl0QnV0dG9uPScxJ11cIik7XG4gICAgICAgIHByZXBTdWJtaXQxLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgcHJlcDJUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlcGJvYXJkX2JcIik7XG4gICAgICAgIGxldCBwcmVwU3VibWl0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zdWJtaXRCdXR0b249JzInXVwiKTtcbiAgICAgICAgcHJlcFN1Ym1pdDIuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIHJvdGF0ZTEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwdnBCb2FyZDEucm90YXRlU2hpcCgpO1xuICAgICAgICAgICAgKG9yaUgzLmlubmVyVGV4dCA9PT0gXCJPcmllbnRhdGlvbjogSG9yaXpvbnRhbFwiKSA/IG9yaUgzLmlubmVyVGV4dCA9IFwiT3JpZW50YXRpb246IFZlcnRpY2FsXCIgOiBvcmlIMy5pbm5lclRleHQgPSBcIk9yaWVudGF0aW9uOiBIb3Jpem9udGFsXCI7IFxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhcnJpZXIxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBDYXJyaWVyIFNlbGVjdGVkLlwiXG4gICAgICAgICAgICBsZXQgb3RoZXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBzZWxlY3RlZExlbmd0aCA9IDU7XG4gICAgICAgICAgICBjYXJyaWVyMURpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyU2VsZWN0ZWQubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWRbaV0gIT09IGUudGFyZ2V0KSBvdGhlclNlbGVjdGVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgYmF0dGxlc2hpcDFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEJhdHRsZXNoaXAgU2VsZWN0ZWQuXCJcbiAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHNlbGVjdGVkTGVuZ3RoID0gNDtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAxRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJTZWxlY3RlZFtpXSAhPT0gZS50YXJnZXQpIG90aGVyU2VsZWN0ZWRbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjcnVpc2VyMURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQ3J1aXNlciBTZWxlY3RlZC5cIlxuICAgICAgICAgICAgbGV0IG90aGVyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgc2VsZWN0ZWRMZW5ndGggPSAzO1xuICAgICAgICAgICAgY3J1aXNlcjFEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgY3J1aXNlclN0YXQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclNlbGVjdGVkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGlmIChvdGhlclNlbGVjdGVkW2ldICE9PSBlLnRhcmdldCkgb3RoZXJTZWxlY3RlZFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHN1Ym1hcmluZTFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IFN1Ym1hcmluZSBTZWxlY3RlZC5cIlxuICAgICAgICAgICAgbGV0IG90aGVyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgc2VsZWN0ZWRMZW5ndGggPSAzO1xuICAgICAgICAgICAgc3VibWFyaW5lMURpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBjcnVpc2VyU3RhdCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclNlbGVjdGVkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGlmIChvdGhlclNlbGVjdGVkW2ldICE9PSBlLnRhcmdldCkgb3RoZXJTZWxlY3RlZFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGRlc3Ryb3llcjFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IERlc3Ryb3llciBTZWxlY3RlZC5cIlxuICAgICAgICAgICAgbGV0IG90aGVyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgc2VsZWN0ZWRMZW5ndGggPSAyO1xuICAgICAgICAgICAgZGVzdHJveWVyMURpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyU2VsZWN0ZWQubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWRbaV0gIT09IGUudGFyZ2V0KSBvdGhlclNlbGVjdGVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcHJlcDFUaWxlcy5mb3JFYWNoKHRpbGVzID0+IHRpbGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHRpbGVJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgbGV0IGlkQXJyYXkgPSB0aWxlSWQuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRMZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgICAgICBjbGVhblRoZUJvYXJkKGNsZWFuQm9hcmQxLCA1KTtcbiAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQxLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrM10gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSs0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBjYXJyaWVyIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrM10gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrNF0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdnBCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2cEJvYXJkMSwgXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQ2FycmllciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGNhcnJpZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcHZwQm9hcmQxLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMS5sZW5ndGggLSBOdW1iZXIoaWRBcnJheVszXSkgPCA1ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgY2FycmllciBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSsxXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSsyXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSszXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSs0XVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQxLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENhcnJpZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBjYXJyaWVyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZExlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGNsZWFuVGhlQm9hcmQoY2xlYW5Cb2FyZDEsIDQpO1xuICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSszXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBiYXR0bGVzaGlwIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrM10gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdnBCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2cEJvYXJkMSwgXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQmF0dGxlc2hpcCBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGJhdHRsZXNoaXAgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcHZwQm9hcmQxLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMS5sZW5ndGggLSBOdW1iZXIoaWRBcnJheVszXSkgPCA0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgYmF0dGxlc2hpcCBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSsxXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSsyXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSszXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQxLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEJhdHRsZXNoaXAgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBiYXR0bGVzaGlwIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRMZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICBjbGVhblRoZUJvYXJkKGNsZWFuQm9hcmQxLCAzLCBjcnVpc2VyU3RhdCk7XG4gICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMS5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgY3J1aXNlciBvdXQgb2YgYm91bmRzLlwiIDogcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgc3VibWFyaW5lIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdnBCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSwgY3J1aXNlclN0YXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBDcnVpc2VyIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCIgOiBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IFN1Ym1hcmluZSBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBjcnVpc2VyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIiA6IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIHN1Ym1hcmluZSBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFwdnBCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxLmxlbmd0aCAtIE51bWJlcihpZEFycmF5WzNdKSA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgY3J1aXNlciBvdXQgb2YgYm91bmRzLlwiIDogcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgc3VibWFyaW5lIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzFdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzJdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdnBCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSwgY3J1aXNlclN0YXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBDcnVpc2VyIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCIgOiBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IFN1Ym1hcmluZSBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgY3J1aXNlciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCIgOiBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBzdWJtYXJpbmUgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZExlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIGNsZWFuVGhlQm9hcmQoY2xlYW5Cb2FyZDEsIDIpO1xuICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGRlc3Ryb3llciBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQxLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IERlc3Ryb3llciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGRlc3Ryb3llciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFwdnBCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxLmxlbmd0aCAtIE51bWJlcihpZEFycmF5WzNdKSA8IDIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBkZXN0cm95ZXIgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSkrMV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2cEJvYXJkMS5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQxLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0MS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQxLCBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBEZXN0cm95ZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBkZXN0cm95ZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pKTtcblxuICAgICAgICBwcmVwU3VibWl0MS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByZXBEaXZQMS5zdHlsZSA9IFwiZGlzcGxheTogbm9uZTtcIjtcbiAgICAgICAgICAgIHByZXBEaXZQMi5zdHlsZSA9IFwiZGlzcGxheTogZmxleFwiO1xuXG4gICAgICAgICAgICByb3RhdGUyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHB2cEJvYXJkMi5yb3RhdGVTaGlwKCk7XG4gICAgICAgICAgICAgICAgKG9yaUgzXzIuaW5uZXJUZXh0ID09PSBcIk9yaWVudGF0aW9uOiBIb3Jpem9udGFsXCIpID8gb3JpSDNfMi5pbm5lclRleHQgPSBcIk9yaWVudGF0aW9uOiBWZXJ0aWNhbFwiIDogb3JpSDNfMi5pbm5lclRleHQgPSBcIk9yaWVudGF0aW9uOiBIb3Jpem9udGFsXCI7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgY2FycmllcjJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG90aGVyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkTGVuZ3RoID0gNTtcbiAgICAgICAgICAgICAgICBjYXJyaWVyMkRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclNlbGVjdGVkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJTZWxlY3RlZFtpXSAhPT0gZS50YXJnZXQpIG90aGVyU2VsZWN0ZWRbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJhdHRsZXNoaXAyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExlbmd0aCA9IDQ7XG4gICAgICAgICAgICAgICAgYmF0dGxlc2hpcDJEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWRbaV0gIT09IGUudGFyZ2V0KSBvdGhlclNlbGVjdGVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjcnVpc2VyMkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRMZW5ndGggPSAzO1xuICAgICAgICAgICAgICAgIGNydWlzZXIyRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBjcnVpc2VyU3RhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclNlbGVjdGVkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJTZWxlY3RlZFtpXSAhPT0gZS50YXJnZXQpIG90aGVyU2VsZWN0ZWRbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN1Ym1hcmluZTJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG90aGVyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkTGVuZ3RoID0gMztcbiAgICAgICAgICAgICAgICBzdWJtYXJpbmUyRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBjcnVpc2VyU3RhdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWRbaV0gIT09IGUudGFyZ2V0KSBvdGhlclNlbGVjdGVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZXN0cm95ZXIyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExlbmd0aCA9IDI7XG4gICAgICAgICAgICAgICAgZGVzdHJveWVyMkRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclNlbGVjdGVkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJTZWxlY3RlZFtpXSAhPT0gZS50YXJnZXQpIG90aGVyU2VsZWN0ZWRbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBwcmVwMlRpbGVzLmZvckVhY2godGlsZXMgPT4gdGlsZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpZEFycmF5ID0gdGlsZUlkLnNwbGl0KFwiXCIpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRMZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW5UaGVCb2FyZChjbGVhbkJvYXJkMiwgNSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDIuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrM10gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSs0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGNhcnJpZXIgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzNdID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzRdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2cEJvYXJkMi5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMi5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDIsIFwiYlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQ2FycmllciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGNhcnJpZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXB2cEJvYXJkMi5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyLmxlbmd0aCAtIE51bWJlcihpZEFycmF5WzNdKSA8IDUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGNhcnJpZXIgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKSsxXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKSsyXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKSszXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKSs0XVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2cEJvYXJkMi5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMi5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDIsIFwiYlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQ2FycmllciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGNhcnJpZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRMZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW5UaGVCb2FyZChjbGVhbkJvYXJkMiwgNCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDIuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrM10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBiYXR0bGVzaGlwIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsyXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSszXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdnBCb2FyZDIucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDIuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQyLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQyLCBcImJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEJhdHRsZXNoaXAgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgYmF0dGxlc2hpcCBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcHZwQm9hcmQyLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDIubGVuZ3RoIC0gTnVtYmVyKGlkQXJyYXlbM10pIDwgNCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgYmF0dGxlc2hpcCBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pKzFdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pKzJdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pKzNdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQyLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQyLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0Mi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2cEJvYXJkMiwgXCJiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBCYXR0bGVzaGlwIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGJhdHRsZXNoaXAgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkTGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuVGhlQm9hcmQoY2xlYW5Cb2FyZDIsIDMsIGNydWlzZXJTdGF0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMi5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgY3J1aXNlciBvdXQgb2YgYm91bmRzLlwiIDogcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHN1Ym1hcmluZSBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQyLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSksIGNydWlzZXJTdGF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMi5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDIsIFwiYlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNydWlzZXJTdGF0KSA/IHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENydWlzZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIiA6IHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IFN1Ym1hcmluZSBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNydWlzZXJTdGF0KSA/IHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBjcnVpc2VyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIiA6IHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBzdWJtYXJpbmUgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXB2cEJvYXJkMi5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyLmxlbmd0aCAtIE51bWJlcihpZEFycmF5WzNdKSA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNydWlzZXJTdGF0KSA/IHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBjcnVpc2VyIG91dCBvZiBib3VuZHMuXCIgOiBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgc3VibWFyaW5lIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSkrMV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSkrMl1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdnBCb2FyZDIucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSwgY3J1aXNlclN0YXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQyLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0Mi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2cEJvYXJkMiwgXCJiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQ3J1aXNlciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiIDogcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogU3VibWFyaW5lIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNydWlzZXJTdGF0KSA/IHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBjcnVpc2VyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIiA6IHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBzdWJtYXJpbmUgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkTGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuVGhlQm9hcmQoY2xlYW5Cb2FyZDIsIDIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQyLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBkZXN0cm95ZXIgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2cEJvYXJkMi5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMi5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDIsIFwiYlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRGVzdHJveWVyIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGRlc3Ryb3llciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcHZwQm9hcmQyLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDIubGVuZ3RoIC0gTnVtYmVyKGlkQXJyYXlbM10pIDwgMiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgZGVzdHJveWVyIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSkrMV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdnBCb2FyZDIucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDIuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQyLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQyLCBcImJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IERlc3Ryb3llciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGRlc3Ryb3llciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgcHJlcFN1Ym1pdDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJlcERpdlAyLnN0eWxlID0gXCJkaXNwbGF5OiBub25lO1wiO1xuICAgICAgICAgICAgICAgIHByZXBQYXJlbnQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgb3ZlcmxheURpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICBsZWZ0Qm9hcmRPLmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5SGFsZlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGVzdGluZyBcbiAgICAgICAgXG4gICAgICAgIGdhbWVUaWxlc0EuZm9yRWFjaCh0aWxlcyA9PiB0aWxlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0aWxlSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgICAgIGxldCBpZEFycmF5ID0gdGlsZUlkLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgbGV0IGF0dGFjayA9IHB2cEJvYXJkMS5yZWNlaXZlQXR0YWNrKE51bWJlcihpZEFycmF5WzVdKSwgTnVtYmVyKGlkQXJyYXlbNF0pKTtcbiAgICAgICAgICAgIGlmIChhdHRhY2sgPT09IFwiWW91IGNhbm5vdCBzdHJpa2UgdGhlIHNhbWUgc3BvdCB0d2ljZVwiKSB7XG4gICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBUcnkgYWdhaW4uICR7YXR0YWNrfS5gO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGFjay5nYW1lT3ZlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogR2FtZSBPdmVyISAke25hbWUyfSBXaW5zISBSZWZyZXNoIHRoZSBicm93c2VyIHRvIHBsYXkgYWdhaW4uYDtcbiAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDEuaW5uZXJUZXh0ID0gYCR7bmFtZTF9IGhhcyAkezUgLSBOdW1iZXIocHZwQm9hcmQxLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBvdmVybGF5RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgIHJpZ2h0Qm9hcmRPLmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVybGF5SGFsZlwiKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2suc3RhdHVzID09PSBcIk1cIikge1xuICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogJHtuYW1lMn0gbWlzc2VkLiBTd2l0Y2hpbmcgdHVybnMuYDtcbiAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDEuaW5uZXJUZXh0ID0gYCR7bmFtZTF9IGhhcyAkezUgLSBOdW1iZXIocHZwQm9hcmQxLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjeWFuXCI7XG4gICAgICAgICAgICAgICAgcmlnaHRCb2FyZE8uY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJsYXlIYWxmXCIpO1xuICAgICAgICAgICAgICAgIGxlZnRCb2FyZE8uY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlIYWxmXCIpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2suc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IFNoaXAgc3VuayEgJHtuYW1lMn0gbWF5IGZpcmUgYWdhaW4uYDtcbiAgICAgICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQxLmlubmVyVGV4dCA9IGAke25hbWUxfSBoYXMgJHs1IC0gTnVtYmVyKHB2cEJvYXJkMS5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBIaXQhICR7bmFtZTJ9IG1heSBmaXJlIGFnYWluLmA7XG4gICAgICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMS5pbm5lclRleHQgPSBgJHtuYW1lMX0gaGFzICR7NSAtIE51bWJlcihwdnBCb2FyZDEuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pKTtcblxuICAgICAgICBnYW1lVGlsZXNCLmZvckVhY2godGlsZXMgPT4gdGlsZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGlsZUlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICBsZXQgaWRBcnJheSA9IHRpbGVJZC5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgIGxldCBhdHRhY2sgPSBwdnBCb2FyZDIucmVjZWl2ZUF0dGFjayhOdW1iZXIoaWRBcnJheVs1XSksIE51bWJlcihpZEFycmF5WzRdKSk7XG4gICAgICAgICAgICBpZiAoYXR0YWNrID09PSBcIllvdSBjYW5ub3Qgc3RyaWtlIHRoZSBzYW1lIHNwb3QgdHdpY2VcIikge1xuICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogVHJ5IGFnYWluLiAke2F0dGFja30uYDtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2suZ2FtZU92ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IEdhbWUgT3ZlciEgJHtuYW1lMX0gV2lucyEgUmVmcmVzaCB0aGUgYnJvd3NlciB0byBwbGF5IGFnYWluLmA7XG4gICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQyLmlubmVyVGV4dCA9IGAke25hbWUyfSBoYXMgJHs1IC0gTnVtYmVyKHB2cEJvYXJkMi5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgb3ZlcmxheURpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICBsZWZ0Qm9hcmRPLmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVybGF5SGFsZlwiKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2suc3RhdHVzID09PSBcIk1cIikge1xuICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogJHtuYW1lMX0gbWlzc2VkLiBTd2l0Y2hpbmcgdHVybnMuYDtcbiAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDIuaW5uZXJUZXh0ID0gYCR7bmFtZTJ9IGhhcyAkezUgLSBOdW1iZXIocHZwQm9hcmQyLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjeWFuXCI7XG4gICAgICAgICAgICAgICAgbGVmdEJvYXJkTy5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmxheUhhbGZcIik7XG4gICAgICAgICAgICAgICAgcmlnaHRCb2FyZE8uY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlIYWxmXCIpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2suc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IFNoaXAgc3VuayEgJHtuYW1lMX0gbWF5IGZpcmUgYWdhaW4uYDtcbiAgICAgICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQyLmlubmVyVGV4dCA9IGAke25hbWUyfSBoYXMgJHs1IC0gTnVtYmVyKHB2cEJvYXJkMi5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBIaXQhICR7bmFtZTF9IG1heSBmaXJlIGFnYWluLmA7XG4gICAgICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMi5pbm5lclRleHQgPSBgJHtuYW1lMn0gaGFzICR7NSAtIE51bWJlcihwdnBCb2FyZDIuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pKTtcblxuICAgIH0gXG5cbn0pO1xuXG5wdmVTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKHB2ZTFJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgcHZlQm9hcmQxID0gZ2FtZUJvYXJkRmFjdG9yeSgpO1xuICAgICAgICBsZXQgbmFtZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3B2ZTFJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHAxZVNCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wc2NvcmVib2FyZDFcIik7XG4gICAgICAgIHAxZVNCLmlubmVyVGV4dCA9IGAke25hbWUxfSBoYXMgNSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgIGxldCBwMU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAxbmFtZVwiKTtcbiAgICAgICAgcDFOYW1lLmlubmVyVGV4dCA9IGAke25hbWUxfSdzIEJvYXJkOmA7XG4gICAgICAgIGxldCBhaU5hbWUgPSBcIkFJXCI7XG4gICAgICAgIGxldCBwMmVTQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHNjb3JlYm9hcmQyXCIpO1xuICAgICAgICBwMmVTQi5pbm5lclRleHQgPSBgJHthaU5hbWV9IGhhcyA1IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgbGV0IHAyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDJuYW1lXCIpO1xuICAgICAgICBwMk5hbWUuaW5uZXJUZXh0ID0gYCR7YWlOYW1lfSdzIEJvYXJkOmA7XG4gICAgICAgIGxldCBhaUJvYXJkID0gZ2FtZUJvYXJkRmFjdG9yeSgpO1xuICAgICAgICBnYW1lSW5mb3JtYXRpb25EaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGxldCBwcmVnYW1lUHJlcDEgPSBwcmVwRGl2RmFjdG9yeShwdmUxSW5wdXQudmFsdWUsIDEpO1xuICAgICAgICBwcmVwUGFyZW50LmFwcGVuZENoaWxkKHByZWdhbWVQcmVwMSk7XG4gICAgICAgIHNldEFJQm9hcmQoYWlCb2FyZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFpQm9hcmQuZ2V0Qm9hcmQoKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgcGxheWVycyBoZXJlXG5cbiAgICAgICAgcHZlRm9ybS5yZXNldCgpO1xuICAgICAgICBsZXQgcHJlcERpdlAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtUHJlcERpdj1cIjFcIl1gKTtcbiAgICAgICAgY29uc3QgcHJlcE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBfbWVzc1wiKTtcbiAgICAgICAgY29uc3Qgb3JpSDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yaUgzXzFcIik7XG4gICAgICAgIGNvbnN0IHJvdGF0ZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZV8xXCIpO1xuICAgICAgICBsZXQgY3J1aXNlclN0YXQ7XG4gICAgICAgIGNvbnN0IGNhcnJpZXIxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJyaWVyXzFcIik7XG4gICAgICAgIGNvbnN0IGJhdHRsZXNoaXAxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwXzFcIik7XG4gICAgICAgIGNvbnN0IGNydWlzZXIxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcnVpc2VyXzFcIik7XG4gICAgICAgIGNvbnN0IHN1Ym1hcmluZTFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1hcmluZV8xXCIpO1xuICAgICAgICBjb25zdCBkZXN0cm95ZXIxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXN0cm95ZXJfMVwiKTtcbiAgICAgICAgbGV0IGNsZWFuQm9hcmQxID0gcHZlQm9hcmQxLmdldEJvYXJkKCk7XG4gICAgICAgIGNvbnN0IHByZXAxVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXBib2FyZF9hXCIpO1xuICAgICAgICBsZXQgcHJlcFN1Ym1pdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc3VibWl0QnV0dG9uPScxJ11cIik7XG4gICAgICAgIHByZXBTdWJtaXQxLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICByb3RhdGUxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHZlQm9hcmQxLnJvdGF0ZVNoaXAoKTtcbiAgICAgICAgICAgIChvcmlIMy5pbm5lclRleHQgPT09IFwiT3JpZW50YXRpb246IEhvcml6b250YWxcIikgPyBvcmlIMy5pbm5lclRleHQgPSBcIk9yaWVudGF0aW9uOiBWZXJ0aWNhbFwiIDogb3JpSDMuaW5uZXJUZXh0ID0gXCJPcmllbnRhdGlvbjogSG9yaXpvbnRhbFwiOyBcblxuICAgICAgICB9KTtcblxuICAgICAgICBjYXJyaWVyMURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQ2FycmllciBTZWxlY3RlZC5cIlxuICAgICAgICAgICAgbGV0IG90aGVyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgc2VsZWN0ZWRMZW5ndGggPSA1O1xuICAgICAgICAgICAgY2FycmllcjFEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclNlbGVjdGVkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGlmIChvdGhlclNlbGVjdGVkW2ldICE9PSBlLnRhcmdldCkgb3RoZXJTZWxlY3RlZFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGJhdHRsZXNoaXAxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBCYXR0bGVzaGlwIFNlbGVjdGVkLlwiXG4gICAgICAgICAgICBsZXQgb3RoZXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBzZWxlY3RlZExlbmd0aCA9IDQ7XG4gICAgICAgICAgICBiYXR0bGVzaGlwMURpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyU2VsZWN0ZWQubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWRbaV0gIT09IGUudGFyZ2V0KSBvdGhlclNlbGVjdGVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY3J1aXNlcjFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENydWlzZXIgU2VsZWN0ZWQuXCJcbiAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHNlbGVjdGVkTGVuZ3RoID0gMztcbiAgICAgICAgICAgIGNydWlzZXIxRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNydWlzZXJTdGF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJTZWxlY3RlZFtpXSAhPT0gZS50YXJnZXQpIG90aGVyU2VsZWN0ZWRbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBzdWJtYXJpbmUxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBTdWJtYXJpbmUgU2VsZWN0ZWQuXCJcbiAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHNlbGVjdGVkTGVuZ3RoID0gMztcbiAgICAgICAgICAgIHN1Ym1hcmluZTFEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgY3J1aXNlclN0YXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJTZWxlY3RlZFtpXSAhPT0gZS50YXJnZXQpIG90aGVyU2VsZWN0ZWRbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBkZXN0cm95ZXIxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBEZXN0cm95ZXIgU2VsZWN0ZWQuXCJcbiAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHNlbGVjdGVkTGVuZ3RoID0gMjtcbiAgICAgICAgICAgIGRlc3Ryb3llcjFEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclNlbGVjdGVkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGlmIChvdGhlclNlbGVjdGVkW2ldICE9PSBlLnRhcmdldCkgb3RoZXJTZWxlY3RlZFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBwcmVwMVRpbGVzLmZvckVhY2godGlsZXMgPT4gdGlsZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7ICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGlsZUlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICBsZXQgaWRBcnJheSA9IHRpbGVJZC5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZExlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgICAgIGNsZWFuVGhlQm9hcmQoY2xlYW5Cb2FyZDEsIDUpO1xuICAgICAgICAgICAgICAgIGlmIChwdmVCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSszXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGNhcnJpZXIgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsyXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSszXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSs0XSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2ZUJvYXJkMS5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZlQm9hcmQxLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0MS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZlQm9hcmQxLCBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBDYXJyaWVyIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgY2FycmllciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFwdmVCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxLmxlbmd0aCAtIE51bWJlcihpZEFycmF5WzNdKSA8IDUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBjYXJyaWVyIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzFdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzJdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzNdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzRdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdmVCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2ZUJvYXJkMS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2ZUJvYXJkMSwgXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQ2FycmllciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGNhcnJpZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkTGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY2xlYW5UaGVCb2FyZChjbGVhbkJvYXJkMSwgNCk7XG4gICAgICAgICAgICAgICAgaWYgKHB2ZUJvYXJkMS5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsyXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzNdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGJhdHRsZXNoaXAgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsyXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSszXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2ZUJvYXJkMS5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZlQm9hcmQxLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0MS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZlQm9hcmQxLCBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBCYXR0bGVzaGlwIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgYmF0dGxlc2hpcCBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFwdmVCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxLmxlbmd0aCAtIE51bWJlcihpZEFycmF5WzNdKSA8IDQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBiYXR0bGVzaGlwIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzFdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzJdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzNdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdmVCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2ZUJvYXJkMS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2ZUJvYXJkMSwgXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQmF0dGxlc2hpcCBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGJhdHRsZXNoaXAgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZExlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNsZWFuVGhlQm9hcmQoY2xlYW5Cb2FyZDEsIDMsIGNydWlzZXJTdGF0KTtcbiAgICAgICAgICAgICAgICBpZiAocHZlQm9hcmQxLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBjcnVpc2VyIG91dCBvZiBib3VuZHMuXCIgOiBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBzdWJtYXJpbmUgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsyXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2ZUJvYXJkMS5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pLCBjcnVpc2VyU3RhdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2ZUJvYXJkMS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2ZUJvYXJkMSwgXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENydWlzZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIiA6IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogU3VibWFyaW5lIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNydWlzZXJTdGF0KSA/IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGNydWlzZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiIDogcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgc3VibWFyaW5lIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXB2ZUJvYXJkMS5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDEubGVuZ3RoIC0gTnVtYmVyKGlkQXJyYXlbM10pIDwgMyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBjcnVpc2VyIG91dCBvZiBib3VuZHMuXCIgOiBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBzdWJtYXJpbmUgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSkrMV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSkrMl1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2ZUJvYXJkMS5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pLCBjcnVpc2VyU3RhdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2ZUJvYXJkMS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2ZUJvYXJkMSwgXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENydWlzZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIiA6IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogU3VibWFyaW5lIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBjcnVpc2VyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIiA6IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIHN1Ym1hcmluZSBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkTGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgY2xlYW5UaGVCb2FyZChjbGVhbkJvYXJkMSwgMik7XG4gICAgICAgICAgICAgICAgaWYgKHB2ZUJvYXJkMS5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgZGVzdHJveWVyIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdmVCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2ZUJvYXJkMS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2ZUJvYXJkMSwgXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRGVzdHJveWVyIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgZGVzdHJveWVyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXB2ZUJvYXJkMS5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDEubGVuZ3RoIC0gTnVtYmVyKGlkQXJyYXlbM10pIDwgMiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGRlc3Ryb3llciBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSsxXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZlQm9hcmQxLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdmVCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdmVCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IERlc3Ryb3llciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGRlc3Ryb3llciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHByZXBTdWJtaXQxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJlcERpdlAxLnN0eWxlID0gXCJkaXNwbGF5OiBub25lO1wiO1xuICAgICAgICAgICAgcHJlcFBhcmVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIG92ZXJsYXlEaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICAgICAgICAgIGdhbWVUaWxlc0IuZm9yRWFjaCh0aWxlcyA9PiB0aWxlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZUlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgbGV0IGlkQXJyYXkgPSB0aWxlSWQuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IGF0dGFjayA9IGFpQm9hcmQucmVjZWl2ZUF0dGFjayhOdW1iZXIoaWRBcnJheVs1XSksIE51bWJlcihpZEFycmF5WzRdKSk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dGFjayA9PT0gXCJZb3UgY2Fubm90IHN0cmlrZSB0aGUgc2FtZSBzcG90IHR3aWNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBUcnkgYWdhaW4uICR7YXR0YWNrfS5gO1xuICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogR2FtZSBPdmVyISAke25hbWUxfSBXaW5zIWA7XG4gICAgICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMi5pbm5lclRleHQgPSBgJHthaU5hbWV9IGhhcyAkezUgLSBOdW1iZXIoYWlCb2FyZC5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrLnN0YXR1cyA9PT0gXCJNXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiAke25hbWUxfSBtaXNzZWQuIFN3aXRjaGluZyB0dXJucy5gO1xuICAgICAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDIuaW5uZXJUZXh0ID0gYCR7YWlOYW1lfSBoYXMgJHs1IC0gTnVtYmVyKGFpQm9hcmQuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjeWFuXCI7XG4gICAgICAgICAgICAgICAgICAgIGFpQXR0YWNrKHB2ZUJvYXJkMSwgbmFtZTEsIG5laWdoYm9ycyk7XG4gICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFjay5zdW5rID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IFNoaXAgc3VuayEgJHtuYW1lMX0gbWF5IGZpcmUgYWdhaW4uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMi5pbm5lclRleHQgPSBgJHthaU5hbWV9IGhhcyAkezUgLSBOdW1iZXIoYWlCb2FyZC5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogSGl0ISAke25hbWUxfSBtYXkgZmlyZSBhZ2Fpbi5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQyLmlubmVyVGV4dCA9IGAke2FpTmFtZX0gaGFzICR7NSAtIE51bWJlcihhaUJvYXJkLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIiwiY29uc3QgbG9hZFVJID0gKGJvZHkpID0+IHtcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlclRpdGxlLmlubmVyVGV4dCA9IFwiQkFUVExFU0hJUFwiXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb25zdCBuZXdHYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdHYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJuZ0RpdlwiKTtcbiAgICBjb25zdCBuZ2gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG5naDEuY2xhc3NMaXN0LmFkZChcIm5naDFcIik7XG4gICAgbmdoMS5pbm5lclRleHQgPSBcIlBsYXkgYWdhaW5zdC4uLlwiO1xuICAgIGNvbnN0IHB2cEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHZwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwdnBCdXR0b25cIik7XG4gICAgcHZwQnV0dG9uLmlubmVyVGV4dCA9IFwiYSBodW1hblwiO1xuICAgIGNvbnN0IHZzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHZzVGV4dC5jbGFzc0xpc3QuYWRkKFwidnNUZXh0XCIpO1xuICAgIHZzVGV4dC5pbm5lclRleHQgPSBcIk9SXCI7XG4gICAgY29uc3QgcHZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcInB2ZUJ1dHRvblwiKTtcbiAgICBwdmVCdXR0b24uaW5uZXJUZXh0ID0gXCJhbiBBSVwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3R2FtZURpdik7XG4gICAgbmV3R2FtZURpdi5hcHBlbmRDaGlsZChuZ2gxKTtcbiAgICBuZXdHYW1lRGl2LmFwcGVuZENoaWxkKHB2cEJ1dHRvbik7XG4gICAgbmV3R2FtZURpdi5hcHBlbmRDaGlsZCh2c1RleHQpO1xuICAgIG5ld0dhbWVEaXYuYXBwZW5kQ2hpbGQocHZlQnV0dG9uKTtcbiAgICBjb25zdCBnYW1lSW5mb3JtYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVJbmZvcm1hdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiZ2lEaXZcIik7XG4gICAgZ2FtZUluZm9ybWF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FtZUluZm9ybWF0aW9uRGl2KTtcbiAgICBjb25zdCBwdnBGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgcHZwRm9ybS5jbGFzc0xpc3QuYWRkKFwicHZwRm9ybVwiKTtcbiAgICBjb25zdCBwdnBTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHB2cFN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHZwU3VibWl0XCIpO1xuICAgIHB2cFN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuICAgIGNvbnN0IHB2cDFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHB2cDFEaXYuY2xhc3NMaXN0LmFkZChcInB2cDFEaXZcIik7XG4gICAgY29uc3QgcHZwMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHB2cDFMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwdnAxSW5wdXRcIik7XG4gICAgcHZwMUxhYmVsLmlubmVyVGV4dCA9IFwiUGxheWVyIDEgLSBFbnRlciBuYW1lOiBcIlxuICAgIGNvbnN0IHB2cDFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwdnAxSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInB2cDFJbnB1dFwiKTtcbiAgICBwdnAxSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwdnAxSW5wdXRcIik7XG4gICAgcHZwMUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBjb25zdCBwdnAyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwdnAyRGl2LmNsYXNzTGlzdC5hZGQoXCJwdnAyRGl2XCIpO1xuICAgIGNvbnN0IHB2cDJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwdnAyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHZwMklucHV0XCIpO1xuICAgIHB2cDJMYWJlbC5pbm5lclRleHQgPSBcIlBsYXllciAyIC0gRW50ZXIgbmFtZTogXCI7XG4gICAgY29uc3QgcHZwMklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHB2cDJJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgcHZwMklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwdnAySW5wdXRcIik7XG4gICAgcHZwMklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHZwMklucHV0XCIpO1xuICAgIGdhbWVJbmZvcm1hdGlvbkRpdi5hcHBlbmRDaGlsZChwdnBGb3JtKTtcbiAgICBwdnBGb3JtLmFwcGVuZENoaWxkKHB2cDFEaXYpO1xuICAgIHB2cDFEaXYuYXBwZW5kQ2hpbGQocHZwMUxhYmVsKTtcbiAgICBwdnAxRGl2LmFwcGVuZENoaWxkKHB2cDFJbnB1dCk7XG4gICAgcHZwRm9ybS5hcHBlbmRDaGlsZChwdnAyRGl2KTtcbiAgICBwdnAyRGl2LmFwcGVuZENoaWxkKHB2cDJMYWJlbCk7XG4gICAgcHZwMkRpdi5hcHBlbmRDaGlsZChwdnAySW5wdXQpO1xuICAgIHB2cEZvcm0uYXBwZW5kQ2hpbGQocHZwU3VibWl0QnV0dG9uKTtcbiAgICBjb25zdCBwdmVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgcHZlRm9ybS5jbGFzc0xpc3QuYWRkKFwicHZlRm9ybVwiKTtcbiAgICBjb25zdCBwdmVTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHB2ZVN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHZlU3VibWl0XCIpO1xuICAgIHB2ZVN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuICAgIGNvbnN0IHB2ZTFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHB2ZTFEaXYuY2xhc3NMaXN0LmFkZChcInB2ZTFEaXZcIik7XG4gICAgY29uc3QgcHZlMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHB2ZTFMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwdmUxSW5wdXRcIik7XG4gICAgcHZlMUxhYmVsLmlubmVyVGV4dCA9IFwiUGxheWVyIDEgLSBFbnRlciBuYW1lOiBcIlxuICAgIGNvbnN0IHB2ZTFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwdmUxSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInB2ZTFJbnB1dFwiKTtcbiAgICBwdmUxSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwdmUxSW5wdXRcIik7XG4gICAgcHZlMUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBnYW1lSW5mb3JtYXRpb25EaXYuYXBwZW5kQ2hpbGQocHZlRm9ybSk7XG4gICAgcHZlRm9ybS5hcHBlbmRDaGlsZChwdmUxRGl2KTtcbiAgICBwdmUxRGl2LmFwcGVuZENoaWxkKHB2ZTFMYWJlbCk7XG4gICAgcHZlMURpdi5hcHBlbmRDaGlsZChwdmUxSW5wdXQpO1xuICAgIHB2ZUZvcm0uYXBwZW5kQ2hpbGQocHZlU3VibWl0QnV0dG9uKTtcbiAgICBjb25zdCBwcmVwUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmVwUGFyZW50LmNsYXNzTGlzdC5hZGQoXCJwcmVwUGFyZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJlcFBhcmVudCk7XG4gICAgY29uc3QgZ2FtZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJnc1wiKTtcbiAgICBjb25zdCBnc1Njb3JlYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdzU2NvcmVib2FyZERpdi5jbGFzc0xpc3QuYWRkKFwic2NEaXZcIik7XG4gICAgY29uc3QgZ3NNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZ3NNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJnc01lc3NhZ2VcIik7XG4gICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogXCI7XG4gICAgY29uc3Qgc2NvcmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNjb3JlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzY29yZXNcIik7XG4gICAgY29uc3QgcDFTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAxU2NvcmUuY2xhc3NMaXN0LmFkZChcInBzY29yZWJvYXJkMVwiKTtcbiAgICBwMVNjb3JlLmlubmVyVGV4dCA9IFwiUGxheWVyIDEgaGFzIDUgc2hpcHMgbGVmdC5cIjtcbiAgICBjb25zdCBwMlNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDJTY29yZS5jbGFzc0xpc3QuYWRkKFwicHNjb3JlYm9hcmQyXCIpO1xuICAgIHAyU2NvcmUuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgMiBoYXMgNSBzaGlwcyBsZWZ0LlwiO1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9hcmRDb250YWluZXJcIik7XG4gICAgY29uc3QgZ3NMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnc0xlZnQuY2xhc3NMaXN0LmFkZChcImdzTGVmdFwiKTtcbiAgICBjb25zdCBnc0xlZnRPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnc0xlZnRPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJnc2xPXCIpO1xuICAgIGNvbnN0IGdzUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdzUmlnaHQuY2xhc3NMaXN0LmFkZChcImdzUmlnaHRcIik7XG4gICAgY29uc3QgZ3NSaWdodE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdzUmlnaHRPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJnc3JPXCIpO1xuICAgIGdhbWVTZWN0aW9uLmFwcGVuZENoaWxkKGdzU2NvcmVib2FyZERpdik7XG4gICAgZ3NTY29yZWJvYXJkRGl2LmFwcGVuZENoaWxkKGdzTWVzc2FnZSk7XG4gICAgZ3NTY29yZWJvYXJkRGl2LmFwcGVuZENoaWxkKHNjb3JlQ29udGFpbmVyKTtcbiAgICBzY29yZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwMVNjb3JlKTtcbiAgICBzY29yZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwMlNjb3JlKTtcbiAgICBnYW1lU2VjdGlvbi5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3NMZWZ0KTtcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChnc1JpZ2h0KTtcbiAgICBjb25zdCBnc0xlZnRIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBnc0xlZnRIMi5jbGFzc0xpc3QuYWRkKFwiZ3NoMlwiKTtcbiAgICBnc0xlZnRIMi5jbGFzc0xpc3QuYWRkKFwicDFuYW1lXCIpO1xuICAgIGdzTGVmdEgyLmlubmVyVGV4dCA9IFwiUGxheWVyIDE6IFwiO1xuICAgIGNvbnN0IGdzUmlnaHRIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBnc1JpZ2h0SDIuY2xhc3NMaXN0LmFkZChcImdzaDJcIilcbiAgICBnc1JpZ2h0SDIuY2xhc3NMaXN0LmFkZChcInAybmFtZVwiKTtcbiAgICBnc1JpZ2h0SDIuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgMjogXCI7XG4gICAgY29uc3QgcDFCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcDFCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInAxQm9hcmRcIik7XG4gICAgY29uc3QgcDJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcDJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInAyQm9hcmRcIik7XG4gICAgZ3NMZWZ0LmFwcGVuZENoaWxkKGdzTGVmdE92ZXJsYXkpO1xuICAgIGdzTGVmdC5hcHBlbmRDaGlsZChnc0xlZnRIMik7XG4gICAgZ3NMZWZ0LmFwcGVuZENoaWxkKHAxQm9hcmQpO1xuICAgIGdzUmlnaHQuYXBwZW5kQ2hpbGQoZ3NSaWdodE92ZXJsYXkpO1xuICAgIGdzUmlnaHQuYXBwZW5kQ2hpbGQoZ3NSaWdodEgyKTtcbiAgICBnc1JpZ2h0LmFwcGVuZENoaWxkKHAyQm9hcmQpO1xuICAgIGNvbnN0IHJvd0NyZWF0b3IgPSAoZ3JpZCwgb3JkZXIsIHJvd051bWJlcikgPT4ge1xuICAgICAgICAob3JkZXIgPT09IDEpID8gb3JkZXIgPSBcImFcIiA6IG9yZGVyID0gXCJiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoYGJvYXJkXyR7b3JkZXJ9YCk7XG4gICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYG1fJHtvcmRlcn1fJHtpfSR7cm93TnVtYmVyfWApO1xuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcm93Q3JlYXRvcihwMUJvYXJkLCAxLCAwKTtcbiAgICByb3dDcmVhdG9yKHAxQm9hcmQsIDEsIDEpO1xuICAgIHJvd0NyZWF0b3IocDFCb2FyZCwgMSwgMik7XG4gICAgcm93Q3JlYXRvcihwMUJvYXJkLCAxLCAzKTtcbiAgICByb3dDcmVhdG9yKHAxQm9hcmQsIDEsIDQpO1xuICAgIHJvd0NyZWF0b3IocDFCb2FyZCwgMSwgNSk7XG4gICAgcm93Q3JlYXRvcihwMUJvYXJkLCAxLCA2KTtcbiAgICByb3dDcmVhdG9yKHAxQm9hcmQsIDEsIDcpO1xuICAgIHJvd0NyZWF0b3IocDFCb2FyZCwgMSwgOCk7XG4gICAgcm93Q3JlYXRvcihwMUJvYXJkLCAxLCA5KTtcbiAgICByb3dDcmVhdG9yKHAyQm9hcmQsIDIsIDApO1xuICAgIHJvd0NyZWF0b3IocDJCb2FyZCwgMiwgMSk7XG4gICAgcm93Q3JlYXRvcihwMkJvYXJkLCAyLCAyKTtcbiAgICByb3dDcmVhdG9yKHAyQm9hcmQsIDIsIDMpO1xuICAgIHJvd0NyZWF0b3IocDJCb2FyZCwgMiwgNCk7XG4gICAgcm93Q3JlYXRvcihwMkJvYXJkLCAyLCA1KTtcbiAgICByb3dDcmVhdG9yKHAyQm9hcmQsIDIsIDYpO1xuICAgIHJvd0NyZWF0b3IocDJCb2FyZCwgMiwgNyk7XG4gICAgcm93Q3JlYXRvcihwMkJvYXJkLCAyLCA4KTtcbiAgICByb3dDcmVhdG9yKHAyQm9hcmQsIDIsIDkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FtZVNlY3Rpb24pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkVUk7IiwiY29uc3QgcHJlcERpdkZhY3RvcnkgPSAobmFtZSwgb3JkZXIpID0+IHtcbiAgICBjb25zdCBwcmVwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmVwRGl2LmNsYXNzTGlzdC5hZGQoXCJwcmVwRGl2XCIpO1xuICAgIHByZXBEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmVwRGl2XCIsIGAke29yZGVyfWApO1xuICAgIGNvbnN0IHByZXBIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBwcmVwSDEuY2xhc3NMaXN0LmFkZChcInByZXBIMVwiKTtcbiAgICBwcmVwSDEuaW5uZXJUZXh0ID0gYCR7bmFtZX0sIHBsZWFzZSBwbGFjZSB5b3VyIHNoaXBzIG9uIHRoZSBncmlkLmA7XG4gICAgY29uc3QgcHJlcE1lc3NhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJlcE1lc3NhZ2VzLmNsYXNzTGlzdC5hZGQoXCJwX21lc3NcIik7XG4gICAgcHJlcE1lc3NhZ2VzLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogUGxlYXNlIHNlbGVjdCBhIHNoaXAgYW5kIHBsYWNlIGl0IG9uIHRoZSBncmlkLlwiO1xuICAgIGNvbnN0IHBsYWNlbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxhY2VtZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnREaXZcIik7XG4gICAgY29uc3QgcGxhY2VtZW50TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxhY2VtZW50TGVmdC5jbGFzc0xpc3QuYWRkKFwicF9sZWZ0XCIpO1xuICAgIGNvbnN0IHBsYWNlbWVudFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGFjZW1lbnRSaWdodC5jbGFzc0xpc3QuYWRkKFwicF9yaWdodFwiKTtcbiAgICBjb25zdCBwcmVwR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJlcEdyaWQuY2xhc3NMaXN0LmFkZChcInByZXBHcmlkXCIpO1xuICAgIHByZXBHcmlkLnNldEF0dHJpYnV0ZShcImRhdGEtb3JkZXJcIiwgYCR7b3JkZXJ9YCk7XG5cbiAgICBjb25zdCByb3dDcmVhdG9yID0gKGdyaWQsIG9yZGVyLCByb3dOdW1iZXIpID0+IHtcbiAgICAgICAgKG9yZGVyID09PSAxKSA/IG9yZGVyID0gXCJhXCIgOiBvcmRlciA9IFwiYlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJlcEJveC5jbGFzc0xpc3QuYWRkKFwicHJlcEJveFwiKTtcbiAgICAgICAgICAgIHByZXBCb3guY2xhc3NMaXN0LmFkZChgcHJlcGJvYXJkXyR7b3JkZXJ9YCk7XG4gICAgICAgICAgICBwcmVwQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke29yZGVyfV8ke2l9JHtyb3dOdW1iZXJ9YCk7XG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKHByZXBCb3gpO1xuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHJvd0NyZWF0b3IocHJlcEdyaWQsIG9yZGVyLCAwKTtcbiAgICByb3dDcmVhdG9yKHByZXBHcmlkLCBvcmRlciwgMSk7XG4gICAgcm93Q3JlYXRvcihwcmVwR3JpZCwgb3JkZXIsIDIpO1xuICAgIHJvd0NyZWF0b3IocHJlcEdyaWQsIG9yZGVyLCAzKTtcbiAgICByb3dDcmVhdG9yKHByZXBHcmlkLCBvcmRlciwgNCk7XG4gICAgcm93Q3JlYXRvcihwcmVwR3JpZCwgb3JkZXIsIDUpO1xuICAgIHJvd0NyZWF0b3IocHJlcEdyaWQsIG9yZGVyLCA2KTtcbiAgICByb3dDcmVhdG9yKHByZXBHcmlkLCBvcmRlciwgNyk7XG4gICAgcm93Q3JlYXRvcihwcmVwR3JpZCwgb3JkZXIsIDgpO1xuICAgIHJvd0NyZWF0b3IocHJlcEdyaWQsIG9yZGVyLCA5KTtcblxuICAgIFxuICAgIGNvbnN0IG9yaUgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG9yaUgzLmNsYXNzTGlzdC5hZGQoYG9yaUgzXyR7b3JkZXJ9YCk7XG4gICAgb3JpSDMuaW5uZXJUZXh0ID0gXCJPcmllbnRhdGlvbjogSG9yaXpvbnRhbFwiO1xuICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJydEJ1dHRvblwiKTtcbiAgICByb3RhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChgcm90YXRlXyR7b3JkZXJ9YCk7XG4gICAgcm90YXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiUm90YXRlXCI7XG4gICAgY29uc3Qgc2hpcHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoaXBzRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwc0RpdlwiKTtcbiAgICBjb25zdCBzaGlwc0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHNoaXBzSDIuY2xhc3NMaXN0LmFkZChcInNoaXBzSDJcIik7XG4gICAgc2hpcHNIMi5pbm5lclRleHQgPSBcIlNoaXBzXCI7XG4gICAgY29uc3QgY2FycmllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FycmllckRpdi5pbm5lclRleHQgPSBcIkNhcnJpZXJcIjtcbiAgICBjYXJyaWVyRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwU2VsZWN0b3JcIik7XG4gICAgY2FycmllckRpdi5jbGFzc0xpc3QuYWRkKGBjYXJyaWVyXyR7b3JkZXJ9YCk7XG4gICAgY29uc3QgYmF0dGxlc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmF0dGxlc2hpcERpdi5pbm5lclRleHQgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICBiYXR0bGVzaGlwRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwU2VsZWN0b3JcIik7XG4gICAgYmF0dGxlc2hpcERpdi5jbGFzc0xpc3QuYWRkKGBiYXR0bGVzaGlwXyR7b3JkZXJ9YCk7XG4gICAgY29uc3QgY3J1aXNlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3J1aXNlckRpdi5pbm5lclRleHQgPSBcIkNydWlzZXJcIjtcbiAgICBjcnVpc2VyRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwU2VsZWN0b3JcIik7XG4gICAgY3J1aXNlckRpdi5jbGFzc0xpc3QuYWRkKGBjcnVpc2VyXyR7b3JkZXJ9YCk7XG4gICAgY29uc3Qgc3VibWFyaW5lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdWJtYXJpbmVEaXYuaW5uZXJUZXh0ID0gXCJTdWJtYXJpbmVcIjtcbiAgICBzdWJtYXJpbmVEaXYuY2xhc3NMaXN0LmFkZChcInNoaXBTZWxlY3RvclwiKTtcbiAgICBzdWJtYXJpbmVEaXYuY2xhc3NMaXN0LmFkZChgc3VibWFyaW5lXyR7b3JkZXJ9YCk7XG4gICAgY29uc3QgZGVzdHJveWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXN0cm95ZXJEaXYuaW5uZXJUZXh0ID0gXCJEZXN0cm95ZXJcIjtcbiAgICBkZXN0cm95ZXJEaXYuY2xhc3NMaXN0LmFkZChcInNoaXBTZWxlY3RvclwiKTtcbiAgICBkZXN0cm95ZXJEaXYuY2xhc3NMaXN0LmFkZChgZGVzdHJveWVyXyR7b3JkZXJ9YCk7XG5cbiAgICBzaGlwc0Rpdi5hcHBlbmRDaGlsZChzaGlwc0gyKTtcbiAgICBzaGlwc0Rpdi5hcHBlbmRDaGlsZChjYXJyaWVyRGl2KTtcbiAgICBzaGlwc0Rpdi5hcHBlbmRDaGlsZChiYXR0bGVzaGlwRGl2KTtcbiAgICBzaGlwc0Rpdi5hcHBlbmRDaGlsZChjcnVpc2VyRGl2KTtcbiAgICBzaGlwc0Rpdi5hcHBlbmRDaGlsZChzdWJtYXJpbmVEaXYpO1xuICAgIHNoaXBzRGl2LmFwcGVuZENoaWxkKGRlc3Ryb3llckRpdik7XG5cbiAgICBjb25zdCBwcmVwU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcmVwU3VibWl0LmlubmVyVGV4dCA9IFwiU3VibWl0XCI7XG4gICAgcHJlcFN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwicHJlcFNCXCIpO1xuICAgIHByZXBTdWJtaXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdWJtaXRCdXR0b25cIiwgYCR7b3JkZXJ9YCk7XG4gICAgLy8gYWRkIGljb25zIGZvciB0aGUgc2hpcHMgaGVyZS4gZXZlbnQgbGlzdGVuZXJzIHdpbGwgbGF0ZXIgYmUgYXR0YWNoZWQuXG5cbiAgICBwcmVwRGl2LmFwcGVuZENoaWxkKHByZXBIMSk7XG4gICAgcHJlcERpdi5hcHBlbmRDaGlsZChwcmVwTWVzc2FnZXMpO1xuICAgIHByZXBEaXYuYXBwZW5kQ2hpbGQocGxhY2VtZW50RGl2KTtcbiAgICBwbGFjZW1lbnREaXYuYXBwZW5kQ2hpbGQocGxhY2VtZW50TGVmdCk7XG4gICAgcGxhY2VtZW50TGVmdC5hcHBlbmRDaGlsZChwcmVwR3JpZCk7XG4gICAgcGxhY2VtZW50RGl2LmFwcGVuZENoaWxkKHBsYWNlbWVudFJpZ2h0KTtcbiAgICBwbGFjZW1lbnRSaWdodC5hcHBlbmRDaGlsZChvcmlIMyk7XG4gICAgcGxhY2VtZW50UmlnaHQuYXBwZW5kQ2hpbGQocm90YXRlQnV0dG9uKTtcbiAgICBwbGFjZW1lbnRSaWdodC5hcHBlbmRDaGlsZChzaGlwc0Rpdik7XG4gICAgcGxhY2VtZW50UmlnaHQuYXBwZW5kQ2hpbGQocHJlcFN1Ym1pdCk7XG5cbiAgICByZXR1cm4gcHJlcERpdjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZXBEaXZGYWN0b3J5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==