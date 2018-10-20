(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLink=\"home\">USCIS Naturalization Practice</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n            <ul class=\"nav navbar-nav\">\n                <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a routerLink=\"\"> Home </a>\n                </li>\n                <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" *ngIf=\"isAuthenticated()\">\n                    <a routerLink=\"learning\"> Learning </a>\n                </li>\n                <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" *ngIf=\"isAuthenticated()\">\n                    <a routerLink=\"testing\"> Testing </a>\n                </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" *ngIf=\"!isAuthenticated()\">\n                    <a routerLink=\"register\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a>\n                </li>\n\n                <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" *ngIf=\"!isAuthenticated()\">\n                    <a routerLink=\"login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a>\n                </li>\n\n                <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" *ngIf=\"isAuthenticated()\">\n                    <a routerLink=\"logout\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>\n\n<app-common-wrapper></app-common-wrapper>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/identity.service */ "./src/app/services/identity.service.ts");
/* harmony import */ var _utilities_authentication_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/authentication.utility */ "./src/app/utilities/authentication.utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(identityService, authenticationUtility) {
        this.identityService = identityService;
        this.authenticationUtility = authenticationUtility;
        this.title = 'uscis-naturalization-exam-frontend';
    }
    AppComponent.prototype.isAuthenticated = function () {
        return this.authenticationUtility.getIsAuthenticated();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"], _utilities_authentication_utility__WEBPACK_IMPORTED_MODULE_2__["AuthenticationUtility"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router-config */ "./src/app/router-config.ts");
/* harmony import */ var _components_route_not_found_route_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/route-not-found/route-not-found.component */ "./src/app/components/route-not-found/route-not-found.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _modules_testing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/testing.module */ "./src/app/modules/testing.module.ts");
/* harmony import */ var _modules_learning_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/learning.module */ "./src/app/modules/learning.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_identity_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/identity.module */ "./src/app/modules/identity.module.ts");
/* harmony import */ var _modules_common_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/common.module */ "./src/app/modules/common.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_route_not_found_route_not_found_component__WEBPACK_IMPORTED_MODULE_5__["RouteNotFoundComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_router_config__WEBPACK_IMPORTED_MODULE_4__["routes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _modules_testing_module__WEBPACK_IMPORTED_MODULE_7__["TestingModule"],
                _modules_learning_module__WEBPACK_IMPORTED_MODULE_8__["LearningModule"],
                _modules_identity_module__WEBPACK_IMPORTED_MODULE_11__["IdentityModule"],
                _modules_common_module__WEBPACK_IMPORTED_MODULE_12__["CommonComponentsModules"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/common/common-wrapper/common-wrapper.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/common/common-wrapper/common-wrapper.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/common-wrapper/common-wrapper.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/common/common-wrapper/common-wrapper.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Test api connection-->\n<app-test-api></app-test-api>\n\n<!--Intercept http errors-->\n<app-http-intercept></app-http-intercept>\n\n<!--Test already authenticated-->\n<app-test-authenticated></app-test-authenticated>"

/***/ }),

/***/ "./src/app/components/common/common-wrapper/common-wrapper.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/common-wrapper/common-wrapper.component.ts ***!
  \******************************************************************************/
/*! exports provided: CommonWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonWrapperComponent", function() { return CommonWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonWrapperComponent = /** @class */ (function () {
    function CommonWrapperComponent() {
    }
    CommonWrapperComponent.prototype.ngOnInit = function () {
    };
    CommonWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common-wrapper',
            template: __webpack_require__(/*! ./common-wrapper.component.html */ "./src/app/components/common/common-wrapper/common-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./common-wrapper.component.css */ "./src/app/components/common/common-wrapper/common-wrapper.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommonWrapperComponent);
    return CommonWrapperComponent;
}());



/***/ }),

/***/ "./src/app/components/common/http-intercept/http-intercept.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/common/http-intercept/http-intercept.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/http-intercept/http-intercept.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/common/http-intercept/http-intercept.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #templateRef>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Error</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n      <span aria-hidden=\"true\">X</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <alert type=\"warning\">\n      <h4>Error! Exception occurred while attempting a REST call </h4>\n      <pre>{{errorMessage}}</pre>\n    </alert>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/common/http-intercept/http-intercept.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/http-intercept/http-intercept.component.ts ***!
  \******************************************************************************/
/*! exports provided: HttpInterceptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptComponent", function() { return HttpInterceptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_custom_error_handler_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utilities/custom-error-handler.utility */ "./src/app/utilities/custom-error-handler.utility.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpInterceptComponent = /** @class */ (function () {
    function HttpInterceptComponent(modalService, requestInterceptor, alertConfig) {
        var _this = this;
        this.modalService = modalService;
        this.requestInterceptor = requestInterceptor;
        this.alertConfig = alertConfig;
        this.errorMessage = '';
        alertConfig.type = 'warning';
        alertConfig.dismissible = false;
        requestInterceptor.addOnErrorHandler(function (error) { return _this.onErrorHandler(error); });
    }
    HttpInterceptComponent.prototype.ngOnInit = function () {
    };
    HttpInterceptComponent.prototype.onErrorHandler = function (errorResponse) {
        this.errorMessage = errorResponse.message;
        this.showModal();
    };
    HttpInterceptComponent.prototype.showModal = function () {
        this.modalRef = this.modalService.show(this.templateRef, {
            class: 'modal-lg'
        });
    };
    HttpInterceptComponent.prototype.hideModal = function () {
        this.modalService.hide(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templateRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], HttpInterceptComponent.prototype, "templateRef", void 0);
    HttpInterceptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-http-intercept',
            template: __webpack_require__(/*! ./http-intercept.component.html */ "./src/app/components/common/http-intercept/http-intercept.component.html"),
            styles: [__webpack_require__(/*! ./http-intercept.component.css */ "./src/app/components/common/http-intercept/http-intercept.component.css")],
            providers: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["AlertConfig"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _utilities_custom_error_handler_utility__WEBPACK_IMPORTED_MODULE_1__["RequestInterceptor"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["AlertConfig"]])
    ], HttpInterceptComponent);
    return HttpInterceptComponent;
}());



/***/ }),

/***/ "./src/app/components/common/test-api/test-api.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/common/test-api/test-api.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/test-api/test-api.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/common/test-api/test-api.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #templateRef>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Error</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n      <span aria-hidden=\"true\">X</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <alert type=\"danger\">\n      <h4>Error! Failed to connect to the backend API</h4>\n      <h5>Make sure the port number matched back-end port number</h5>\n    </alert>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/common/test-api/test-api.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/common/test-api/test-api.component.ts ***!
  \******************************************************************/
/*! exports provided: TestApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestApiComponent", function() { return TestApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_connection_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/connection-test.service */ "./src/app/services/connection-test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var TestApiComponent = /** @class */ (function () {
    function TestApiComponent(modalService, connectionTestService, alertConfig) {
        this.modalService = modalService;
        this.connectionTestService = connectionTestService;
        this.alertConfig = alertConfig;
        alertConfig.type = 'danger';
        alertConfig.dismissible = false;
    }
    TestApiComponent.prototype.ngOnInit = function () {
        this.testEcho().then();
    };
    TestApiComponent.prototype.testEcho = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connectionTestService.testEcho().subscribe(function (_) { return _; }, function (error) {
                            _this.showModal();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TestApiComponent.prototype.showModal = function () {
        this.modalRef = this.modalService.show(this.templateRef);
    };
    TestApiComponent.prototype.hideModal = function () {
        this.modalService.hide(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templateRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TestApiComponent.prototype, "templateRef", void 0);
    TestApiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-api',
            template: __webpack_require__(/*! ./test-api.component.html */ "./src/app/components/common/test-api/test-api.component.html"),
            styles: [__webpack_require__(/*! ./test-api.component.css */ "./src/app/components/common/test-api/test-api.component.css")],
            providers: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["AlertConfig"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _services_connection_test_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionTestService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["AlertConfig"]])
    ], TestApiComponent);
    return TestApiComponent;
}());



