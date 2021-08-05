self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _speakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../speakerData */ "./speakerData.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Ajit\\Projects\\ReactProjects\\React_DesigningComponents_PeterKellner\\src\\components\\App.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Speakers = function Speakers(_ref) {
  var speakers = _ref.speakers;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: speakers.map(function (speaker) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Speaker, _objectSpread({}, speaker), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 25
        }, _this)
      }, speaker.id, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
};

_c = Speakers;

var Speaker = function Speaker(_ref2) {
  var id = _ref2.id,
      first = _ref2.first;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "images/speaker-".concat(id, ".jpg")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), first]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, _this);
};

_c2 = Speaker;

var App = function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Speakers, {
    speakers: _speakerData__WEBPACK_IMPORTED_MODULE_2__.data
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, _this);
};

_c3 = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2, _c3;

$RefreshReg$(_c, "Speakers");
$RefreshReg$(_c2, "Speaker");
$RefreshReg$(_c3, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwic3BlYWtlcnMiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJTcGVha2VyIiwiZmlyc3QiLCJBcHAiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQy9CLHNCQUNJO0FBQUEsY0FDS0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQUMsT0FBTyxFQUFJO0FBQ3JCLDBCQUNJO0FBQUEsK0JBQ0ksOERBQUMsT0FBRCxvQkFBY0EsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBVUEsT0FBTyxDQUFDQyxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxLQU5BO0FBREwsbUJBREo7QUFXSCxDQVpEOztLQUFNSixROztBQWNOLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLFFBQW1CO0FBQUEsTUFBaEJELEVBQWdCLFNBQWhCQSxFQUFnQjtBQUFBLE1BQVpFLEtBQVksU0FBWkEsS0FBWTtBQUMvQixzQkFDSTtBQUFBLDRCQUNJO0FBQUssU0FBRywyQkFBb0JGLEVBQXBCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtFLEtBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQVBEOztNQUFNRCxPOztBQVNOLElBQU1FLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFHZCxzQkFDSSw4REFBQyxRQUFEO0FBQVUsWUFBUSxFQUFFQyw4Q0FBSUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBSUgsQ0FQRDs7TUFBTUQsRztBQVFOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ5MjBkMmFhZTJiZWIyNjQ3YjI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi8uLi9zcGVha2VyRGF0YSdcclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKHsgc3BlYWtlcnMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c3BlYWtlcnMubWFwKHNwZWFrZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3BlYWtlci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyICB7Li4uc3BlYWtlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFNwZWFrZXIgPSAoeyBpZCwgZmlyc3QgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9IC8+XHJcbiAgICAgICAgICAgIHtmaXJzdH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTcGVha2VycyBzcGVha2Vycz17ZGF0YX0gLz5cclxuXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=