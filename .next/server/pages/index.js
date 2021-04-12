module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/palette */ "./styles/palette.ts");


var _jsxFileName = "C:\\dev\\next\\next-todo\\components\\TodoList.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TrashCanIcon = function TrashCanIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M9 19a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0v10zm4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0v10zm4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0v10zm5-17v2H2V2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2H22zm-3 4v16H5V6H3v18h18V6h-2z"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

TrashCanIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
};

var CheckMarkIcon = function CheckMarkIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M20.285 2 9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

CheckMarkIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "TodoList__Container",
  componentId: "sc-1t8agvw-0"
})(["width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid ", ";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:", ";}.bg-green{background-color:", ";}.bg-navy{background-color:", ";}.bg-orange{background-color:", ";}.bg-red{background-color:", ";}.bg-yellow{background-color:", ";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid ", ";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:", ";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;align-items:center;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:16px;path{fill:", ";}}.todo-check-mark{fill:", ";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid ", ";background-color:transparent;outline:none;}}}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray);

const TodoList = ({
  todos
}) => {
  //* 색깔 객체 구하기 1
  const getTodoColorNums = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;
    let blue = 0;
    let navy = 0;
    todos.forEach(todo => {
      switch (todo.color) {
        case "red":
          red += 1;
          break;

        case "orange":
          orange += 1;
          break;

        case "yellow":
          yellow += 1;
          break;

        case "green":
          green += 1;
          break;

        case "blue":
          blue += 1;
          break;

        case "navy":
          navy += 1;
          break;

        default:
          break;
      }
    });
    return {
      red,
      orange,
      yellow,
      green,
      blue,
      navy
    };
  }, [todos]); //* 객체의 문자열 인덱스 사용을 위한 타입

  const todoColorNums = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(getTodoColorNums, [todos]); //* 색깔 객체 구하기 2

  const todoColorNums2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    const colors = {};
    todos.forEach(todo => {
      const value = colors[todo.color];

      if (!value) {
        //* 존재하지않던 key라면
        colors[`${todo.color}`] = 1;
      } else {
        //* 존재하는 키라면
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "todo-list-header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "todo-list-last-todo",
        children: ["\uB0A8\uC740 TODO", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [todos.length, " \uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 22
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "todo-list-header-colors",
        children: Object.keys(todoColorNums2).map((color, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "todo-list-header-color-num",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: `todo-list-header-round-color bg-${color}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [todoColorNums2[color], "\uAC1C"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 21
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 17
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "todo-list",
      children: todos.map(todo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "todo-item",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "todo-left-side",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: `todo-color-block bg-${todo.color}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: `todo-text ${todo.checked ? "checked-todo-text" : ""}`,
            children: todo.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 23
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "todo-right-side",
          children: [todo.checked && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TrashCanIcon, {
              className: "todo-trash-can",
              onClick: () => {}
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CheckMarkIcon, {
              className: "todo-check-mark",
              onClick: () => {}
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 25
            }, undefined)]
          }, void 0, true), !todo.checked && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: "todo-button",
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 23
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 19
        }, undefined)]
      }, todo.id, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 199,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");

var _jsxFileName = "C:\\dev\\next\\next-todo\\pages\\index.tsx";


const todos = [{
  id: 1,
  text: "마트 가서 장보기",
  color: "red",
  checked: false
}, {
  id: 2,
  text: "수학 숙제하기",
  color: "orange",
  checked: false
}, {
  id: 3,
  text: "코딩하기",
  color: "yellow",
  checked: true
}, {
  id: 4,
  text: "넥스트 공부하기",
  color: "green",
  checked: true
}, {
  id: 5,
  text: "요리 연습하기",
  color: "blue",
  checked: false
}, {
  id: 6,
  text: "분리수거 하기",
  color: "navy",
  checked: false
}]; //index 뒤 ":" > 변수에 타입 지정

const index = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodoList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    todos: todos
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (index); // import Axios from "axios";
// import { GetServerSideProps } from "next";
// import { TodoType } from "../types/todo";
// import { getTodosAPI } from "../lib/api/todo";
// const app: NextPage = () => {
//     return <TodoList todos={todos} />;
// }
// export const getServerSideProps: GetServerSideProps = async() => {
//     try {
//         const { data } = await getTodosAPI();
//         return { props: {} };
//     } catch (e) {
//         console.log(e);
//         return { props: {} };
//     }
// }

/***/ }),

