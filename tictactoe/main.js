(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/block/block.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/block/block.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"blocks\" [ngClass]=\"{'active':isActive}\" [style.background-color]=\"backgroundColor\">\r\n  <div class=\"text\">{{blockText}}</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup/popup.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup/popup.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"popup-container\">\r\n  <div class=\"popup-heading\">{{heading}}</div>\r\n  <div *ngIf=\"body.length > 0\" class=\"popup-body\">{{body}}</div>\r\n  <div class=\"popup-btn\">\r\n    <button (click)=\"onBtnClick()\">{{btnText}}</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/snake-board/snake-board.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/snake-board/snake-board.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar\">\r\n  <div class=\"heading\">Snake</div>\r\n  <div class=\"score\">\r\n    <p>Score: {{score}}</p>\r\n    <p>High Score: {{highscore}}</p>\r\n  </div>\r\n  <div class=\"reset-btn\" (click)=\"newGame()\"></div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"snake-container\">\r\n    <div class=\"row\" *ngFor=\"let column of board; let i = index;\">\r\n      <div class=\"column\" *ngFor=\"let row of column; let j = index;\" [ngStyle]=\"{'background-color': setColors(i, j)}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"controller\">\r\n  <div class=\"arrow arrow-up\" (click)=\"navigateSnake(38)\"></div>\r\n  <div class=\"arrow arrow-left\" (click)=\"navigateSnake(37)\"></div>\r\n  <div class=\"arrow arrow-right\" (click)=\"navigateSnake(39)\"></div>\r\n  <div class=\"arrow arrow-down\" (click)=\"navigateSnake(40)\"></div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sorting-algorithm/sorting-algorithm.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sorting-algorithm/sorting-algorithm.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar\">\n    <div class=\"heading\">Sorting Algorithm</div>\n    <div class=\"main-content\">\n        <div class=\"change-size\">\n            <label for=\"change-slider\">Change Size & Sorting Speed</label>\n            <input type=\"range\" #slider id=\"change-slider\" min=\"0\" max=\"50\" value=\"25\" (input)=\"onSliderChange(+$event.target.value + 4)\">\n        </div>\n        <div class=\"algo-name\">\n            <div class=\"algo selected\" (click)=\"selectAlgo($event, 0)\">Heap Sort</div>\n            <div class=\"algo\" (click)=\"selectAlgo($event, 1)\">Quick Sort</div>\n            <div class=\"algo\" (click)=\"selectAlgo($event, 2)\">Merge Sort</div>\n            <div class=\"algo\" (click)=\"selectAlgo($event, 3)\">Bubble Sort</div>\n        </div>\n    </div>\n    <button class=\"play-btn\" (click)=\"sortArray($event)\"></button>\n</div>\n<div class=\"playground\" #playground>\n    <div class=\"element\" *ngFor=\"let elem of sortingData; let i = index;\" [ngStyle]=\"{'background-color': elem.color, 'width': setWidth(), 'height': elem.height + 'px'}\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tictactoe/tictactoe.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tictactoe/tictactoe.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar\">\r\n  <div class=\"heading\">Tic Tac Toe</div>\r\n  <div class=\"score\">\r\n    <span>{{score}}</span> You vs AI <span>{{aiScore}}</span>\r\n  </div>\r\n  <div class=\"reset-btn\" (click)=\"reset()\"></div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"block-container\">\r\n    <app-block *ngFor=\"let block of blockData\" [isActive]=\"block.isActive\" [backgroundColor]=\"block.backgroundColor\" [blockText]=\"block.blockText\" (click)=\"onBlockClick(block.id)\"></app-block>\r\n  </div>\r\n</div>\r\n<div class=\"popup\" *ngIf=\"showPopup\">\r\n  <app-popup [heading]=\"popupHeading\" [btnText]=\"popupBtnText\" (closePopup)=\"closePopup()\"></app-popup>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_tictactoe_tictactoe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tictactoe/tictactoe.component */ "./src/app/components/tictactoe/tictactoe.component.ts");
/* harmony import */ var _components_snake_board_snake_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/snake-board/snake-board.component */ "./src/app/components/snake-board/snake-board.component.ts");
/* harmony import */ var _components_sorting_algorithm_sorting_algorithm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sorting-algorithm/sorting-algorithm.component */ "./src/app/components/sorting-algorithm/sorting-algorithm.component.ts");