/***/ }),

/***/ "./src/app/components/common/test-authenticated/test-authenticated.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/common/test-authenticated/test-authenticated.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/test-authenticated/test-authenticated.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/common/test-authenticated/test-authenticated.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/test-authenticated/test-authenticated.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/common/test-authenticated/test-authenticated.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TestAuthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAuthenticatedComponent", function() { return TestAuthenticatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/identity.service */ "./src/app/services/identity.service.ts");
/* harmony import */ var _utilities_authentication_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/authentication.utility */ "./src/app/utilities/authentication.utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestAuthenticatedComponent = /** @class */ (function () {
    function TestAuthenticatedComponent(identityService, authenticationUtility) {
        var _this = this;
        this.identityService = identityService;
        this.authenticationUtility = authenticationUtility;
        this.identityService.isAuthenticated()
            .then(function (x) { return _this.authenticationUtility.setIsAuthenticated(x); });
    }
    TestAuthenticatedComponent.prototype.ngOnInit = function () {
    };
    TestAuthenticatedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-authenticated',
            template: __webpack_require__(/*! ./test-authenticated.component.html */ "./src/app/components/common/test-authenticated/test-authenticated.component.html"),
            styles: [__webpack_require__(/*! ./test-authenticated.component.css */ "./src/app/components/common/test-authenticated/test-authenticated.component.css")]
        }),
        __metadata("design:paramtypes", [_services_identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"], _utilities_authentication_utility__WEBPACK_IMPORTED_MODULE_2__["AuthenticationUtility"]])
    ], TestAuthenticatedComponent);
    return TestAuthenticatedComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngIf=\"authenticated && scoreInfo\">\n        <h4>\n            Your current score: <strong>{{scoreInfo.score}}</strong>\n        </h4>\n\n        <div class=\"container\">\n            <h5>Score board table</h5>\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr>\n                    <th>Fullname</th>\n                    <th>Score</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let info of scoreInfo.board\">\n                    <td>{{info.fullname}}</td>\n                    <td>{{info.score}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n\n    </div>\n\n    <div *ngIf=\"!authenticated\">\n        <h4>Welcome to USCIS Naturalization practice website!</h4>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/score.service */ "./src/app/services/score.service.ts");
/* harmony import */ var _utilities_authentication_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/authentication.utility */ "./src/app/utilities/authentication.utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(scoreService, authenticationUtility) {
        var _this = this;
        this.scoreService = scoreService;
        this.authenticationUtility = authenticationUtility;
        this.authenticated = false;
        this.authenticationUtility.addOnChangeHandler(function (x) {
            _this.authenticated = x;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateScoreInfo()];
                    case 1:
                        _a.sent();
                        this.authenticated = this.authenticationUtility.getIsAuthenticated();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.authenticated = this.authenticationUtility.getIsAuthenticated();
                        return [4 /*yield*/, this.updateScoreInfo()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.updateScoreInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, scores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.scoreService.scoreInfo()];
                    case 1:
                        result = _a.sent();
                        scores = Object.keys(result.board).map(function (key) {
                            return {
                                fullname: key,
                                score: result.board[key]
                            };
                        });
                        this.scoreInfo = result ? {
                            score: result.score,
                            board: scores
                        } : null;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_score_service__WEBPACK_IMPORTED_MODULE_1__["ScoreService"], _utilities_authentication_utility__WEBPACK_IMPORTED_MODULE_2__["AuthenticationUtility"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/identity/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/identity/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/identity/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/identity/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username:</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password:</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\">\n    </div>\n\n    <button class=\"btn btn-default\" (click)=\"handleLogIn($event).then()\">Login</button>\n</div>"

/***/ }),

/***/ "./src/app/components/identity/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/identity/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/identity.service */ "./src/app/services/identity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(identityService, router) {
        this.identityService = identityService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.handleLogIn = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.stopPropagation();
                        return [4 /*yield*/, this.identityService.logIn(this.username, this.password)];
                    case 1:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.router.navigate(['./home'])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/identity/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/identity/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_services_identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/identity/logout/logout.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/identity/logout/logout.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/identity/logout/logout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/identity/logout/logout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Empty-->"

/***/ }),

/***/ "./src/app/components/identity/logout/logout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/identity/logout/logout.component.ts ***!
  \****************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/identity.service */ "./src/app/services/identity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(identityService, router) {
        this.identityService = identityService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.logOut().then();
    };
    LogoutComponent.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.identityService.logOut()];
                    case 1:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.router.navigate(['./home'])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/identity/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/identity/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/identity/register/register.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/identity/register/register.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/identity/register/register.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/identity/register/register.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"form-group\">\n        <label for=\"email\">Fullname:</label>\n        <input type=\"text\" class=\"form-control\" id=\"fullname\" [(ngModel)]=\"fullname\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\">Email:</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username:</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password:</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\">\n    </div>\n\n    <button class=\"btn btn-default\" (click)=\"handleRegister($event).then()\">Register</button>\n</div>"

/***/ }),

/***/ "./src/app/components/identity/register/register.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/identity/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/identity.service */ "./src/app/services/identity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(identityService, router) {
        this.identityService = identityService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.handleRegister = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.stopPropagation();
                        result = this.identityService.register(this.fullname, this.email, this.username, this.password);
                        if (!result) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.router.navigate(['./login'])];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/identity/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/identity/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/learning/learning.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/learning/learning.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n    width: 100% !important;\n}\n\n.normalized-btn-group > button {\n    height: 6rem;\n}\n\n.clear-fix {\n    height: 3rem !important;\n}"

/***/ }),

/***/ "./src/app/components/learning/learning.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/learning/learning.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h4 class=\"clear-fix\">\n        (#{{currentTrack.index}}) {{ currentTrack.question }}\n    </h4>\n\n    <audio class=\"full-width\" controls #audioOption>\n        <source src=\"{{itemToStreamUrl(currentTrack)}}\" type=\"audio/mpeg\">\n    </audio>\n\n    <div class=\"clear-fix\"></div>\n\n    <div class=\"text-center\">\n        <div class=\"btn-group normalized-btn-group\">\n            <button type=\"button\" class=\"btn btn-default btn-lg\" title=\"Play Previous Track\" (click)=\"previousTrack()\" [disabled]=\"index === 0\">\n                <i class=\"icon-fast-backward icon-2x\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-default btn-lg\" title=\"Pause Playing\" (click)=\"toggleTrack()\">\n                <i class=\"{{playing ? 'icon-pause' : 'icon-play'}} icon-2x\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-default btn-lg\" title=\"Play Forwarding Track\" (click)=\"nextTrack()\">\n                <i class=\"icon-fast-forward icon-2x\"></i>\n            </button>\n\n            <button type=\"button\" class=\"btn btn-default btn-lg\" title=\"Randomize Playing\" *ngIf=\"randomize\" (click)=\"toggleRandomizeTracks()\">\n                <i class=\"icon-random icon-2x\"></i>\n            </button>\n\n            <button type=\"button\" class=\"btn btn-default btn-lg\" title=\"Series Playing\" *ngIf=\"!randomize\" (click)=\"toggleRandomizeTracks()\">\n                <i class=\"icon-exchange icon-2x\"></i>\n            </button>\n\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"toggleRepeatCount()\">\n                <strong><i class=\"icon-repeat icon-2x\"></i> {{repeatCount.total}}</strong>\n            </button>\n\n            <button class=\"btn btn-default btn-lg\" title=\"Download Track\" (click)=\"downloadTrack().then()\">\n                <i class=\"icon-download-alt icon-2x\"></i>\n            </button>\n        </div>\n\n        <div class=\"clear-fix\"></div>\n\n        <div class=\"container-fluid\">\n            <div class=\"col-md-6\">\n                <img [src]=\"itemToImageUrl(currentTrack).front\" class=\"full-width\" alt=\"front\" />\n            </div>\n            <div class=\"col-md-6\">\n                <img [src]=\"itemToImageUrl(currentTrack).back\" class=\"full-width\" alt=\"back\" />\n            </div>\n        </div>\n\n        <div class=\"clear-fix\"></div>\n\n        <div class=\"container-fluid\">\n            <table class=\"table table-bordered\" *ngIf=\"timeLine.length > 0\">\n                <thead>\n                <tr>\n                    <th>Number</th>\n                    <th>Question</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of timeLine.reverse()\">\n                    <td> {{ item.index + 1 }} </td>\n                    <td> {{ item.question }}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/learning/learning.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/learning/learning.component.ts ***!
  \***********************************************************/
