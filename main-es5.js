function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n<!-- <app-teacher></app-teacher> -->\r\n<!-- <app-student-biodata></app-student-biodata> -->\r\n<!-- <app-student-result></app-student-result> -->";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div >\n<form [formGroup]=\"login\" class=\"log\">\n<input type=\"email\" placeholder=\"e-mail\" formControlName=\"email\" #emailT/>\n<span *ngIf=\"vmail&&vmail.invalid&&vmail.touched\">enter correct email</span>\n<br>\n<br>\n<input type=\"password\" placeholder=\"password\" formControlName=\"password\" #passwordT/>\n<span *ngIf=\"vpwd&&vpwd.invalid&&vpwd.touched\">enter correct password</span>\n<br>\n<br>\n<button (click)=\"getValue(emailT.value,passwordT.value)\">submit</button>\n</form>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/student-biodata/student-biodata.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-biodata/student-biodata.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentBiodataStudentBiodataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<h1>student information</h1>\n<button (click)=\"myModal=!myModal\">open</button>\n<div id=\"myModal\" class=\"modal\" *ngIf=\"myModal\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n        <div class=\"grid-container\">\n            <div class=\"grid-item\">\n                <div>\n                    <img [src]=\"image\" class=\"imgStudent\">\n                </div>\n            </div>\n            <div class=\"grid-item\">\n                <div>\n                    <ul *ngFor=\"let item of studentData\">\n                        <li>tamil&nbsp;{{item.tamil}}</li>\n                        <li>english&nbsp;{{item.english}}</li>\n                        <li>maths&nbsp;{{item.maths}}</li>\n                        <li>social science&nbsp;{{item.social}}</li>\n                        <li>science&nbsp;{{item.science}}</li>\n                        <li>student behaviour&nbsp;{{item.behaviour}}</li>\n                    </ul>\n                </div>\n            </div>\n\n        </div>\n        <hr>\n        <button (click)=\"myModal=!myModal\">close</button>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/student-result/student-result.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-result/student-result.component.html ***!
    \****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentResultStudentResultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div>\n    <table>\n        <tr>\n            <th>subject</th>\n            <th>subject Code</th>\n            <th>mark</th>\n        </tr>\n        <tr *ngFor=\"let item of studentData\">\n            <td>{{item.name}}</td>\n            <td>{{item.subcode}}</td>\n            <td>{{item.mark}}</td>\n        </tr>\n    </table>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html ***!
    \**************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div>\r\n<button (click)=\"goToInfo()\">my information</button>\r\n<button (click)=\"goToResult()\">exam result</button>\r\n</div>\r\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html ***!
    \**************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeacherTeacherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<!-- class changing buttons -->\n<div>\n    <button (click)=\"show1=!show1\" class=\"btn\">1std</button>\n    <button (click)=\"show1=!show1\" class=\"btn\">2std</button>\n    <button (click)=\"show1=!show1\" class=\"btn\">3std</button>\n    <button (click)=\"show1=!show1\" class=\"btn\">4std</button>\n    <button (click)=\"show1=!show1\" class=\"btn\">5std</button>\n</div>\n<div id=\"myModal\" class=\"modal\" *ngIf=\"myModal\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n        <div class=\"grid-container\">\n            <div class=\"grid-item\">\n                <div>\n                    <img [src]=\"image\" class=\"imgStudent\">\n                </div>\n            </div>\n            <div class=\"grid-item\">\n                <div>\n                    <ul *ngFor=\"let item of subMark\">\n                        <li>tamil&nbsp;{{item.tamil}}</li>\n                        <li>english&nbsp;{{item.english}}</li>\n                        <li>maths&nbsp;{{item.maths}}</li>\n                        \n                        <li>social science&nbsp;{{item.social}}</li>\n                        <li>science&nbsp;{{item.science}}</li>\n                        <li>student behaviour&nbsp;{{item.behaviour}}</li>\n                    </ul>\n                </div>\n            </div>\n\n        </div>\n        <hr>\n        <button (click)=\"myModal=!myModal\">close</button>\n    </div>\n</div>\n\n<!-- student table -->\n<table #none1 *ngIf=\"show1\">\n    <tr>\n        <th>id</th>\n        <th>roll number</th>\n        <th>name</th>\n        <th>age</th>\n        <th>gender</th>\n        <th>action</th>\n    </tr>\n    <tr *ngFor=\"let item of data , let i = index\">\n        <th>{{i+1}}</th>\n        <td>{{item.roll}}</td>\n        <td>{{item.name}}</td>\n        <td>{{item.age}}</td>\n        <td>{{item.gender}}</td>\n        <td><button>edit</button> | <button (click)=\"deleteData(i) \">delete</button> | <button\n                (click)=\"myModal=!myModal\">click</button></td>\n    </tr>\n</table>";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./login/login.component */"./src/app/login/login.component.ts");
    /* harmony import */
    var _student_biodata_student_biodata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./student-biodata/student-biodata.component */"./src/app/student-biodata/student-biodata.component.ts");
    /* harmony import */
    var _student_result_student_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./student-result/student-result.component */"./src/app/student-result/student-result.component.ts");
    /* harmony import */
    var _student_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./student/student.component */"./src/app/student/student.component.ts");
    /* harmony import */
    var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./teacher/teacher.component */"./src/app/teacher/teacher.component.ts");
    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'student',
      component: _student_student_component__WEBPACK_IMPORTED_MODULE_6__["StudentComponent"]
    }, {
      path: 'teacher',
      component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_7__["TeacherComponent"]
    }, {
      path: "information",
      component: _student_biodata_student_biodata_component__WEBPACK_IMPORTED_MODULE_4__["StudentBiodataComponent"]
    }, {
      path: "result",
      component: _student_result_student_result_component__WEBPACK_IMPORTED_MODULE_5__["StudentResultComponent"]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "* {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXHNtYXJ0YWlsXFxsb2dpblBvcnRhbC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59IiwiKiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent(router) {
      _classCallCheck(this, AppComponent);
      this.router = router;
      this.title = 'loginPortal';
      this.router.navigate(['/login']);
    });
    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./login/login.component */"./src/app/login/login.component.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _student_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./student/student.component */"./src/app/student/student.component.ts");
    /* harmony import */
    var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./teacher/teacher.component */"./src/app/teacher/teacher.component.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _student_result_student_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./student-result/student-result.component */"./src/app/student-result/student-result.component.ts");
    /* harmony import */
    var _student_biodata_student_biodata_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./student-biodata/student-biodata.component */"./src/app/student-biodata/student-biodata.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"], _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_8__["TeacherComponent"], _student_result_student_result_component__WEBPACK_IMPORTED_MODULE_10__["StudentResultComponent"], _student_biodata_student_biodata_component__WEBPACK_IMPORTED_MODULE_11__["StudentBiodataComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/
  /*! exports provided: default */
  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "div {\n  position: relative;\n}\n\n.log {\n  position: absolute;\n  left: 43%;\n  top: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXHNtYXJ0YWlsXFxsb2dpblBvcnRhbC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGtCQUFBO0FDQ0E7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxucG9zaXRpb246IHJlbGF0aXZlOyAgIFxyXG59XHJcbi5sb2d7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0MyU7XHJcbiAgICB0b3A6IDYwJTtcclxufSIsImRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDMlO1xuICB0b3A6IDYwJTtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/
  /*! exports provided: LoginComponent */
  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router) {
        _classCallCheck(this, LoginComponent);
        this.router = router;
        this.email1 = "";
        this.password1 = "";
        this.emailT = "teacher@gmail.com";
        this.passwordT = "teacher1234";
        this.emailS = "student@gmail.com";
        this.passwordS = "student1234";
        // login form validation
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
      }
      _createClass(LoginComponent, [{
        key: "getValue",
        value: function getValue(data1, data2) {
          this.email1 = data1;
          this.password1 = data2;
          //teacher login logic
          if (this.email1 === this.emailT && this.password1 === this.passwordT) {
            this.router.navigate(['/teacher']);
          }
          // student login logic
          else if (this.email1 === this.emailS && this.password1 === this.passwordS) {
            this.router.navigate(['/student']);
          } else {
            alert("wrong emial & password");
          }
        }
        //validation error message
      }, {
        key: "vmail",
        get: function get() {
          return this.login.get("email");
        }
      }, {
        key: "vpwd",
        get: function get() {
          return this.login.get("password");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return LoginComponent;
    }();
    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./login.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./login.component.scss */"./src/app/login/login.component.scss"))["default"]]
    })], LoginComponent);

    /***/
  },

  /***/"./src/app/services/student-data.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/student-data.service.ts ***!
    \**************************************************/
  /*! exports provided: StudentDataService */
  /***/
  function srcAppServicesStudentDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "StudentDataService", function () {
      return StudentDataService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var StudentDataService = /*#__PURE__*/function () {
      function StudentDataService(http) {
        _classCallCheck(this, StudentDataService);
        this.http = http;
      }
      _createClass(StudentDataService, [{
        key: "getData",
        value: function getData() {
          return this.http.get('http://localhost:3000/studentData');
        }
      }]);
      return StudentDataService;
    }();
    StudentDataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    StudentDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentDataService);

    /***/
  },

  /***/"./src/app/services/student-sub-marks.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/student-sub-marks.service.ts ***!
    \*******************************************************/
  /*! exports provided: StudentSubMarksService */
  /***/
  function srcAppServicesStudentSubMarksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "StudentSubMarksService", function () {
      return StudentSubMarksService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var StudentSubMarksService = /*#__PURE__*/_createClass(function StudentSubMarksService() {
      _classCallCheck(this, StudentSubMarksService);
      this.subjectMarks = [{
        "tamil": 87,
        "english": 89,
        "maths": 67,
        "social": 100,
        "science": 87,
        "behaviour": "good"
      }];
      this.studentResult = [{
        "mark": 88,
        "name": "tamil",
        "subcode": "T01"
      }, {
        "mark": 78,
        "name": "english",
        "subcode": "E01"
      }, {
        "mark": 68,
        "name": "social social",
        "subcode": "SS01"
      }, {
        "mark": 58,
        "name": "science",
        "subcode": "S01"
      }, {
        "mark": 48,
        "name": "maths",
        "subcode": "M01"
      }];
    });
    StudentSubMarksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentSubMarksService);

    /***/
  },

  /***/"./src/app/student-biodata/student-biodata.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/student-biodata/student-biodata.component.scss ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppStudentBiodataStudentBiodataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".modal {\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: 40% 60%;\n}\n\n.grid-item {\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 20px;\n}\n\n.imgStudent {\n  width: 100%;\n  height: 30vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1iaW9kYXRhL0U6XFxzbWFydGFpbFxcbG9naW5Qb3J0YWwvc3JjXFxhcHBcXHN0dWRlbnQtYmlvZGF0YVxcc3R1ZGVudC1iaW9kYXRhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50LWJpb2RhdGEvc3R1ZGVudC1iaW9kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHVCQUFBO0VBQThCLG1CQUFBO0VBQzlCLG9DQUFBO0VBQW1DLHFCQUFBO0FDT3ZDOztBREpFLHNCQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUFrQixrQ0FBQTtFQUNsQixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQVksb0RBQUE7QUNTaEI7O0FETEU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNRSjs7QURMRTtFQUVFLG9DQUFBO0VBQ0EsYUFBQTtBQ09KOztBREhFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtYmlvZGF0YS9zdHVkZW50LWJpb2RhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2RhbCBib3hcclxuLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxuICB9XHJcbiAgXHJcbiAgLy8gZ3JpZCBcclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJSA7XHJcbiAgIFxyXG4gIH1cclxuICAuZ3JpZC1pdGVtIHtcclxuICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLmltZ1N0dWRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICB9IiwiLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG5cbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogMTUlIGF1dG87XG4gIC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7XG4gIC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcbn1cblxuLmdyaWQtaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmltZ1N0dWRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHZoO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/student-biodata/student-biodata.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/student-biodata/student-biodata.component.ts ***!
    \**************************************************************/
  /*! exports provided: StudentBiodataComponent */
  /***/
  function srcAppStudentBiodataStudentBiodataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "StudentBiodataComponent", function () {
      return StudentBiodataComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_student_sub_marks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/student-sub-marks.service */"./src/app/services/student-sub-marks.service.ts");
    var StudentBiodataComponent = /*#__PURE__*/function () {
      function StudentBiodataComponent(data) {
        _classCallCheck(this, StudentBiodataComponent);
        this.data = data;
        this.studentData = null;
        this.myModal = true;
        this.image = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80";
        this.studentData = data.subjectMarks;
      }
      _createClass(StudentBiodataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return StudentBiodataComponent;
    }();
    StudentBiodataComponent.ctorParameters = function () {
      return [{
        type: _services_student_sub_marks_service__WEBPACK_IMPORTED_MODULE_2__["StudentSubMarksService"]
      }];
    };
    StudentBiodataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-biodata',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./student-biodata.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/student-biodata/student-biodata.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./student-biodata.component.scss */"./src/app/student-biodata/student-biodata.component.scss"))["default"]]
    })], StudentBiodataComponent);

    /***/
  },

  /***/"./src/app/student-result/student-result.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/student-result/student-result.component.scss ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppStudentResultStudentResultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "table, td, th {\n  border: solid black 1px;\n  border-collapse: collapse;\n  width: 30%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1yZXN1bHQvRTpcXHNtYXJ0YWlsXFxsb2dpblBvcnRhbC9zcmNcXGFwcFxcc3R1ZGVudC1yZXN1bHRcXHN0dWRlbnQtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50LXJlc3VsdC9zdHVkZW50LXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtcmVzdWx0L3N0dWRlbnQtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsdGQsdGh7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwidGFibGUsIHRkLCB0aCB7XG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

    /***/
  },

  /***/"./src/app/student-result/student-result.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/student-result/student-result.component.ts ***!
    \************************************************************/
  /*! exports provided: StudentResultComponent */
  /***/
  function srcAppStudentResultStudentResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "StudentResultComponent", function () {
      return StudentResultComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_student_sub_marks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/student-sub-marks.service */"./src/app/services/student-sub-marks.service.ts");
    var StudentResultComponent = /*#__PURE__*/function () {
      function StudentResultComponent(data) {
        _classCallCheck(this, StudentResultComponent);
        this.data = data;
        this.studentData = '';
        this.studentData = data.studentResult;
      }
      _createClass(StudentResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return StudentResultComponent;
    }();
    StudentResultComponent.ctorParameters = function () {
      return [{
        type: _services_student_sub_marks_service__WEBPACK_IMPORTED_MODULE_2__["StudentSubMarksService"]
      }];
    };
    StudentResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-result',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./student-result.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/student-result/student-result.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./student-result.component.scss */"./src/app/student-result/student-result.component.scss"))["default"]]
    })], StudentResultComponent);

    /***/
  },

  /***/"./src/app/student/student.component.scss":
  /*!************************************************!*\
    !*** ./src/app/student/student.component.scss ***!
    \************************************************/
  /*! exports provided: default */
  /***/
  function srcAppStudentStudentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/student/student.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/student/student.component.ts ***!
    \**********************************************/
  /*! exports provided: StudentComponent */
  /***/
  function srcAppStudentStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "StudentComponent", function () {
      return StudentComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var StudentComponent = /*#__PURE__*/function () {
      function StudentComponent(link) {
        _classCallCheck(this, StudentComponent);
        this.link = link;
      }
      _createClass(StudentComponent, [{
        key: "goToInfo",
        value: function goToInfo() {
          this.link.navigate(['/information']);
        }
      }, {
        key: "goToResult",
        value: function goToResult() {
          this.link.navigate(['/result']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return StudentComponent;
    }();
    StudentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./student.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./student.component.scss */"./src/app/student/student.component.scss"))["default"]]
    })], StudentComponent);

    /***/
  },

  /***/"./src/app/teacher/teacher.component.scss":
  /*!************************************************!*\
    !*** ./src/app/teacher/teacher.component.scss ***!
    \************************************************/
  /*! exports provided: default */
  /***/
  function srcAppTeacherTeacherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "table, td, th {\n  border: black solid 2px;\n  border-collapse: collapse;\n}\n\ntable {\n  position: relative;\n  left: 43%;\n}\n\ntd {\n  text-align: center;\n}\n\n.modal {\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: 40% 60%;\n}\n\n.grid-item {\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 20px;\n}\n\n.imgStudent {\n  width: 80%;\n  height: 30vh;\n}\n\n.btn {\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9FOlxcc21hcnRhaWxcXGxvZ2luUG9ydGFsL3NyY1xcYXBwXFx0ZWFjaGVyXFx0ZWFjaGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyL3RlYWNoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0E7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FERUE7RUFDRSxlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIsdUJBQUE7RUFBOEIsbUJBQUE7RUFDOUIsb0NBQUE7RUFBbUMscUJBQUE7QUNRckM7O0FETEEsc0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQWtCLGtDQUFBO0VBQ2xCLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFBWSxvREFBQTtBQ1VkOztBRE5BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDU0Y7O0FETkE7RUFFRSxvQ0FBQTtFQUNBLGFBQUE7QUNRRjs7QURKQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDT0Y7O0FETEE7RUFDQSxrQkFBQTtBQ1FBIiwiZmlsZSI6InNyYy9hcHAvdGVhY2hlci90ZWFjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsdGQsdGh7XHJcbmJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xyXG5ib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbnRhYmxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNDMlO1xyXG59XHJcblxyXG50ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gbW9kYWwgYm94XHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuXHJcbi8vIGdyaWQgXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA2MCUgO1xyXG4gXHJcbn1cclxuLmdyaWQtaXRlbSB7XHJcbiBcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuIFxyXG59XHJcblxyXG4uaW1nU3R1ZGVudHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogMzB2aDtcclxufVxyXG4uYnRue1xyXG5tYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn0iLCJ0YWJsZSwgdGQsIHRoIHtcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAycHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA0MyU7XG59XG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTtcbiAgLyogU2l0IG9uIHRvcCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiAxNSUgYXV0bztcbiAgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDgwJTtcbiAgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlO1xufVxuXG4uZ3JpZC1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaW1nU3R1ZGVudCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMzB2aDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/teacher/teacher.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/teacher/teacher.component.ts ***!
    \**********************************************/
  /*! exports provided: TeacherComponent */
  /***/
  function srcAppTeacherTeacherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TeacherComponent", function () {
      return TeacherComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_student_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/student-data.service */"./src/app/services/student-data.service.ts");
    /* harmony import */
    var _services_student_sub_marks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../services/student-sub-marks.service */"./src/app/services/student-sub-marks.service.ts");
    var TeacherComponent = /*#__PURE__*/function () {
      function TeacherComponent(http, marks) {
        _classCallCheck(this, TeacherComponent);
        this.http = http;
        this.subMark = '';
        // json data upload on table
        this.data = '';
        // 1sts class toggle 
        this.show1 = false;
        // modal  toggle 
        this.myModal = false;
        // image in profile
        this.image = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80";
        this.subMark = marks.subjectMarks;
      }
      _createClass(TeacherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.http.getData().subscribe(function (res) {
            _this.data = res;
          });
        }
        // delete data from row 
      }, {
        key: "deleteData",
        value: function deleteData(index) {
          this.data.splice(index, 1);
        }
      }]);
      return TeacherComponent;
    }();
    TeacherComponent.ctorParameters = function () {
      return [{
        type: _services_student_data_service__WEBPACK_IMPORTED_MODULE_2__["StudentDataService"]
      }, {
        type: _services_student_sub_marks_service__WEBPACK_IMPORTED_MODULE_3__["StudentSubMarksService"]
      }];
    };
    TeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teacher',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./teacher.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./teacher.component.scss */"./src/app/teacher/teacher.component.scss"))["default"]]
    })], TeacherComponent);

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! E:\smartail\loginPortal\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map