var routes = [
    {
        path: 'tictactoe', component: _components_tictactoe_tictactoe_component__WEBPACK_IMPORTED_MODULE_4__["TictactoeComponent"]
    },
    {
        path: 'snake', component: _components_snake_board_snake_board_component__WEBPACK_IMPORTED_MODULE_5__["SnakeBoardComponent"]
    },
    {
        path: 'sorting', component: _components_sorting_algorithm_sorting_algorithm_component__WEBPACK_IMPORTED_MODULE_6__["SortingAlgorithmComponent"]
    },
    {
        path: '**', redirectTo: '/sorting', pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat\");\n::ng-deep body {\n  background-color: #efefef;\n  margin: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n::ng-deep body app-sorting-algorithm,\n::ng-deep body app-tictactoe,\n::ng-deep body app-snake-board {\n  display: block;\n  min-width: 480px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEZhaXNhbFxcR0lUXFxnYW1lL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpRUFBQTtBQUVSO0VBQ0MseUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNBRDtBREVDOzs7RUFHQyxjQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXRcIik7XHJcblxyXG46Om5nLWRlZXAgYm9keSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuXHRtYXJnaW46IDA7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG5cdGFwcC1zb3J0aW5nLWFsZ29yaXRobSxcclxuXHRhcHAtdGljdGFjdG9lLFxyXG5cdGFwcC1zbmFrZS1ib2FyZCB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdG1pbi13aWR0aDogNDgwcHg7XHJcblx0fVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXRcIik7XG46Om5nLWRlZXAgYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIG1hcmdpbjogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG46Om5nLWRlZXAgYm9keSBhcHAtc29ydGluZy1hbGdvcml0aG0sXG46Om5nLWRlZXAgYm9keSBhcHAtdGljdGFjdG9lLFxuOjpuZy1kZWVwIGJvZHkgYXBwLXNuYWtlLWJvYXJkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogNDgwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_block_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/block/block.component */ "./src/app/components/block/block.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/popup/popup.component */ "./src/app/components/popup/popup.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_tictactoe_tictactoe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tictactoe/tictactoe.component */ "./src/app/components/tictactoe/tictactoe.component.ts");
/* harmony import */ var _components_snake_board_snake_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/snake-board/snake-board.component */ "./src/app/components/snake-board/snake-board.component.ts");
/* harmony import */ var _components_sorting_algorithm_sorting_algorithm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sorting-algorithm/sorting-algorithm.component */ "./src/app/components/sorting-algorithm/sorting-algorithm.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_block_block_component__WEBPACK_IMPORTED_MODULE_4__["BlockComponent"],
                _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_6__["PopupComponent"],
                _components_tictactoe_tictactoe_component__WEBPACK_IMPORTED_MODULE_8__["TictactoeComponent"],
                _components_snake_board_snake_board_component__WEBPACK_IMPORTED_MODULE_9__["SnakeBoardComponent"],
                _components_sorting_algorithm_sorting_algorithm_component__WEBPACK_IMPORTED_MODULE_10__["SortingAlgorithmComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/block/block.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/block/block.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blocks {\n  height: 80px;\n  width: 80px;\n  display: inline-block;\n  margin: 10px;\n  transition: 0.4s;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  text-align: center;\n  box-sizing: border-box;\n  color: transparent;\n  cursor: pointer;\n}\n.blocks.active {\n  transform: rotate3d(0, 1, 0, -180deg);\n  background-color: #efefef;\n  transition-duration: 0.4s;\n  color: #222;\n  cursor: default;\n}\n.blocks .text {\n  line-height: 78px;\n  height: 78px;\n  font-size: 40px;\n}\n.blocks > * {\n  vertical-align: middle;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9jay9EOlxcRmFpc2FsXFxHSVRcXGdhbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJsb2NrXFxibG9jay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ibG9jay9ibG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRDtBRENDO0VBQ0MscUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDRjtBREVDO0VBQ0MsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0M7RUFDQyxzQkFBQTtFQUNBLHFCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jsb2NrL2Jsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrcyB7XHJcblx0aGVpZ2h0OiA4MHB4O1xyXG5cdHdpZHRoOiA4MHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW46IDEwcHg7XHJcblx0dHJhbnNpdGlvbjogMC40cztcclxuXHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Y29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblx0Ji5hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUzZCgwLCAxLCAwLCAtMTgwZGVnKTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG5cdFx0Y29sb3I6ICMyMjI7XHJcblx0XHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0fVxyXG5cclxuXHQudGV4dCB7XHJcblx0XHRsaW5lLWhlaWdodDogNzhweDtcclxuXHRcdGhlaWdodDogNzhweDtcclxuXHRcdGZvbnQtc2l6ZTogNDBweDtcclxuXHR9XHJcblxyXG5cdCYgPiAqIHtcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0fVxyXG59XHJcbiIsIi5ibG9ja3Mge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJsb2Nrcy5hY3RpdmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDEsIDAsIC0xODBkZWcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICBjb2xvcjogIzIyMjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmJsb2NrcyAudGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiA3OHB4O1xuICBoZWlnaHQ6IDc4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5ibG9ja3MgPiAqIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/block/block.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/block/block.component.ts ***!
  \*****************************************************/
/*! exports provided: BlockData, TICTACTOE, BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockData", function() { return BlockData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICTACTOE", function() { return TICTACTOE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var BlockData = /** @class */ (function () {
    function BlockData() {
        this.backgroundColor = '#fff';
        this.isActive = false;
    }
    return BlockData;
}());

var TICTACTOE;
(function (TICTACTOE) {
    TICTACTOE["CROSS"] = "\u2715";
    TICTACTOE["ZERO"] = "O";
})(TICTACTOE || (TICTACTOE = {}));
var BlockComponent = /** @class */ (function () {
    function BlockComponent() {
        this.blockText = '';
        this.backgroundColor = '#fff';
        this.isActive = false;
    }
    BlockComponent.movesCount = 0;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], BlockComponent.prototype, "blockText", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], BlockComponent.prototype, "backgroundColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], BlockComponent.prototype, "isActive", void 0);
    BlockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./block.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/block/block.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./block.component.scss */ "./src/app/components/block/block.component.scss")).default]
        })
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "./src/app/components/popup/popup.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/popup/popup.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popup-container {\n  margin: auto;\n  width: 300px;\n  text-align: center;\n  border-radius: 8px;\n  box-shadow: 3px 3px 11px 0px rgba(50, 50, 50, 0.6);\n  background-color: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-family: Montserrat;\n}\n.popup-container .popup-heading {\n  font-size: 32px;\n  padding: 16px;\n}\n.popup-container .popup-body {\n  padding: 16px;\n}\n.popup-container .popup-btn {\n  padding: 16px;\n  padding-top: 0;\n}\n.popup-container .popup-btn button {\n  background-color: #00b8d4;\n  color: #fff;\n  font-weight: bold;\n  border: 0;\n  padding: 10px 16px;\n  border-radius: 6px;\n  font-family: Montserrat;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cC9EOlxcRmFpc2FsXFxHSVRcXGdhbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcHVwXFxwb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0FDQ0Q7QURDQztFQUNDLGVBQUE7RUFDQSxhQUFBO0FDQ0Y7QURFQztFQUNDLGFBQUE7QUNBRjtBREdDO0VBQ0MsYUFBQTtFQUNBLGNBQUE7QUNERjtBREdFO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0RIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cC1jb250YWluZXIge1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRib3gtc2hhZG93OiAzcHggM3B4IDExcHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC42KTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG5cclxuXHQucG9wdXAtaGVhZGluZyB7XHJcblx0XHRmb250LXNpemU6IDMycHg7XHJcblx0XHRwYWRkaW5nOiAxNnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcHVwLWJvZHkge1xyXG5cdFx0cGFkZGluZzogMTZweDtcclxuXHR9XHJcblxyXG5cdC5wb3B1cC1idG4ge1xyXG5cdFx0cGFkZGluZzogMTZweDtcclxuXHRcdHBhZGRpbmctdG9wOiAwO1xyXG5cclxuXHRcdGJ1dHRvbiB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMGI4ZDQ7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0Ym9yZGVyOiAwO1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4IDE2cHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLnBvcHVwLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbn1cbi5wb3B1cC1jb250YWluZXIgLnBvcHVwLWhlYWRpbmcge1xuICBmb250LXNpemU6IDMycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ucG9wdXAtY29udGFpbmVyIC5wb3B1cC1ib2R5IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5wb3B1cC1jb250YWluZXIgLnBvcHVwLWJ0biB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLnBvcHVwLWNvbnRhaW5lciAucG9wdXAtYnRuIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGI4ZDQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/popup/popup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/popup/popup.component.ts ***!
  \*****************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
        this.heading = '';
        this.body = '';
        this.btnText = '';
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PopupComponent.prototype.setHeading = function (text) {
        this.heading = text;
    };
    PopupComponent.prototype.setButtonText = function (text) {
        this.btnText = text;
    };
    PopupComponent.prototype.setBodyText = function (text) {
        this.body = text;
    };
    PopupComponent.prototype.onBtnClick = function () {
        this.closePopup.emit();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], PopupComponent.prototype, "heading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], PopupComponent.prototype, "body", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], PopupComponent.prototype, "btnText", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PopupComponent.prototype, "closePopup", void 0);
    PopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup/popup.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popup.component.scss */ "./src/app/components/popup/popup.component.scss")).default]
        })
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/components/snake-board/snake-board.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/snake-board/snake-board.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  height: auto;\n  min-width: 452px;\n  background-color: #00b8d4;\n  padding: 16px 24px;\n  font-family: Montserrat;\n  color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  position: relative;\n}\n.navbar .heading {\n  font-size: 24px;\n}\n.navbar .score {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.navbar .score p {\n  display: inline;\n}\n.navbar .score p + p {\n  margin-left: 32px;\n}\n.navbar .reset-btn {\n  background-color: #43a047;\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  right: 32px;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  bottom: -24px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAiUlEQVR4AWIYBaMA0E79wSAQxmEA3i04PK7ldk6XO5Q75A7lWm5ZkmMubfl5eOt7cv7ednKv79l+f/8Zjd4qAd3wMtRDBRRXXR0EwOiQgeBhm4H4OGoSEDz1GYjJSZuA4G3IQEw2KWidKW2XaPZZO//4kwt5T5zIaF9ztF9QXHRzPLbAq12yJJAfK5VoPxHfDsEAAAAASUVORK5CYII=);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 32px;\n  cursor: pointer;\n}\n.container {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-family: Montserrat;\n  padding: 0 10px;\n  min-width: 480px;\n}\n.container .snake-container {\n  margin: 100px auto 30px;\n  padding: 10px;\n  text-align: center;\n  width: 440px;\n  height: 440px;\n  background: white;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.container .snake-container .row {\n  height: 22px;\n}\n.container .snake-container .row .column {\n  height: 20px;\n  width: 20px;\n  display: inline-block;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.controller {\n  display: none;\n  position: relative;\n  height: 240px;\n  margin-bottom: 80px;\n  min-width: 500px;\n}\n.controller .arrow {\n  width: 80px;\n  height: 80px;\n  background-color: white;\n  box-sizing: border-box;\n  display: inline-block;\n  position: absolute;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  background-repeat: no-repeat;\n  background-position: 25px;\n}\n.controller .arrow-up {\n  position: relative;\n  display: block;\n  margin: auto;\n  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTIuMDAyIDQ5Mi4wMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5Mi4wMDIgNDkyLjAwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00ODQuMTM2LDMyOC40NzNMMjY0Ljk4OCwxMDkuMzI5Yy01LjA2NC01LjA2NC0xMS44MTYtNy44NDQtMTkuMTcyLTcuODQ0Yy03LjIwOCwwLTEzLjk2NCwyLjc4LTE5LjAyLDcuODQ0ICAgIEw3Ljg1MiwzMjguMjY1QzIuNzg4LDMzMy4zMzMsMCwzNDAuMDg5LDAsMzQ3LjI5N2MwLDcuMjA4LDIuNzg0LDEzLjk2OCw3Ljg1MiwxOS4wMzJsMTYuMTI0LDE2LjEyNCAgICBjNS4wNjQsNS4wNjQsMTEuODI0LDcuODYsMTkuMDMyLDcuODZzMTMuOTY0LTIuNzk2LDE5LjAzMi03Ljg2bDE4My44NTItMTgzLjg1MmwxODQuMDU2LDE4NC4wNjQgICAgYzUuMDY0LDUuMDYsMTEuODIsNy44NTIsMTkuMDMyLDcuODUyYzcuMjA4LDAsMTMuOTYtMi43OTIsMTkuMDI4LTcuODUybDE2LjEyOC0xNi4xMzIgICAgQzQ5NC42MjQsMzU2LjA0MSw0OTQuNjI0LDMzOC45NjUsNDg0LjEzNiwzMjguNDczeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);\n}\n.controller .arrow-left {\n  left: calc(50% - 120px);\n  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTIgNDkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTIgNDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE5OC42MDgsMjQ2LjEwNEwzODIuNjY0LDYyLjA0YzUuMDY4LTUuMDU2LDcuODU2LTExLjgxNiw3Ljg1Ni0xOS4wMjRjMC03LjIxMi0yLjc4OC0xMy45NjgtNy44NTYtMTkuMDMybC0xNi4xMjgtMTYuMTIgICAgQzM2MS40NzYsMi43OTIsMzU0LjcxMiwwLDM0Ny41MDQsMHMtMTMuOTY0LDIuNzkyLTE5LjAyOCw3Ljg2NEwxMDkuMzI4LDIyNy4wMDhjLTUuMDg0LDUuMDgtNy44NjgsMTEuODY4LTcuODQ4LDE5LjA4NCAgICBjLTAuMDIsNy4yNDgsMi43NiwxNC4wMjgsNy44NDgsMTkuMTEybDIxOC45NDQsMjE4LjkzMmM1LjA2NCw1LjA3MiwxMS44Miw3Ljg2NCwxOS4wMzIsNy44NjRjNy4yMDgsMCwxMy45NjQtMi43OTIsMTkuMDMyLTcuODY0ICAgIGwxNi4xMjQtMTYuMTJjMTAuNDkyLTEwLjQ5MiwxMC40OTItMjcuNTcyLDAtMzguMDZMMTk4LjYwOCwyNDYuMTA0eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);\n}\n.controller .arrow-right {\n  left: calc(50% + 40px);\n  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTIuMDA0IDQ5Mi4wMDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5Mi4wMDQgNDkyLjAwNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODIuNjc4LDIyNi44MDRMMTYzLjczLDcuODZDMTU4LjY2NiwyLjc5MiwxNTEuOTA2LDAsMTQ0LjY5OCwwcy0xMy45NjgsMi43OTItMTkuMDMyLDcuODZsLTE2LjEyNCwxNi4xMiAgICBjLTEwLjQ5MiwxMC41MDQtMTAuNDkyLDI3LjU3NiwwLDM4LjA2NEwyOTMuMzk4LDI0NS45bC0xODQuMDYsMTg0LjA2Yy01LjA2NCw1LjA2OC03Ljg2LDExLjgyNC03Ljg2LDE5LjAyOCAgICBjMCw3LjIxMiwyLjc5NiwxMy45NjgsNy44NiwxOS4wNGwxNi4xMjQsMTYuMTE2YzUuMDY4LDUuMDY4LDExLjgyNCw3Ljg2LDE5LjAzMiw3Ljg2czEzLjk2OC0yLjc5MiwxOS4wMzItNy44NkwzODIuNjc4LDI2NSAgICBjNS4wNzYtNS4wODQsNy44NjQtMTEuODcyLDcuODQ4LTE5LjA4OEMzOTAuNTQyLDIzOC42NjgsMzg3Ljc1NCwyMzEuODg0LDM4Mi42NzgsMjI2LjgwNHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);\n}\n.controller .arrow-down {\n  top: 160px;\n  left: calc(50% - 40px);\n  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTEuOTk2IDQ5MS45OTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MS45OTYgNDkxLjk5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00ODQuMTMyLDEyNC45ODZsLTE2LjExNi0xNi4yMjhjLTUuMDcyLTUuMDY4LTExLjgyLTcuODYtMTkuMDMyLTcuODZjLTcuMjA4LDAtMTMuOTY0LDIuNzkyLTE5LjAzNiw3Ljg2bC0xODMuODQsMTgzLjg0OCAgICBMNjIuMDU2LDEwOC41NTRjLTUuMDY0LTUuMDY4LTExLjgyLTcuODU2LTE5LjAyOC03Ljg1NnMtMTMuOTY4LDIuNzg4LTE5LjAzNiw3Ljg1NmwtMTYuMTIsMTYuMTI4ICAgIGMtMTAuNDk2LDEwLjQ4OC0xMC40OTYsMjcuNTcyLDAsMzguMDZsMjE5LjEzNiwyMTkuOTI0YzUuMDY0LDUuMDY0LDExLjgxMiw4LjYzMiwxOS4wODQsOC42MzJoMC4wODQgICAgYzcuMjEyLDAsMTMuOTYtMy41NzIsMTkuMDI0LTguNjMybDIxOC45MzItMjE5LjMyOGM1LjA3Mi01LjA2NCw3Ljg1Ni0xMi4wMTYsNy44NjQtMTkuMjI0ICAgIEM0OTEuOTk2LDEzNi45MDIsNDg5LjIwNCwxMzAuMDQ2LDQ4NC4xMzIsMTI0Ljk4NnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);\n}\n@media (orientation: portrait) {\n  .container .snake-container {\n    margin: 75px auto 30px;\n  }\n\n  .controller {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbmFrZS1ib2FyZC9EOlxcRmFpc2FsXFxHSVRcXGdhbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNuYWtlLWJvYXJkXFxzbmFrZS1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zbmFrZS1ib2FyZC9zbmFrZS1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSw2RUFBQTtFQUNBLGtCQUFBO0FDQ0Q7QURDQztFQUNDLGVBQUE7QUNDRjtBREVDO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FDQUY7QURFRTtFQUNDLGVBQUE7QUNBSDtBREVHO0VBQ0MsaUJBQUE7QUNBSjtBREtDO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkdBQUE7RUFDQSxhQUFBO0VBQ0EsaVRBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDSEY7QURPQTtFQUNDLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pEO0FETUM7RUFDQyx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw2RUFBQTtBQ0pGO0FETUU7RUFDQyxZQUFBO0FDSkg7QURNRztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ0pKO0FEVUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1BEO0FEU0M7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FDUEY7QURVQztFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrNUNBQUE7QUNSRjtBRFdDO0VBQ0MsdUJBQUE7RUFDQSxrM0NBQUE7QUNURjtBRFlDO0VBQ0Msc0JBQUE7RUFDQSwwM0NBQUE7QUNWRjtBRGFDO0VBQ0MsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsMDZDQUFBO0FDWEY7QURlQTtFQUVFO0lBQ0Msc0JBQUE7RUNiRDs7RURpQkQ7SUFDQyxjQUFBO0VDZEE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc25ha2UtYm9hcmQvc25ha2UtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0bWluLXdpZHRoOiA0NTJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiOGQ0O1xyXG5cdHBhZGRpbmc6IDE2cHggMjRweDtcclxuXHRmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdC5oZWFkaW5nIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRweDtcclxuXHR9XHJcblxyXG5cdC5zY29yZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHR0b3A6IDUwJTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuXHRcdHAge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmU7XHJcblxyXG5cdFx0XHQmICsgcCB7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMycHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5yZXNldC1idG4ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzQzYTA0NztcclxuXHRcdHdpZHRoOiA0OHB4O1xyXG5cdFx0aGVpZ2h0OiA0OHB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDMycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cdFx0Ym90dG9tOiAtMjRweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWtDQVFBQUFCTENWQVRBQUFBaVVsRVFWUjRBV0lZQmFNQTBFNzl3U0FReG1FQTNpMDRQSzdsZGs2WE81UTc1QTdsV201WmttTXViZmw1ZU90N2N2N2Vkbkt2NzlsK2YvOFpqZDRxQWQzd010UkRCUlJYWFIwRXdPaVFnZUJobTRINE9Hb1NFRHoxR1lqSlNadUE0RzNJUUV3MktXaWRLVzJYYVBaWk8vLzRrd3Q1VDV6SWFGOXp0RjlRWEhSelBMYkFxMTJ5SkpBZks1Vm9QeEhmRHNFQUFBQUFTVVZPUks1Q1lJST0pO1xyXG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogMzJweDtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuXHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0bWluLXdpZHRoOiA0ODBweDtcclxuXHJcblx0LnNuYWtlLWNvbnRhaW5lciB7XHJcblx0XHRtYXJnaW46IDEwMHB4IGF1dG8gMzBweDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR3aWR0aDogNDQwcHg7XHJcblx0XHRoZWlnaHQ6IDQ0MHB4O1xyXG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcblx0XHQucm93IHtcclxuXHRcdFx0aGVpZ2h0OiAyMnB4O1xyXG5cclxuXHRcdFx0LmNvbHVtbiB7XHJcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5jb250cm9sbGVyIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRoZWlnaHQ6IDI0MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblx0bWluLXdpZHRoOiA1MDBweDtcclxuXHJcblx0LmFycm93IHtcclxuXHRcdHdpZHRoOiA4MHB4O1xyXG5cdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDI1cHg7XHJcblx0fVxyXG5cclxuXHQuYXJyb3ctdXAge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO3V0Zjg7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRrdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpVEdGNVpYSmZNU0lnZUQwaU1IQjRJaUI1UFNJd2NIZ2lJSFpwWlhkQ2IzZzlJakFnTUNBME9USXVNREF5SURRNU1pNHdNRElpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRFE1TWk0d01ESWdORGt5TGpBd01qc2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpSUhkcFpIUm9QU0l6TW5CNElpQm9aV2xuYUhROUlqTXljSGdpUGdvOFp6NEtDVHhuUGdvSkNUeHdZWFJvSUdROUlrMDBPRFF1TVRNMkxETXlPQzQwTnpOTU1qWTBMams0T0N3eE1Ea3VNekk1WXkwMUxqQTJOQzAxTGpBMk5DMHhNUzQ0TVRZdE55NDRORFF0TVRrdU1UY3lMVGN1T0RRMFl5MDNMakl3T0N3d0xURXpMamsyTkN3eUxqYzRMVEU1TGpBeUxEY3VPRFEwSUNBZ0lFdzNMamcxTWl3ek1qZ3VNalkxUXpJdU56ZzRMRE16TXk0ek16TXNNQ3d6TkRBdU1EZzVMREFzTXpRM0xqSTVOMk13TERjdU1qQTRMREl1TnpnMExERXpMamsyT0N3M0xqZzFNaXd4T1M0d016SnNNVFl1TVRJMExERTJMakV5TkNBZ0lDQmpOUzR3TmpRc05TNHdOalFzTVRFdU9ESTBMRGN1T0RZc01Ua3VNRE15TERjdU9EWnpNVE11T1RZMExUSXVOemsyTERFNUxqQXpNaTAzTGpnMmJERTRNeTQ0TlRJdE1UZ3pMamcxTW13eE9EUXVNRFUyTERFNE5DNHdOalFnSUNBZ1l6VXVNRFkwTERVdU1EWXNNVEV1T0RJc055NDROVElzTVRrdU1ETXlMRGN1T0RVeVl6Y3VNakE0TERBc01UTXVPVFl0TWk0M09USXNNVGt1TURJNExUY3VPRFV5YkRFMkxqRXlPQzB4Tmk0eE16SWdJQ0FnUXpRNU5DNDJNalFzTXpVMkxqQTBNU3cwT1RRdU5qSTBMRE16T0M0NU5qVXNORGcwTGpFek5pd3pNamd1TkRjemVpSWdabWxzYkQwaUl6QXdNREF3TUNJdlBnb0pQQzluUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDand2YzNablBnbz0pO1xyXG5cdH1cclxuXHJcblx0LmFycm93LWxlZnQge1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSAxMjBweCk7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO3V0Zjg7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRrdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpVEdGNVpYSmZNU0lnZUQwaU1IQjRJaUI1UFNJd2NIZ2lJSFpwWlhkQ2IzZzlJakFnTUNBME9USWdORGt5SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0EwT1RJZ05Ea3lPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJZ2QybGtkR2c5SWpNeWNIZ2lJR2hsYVdkb2REMGlNekp3ZUNJK0NqeG5QZ29KUEdjK0Nna0pQSEJoZEdnZ1pEMGlUVEU1T0M0Mk1EZ3NNalEyTGpFd05Fd3pPREl1TmpZMExEWXlMakEwWXpVdU1EWTRMVFV1TURVMkxEY3VPRFUyTFRFeExqZ3hOaXczTGpnMU5pMHhPUzR3TWpSak1DMDNMakl4TWkweUxqYzRPQzB4TXk0NU5qZ3ROeTQ0TlRZdE1Ua3VNRE15YkMweE5pNHhNamd0TVRZdU1USWdJQ0FnUXpNMk1TNDBOellzTWk0M09USXNNelUwTGpjeE1pd3dMRE0wTnk0MU1EUXNNSE10TVRNdU9UWTBMREl1TnpreUxURTVMakF5T0N3M0xqZzJORXd4TURrdU16STRMREl5Tnk0d01EaGpMVFV1TURnMExEVXVNRGd0Tnk0NE5qZ3NNVEV1T0RZNExUY3VPRFE0TERFNUxqQTROQ0FnSUNCakxUQXVNRElzTnk0eU5EZ3NNaTQzTml3eE5DNHdNamdzTnk0NE5EZ3NNVGt1TVRFeWJESXhPQzQ1TkRRc01qRTRMamt6TW1NMUxqQTJOQ3cxTGpBM01pd3hNUzQ0TWl3M0xqZzJOQ3d4T1M0d016SXNOeTQ0TmpSak55NHlNRGdzTUN3eE15NDVOalF0TWk0M09USXNNVGt1TURNeUxUY3VPRFkwSUNBZ0lHd3hOaTR4TWpRdE1UWXVNVEpqTVRBdU5Ea3lMVEV3TGpRNU1pd3hNQzQwT1RJdE1qY3VOVGN5TERBdE16Z3VNRFpNTVRrNExqWXdPQ3d5TkRZdU1UQTBlaUlnWm1sc2JEMGlJekF3TURBd01DSXZQZ29KUEM5blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p3dmMzWm5QZ289KTtcclxuXHR9XHJcblxyXG5cdC5hcnJvdy1yaWdodCB7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSArIDQwcHgpO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4O2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01Ua3VNQzR3TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHRjVaWEpmTVNJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQTBPVEl1TURBMElEUTVNaTR3TURRaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURRNU1pNHdNRFFnTkRreUxqQXdORHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaUlIZHBaSFJvUFNJek1uQjRJaUJvWldsbmFIUTlJak15Y0hnaVBnbzhaejRLQ1R4blBnb0pDVHh3WVhSb0lHUTlJazB6T0RJdU5qYzRMREl5Tmk0NE1EUk1NVFl6TGpjekxEY3VPRFpETVRVNExqWTJOaXd5TGpjNU1pd3hOVEV1T1RBMkxEQXNNVFEwTGpZNU9Dd3djeTB4TXk0NU5qZ3NNaTQzT1RJdE1Ua3VNRE15TERjdU9EWnNMVEUyTGpFeU5Dd3hOaTR4TWlBZ0lDQmpMVEV3TGpRNU1pd3hNQzQxTURRdE1UQXVORGt5TERJM0xqVTNOaXd3TERNNExqQTJORXd5T1RNdU16azRMREkwTlM0NWJDMHhPRFF1TURZc01UZzBMakEyWXkwMUxqQTJOQ3cxTGpBMk9DMDNMamcyTERFeExqZ3lOQzAzTGpnMkxERTVMakF5T0NBZ0lDQmpNQ3czTGpJeE1pd3lMamM1Tml3eE15NDVOamdzTnk0NE5pd3hPUzR3Tkd3eE5pNHhNalFzTVRZdU1URTJZelV1TURZNExEVXVNRFk0TERFeExqZ3lOQ3czTGpnMkxERTVMakF6TWl3M0xqZzJjekV6TGprMk9DMHlMamM1TWl3eE9TNHdNekl0Tnk0NE5rd3pPREl1TmpjNExESTJOU0FnSUNCak5TNHdOell0TlM0d09EUXNOeTQ0TmpRdE1URXVPRGN5TERjdU9EUTRMVEU1TGpBNE9FTXpPVEF1TlRReUxESXpPQzQyTmpnc016ZzNMamMxTkN3eU16RXVPRGcwTERNNE1pNDJOemdzTWpJMkxqZ3dOSG9pSUdacGJHdzlJaU13TURBd01EQWlMejRLQ1R3dlp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOEwzTjJaejRLKTtcclxuXHR9XHJcblxyXG5cdC5hcnJvdy1kb3duIHtcclxuXHRcdHRvcDogMTYwcHg7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4O2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01Ua3VNQzR3TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHRjVaWEpmTVNJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQTBPVEV1T1RrMklEUTVNUzQ1T1RZaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURRNU1TNDVPVFlnTkRreExqazVOanNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaUlIZHBaSFJvUFNJek1uQjRJaUJvWldsbmFIUTlJak15Y0hnaVBnbzhaejRLQ1R4blBnb0pDVHh3WVhSb0lHUTlJazAwT0RRdU1UTXlMREV5TkM0NU9EWnNMVEUyTGpFeE5pMHhOaTR5TWpoakxUVXVNRGN5TFRVdU1EWTRMVEV4TGpneUxUY3VPRFl0TVRrdU1ETXlMVGN1T0RaakxUY3VNakE0TERBdE1UTXVPVFkwTERJdU56a3lMVEU1TGpBek5pdzNMamcyYkMweE9ETXVPRFFzTVRnekxqZzBPQ0FnSUNCTU5qSXVNRFUyTERFd09DNDFOVFJqTFRVdU1EWTBMVFV1TURZNExURXhMamd5TFRjdU9EVTJMVEU1TGpBeU9DMDNMamcxTm5NdE1UTXVPVFk0TERJdU56ZzRMVEU1TGpBek5pdzNMamcxTm13dE1UWXVNVElzTVRZdU1USTRJQ0FnSUdNdE1UQXVORGsyTERFd0xqUTRPQzB4TUM0ME9UWXNNamN1TlRjeUxEQXNNemd1TURac01qRTVMakV6Tml3eU1Ua3VPVEkwWXpVdU1EWTBMRFV1TURZMExERXhMamd4TWl3NExqWXpNaXd4T1M0d09EUXNPQzQyTXpKb01DNHdPRFFnSUNBZ1l6Y3VNakV5TERBc01UTXVPVFl0TXk0MU56SXNNVGt1TURJMExUZ3VOak15YkRJeE9DNDVNekl0TWpFNUxqTXlPR00xTGpBM01pMDFMakEyTkN3M0xqZzFOaTB4TWk0d01UWXNOeTQ0TmpRdE1Ua3VNakkwSUNBZ0lFTTBPVEV1T1RrMkxERXpOaTQ1TURJc05EZzVMakl3TkN3eE16QXVNRFEyTERRNE5DNHhNeklzTVRJMExqazRObm9pSUdacGJHdzlJaU13TURBd01EQWlMejRLQ1R3dlp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOEwzTjJaejRLKTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblx0LmNvbnRhaW5lciB7XHJcblx0XHQuc25ha2UtY29udGFpbmVyIHtcclxuXHRcdFx0bWFyZ2luOiA3NXB4IGF1dG8gMzBweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jb250cm9sbGVyIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxufVxyXG4iLCIubmF2YmFyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDQ1MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiOGQ0O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uYXZiYXIgLmhlYWRpbmcge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ubmF2YmFyIC5zY29yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubmF2YmFyIC5zY29yZSBwIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLm5hdmJhciAuc2NvcmUgcCArIHAge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbi5uYXZiYXIgLnJlc2V0LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0M2EwNDc7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm90dG9tOiAtMjRweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBa0NBUUFBQUJMQ1ZBVEFBQUFpVWxFUVZSNEFXSVlCYU1BMEU3OXdTQVF4bUVBM2kwNFBLN2xkazZYTzVRNzVBN2xXbTVaa21NdWJmbDVlT3Q3Y3Y3ZWRuS3Y3OWwrZi84WmpkNHFBZDN3TXRSREJSUlhYUjBFd09pUWdlQmhtNEg0T0dvU0VEejFHWWpKU1p1QTRHM0lRRXcyS1dpZEtXMlhhUFpaTy8vNGt3dDVUNXpJYUY5enRGOVFYSFJ6UExiQXExMnlKSkFmSzVWb1B4SGZEc0VBQUFBQVNVVk9SSzVDWUlJPSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAzMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBtaW4td2lkdGg6IDQ4MHB4O1xufVxuLmNvbnRhaW5lciAuc25ha2UtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQ0MHB4O1xuICBoZWlnaHQ6IDQ0MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uY29udGFpbmVyIC5zbmFrZS1jb250YWluZXIgLnJvdyB7XG4gIGhlaWdodDogMjJweDtcbn1cbi5jb250YWluZXIgLnNuYWtlLWNvbnRhaW5lciAucm93IC5jb2x1bW4ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNvbnRyb2xsZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIG1pbi13aWR0aDogNTAwcHg7XG59XG4uY29udHJvbGxlciAuYXJyb3cge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjVweDtcbn1cbi5jb250cm9sbGVyIC5hcnJvdy11cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4O2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01Ua3VNQzR3TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHRjVaWEpmTVNJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQTBPVEl1TURBeUlEUTVNaTR3TURJaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURRNU1pNHdNRElnTkRreUxqQXdNanNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaUlIZHBaSFJvUFNJek1uQjRJaUJvWldsbmFIUTlJak15Y0hnaVBnbzhaejRLQ1R4blBnb0pDVHh3WVhSb0lHUTlJazAwT0RRdU1UTTJMRE15T0M0ME56Tk1NalkwTGprNE9Dd3hNRGt1TXpJNVl5MDFMakEyTkMwMUxqQTJOQzB4TVM0NE1UWXROeTQ0TkRRdE1Ua3VNVGN5TFRjdU9EUTBZeTAzTGpJd09Dd3dMVEV6TGprMk5Dd3lMamM0TFRFNUxqQXlMRGN1T0RRMElDQWdJRXczTGpnMU1pd3pNamd1TWpZMVF6SXVOemc0TERNek15NHpNek1zTUN3ek5EQXVNRGc1TERBc016UTNMakk1TjJNd0xEY3VNakE0TERJdU56ZzBMREV6TGprMk9DdzNMamcxTWl3eE9TNHdNekpzTVRZdU1USTBMREUyTGpFeU5DQWdJQ0JqTlM0d05qUXNOUzR3TmpRc01URXVPREkwTERjdU9EWXNNVGt1TURNeUxEY3VPRFp6TVRNdU9UWTBMVEl1TnprMkxERTVMakF6TWkwM0xqZzJiREU0TXk0NE5USXRNVGd6TGpnMU1td3hPRFF1TURVMkxERTROQzR3TmpRZ0lDQWdZelV1TURZMExEVXVNRFlzTVRFdU9ESXNOeTQ0TlRJc01Ua3VNRE15TERjdU9EVXlZemN1TWpBNExEQXNNVE11T1RZdE1pNDNPVElzTVRrdU1ESTRMVGN1T0RVeWJERTJMakV5T0MweE5pNHhNeklnSUNBZ1F6UTVOQzQyTWpRc016VTJMakEwTVN3ME9UUXVOakkwTERNek9DNDVOalVzTkRnMExqRXpOaXd6TWpndU5EY3plaUlnWm1sc2JEMGlJekF3TURBd01DSXZQZ29KUEM5blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p3dmMzWm5QZ289KTtcbn1cbi5jb250cm9sbGVyIC5hcnJvdy1sZWZ0IHtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMjBweCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7dXRmODtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZ284SVMwdElFZGxibVZ5WVhSdmNqb2dRV1J2WW1VZ1NXeHNkWE4wY21GMGIzSWdNVGt1TUM0d0xDQlRWa2NnUlhod2IzSjBJRkJzZFdjdFNXNGdMaUJUVmtjZ1ZtVnljMmx2YmpvZ05pNHdNQ0JDZFdsc1pDQXdLU0FnTFMwK0NqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlUR0Y1WlhKZk1TSWdlRDBpTUhCNElpQjVQU0l3Y0hnaUlIWnBaWGRDYjNnOUlqQWdNQ0EwT1RJZ05Ea3lJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQTBPVElnTkRreU95SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0lnZDJsa2RHZzlJak15Y0hnaUlHaGxhV2RvZEQwaU16SndlQ0krQ2p4blBnb0pQR2MrQ2drSlBIQmhkR2dnWkQwaVRURTVPQzQyTURnc01qUTJMakV3TkV3ek9ESXVOalkwTERZeUxqQTBZelV1TURZNExUVXVNRFUyTERjdU9EVTJMVEV4TGpneE5pdzNMamcxTmkweE9TNHdNalJqTUMwM0xqSXhNaTB5TGpjNE9DMHhNeTQ1TmpndE55NDROVFl0TVRrdU1ETXliQzB4Tmk0eE1qZ3RNVFl1TVRJZ0lDQWdRek0yTVM0ME56WXNNaTQzT1RJc016VTBMamN4TWl3d0xETTBOeTQxTURRc01ITXRNVE11T1RZMExESXVOemt5TFRFNUxqQXlPQ3czTGpnMk5Fd3hNRGt1TXpJNExESXlOeTR3TURoakxUVXVNRGcwTERVdU1EZ3ROeTQ0Tmpnc01URXVPRFk0TFRjdU9EUTRMREU1TGpBNE5DQWdJQ0JqTFRBdU1ESXNOeTR5TkRnc01pNDNOaXd4TkM0d01qZ3NOeTQ0TkRnc01Ua3VNVEV5YkRJeE9DNDVORFFzTWpFNExqa3pNbU0xTGpBMk5DdzFMakEzTWl3eE1TNDRNaXczTGpnMk5Dd3hPUzR3TXpJc055NDROalJqTnk0eU1EZ3NNQ3d4TXk0NU5qUXRNaTQzT1RJc01Ua3VNRE15TFRjdU9EWTBJQ0FnSUd3eE5pNHhNalF0TVRZdU1USmpNVEF1TkRreUxURXdMalE1TWl3eE1DNDBPVEl0TWpjdU5UY3lMREF0TXpndU1EWk1NVGs0TGpZd09Dd3lORFl1TVRBMGVpSWdabWxzYkQwaUl6QXdNREF3TUNJdlBnb0pQQzluUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDand2YzNablBnbz0pO1xufVxuLmNvbnRyb2xsZXIgLmFycm93LXJpZ2h0IHtcbiAgbGVmdDogY2FsYyg1MCUgKyA0MHB4KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4O2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01Ua3VNQzR3TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHRjVaWEpmTVNJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQTBPVEl1TURBMElEUTVNaTR3TURRaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURRNU1pNHdNRFFnTkRreUxqQXdORHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaUlIZHBaSFJvUFNJek1uQjRJaUJvWldsbmFIUTlJak15Y0hnaVBnbzhaejRLQ1R4blBnb0pDVHh3WVhSb0lHUTlJazB6T0RJdU5qYzRMREl5Tmk0NE1EUk1NVFl6TGpjekxEY3VPRFpETVRVNExqWTJOaXd5TGpjNU1pd3hOVEV1T1RBMkxEQXNNVFEwTGpZNU9Dd3djeTB4TXk0NU5qZ3NNaTQzT1RJdE1Ua3VNRE15TERjdU9EWnNMVEUyTGpFeU5Dd3hOaTR4TWlBZ0lDQmpMVEV3TGpRNU1pd3hNQzQxTURRdE1UQXVORGt5TERJM0xqVTNOaXd3TERNNExqQTJORXd5T1RNdU16azRMREkwTlM0NWJDMHhPRFF1TURZc01UZzBMakEyWXkwMUxqQTJOQ3cxTGpBMk9DMDNMamcyTERFeExqZ3lOQzAzTGpnMkxERTVMakF5T0NBZ0lDQmpNQ3czTGpJeE1pd3lMamM1Tml3eE15NDVOamdzTnk0NE5pd3hPUzR3Tkd3eE5pNHhNalFzTVRZdU1URTJZelV1TURZNExEVXVNRFk0TERFeExqZ3lOQ3czTGpnMkxERTVMakF6TWl3M0xqZzJjekV6TGprMk9DMHlMamM1TWl3eE9TNHdNekl0Tnk0NE5rd3pPREl1TmpjNExESTJOU0FnSUNCak5TNHdOell0TlM0d09EUXNOeTQ0TmpRdE1URXVPRGN5TERjdU9EUTRMVEU1TGpBNE9FTXpPVEF1TlRReUxESXpPQzQyTmpnc016ZzNMamMxTkN3eU16RXVPRGcwTERNNE1pNDJOemdzTWpJMkxqZ3dOSG9pSUdacGJHdzlJaU13TURBd01EQWlMejRLQ1R3dlp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOEwzTjJaejRLKTtcbn1cbi5jb250cm9sbGVyIC5hcnJvdy1kb3duIHtcbiAgdG9wOiAxNjBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4O2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01Ua3VNQzR3TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHRjVaWEpmTVNJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQTBPVEV1T1RrMklEUTVNUzQ1T1RZaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURRNU1TNDVPVFlnTkRreExqazVOanNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaUlIZHBaSFJvUFNJek1uQjRJaUJvWldsbmFIUTlJak15Y0hnaVBnbzhaejRLQ1R4blBnb0pDVHh3WVhSb0lHUTlJazAwT0RRdU1UTXlMREV5TkM0NU9EWnNMVEUyTGpFeE5pMHhOaTR5TWpoakxUVXVNRGN5TFRVdU1EWTRMVEV4TGpneUxUY3VPRFl0TVRrdU1ETXlMVGN1T0RaakxUY3VNakE0TERBdE1UTXVPVFkwTERJdU56a3lMVEU1TGpBek5pdzNMamcyYkMweE9ETXVPRFFzTVRnekxqZzBPQ0FnSUNCTU5qSXVNRFUyTERFd09DNDFOVFJqTFRVdU1EWTBMVFV1TURZNExURXhMamd5TFRjdU9EVTJMVEU1TGpBeU9DMDNMamcxTm5NdE1UTXVPVFk0TERJdU56ZzRMVEU1TGpBek5pdzNMamcxTm13dE1UWXVNVElzTVRZdU1USTRJQ0FnSUdNdE1UQXVORGsyTERFd0xqUTRPQzB4TUM0ME9UWXNNamN1TlRjeUxEQXNNemd1TURac01qRTVMakV6Tml3eU1Ua3VPVEkwWXpVdU1EWTBMRFV1TURZMExERXhMamd4TWl3NExqWXpNaXd4T1M0d09EUXNPQzQyTXpKb01DNHdPRFFnSUNBZ1l6Y3VNakV5TERBc01UTXVPVFl0TXk0MU56SXNNVGt1TURJMExUZ3VOak15YkRJeE9DNDVNekl0TWpFNUxqTXlPR00xTGpBM01pMDFMakEyTkN3M0xqZzFOaTB4TWk0d01UWXNOeTQ0TmpRdE1Ua3VNakkwSUNBZ0lFTTBPVEV1T1RrMkxERXpOaTQ1TURJc05EZzVMakl3TkN3eE16QXVNRFEyTERRNE5DNHhNeklzTVRJMExqazRObm9pSUdacGJHdzlJaU13TURBd01EQWlMejRLQ1R3dlp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOFp6NEtQQzluUGdvOEwzTjJaejRLKTtcbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmNvbnRhaW5lciAuc25ha2UtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDc1cHggYXV0byAzMHB4O1xuICB9XG5cbiAgLmNvbnRyb2xsZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/snake-board/snake-board.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/snake-board/snake-board.component.ts ***!
  \*****************************************************************/