/*! exports provided: LearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningComponent", function() { return LearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_material_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/material.utility */ "./src/app/utilities/material.utility.ts");
/* harmony import */ var _services_learning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/learning.service */ "./src/app/services/learning.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var LearningComponent = /** @class */ (function () {
    function LearningComponent(materialUtility, learningService) {
        this.materialUtility = materialUtility;
        this.learningService = learningService;
        this.timeLine = [];
        this.currentTrack = { question: '', answer: '', index: -1 };
        this.index = 0;
        this.randomize = false;
        this.binderAudioRefListener = false;
        this.playing = false;
        this.repeatCount = {
            options: [1, 2, 3],
            total: 3,
            soFar: 1
        };
        this.materialUtility = materialUtility;
        this.learningService = learningService;
        this.nextTrack();
    }
    LearningComponent_1 = LearningComponent;
    LearningComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.binderAudioRefListener) {
            this.audioPlayerRef.nativeElement.addEventListener('ended', function () {
                _this.repeatCount.soFar++;
                if (_this.repeatCount.soFar === _this.repeatCount.total) {
                    _this.nextTrack();
                }
                else {
                    _this.resetTrack();
                }
            }, false);
            this.binderAudioRefListener = true;
        }
    };
    LearningComponent.prototype.previousTrack = function () {
        if (this.index - 1 >= 0) {
            this.index--;
            this.currentTrack = this.timeLine[this.index];
        }
    };
    LearningComponent.prototype.nextTrack = function () {
        if (this.timeLine.length === 0) {
            this.currentTrack = this.materialUtility.randomItemInRange(-1);
            this.timeLine.push(this.currentTrack);
        }
        else if (this.index + 1 === this.timeLine.length) {
            this.timeLine.push(this.currentTrack);
            this.currentTrack = this.materialUtility
                .randomItemInRange(!this.randomize && this.currentTrack ? this.currentTrack.index : undefined);
            this.index++;
        }
        else if (this.index + 1 < this.timeLine.length) {
            this.index++;
            this.currentTrack = this.timeLine[this.index];
        }
        this.repeatCount.soFar = 1;
    };
    LearningComponent.prototype.itemToStreamUrl = function (item) {
        return this.learningService.toStreamUrl(item.index + 1);
    };
    LearningComponent.prototype.itemToImageUrl = function (item) {
        var correctedIndex = item.index + 1;
        var frontIndex = 2 * correctedIndex - 1;
        var backIndex = 2 * correctedIndex;
        return {
            front: this.learningService.toImageUrl(frontIndex),
            back: this.learningService.toImageUrl(backIndex)
        };
    };
    LearningComponent.prototype.playTrack = function () {
        this.playing = true;
        this.audioPlayerRef.nativeElement.play();
    };
    LearningComponent.prototype.stopTrack = function () {
        this.playing = false;
        this.audioPlayerRef.nativeElement.pause();
    };
    LearningComponent.prototype.toggleTrack = function () {
        if (this.playing) {
            this.stopTrack();
        }
        else {
            this.playTrack();
        }
    };
    LearningComponent.prototype.toggleRandomizeTracks = function () {
        this.randomize = !this.randomize;
    };
    LearningComponent.prototype.downloadTrack = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.learningService.downloadTrack(this.currentTrack.index + 1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LearningComponent.prototype.resetTrack = function () {
        this.stopTrack();
        this.audioPlayerRef.nativeElement.currentTime = 0;
        this.playTrack();
    };
    LearningComponent.prototype.toggleRepeatCount = function () {
        var index = this.repeatCount.options.indexOf(this.repeatCount.total) + 1;
        this.repeatCount.total = this.repeatCount.options[index % this.repeatCount.options.length];
    };
    var LearningComponent_1;
    LearningComponent.item = null;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('audioOption'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LearningComponent.prototype, "audioPlayerRef", void 0);
    LearningComponent = LearningComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learning',
            template: __webpack_require__(/*! ./learning.component.html */ "./src/app/components/learning/learning.component.html"),
            styles: [__webpack_require__(/*! ./learning.component.css */ "./src/app/components/learning/learning.component.css")]
        }),
        __metadata("design:paramtypes", [_utilities_material_utility__WEBPACK_IMPORTED_MODULE_1__["MaterialUtility"], _services_learning_service__WEBPACK_IMPORTED_MODULE_2__["LearningService"]])
    ], LearningComponent);
    return LearningComponent;
}());



/***/ }),

/***/ "./src/app/components/route-not-found/route-not-found.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/route-not-found/route-not-found.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/route-not-found/route-not-found.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/route-not-found/route-not-found.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  route-not-found works!\n</h3>\n"

/***/ }),

/***/ "./src/app/components/route-not-found/route-not-found.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/route-not-found/route-not-found.component.ts ***!
  \*************************************************************************/
