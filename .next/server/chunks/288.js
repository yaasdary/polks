exports.id = 288;
exports.ids = [288];
exports.modules = {

/***/ 3288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _molecules_StandCard_StandCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2789);
/* harmony import */ var _styles_standBlock_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1222);
/* harmony import */ var _styles_standBlock_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_standBlock_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3630);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1631);
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8722);
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var StandsBlock = function StandsBlock(_ref) {
  var title = _ref.title,
      stands = _ref.stands;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (_styles_standBlock_module_scss__WEBPACK_IMPORTED_MODULE_6___default().standsBlock),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
      className: (_styles_standBlock_module_scss__WEBPACK_IMPORTED_MODULE_6___default().standsBlock__title),
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
      style: {
        width: '100%',
        height: '100%'
      },
      spaceBetween: 50,
      slidesPerView: 4,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 7
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 7
        },
        560: {
          slidesPerView: 3,
          spaceBetween: 5
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 5
        },
        200: {
          slidesPerView: 1,
          spaceBetween: 4
        },
        1: {
          slidesPerView: 1,
          spaceBetween: 4
        }
      },
      children: _toConsumableArray(stands).map(function (item) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_molecules_StandCard_StandCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            stand: item
          })
        }, item.id);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandsBlock);

/***/ }),

/***/ 1222:
/***/ ((module) => {

// Exports
module.exports = {
	"standsBlock": "standBlock_standsBlock__CcqR_",
	"standsBlock__title": "standBlock_standsBlock__title__mWGbA"
};


/***/ }),

/***/ 1631:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ })

};
;