/*! exports provided: SnakeBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeBoardComponent", function() { return SnakeBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var BOARD_SIZE = 20;
var COLORS = {
    HEAD: '#01579B',
    BODY: '#4FC3F7',
    DEFAULT: '#B2EBF2',
    GAME_OVER: '#D24D57',
    FRUIT: '#FF5722'
};
var CONTROLS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
var SnakeBoardComponent = /** @class */ (function () {
    function SnakeBoardComponent() {
        this.board = [];
        this.obstacles = [];
        this.score = 0;
        this.highscore = '0';
        this.fruit = { x: -1, y: -1 };
        this.snake = {
            direction: CONTROLS.LEFT,
            parts: [{ x: -1, y: -1 }]
        };
        document.title = 'Snake';
        this.highscore = localStorage.getItem('snakeScore') || '0';
        this.setBoard();
    }
    SnakeBoardComponent.prototype.setBoard = function () {
        this.board = [];
        for (var i = 0; i < BOARD_SIZE; i++) {
            this.board[i] = [];
            for (var j = 0; j < BOARD_SIZE; j++) {
                this.board[i][j] = false;
            }
        }
    };
    SnakeBoardComponent.prototype.handleKeyboardEvents = function (event) {
        if (event.keyCode === CONTROLS.LEFT && this.snake.direction !== CONTROLS.RIGHT) {
            this.tempDirection = CONTROLS.LEFT;
        }
        else if (event.keyCode === CONTROLS.UP && this.snake.direction !== CONTROLS.DOWN) {
            this.tempDirection = CONTROLS.UP;
        }
        else if (event.keyCode === CONTROLS.RIGHT && this.snake.direction !== CONTROLS.LEFT) {
            this.tempDirection = CONTROLS.RIGHT;
        }
        else if (event.keyCode === CONTROLS.DOWN && this.snake.direction !== CONTROLS.UP) {
            this.tempDirection = CONTROLS.DOWN;
        }
        this.preventDefaultForArrowKeys(event);
    };
    SnakeBoardComponent.prototype.preventDefaultForArrowKeys = function (event) {
        if (event.keyCode === CONTROLS.DOWN || event.keyCode === CONTROLS.UP || event.keyCode === CONTROLS.RIGHT || event.keyCode === CONTROLS.LEFT) {
            event.preventDefault();
        }
    };
    SnakeBoardComponent.prototype.navigateSnake = function (direction) {
        this.handleKeyboardEvents({ keyCode: direction });
    };
    SnakeBoardComponent.prototype.setColors = function (column, row) {
        if (this.isGameOver) {
            return COLORS.GAME_OVER;
        }
        else if (this.fruit.x === row && this.fruit.y === column) {
            return COLORS.FRUIT;
        }
        else if (this.snake.parts[0].x === row && this.snake.parts[0].y === column) {
            return COLORS.HEAD;
        }
        else if (this.board[column][row]) {
            return COLORS.BODY;
        }
        return COLORS.DEFAULT;
    };
    SnakeBoardComponent.prototype.updatePositions = function () {
        var newHead = this.repositionHead();
        var me = this;
        if (this.boardCollision(newHead)) {
            return this.gameOver();
        }
        if (this.selfCollision(newHead)) {
            return this.gameOver();
        }
        else if (this.fruitCollision(newHead)) {
            this.eatFruit();
        }
        var oldTail = this.snake.parts.pop();
        this.board[oldTail.y][oldTail.x] = false;
        this.snake.parts.unshift(newHead);
        this.board[newHead.y][newHead.x] = true;
        this.snake.direction = this.tempDirection;
        this.positionTimer = setTimeout(function () {
            me.updatePositions();
        }, me.interval);
    };
    SnakeBoardComponent.prototype.repositionHead = function () {
        var newHead = Object.assign({}, this.snake.parts[0]);
        if (this.tempDirection === CONTROLS.LEFT) {
            newHead.x -= 1;
        }
        else if (this.tempDirection === CONTROLS.RIGHT) {
            newHead.x += 1;
        }
        else if (this.tempDirection === CONTROLS.UP) {
            newHead.y -= 1;
        }
        else if (this.tempDirection === CONTROLS.DOWN) {
            newHead.y += 1;
        }
        return newHead;
    };
    SnakeBoardComponent.prototype.randomNumber = function () {
        return Math.floor(Math.random() * BOARD_SIZE);
    };
    SnakeBoardComponent.prototype.boardCollision = function (part) {
        return part.x === BOARD_SIZE || part.x === -1 || part.y === BOARD_SIZE || part.y === -1;
    };
    SnakeBoardComponent.prototype.selfCollision = function (part) {
        return this.board[part.y][part.x];
    };
    SnakeBoardComponent.prototype.fruitCollision = function (part) {
        return this.fruit.x === part.x && this.fruit.y === part.y;
    };
    SnakeBoardComponent.prototype.resetFruit = function () {
        var x = this.randomNumber(), y = this.randomNumber();
        if (this.board[y][x]) {
            return this.resetFruit();
        }
        this.fruit = {
            x: x,
            y: y
        };
    };
    SnakeBoardComponent.prototype.eatFruit = function () {
        this.score++;
        var tail = Object.assign({}, this.snake.parts[this.snake.parts.length - 1]);
        this.snake.parts.push(tail);
        this.resetFruit();
        if (this.score % 3 === 0) {
            this.interval -= 15;
        }
    };
    SnakeBoardComponent.prototype.gameOver = function () {
        this.highscore = this.score > +this.highscore ? this.score.toString() : this.highscore;
        localStorage.setItem('snakeScore', this.highscore);
        this.isGameOver = true;
        this.gameStarted = false;
        this.setBoard();
    };
    SnakeBoardComponent.prototype.newGame = function () {
        this.resetBoard();
        clearTimeout(this.positionTimer);
        this.isGameOver = false;
        this.gameStarted = true;
        this.score = 0;
        this.tempDirection = CONTROLS.LEFT;
        this.interval = 300;
        this.snake = {
            direction: CONTROLS.LEFT,
            parts: []
        };
        for (var i = 0; i < 3; i++) {
            this.snake.parts.push({ x: 8 + i, y: 8 });
        }
        this.resetFruit();
        this.updatePositions();
    };
    SnakeBoardComponent.prototype.resetBoard = function () {
        for (var i = 0; i < BOARD_SIZE; i++) {
            for (var j = 0; j < BOARD_SIZE; j++) {
                this.board[i][j] = false;
            }
        }
    };
    SnakeBoardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snake-board',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./snake-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/snake-board/snake-board.component.html")).default,
            host: {
                '(document:keydown)': 'handleKeyboardEvents($event)'
            },
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./snake-board.component.scss */ "./src/app/components/snake-board/snake-board.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SnakeBoardComponent);
    return SnakeBoardComponent;
}());