/*! exports provided: RouteNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteNotFoundComponent", function() { return RouteNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouteNotFoundComponent = /** @class */ (function () {
    function RouteNotFoundComponent() {
    }
    RouteNotFoundComponent.prototype.ngOnInit = function () {
    };
    RouteNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route-not-found',
            template: __webpack_require__(/*! ./route-not-found.component.html */ "./src/app/components/route-not-found/route-not-found.component.html"),
            styles: [__webpack_require__(/*! ./route-not-found.component.css */ "./src/app/components/route-not-found/route-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RouteNotFoundComponent);
    return RouteNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/testing/testing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/testing/testing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-full-width {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/components/testing/testing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/testing/testing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default panel-full-width\">\n    <div class=\"panel-heading\">\n        <h4>(#{{question.index}}) {{question.question}}</h4>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <h5>Choices:</h5>\n\n                <div class=\"list-group\">\n                    <button *ngFor=\"let answerVal of question.choices\"\n                            class=\"list-group-item {{cssClassHelper(answerVal)}}\"\n                            (click)=\"validateAnswer(answerVal)\">\n                        {{answerVal}}\n                    </button>\n                </div>\n\n                <div class=\"btn-group\" role=\"group\" aria-label=\"question-control\">\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"previousQuestion()\">Previous Question</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"nextQuestion().then()\">Next Question</button>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\" *ngIf=\"question.answer && answer.answerVal && question.longAnswer\">\n                <h5>Full answer:</h5>\n\n                <div class=\"list-group\">\n                    <li *ngFor=\"let i = index; let answer of question.longAnswer;\" class=\"list-group-item\">\n                        #{{i + 1}}) {{answer}}\n                    </li>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\" *ngIf=\"!(question.answer && answer.answerVal && question.longAnswer)\">\n            </div>\n\n            <div class=\"col-sm-3\">\n                <h5>Score info:</h5>\n\n                <div class=\"list-group\">\n                    <li type=\"button\" class=\"list-group-item\">\n                        Total questions answered: {{timeLine.length}}\n                    </li>\n                    <li type=\"button\" class=\"list-group-item\">\n                        Correct answers: {{status().correct}}\n                    </li>\n                    <li type=\"button\" class=\"list-group-item\">\n                        In-Correct answers: {{status().incorrect}}\n                    </li>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/testing/testing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/testing/testing.component.ts ***!
  \*********************************************************/
/*! exports provided: TestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingComponent", function() { return TestingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_material_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/material.utility */ "./src/app/utilities/material.utility.ts");
/* harmony import */ var _models_ResponseTypeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/ResponseTypeEnum */ "./src/app/models/ResponseTypeEnum.ts");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/score.service */ "./src/app/services/score.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};




var TestingComponent = /** @class */ (function () {
    function TestingComponent(materialUtility, testingService) {
        this.responseTypeEnum = _models_ResponseTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResponseTypeEnum"];
        this.currentTimeLineIndex = 0;
        this.timeLine = [];
        this.answer = {
            questionRef: null,
            answerVal: '',
            result: false,
            index: -1
        };
        this.materialUtility = materialUtility;
        this.testingService = testingService;
        this.nextQuestion().then();
    }
    TestingComponent.prototype.ngOnInit = function () {
    };
    TestingComponent.prototype.previousQuestion = function () {
        if (this.currentTimeLineIndex > 0) {
            this.currentTimeLineIndex--;
        }
        if (this.currentTimeLineIndex >= 0 && this.timeLine.length > this.currentTimeLineIndex) {
            this.question = this.timeLine[this.currentTimeLineIndex].questionRef;
            this.answer = this.timeLine[this.currentTimeLineIndex];
        }
    };
    TestingComponent.prototype.nextQuestion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isFirstQuestion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.currentTimeLineIndex < this.timeLine.length && this.currentTimeLineIndex + 1 < this.timeLine.length)) return [3 /*break*/, 1];
                        this.currentTimeLineIndex++;
                        this.question = this.timeLine[this.currentTimeLineIndex].questionRef;
                        this.answer = this.timeLine[this.currentTimeLineIndex];
                        return [3 /*break*/, 4];
                    case 1:
                        isFirstQuestion = this.question && this.question.answer !== '';
                        if (!isFirstQuestion) return [3 /*break*/, 3];
                        this.timeLine.push(this.answer);
                        // Update the score
                        return [4 /*yield*/, this.updateScoreApi()];
                    case 2:
                        // Update the score
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        // Set the question pointer
                        this.question = this.materialUtility.getRandomQuestion();
                        this.answer = {
                            questionRef: this.question,
                            answerVal: '',
                            result: false,
                            index: -1
                        };
                        this.currentTimeLineIndex = this.timeLine.length - 1;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TestingComponent.prototype.validateAnswer = function (answer) {
        if (this.answer && this.answer.answerVal !== '') {
            return this.answer.result;
        }
        else {
            // Hold on to the answer
            this.answer = {
                questionRef: this.question,
                answerVal: answer,
                result: this.question.answer === answer,
                index: this.question.index
            };
            return this.answer.result;
        }
    };
    TestingComponent.prototype.answered = function () {
        return this.answer && this.answer.answerVal !== '';
    };
    TestingComponent.prototype.responseTypeEnumHelper = function (answer) {
        if (this.answer.answerVal === answer) {
            if (this.answer.result) {
                return _models_ResponseTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResponseTypeEnum"].Correct;
            }
            else {
                return _models_ResponseTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResponseTypeEnum"].Incorrect;
            }
        }
        else {
            return _models_ResponseTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResponseTypeEnum"].Void;
        }
    };
    TestingComponent.prototype.cssClassHelper = function (answerVal) {
        if (this.answered()) {
            if (answerVal === this.answer.questionRef.answer) {
                return 'list-group-item-success';
            }
            else if (this.responseTypeEnumHelper(answerVal) === this.responseTypeEnum.Correct) {
                return 'list-group-item-success';
            }
            else if (this.responseTypeEnumHelper(answerVal) === this.responseTypeEnum.Incorrect) {
                return 'list-group-item-danger';
            }
            else if (this.responseTypeEnumHelper(answerVal) === this.responseTypeEnum.Void) {
                return 'list-group-item-default';
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    };
    TestingComponent.prototype.updateScoreApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.testingService.updateScore(this.answer.result ? 1 : -1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TestingComponent.prototype.status = function () {
        return {
            correct: this.timeLine.filter(function (x) { return x.result; }).length,
            incorrect: this.timeLine.filter(function (x) { return !x.result; }).length
        };
    };
    TestingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testing',
            template: __webpack_require__(/*! ./testing.component.html */ "./src/app/components/testing/testing.component.html"),
            styles: [__webpack_require__(/*! ./testing.component.css */ "./src/app/components/testing/testing.component.css")]
        }),
        __metadata("design:paramtypes", [_utilities_material_utility__WEBPACK_IMPORTED_MODULE_1__["MaterialUtility"], _services_score_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"]])
    ], TestingComponent);
    return TestingComponent;
}());



/***/ }),

/***/ "./src/app/constants/api.routes.ts":
/*!*****************************************!*\
  !*** ./src/app/constants/api.routes.ts ***!
  \*****************************************/
/*! exports provided: VIEW_ADDRESS, API_ADDRESS, PORT, HOST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_ADDRESS", function() { return VIEW_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ADDRESS", function() { return API_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST", function() { return HOST; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var PORT;
var HOST;
if (true) {
    PORT = 80;
    HOST = '';
}
else {}
var VIEW_ADDRESS = "" + HOST + (PORT === 80 ? '' : ":" + PORT);
var API_ADDRESS = VIEW_ADDRESS + "/api";



/***/ }),

/***/ "./src/app/constants/intercept-ignore.ts":
/*!***********************************************!*\
  !*** ./src/app/constants/intercept-ignore.ts ***!
  \***********************************************/
/*! exports provided: ignoreMatchingHttpErrorResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreMatchingHttpErrorResponse", function() { return ignoreMatchingHttpErrorResponse; });
var includesIgnoreCase = function (str, token) { return str.toLowerCase().includes(token.toLowerCase()); };
var ignoreMatchingHttpErrorResponse = function (httpErrorResponse) {
    if (includesIgnoreCase(httpErrorResponse.url, 'NotAuthenticated')) {
        return false;
    }
    return true;
};


/***/ }),

/***/ "./src/app/models/ResponseTypeEnum.ts":
/*!********************************************!*\
  !*** ./src/app/models/ResponseTypeEnum.ts ***!
  \********************************************/
/*! exports provided: ResponseTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseTypeEnum", function() { return ResponseTypeEnum; });
var ResponseTypeEnum;
(function (ResponseTypeEnum) {
    ResponseTypeEnum[ResponseTypeEnum["Correct"] = 0] = "Correct";
    ResponseTypeEnum[ResponseTypeEnum["Incorrect"] = 1] = "Incorrect";
    ResponseTypeEnum[ResponseTypeEnum["Void"] = 2] = "Void";
})(ResponseTypeEnum || (ResponseTypeEnum = {}));


/***/ }),

/***/ "./src/app/modules/common.module.ts":
/*!******************************************!*\
  !*** ./src/app/modules/common.module.ts ***!
  \******************************************/
