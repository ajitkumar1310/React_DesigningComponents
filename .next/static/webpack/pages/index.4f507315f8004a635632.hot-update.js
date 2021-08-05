self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhancedSpeaker": function() { return /* binding */ EnhancedSpeaker; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _src_components_SpeakerList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src_/components/SpeakerList */ "./src_/components/SpeakerList.js");
/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withData */ "./src/components/withData.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Ajit\\Projects\\ReactProjects\\React_DesigningComponents_PeterKellner\\src\\components\\SpeakersList.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var SpeakersList = function SpeakersList(_ref) {
  var speakers = _ref.speakers;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: speakers.map(function (speaker) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Speaker, _objectSpread({}, speaker), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 25
        }, _this)
      }, speaker.id, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
};

_c = SpeakersList;

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
var EnhancedSpeaker = (0,_withData__WEBPACK_IMPORTED_MODULE_3__.withData)(2)(SpeakersList);


var _c, _c2;

$RefreshReg$(_c, "SpeakersList");
$RefreshReg$(_c2, "Speaker");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzTGlzdCIsInNwZWFrZXJzIiwibWFwIiwic3BlYWtlciIsImlkIiwiU3BlYWtlciIsImZpcnN0IiwiRW5oYW5jZWRTcGVha2VyIiwid2l0aERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbkMsc0JBQ0k7QUFBQSxjQUNLQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFBQyxPQUFPLEVBQUk7QUFDckIsMEJBQ0k7QUFBQSwrQkFDSSw4REFBQyxPQUFELG9CQUFjQSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFVQSxPQUFPLENBQUNDLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILEtBTkE7QUFETCxtQkFESjtBQVdILENBWkQ7O0tBQU1KLFk7O0FBZU4sSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBbUI7QUFBQSxNQUFoQkQsRUFBZ0IsU0FBaEJBLEVBQWdCO0FBQUEsTUFBWkUsS0FBWSxTQUFaQSxLQUFZO0FBQy9CLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxTQUFHLDJCQUFvQkYsRUFBcEI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFS0UsS0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBUEQ7O01BQU1ELE87QUFRTixJQUFNRSxlQUFlLEdBQUdDLG1EQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlSLFlBQVosQ0FBeEI7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZjUwNzMxNWY4MDA0YTYzNTYzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXJMaXN0IGZyb20gXCIuLi8uLi9zcmNfL2NvbXBvbmVudHMvU3BlYWtlckxpc3RcIlxyXG5pbXBvcnQgeyB3aXRoRGF0YSB9IGZyb20gXCIuL3dpdGhEYXRhXCJcclxuXHJcbmNvbnN0IFNwZWFrZXJzTGlzdCA9ICh7IHNwZWFrZXJzIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3NwZWFrZXJzLm1hcChzcGVha2VyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3NwZWFrZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciAgey4uLnNwZWFrZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgU3BlYWtlciA9ICh7IGlkLCBmaXJzdCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH0gLz5cclxuICAgICAgICAgICAge2ZpcnN0fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmNvbnN0IEVuaGFuY2VkU3BlYWtlciA9IHdpdGhEYXRhKDIpKFNwZWFrZXJzTGlzdCk7XHJcbmV4cG9ydCB7IEVuaGFuY2VkU3BlYWtlciB9Il0sInNvdXJjZVJvb3QiOiIifQ==