/***/ }),

/***/ "./src/app/components/sorting-algorithm/algorithm.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sorting-algorithm/algorithm.ts ***!
  \***********************************************************/
/*! exports provided: HeapSort, QuickSort, MergeSort, BubbleSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeapSort", function() { return HeapSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickSort", function() { return QuickSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeSort", function() { return MergeSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleSort", function() { return BubbleSort; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function HeapSort(that) {
    var arrLength;
    var input = JSON.parse(JSON.stringify(that.sortingData.map(function (item) { return item.height; })));
    var counter = 200;
    function maxHeap(input, index) {
        var left = 2 * index + 1;
        var right = 2 * index + 2;
        var max = index;
        (left < arrLength && input[left] > input[max]) && (max = left);
        (right < arrLength && input[right] > input[max]) && (max = right);
        if (max != index) {
            swap(input, index, max);
            maxHeap(input, max);
        }
    }
    function swap(input, indexA, indexB) {
        var _a;
        counter += 200;
        that.changeColor(that, indexA, indexB, counter);
        _a = [input[indexB], input[indexA]], input[indexA] = _a[0], input[indexB] = _a[1];
    }
    arrLength = input.length;
    for (var i = Math.floor(arrLength / 2); i >= 0; i -= 1)
        maxHeap(input, i);
    for (var i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        arrLength--;
        maxHeap(input, 0);
    }
}
function QuickSort(that) {
    var input = JSON.parse(JSON.stringify(that.sortingData));
    var counter = 200;
    console.log(input);
    function sort(input) {
        console.log(input);
        if (input.length <= 1) {
            return input;
        }
        else {
            var leftArr = [];
            var rightArr = [];
            var newArr = [];
            var pivot = input.pop();
            for (var i = 0; i < input.length; i++) {
                if (input[i].height <= pivot.height) {
                    leftArr.push(input[i]);
                }
                else {
                    rightArr.push(input[i]);
                }
                // console.log(leftArr, rightArr);
            }
            return newArr.concat(sort(leftArr), pivot, sort(rightArr));
        }
    }
    return sort(input);
}
function MergeSort(that) {
    var input = that.sortingData;
    var counter = 200;
    function sort(input) {
        if (input.length <= 1)
            return input;
        var middle = Math.floor(input.length / 2);
        var left = input.slice(0, middle);
        var right = input.slice(middle);
        return merge(sort(left), sort(right));
    }
    function merge(left, right) {
        var resultArray = [], leftIndex = 0, rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex].height < right[rightIndex].height) {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            }
            else {
                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
        }
        return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
    return sort(input);
}
function BubbleSort(that) {
    var input = JSON.parse(JSON.stringify(that.sortingData.map(function (item) { return item.height; })));
    var counter = 200;
    function swap(arr, indexA, indexB) {
        var _a;
        counter += 200;
        that.changeColor(that, indexA, indexB, counter);
        _a = [arr[indexB], arr[indexA]], arr[indexA] = _a[0], arr[indexB] = _a[1];
    }
    function sort(arr) {
        for (var i = 0; i < arr.length; i++)
            for (var j = 0; j < (arr.length - i); j++)
                if (arr[j] > arr[j + 1])
                    swap(arr, j, j + 1);
        return arr;
    }
    sort(input);
}


/***/ }),