/*! exports provided: CommonComponentsModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentsModules", function() { return CommonComponentsModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utilities_custom_error_handler_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/custom-error-handler.utility */ "./src/app/utilities/custom-error-handler.utility.ts");
/* harmony import */ var _services_connection_test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/connection-test.service */ "./src/app/services/connection-test.service.ts");
/* harmony import */ var _components_common_http_intercept_http_intercept_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common/http-intercept/http-intercept.component */ "./src/app/components/common/http-intercept/http-intercept.component.ts");
/* harmony import */ var _components_common_test_api_test_api_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/test-api/test-api.component */ "./src/app/components/common/test-api/test-api.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _components_common_common_wrapper_common_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/common/common-wrapper/common-wrapper.component */ "./src/app/components/common/common-wrapper/common-wrapper.component.ts");
/* harmony import */ var _components_common_test_authenticated_test_authenticated_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/test-authenticated/test-authenticated.component */ "./src/app/components/common/test-authenticated/test-authenticated.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CommonComponentsModules = /** @class */ (function () {
    function CommonComponentsModules() {
    }
    CommonComponentsModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["AlertModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            ],
            providers: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], _services_connection_test_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionTestService"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _utilities_custom_error_handler_utility__WEBPACK_IMPORTED_MODULE_3__["RequestInterceptor"],
                    multi: true,
                }],
            exports: [_components_common_common_wrapper_common_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["CommonWrapperComponent"]],
            declarations: [
                _components_common_http_intercept_http_intercept_component__WEBPACK_IMPORTED_MODULE_5__["HttpInterceptComponent"],
                _components_common_test_api_test_api_component__WEBPACK_IMPORTED_MODULE_6__["TestApiComponent"],
                _components_common_common_wrapper_common_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["CommonWrapperComponent"],
                _components_common_test_authenticated_test_authenticated_component__WEBPACK_IMPORTED_MODULE_9__["TestAuthenticatedComponent"],
            ]
        })
    ], CommonComponentsModules);
    return CommonComponentsModules;
}());



/***/ }),

/***/ "./src/app/modules/identity.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/identity.module.ts ***!
  \********************************************/
/*! exports provided: IdentityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityModule", function() { return IdentityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/identity.service */ "./src/app/services/identity.service.ts");
/* harmony import */ var _utilities_authentication_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/authentication.utility */ "./src/app/utilities/authentication.utility.ts");
/* harmony import */ var _components_identity_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/identity/logout/logout.component */ "./src/app/components/identity/logout/logout.component.ts");
/* harmony import */ var _components_identity_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/identity/register/register.component */ "./src/app/components/identity/register/register.component.ts");
/* harmony import */ var _components_identity_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/identity/login/login.component */ "./src/app/components/identity/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var IdentityModule = /** @class */ (function () {
    function IdentityModule() {
    }
    IdentityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ],
            providers: [_services_identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"], _utilities_authentication_utility__WEBPACK_IMPORTED_MODULE_3__["AuthenticationUtility"]],
            declarations: [
                _components_identity_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_identity_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _components_identity_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"],
            ]
        })
    ], IdentityModule);
    return IdentityModule;
}());



/***/ }),

/***/ "./src/app/modules/learning.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/learning.module.ts ***!
  \********************************************/
/*! exports provided: LearningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningModule", function() { return LearningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_learning_learning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/learning/learning.component */ "./src/app/components/learning/learning.component.ts");
/* harmony import */ var _services_learning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/learning.service */ "./src/app/services/learning.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LearningModule = /** @class */ (function () {
    function LearningModule() {
    }
    LearningModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [_services_learning_service__WEBPACK_IMPORTED_MODULE_3__["LearningService"]],
            declarations: [_components_learning_learning_component__WEBPACK_IMPORTED_MODULE_2__["LearningComponent"]]
        })
    ], LearningModule);
    return LearningModule;
}());



/***/ }),

/***/ "./src/app/modules/testing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/testing.module.ts ***!
  \*******************************************/
/*! exports provided: TestingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingModule", function() { return TestingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_testing_testing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/testing/testing.component */ "./src/app/components/testing/testing.component.ts");
/* harmony import */ var _utilities_material_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/material.utility */ "./src/app/utilities/material.utility.ts");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/score.service */ "./src/app/services/score.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TestingModule = /** @class */ (function () {
    function TestingModule() {
    }
    TestingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [_utilities_material_utility__WEBPACK_IMPORTED_MODULE_3__["MaterialUtility"], _services_score_service__WEBPACK_IMPORTED_MODULE_4__["ScoreService"]],
            declarations: [_components_testing_testing_component__WEBPACK_IMPORTED_MODULE_2__["TestingComponent"]]
        })
    ], TestingModule);
    return TestingModule;
}());



/***/ }),

/***/ "./src/app/router-config.ts":
/*!**********************************!*\
  !*** ./src/app/router-config.ts ***!
  \**********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_route_not_found_route_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/route-not-found/route-not-found.component */ "./src/app/components/route-not-found/route-not-found.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_testing_testing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/testing/testing.component */ "./src/app/components/testing/testing.component.ts");
/* harmony import */ var _components_learning_learning_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/learning/learning.component */ "./src/app/components/learning/learning.component.ts");
/* harmony import */ var _components_identity_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/identity/logout/logout.component */ "./src/app/components/identity/logout/logout.component.ts");
/* harmony import */ var _components_identity_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/identity/register/register.component */ "./src/app/components/identity/register/register.component.ts");
/* harmony import */ var _components_identity_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/identity/login/login.component */ "./src/app/components/identity/login/login.component.ts");







var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'testing', component: _components_testing_testing_component__WEBPACK_IMPORTED_MODULE_2__["TestingComponent"] },
    { path: 'learning', component: _components_learning_learning_component__WEBPACK_IMPORTED_MODULE_3__["LearningComponent"] },
    { path: 'login', component: _components_identity_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _components_identity_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'logout', component: _components_identity_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
    { path: '**', component: _components_route_not_found_route_not_found_component__WEBPACK_IMPORTED_MODULE_0__["RouteNotFoundComponent"] },
];


/***/ }),

/***/ "./src/app/services/connection-test.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/connection-test.service.ts ***!
  \*****************************************************/
/*! exports provided: ConnectionTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionTestService", function() { return ConnectionTestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_api_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/api.routes */ "./src/app/constants/api.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectionTestService = /** @class */ (function () {
    function ConnectionTestService(http) {
        this.http = http;
        this.host = _constants_api_routes__WEBPACK_IMPORTED_MODULE_2__["VIEW_ADDRESS"] + '/home';
    }
    ConnectionTestService.prototype.testEcho = function () {
        return this.http.get(this.host + "/echo");
    };
    ConnectionTestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConnectionTestService);
    return ConnectionTestService;
}());



/***/ }),

/***/ "./src/app/services/identity.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/identity.service.ts ***!
  \**********************************************/
/*! exports provided: IdentityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return IdentityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_api_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/api.routes */ "./src/app/constants/api.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utilities_authentication_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/authentication.utility */ "./src/app/utilities/authentication.utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};




var IdentityService = /** @class */ (function () {
    function IdentityService(httpClient, authenticationUtility) {
        this.httpClient = httpClient;
        this.authenticationUtility = authenticationUtility;
        this.host = _constants_api_routes__WEBPACK_IMPORTED_MODULE_1__["API_ADDRESS"] + '/identity';
        this.httpClient = httpClient;
    }
    IdentityService.prototype.isAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = this.host + "/isAuthenticated";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.get(uri, { responseType: 'text' }).toPromise()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    IdentityService.prototype.logIn = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = this.host + "/login";
                        return [4 /*yield*/, this.httpClient.post(uri, {
                                username: username,
                                password: password
                            }, { responseType: 'text' }).toPromise()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.authenticationUtility.setIsAuthenticated(true);
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    IdentityService.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, result;
            return __generator(this, function (_a) {
                uri = this.host + "/logout";
                result = this.httpClient.get(uri, { responseType: 'text' }).toPromise();
                if (result) {
                    this.authenticationUtility.setIsAuthenticated(false);
                }
                return [2 /*return*/, result];
            });
        });
    };
    IdentityService.prototype.register = function (fullname, email, username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = this.host + "/register";
                        return [4 /*yield*/, this.httpClient.post(uri, {
                                fullname: fullname,
                                email: email,
                                username: username,
                                password: password
                            }, { responseType: 'text' }).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    IdentityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _utilities_authentication_utility__WEBPACK_IMPORTED_MODULE_3__["AuthenticationUtility"]])
    ], IdentityService);
    return IdentityService;
}());



/***/ }),

/***/ "./src/app/services/learning.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/learning.service.ts ***!
  \**********************************************/
