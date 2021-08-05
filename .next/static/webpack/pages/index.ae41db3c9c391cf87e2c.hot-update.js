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
/* harmony import */ var _components_withData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/withData */ "./src/components/withData.js");
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
      initialTheme: "black",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToolBar__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
        showSessions: showSessions,
        setShowSessions: setShowSessions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersList__WEBPACK_IMPORTED_MODULE_1__.SpeakersList, {
        speakers: speakers
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
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

/***/ "./src/components/withData.js":
/*!************************************!*\
  !*** ./src/components/withData.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withData": function() { return /* binding */ withData; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Ajit\\Projects\\ReactProjects\\React_DesigningComponents_PeterKellner\\src\\components\\withData.js",
    _this = undefined;

var withData = function withData(component) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("component", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3dpdGhEYXRhLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlUmVxdWVzdFNwZWFrZXJzIiwic3BlYWtlcnMiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiLCJ3aXRoRGF0YSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsNEJBQzBCQyw0RUFBa0IsQ0FBQyxJQUFELENBRDVDO0FBQUEsTUFDbEJDLFFBRGtCLHVCQUNsQkEsUUFEa0I7QUFBQSxNQUNSQyxZQURRLHVCQUNSQSxZQURRO0FBQUEsTUFDTUMsZUFETix1QkFDTUEsZUFETjs7QUFFMUIsc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyxpRUFBRDtBQUFlLGtCQUFZLEVBQUMsT0FBNUI7QUFBQSw4QkFDSSw4REFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSw4REFBQyw2Q0FBRDtBQUFTLG9CQUFZLEVBQUVELFlBQXZCO0FBQXFDLHVCQUFlLEVBQUVDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJLDhEQUFDLHVEQUFEO0FBQWMsZ0JBQVEsRUFBRUY7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBU0gsQ0FYTTs7R0FBTUYsUTtVQUMyQ0Msd0U7OztLQUQzQ0QsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMTixJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxTQUFELEVBQWU7QUFDbkMsc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBSUgsQ0FMTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZTQxZGIzYzljMzkxY2Y4N2UyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3BlYWtlcnNMaXN0IH0gZnJvbSBcIi4vU3BlYWtlcnNMaXN0XCJcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInXHJcbmltcG9ydCB7IFRvb2xiYXIgfSBmcm9tICcuL1Rvb2xCYXInXHJcbmltcG9ydCB7IHVzZVJlcXVlc3RTcGVha2VycyB9IGZyb20gJy4uL0hvb2tzL3VzZVJlcXVlc3RTcGVha2VyJ1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvVGhlbWVDb250ZXh0J1xyXG5pbXBvcnQgeyB3aXRoRGF0YSB9IGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aERhdGEnXHJcbmV4cG9ydCBjb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc3BlYWtlcnMsIHNob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zIH0gPSB1c2VSZXF1ZXN0U3BlYWtlcnMoMjAwMClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgaW5pdGlhbFRoZW1lPSdibGFjayc+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc30gc2V0U2hvd1Nlc3Npb25zPXtzZXRTaG93U2Vzc2lvbnN9IC8+XHJcbiAgICAgICAgICAgICAgICA8U3BlYWtlcnNMaXN0IHNwZWFrZXJzPXtzcGVha2Vyc30gLz5cclxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJcclxuZXhwb3J0IGNvbnN0IHdpdGhEYXRhID0gKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Y29tcG9uZW50PjwvY29tcG9uZW50PlxyXG4gICAgKVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=