/***/ "./src/app/components/sorting-algorithm/sorting-algorithm.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/sorting-algorithm/sorting-algorithm.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  position: relative;\n  height: 60px;\n  width: 100%;\n  background-color: #00b8d4;\n  padding: 0 24px;\n  line-height: 60px;\n  box-sizing: border-box;\n  font-family: Montserrat;\n  color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.navbar .heading {\n  font-size: 24px;\n  font-weight: bold;\n  display: inline-block;\n  vertical-align: middle;\n}\n.navbar .play-btn {\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  right: 32px;\n  bottom: -24px;\n  border: 0;\n  outline: none;\n  border-radius: 50%;\n  background-color: #018da2;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n.navbar .play-btn:after {\n  content: \"\";\n  position: absolute;\n  border-left: 15px solid white;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  left: 54%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.navbar .play-btn:disabled {\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n  cursor: default;\n}\n.navbar .main-content {\n  display: inline-block;\n  margin: auto;\n  text-align: center;\n  width: 70%;\n}\n.navbar .main-content .change-size {\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  line-height: 30px;\n  text-align: center;\n  margin-right: 40px;\n}\n.navbar .main-content .change-size label {\n  font-size: 14px;\n  font-weight: 600;\n}\n.navbar .main-content .change-size #change-slider {\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n  position: relative;\n  height: 24px;\n  width: 90%;\n  background-color: transparent;\n  display: block;\n  margin: auto;\n  cursor: pointer;\n}\n.navbar .main-content .change-size #change-slider::-webkit-slider-runnable-track {\n  border-radius: 1px;\n  width: 100%;\n  height: 2px;\n  background-color: rgba(1, 141, 162, 0.5);\n}\n.navbar .main-content .change-size #change-slider::-webkit-slider-thumb {\n  appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 50%;\n  height: 2px;\n  width: 2px;\n  background-color: white;\n  transform: scale(6, 6);\n  -webkit-transition: box-shadow 0.2s;\n  transition: box-shadow 0.2s;\n}\n.navbar .main-content .change-size #change-slider:hover::-webkit-slider-thumb {\n  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);\n}\n.navbar .main-content .change-size #change-slider:focus {\n  outline: none;\n}\n.navbar .main-content .change-size #change-slider:disabled {\n  cursor: default;\n  opacity: 0.4;\n}\n.navbar .main-content .change-size #change-slider:disabled::-webkit-slider-thumb {\n  background-color: #555;\n  color: transparent;\n  box-shadow: 0 0 0 1px transparent;\n  transform: scale(4, 4);\n}\n.navbar .main-content .change-size #change-slider:disabled::-webkit-slider-runnable-track {\n  background-color: #aaa;\n}\n.navbar .main-content .change-size #change-slider:disabled:hover {\n  box-shadow: none;\n}\n.navbar .main-content .algo-name {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 26px;\n  width: 240px;\n  text-align: center;\n}\n.navbar .main-content .algo-name div {\n  display: inline-block;\n  width: 50%;\n  height: 50%;\n  cursor: pointer;\n}\n.navbar .main-content .algo-name div.selected {\n  font-weight: bold;\n  cursor: default;\n  background-color: #018da2;\n  color: #fff;\n  border-radius: 4px;\n}\n.playground {\n  height: calc(100vh - 60px);\n  display: flex;\n  justify-content: center;\n}\n.playground .element {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3J0aW5nLWFsZ29yaXRobS9EOlxcRmFpc2FsXFxHSVRcXGdhbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNvcnRpbmctYWxnb3JpdGhtXFxzb3J0aW5nLWFsZ29yaXRobS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zb3J0aW5nLWFsZ29yaXRobS9zb3J0aW5nLWFsZ29yaXRobS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkVBQUE7QUNIRDtBREtDO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0hGO0FETUM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2R0FBQTtFQUNBLGVBQUE7QUNKRjtBRE1FO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQ0pIO0FET0U7RUFDQyw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsZUFBQTtBQ0xIO0FEU0M7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNQRjtBRFNFO0VBQ0MsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQSDtBRFNHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FDUEo7QURVRztFQUNDLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1JKO0FEVUk7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBckZpQjtBQzZFdEI7QURXSTtFQUNDLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQWpHVTtFQWtHVixzQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUNUTDtBRFlJO0VBQ0MsOENBQUE7QUNWTDtBRGFJO0VBQ0MsYUFBQTtBQ1hMO0FEY0k7RUFDQyxlQUFBO0VBQ0EsWUFBQTtBQ1pMO0FEY0s7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBQ1pOO0FEZUs7RUFDQyxzQkFBQTtBQ2JOO0FEZ0JLO0VBQ0MsZ0JBQUE7QUNkTjtBRG9CRTtFQUNDLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2xCSDtBRG9CRztFQUNDLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDbEJKO0FEb0JJO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNsQkw7QUQ0QkE7RUFDQywwQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQzFCRDtBRDRCQztFQUNDLGdCQUFBO0FDMUJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb3J0aW5nLWFsZ29yaXRobS9zb3J0aW5nLWFsZ29yaXRobS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzbGlkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJHNsaWRlci1ob3Zlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4kc2xpZGVyLWNpcmNsZS1jb2xvcjogcmdiYSgxLCAxNDEsIDE2MiwgMC41KTtcclxuXHJcbi5uYXZiYXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwYjhkNDtcclxuXHRwYWRkaW5nOiAwIDI0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcblx0LmhlYWRpbmcge1xyXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdH1cclxuXHJcblx0LnBsYXktYnRuIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiA0OHB4O1xyXG5cdFx0aGVpZ2h0OiA0OHB4O1xyXG5cdFx0cmlnaHQ6IDMycHg7XHJcblx0XHRib3R0b206IC0yNHB4O1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMThkYTI7XHJcblx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHdoaXRlO1xyXG5cdFx0XHRib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdFx0XHRsZWZ0OiA1NCU7XHJcblx0XHRcdHRvcDogNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHRcdH1cclxuXHJcblx0XHQmOmRpc2FibGVkIHtcclxuXHRcdFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XHJcblx0XHRcdGN1cnNvcjogZGVmYXVsdDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5tYWluLWNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDcwJTtcclxuXHJcblx0XHQuY2hhbmdlLXNpemUge1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG5cclxuXHRcdFx0bGFiZWwge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQjY2hhbmdlLXNsaWRlciB7XHJcblx0XHRcdFx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHRcdFx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdGhlaWdodDogMjRweDtcclxuXHRcdFx0XHR3aWR0aDogOTAlO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cdFx0XHRcdCY6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDFweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAycHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkc2xpZGVyLWNpcmNsZS1jb2xvcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuXHRcdFx0XHRcdGFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRcdFx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDJweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAycHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkc2xpZGVyLWNvbG9yO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSg2LCA2KTtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCY6aG92ZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAwIDJweCAkc2xpZGVyLWhvdmVyLWNvbG9yO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Jjpmb2N1cyB7XHJcblx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JjpkaXNhYmxlZCB7XHJcblx0XHRcdFx0XHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjQ7XHJcblxyXG5cdFx0XHRcdFx0Jjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAwIDFweCB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSg0LCA0KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNhYWE7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmFsZ28tbmFtZSB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcblx0XHRcdHdpZHRoOiAyNDBweDtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHRcdFx0ZGl2IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdFx0XHRoZWlnaHQ6IDUwJTtcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cdFx0XHRcdCYuc2VsZWN0ZWQge1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4ZGEyO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5kaXNhYmxlZCB7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ucGxheWdyb3VuZCB7XHJcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblx0LmVsZW1lbnQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHR9XHJcbn1cclxuIiwiLm5hdmJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjhkNDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5uYXZiYXIgLmhlYWRpbmcge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubmF2YmFyIC5wbGF5LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcmlnaHQ6IDMycHg7XG4gIGJvdHRvbTogLTI0cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4ZGEyO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyIC5wbGF5LWJ0bjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDU0JTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm5hdmJhciAucGxheS1idG46ZGlzYWJsZWQge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLm5hdmJhciAubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDcwJTtcbn1cbi5uYXZiYXIgLm1haW4tY29udGVudCAuY2hhbmdlLXNpemUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLm5hdmJhciAubWFpbi1jb250ZW50IC5jaGFuZ2Utc2l6ZSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5uYXZiYXIgLm1haW4tY29udGVudCAuY2hhbmdlLXNpemUgI2NoYW5nZS1zbGlkZXIge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhciAubWFpbi1jb250ZW50IC5jaGFuZ2Utc2l6ZSAjY2hhbmdlLXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxNDEsIDE2MiwgMC41KTtcbn1cbi5uYXZiYXIgLm1haW4tY29udGVudCAuY2hhbmdlLXNpemUgI2NoYW5nZS1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDYsIDYpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG59XG4ubmF2YmFyIC5tYWluLWNvbnRlbnQgLmNoYW5nZS1zaXplICNjaGFuZ2Utc2xpZGVyOmhvdmVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG4ubmF2YmFyIC5tYWluLWNvbnRlbnQgLmNoYW5nZS1zaXplICNjaGFuZ2Utc2xpZGVyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uYXZiYXIgLm1haW4tY29udGVudCAuY2hhbmdlLXNpemUgI2NoYW5nZS1zbGlkZXI6ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5uYXZiYXIgLm1haW4tY29udGVudCAuY2hhbmdlLXNpemUgI2NoYW5nZS1zbGlkZXI6ZGlzYWJsZWQ6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdHJhbnNwYXJlbnQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoNCwgNCk7XG59XG4ubmF2YmFyIC5tYWluLWNvbnRlbnQgLmNoYW5nZS1zaXplICNjaGFuZ2Utc2xpZGVyOmRpc2FibGVkOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG59XG4ubmF2YmFyIC5tYWluLWNvbnRlbnQgLmNoYW5nZS1zaXplICNjaGFuZ2Utc2xpZGVyOmRpc2FibGVkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5uYXZiYXIgLm1haW4tY29udGVudCAuYWxnby1uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmF2YmFyIC5tYWluLWNvbnRlbnQgLmFsZ28tbmFtZSBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyIC5tYWluLWNvbnRlbnQgLmFsZ28tbmFtZSBkaXYuc2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4ZGEyO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnBsYXlncm91bmQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucGxheWdyb3VuZCAuZWxlbWVudCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/sorting-algorithm/sorting-algorithm.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sorting-algorithm/sorting-algorithm.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SortingAlgorithmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingAlgorithmComponent", function() { return SortingAlgorithmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _algorithm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithm */ "./src/app/components/sorting-algorithm/algorithm.ts");



