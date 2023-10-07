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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: \"Tourney-Italic\";\n    src: url(\"Tourney_Expanded-Light.ttf\");\n}\n\n@font-face {\n    font-family: \"Tourney_SemiCondensed-Black\";\n    src: url(\"Tourney_SemiCondensed-Black.ttf\");\n}\n\nbody {\n    margin: 0;\n    font-family: \"Tourney_SemiCondensed-Black\";\n}\n\nbutton {\n    font-family: \"Tourney_SemiCondensed-Black\";\n}\n\nheader,\nfooter {\n    padding: 50px;\n    background-color: rgb(6, 6, 105);\n    color: aliceblue;\n    font-family: \"Tourney-Italic\";\n}\n\nheader > h1 {\n    margin: 0;\n    font-size: 80px;\n    text-align: center;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.overlay {\n    background-color: black;\n    opacity: .5;\n    position: fixed;\n    z-index: 2;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n.overlayHalf {\n    background-color: black;\n    opacity: .5;\n    position: fixed;\n    z-index: 2;\n    height: inherit;\n    width: inherit;\n}\n\n.ngDiv {\n    border: none;\n    border-radius: 5px;\n    position: absolute;\n    z-index: 3;\n    max-width: 400px;\n    background-color: white;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.ngh1 {\n    font-size: 50px;\n}\n\n.vsText {\n    font-size: 40px;\n}\n\n.pvpButton,\n.pveButton {\n    padding: 20px;\n    font-size: 35px;\n    border-radius: 5px;\n    border: none;\n}\n\n.pvpButton:hover,\n.pveButton:hover {\n    color: white;\n    background-color: rgb(6, 6, 105);\n}\n\n.idp {\n    position: absolute;\n    z-index: 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.giDiv {\n    padding: 40px;\n    border-radius: 5px;\n    background-color: white;\n    position: absolute;\n    z-index: 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.pvpForm,\n.pveForm {\n    width: max-content;\n    font-size: 32px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n}\n\n.p1Div,\n.p2Div {\n    display: flex;\n    gap: 30px;\n}\n\ninput {\n    font-family: \"Tourney_SemiCondensed-Black\";\n    background-color: rgb(239, 239, 239);\n    border: none;\n    border-radius: 5px;\n    width: 200px;\n    font-size: 32px;\n}\n\n.pvpSubmit,\n.pveSubmit {\n    padding: 15px;\n    font-size: 28px;\n    border-radius: 5px;\n    border: none;\n}\n\n.pvpSubmit:hover,\n.pveSubmit:hover {\n    background-color: rgb(6, 6, 105);\n    color: white;\n}\n\n/* used to hide things */\n\n.hide {\n    display: none;\n}\n\n/* prep divs */\n\n.prepParent {\n    position: absolute;\n    z-index: 3;\n    display: flex;\n    gap: 40px;\n    align-items: center;\n}\n\n.prepDiv {\n    padding: 40px;\n    border-radius: 5px;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.prepH1 {\n    margin-bottom: 10px;\n}\n\n.p_mess {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.placementDiv {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.prepGrid {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n    gap: 5px;\n\n}\n\n.prepBox {\n    height: 30px;\n    width: 30px;\n    background-color: grey;\n}\n\n.prepBox:hover {\n    border: solid;\n    border-width: 2px;\n    border-color: orange;\n}\n\n.p_right {\n    width: 207px;\n}\n\n.shipsH2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.oriH3_1,\n.oriH3_2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.rtButton {\n    height: 30px;\n    width: 100px;\n    border: none;\n    border-radius: 5px;\n}\n\n.rtButton:hover {\n    background-color: rgb(6, 6, 105);\n    color: white;\n}\n\n.shipsDiv {\n    padding-top: 15px;\n}\n\n.shipSelector {\n    background-color: rgb(239, 239, 239);\n    margin-bottom: 5px;\n    border-radius: 5px;\n    font-size: 18px;\n    padding: 6px;\n}\n\n.selected {\n    background-color: rgb(6, 6, 105);\n    color: white;\n}\n\n.prepSB {\n    margin-top: 30px;\n    height: 30px;\n    width: 100px;\n    border: none;\n    border-radius: 5px;\n}\n\n.prepSB:hover {\n    color: white;\n    background-color: rgb(6, 6, 105);\n}\n\n/* game section */\n\n.gs {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 20px;\n    \n}\n\n.gsRight {\n    position: relative;\n}\n\n.gsLeft {\n    position: relative;\n}\n\n.overlayHalf {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.gsMessage {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 24px;\n}\n\n.scores {\n    font-size: 24px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);    \n}\n\n.pscoreboard1,\n.pscoreboard2 {\n    margin: 15px;\n    text-align: center;\n}\n\n.boardContainer {\n    display: flex;\n    gap: 70px;\n}\n\n#p1Board,\n#p2Board {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    gap: 5px;\n}\n\n.box {\n    height: 50px;\n    width: 50px;\n    background-color: grey;\n}\n\n.box:hover {\n    background-color: yellow;\n}\n\nfooter {\n    min-height: 92px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSUFBNkM7QUFDekYsNENBQTRDLDZJQUFrRDtBQUM5Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxVQUFVLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxL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QkFBc0I7QUFDdEIsK0RBQStELE9BQU87QUFDdEUsb0RBQW9ELFFBQVEsTUFBTSxzQ0FBc0M7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqdUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0Msd0NBQXdDLE1BQU0sR0FBRyxFQUFFLEVBQUUsVUFBVTtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FDaExyQjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRDtBQUNBO0FBQ0EsMEJBQTBCLEtBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxNQUFNOztBQUVqRDtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBLCtDQUErQyxNQUFNO0FBQ3JELDBDQUEwQyxNQUFNLEdBQUcsRUFBRSxFQUFFLFVBQVU7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsTUFBTTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxNQUFNO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2FkVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3ByZXBEaXZGYWN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJUb3VybmV5X0V4cGFuZGVkLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIlRvdXJuZXlfU2VtaUNvbmRlbnNlZC1CbGFjay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJUb3VybmV5LUl0YWxpY1wiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJUb3VybmV5X1NlbWlDb25kZW5zZWQtQmxhY2tcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIlRvdXJuZXlfU2VtaUNvbmRlbnNlZC1CbGFja1wiO1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRvdXJuZXlfU2VtaUNvbmRlbnNlZC1CbGFja1wiO1xufVxuXG5oZWFkZXIsXG5mb290ZXIge1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDEwNSk7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LWZhbWlseTogXCJUb3VybmV5LUl0YWxpY1wiO1xufVxuXG5oZWFkZXIgPiBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IC41O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdmVybGF5SGFsZiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDI7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIHdpZHRoOiBpbmhlcml0O1xufVxuXG4ubmdEaXYge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmdoMSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4udnNUZXh0IHtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5wdnBCdXR0b24sXG4ucHZlQnV0dG9uIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ucHZwQnV0dG9uOmhvdmVyLFxuLnB2ZUJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2LCAxMDUpO1xufVxuXG4uaWRwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5naURpdiB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wdnBGb3JtLFxuLnB2ZUZvcm0ge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzMHB4O1xufVxuXG4ucDFEaXYsXG4ucDJEaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAzMHB4O1xufVxuXG5pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiVG91cm5leV9TZW1pQ29uZGVuc2VkLUJsYWNrXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLnB2cFN1Ym1pdCxcbi5wdmVTdWJtaXQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5wdnBTdWJtaXQ6aG92ZXIsXG4ucHZlU3VibWl0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIHVzZWQgdG8gaGlkZSB0aGluZ3MgKi9cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIHByZXAgZGl2cyAqL1xuXG4ucHJlcFBhcmVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByZXBEaXYge1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi5wcmVwSDEge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wX21lc3Mge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBsYWNlbWVudERpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnByZXBHcmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG4gICAgZ2FwOiA1cHg7XG5cbn1cblxuLnByZXBCb3gge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4ucHJlcEJveDpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcbn1cblxuLnBfcmlnaHQge1xuICAgIHdpZHRoOiAyMDdweDtcbn1cblxuLnNoaXBzSDIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm9yaUgzXzEsXG4ub3JpSDNfMiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucnRCdXR0b24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJ0QnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zaGlwc0RpdiB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5zaGlwU2VsZWN0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiA2cHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDEwNSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJlcFNCIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByZXBTQjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2LCAxMDUpO1xufVxuXG4vKiBnYW1lIHNlY3Rpb24gKi9cblxuLmdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBcbn1cblxuLmdzUmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdzTGVmdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3ZlcmxheUhhbGYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5nc01lc3NhZ2Uge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5zY29yZXMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7ICAgIFxufVxuXG4ucHNjb3JlYm9hcmQxLFxuLnBzY29yZWJvYXJkMiB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvYXJkQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNzBweDtcbn1cblxuI3AxQm9hcmQsXG4jcDJCb2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xuICAgIGdhcDogNXB4O1xufVxuXG4uYm94IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLmJveDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG5mb290ZXIge1xuICAgIG1pbi1oZWlnaHQ6IDkycHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLDRDQUFzQztBQUMxQzs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyw0Q0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBOztJQUVJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7SUFDYixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQSx3QkFBd0I7O0FBRXhCO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxjQUFjOztBQUVkO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyxRQUFROztBQUVaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVG91cm5leS1JdGFsaWNcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiVG91cm5leV9FeHBhbmRlZC1MaWdodC50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVG91cm5leV9TZW1pQ29uZGVuc2VkLUJsYWNrXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIlRvdXJuZXlfU2VtaUNvbmRlbnNlZC1CbGFjay50dGZcXFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUb3VybmV5X1NlbWlDb25kZW5zZWQtQmxhY2tcXFwiO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogXFxcIlRvdXJuZXlfU2VtaUNvbmRlbnNlZC1CbGFja1xcXCI7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUb3VybmV5LUl0YWxpY1xcXCI7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogLjU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm92ZXJsYXlIYWxmIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IC41O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxufVxcblxcbi5uZ0RpdiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmdoMSB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLnZzVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLnB2cEJ1dHRvbixcXG4ucHZlQnV0dG9uIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnB2cEJ1dHRvbjpob3ZlcixcXG4ucHZlQnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMTA1KTtcXG59XFxuXFxuLmlkcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5naURpdiB7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnB2cEZvcm0sXFxuLnB2ZUZvcm0ge1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ucDFEaXYsXFxuLnAyRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVG91cm5leV9TZW1pQ29uZGVuc2VkLUJsYWNrXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5wdnBTdWJtaXQsXFxuLnB2ZVN1Ym1pdCB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wdnBTdWJtaXQ6aG92ZXIsXFxuLnB2ZVN1Ym1pdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2LCAxMDUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIHVzZWQgdG8gaGlkZSB0aGluZ3MgKi9cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIHByZXAgZGl2cyAqL1xcblxcbi5wcmVwUGFyZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcmVwRGl2IHtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ucHJlcEgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnBfbWVzcyB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wbGFjZW1lbnREaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByZXBHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdhcDogNXB4O1xcblxcbn1cXG5cXG4ucHJlcEJveCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5wcmVwQm94OmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucF9yaWdodCB7XFxuICAgIHdpZHRoOiAyMDdweDtcXG59XFxuXFxuLnNoaXBzSDIge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ub3JpSDNfMSxcXG4ub3JpSDNfMiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5ydEJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJ0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDEwNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNoaXBzRGl2IHtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcblxcbi5zaGlwU2VsZWN0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDEwNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByZXBTQiB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByZXBTQjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDEwNSk7XFxufVxcblxcbi8qIGdhbWUgc2VjdGlvbiAqL1xcblxcbi5ncyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuLmdzUmlnaHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5nc0xlZnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vdmVybGF5SGFsZiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ3NNZXNzYWdlIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uc2NvcmVzIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyAgICBcXG59XFxuXFxuLnBzY29yZWJvYXJkMSxcXG4ucHNjb3JlYm9hcmQyIHtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNzBweDtcXG59XFxuXFxuI3AxQm9hcmQsXFxuI3AyQm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5ib3gge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYm94OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBtaW4taGVpZ2h0OiA5MnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGdhbWVCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgXG4gICAgbGV0IHBsYWNlZFNoaXBzID0gW107XG4gICAgbGV0IHN1bmtlbkNvdW50ID0gMDtcbiAgICBjb25zdCBtYXhTdW5rZW4gPSA1O1xuICAgIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuICAgIGxldCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBib2FyZC5wdXNoKFtdKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKFwiXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0U3Vua2VuQ291bnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdW5rZW5Db3VudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0R2FtZVN0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVPdmVyO1xuICAgIH07IFxuXG4gICAgLy8gdHJ1ZSA9IGhvcml6b250YWwsIGZhbHNlID0gdmVydGljYWxcbiAgICBsZXQgc2hpcE9yaWVudGF0aW9uID0gdHJ1ZTtcblxuICAgIGNvbnN0IHJvdGF0ZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgIHNoaXBPcmllbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBPcmllbnRhdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBPcmllbnRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gc2hpcE9yaWVudGF0aW9uO1xuICAgICAgICB9IFxuICAgIH07XG5cbiAgICBjb25zdCBnZXRTaGlwT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwT3JpZW50YXRpb247XG4gICAgfTtcblxuICAgIGNvbnN0IHNoaXBGYWN0b3J5ID0gKHNoaXBMZW5ndGgsIGNydWlzZXJTdGF0dXMpID0+IHtcbiAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hpcExlbmd0aCxcbiAgICAgICAgICAgIGhpdHM6IDAsXG4gICAgICAgICAgICBzdW5rU3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgIGNydWlzZXJTdGF0dXMsXG4gICAgICAgICAgICBoaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzU3VuazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcExlbmd0aCA9PT0gdGhpcy5oaXRzKSB0aGlzLnN1bmtTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZUFJU2hpcCA9IChzaGlwTGVuZ3RoLCB5Q29vcmQsIHhDb29yZCwgYWlPcmllbnRhdGlvbikgPT4ge1xuICAgICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgbGV0IGNhcnJpZXIgPSBzaGlwRmFjdG9yeShzaGlwTGVuZ3RoLCBudWxsKTtcbiAgICAgICAgICAgIGlmIChhaU9yaWVudGF0aW9uID09PSAwKSB7IC8vIGhvcml6b250YWxcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geENvb3JkOyBpIDwgeENvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3lDb29yZF1baV0gPSBjYXJyaWVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gMSB3aGljaCBpcyB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB5Q29vcmQ7IGkgPCB5Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbaV1beENvb3JkXSA9IGNhcnJpZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICBsZXQgYmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgsIG51bGwpO1xuICAgICAgICAgICAgaWYgKGFpT3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geENvb3JkOyBpIDwgeENvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3lDb29yZF1baV0gPSBiYXR0bGVzaGlwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geUNvb3JkOyBpIDwgeUNvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW3hDb29yZF0gPSBiYXR0bGVzaGlwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcExlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgbGV0IHRocmVlSGl0dGVyID0gc2hpcEZhY3Rvcnkoc2hpcExlbmd0aCwgbnVsbCk7XG4gICAgICAgICAgICBpZiAoYWlPcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB4Q29vcmQ7IGkgPCB4Q29vcmQgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeUNvb3JkXVtpXSA9IHRocmVlSGl0dGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHlDb29yZDsgaSA8IHlDb29yZCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXVt4Q29vcmRdID0gdGhyZWVIaXR0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgbGV0IGRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgsIG51bGwpO1xuICAgICAgICAgICAgaWYgKGFpT3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geENvb3JkOyBpIDwgeENvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3lDb29yZF1baV0gPSBkZXN0cm95ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geUNvb3JkOyBpIDwgeUNvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW3hDb29yZF0gPSBkZXN0cm95ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcExlbmd0aCwgeUNvb3JkLCB4Q29vcmQsIGNydWlzZXJTdGF0KSA9PiB7XG4gICAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBsZXQgY2FycmllciA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgsIG51bGwpO1xuICAgICAgICAgICAgaWYgKGdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW3lDb29yZF0ubGVuZ3RoIC0geENvb3JkID49IHNoaXBMZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geENvb3JkOyBpIDwgeENvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFt5Q29vcmRdW2ldID0gY2FycmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYWNlZFNoaXBzLmluY2x1ZGVzKFwiY2FycmllclwiKSkgcGxhY2VkU2hpcHMucHVzaChcImNhcnJpZXJcIik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3QgZW5vdWdoIHNwYWNlLiBDYW5ub3QgcGxhY2UgY2FycmllciBoZXJlLlwiO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZC5sZW5ndGggLSB5Q29vcmQgPj0gc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geUNvb3JkOyBpIDwgeUNvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFtpXVt4Q29vcmRdID0gY2FycmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYWNlZFNoaXBzLmluY2x1ZGVzKFwiY2FycmllclwiKSkgcGxhY2VkU2hpcHMucHVzaChcImNhcnJpZXJcIik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3QgZW5vdWdoIHNwYWNlLiBDYW5ub3QgcGxhY2UgY2FycmllciBoZXJlLlwiO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICBsZXQgYmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgsIG51bGwpO1xuICAgICAgICAgICAgaWYgKGdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW3lDb29yZF0ubGVuZ3RoIC0geENvb3JkID49IHNoaXBMZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geENvb3JkOyBpIDwgeENvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFt5Q29vcmRdW2ldID0gYmF0dGxlc2hpcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYWNlZFNoaXBzLmluY2x1ZGVzKFwiYmF0dGxlc2hpcFwiKSkgcGxhY2VkU2hpcHMucHVzaChcImJhdHRsZXNoaXBcIik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3QgZW5vdWdoIHNwYWNlLiBDYW5ub3QgcGxhY2UgYmF0dGxlc2hpcCBoZXJlLlwiO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZC5sZW5ndGggLSB5Q29vcmQgPj0gc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geUNvb3JkOyBpIDwgeUNvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFtpXVt4Q29vcmRdID0gYmF0dGxlc2hpcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYWNlZFNoaXBzLmluY2x1ZGVzKFwiYmF0dGxlc2hpcFwiKSkgcGxhY2VkU2hpcHMucHVzaChcImJhdHRsZXNoaXBcIik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3QgZW5vdWdoIHNwYWNlLiBDYW5ub3QgcGxhY2UgYmF0dGxlc2hpcCBoZXJlLlwiO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBpZiAoY3J1aXNlclN0YXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3J1aXNlciA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRbeUNvb3JkXS5sZW5ndGggLSB4Q29vcmQgPj0gc2hpcExlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geENvb3JkOyBpIDwgeENvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRbeUNvb3JkXVtpXSA9IGNydWlzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYWNlZFNoaXBzLmluY2x1ZGVzKFwiY3J1aXNlclwiKSkgcGxhY2VkU2hpcHMucHVzaChcImNydWlzZXJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBlbm91Z2ggc3BhY2UuIENhbm5vdCBwbGFjZSBjcnVpc2VyIGhlcmUuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5sZW5ndGggLSB5Q29vcmQgPj0gc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHlDb29yZDsgaSA8IHlDb29yZCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW3hDb29yZF0gPSBjcnVpc2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwbGFjZWRTaGlwcy5pbmNsdWRlcyhcImNydWlzZXJcIikpIHBsYWNlZFNoaXBzLnB1c2goXCJjcnVpc2VyXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3QgZW5vdWdoIHNwYWNlLiBDYW5ub3QgcGxhY2UgY3J1aXNlciBoZXJlLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkW3lDb29yZF0ubGVuZ3RoIC0geENvb3JkID49IHNoaXBMZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHhDb29yZDsgaSA8IHhDb29yZCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW3lDb29yZF1baV0gPSBzdWJtYXJpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYWNlZFNoaXBzLmluY2x1ZGVzKFwic3VibWFyaW5lXCIpKSBwbGFjZWRTaGlwcy5wdXNoKFwic3VibWFyaW5lXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3QgZW5vdWdoIHNwYWNlLiBDYW5ub3QgcGxhY2Ugc3VibWFyaW5lIGhlcmUuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5sZW5ndGggLSB5Q29vcmQgPj0gc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHlDb29yZDsgaSA8IHlDb29yZCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW3hDb29yZF0gPSBzdWJtYXJpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYWNlZFNoaXBzLmluY2x1ZGVzKFwic3VibWFyaW5lXCIpKSBwbGFjZWRTaGlwcy5wdXNoKFwic3VibWFyaW5lXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3QgZW5vdWdoIHNwYWNlLiBDYW5ub3QgcGxhY2Ugc3VibWFyaW5lIGhlcmUuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkZXN0cm95ZXIgPSBzaGlwRmFjdG9yeShzaGlwTGVuZ3RoLCBudWxsKTtcbiAgICAgICAgICAgIGlmIChnZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFt5Q29vcmRdLmxlbmd0aCAtIHhDb29yZCA+PSBzaGlwTGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHhDb29yZDsgaSA8IHhDb29yZCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRbeUNvb3JkXVtpXSA9IGRlc3Ryb3llcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYWNlZFNoaXBzLmluY2x1ZGVzKFwiZGVzdHJveWVyXCIpKSBwbGFjZWRTaGlwcy5wdXNoKFwiZGVzdHJveWVyXCIpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90IGVub3VnaCBzcGFjZS4gQ2Fubm90IHBsYWNlIGRlc3Ryb3llciBoZXJlLlwiO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZC5sZW5ndGggLSB5Q29vcmQgPj0gc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geUNvb3JkOyBpIDwgeUNvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFtpXVt4Q29vcmRdID0gZGVzdHJveWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGxhY2VkU2hpcHMuaW5jbHVkZXMoXCJkZXN0cm95ZXJcIikpIHBsYWNlZFNoaXBzLnB1c2goXCJkZXN0cm95ZXJcIik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3QgZW5vdWdoIHNwYWNlLiBDYW5ub3QgcGxhY2UgZGVzdHJveWVyIGhlcmUuXCI7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh5Q29vcmQsIHhDb29yZCkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IHtcbiAgICAgICAgICAgIHN0YXR1czogXCJcIixcbiAgICAgICAgICAgIHN1bms6IG51bGwsXG4gICAgICAgICAgICBnYW1lT3ZlcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGJvYXJkW3lDb29yZF1beENvb3JkXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgYm9hcmRbeUNvb3JkXVt4Q29vcmRdID0gXCJNXCI7XG4gICAgICAgICAgICByZXN1bHRzLnN0YXR1cyA9IFwiTVwiO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG5cbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFt5Q29vcmRdW3hDb29yZF0gPT09IFwiTVwiIHx8IGJvYXJkW3lDb29yZF1beENvb3JkXSA9PT0gXCJYXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIllvdSBjYW5ub3Qgc3RyaWtlIHRoZSBzYW1lIHNwb3QgdHdpY2VcIjtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmRbeUNvb3JkXVt4Q29vcmRdLmhpdCgpO1xuICAgICAgICAgICAgYm9hcmRbeUNvb3JkXVt4Q29vcmRdLmlzU3VuaygpO1xuICAgICAgICAgICAgcmVzdWx0cy5zdGF0dXMgPSBcIlhcIjtcbiAgICAgICAgICAgIGlmIChib2FyZFt5Q29vcmRdW3hDb29yZF0uc3Vua1N0YXR1cykge1xuICAgICAgICAgICAgICAgIHN1bmtlbkNvdW50Kys7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBib2FyZFt5Q29vcmRdW3hDb29yZF0gPSBcIlhcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeUNvb3JkXVt4Q29vcmRdID0gXCJYXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZFt5Q29vcmRdW3hDb29yZF0gPSBcIlhcIjtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZiAobWF4U3Vua2VuID09PSBnZXRTdW5rZW5Db3VudCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYWNlZFNoaXBzO1xuICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRCb2FyZCxcbiAgICAgICAgZ2V0R2FtZVN0YXR1cyxcbiAgICAgICAgZ2V0U3Vua2VuQ291bnQsXG4gICAgICAgIHJvdGF0ZVNoaXAsXG4gICAgICAgIGdldFNoaXBPcmllbnRhdGlvbiwgXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcGxhY2VBSVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGdldFNoaXBzXG4gICAgfTtcbn07XG4vLyBtb2R1bGUuZXhwb3J0cyA9IGdhbWVCb2FyZEZhY3Rvcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZEZhY3Rvcnk7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZFVJIGZyb20gJy4vbG9hZFVJJztcbmltcG9ydCBnYW1lQm9hcmRGYWN0b3J5IGZyb20gJy4vZ2FtZUJvYXJkJztcbmltcG9ydCBwcmVwRGl2RmFjdG9yeSBmcm9tICcuL3ByZXBEaXZGYWN0b3J5JztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xubGV0IHNlbGVjdGVkTGVuZ3RoID0gNTtcbmNvbnN0IG92ZXJsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xub3ZlcmxheURpdi5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcbmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheURpdik7XG5sb2FkVUkoYm9keSk7XG5jb25zdCBuZXdHYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZ0RpdlwiKTtcbmNvbnN0IGdhbWVJbmZvcm1hdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2lEaXZcIik7XG5jb25zdCBwdnBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnB2cEJ1dHRvblwiKTtcbmNvbnN0IHB2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHZlQnV0dG9uXCIpO1xuY29uc3QgcHZwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHZwRm9ybVwiKTtcbmNvbnN0IHB2ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnB2ZUZvcm1cIik7XG5jb25zdCBwdnBTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnB2cFN1Ym1pdFwiKTtcbmNvbnN0IHB2ZVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHZlU3VibWl0XCIpO1xuY29uc3QgcHJlcFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlcFBhcmVudFwiKTtcbmNvbnN0IHB2cDFJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHZwMUlucHV0XCIpO1xuY29uc3QgcHZwMklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwdnAySW5wdXRcIik7XG5jb25zdCBwdmUxSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3B2ZTFJbnB1dFwiKTtcbmNvbnN0IGdzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NNZXNzYWdlXCIpO1xuY29uc3QgcFNjb3JlQm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wc2NvcmVib2FyZDFcIik7XG5jb25zdCBwU2NvcmVCb2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBzY29yZWJvYXJkMlwiKTtcbmNvbnN0IGxlZnRCb2FyZE8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdzbE9cIik7XG5jb25zdCByaWdodEJvYXJkTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NyT1wiKTtcbmNvbnN0IGdhbWVUaWxlc0EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkX2FcIik7XG5jb25zdCBnYW1lVGlsZXNCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZF9iXCIpO1xubGV0IG5laWdoYm9ycyA9IFtdO1xuXG5jb25zdCBzZXRBSUJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgbGV0IHRvdGFsUGxhY2VkID0gMDtcbiAgICB3aGlsZSAodG90YWxQbGFjZWQgPCA1KSB7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTsgLy8gcG90ZW50aWFsbHkgc3dpdGNoIG9yaWVudGF0aW9uIGV2ZXJ5IGxvb3AsIDAgZm9yIGhvcml6b250YWwsIDEgZm9yIHZlcnRpY2FsXG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICBpZiAodG90YWxQbGFjZWQgPT09IDApIHsgLy8gcGxhY2UgdGhlIGNhcnJpZXJcbiAgICAgICAgICAgIGxlbmd0aCA9IDU7XG4gICAgICAgICAgICBsZXQgeFN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIGxldCB5U3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh4U3RhcnQgKyBsZW5ndGggPCAxMCkgJiYgKDEwIC0geFN0YXJ0ID49IGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnRdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnQrMV0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydCsyXSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0KzNdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnQrNF0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnBsYWNlQUlTaGlwKDUsIHlTdGFydCwgeFN0YXJ0LCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBsYWNlZCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICgoeVN0YXJ0ICsgbGVuZ3RoIDwgMTApICYmICgxMCAtIHlTdGFydCA+PSBsZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0XSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydCsxXVt4U3RhcnRdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0KzJdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnQrM11beFN0YXJ0XSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydCs0XVt4U3RhcnRdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZUFJU2hpcCg1LCB5U3RhcnQsIHhTdGFydCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQbGFjZWQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodG90YWxQbGFjZWQgPT09IDEpIHsgLy8gcGxhY2UgdGhlIGJhdHRsZXNoaXBcbiAgICAgICAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICAgICAgICBsZXQgeFN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIGxldCB5U3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh4U3RhcnQgKyBsZW5ndGggPCAxMCkgJiYgKDEwIC0geFN0YXJ0ID49IGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnRdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnQrMV0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydCsyXSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0KzNdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZUFJU2hpcCg0LCB5U3RhcnQsIHhTdGFydCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQbGFjZWQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICgoeVN0YXJ0ICsgbGVuZ3RoIDwgMTApICYmICgxMCAtIHlTdGFydCA+PSBsZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0XSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydCsxXVt4U3RhcnRdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0KzJdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnQrM11beFN0YXJ0XSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucGxhY2VBSVNoaXAoNCwgeVN0YXJ0LCB4U3RhcnQsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGxhY2VkKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsUGxhY2VkID09PSAyKSB7IC8vIHBsYWNlIHRoZSBjcnVpc2VyXG4gICAgICAgICAgICBsZW5ndGggPSAzO1xuICAgICAgICAgICAgbGV0IHhTdGFydCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICBsZXQgeVN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICgoeFN0YXJ0ICsgbGVuZ3RoIDwgMTApICYmICgxMCAtIHhTdGFydCA+PSBsZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0XSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydF1beFN0YXJ0KzFdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnQrMl0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnBsYWNlQUlTaGlwKDMsIHlTdGFydCwgeFN0YXJ0LCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBsYWNlZCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh5U3RhcnQgKyBsZW5ndGggPCAxMCkgJiYgKDEwIC0geVN0YXJ0ID49IGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnRdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0KzFdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnQrMl1beFN0YXJ0XSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucGxhY2VBSVNoaXAoMywgeVN0YXJ0LCB4U3RhcnQsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGxhY2VkKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsUGxhY2VkID09PSAzKSB7IC8vIHBsYWNlIHRoZSBzdWJcbiAgICAgICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgICAgICBsZXQgeFN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIGxldCB5U3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh4U3RhcnQgKyBsZW5ndGggPCAxMCkgJiYgKDEwIC0geFN0YXJ0ID49IGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnRdID09PSBcIlwiICYmIGJvYXJkLmdldEJvYXJkKClbeVN0YXJ0XVt4U3RhcnQrMV0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydCsyXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucGxhY2VBSVNoaXAoMywgeVN0YXJ0LCB4U3RhcnQsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGxhY2VkKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHlTdGFydCArIGxlbmd0aCA8IDEwKSAmJiAoMTAgLSB5U3RhcnQgPj0gbGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnQrMV1beFN0YXJ0XSA9PT0gXCJcIiAmJiBib2FyZC5nZXRCb2FyZCgpW3lTdGFydCsyXVt4U3RhcnRdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZUFJU2hpcCgzLCB5U3RhcnQsIHhTdGFydCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQbGFjZWQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodG90YWxQbGFjZWQgPT09IDQpIHsgLy8gcGxhY2UgdGhlIGRlc3Ryb3llclxuICAgICAgICAgICAgbGVuZ3RoID0gMjtcbiAgICAgICAgICAgIGxldCB4U3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgbGV0IHlTdGFydCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoKHhTdGFydCArIGxlbmd0aCA8IDEwKSAmJiAoMTAgLSB4U3RhcnQgPj0gbGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydCsxXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucGxhY2VBSVNoaXAoMiwgeVN0YXJ0LCB4U3RhcnQsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGxhY2VkKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHlTdGFydCArIGxlbmd0aCA8IDEwKSAmJiAoMTAgLSB5U3RhcnQgPj0gbGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnRdW3hTdGFydF0gPT09IFwiXCIgJiYgYm9hcmQuZ2V0Qm9hcmQoKVt5U3RhcnQrMV1beFN0YXJ0XSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucGxhY2VBSVNoaXAoMiwgeVN0YXJ0LCB4U3RhcnQsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGxhY2VkKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH07XG59XG5cbmNvbnN0IGFpQXR0YWNrID0gKGVuZW15Qm9hcmQsIGh1bWFuTmFtZSwgbmVpZ2hib3JBcnJheSkgPT4ge1xuXG4gICAgbGV0IG1pc3MgPSBmYWxzZTtcbiAgICBsZXQgeENvb3JkID0gMDtcbiAgICBsZXQgeUNvb3JkID0gMDtcbiAgICBsZXQgYXR0YWNrO1xuICAgIGxldCB0YXJnZXRUaWxlO1xuXG4gICAgd2hpbGUgKCFtaXNzKSB7XG4gICAgICAgIHhDb29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIHlDb29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG5cbiAgICAgICAgaWYgKG5laWdoYm9yQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGF0dGFja0Nvb3JkcyA9IG5laWdoYm9yQXJyYXkucG9wKCk7XG4gICAgICAgICAgICBhdHRhY2sgPSBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrQ29vcmRzLnksIGF0dGFja0Nvb3Jkcy54KTtcblxuICAgICAgICAgICAgaWYgKGF0dGFjayA9PT0gXCJZb3UgY2Fubm90IHN0cmlrZSB0aGUgc2FtZSBzcG90IHR3aWNlXCIpIHtcbiAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IFRyeSBhZ2Fpbi4gJHthdHRhY2t9LmA7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBHYW1lIE92ZXIhIEFJIFdpbnMhIFJlZnJlc2ggdGhlIGJyb3dzZXIgdG8gcGxheSBhZ2Fpbi5gO1xuICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMS5pbm5lclRleHQgPSBgJHtodW1hbk5hbWV9IGhhcyAkezUgLSBOdW1iZXIoZW5lbXlCb2FyZC5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgIHRhcmdldFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbV9hXyR7YXR0YWNrQ29vcmRzLnh9JHthdHRhY2tDb29yZHMueX1gKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRUaWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgb3ZlcmxheURpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrLnN0YXR1cyA9PT0gXCJNXCIpIHtcbiAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IEFJIG1pc3NlZC4gU3dpdGNoaW5nIHR1cm5zLmA7XG4gICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQxLmlubmVyVGV4dCA9IGAke2h1bWFuTmFtZX0gaGFzICR7NSAtIE51bWJlcihlbmVteUJvYXJkLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNtX2FfJHthdHRhY2tDb29yZHMueH0ke2F0dGFja0Nvb3Jkcy55fWApO1xuICAgICAgICAgICAgICAgIHRhcmdldFRpbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjeWFuXCI7XG4gICAgICAgICAgICAgICAgbWlzcyA9IHRydWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dGFjay5zdW5rID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogU2hpcCBzdW5rISBBSSBtYXkgZmlyZSBhZ2Fpbi5gO1xuICAgICAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDEuaW5uZXJUZXh0ID0gYCR7aHVtYW5OYW1lfSBoYXMgJHs1IC0gTnVtYmVyKGVuZW15Qm9hcmQuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNtX2FfJHthdHRhY2tDb29yZHMueH0ke2F0dGFja0Nvb3Jkcy55fWApO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUaWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IEhpdCEgQUkgbWF5IGZpcmUgYWdhaW4uYDtcbiAgICAgICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQxLmlubmVyVGV4dCA9IGAke2h1bWFuTmFtZX0gaGFzICR7NSAtIE51bWJlcihlbmVteUJvYXJkLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbV9hXyR7YXR0YWNrQ29vcmRzLnh9JHthdHRhY2tDb29yZHMueX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tDb29yZHMuZGlyZWN0aW9uID09PSBcIm5vcnRoXCIgfHwgYXR0YWNrQ29vcmRzLmRpcmVjdGlvbiA9PT0gXCJzb3V0aFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvckFycmF5ID0gbmVpZ2hib3JBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5kaXJlY3Rpb24gPT09IFwibm9ydGhcIiB8fCBlbGVtZW50LmRpcmVjdGlvbiA9PT0gXCJzb3V0aFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrQ29vcmRzLmRpcmVjdGlvbiA9PT0gXCJub3J0aFwiICYmIChhdHRhY2tDb29yZHMueS0xKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JBcnJheS5wdXNoKHtkaXJlY3Rpb246IFwibm9ydGhcIiwgeTogYXR0YWNrQ29vcmRzLnktMSwgeDogYXR0YWNrQ29vcmRzLnh9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGFja0Nvb3Jkcy5kaXJlY3Rpb24gPT09IFwic291dGhcIiAmJiAoYXR0YWNrQ29vcmRzLnkrMSA8PSA5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yQXJyYXkucHVzaCh7ZGlyZWN0aW9uOiBcInNvdXRoXCIsIHk6IGF0dGFja0Nvb3Jkcy55KzEsIHg6IGF0dGFja0Nvb3Jkcy54fSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrQ29vcmRzLmRpcmVjdGlvbiA9PT0gXCJlYXN0XCIgfHwgYXR0YWNrQ29vcmRzLmRpcmVjdGlvbiA9PT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yQXJyYXkgPSBuZWlnaGJvckFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmRpcmVjdGlvbiA9PT0gXCJlYXN0XCIgfHwgZWxlbWVudC5kaXJlY3Rpb24gPT09IFwid2VzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrQ29vcmRzLmRpcmVjdGlvbiA9PT0gXCJlYXN0XCIgJiYgKGF0dGFja0Nvb3Jkcy54KzEpIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvckFycmF5LnB1c2goe2RpcmVjdGlvbjogXCJlYXN0XCIsIHk6IGF0dGFja0Nvb3Jkcy55LCB4OiBhdHRhY2tDb29yZHMueCsxfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tDb29yZHMuZGlyZWN0aW9uID09PSBcIndlc3RcIiAmJiAoYXR0YWNrQ29vcmRzLngtMSkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yQXJyYXkucHVzaCh7ZGlyZWN0aW9uOiBcIndlc3RcIiwgeTogYXR0YWNrQ29vcmRzLnksIHg6IGF0dGFja0Nvb3Jkcy54LTF9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0YWNrID0gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHlDb29yZCwgeENvb3JkKTtcbiAgICAgICAgICAgIGlmIChhdHRhY2sgPT09IFwiWW91IGNhbm5vdCBzdHJpa2UgdGhlIHNhbWUgc3BvdCB0d2ljZVwiKSB7XG4gICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBUcnkgYWdhaW4uICR7YXR0YWNrfS5gO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGFjay5nYW1lT3ZlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogR2FtZSBPdmVyISBBSSBXaW5zISBSZWZyZXNoIHRoZSBicm93c2VyIHRvIHBsYXkgYWdhaW4uYDtcbiAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDEuaW5uZXJUZXh0ID0gYCR7aHVtYW5OYW1lfSBoYXMgJHs1IC0gTnVtYmVyKGVuZW15Qm9hcmQuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICB0YXJnZXRUaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI21fYV8ke3hDb29yZH0ke3lDb29yZH1gKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRUaWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgb3ZlcmxheURpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrLnN0YXR1cyA9PT0gXCJNXCIpIHtcbiAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IEFJIG1pc3NlZC4gU3dpdGNoaW5nIHR1cm5zLmA7XG4gICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQxLmlubmVyVGV4dCA9IGAke2h1bWFuTmFtZX0gaGFzICR7NSAtIE51bWJlcihlbmVteUJvYXJkLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNtX2FfJHt4Q29vcmR9JHt5Q29vcmR9YCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImN5YW5cIjtcbiAgICAgICAgICAgICAgICBtaXNzID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrLnN1bmsgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBTaGlwIHN1bmshIEFJIG1heSBmaXJlIGFnYWluLmA7XG4gICAgICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMS5pbm5lclRleHQgPSBgJHtodW1hbk5hbWV9IGhhcyAkezUgLSBOdW1iZXIoZW5lbXlCb2FyZC5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI21fYV8ke3hDb29yZH0ke3lDb29yZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBIaXQhIEFJIG1heSBmaXJlIGFnYWluLmA7XG4gICAgICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMS5pbm5lclRleHQgPSBgJHtodW1hbk5hbWV9IGhhcyAkezUgLSBOdW1iZXIoZW5lbXlCb2FyZC5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI21fYV8ke3hDb29yZH0ke3lDb29yZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHlDb29yZC0xID49IDApICYmIGVuZW15Qm9hcmQuZ2V0Qm9hcmQoKVt5Q29vcmQtMV1beENvb3JkXSAhPT0gXCJNXCIgJiYgZW5lbXlCb2FyZC5nZXRCb2FyZCgpW3lDb29yZC0xXVt4Q29vcmRdICE9PSBcIlhcIikgbmVpZ2hib3JBcnJheS5wdXNoKHtkaXJlY3Rpb246IFwibm9ydGhcIiwgeTogKHlDb29yZC0xKSwgeDogeENvb3JkfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoeENvb3JkKzEgPD0gOSkgJiYgZW5lbXlCb2FyZC5nZXRCb2FyZCgpW3lDb29yZF1beENvb3JkKzFdICE9PSBcIk1cIiAmJiBlbmVteUJvYXJkLmdldEJvYXJkKClbeUNvb3JkXVt4Q29vcmQrMV0gIT09IFwiWFwiKSBuZWlnaGJvckFycmF5LnB1c2goe2RpcmVjdGlvbjogXCJlYXN0XCIsIHk6ICh5Q29vcmQpLCB4OiAoeENvb3JkKzEpfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoeENvb3JkLTEgPj0gMCkgJiYgZW5lbXlCb2FyZC5nZXRCb2FyZCgpW3lDb29yZF1beENvb3JkLTFdICE9PSBcIk1cIiAmJiBlbmVteUJvYXJkLmdldEJvYXJkKClbeUNvb3JkXVt4Q29vcmQtMV0gIT09IFwiWFwiKSBuZWlnaGJvckFycmF5LnB1c2goe2RpcmVjdGlvbjogXCJ3ZXN0XCIsIHk6ICh5Q29vcmQpLCB4OiAoeENvb3JkLTEpfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoeUNvb3JkKzEgPD0gOSkgJiYgZW5lbXlCb2FyZC5nZXRCb2FyZCgpW3lDb29yZCsxXVt4Q29vcmRdICE9PSBcIk1cIiAmJiBlbmVteUJvYXJkLmdldEJvYXJkKClbeUNvb3JkKzFdW3hDb29yZF0gIT09IFwiWFwiKSBuZWlnaGJvckFycmF5LnB1c2goe2RpcmVjdGlvbjogXCJzb3V0aFwiLCB5OiAoeUNvb3JkKzEpLCB4OiB4Q29vcmR9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG59XG5cbmNvbnN0IHBhaW50VGlsZXMgPSAoYm9hcmQsIG9yZGVyKSA9PiB7XG4gICAgbGV0IGJvYXJkTGF5b3V0ID0gYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQcmVwQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7b3JkZXJ9XyR7an0ke2l9YCk7XG4gICAgICAgICAgICAoYm9hcmRMYXlvdXRbaV1bal0gIT09IFwiXCIpID8gdGFyZ2V0UHJlcEJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCIgOiB0YXJnZXRQcmVwQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JleVwiO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNvbnN0IGNsZWFuVGhlQm9hcmQgPSAoYm9hcmQsIGxlbmd0aE9mU2hpcCwgc3RhdHVzT2ZDcnVpc2VyKSA9PiB7XG4gICAgaWYgKGxlbmd0aE9mU2hpcCAhPT0gMykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0uc2hpcExlbmd0aCA9PT0gbGVuZ3RoT2ZTaGlwKSBib2FyZFtpXVtqXSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0dXNPZkNydWlzZXIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdLmNydWlzZXJTdGF0dXMgPT09IHRydWUpIGJvYXJkW2ldW2pdID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdLmNydWlzZXJTdGF0dXMgPT09IGZhbHNlKSBib2FyZFtpXVtqXSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcbn1cblxucHZwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIG5ld0dhbWVEaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgZ2FtZUluZm9ybWF0aW9uRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIHB2ZUZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbn0pO1xuXG5wdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbmV3R2FtZURpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBnYW1lSW5mb3JtYXRpb25EaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgcHZwRm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxufSk7XG5cbnB2cFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAocHZwMUlucHV0LmNoZWNrVmFsaWRpdHkoKSAmJiBwdnAySW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmFtZTEgPSBwdnAxSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IG5hbWUyID0gcHZwMklucHV0LnZhbHVlO1xuICAgICAgICBsZXQgcDFOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMW5hbWVcIik7XG4gICAgICAgIHAxTmFtZS5pbm5lclRleHQgPSBgJHtuYW1lMX0ncyBCb2FyZDpgO1xuICAgICAgICBsZXQgcDJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMm5hbWVcIilcbiAgICAgICAgcDJOYW1lLmlubmVyVGV4dCA9IGAke25hbWUyfSdzIEJvYXJkOmA7XG4gICAgICAgIGxldCBuZXdQMXNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wc2NvcmVib2FyZDFcIik7XG4gICAgICAgIGxldCBuZXdQMnNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wc2NvcmVib2FyZDJcIik7XG4gICAgICAgIG5ld1Axc2NvcmUuaW5uZXJUZXh0ID0gYCR7bmFtZTF9IGhhcyA1IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgbmV3UDJzY29yZS5pbm5lclRleHQgPSBgJHtuYW1lMn0gaGFzIDUgc2hpcHMgbGVmdC5gO1xuICAgICAgICBsZXQgcHZwQm9hcmQxID0gZ2FtZUJvYXJkRmFjdG9yeSgpO1xuICAgICAgICBsZXQgcHZwQm9hcmQyID0gZ2FtZUJvYXJkRmFjdG9yeSgpO1xuICAgICAgICBnYW1lSW5mb3JtYXRpb25EaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGxldCBwcmVnYW1lUHJlcDEgPSBwcmVwRGl2RmFjdG9yeShwdnAxSW5wdXQudmFsdWUsMSk7XG4gICAgICAgIGxldCBwcmVnYW1lUHJlcDIgPSBwcmVwRGl2RmFjdG9yeShwdnAySW5wdXQudmFsdWUsMik7XG5cbiAgICAgICAgLy8gY3JlYXRlIHBsYXllcnMgaGVyZVxuXG4gICAgICAgIHB2cEZvcm0ucmVzZXQoKTtcbiAgICAgICAgcHJlcFBhcmVudC5hcHBlbmRDaGlsZChwcmVnYW1lUHJlcDEpO1xuICAgICAgICBwcmVwUGFyZW50LmFwcGVuZENoaWxkKHByZWdhbWVQcmVwMik7XG4gICAgICAgIGxldCBwcmVwRGl2UDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1QcmVwRGl2PVwiMVwiXWApO1xuICAgICAgICBsZXQgcHJlcERpdlAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtUHJlcERpdj1cIjJcIl1gKTtcbiAgICAgICAgcHJlcERpdlAyLnN0eWxlID0gXCJkaXNwbGF5OiBub25lO1wiO1xuICAgICAgICBjb25zdCBwcmVwTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucF9tZXNzXCIpWzBdO1xuICAgICAgICBjb25zdCBwcmVwTWVzc2FnZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBfbWVzc1wiKVsxXTtcbiAgICAgICAgY29uc3Qgb3JpSDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yaUgzXzFcIik7XG4gICAgICAgIGNvbnN0IHJvdGF0ZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZV8xXCIpO1xuICAgICAgICBsZXQgY3J1aXNlclN0YXQ7XG4gICAgICAgIGNvbnN0IGNhcnJpZXIxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJyaWVyXzFcIik7XG4gICAgICAgIGNvbnN0IGJhdHRsZXNoaXAxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwXzFcIik7XG4gICAgICAgIGNvbnN0IGNydWlzZXIxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcnVpc2VyXzFcIik7XG4gICAgICAgIGNvbnN0IHN1Ym1hcmluZTFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1hcmluZV8xXCIpO1xuICAgICAgICBjb25zdCBkZXN0cm95ZXIxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXN0cm95ZXJfMVwiKTtcbiAgICAgICAgY29uc3Qgb3JpSDNfMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3JpSDNfMlwiKTtcbiAgICAgICAgY29uc3Qgcm90YXRlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm90YXRlXzJcIik7XG4gICAgICAgIGNvbnN0IGNhcnJpZXIyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJyaWVyXzJcIik7XG4gICAgICAgIGNvbnN0IGJhdHRsZXNoaXAyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwXzJcIik7XG4gICAgICAgIGNvbnN0IGNydWlzZXIyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcnVpc2VyXzJcIik7XG4gICAgICAgIGNvbnN0IHN1Ym1hcmluZTJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1hcmluZV8yXCIpO1xuICAgICAgICBjb25zdCBkZXN0cm95ZXIyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXN0cm95ZXJfMlwiKTtcbiAgICAgICAgbGV0IGNsZWFuQm9hcmQxID0gcHZwQm9hcmQxLmdldEJvYXJkKCk7XG4gICAgICAgIGxldCBjbGVhbkJvYXJkMiA9IHB2cEJvYXJkMi5nZXRCb2FyZCgpO1xuICAgICAgICBjb25zdCBwcmVwMVRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmVwYm9hcmRfYVwiKTtcbiAgICAgICAgbGV0IHByZXBTdWJtaXQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXN1Ym1pdEJ1dHRvbj0nMSddXCIpO1xuICAgICAgICBwcmVwU3VibWl0MS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHByZXAyVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXBib2FyZF9iXCIpO1xuICAgICAgICBsZXQgcHJlcFN1Ym1pdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc3VibWl0QnV0dG9uPScyJ11cIik7XG4gICAgICAgIHByZXBTdWJtaXQyLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICByb3RhdGUxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHZwQm9hcmQxLnJvdGF0ZVNoaXAoKTtcbiAgICAgICAgICAgIChvcmlIMy5pbm5lclRleHQgPT09IFwiT3JpZW50YXRpb246IEhvcml6b250YWxcIikgPyBvcmlIMy5pbm5lclRleHQgPSBcIk9yaWVudGF0aW9uOiBWZXJ0aWNhbFwiIDogb3JpSDMuaW5uZXJUZXh0ID0gXCJPcmllbnRhdGlvbjogSG9yaXpvbnRhbFwiOyBcblxuICAgICAgICB9KTtcblxuICAgICAgICBjYXJyaWVyMURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQ2FycmllciBTZWxlY3RlZC5cIlxuICAgICAgICAgICAgbGV0IG90aGVyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgc2VsZWN0ZWRMZW5ndGggPSA1O1xuICAgICAgICAgICAgY2FycmllcjFEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclNlbGVjdGVkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGlmIChvdGhlclNlbGVjdGVkW2ldICE9PSBlLnRhcmdldCkgb3RoZXJTZWxlY3RlZFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGJhdHRsZXNoaXAxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBCYXR0bGVzaGlwIFNlbGVjdGVkLlwiXG4gICAgICAgICAgICBsZXQgb3RoZXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBzZWxlY3RlZExlbmd0aCA9IDQ7XG4gICAgICAgICAgICBiYXR0bGVzaGlwMURpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyU2VsZWN0ZWQubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWRbaV0gIT09IGUudGFyZ2V0KSBvdGhlclNlbGVjdGVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY3J1aXNlcjFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENydWlzZXIgU2VsZWN0ZWQuXCJcbiAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHNlbGVjdGVkTGVuZ3RoID0gMztcbiAgICAgICAgICAgIGNydWlzZXIxRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNydWlzZXJTdGF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJTZWxlY3RlZFtpXSAhPT0gZS50YXJnZXQpIG90aGVyU2VsZWN0ZWRbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBzdWJtYXJpbmUxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBTdWJtYXJpbmUgU2VsZWN0ZWQuXCJcbiAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHNlbGVjdGVkTGVuZ3RoID0gMztcbiAgICAgICAgICAgIHN1Ym1hcmluZTFEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgY3J1aXNlclN0YXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJTZWxlY3RlZFtpXSAhPT0gZS50YXJnZXQpIG90aGVyU2VsZWN0ZWRbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBkZXN0cm95ZXIxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBEZXN0cm95ZXIgU2VsZWN0ZWQuXCJcbiAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHNlbGVjdGVkTGVuZ3RoID0gMjtcbiAgICAgICAgICAgIGRlc3Ryb3llcjFEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclNlbGVjdGVkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGlmIChvdGhlclNlbGVjdGVkW2ldICE9PSBlLnRhcmdldCkgb3RoZXJTZWxlY3RlZFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHByZXAxVGlsZXMuZm9yRWFjaCh0aWxlcyA9PiB0aWxlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB0aWxlSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgICAgIGxldCBpZEFycmF5ID0gdGlsZUlkLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkTGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAgICAgY2xlYW5UaGVCb2FyZChjbGVhbkJvYXJkMSwgNSk7XG4gICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMS5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsyXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzNdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrNF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgY2FycmllciBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzNdID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzRdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQxLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENhcnJpZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBjYXJyaWVyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXB2cEJvYXJkMS5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDEubGVuZ3RoIC0gTnVtYmVyKGlkQXJyYXlbM10pIDwgNSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGNhcnJpZXIgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSkrMV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSkrMl1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSkrM11bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSkrNF1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2cEJvYXJkMS5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQxLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0MS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQxLCBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBDYXJyaWVyIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgY2FycmllciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRMZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICBjbGVhblRoZUJvYXJkKGNsZWFuQm9hcmQxLCA0KTtcbiAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQxLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrM10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgYmF0dGxlc2hpcCBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzNdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQxLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEJhdHRsZXNoaXAgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBiYXR0bGVzaGlwIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXB2cEJvYXJkMS5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDEubGVuZ3RoIC0gTnVtYmVyKGlkQXJyYXlbM10pIDwgNCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGJhdHRsZXNoaXAgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSkrMV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSkrMl1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSkrM11bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2cEJvYXJkMS5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQxLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0MS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQxLCBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBCYXR0bGVzaGlwIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgYmF0dGxlc2hpcCBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkTGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgY2xlYW5UaGVCb2FyZChjbGVhbkJvYXJkMSwgMywgY3J1aXNlclN0YXQpO1xuICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKGNydWlzZXJTdGF0KSA/IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGNydWlzZXIgb3V0IG9mIGJvdW5kcy5cIiA6IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHN1Ym1hcmluZSBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQxLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSksIGNydWlzZXJTdGF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQxLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0MS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQxLCBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNydWlzZXJTdGF0KSA/IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQ3J1aXNlciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiIDogcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBTdWJtYXJpbmUgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgY3J1aXNlciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCIgOiBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBzdWJtYXJpbmUgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcHZwQm9hcmQxLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMS5sZW5ndGggLSBOdW1iZXIoaWRBcnJheVszXSkgPCAzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKGNydWlzZXJTdGF0KSA/IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGNydWlzZXIgb3V0IG9mIGJvdW5kcy5cIiA6IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHN1Ym1hcmluZSBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSsxXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSsyXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQxLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSksIGNydWlzZXJTdGF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQxLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0MS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQxLCBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNydWlzZXJTdGF0KSA/IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQ3J1aXNlciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiIDogcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBTdWJtYXJpbmUgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNydWlzZXJTdGF0KSA/IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGNydWlzZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiIDogcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgc3VibWFyaW5lIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRMZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBjbGVhblRoZUJvYXJkKGNsZWFuQm9hcmQxLCAyKTtcbiAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQxLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBkZXN0cm95ZXIgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2cEJvYXJkMS5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQxLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0MS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQxLCBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBEZXN0cm95ZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBkZXN0cm95ZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcHZwQm9hcmQxLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMS5sZW5ndGggLSBOdW1iZXIoaWRBcnJheVszXSkgPCAyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgZGVzdHJveWVyIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzFdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdnBCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2cEJvYXJkMSwgXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRGVzdHJveWVyIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgZGVzdHJveWVyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcHJlcFN1Ym1pdDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcmVwRGl2UDEuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmU7XCI7XG4gICAgICAgICAgICBwcmVwRGl2UDIuc3R5bGUgPSBcImRpc3BsYXk6IGZsZXhcIjtcblxuICAgICAgICAgICAgcm90YXRlMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwdnBCb2FyZDIucm90YXRlU2hpcCgpO1xuICAgICAgICAgICAgICAgIChvcmlIM18yLmlubmVyVGV4dCA9PT0gXCJPcmllbnRhdGlvbjogSG9yaXpvbnRhbFwiKSA/IG9yaUgzXzIuaW5uZXJUZXh0ID0gXCJPcmllbnRhdGlvbjogVmVydGljYWxcIiA6IG9yaUgzXzIuaW5uZXJUZXh0ID0gXCJPcmllbnRhdGlvbjogSG9yaXpvbnRhbFwiO1xuXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGNhcnJpZXIyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExlbmd0aCA9IDU7XG4gICAgICAgICAgICAgICAgY2FycmllcjJEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWRbaV0gIT09IGUudGFyZ2V0KSBvdGhlclNlbGVjdGVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBiYXR0bGVzaGlwMkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRMZW5ndGggPSA0O1xuICAgICAgICAgICAgICAgIGJhdHRsZXNoaXAyRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyU2VsZWN0ZWQubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdGhlclNlbGVjdGVkW2ldICE9PSBlLnRhcmdldCkgb3RoZXJTZWxlY3RlZFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3J1aXNlcjJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG90aGVyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkTGVuZ3RoID0gMztcbiAgICAgICAgICAgICAgICBjcnVpc2VyMkRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY3J1aXNlclN0YXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWRbaV0gIT09IGUudGFyZ2V0KSBvdGhlclNlbGVjdGVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdWJtYXJpbmUyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExlbmd0aCA9IDM7XG4gICAgICAgICAgICAgICAgc3VibWFyaW5lMkRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY3J1aXNlclN0YXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyU2VsZWN0ZWQubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdGhlclNlbGVjdGVkW2ldICE9PSBlLnRhcmdldCkgb3RoZXJTZWxlY3RlZFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVzdHJveWVyMkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRMZW5ndGggPSAyO1xuICAgICAgICAgICAgICAgIGRlc3Ryb3llcjJEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWRbaV0gIT09IGUudGFyZ2V0KSBvdGhlclNlbGVjdGVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgcHJlcDJUaWxlcy5mb3JFYWNoKHRpbGVzID0+IHRpbGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaWRBcnJheSA9IHRpbGVJZC5zcGxpdChcIlwiKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkTGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuVGhlQm9hcmQoY2xlYW5Cb2FyZDIsIDUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQyLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsyXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzNdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrNF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBjYXJyaWVyIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsyXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSszXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSs0XSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdnBCb2FyZDIucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDIuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQyLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQyLCBcImJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENhcnJpZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBjYXJyaWVyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFwdnBCb2FyZDIuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMi5sZW5ndGggLSBOdW1iZXIoaWRBcnJheVszXSkgPCA1ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBjYXJyaWVyIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSkrMV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSkrMl1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSkrM11bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSkrNF1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdnBCb2FyZDIucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDIuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQyLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQyLCBcImJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENhcnJpZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBjYXJyaWVyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkTGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuVGhlQm9hcmQoY2xlYW5Cb2FyZDIsIDQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQyLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsyXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzNdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgYmF0dGxlc2hpcCBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrM10gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQyLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQyLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0Mi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2cEJvYXJkMiwgXCJiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBCYXR0bGVzaGlwIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGJhdHRsZXNoaXAgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXB2cEJvYXJkMi5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyLmxlbmd0aCAtIE51bWJlcihpZEFycmF5WzNdKSA8IDQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGJhdHRsZXNoaXAgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKSsxXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKSsyXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKSszXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2cEJvYXJkMi5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMi5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDIsIFwiYlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQmF0dGxlc2hpcCBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBiYXR0bGVzaGlwIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZExlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhblRoZUJvYXJkKGNsZWFuQm9hcmQyLCAzLCBjcnVpc2VyU3RhdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDIuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGNydWlzZXIgb3V0IG9mIGJvdW5kcy5cIiA6IHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBzdWJtYXJpbmUgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSBcIlwiICYmIGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2cEJvYXJkMi5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pLCBjcnVpc2VyU3RhdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDIuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQyLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQyLCBcImJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBDcnVpc2VyIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCIgOiBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBTdWJtYXJpbmUgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgY3J1aXNlciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCIgOiBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgc3VibWFyaW5lIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFwdnBCb2FyZDIuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMi5sZW5ndGggLSBOdW1iZXIoaWRBcnJheVszXSkgPCAzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgY3J1aXNlciBvdXQgb2YgYm91bmRzLlwiIDogcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHN1Ym1hcmluZSBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pKzFdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pKzJdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQyLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSksIGNydWlzZXJTdGF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMi5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdnBCb2FyZDIsIFwiYlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNydWlzZXJTdGF0KSA/IHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENydWlzZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIiA6IHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IFN1Ym1hcmluZSBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgY3J1aXNlciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCIgOiBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgc3VibWFyaW5lIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZExlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICBjbGVhblRoZUJvYXJkKGNsZWFuQm9hcmQyLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB2cEJvYXJkMi5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgZGVzdHJveWVyIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdnBCb2FyZDIucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdnBCb2FyZDIuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQyLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZwQm9hcmQyLCBcImJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IERlc3Ryb3llciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBkZXN0cm95ZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXB2cEJvYXJkMi5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQyLmxlbmd0aCAtIE51bWJlcihpZEFycmF5WzNdKSA8IDIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UyLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGRlc3Ryb3llciBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMltOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDJbTnVtYmVyKGlkQXJyYXlbM10pKzFdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZwQm9hcmQyLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZwQm9hcmQyLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0Mi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2cEJvYXJkMiwgXCJiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZTIuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBEZXN0cm95ZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlMi5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBkZXN0cm95ZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHByZXBTdWJtaXQyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHByZXBEaXZQMi5zdHlsZSA9IFwiZGlzcGxheTogbm9uZTtcIjtcbiAgICAgICAgICAgICAgICBwcmVwUGFyZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgIG92ZXJsYXlEaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgbGVmdEJvYXJkTy5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheUhhbGZcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRlc3RpbmcgXG4gICAgICAgIFxuICAgICAgICBnYW1lVGlsZXNBLmZvckVhY2godGlsZXMgPT4gdGlsZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGlsZUlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICBsZXQgaWRBcnJheSA9IHRpbGVJZC5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgIGxldCBhdHRhY2sgPSBwdnBCb2FyZDEucmVjZWl2ZUF0dGFjayhOdW1iZXIoaWRBcnJheVs1XSksIE51bWJlcihpZEFycmF5WzRdKSk7XG4gICAgICAgICAgICBpZiAoYXR0YWNrID09PSBcIllvdSBjYW5ub3Qgc3RyaWtlIHRoZSBzYW1lIHNwb3QgdHdpY2VcIikge1xuICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogVHJ5IGFnYWluLiAke2F0dGFja30uYDtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2suZ2FtZU92ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IEdhbWUgT3ZlciEgJHtuYW1lMn0gV2lucyEgUmVmcmVzaCB0aGUgYnJvd3NlciB0byBwbGF5IGFnYWluLmA7XG4gICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQxLmlubmVyVGV4dCA9IGAke25hbWUxfSBoYXMgJHs1IC0gTnVtYmVyKHB2cEJvYXJkMS5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgb3ZlcmxheURpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICByaWdodEJvYXJkTy5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmxheUhhbGZcIik7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrLnN0YXR1cyA9PT0gXCJNXCIpIHtcbiAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6ICR7bmFtZTJ9IG1pc3NlZC4gU3dpdGNoaW5nIHR1cm5zLmA7XG4gICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQxLmlubmVyVGV4dCA9IGAke25hbWUxfSBoYXMgJHs1IC0gTnVtYmVyKHB2cEJvYXJkMS5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3lhblwiO1xuICAgICAgICAgICAgICAgIHJpZ2h0Qm9hcmRPLmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVybGF5SGFsZlwiKTtcbiAgICAgICAgICAgICAgICBsZWZ0Qm9hcmRPLmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5SGFsZlwiKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrLnN1bmsgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBTaGlwIHN1bmshICR7bmFtZTJ9IG1heSBmaXJlIGFnYWluLmA7XG4gICAgICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMS5pbm5lclRleHQgPSBgJHtuYW1lMX0gaGFzICR7NSAtIE51bWJlcihwdnBCb2FyZDEuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogSGl0ISAke25hbWUyfSBtYXkgZmlyZSBhZ2Fpbi5gO1xuICAgICAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDEuaW5uZXJUZXh0ID0gYCR7bmFtZTF9IGhhcyAkezUgLSBOdW1iZXIocHZwQm9hcmQxLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KSk7XG5cbiAgICAgICAgZ2FtZVRpbGVzQi5mb3JFYWNoKHRpbGVzID0+IHRpbGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRpbGVJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgbGV0IGlkQXJyYXkgPSB0aWxlSWQuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICBsZXQgYXR0YWNrID0gcHZwQm9hcmQyLnJlY2VpdmVBdHRhY2soTnVtYmVyKGlkQXJyYXlbNV0pLCBOdW1iZXIoaWRBcnJheVs0XSkpO1xuICAgICAgICAgICAgaWYgKGF0dGFjayA9PT0gXCJZb3UgY2Fubm90IHN0cmlrZSB0aGUgc2FtZSBzcG90IHR3aWNlXCIpIHtcbiAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IFRyeSBhZ2Fpbi4gJHthdHRhY2t9LmA7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBHYW1lIE92ZXIhICR7bmFtZTF9IFdpbnMhIFJlZnJlc2ggdGhlIGJyb3dzZXIgdG8gcGxheSBhZ2Fpbi5gO1xuICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMi5pbm5lclRleHQgPSBgJHtuYW1lMn0gaGFzICR7NSAtIE51bWJlcihwdnBCb2FyZDIuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgIG92ZXJsYXlEaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgbGVmdEJvYXJkTy5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmxheUhhbGZcIik7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrLnN0YXR1cyA9PT0gXCJNXCIpIHtcbiAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6ICR7bmFtZTF9IG1pc3NlZC4gU3dpdGNoaW5nIHR1cm5zLmA7XG4gICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQyLmlubmVyVGV4dCA9IGAke25hbWUyfSBoYXMgJHs1IC0gTnVtYmVyKHB2cEJvYXJkMi5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3lhblwiO1xuICAgICAgICAgICAgICAgIGxlZnRCb2FyZE8uY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJsYXlIYWxmXCIpO1xuICAgICAgICAgICAgICAgIHJpZ2h0Qm9hcmRPLmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5SGFsZlwiKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrLnN1bmsgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBTaGlwIHN1bmshICR7bmFtZTF9IG1heSBmaXJlIGFnYWluLmA7XG4gICAgICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMi5pbm5lclRleHQgPSBgJHtuYW1lMn0gaGFzICR7NSAtIE51bWJlcihwdnBCb2FyZDIuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogSGl0ISAke25hbWUxfSBtYXkgZmlyZSBhZ2Fpbi5gO1xuICAgICAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDIuaW5uZXJUZXh0ID0gYCR7bmFtZTJ9IGhhcyAkezUgLSBOdW1iZXIocHZwQm9hcmQyLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KSk7XG5cbiAgICB9IFxuXG59KTtcblxucHZlU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChwdmUxSW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHB2ZUJvYXJkMSA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgICAgICAgbGV0IG5hbWUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwdmUxSW5wdXRcIikudmFsdWU7XG4gICAgICAgIGxldCBwMWVTQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHNjb3JlYm9hcmQxXCIpO1xuICAgICAgICBwMWVTQi5pbm5lclRleHQgPSBgJHtuYW1lMX0gaGFzIDUgc2hpcHMgbGVmdC5gO1xuICAgICAgICBsZXQgcDFOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMW5hbWVcIik7XG4gICAgICAgIHAxTmFtZS5pbm5lclRleHQgPSBgJHtuYW1lMX0ncyBCb2FyZDpgO1xuICAgICAgICBsZXQgYWlOYW1lID0gXCJBSVwiO1xuICAgICAgICBsZXQgcDJlU0IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBzY29yZWJvYXJkMlwiKTtcbiAgICAgICAgcDJlU0IuaW5uZXJUZXh0ID0gYCR7YWlOYW1lfSBoYXMgNSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgIGxldCBwMk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAybmFtZVwiKTtcbiAgICAgICAgcDJOYW1lLmlubmVyVGV4dCA9IGAke2FpTmFtZX0ncyBCb2FyZDpgO1xuICAgICAgICBsZXQgYWlCb2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgICAgICAgZ2FtZUluZm9ybWF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICBsZXQgcHJlZ2FtZVByZXAxID0gcHJlcERpdkZhY3RvcnkocHZlMUlucHV0LnZhbHVlLCAxKTtcbiAgICAgICAgcHJlcFBhcmVudC5hcHBlbmRDaGlsZChwcmVnYW1lUHJlcDEpO1xuICAgICAgICBzZXRBSUJvYXJkKGFpQm9hcmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhhaUJvYXJkLmdldEJvYXJkKCkpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIHBsYXllcnMgaGVyZVxuXG4gICAgICAgIHB2ZUZvcm0ucmVzZXQoKTtcbiAgICAgICAgbGV0IHByZXBEaXZQMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLVByZXBEaXY9XCIxXCJdYCk7XG4gICAgICAgIGNvbnN0IHByZXBNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wX21lc3NcIik7XG4gICAgICAgIGNvbnN0IG9yaUgzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcmlIM18xXCIpO1xuICAgICAgICBjb25zdCByb3RhdGUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGVfMVwiKTtcbiAgICAgICAgbGV0IGNydWlzZXJTdGF0O1xuICAgICAgICBjb25zdCBjYXJyaWVyMURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fycmllcl8xXCIpO1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwMURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmF0dGxlc2hpcF8xXCIpO1xuICAgICAgICBjb25zdCBjcnVpc2VyMURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3J1aXNlcl8xXCIpO1xuICAgICAgICBjb25zdCBzdWJtYXJpbmUxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtYXJpbmVfMVwiKTtcbiAgICAgICAgY29uc3QgZGVzdHJveWVyMURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzdHJveWVyXzFcIik7XG4gICAgICAgIGxldCBjbGVhbkJvYXJkMSA9IHB2ZUJvYXJkMS5nZXRCb2FyZCgpO1xuICAgICAgICBjb25zdCBwcmVwMVRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmVwYm9hcmRfYVwiKTtcbiAgICAgICAgbGV0IHByZXBTdWJtaXQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXN1Ym1pdEJ1dHRvbj0nMSddXCIpO1xuICAgICAgICBwcmVwU3VibWl0MS5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgcm90YXRlMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHB2ZUJvYXJkMS5yb3RhdGVTaGlwKCk7XG4gICAgICAgICAgICAob3JpSDMuaW5uZXJUZXh0ID09PSBcIk9yaWVudGF0aW9uOiBIb3Jpem9udGFsXCIpID8gb3JpSDMuaW5uZXJUZXh0ID0gXCJPcmllbnRhdGlvbjogVmVydGljYWxcIiA6IG9yaUgzLmlubmVyVGV4dCA9IFwiT3JpZW50YXRpb246IEhvcml6b250YWxcIjsgXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2FycmllcjFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENhcnJpZXIgU2VsZWN0ZWQuXCJcbiAgICAgICAgICAgIGxldCBvdGhlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHNlbGVjdGVkTGVuZ3RoID0gNTtcbiAgICAgICAgICAgIGNhcnJpZXIxRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJTZWxlY3RlZFtpXSAhPT0gZS50YXJnZXQpIG90aGVyU2VsZWN0ZWRbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBiYXR0bGVzaGlwMURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQmF0dGxlc2hpcCBTZWxlY3RlZC5cIlxuICAgICAgICAgICAgbGV0IG90aGVyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgc2VsZWN0ZWRMZW5ndGggPSA0O1xuICAgICAgICAgICAgYmF0dGxlc2hpcDFEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclNlbGVjdGVkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGlmIChvdGhlclNlbGVjdGVkW2ldICE9PSBlLnRhcmdldCkgb3RoZXJTZWxlY3RlZFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNydWlzZXIxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBDcnVpc2VyIFNlbGVjdGVkLlwiXG4gICAgICAgICAgICBsZXQgb3RoZXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBzZWxlY3RlZExlbmd0aCA9IDM7XG4gICAgICAgICAgICBjcnVpc2VyMURpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBjcnVpc2VyU3RhdCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyU2VsZWN0ZWQubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWRbaV0gIT09IGUudGFyZ2V0KSBvdGhlclNlbGVjdGVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgc3VibWFyaW5lMURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogU3VibWFyaW5lIFNlbGVjdGVkLlwiXG4gICAgICAgICAgICBsZXQgb3RoZXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBzZWxlY3RlZExlbmd0aCA9IDM7XG4gICAgICAgICAgICBzdWJtYXJpbmUxRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNydWlzZXJTdGF0ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyU2VsZWN0ZWQubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyU2VsZWN0ZWRbaV0gIT09IGUudGFyZ2V0KSBvdGhlclNlbGVjdGVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgZGVzdHJveWVyMURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRGVzdHJveWVyIFNlbGVjdGVkLlwiXG4gICAgICAgICAgICBsZXQgb3RoZXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBzZWxlY3RlZExlbmd0aCA9IDI7XG4gICAgICAgICAgICBkZXN0cm95ZXIxRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJTZWxlY3RlZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJTZWxlY3RlZFtpXSAhPT0gZS50YXJnZXQpIG90aGVyU2VsZWN0ZWRbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJlcDFUaWxlcy5mb3JFYWNoKHRpbGVzID0+IHRpbGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHRpbGVJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgbGV0IGlkQXJyYXkgPSB0aWxlSWQuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRMZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgICAgICBjbGVhblRoZUJvYXJkKGNsZWFuQm9hcmQxLCA1KTtcbiAgICAgICAgICAgICAgICBpZiAocHZlQm9hcmQxLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsxXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzJdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrM10gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSs0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBjYXJyaWVyIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrM10gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrNF0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdmVCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2ZUJvYXJkMS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2ZUJvYXJkMSwgXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQ2FycmllciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGNhcnJpZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcHZlQm9hcmQxLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMS5sZW5ndGggLSBOdW1iZXIoaWRBcnJheVszXSkgPCA1ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgY2FycmllciBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSsxXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSsyXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSszXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSs0XVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZlQm9hcmQxLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdmVCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdmVCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IENhcnJpZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBjYXJyaWVyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZExlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGNsZWFuVGhlQm9hcmQoY2xlYW5Cb2FyZDEsIDQpO1xuICAgICAgICAgICAgICAgIGlmIChwdmVCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSszXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBiYXR0bGVzaGlwIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrM10gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdmVCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB2ZUJvYXJkMS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkgcHJlcFN1Ym1pdDEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludFRpbGVzKHB2ZUJvYXJkMSwgXCJhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogQmF0dGxlc2hpcCBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGJhdHRsZXNoaXAgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcHZlQm9hcmQxLmdldFNoaXBPcmllbnRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMS5sZW5ndGggLSBOdW1iZXIoaWRBcnJheVszXSkgPCA0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgYmF0dGxlc2hpcCBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSsxXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSsyXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKSszXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZlQm9hcmQxLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdmVCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdmVCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEJhdHRsZXNoaXAgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBiYXR0bGVzaGlwIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRMZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICBjbGVhblRoZUJvYXJkKGNsZWFuQm9hcmQxLCAzLCBjcnVpc2VyU3RhdCk7XG4gICAgICAgICAgICAgICAgaWYgKHB2ZUJvYXJkMS5nZXRTaGlwT3JpZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSB1bmRlZmluZWQgfHwgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IHVuZGVmaW5lZCB8fCBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKSsyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgY3J1aXNlciBvdXQgb2YgYm91bmRzLlwiIDogcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgc3VibWFyaW5lIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSkrMl0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdmVCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSwgY3J1aXNlclN0YXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdmVCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdmVCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBDcnVpc2VyIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCIgOiBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IFN1Ym1hcmluZSBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVpc2VyU3RhdCkgPyBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBjcnVpc2VyIGhlcmUgd2lsbCBjYXVzZSBhIGNvbGxpc2lvbi5cIiA6IHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIHN1Ym1hcmluZSBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFwdmVCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxLmxlbmd0aCAtIE51bWJlcihpZEFycmF5WzNdKSA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgY3J1aXNlciBvdXQgb2YgYm91bmRzLlwiIDogcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgc3VibWFyaW5lIG91dCBvZiBib3VuZHMuXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSldW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzFdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIgJiYgY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pKzJdW051bWJlcihpZEFycmF5WzJdKV0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdmVCb2FyZDEucGxhY2VTaGlwKHNlbGVjdGVkTGVuZ3RoLCBOdW1iZXIoaWRBcnJheVszXSksIE51bWJlcihpZEFycmF5WzJdKSwgY3J1aXNlclN0YXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdmVCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdmVCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBDcnVpc2VyIHBsYWNlZCwgc2VsZWN0IGFuZCBwbGFjZSBhbm90aGVyIHNoaXAuXCIgOiBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IFN1Ym1hcmluZSBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3J1aXNlclN0YXQpID8gcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBFcnJvciwgcGxhY2luZyB0aGUgY3J1aXNlciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCIgOiBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBzdWJtYXJpbmUgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZExlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIGNsZWFuVGhlQm9hcmQoY2xlYW5Cb2FyZDEsIDIpO1xuICAgICAgICAgICAgICAgIGlmIChwdmVCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gdW5kZWZpbmVkIHx8IGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIGRlc3Ryb3llciBvdXQgb2YgYm91bmRzLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5Cb2FyZDFbTnVtYmVyKGlkQXJyYXlbM10pXVtOdW1iZXIoaWRBcnJheVsyXSldID09PSBcIlwiICYmIGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pKzFdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZlQm9hcmQxLnBsYWNlU2hpcChzZWxlY3RlZExlbmd0aCwgTnVtYmVyKGlkQXJyYXlbM10pLCBOdW1iZXIoaWRBcnJheVsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdmVCb2FyZDEuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHByZXBTdWJtaXQxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnRUaWxlcyhwdmVCb2FyZDEsIFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IERlc3Ryb3llciBwbGFjZWQsIHNlbGVjdCBhbmQgcGxhY2UgYW5vdGhlciBzaGlwLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBNZXNzYWdlLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogRXJyb3IsIHBsYWNpbmcgdGhlIGRlc3Ryb3llciBoZXJlIHdpbGwgY2F1c2UgYSBjb2xsaXNpb24uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFwdmVCb2FyZDEuZ2V0U2hpcE9yaWVudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxLmxlbmd0aCAtIE51bWJlcihpZEFycmF5WzNdKSA8IDIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBkZXN0cm95ZXIgb3V0IG9mIGJvdW5kcy5cIjtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuQm9hcmQxW051bWJlcihpZEFycmF5WzNdKV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIiAmJiBjbGVhbkJvYXJkMVtOdW1iZXIoaWRBcnJheVszXSkrMV1bTnVtYmVyKGlkQXJyYXlbMl0pXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB2ZUJvYXJkMS5wbGFjZVNoaXAoc2VsZWN0ZWRMZW5ndGgsIE51bWJlcihpZEFycmF5WzNdKSwgTnVtYmVyKGlkQXJyYXlbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHZlQm9hcmQxLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSBwcmVwU3VibWl0MS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50VGlsZXMocHZlQm9hcmQxLCBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJNZXNzYWdlOiBEZXN0cm95ZXIgcGxhY2VkLCBzZWxlY3QgYW5kIHBsYWNlIGFub3RoZXIgc2hpcC5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IEVycm9yLCBwbGFjaW5nIHRoZSBkZXN0cm95ZXIgaGVyZSB3aWxsIGNhdXNlIGEgY29sbGlzaW9uLlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pKTtcblxuICAgICAgICBwcmVwU3VibWl0MS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHByZXBEaXZQMS5zdHlsZSA9IFwiZGlzcGxheTogbm9uZTtcIjtcbiAgICAgICAgICAgIHByZXBQYXJlbnQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICBvdmVybGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgICAgICAgICBnYW1lVGlsZXNCLmZvckVhY2godGlsZXMgPT4gdGlsZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpZEFycmF5ID0gdGlsZUlkLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgIGxldCBhdHRhY2sgPSBhaUJvYXJkLnJlY2VpdmVBdHRhY2soTnVtYmVyKGlkQXJyYXlbNV0pLCBOdW1iZXIoaWRBcnJheVs0XSkpO1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2sgPT09IFwiWW91IGNhbm5vdCBzdHJpa2UgdGhlIHNhbWUgc3BvdCB0d2ljZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogVHJ5IGFnYWluLiAke2F0dGFja30uYDtcbiAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGFjay5nYW1lT3ZlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IEdhbWUgT3ZlciEgJHtuYW1lMX0gV2lucyFgO1xuICAgICAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDIuaW5uZXJUZXh0ID0gYCR7YWlOYW1lfSBoYXMgJHs1IC0gTnVtYmVyKGFpQm9hcmQuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheURpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGFjay5zdGF0dXMgPT09IFwiTVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBgTWVzc2FnZTogJHtuYW1lMX0gbWlzc2VkLiBTd2l0Y2hpbmcgdHVybnMuYDtcbiAgICAgICAgICAgICAgICAgICAgcFNjb3JlQm9hcmQyLmlubmVyVGV4dCA9IGAke2FpTmFtZX0gaGFzICR7NSAtIE51bWJlcihhaUJvYXJkLmdldFN1bmtlbkNvdW50KCkpfSBzaGlwcyBsZWZ0LmA7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3lhblwiO1xuICAgICAgICAgICAgICAgICAgICBhaUF0dGFjayhwdmVCb2FyZDEsIG5hbWUxLCBuZWlnaGJvcnMpO1xuICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2suc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3NNZXNzYWdlLmlubmVyVGV4dCA9IGBNZXNzYWdlOiBTaGlwIHN1bmshICR7bmFtZTF9IG1heSBmaXJlIGFnYWluLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwU2NvcmVCb2FyZDIuaW5uZXJUZXh0ID0gYCR7YWlOYW1lfSBoYXMgJHs1IC0gTnVtYmVyKGFpQm9hcmQuZ2V0U3Vua2VuQ291bnQoKSl9IHNoaXBzIGxlZnQuYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnc01lc3NhZ2UuaW5uZXJUZXh0ID0gYE1lc3NhZ2U6IEhpdCEgJHtuYW1lMX0gbWF5IGZpcmUgYWdhaW4uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBTY29yZUJvYXJkMi5pbm5lclRleHQgPSBgJHthaU5hbWV9IGhhcyAkezUgLSBOdW1iZXIoYWlCb2FyZC5nZXRTdW5rZW5Db3VudCgpKX0gc2hpcHMgbGVmdC5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiIsImNvbnN0IGxvYWRVSSA9IChib2R5KSA9PiB7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXJUaXRsZS5pbm5lclRleHQgPSBcIkJBVFRMRVNISVBcIlxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgY29uc3QgbmV3R2FtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3R2FtZURpdi5jbGFzc0xpc3QuYWRkKFwibmdEaXZcIik7XG4gICAgY29uc3QgbmdoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBuZ2gxLmNsYXNzTGlzdC5hZGQoXCJuZ2gxXCIpO1xuICAgIG5naDEuaW5uZXJUZXh0ID0gXCJQbGF5IGFnYWluc3QuLi5cIjtcbiAgICBjb25zdCBwdnBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHB2cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHZwQnV0dG9uXCIpO1xuICAgIHB2cEJ1dHRvbi5pbm5lclRleHQgPSBcImEgaHVtYW5cIjtcbiAgICBjb25zdCB2c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB2c1RleHQuY2xhc3NMaXN0LmFkZChcInZzVGV4dFwiKTtcbiAgICB2c1RleHQuaW5uZXJUZXh0ID0gXCJPUlwiO1xuICAgIGNvbnN0IHB2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwdmVCdXR0b25cIik7XG4gICAgcHZlQnV0dG9uLmlubmVyVGV4dCA9IFwiYW4gQUlcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld0dhbWVEaXYpO1xuICAgIG5ld0dhbWVEaXYuYXBwZW5kQ2hpbGQobmdoMSk7XG4gICAgbmV3R2FtZURpdi5hcHBlbmRDaGlsZChwdnBCdXR0b24pO1xuICAgIG5ld0dhbWVEaXYuYXBwZW5kQ2hpbGQodnNUZXh0KTtcbiAgICBuZXdHYW1lRGl2LmFwcGVuZENoaWxkKHB2ZUJ1dHRvbik7XG4gICAgY29uc3QgZ2FtZUluZm9ybWF0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lSW5mb3JtYXRpb25EaXYuY2xhc3NMaXN0LmFkZChcImdpRGl2XCIpO1xuICAgIGdhbWVJbmZvcm1hdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdhbWVJbmZvcm1hdGlvbkRpdik7XG4gICAgY29uc3QgcHZwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHB2cEZvcm0uY2xhc3NMaXN0LmFkZChcInB2cEZvcm1cIik7XG4gICAgY29uc3QgcHZwU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwdnBTdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInB2cFN1Ym1pdFwiKTtcbiAgICBwdnBTdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcbiAgICBjb25zdCBwdnAxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwdnAxRGl2LmNsYXNzTGlzdC5hZGQoXCJwdnAxRGl2XCIpO1xuICAgIGNvbnN0IHB2cDFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwdnAxTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHZwMUlucHV0XCIpO1xuICAgIHB2cDFMYWJlbC5pbm5lclRleHQgPSBcIlBsYXllciAxIC0gRW50ZXIgbmFtZTogXCJcbiAgICBjb25zdCBwdnAxSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHZwMUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwdnAxSW5wdXRcIik7XG4gICAgcHZwMUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHZwMUlucHV0XCIpO1xuICAgIHB2cDFJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgY29uc3QgcHZwMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHZwMkRpdi5jbGFzc0xpc3QuYWRkKFwicHZwMkRpdlwiKTtcbiAgICBjb25zdCBwdnAyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHZwMkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInB2cDJJbnB1dFwiKTtcbiAgICBwdnAyTGFiZWwuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgMiAtIEVudGVyIG5hbWU6IFwiO1xuICAgIGNvbnN0IHB2cDJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwdnAySW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHB2cDJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHZwMklucHV0XCIpO1xuICAgIHB2cDJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInB2cDJJbnB1dFwiKTtcbiAgICBnYW1lSW5mb3JtYXRpb25EaXYuYXBwZW5kQ2hpbGQocHZwRm9ybSk7XG4gICAgcHZwRm9ybS5hcHBlbmRDaGlsZChwdnAxRGl2KTtcbiAgICBwdnAxRGl2LmFwcGVuZENoaWxkKHB2cDFMYWJlbCk7XG4gICAgcHZwMURpdi5hcHBlbmRDaGlsZChwdnAxSW5wdXQpO1xuICAgIHB2cEZvcm0uYXBwZW5kQ2hpbGQocHZwMkRpdik7XG4gICAgcHZwMkRpdi5hcHBlbmRDaGlsZChwdnAyTGFiZWwpO1xuICAgIHB2cDJEaXYuYXBwZW5kQ2hpbGQocHZwMklucHV0KTtcbiAgICBwdnBGb3JtLmFwcGVuZENoaWxkKHB2cFN1Ym1pdEJ1dHRvbik7XG4gICAgY29uc3QgcHZlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHB2ZUZvcm0uY2xhc3NMaXN0LmFkZChcInB2ZUZvcm1cIik7XG4gICAgY29uc3QgcHZlU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwdmVTdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInB2ZVN1Ym1pdFwiKTtcbiAgICBwdmVTdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcbiAgICBjb25zdCBwdmUxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwdmUxRGl2LmNsYXNzTGlzdC5hZGQoXCJwdmUxRGl2XCIpO1xuICAgIGNvbnN0IHB2ZTFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwdmUxTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHZlMUlucHV0XCIpO1xuICAgIHB2ZTFMYWJlbC5pbm5lclRleHQgPSBcIlBsYXllciAxIC0gRW50ZXIgbmFtZTogXCJcbiAgICBjb25zdCBwdmUxSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHZlMUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwdmUxSW5wdXRcIik7XG4gICAgcHZlMUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHZlMUlucHV0XCIpO1xuICAgIHB2ZTFJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgZ2FtZUluZm9ybWF0aW9uRGl2LmFwcGVuZENoaWxkKHB2ZUZvcm0pO1xuICAgIHB2ZUZvcm0uYXBwZW5kQ2hpbGQocHZlMURpdik7XG4gICAgcHZlMURpdi5hcHBlbmRDaGlsZChwdmUxTGFiZWwpO1xuICAgIHB2ZTFEaXYuYXBwZW5kQ2hpbGQocHZlMUlucHV0KTtcbiAgICBwdmVGb3JtLmFwcGVuZENoaWxkKHB2ZVN1Ym1pdEJ1dHRvbik7XG4gICAgY29uc3QgcHJlcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJlcFBhcmVudC5jbGFzc0xpc3QuYWRkKFwicHJlcFBhcmVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByZXBQYXJlbnQpO1xuICAgIGNvbnN0IGdhbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZ3NcIik7XG4gICAgY29uc3QgZ3NTY29yZWJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnc1Njb3JlYm9hcmREaXYuY2xhc3NMaXN0LmFkZChcInNjRGl2XCIpO1xuICAgIGNvbnN0IGdzTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGdzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiZ3NNZXNzYWdlXCIpO1xuICAgIGdzTWVzc2FnZS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IFwiO1xuICAgIGNvbnN0IHNjb3JlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY29yZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2NvcmVzXCIpO1xuICAgIGNvbnN0IHAxU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMVNjb3JlLmNsYXNzTGlzdC5hZGQoXCJwc2NvcmVib2FyZDFcIik7XG4gICAgcDFTY29yZS5pbm5lclRleHQgPSBcIlBsYXllciAxIGhhcyA1IHNoaXBzIGxlZnQuXCI7XG4gICAgY29uc3QgcDJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAyU2NvcmUuY2xhc3NMaXN0LmFkZChcInBzY29yZWJvYXJkMlwiKTtcbiAgICBwMlNjb3JlLmlubmVyVGV4dCA9IFwiUGxheWVyIDIgaGFzIDUgc2hpcHMgbGVmdC5cIjtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGdzTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3NMZWZ0LmNsYXNzTGlzdC5hZGQoXCJnc0xlZnRcIik7XG4gICAgY29uc3QgZ3NMZWZ0T3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3NMZWZ0T3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiZ3NsT1wiKTtcbiAgICBjb25zdCBnc1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnc1JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJnc1JpZ2h0XCIpO1xuICAgIGNvbnN0IGdzUmlnaHRPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnc1JpZ2h0T3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiZ3NyT1wiKTtcbiAgICBnYW1lU2VjdGlvbi5hcHBlbmRDaGlsZChnc1Njb3JlYm9hcmREaXYpO1xuICAgIGdzU2NvcmVib2FyZERpdi5hcHBlbmRDaGlsZChnc01lc3NhZ2UpO1xuICAgIGdzU2NvcmVib2FyZERpdi5hcHBlbmRDaGlsZChzY29yZUNvbnRhaW5lcik7XG4gICAgc2NvcmVDb250YWluZXIuYXBwZW5kQ2hpbGQocDFTY29yZSk7XG4gICAgc2NvcmVDb250YWluZXIuYXBwZW5kQ2hpbGQocDJTY29yZSk7XG4gICAgZ2FtZVNlY3Rpb24uYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdzTGVmdCk7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3NSaWdodCk7XG4gICAgY29uc3QgZ3NMZWZ0SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgZ3NMZWZ0SDIuY2xhc3NMaXN0LmFkZChcImdzaDJcIik7XG4gICAgZ3NMZWZ0SDIuY2xhc3NMaXN0LmFkZChcInAxbmFtZVwiKTtcbiAgICBnc0xlZnRIMi5pbm5lclRleHQgPSBcIlBsYXllciAxOiBcIjtcbiAgICBjb25zdCBnc1JpZ2h0SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgZ3NSaWdodEgyLmNsYXNzTGlzdC5hZGQoXCJnc2gyXCIpXG4gICAgZ3NSaWdodEgyLmNsYXNzTGlzdC5hZGQoXCJwMm5hbWVcIik7XG4gICAgZ3NSaWdodEgyLmlubmVyVGV4dCA9IFwiUGxheWVyIDI6IFwiO1xuICAgIGNvbnN0IHAxQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHAxQm9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwMUJvYXJkXCIpO1xuICAgIGNvbnN0IHAyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHAyQm9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwMkJvYXJkXCIpO1xuICAgIGdzTGVmdC5hcHBlbmRDaGlsZChnc0xlZnRPdmVybGF5KTtcbiAgICBnc0xlZnQuYXBwZW5kQ2hpbGQoZ3NMZWZ0SDIpO1xuICAgIGdzTGVmdC5hcHBlbmRDaGlsZChwMUJvYXJkKTtcbiAgICBnc1JpZ2h0LmFwcGVuZENoaWxkKGdzUmlnaHRPdmVybGF5KTtcbiAgICBnc1JpZ2h0LmFwcGVuZENoaWxkKGdzUmlnaHRIMik7XG4gICAgZ3NSaWdodC5hcHBlbmRDaGlsZChwMkJvYXJkKTtcbiAgICBjb25zdCByb3dDcmVhdG9yID0gKGdyaWQsIG9yZGVyLCByb3dOdW1iZXIpID0+IHtcbiAgICAgICAgKG9yZGVyID09PSAxKSA/IG9yZGVyID0gXCJhXCIgOiBvcmRlciA9IFwiYlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImJveFwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGBib2FyZF8ke29yZGVyfWApO1xuICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBtXyR7b3JkZXJ9XyR7aX0ke3Jvd051bWJlcn1gKTtcbiAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJvd0NyZWF0b3IocDFCb2FyZCwgMSwgMCk7XG4gICAgcm93Q3JlYXRvcihwMUJvYXJkLCAxLCAxKTtcbiAgICByb3dDcmVhdG9yKHAxQm9hcmQsIDEsIDIpO1xuICAgIHJvd0NyZWF0b3IocDFCb2FyZCwgMSwgMyk7XG4gICAgcm93Q3JlYXRvcihwMUJvYXJkLCAxLCA0KTtcbiAgICByb3dDcmVhdG9yKHAxQm9hcmQsIDEsIDUpO1xuICAgIHJvd0NyZWF0b3IocDFCb2FyZCwgMSwgNik7XG4gICAgcm93Q3JlYXRvcihwMUJvYXJkLCAxLCA3KTtcbiAgICByb3dDcmVhdG9yKHAxQm9hcmQsIDEsIDgpO1xuICAgIHJvd0NyZWF0b3IocDFCb2FyZCwgMSwgOSk7XG4gICAgcm93Q3JlYXRvcihwMkJvYXJkLCAyLCAwKTtcbiAgICByb3dDcmVhdG9yKHAyQm9hcmQsIDIsIDEpO1xuICAgIHJvd0NyZWF0b3IocDJCb2FyZCwgMiwgMik7XG4gICAgcm93Q3JlYXRvcihwMkJvYXJkLCAyLCAzKTtcbiAgICByb3dDcmVhdG9yKHAyQm9hcmQsIDIsIDQpO1xuICAgIHJvd0NyZWF0b3IocDJCb2FyZCwgMiwgNSk7XG4gICAgcm93Q3JlYXRvcihwMkJvYXJkLCAyLCA2KTtcbiAgICByb3dDcmVhdG9yKHAyQm9hcmQsIDIsIDcpO1xuICAgIHJvd0NyZWF0b3IocDJCb2FyZCwgMiwgOCk7XG4gICAgcm93Q3JlYXRvcihwMkJvYXJkLCAyLCA5KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdhbWVTZWN0aW9uKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZFVJOyIsImNvbnN0IHByZXBEaXZGYWN0b3J5ID0gKG5hbWUsIG9yZGVyKSA9PiB7XG4gICAgY29uc3QgcHJlcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJlcERpdi5jbGFzc0xpc3QuYWRkKFwicHJlcERpdlwiKTtcbiAgICBwcmVwRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtcHJlcERpdlwiLCBgJHtvcmRlcn1gKTtcbiAgICBjb25zdCBwcmVwSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcHJlcEgxLmNsYXNzTGlzdC5hZGQoXCJwcmVwSDFcIik7XG4gICAgcHJlcEgxLmlubmVyVGV4dCA9IGAke25hbWV9LCBwbGVhc2UgcGxhY2UgeW91ciBzaGlwcyBvbiB0aGUgZ3JpZC5gO1xuICAgIGNvbnN0IHByZXBNZXNzYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByZXBNZXNzYWdlcy5jbGFzc0xpc3QuYWRkKFwicF9tZXNzXCIpO1xuICAgIHByZXBNZXNzYWdlcy5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IFBsZWFzZSBzZWxlY3QgYSBzaGlwIGFuZCBwbGFjZSBpdCBvbiB0aGUgZ3JpZC5cIjtcbiAgICBjb25zdCBwbGFjZW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYWNlbWVudERpdi5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50RGl2XCIpO1xuICAgIGNvbnN0IHBsYWNlbWVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYWNlbWVudExlZnQuY2xhc3NMaXN0LmFkZChcInBfbGVmdFwiKTtcbiAgICBjb25zdCBwbGFjZW1lbnRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxhY2VtZW50UmlnaHQuY2xhc3NMaXN0LmFkZChcInBfcmlnaHRcIik7XG4gICAgY29uc3QgcHJlcEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByZXBHcmlkLmNsYXNzTGlzdC5hZGQoXCJwcmVwR3JpZFwiKTtcbiAgICBwcmVwR3JpZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yZGVyXCIsIGAke29yZGVyfWApO1xuXG4gICAgY29uc3Qgcm93Q3JlYXRvciA9IChncmlkLCBvcmRlciwgcm93TnVtYmVyKSA9PiB7XG4gICAgICAgIChvcmRlciA9PT0gMSkgPyBvcmRlciA9IFwiYVwiIDogb3JkZXIgPSBcImJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVwQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHByZXBCb3guY2xhc3NMaXN0LmFkZChcInByZXBCb3hcIik7XG4gICAgICAgICAgICBwcmVwQm94LmNsYXNzTGlzdC5hZGQoYHByZXBib2FyZF8ke29yZGVyfWApO1xuICAgICAgICAgICAgcHJlcEJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtvcmRlcn1fJHtpfSR7cm93TnVtYmVyfWApO1xuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChwcmVwQm94KTtcbiAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICByb3dDcmVhdG9yKHByZXBHcmlkLCBvcmRlciwgMCk7XG4gICAgcm93Q3JlYXRvcihwcmVwR3JpZCwgb3JkZXIsIDEpO1xuICAgIHJvd0NyZWF0b3IocHJlcEdyaWQsIG9yZGVyLCAyKTtcbiAgICByb3dDcmVhdG9yKHByZXBHcmlkLCBvcmRlciwgMyk7XG4gICAgcm93Q3JlYXRvcihwcmVwR3JpZCwgb3JkZXIsIDQpO1xuICAgIHJvd0NyZWF0b3IocHJlcEdyaWQsIG9yZGVyLCA1KTtcbiAgICByb3dDcmVhdG9yKHByZXBHcmlkLCBvcmRlciwgNik7XG4gICAgcm93Q3JlYXRvcihwcmVwR3JpZCwgb3JkZXIsIDcpO1xuICAgIHJvd0NyZWF0b3IocHJlcEdyaWQsIG9yZGVyLCA4KTtcbiAgICByb3dDcmVhdG9yKHByZXBHcmlkLCBvcmRlciwgOSk7XG5cbiAgICBcbiAgICBjb25zdCBvcmlIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBvcmlIMy5jbGFzc0xpc3QuYWRkKGBvcmlIM18ke29yZGVyfWApO1xuICAgIG9yaUgzLmlubmVyVGV4dCA9IFwiT3JpZW50YXRpb246IEhvcml6b250YWxcIjtcbiAgICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicnRCdXR0b25cIik7XG4gICAgcm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoYHJvdGF0ZV8ke29yZGVyfWApO1xuICAgIHJvdGF0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIlJvdGF0ZVwiO1xuICAgIGNvbnN0IHNoaXBzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaGlwc0Rpdi5jbGFzc0xpc3QuYWRkKFwic2hpcHNEaXZcIik7XG4gICAgY29uc3Qgc2hpcHNIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBzaGlwc0gyLmNsYXNzTGlzdC5hZGQoXCJzaGlwc0gyXCIpO1xuICAgIHNoaXBzSDIuaW5uZXJUZXh0ID0gXCJTaGlwc1wiO1xuICAgIGNvbnN0IGNhcnJpZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcnJpZXJEaXYuaW5uZXJUZXh0ID0gXCJDYXJyaWVyXCI7XG4gICAgY2FycmllckRpdi5jbGFzc0xpc3QuYWRkKFwic2hpcFNlbGVjdG9yXCIpO1xuICAgIGNhcnJpZXJEaXYuY2xhc3NMaXN0LmFkZChgY2Fycmllcl8ke29yZGVyfWApO1xuICAgIGNvbnN0IGJhdHRsZXNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhdHRsZXNoaXBEaXYuaW5uZXJUZXh0ID0gXCJCYXR0bGVzaGlwXCI7XG4gICAgYmF0dGxlc2hpcERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcFNlbGVjdG9yXCIpO1xuICAgIGJhdHRsZXNoaXBEaXYuY2xhc3NMaXN0LmFkZChgYmF0dGxlc2hpcF8ke29yZGVyfWApO1xuICAgIGNvbnN0IGNydWlzZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNydWlzZXJEaXYuaW5uZXJUZXh0ID0gXCJDcnVpc2VyXCI7XG4gICAgY3J1aXNlckRpdi5jbGFzc0xpc3QuYWRkKFwic2hpcFNlbGVjdG9yXCIpO1xuICAgIGNydWlzZXJEaXYuY2xhc3NMaXN0LmFkZChgY3J1aXNlcl8ke29yZGVyfWApO1xuICAgIGNvbnN0IHN1Ym1hcmluZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VibWFyaW5lRGl2LmlubmVyVGV4dCA9IFwiU3VibWFyaW5lXCI7XG4gICAgc3VibWFyaW5lRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwU2VsZWN0b3JcIik7XG4gICAgc3VibWFyaW5lRGl2LmNsYXNzTGlzdC5hZGQoYHN1Ym1hcmluZV8ke29yZGVyfWApO1xuICAgIGNvbnN0IGRlc3Ryb3llckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzdHJveWVyRGl2LmlubmVyVGV4dCA9IFwiRGVzdHJveWVyXCI7XG4gICAgZGVzdHJveWVyRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwU2VsZWN0b3JcIik7XG4gICAgZGVzdHJveWVyRGl2LmNsYXNzTGlzdC5hZGQoYGRlc3Ryb3llcl8ke29yZGVyfWApO1xuXG4gICAgc2hpcHNEaXYuYXBwZW5kQ2hpbGQoc2hpcHNIMik7XG4gICAgc2hpcHNEaXYuYXBwZW5kQ2hpbGQoY2FycmllckRpdik7XG4gICAgc2hpcHNEaXYuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcERpdik7XG4gICAgc2hpcHNEaXYuYXBwZW5kQ2hpbGQoY3J1aXNlckRpdik7XG4gICAgc2hpcHNEaXYuYXBwZW5kQ2hpbGQoc3VibWFyaW5lRGl2KTtcbiAgICBzaGlwc0Rpdi5hcHBlbmRDaGlsZChkZXN0cm95ZXJEaXYpO1xuXG4gICAgY29uc3QgcHJlcFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJlcFN1Ym1pdC5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuICAgIHByZXBTdWJtaXQuY2xhc3NMaXN0LmFkZChcInByZXBTQlwiKTtcbiAgICBwcmVwU3VibWl0LnNldEF0dHJpYnV0ZShcImRhdGEtc3VibWl0QnV0dG9uXCIsIGAke29yZGVyfWApO1xuICAgIC8vIGFkZCBpY29ucyBmb3IgdGhlIHNoaXBzIGhlcmUuIGV2ZW50IGxpc3RlbmVycyB3aWxsIGxhdGVyIGJlIGF0dGFjaGVkLlxuXG4gICAgcHJlcERpdi5hcHBlbmRDaGlsZChwcmVwSDEpO1xuICAgIHByZXBEaXYuYXBwZW5kQ2hpbGQocHJlcE1lc3NhZ2VzKTtcbiAgICBwcmVwRGl2LmFwcGVuZENoaWxkKHBsYWNlbWVudERpdik7XG4gICAgcGxhY2VtZW50RGl2LmFwcGVuZENoaWxkKHBsYWNlbWVudExlZnQpO1xuICAgIHBsYWNlbWVudExlZnQuYXBwZW5kQ2hpbGQocHJlcEdyaWQpO1xuICAgIHBsYWNlbWVudERpdi5hcHBlbmRDaGlsZChwbGFjZW1lbnRSaWdodCk7XG4gICAgcGxhY2VtZW50UmlnaHQuYXBwZW5kQ2hpbGQob3JpSDMpO1xuICAgIHBsYWNlbWVudFJpZ2h0LmFwcGVuZENoaWxkKHJvdGF0ZUJ1dHRvbik7XG4gICAgcGxhY2VtZW50UmlnaHQuYXBwZW5kQ2hpbGQoc2hpcHNEaXYpO1xuICAgIHBsYWNlbWVudFJpZ2h0LmFwcGVuZENoaWxkKHByZXBTdWJtaXQpO1xuXG4gICAgcmV0dXJuIHByZXBEaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcmVwRGl2RmFjdG9yeTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=