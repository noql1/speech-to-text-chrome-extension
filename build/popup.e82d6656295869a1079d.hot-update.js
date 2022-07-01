"use strict";
self["webpackHotUpdatemy_extention"]("popup",{

/***/ "./src/pages/Popup/Popup.jsx":
/*!***********************************!*\
  !*** ./src/pages/Popup/Popup.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_img_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/logo.svg */ "./src/assets/img/logo.svg");
/* harmony import */ var _containers_Greetings_Greetings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/Greetings/Greetings */ "./src/containers/Greetings/Greetings.jsx");
/* harmony import */ var _Popup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup.css */ "./src/pages/Popup/Popup.css");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const Popup = () => {
  const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getCurrentTab().then(tab => setCurrentTab(tab));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentTab != null) {
      console.log(currentTab.id);
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        chrome.scripting.executeScript({
          target: {
            tabId: currentTab.id
          },
          function: setPageBackgroundColor
        });
      });
    }
  }, [currentTab]);

  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({
      color
    }) => {
      document.body.style.backgroundColor = color;
    });
  }

  async function getCurrentTab() {
    let queryOptions = {
      active: true,
      lastFocusedWindow: true
    }; // `tab` will either be a `tabs.Tab` instance or `undefined`.

    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "App"
  }, "TESTTTTTTTTTTTTTTTT", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: () => {}
  }, "Change COLOR"));
};

__signature__(Popup, "useState{[currentTab, setCurrentTab]}\nuseEffect{}\nuseEffect{}");

const _default = Popup;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Popup, "Popup", "/home/noql/Desktop/Adil/chrome-extension-boilerplate-react/src/pages/Popup/Popup.jsx");
  reactHotLoader.register(_default, "default", "/home/noql/Desktop/Adil/chrome-extension-boilerplate-react/src/pages/Popup/Popup.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6149b03d15ac01df8e7f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.e82d6656295869a1079d.hot-update.js.map