var defaultColor = '#febc0a';
var activeColor = '#b17e00';
var SortingAlgorithmComponent = /** @class */ (function () {
    function SortingAlgorithmComponent(ref) {
        this.ref = ref;
        this.sortingData = [];
        this.currentAlgo = 0;
        this.isSorted = false;
        document.title = 'Sorting Algorithm';
        this.sortingData.length = 29;
        this.setInitialHeight();
    }
    SortingAlgorithmComponent.prototype.onSliderChange = function (value) {
        this.sortingData.length = value;
        this.setInitialHeight();
        this.isSorted = false;
    };
    SortingAlgorithmComponent.prototype.selectAlgo = function (event, index) {
        var target = event.target;
        Array.from(target.parentElement.children).forEach(function (item) { item.classList.remove('selected'); });
        target.classList.add('selected');
        this.currentAlgo = index;
        this.isSorted = false;
    };
    SortingAlgorithmComponent.prototype.setInitialHeight = function () {
        for (var index = 0; index < this.sortingData.length; index++) {
            var height = Math.ceil(Math.random() * (window.innerHeight - 80));
            if (this.sortingData.indexOf(height) === -1) {
                this.sortingData[index] = { height: height, color: defaultColor };
            }
            else {
                index--;
            }
        }
    };
    SortingAlgorithmComponent.prototype.setWidth = function () {
        return window.innerWidth * 0.6 / this.sortingData.length + 'px';
    };
    SortingAlgorithmComponent.prototype.changeColor = function (that, indexA, indexB, counter) {
        (function (that, indexA, indexB) {
            setTimeout(function () {
                var _a;
                setTimeout(function () {
                    that.sortingData[indexA].color = defaultColor;
                    that.sortingData[indexB].color = defaultColor;
                    that.ref.detectChanges();
                }, 200);
                that.sortingData[indexA].color = activeColor;
                that.sortingData[indexB].color = activeColor;
                _a = [that.sortingData[indexB].height, that.sortingData[indexA].height], that.sortingData[indexA].height = _a[0], that.sortingData[indexB].height = _a[1];
                that.ref.detectChanges();
            }, counter);
        })(that, indexA, indexB);
    };
    SortingAlgorithmComponent.prototype.sortArray = function (event) {
        if (!this.isSorted) {
            this.isSorted = true;
            switch (this.currentAlgo) {
                case 0:
                    Object(_algorithm__WEBPACK_IMPORTED_MODULE_2__["HeapSort"])(this);
                    break;
                case 1:
                    this.sortingData = Object(_algorithm__WEBPACK_IMPORTED_MODULE_2__["QuickSort"])(this);
                    break;
                case 2:
                    this.sortingData = Object(_algorithm__WEBPACK_IMPORTED_MODULE_2__["MergeSort"])(this);
                    break;
                case 3: Object(_algorithm__WEBPACK_IMPORTED_MODULE_2__["BubbleSort"])(this);
            }
        }
    };
    SortingAlgorithmComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('playground'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SortingAlgorithmComponent.prototype, "playground", void 0);
    SortingAlgorithmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-sorting-algorithm',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sorting-algorithm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sorting-algorithm/sorting-algorithm.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sorting-algorithm.component.scss */ "./src/app/components/sorting-algorithm/sorting-algorithm.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SortingAlgorithmComponent);
    return SortingAlgorithmComponent;
}());