/***/ "./styles/palette.ts":
/*!***************************!*\
  !*** ./styles/palette.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  red: "#FFAFB0",
  orange: "#FFC282",
  yellow: "#FCFFB0",
  green: "#E2FFAF",
  blue: "#AEE4FF",
  navy: "#B5C7ED",
  gray: "#E5E5E5",
  deep_red: "#F35456",
  deep_green: "#47E774"
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9wYWxldHRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJUcmFzaENhbkljb24iLCJDaGVja01hcmtJY29uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicGFsZXR0ZSIsImdyYXkiLCJibHVlIiwiZ3JlZW4iLCJuYXZ5Iiwib3JhbmdlIiwicmVkIiwieWVsbG93IiwiZGVlcF9yZWQiLCJkZWVwX2dyZWVuIiwiVG9kb0xpc3QiLCJ0b2RvcyIsImdldFRvZG9Db2xvck51bXMiLCJ1c2VDYWxsYmFjayIsImZvckVhY2giLCJ0b2RvIiwiY29sb3IiLCJ0b2RvQ29sb3JOdW1zIiwidXNlTWVtbyIsInRvZG9Db2xvck51bXMyIiwiY29sb3JzIiwidmFsdWUiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJjaGVja2VkIiwidGV4dCIsImlkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtR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LFNBTEk7QUFNWEUsTUFBSSxFQUFHLFNBTkk7QUFPWEgsTUFBSSxFQUFHLFNBUEk7QUFRWE8sVUFBUSxFQUFHLFNBUkE7QUFTWEMsWUFBVSxFQUFHO0FBVEYsQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdG9kb1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuXHJcbmltcG9ydCBUcmFzaENhbkljb24gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWNzL3N2Zy90cmFzaF9jYW4uc3ZnXCI7XHJcbmltcG9ydCBDaGVja01hcmtJY29uIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljcy9zdmcvY2hlY2tfbWFyay5zdmdcIjtcclxuXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAudG9kby1udW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAudG9kby1saXN0LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcbiAgICAudG9kby1saXN0LWxhc3QtdG9kbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOiAwIDAgOHB4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9ycyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3Ige1xyXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5iZy1ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ibHVlfTtcclxuICB9XHJcbiAgLmJnLWdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmVlbn07XHJcbiAgfVxyXG4gIC5iZy1uYXZ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5uYXZ5fTtcclxuICB9XHJcbiAgLmJnLW9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcclxuICB9XHJcbiAgLmJnLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUucmVkfTtcclxuICB9XHJcbiAgLmJnLXllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcclxuICB9XHJcblxyXG4gIC50b2RvLWxpc3Qge1xyXG4gICAgLnRvZG8taXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcbiAgICAgIC50b2RvLWxlZnQtc2lkZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAudG9kby1jb2xvci1ibG9jayB7XHJcbiAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWNrZWQtdG9kby10ZXh0IHtcclxuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheX07XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tdGV4dCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRvZG8tcmlnaHQtc2lkZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZG8tdHJhc2gtY2FuIHtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX3JlZH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2RvLWNoZWNrLW1hcmsge1xyXG4gICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfZ3JlZW59O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9kby1idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICB0b2RvcyA6IFRvZG9UeXBlW107XHJcbn1cclxuXHJcbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9kb3MgfSkgPT4ge1xyXG4gICAgLy8qIOyDieq5lCDqsJ3ssrQg6rWs7ZWY6riwIDFcclxuICAgIGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlZCA9IDA7XHJcbiAgICAgICAgbGV0IG9yYW5nZSA9IDA7XHJcbiAgICAgICAgbGV0IHllbGxvdyA9IDA7XHJcbiAgICAgICAgbGV0IGdyZWVuID0gMDtcclxuICAgICAgICBsZXQgYmx1ZSA9IDA7XHJcbiAgICAgICAgbGV0IG5hdnkgPSAwO1xyXG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHRvZG8uY29sb3IpIHtcclxuICAgICAgICAgICAgY2FzZSBcInJlZFwiOlxyXG4gICAgICAgICAgICByZWQgKz0gMTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcmFuZ2VcIjpcclxuICAgICAgICAgICAgb3JhbmdlICs9IDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwieWVsbG93XCI6XHJcbiAgICAgICAgICAgIHllbGxvdyArPSAxO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6XHJcbiAgICAgICAgICAgIGdyZWVuICs9IDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxyXG4gICAgICAgICAgICBibHVlICs9IDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibmF2eVwiOlxyXG4gICAgICAgICAgICBuYXZ5ICs9IDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVkLFxyXG4gICAgICAgIG9yYW5nZSxcclxuICAgICAgICB5ZWxsb3csXHJcbiAgICAgICAgZ3JlZW4sXHJcbiAgICAgICAgYmx1ZSxcclxuICAgICAgICBuYXZ5LFxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdG9kb3NdKTtcclxuXHJcbiAgICAvLyog6rCd7LK07J2YIOusuOyekOyXtCDsnbjrjbHsiqQg7IKs7Jqp7J2EIOychO2VnCDtg4DsnoVcclxuICAgIHR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oZ2V0VG9kb0NvbG9yTnVtcywgW3RvZG9zXSk7XHJcblxyXG4gICAgLy8qIOyDieq5lCDqsJ3ssrQg6rWs7ZWY6riwIDJcclxuICAgIGNvbnN0IHRvZG9Db2xvck51bXMyID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29sb3JzOiBPYmplY3RJbmRleFR5cGUgPSB7fTtcclxuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3RvZG8uY29sb3JdO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyog7KG07J6s7ZWY7KeA7JWK642YIGtleeudvOuptFxyXG4gICAgICAgICAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8qIOyhtOyerO2VmOuKlCDtgqTrnbzrqbRcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gdmFsdWUgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9ycztcclxuICAgIH0sIFt0b2Rvc10pO1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvZG8tbGlzdC1sYXN0LXRvZG9cIj5cclxuICAgICAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh9IOqwnDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRvZG9Db2xvck51bXMyKS5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3IgYmctJHtjb2xvcn1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3RvZG9Db2xvck51bXMyW2NvbG9yXX3qsJw8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvZG8tbGlzdFwiPlxyXG4gICAgICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0b2RvLWl0ZW1cIiBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGVmdC1zaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWNvbG9yLWJsb2NrIGJnLSR7dG9kby5jb2xvcn1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdG9kby10ZXh0ICR7dG9kby5jaGVja2VkID8gXCJjaGVja2VkLXRvZG8tdGV4dFwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvZG8udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1yaWdodC1zaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvZG8uY2hlY2tlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hDYW5JY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9kby10cmFzaC1jYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tNYXJrSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZG8tY2hlY2stbWFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHshdG9kby5jaGVja2VkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInRvZG8tYnV0dG9uXCIgb25DbGljaz17KCkgPT4ge319Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdG9kb1wiO1xyXG5cclxuY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBbXHJcbiAgICB7aWQ6MSwgdGV4dDpcIuuniO2KuCDqsIDshJwg7J6l67O06riwXCIsIGNvbG9yOlwicmVkXCIsIGNoZWNrZWQ6IGZhbHNlfSxcclxuICAgIHtpZDoyLCB0ZXh0Olwi7IiY7ZWZIOyImeygnO2VmOq4sFwiLCBjb2xvcjpcIm9yYW5nZVwiLCBjaGVja2VkOiBmYWxzZX0sXHJcbiAgICB7aWQ6MywgdGV4dDpcIuy9lOuUqe2VmOq4sFwiLCBjb2xvcjpcInllbGxvd1wiLCBjaGVja2VkOiB0cnVlfSxcclxuICAgIHtpZDo0LCB0ZXh0Olwi64Sl7Iqk7Yq4IOqzteu2gO2VmOq4sFwiLCBjb2xvcjpcImdyZWVuXCIsIGNoZWNrZWQ6IHRydWV9LFxyXG4gICAge2lkOjUsIHRleHQ6XCLsmpTrpqwg7Jew7Iq17ZWY6riwXCIsIGNvbG9yOlwiYmx1ZVwiLCBjaGVja2VkOiBmYWxzZX0sXHJcbiAgICB7aWQ6NiwgdGV4dDpcIuu2hOumrOyImOqxsCDtlZjquLBcIiwgY29sb3I6XCJuYXZ5XCIsIGNoZWNrZWQ6IGZhbHNlfSxcclxuXVxyXG5cclxuLy9pbmRleCDrkqQgXCI6XCIgPiDrs4DsiJjsl5Ag7YOA7J6FIOyngOyglVxyXG5jb25zdCBpbmRleDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFRvZG9MaXN0IHRvZG9zPXt0b2Rvc30vPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcblxyXG4vLyBpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbi8vIGltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSBcIi4uL3R5cGVzL3RvZG9cIjtcclxuLy8gaW1wb3J0IHsgZ2V0VG9kb3NBUEkgfSBmcm9tIFwiLi4vbGliL2FwaS90b2RvXCI7XHJcblxyXG4vLyBjb25zdCBhcHA6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIDxUb2RvTGlzdCB0b2Rvcz17dG9kb3N9IC8+O1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYygpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBnZXRUb2Rvc0FQSSgpO1xyXG4vLyAgICAgICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG4vLyAgICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4vLyAgICAgICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG4vLyAgICAgfVxyXG4vLyB9IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcmVkIDogXCIjRkZBRkIwXCIsXHJcbiAgICBvcmFuZ2UgOiBcIiNGRkMyODJcIixcclxuICAgIHllbGxvdyA6IFwiI0ZDRkZCMFwiLFxyXG4gICAgZ3JlZW4gOiBcIiNFMkZGQUZcIixcclxuICAgIGJsdWUgOiBcIiNBRUU0RkZcIixcclxuICAgIG5hdnkgOiBcIiNCNUM3RURcIixcclxuICAgIGdyYXkgOiBcIiNFNUU1RTVcIixcclxuICAgIGRlZXBfcmVkIDogXCIjRjM1NDU2XCIsXHJcbiAgICBkZWVwX2dyZWVuIDogXCIjNDdFNzc0XCJcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==