/*! exports provided: LearningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningService", function() { return LearningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_api_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/api.routes */ "./src/app/constants/api.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};




var LearningService = /** @class */ (function () {
    function LearningService(httpClient) {
        this.httpClient = httpClient;
        this.host = _constants_api_routes__WEBPACK_IMPORTED_MODULE_1__["VIEW_ADDRESS"] + '';
        this.httpClient = httpClient;
    }
    LearningService.prototype.toStreamUrl = function (index) {
        return this.host + "/audio/track-(" + index + ").mp3";
    };
    LearningService.prototype.toImageUrl = function (index) {
        return this.host + "/images/image-(" + index + ").jpg";
    };
    LearningService.prototype.downloadTrack = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var blob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.toStreamUrl(index), { responseType: 'blob' })
                            .toPromise()];
                    case 1:
                        blob = _a.sent();
                        downloadjs__WEBPACK_IMPORTED_MODULE_3__(blob, "track (" + index + ").mp3", 'audio/mp3');
                        return [2 /*return*/];
                }
            });
        });
    };
    LearningService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LearningService);
    return LearningService;
}());



/***/ }),

/***/ "./src/app/services/score.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/score.service.ts ***!
  \*******************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_api_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/api.routes */ "./src/app/constants/api.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var ScoreService = /** @class */ (function () {
    function ScoreService(httpClient) {
        this.httpClient = httpClient;
        this.host = _constants_api_routes__WEBPACK_IMPORTED_MODULE_2__["API_ADDRESS"] + '/score';
    }
    ScoreService.prototype.updateScore = function (offset) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = "" + this.host;
                        return [4 /*yield*/, this.httpClient.put(uri, { offset: offset }, { responseType: 'text' }).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ScoreService.prototype.scoreInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = "" + this.host;
                        return [4 /*yield*/, this.httpClient.get(uri).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ScoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScoreService);
    return ScoreService;
}());



/***/ }),

/***/ "./src/app/utilities/authentication.utility.ts":
/*!*****************************************************!*\
  !*** ./src/app/utilities/authentication.utility.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationUtility", function() { return AuthenticationUtility; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthenticationUtility = /** @class */ (function () {
    function AuthenticationUtility() {
    }
    AuthenticationUtility_1 = AuthenticationUtility;
    AuthenticationUtility.prototype.addOnChangeHandler = function (handler) {
        AuthenticationUtility_1._onChangeHandlers.push(handler);
    };
    AuthenticationUtility.prototype.setIsAuthenticated = function (isAuthenticated) {
        AuthenticationUtility_1._isAuthenticated = isAuthenticated;
        AuthenticationUtility_1._onChangeHandlers.forEach(function (x) { return x(isAuthenticated); });
    };
    AuthenticationUtility.prototype.getIsAuthenticated = function () {
        return AuthenticationUtility_1._isAuthenticated;
    };
    var AuthenticationUtility_1;
    AuthenticationUtility._isAuthenticated = false;
    AuthenticationUtility._onChangeHandlers = [];
    AuthenticationUtility = AuthenticationUtility_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthenticationUtility);
    return AuthenticationUtility;
}());



/***/ }),

/***/ "./src/app/utilities/custom-error-handler.utility.ts":
/*!***********************************************************!*\
  !*** ./src/app/utilities/custom-error-handler.utility.ts ***!
  \***********************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/do */ "../node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_intercept_ignore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/intercept-ignore */ "./src/app/constants/intercept-ignore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor() {
    }
    RequestInterceptor_1 = RequestInterceptor;
    RequestInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status !== 0 && Object(_constants_intercept_ignore__WEBPACK_IMPORTED_MODULE_4__["ignoreMatchingHttpErrorResponse"])(err)) {
                // do error handling here
                RequestInterceptor_1._onErrorHandlers.forEach(function (x) { return x(err); });
            }
        }));
    };
    RequestInterceptor.prototype.addOnErrorHandler = function (handler) {
        RequestInterceptor_1._onErrorHandlers.push(handler);
    };
    var RequestInterceptor_1;
    RequestInterceptor._onErrorHandlers = [];
    RequestInterceptor = RequestInterceptor_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/app/utilities/material.utility.ts":
/*!***********************************************!*\
  !*** ./src/app/utilities/material.utility.ts ***!
  \***********************************************/