/***/ }),

/***/ "./src/app/components/tictactoe/tictactoe.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/tictactoe/tictactoe.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  height: auto;\n  background-color: #00b8d4;\n  padding: 16px 24px;\n  font-family: Montserrat;\n  color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  position: relative;\n}\n.navbar .heading {\n  font-size: 24px;\n}\n.navbar .score {\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.navbar .score span {\n  display: inline-block;\n  font-size: 32px;\n  vertical-align: sub;\n  margin: 0 8px;\n}\n.navbar .reset-btn {\n  background-color: #43a047;\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  right: 32px;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  bottom: -24px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAiUlEQVR4AWIYBaMA0E79wSAQxmEA3i04PK7ldk6XO5Q75A7lWm5ZkmMubfl5eOt7cv7ednKv79l+f/8Zjd4qAd3wMtRDBRRXXR0EwOiQgeBhm4H4OGoSEDz1GYjJSZuA4G3IQEw2KWidKW2XaPZZO//4kwt5T5zIaF9ztF9QXHRzPLbAq12yJJAfK5VoPxHfDsEAAAAASUVORK5CYII=);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 32px;\n  cursor: pointer;\n}\n.container {\n  padding: 10px;\n  margin: 100px auto 30px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-family: Montserrat;\n  text-align: center;\n}\n.container > * {\n  display: inline-block;\n  vertical-align: middle;\n}\n.container .block-container {\n  width: 300px;\n  height: 300px;\n}\n.container .block-container app-block {\n  display: inline-block;\n}\n.popup {\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  text-align: center;\n  background-color: rgba(208, 208, 208, 0.4);\n}\n.popup::before {\n  content: \"\";\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.popup app-popup {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWN0YWN0b2UvRDpcXEZhaXNhbFxcR0lUXFxnYW1lL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0aWN0YWN0b2VcXHRpY3RhY3RvZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90aWN0YWN0b2UvdGljdGFjdG9lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSw2RUFBQTtFQUNBLGtCQUFBO0FDQ0Q7QURDQztFQUNDLGVBQUE7QUNDRjtBREVDO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUNBRjtBREVFO0VBQ0MscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQUg7QURJQztFQUNDLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZHQUFBO0VBQ0EsYUFBQTtFQUNBLGlUQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FETUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNIRDtBREtDO0VBQ0MscUJBQUE7RUFDQSxzQkFBQTtBQ0hGO0FETUM7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ0pGO0FETUU7RUFDQyxxQkFBQTtBQ0pIO0FEU0E7RUFDQyxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDTkQ7QURRQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ05GO0FEU0M7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpY3RhY3RvZS90aWN0YWN0b2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwYjhkNDtcclxuXHRwYWRkaW5nOiAxNnB4IDI0cHg7XHJcblx0Zm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Ym94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHQuaGVhZGluZyB7XHJcblx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0fVxyXG5cclxuXHQuc2NvcmUge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcblx0XHRzcGFuIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRmb250LXNpemU6IDMycHg7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcblx0XHRcdG1hcmdpbjogMCA4cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQucmVzZXQtYnRuIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0M2EwNDc7XHJcblx0XHR3aWR0aDogNDhweDtcclxuXHRcdGhlaWdodDogNDhweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAzMnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHRcdGJvdHRvbTogLTI0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FRQUFBQkxDVkFUQUFBQWlVbEVRVlI0QVdJWUJhTUEwRTc5d1NBUXhtRUEzaTA0UEs3bGRrNlhPNVE3NUE3bFdtNVprbU11YmZsNWVPdDdjdjdlZG5Ldjc5bCtmLzhaamQ0cUFkM3dNdFJEQlJSWFhSMEV3T2lRZ2VCaG00SDRPR29TRUR6MUdZakpTWnVBNEczSVFFdzJLV2lkS1cyWGFQWlpPLy80a3d0NVQ1eklhRjl6dEY5UVhIUnpQTGJBcTEyeUpKQWZLNVZvUHhIZkRzRUFBQUFBU1VWT1JLNUNZSUk9KTtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IDMycHg7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdG1hcmdpbjogMTAwcHggYXV0byAzMHB4O1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblx0JiA+ICoge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHR9XHJcblxyXG5cdC5ibG9jay1jb250YWluZXIge1xyXG5cdFx0d2lkdGg6IDMwMHB4O1xyXG5cdFx0aGVpZ2h0OiAzMDBweDtcclxuXHJcblx0XHRhcHAtYmxvY2sge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ucG9wdXAge1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA4LCAyMDgsIDIwOCwgMC40KTtcclxuXHJcblx0Jjo6YmVmb3JlIHtcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdH1cclxuXHJcblx0YXBwLXBvcHVwIHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0fVxyXG59XHJcbiIsIi5uYXZiYXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGI4ZDQ7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5hdmJhciAuaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5uYXZiYXIgLnNjb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm5hdmJhciAuc2NvcmUgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICBtYXJnaW46IDAgOHB4O1xufVxuLm5hdmJhciAucmVzZXQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzYTA0NztcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3R0b206IC0yNHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FRQUFBQkxDVkFUQUFBQWlVbEVRVlI0QVdJWUJhTUEwRTc5d1NBUXhtRUEzaTA0UEs3bGRrNlhPNVE3NUE3bFdtNVprbU11YmZsNWVPdDdjdjdlZG5Ldjc5bCtmLzhaamQ0cUFkM3dNdFJEQlJSWFhSMEV3T2lRZ2VCaG00SDRPR29TRUR6MUdZakpTWnVBNEczSVFFdzJLV2lkS1cyWGFQWlpPLy80a3d0NVQ1eklhRjl6dEY5UVhIUnpQTGJBcTEyeUpKQWZLNVZvUHhIZkRzRUFBQUFBU1VWT1JLNUNZSUk9KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDMycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTAwcHggYXV0byAzMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhaW5lciAuYmxvY2stY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuLmNvbnRhaW5lciAuYmxvY2stY29udGFpbmVyIGFwcC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvcHVwIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsIDIwOCwgMjA4LCAwLjQpO1xufVxuLnBvcHVwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5wb3B1cCBhcHAtcG9wdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/tictactoe/tictactoe.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tictactoe/tictactoe.component.ts ***!
  \*************************************************************/
