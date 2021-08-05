self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speakers.js":
/*!************************************!*\
  !*** ./src/components/Speakers.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Speakers": function() { return /* binding */ Speakers; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpeakersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakersList */ "./src/components/SpeakersList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _ToolBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToolBar */ "./src/components/ToolBar.js");
/* harmony import */ var _Hooks_useRequestSpeaker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Hooks/useRequestSpeaker */ "./src/Hooks/useRequestSpeaker.js");
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Ajit\\Projects\\ReactProjects\\React_DesigningComponents_PeterKellner\\src\\components\\Speakers.js",
    _this = undefined,
    _s = $RefreshSig$();






var Speakers = function Speakers() {
  _s();

  var _useRequestSpeakers = (0,_Hooks_useRequestSpeaker__WEBPACK_IMPORTED_MODULE_4__.useRequestSpeakers)(2000),
      speakers = _useRequestSpeakers.speakers,
      showSessions = _useRequestSpeakers.showSessions,
      setShowSessions = _useRequestSpeakers.setShowSessions;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToolBar__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
        showSessions: showSessions,
        setShowSessions: setShowSessions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersList__WEBPACK_IMPORTED_MODULE_1__.SpeakersList, {
        speakers: speakers
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Speakers, "09eFWn45eI2w/Zoyg1fyLBfVUY4=", false, function () {
  return [_Hooks_useRequestSpeaker__WEBPACK_IMPORTED_MODULE_4__.useRequestSpeakers];
});

_c = Speakers;

var _c;

$RefreshReg$(_c, "Speakers");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/contexts/ThemeContext.js":
/*!**************************************!*\
  !*** ./src/contexts/ThemeContext.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": function() { return /* binding */ ThemeContext; },
/* harmony export */   "ThemeProvider": function() { return /* binding */ ThemeProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Ajit\\Projects\\ReactProjects\\React_DesigningComponents_PeterKellner\\src\\contexts\\ThemeContext.js",
    _this = undefined,
    _s = $RefreshSig$();


var ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
var ThemeProvider = function ThemeProvider(_ref) {
  _s();

  var initialTheme = _ref.initialTheme,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialTheme),
      theme = _useState[0],
      setTheme = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {
    value: {
      theme: theme,
      setTheme: setTheme
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_s(ThemeProvider, "UdI/sUL+BM/Ht+JjmzTx/eya+mM=");

_c = ThemeProvider;

var _c;

$RefreshReg$(_c, "ThemeProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9UaGVtZUNvbnRleHQuanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJzcGVha2VycyIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsIlRoZW1lQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiaW5pdGlhbFRoZW1lIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInRoZW1lIiwic2V0VGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLDRCQUMwQkMsNEVBQWtCLENBQUMsSUFBRCxDQUQ1QztBQUFBLE1BQ2xCQyxRQURrQix1QkFDbEJBLFFBRGtCO0FBQUEsTUFDUkMsWUFEUSx1QkFDUkEsWUFEUTtBQUFBLE1BQ01DLGVBRE4sdUJBQ01BLGVBRE47O0FBRTFCLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsaUVBQUQ7QUFBQSw4QkFDSSw4REFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSw4REFBQyw2Q0FBRDtBQUFTLG9CQUFZLEVBQUVELFlBQXZCO0FBQXFDLHVCQUFlLEVBQUVDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJLDhEQUFDLHVEQUFEO0FBQWMsZ0JBQVEsRUFBRUY7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBU0gsQ0FYTTs7R0FBTUYsUTtVQUMyQ0Msd0U7OztLQUQzQ0QsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGI7QUFDTyxJQUFNSyxZQUFZLGdCQUFHQyxvREFBYSxFQUFsQztBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBZ0M7QUFBQTs7QUFBQSxNQUE3QkMsWUFBNkIsUUFBN0JBLFlBQTZCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUUvQkMsK0NBQVEsQ0FBQ0YsWUFBRCxDQUZ1QjtBQUFBLE1BRWxERyxLQUZrRDtBQUFBLE1BRTNDQyxRQUYyQzs7QUFHekQsc0JBQ0ksOERBQUMsWUFBRCxDQUFjLFFBQWQ7QUFBdUIsU0FBSyxFQUFFO0FBQUVELFdBQUssRUFBTEEsS0FBRjtBQUFTQyxjQUFRLEVBQVJBO0FBQVQsS0FBOUI7QUFBQSxjQUNLSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBVE07O0dBQU1GLGE7O0tBQUFBLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmMzYjliOWFjN2Q0MGQxMjA4NTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwZWFrZXJzTGlzdCB9IGZyb20gXCIuL1NwZWFrZXJzTGlzdFwiXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgeyBUb29sYmFyIH0gZnJvbSAnLi9Ub29sQmFyJ1xyXG5pbXBvcnQgeyB1c2VSZXF1ZXN0U3BlYWtlcnMgfSBmcm9tICcuLi9Ib29rcy91c2VSZXF1ZXN0U3BlYWtlcidcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL1RoZW1lQ29udGV4dCdcclxuZXhwb3J0IGNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzcGVha2Vycywgc2hvd1Nlc3Npb25zLCBzZXRTaG93U2Vzc2lvbnMgfSA9IHVzZVJlcXVlc3RTcGVha2VycygyMDAwKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfSBzZXRTaG93U2Vzc2lvbnM9e3NldFNob3dTZXNzaW9uc30gLz5cclxuICAgICAgICAgICAgICAgIDxTcGVha2Vyc0xpc3Qgc3BlYWtlcnM9e3NwZWFrZXJzfSAvPlxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBUaGVtZVByb3ZpZGVyID0gKHsgaW5pdGlhbFRoZW1lLCBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShpbml0aWFsVGhlbWUpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIHNldFRoZW1lIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==