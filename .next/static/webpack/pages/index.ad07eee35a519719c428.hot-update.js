self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Hooks/useRequestSpeaker.js":
/*!****************************************!*\
  !*** ./src/Hooks/useRequestSpeaker.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRequestSpeakers": function() { return /* binding */ useRequestSpeakers; }
/* harmony export */ });
/* harmony import */ var C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _speakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../speakerData */ "./speakerData.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();



var useRequestSpeakers = function useRequestSpeakers(delayms) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      speakers = _useState[0],
      setSpeakers = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      showSessions = _useState2[0],
      setShowSessions = _useState2[1];

  var delay = function delay(delayms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, delayms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    return C_Ajit_Projects_ReactProjects_React_DesigningComponents_PeterKellner_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return delay(2000);

          case 2:
            setSpeakers(_speakerData__WEBPACK_IMPORTED_MODULE_3__.data);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return {
    speakers: speakers,
    showSessions: showSessions,
    setShowSessions: setShowSessions
  };
};

_s(useRequestSpeakers, "+b3oMr4cwBYeNyk0KLKC4tavY8I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0hvb2tzL3VzZVJlcXVlc3RTcGVha2VyLmpzIl0sIm5hbWVzIjpbInVzZVJlcXVlc3RTcGVha2VycyIsImRlbGF5bXMiLCJ1c2VTdGF0ZSIsInNwZWFrZXJzIiwic2V0U3BlYWtlcnMiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiLCJkZWxheSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ08sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFBQSxrQkFDWEMsK0NBQVEsQ0FBQyxFQUFELENBREc7QUFBQSxNQUNwQ0MsUUFEb0M7QUFBQSxNQUMxQkMsV0FEMEI7O0FBQUEsbUJBRUhGLCtDQUFRLENBQUMsSUFBRCxDQUZMO0FBQUEsTUFFcENHLFlBRm9DO0FBQUEsTUFFdEJDLGVBRnNCOztBQUczQyxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDTixPQUFEO0FBQUEsV0FBYSxJQUFJTyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVUixPQUFWLENBQXZCO0FBQUEsS0FBWixDQUFiO0FBQUEsR0FBZDs7QUFDQVUsa0RBQVMsMlZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0FKLEtBQUssQ0FBQyxJQUFELENBREw7O0FBQUE7QUFFTkgsdUJBQVcsQ0FBQ1EsOENBQUQsQ0FBWDs7QUFGTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBR04sRUFITSxDQUFUO0FBS0EsU0FBTztBQUFFVCxZQUFRLEVBQVJBLFFBQUY7QUFBWUUsZ0JBQVksRUFBWkEsWUFBWjtBQUEwQkMsbUJBQWUsRUFBZkE7QUFBMUIsR0FBUDtBQUNILENBVk07O0dBQU1OLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFkMDdlZWUzNWE1MTk3MTljNDI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi8uLi9zcGVha2VyRGF0YSdcclxuZXhwb3J0IGNvbnN0IHVzZVJlcXVlc3RTcGVha2VycyA9IChkZWxheW1zKSA9PiB7XHJcbiAgICBjb25zdCBbc3BlYWtlcnMsIHNldFNwZWFrZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3Nob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBkZWxheSA9IChkZWxheW1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheW1zKSlcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XHJcbiAgICAgICAgc2V0U3BlYWtlcnMoZGF0YSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiB7IHNwZWFrZXJzLCBzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9ucyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==