/*! exports provided: TictactoeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TictactoeComponent", function() { return TictactoeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block/block.component */ "./src/app/components/block/block.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup/popup.component */ "./src/app/components/popup/popup.component.ts");




var TictactoeComponent = /** @class */ (function () {
    function TictactoeComponent() {
        var _a, _b;
        this.blockData = [];
        this.isWon = false;
        this.isPlaying = false;
        this.showPopup = false;
        document.title = 'Tic Tac Toe';
        var store = JSON.parse(localStorage.getItem('tictactoe'));
        this.score = ((_a = store) === null || _a === void 0 ? void 0 : _a.score) || 0;
        this.aiScore = ((_b = store) === null || _b === void 0 ? void 0 : _b.aiScore) || 0;
        this.fillBlockData();
    }
    TictactoeComponent.prototype.fillBlockData = function () {
        var _this = this;
        new Array(9).fill(0).forEach(function (item, index) {
            var block = new _block_block_component__WEBPACK_IMPORTED_MODULE_2__["BlockData"]();
            block.blockText = '';
            block.id = index;
            _this.blockData.push(block);
        });
    };
    TictactoeComponent.prototype.onBlockClick = function (id) {
        var _this = this;
        if (!this.blockData[id].isActive) {
            if (this.isPlaying) {
                return;
            }
            this.isPlaying = true;
            this.playChance(id);
            this.playAiChance();
            setTimeout(function () {
                _this.isPlaying = false;
            }, 500);
        }
    };
    TictactoeComponent.prototype.playChance = function (id) {
        if (this.blockData[id] && this.blockData[id].blockText === '' && !this.isWon) {
            this.blockData[id].isActive = true;
            this.blockData[id].blockText = this.getText();
            this.blockData[id].backgroundColor = '#efefef';
            _block_block_component__WEBPACK_IMPORTED_MODULE_2__["BlockComponent"].movesCount++;
            this.checkForVictory();
            this.checkForDraw();
        }
    };
    TictactoeComponent.prototype.playAiChance = function () {
        var _this = this;
        if (!this.showPopup) {
            var winningPattern = [
                [[1, 2], [3, 6], [4, 8]],
                [[0, 2], [4, 7]],
                [[1, 0], [4, 6], [5, 8]],
                [[0, 6], [4, 5]],
                [[6, 2], [3, 5], [1, 7], [0, 8]],
                [[8, 2], [3, 4]],
                [[7, 8], [3, 0], [4, 2]],
                [[1, 4], [6, 8]],
                [[6, 7], [2, 5], [4, 0]]
            ];
            var pattern = winningPattern.findIndex(function (item, index) { return _this.checkForActive(index, item); });
            var blockId_1 = pattern > -1 ? pattern : this.getDefaultPosition();
            setTimeout(function () { _this.playChance(blockId_1); }, 200);
        }
    };
    TictactoeComponent.prototype.checkForActive = function (selectedBlock, blocksToCheck) {
        var _this = this;
        return !this.blockData[selectedBlock].isActive && blocksToCheck.some(function (block) { return block.every(function (item) { return _this.isActive(item); }); });
    };
    TictactoeComponent.prototype.getDefaultPosition = function () {
        var _a;
        return (_a = this.blockData.find(function (item) { return !item.isActive; })) === null || _a === void 0 ? void 0 : _a.id;
    };
    TictactoeComponent.prototype.isActive = function (id) {
        return this.blockData[id].isActive && this.blockData[id].blockText === _block_block_component__WEBPACK_IMPORTED_MODULE_2__["TICTACTOE"].CROSS;
    };
    TictactoeComponent.prototype.getText = function () {
        return _block_block_component__WEBPACK_IMPORTED_MODULE_2__["BlockComponent"].movesCount % 2 === 0 ? _block_block_component__WEBPACK_IMPORTED_MODULE_2__["TICTACTOE"].CROSS : _block_block_component__WEBPACK_IMPORTED_MODULE_2__["TICTACTOE"].ZERO;
    };
    TictactoeComponent.prototype.reset = function () {
        var _this = this;
        this.blockData.forEach(function (block) {
            block.blockText = '';
            block.backgroundColor = '#fff';
            block.isActive = false;
            _block_block_component__WEBPACK_IMPORTED_MODULE_2__["BlockComponent"].movesCount = 0;
            _this.isWon = false;
        });
    };
    TictactoeComponent.prototype.checkForVictory = function () {
        var _this = this;
        var possibleWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        possibleWins.forEach(function (item) {
            if (_this.isVictory(item)) {
                var text = 'You Win!';
                _this.isWon = true;
                _this.changeBackground(item);
                if (_this.getText() === _block_block_component__WEBPACK_IMPORTED_MODULE_2__["TICTACTOE"].ZERO)
                    _this.score++;
                else {
                    _this.aiScore++;
                    text = 'AI Wins!';
                }
                localStorage.setItem('tictactoe', JSON.stringify({ score: _this.score, aiScore: _this.aiScore }));
                _this.setPopupText(text);
                return;
            }
        });
    };
    TictactoeComponent.prototype.checkForDraw = function () {
        var isCompleted = true;
        this.blockData.forEach(function (block) {
            if (!block.isActive)
                isCompleted = false;
        });
        if (isCompleted && !this.isWon) {
            this.setPopupText('It\'s a draw');
        }
    };
    TictactoeComponent.prototype.isVictory = function (listId) {
        return this.blockData[listId[0]].blockText === this.blockData[listId[1]].blockText
            && this.blockData[listId[1]].blockText === this.blockData[listId[2]].blockText
            && this.blockData[listId[0]].blockText !== '';
    };
    TictactoeComponent.prototype.changeBackground = function (listId) {
        var _this = this;
        new Array(3).fill(0).forEach(function (item, index) { _this.blockData[listId[index]].backgroundColor = '#64dd17'; });
    };
    TictactoeComponent.prototype.setPopupText = function (text) {
        var _this = this;
        setTimeout(function () {
            _this.showPopup = true;
            _this.popupHeading = text;
            _this.popupBtnText = 'Play Again';
        }, 400);
    };
    TictactoeComponent.prototype.closePopup = function () {
        this.showPopup = false;
        this.reset();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('popupComponent'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__["PopupComponent"])
    ], TictactoeComponent.prototype, "popupComponent", void 0);
    TictactoeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tictactoe',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tictactoe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tictactoe/tictactoe.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tictactoe.component.scss */ "./src/app/components/tictactoe/tictactoe.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TictactoeComponent);
    return TictactoeComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Faisal\GIT\game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map