/*! exports provided: MaterialUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialUtility", function() { return MaterialUtility; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var material = [
    {
        'question': 'What is the supreme law of the land?',
        'answer': [
            'the Constitution',
        ]
    },
    {
        'question': 'What does the Constitution do?',
        'answer': [
            'sets up the government',
            'defines the government',
            'protects basic rights of Americans'
        ]
    },
    {
        'question': 'The idea of self-government is in the first three words of the Constitution. What are these words?',
        'answer': [
            'We the People'
        ]
    },
    {
        'question': 'What is an amendment?',
        'answer': [
            'a change (to the Constitution)',
            'an addition (to the Constitution)'
        ]
    },
    {
        'question': 'What do we call the first ten amendments to the Constitution?',
        'answer': [
            'the Bill of Rights'
        ]
    },
    {
        'question': 'What is one right or freedom from the First Amendment?*',
        'answer': [
            'speech',
            'religion',
            'assembly',
            'press',
            'petition the government'
        ]
    },
    {
        'question': 'How many amendments does the Constitution have?',
        'answer': [
            'twenty-seven (27)'
        ]
    },
    {
        'question': 'What did the Declaration of Independence do?',
        'answer': [
            'announced our independence (from Great Britain)',
            'declared our independence (from Great Britain)',
            'said that the United States is free (from Great Britain)'
        ]
    },
    {
        'question': 'What are two rights in the Declaration of Independence?',
        'answer': [
            'life',
            'liberty',
            'pursuit of happiness'
        ]
    },
    {
        'question': 'What is freedom of religion?',
        'answer': [
            'You can practice any religion, or not practice a religion.'
        ]
    },
    {
        'question': 'What is the economic system in the United States?*',
        'answer': [
            'capitalist economy',
            'market economy'
        ]
    },
    {
        'question': 'What is the “rule of law”?',
        'answer': [
            'Everyone must follow the law.',
            'Leaders must obey the law.',
            'Government must obey the law.',
            'No one is above the law.'
        ]
    },
    {
        'question': 'Name one branch or part of the government.*',
        'answer': [
            'Congress',
            'legislative',
            'President',
            'executive',
            'the courts',
            'judicial'
        ]
    },
    {
        'question': 'What stops one branch of government from becoming too powerful?',
        'answer': [
            'checks and balances',
            'separation of powers'
        ]
    },
    {
        'question': 'Who is in charge of the executive branch?',
        'answer': [
            'the President'
        ]
    },
    {
        'question': 'Who makes federal laws?',
        'answer': [
            'Congress',
            'Senate and House (of Representatives)',
            '(U.S. or national) legislature'
        ]
    },
    {
        'question': 'What are the two parts of the U.S. Congress?*',
        'answer': [
            'the Senate and House (of Representatives)'
        ]
    },
    {
        'question': 'How many U.S. Senators are there?',
        'answer': [
            'one hundred (100)'
        ]
    },
    {
        'question': 'We elect a U.S. Senator for how many years?',
        'answer': [
            'six (6)'
        ]
    },
    {
        'question': 'Who is one of your state’s U.S. Senators now?*',
        'answer': [
            'Answers will vary. [District of Columbia residents and residents of U.S. territories should answer that D.C. ' +
                '(or the territory where the applicant lives) has no U.S. Senators.]'
        ]
    },
    {
        'question': 'The House of Representatives has how many voting members?',
        'answer': [
            'four hundred thirty-five (435)'
        ]
    },
    {
        'question': 'We elect a U.S. Representative for how many years?',
        'answer': [
            'two (2)'
        ]
    },
    {
        'question': 'Name your U.S. Representative.',
        'answer': [
            'Answers will vary. [Residents of territories with nonvoting Delegates or Resident Commissioners may provide ' +
                'the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting)' +
                'Representatives in Congress.]'
        ]
    },
    {
        'question': 'Who does a U.S. Senator represent?',
        'answer': [
            'all people of the state'
        ]
    },
    {
        'question': 'Why do some states have more Representatives than other states?',
        'answer': [
            '(because of) the state’s population',
            '(because) they have more people',
            '(because) some states have more people'
        ]
    },
    {
        'question': 'We elect a President for how many years?',
        'answer': [
            'four (4)'
        ]
    },
    {
        'question': 'In what month do we vote for President?*',
        'answer': [
            'November'
        ]
    },
    {
        'question': 'What is the name of the President of the United States now?*',
        'answer': [
            'Donald J. Trump',
            'Donald Trump',
            'Trump'
        ]
    },
    {
        'question': 'What is the name of the Vice President of the United States now?',
        'answer': [
            'Michael R. Pence',
            'Mike Pence',
            'Pence'
        ]
    },
    {
        'question': 'If the President can no longer serve, who becomes President?',
        'answer': [
            'the Vice President'
        ]
    },
    {
        'question': 'If both the President and the Vice President can no longer serve, who becomes President?',
        'answer': [
            'the Speaker of the House'
        ]
    },
    {
        'question': 'Who is the Commander in Chief of the military?',
        'answer': [
            'the President'
        ]
    },
    {
        'question': 'Who signs bills to become laws?',
        'answer': [
            'the President'
        ]
    },
    {
        'question': 'Who vetoes bills?',
        'answer': [
            'the President'
        ]
    },
    {
        'question': 'What does the President’s Cabinet do?',
        'answer': [
            'advises the President'
        ]
    },
    {
        'question': 'What are two Cabinet-level positions?',
        'answer': [
            'Secretary of Agriculture',
            'Secretary of Commerce',
            'Secretary of Defense',
            'Secretary of Education',
            'Secretary of Energy',
            'Secretary of Health and Human Services',
            'Secretary of Homeland Security',
            'Secretary of Housing and Urban Development',
            'Secretary of the Interior',
            'Secretary of Labor',
            'Secretary of State',
            'Secretary of Transportation',
            'Secretary of the Treasury',
            'Secretary of Veterans Affairs',
            'Attorney General',
            'Vice President'
        ]
    },
    {
        'question': 'What does the judicial branch do?',
        'answer': [
            'reviews laws',
            'explains laws',
            'resolves disputes (disagreements)',
            'decides if a law goes against the Constitution'
        ]
    },
    {
        'question': 'What is the highest court in the United States?',
        'answer': [
            'the Supreme Court'
        ]
    },
    {
        'question': 'How many justices are on the Supreme Court?',
        'answer': [
            'nine (9)'
        ]
    },
    {
        'question': 'Who is the Chief Justice of the United States now?',
        'answer': [
            'John Roberts (John G. Roberts, Jr.)'
        ]
    },
    {
        'question': 'Under our Constitution, some powers belong to the federal government. What is one power of the ' +
            'federal government?',
        'answer': [
            'to print money',
            'to declare war',
            'to create an army',
            'to make treaties'
        ]
    },
    {
        'question': 'Under our Constitution, some powers belong to the states. What is one power of the states?',
        'answer': [
            'provide schooling and education',
            'provide protection (police)',
            'provide safety (fire departments)',
            'give a driver’s license',
            'approve zoning and land use'
        ]
    },
    {
        'question': 'Who is the Governor of your state now?',
        'answer': [
            'Answers will vary. [District of Columbia residents should answer that D.C. does not have a Governor.]'
        ]
    },
    {
        'question': 'What is the capital of your state?*',
        'answer': [
            'Answers will vary. [District of Columbia residents should answer that D.C. is not a state and does not have' +
                ' a capital. Residents of U.S. territories should name the capital of the territory.]'
        ]
    },
    {
        'question': 'What are the two major political parties in the United States?*',
        'answer': [
            'Democratic and Republican'
        ]
    },
    {
        'question': 'What is the political party of the President now?',
        'answer': [
            'Republican (Party)'
        ]
    },
    {
        'question': 'What is the name of the Speaker of the House of Representatives now?',
        'answer': [
            'Paul D. Ryan',
            '(Paul) Ryan'
        ]
    },
    {
        'question': 'There are four amendments to the Constitution about who can vote. Describe one of them.',
        'answer': [
            'Citizens eighteen (18) and older (can vote).',
            'You don’t have to pay (a poll tax) to vote.',
            'Any citizen can vote. (Women and men can vote.)',
            'A male citizen of any race (can vote).'
        ]
    },
    {
        'question': 'What is one responsibility that is only for United States citizens?*',
        'answer': [
            'serve on a jury',
            'vote in a federal election'
        ]
    },
    {
        'question': 'Name one right only for United States citizens.',
        'answer': [
            'vote in a federal election',
            'run for federal office'
        ]
    },
    {
        'question': 'What are two rights of everyone living in the United States?',
        'answer': [
            'freedom of expression',
            'freedom of speech',
            'freedom of assembly',
            'freedom to petition the government',
            'freedom of religion',
            'the right to bear arms'
        ]
    },
    {
        'question': 'What do we show loyalty to when we say the Pledge of Allegiance?',
        'answer': [
            'the United States',
            'the flag'
        ]
    },
    {
        'question': 'What is one promise you make when you become a United States citizen?',
        'answer': [
            'give up loyalty to other countries',
            'defend the Constitution and laws of the United States',
            'obey the laws of the United States',
            'serve in the U.S. military (if needed)',
            'serve (do important work for) the nation (if needed)',
            'be loyal to the United States'
        ]
    },
    {
        'question': 'How old do citizens have to be to vote for President?*',
        'answer': [
            'eighteen (18) and older'
        ]
    },
    {
        'question': 'What are two ways that Americans can participate in their democracy?',
        'answer': [
            'vote',
            'join a political party',
            'help with a campaign',
            'join a civic group',
            'join a community group',
            'give an elected official your opinion on an issue',
            'call Senators and Representatives',
            'publicly support or oppose an issue or policy',
            'run for office',
            'write to a newspaper'
        ]
    },
    {
        'question': 'When is the last day you can send in federal income tax forms?*',
        'answer': [
            'April 15'
        ]
    },
    {
        'question': 'When must all men register for the Selective Service?',
        'answer': [
            'at age eighteen (18)',
            'between eighteen (18) and twenty-six (26)'
        ]
    },
    {
        'question': 'What is one reason colonists came to America?',
        'answer': [
            'freedom',
            'political liberty',
            'religious freedom',
            'economic opportunity',
            'practice their religion',
            'escape persecution'
        ]
    },
    {
        'question': 'Who lived in America before the Europeans arrived?',
        'answer': [
            'American Indians',
            'Native Americans'
        ]
    },
    {
        'question': 'What group of people was taken to America and sold as slaves?',
        'answer': [
            'Africans',
            'people from Africa'
        ]
    },
    {
        'question': 'Why did the colonists fight the British?',
        'answer': [
            'because of high taxes (taxation without representation)',
            'because the British army stayed in their houses (boarding, quartering)',
            'because they didn’t have self-government'
        ]
    },
    {
        'question': 'Who wrote the Declaration of Independence?',
        'answer': [
            '(Thomas) Jefferson'
        ]
    },
    {
        'question': 'When was the Declaration of Independence adopted?',
        'answer': [
            'July 4, 1776'
        ]
    },
    {
        'question': 'There were 13 original states. Name three.',
        'answer': [
            'New Hampshire',
            'Massachusetts',
            'Rhode Island',
            'Connecticut',
            'New York',
            'New Jersey',
            'Pennsylvania',
            'Delaware',
            'Maryland',
            'Virginia',
            'North Carolina',
            'South Carolina',
            'Georgia'
        ]
    },
    {
        'question': 'What happened at the Constitutional Convention?',
        'answer': [
            'The Constitution was written.',
            'The Founding Fathers wrote the Constitution.'
        ]
    },
    {
        'question': 'When was the Constitution written?',
        'answer': [
            '1787'
        ]
    },
    {
        'question': 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.',
        'answer': [
            '(James) Madison',
            '(Alexander) Hamilton',
            '(John) Jay',
            'Publius'
        ]
    },
    {
        'question': 'What is one thing Benjamin Franklin is famous for?',
        'answer': [
            'U.S. diplomat',
            'oldest member of the Constitutional Convention',
            'first Postmaster General of the United States',
            'writer of “Poor Richard’s Almanac”',
            'started the first free libraries'
        ]
    },
    {
        'question': 'Who is the “Father of Our Country”?',
        'answer': [
            '(George) Washington'
        ]
    },
    {
        'question': 'Who was the first President?*',
        'answer': [
            '(George) Washington'
        ]
    },
    {
        'question': 'What territory did the United States buy from France in 1803?',
        'answer': [
            'the Louisiana Territory',
            'Louisiana'
        ]
    },
    {
        'question': 'Name one war fought by the United States in the 1800s.',
        'answer': [
            'War of 1812',
            'Mexican-American War',
            'Civil War',
            'Spanish-American War'
        ]
    },
    {
        'question': 'Name the U.S. war between the North and the South.',
        'answer': [
            'the Civil War',
            'the War between the States'
        ]
    },
    {
        'question': 'Name one problem that led to the Civil War.',
        'answer': [
            'slavery',
            'economic reasons',
            'states’ rights'
        ]
    },
    {
        'question': 'What was one important thing that Abraham Lincoln did?*',
        'answer': [
            'freed the slaves (Emancipation Proclamation)',
            'saved (or preserved) the Union',
            'led the United States during the Civil War'
        ]
    },
    {
        'question': 'What did the Emancipation Proclamation do?',
        'answer': [
            'freed the slaves',
            'freed slaves in the Confederacy',
            'freed slaves in the Confederate states',
            'freed slaves in most Southern states'
        ]
    },
    {
        'question': 'What did Susan B. Anthony do?',
        'answer': [
            'fought for women’s rights',
            'fought for civil rights'
        ]
    },
    {
        'question': 'Name one war fought by the United States in the 1900s.*',
        'answer': [
            'World War I',
            'World War II',
            'Korean War',
            'Vietnam War',
            '(Persian) Gulf War'
        ]
    },
    {
        'question': 'Who was President during World War I?',
        'answer': [
            '(Woodrow) Wilson'
        ]
    },
    {
        'question': 'Who was President during the Great Depression and World War II?',
        'answer': [
            '(Franklin) Roosevelt'
        ]
    },
    {
        'question': 'Who did the United States fight in World War II?',
        'answer': [
            'Japan, Germany, and Italy'
        ]
    },
    {
        'question': 'Before he was President, Eisenhower was a general. What war was he in?',
        'answer': [
            'World War II'
        ]
    },
    {
        'question': 'During the Cold War, what was the main concern of the United States?',
        'answer': [
            'Communism'
        ]
    },
    {
        'question': 'What movement tried to end racial discrimination?',
        'answer': [
            'civil rights (movement)'
        ]
    },
    {
        'question': 'What did Martin Luther King, Jr. do?*',
        'answer': [
            'fought for civil rights',
            'worked for equality for all Americans'
        ]
    },
    {
        'question': 'What major event happened on September 11, 2001, in the United States?',
        'answer': [
            'Terrorists attacked the United States.'
        ]
    },
    {
        'question': 'Name one American Indian tribe in the United States.',
        'answer': [
            '[USCIS Officers will be supplied with a list of federally recognized American Indian tribes.]'
        ]
    },
    {
        'question': 'Name one of the two longest rivers in the United States.',
        'answer': [
            'Missouri (River)',
            'Mississippi (River)'
        ]
    },
    {
        'question': 'What ocean is on the West Coast of the United States?',
        'answer': [
            'Pacific (Ocean)'
        ]
    },
    {
        'question': 'Name one U.S. territory.',
        'answer': [
            'Puerto Rico',
            'U.S. Virgin Islands',
            'American Samoa',
            'Northern Mariana Islands',
            'Guam'
        ]
    },
    {
        'question': 'Name one state that borders Canada.',
        'answer': [
            'Maine',
            'New Hampshire',
            'Vermont',
            'New York',
            'Pennsylvania',
            'Ohio',
            'Michigan',
            'Minnesota',
            'North Dakota',
            'Montana',
            'Idaho',
            'Washington',
            'Alaska'
        ]
    },
    {
        'question': 'Name one state that borders Mexico.',
        'answer': [
            'California',
            'Arizona',
            'New Mexico',
            'Texas'
        ]
    },
    {
        'question': 'What is the capital of the United States?*',
        'answer': [
            'Washington, D.C.'
        ]
    },
    {
        'question': 'Where is the Statue of Liberty?*',
        'answer': [
            'New York (Harbor)',
            'Liberty Island'
        ]
    },
    {
        'question': 'Why does the flag have 13 stripes?',
        'answer': [
            'because there were 13 original colonies',
            'because the stripes represent the original colonies'
        ]
    },
    {
        'question': 'Why does the flag have 50 stars?*',
        'answer': [
            'because there is one star for each state',
            'because each star represents a state',
            'because there are 50 states'
        ]
    },
    {
        'question': 'What is the name of the national anthem?',
        'answer': [
            'The Star-Spangled Banner'
        ]
    },
    {
        'question': 'When do we celebrate Independence Day?*',
        'answer': [
            'July 4'
        ]
    },
    {
        'question': 'Name two national U.S. holidays.',
        'answer': [
            'New Year’s Day',
            'Martin Luther King, Jr. Day',
            'Presidents’ Day',
            'Memorial Day',
            'Independence Day',
            'Labor Day',
            'Columbus Day',
            'Veterans Day',
            'Thanksgiving',
            'Christmas'
        ]
    }
];
var MaterialUtility = /** @class */ (function () {
    function MaterialUtility() {
    }
    MaterialUtility_1 = MaterialUtility;
    MaterialUtility.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    MaterialUtility.randomInRange = function (exclude) {
        if (exclude === void 0) { exclude = -1; }
        var index = Math.floor(Math.random() * material.length);
        if (index === exclude) {
            return this.randomInRange(exclude);
        }
        else {
            return index;
        }
    };
    MaterialUtility.prototype.randomItemInRange = function (previousIndex) {
        if (previousIndex === void 0) { previousIndex = -1; }
        var index;
        if (previousIndex === -1) {
            index = Math.floor(Math.random() * material.length);
        }
        else {
            index = (previousIndex + 1) % material.length;
        }
        return {
            question: material[index].question,
            answer: material[index].answer[0],
            index: index,
            longAnswer: material[index].answer
        };
    };
    MaterialUtility.prototype.getRandomQuestion = function (choiceCount) {
        if (choiceCount === void 0) { choiceCount = 4; }
        var index = MaterialUtility_1.randomInRange();
        var item = material[index];
        var choices = MaterialUtility_1.shuffle(Array.from({ length: choiceCount - 1 }, function (v, i) { return i; })
            .map(function () { return MaterialUtility_1.randomInRange(index); })
            .map(function (i) { return material[i]; })
            .map(function (m) { return m.answer[0]; })
            .concat([item.answer[0]]));
        return {
            index: index,
            question: item.question,
            answer: item.answer[0],
            choices: choices,
            longAnswer: item.answer
        };
    };
    var MaterialUtility_1;
    MaterialUtility = MaterialUtility_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MaterialUtility);
    return MaterialUtility;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/HES8493/WebstormProjects/uscis-naturalization-exam-frontend/uscis-naturalization-exam-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map