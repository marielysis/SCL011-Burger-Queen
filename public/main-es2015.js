(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar>\n</app-nav-bar>\n\n<div class=\"container main-container\">\n    <router-outlet></router-outlet>\n</div>\n\n<app-footer>\n</app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/breakfast/breakfast.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/breakfast/breakfast.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Menu <small>Desayuno</small></h1>\n<hr>\n\n<div>\n    <input #name type=\"text\" placeholder=\"Nombre Cliente\" class=\"form-control mt-3\">\n\n    <button class=\"btn-danger btn mt-3 mb-3\" type=\"submit\" (click)=\"add(name.value)\">Guardar</button>\n\n</div>\n<div class=\"card-columns\">\n <div *ngFor=\"let p of products; let i = index\" class=\"card bg-dark text-white cardme\">\n\n                <img src=\"{{ p.imagen }}\" class=\"card-img imag marie\" alt=\"...\">\n   <div class=\"card-img-overlay \" >\n    <div class=\"form-group\">\n        <!-- Boton donde de guardan valores de la orden -->\n        <button class=\"btn-danger btn\" type=\"button\" value=\"p.name\" (click)=\"clickedButton(p.name, p.price)\">\n            {{p.name}}\n        </button>\n    \n    </div>\n                        <div class=\"form-group\">\n    <button (click)=\"deleteProduct($event, p)\" class=\"btn-danger btn\"><i class=\"far fa-trash-alt\"></i></button>\n                </div>\n                <div class=\"form-group\">\n                    <button (click)=\"editProduct($event, p)\" class=\"btn-danger btn\"><i class=\"fas fa-edit\"></i></button>\n                </div>\n            \n                    <div *ngIf=\"editing && editingProduct.id == p.id\">\n                    <form (ngSubmit)=\"updateProduct()\">\n                            <input type=\"text\" name=\"name\" [(ngModel)]=\"editingProduct.name\">\n                            <input type=\"text\" name=\"type\" [(ngModel)]=\"editingProduct.type\">\n                            <input type=\"number\" name=\"price\" [(ngModel)]=\"editingProduct.price\">\n                            <button type=\"submit\" class=\"btn-danger btn\">\n                                Update\n                            </button>\n                    </form>\n                </div>\n</div>\n\n</div>\n</div>\n\n<div class=\"col-6\">\n    <div>Cliente: {{item.name}}</div>\n\n    <table class=\"table\">\n\n        <tbody>\n            <tr class=\"alert alert-success\" role=\"alert\" *ngFor=\"let order of item.order\" >\n                <td>{{order.value}}</td>\n                <td>${{order.cost}}</td>\n                <div >\n                    <button (click)=\"deleteOrder(i, order)\" class=\"btn-danger\"><i class=\"far fa-trash-alt\"></i></button>\n                                </div>\n\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr class=\"alert alert-success\" role=\"alert\">\n                <td>Total:</td>\n                <td>${{item.total}}</td>\n            </tr>\n        </tfoot>\n\n    </table>\n\n    <button (click)=addItem() class=\"btn-danger btn\">Enviar Pedido</button>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer bg-dark text-center\">\n\n    <div>\n\n        <p>\n            &copy; {{ anio }} Marielys Rodríguez | María José Gómez\n        </p>\n\n    </div>\n\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron container-image\">\n    <h1>Bienvenidos a Burguer Queen</h1>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/kitchen/kitchen.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/kitchen/kitchen.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n\n    <table class=\"table mt-3\">\n        <thead>\n            <tr class=\"btn-danger\">\n                <th scope=\"col\">#Orden</th>\n                <th scope=\"col\">Cliente</th>\n                <th scope=\"col\">Orden</th>\n                <th scope=\"col\">Total</th>\n                <th scope=\"col\">&nbsp;</th>\n\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of items; index as i\" class=\"alert alert-success\" role=\"alert\">\n                <th scope=\"row\">{{i+1}}</th>\n                <td>{{item.name}}</td>\n\n                <td>\n                    <tr *ngFor=\" let order of item.order \">\n                        {{order.value}}\n                    </tr>\n                </td>\n\n                <td>${{item.total}}</td>\n\n                <div class=\"form-group\">\n                    <button class=\"btn-danger btn\" (click)=\" deleteItem($event, item) \">\n                                        Orden Lista\n                                    </button>\n                </div>\n\n            </tr>\n\n        </tbody>\n\n\n    </table>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login\" class=\"mb-5 mt-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n                <div class=\"card_login\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <form #formLogin=\"ngForm\" (submit)=\"onLogin()\">\n                                <h1 class=\"h3 mb-3 font-weight-normal\" *ngIf=\"!isError\">Login</h1>\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                                    Something is wrong!\n                                </div>\n                                <div class=\"form-group\">\n                                    <input [(ngModel)]=\"email\" type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input [(ngModel)]=\"password\" type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Ingresar</button>\n                                <div class=\"form-group\">\n                                    <a routerLink=\"/user/register\" class=\"form-control login-user\">Eres nuevo?</a>\n                                </div>\n                                <div class=\"form-group\">\n                                    <button class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\">\n                                <span class=\"fa fa-facebook\"></span>\n                                FACEBOOK\n                              </button>\n                                    <button class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\">\n                                <span class=\"fa fa-google\"></span>\n                                GOOGLE\n                              </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lunch/lunch.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lunch/lunch.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Menu <small>Almuerzo</small></h1>\n<hr>\n\n<div>\n    <input #name type=\"text\" placeholder=\"Nombre Cliente\" class=\"form-control mt-3\">\n\n    <button class=\"btn-danger btn mt-3 mb-3\" type=\"submit\" (click)=\"add(name.value)\"><i class=\"far fa-save\"></i> Guardar</button>\n\n</div>\n<div class=\"card-columns\">\n <div *ngFor=\"let p of products; let i = index\" class=\"card bg-dark text-white cardme\">\n\n                <img src=\"{{ p.imagen }}\" class=\"card-img img-marie\" alt=\"...\">\n   <div class=\"card-img-overlay \" >\n    <div class=\"form-group\">\n        <!-- Boton donde de guardan valores de la orden -->\n        <button class=\"btn-danger btn\" type=\"button\" value=\"p.name\" (click)=\"clickedButton(p.name, p.price)\">\n            {{p.name}}\n        </button>\n    \n    </div>\n    <div class=\"form-group\">\n        <button (click)=\"deleteProduct($event, p)\" class=\"btn-danger btn\"><i class=\"far fa-trash-alt\"></i></button>\n    </div>\n                <div class=\"form-group\">\n                    <button (click)=\"editProduct($event, p)\" class=\"btn-danger btn\"><i class=\"fas fa-edit\"></i></button>\n                </div>\n            \n                    <div *ngIf=\"editing && editingProduct.id == p.id\">\n                    <form (ngSubmit)=\"updateProduct()\">\n                            <input type=\"text\" name=\"name\" [(ngModel)]=\"editingProduct.name\">\n                            <input type=\"text\" name=\"type\" [(ngModel)]=\"editingProduct.type\">\n                            <input type=\"number\" name=\"price\" [(ngModel)]=\"editingProduct.price\">\n                            <button type=\"submit\" class=\"btn-danger btn\">\n                                Update\n                            </button>\n                    </form>\n                </div>\n</div>\n\n</div>\n</div>\n\n<div class=\"col-6\">\n    <div>Cliente: {{item.name}}</div>\n\n    <table class=\"table\">\n\n        <tbody>\n            <tr class=\"alert alert-success\" role=\"alert\" *ngFor=\"let order of item.order; let i = index\">\n                <td>{{order.value}}</td>\n                <td>${{order.cost}}</td>\n                <div >\n                    <button (click)=\"deleteOrder(i, order)\" class=\"btn-danger\"><i class=\"far fa-trash-alt\"></i></button>\n                                </div>\n\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr class=\"alert alert-success\" role=\"alert\">\n                <td>Total:</td>\n                <td>${{item.total}}</td>\n\n\n            </tr>\n        </tfoot>\n\n    </table>\n\n    <button (click)=addItem() class=\"btn-danger btn\">Enviar Pedido</button>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <button (click)=\"addProduct($event, p)\" class=\"btn-danger\">\n        Configurar Menu\n    </button>\n\n<br>\n<br>\n<br>\n    \n<div class=\"row col-md-5\">\n    <div *ngIf=\"adding\" class=\"card card-body\">\n        <form (ngSubmit)=\"addProduct()\">\n            <div class=\"form-group\">\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"product.name\" class=\"form-control\" placeholder=\"Nombre del producto\">\n            </div>\n        \n            <div class=\"form-group\">\n                <input type=\"text\" name=\"type\" [(ngModel)]=\"product.type\" class=\"form-control\" placeholder=\"Tipo\">\n            </div>\n\n            <div class=\"form-group\">\n                <input type=\"number\" name=\"price\" [(ngModel)]=\"product.price\" class=\"form-control\" placeholder=\"Precio\">\n            </div>\n\n            <div class=\"form-group\">\n                <input type=\"text\" name=\"image\" [(ngModel)]=\"product.imagen\" class=\"form-control\" placeholder=\"Imagen\">\n            </div>\n\n            <button type=\"submit\" class=\"btn-danger\">\n            Guardar\n            </button>\n        </form>\n    </div>\n</div>\n</div>\n\n\n\n\n<div>\n    <!-- <a type=\"button\" class=\"btn btn-danger\" routerLink=\"/breakfast\" routerLinkActive=\"active\">DESAYUNOS</a> -->\n    <a type=\"button\" class=\"btn-danger btn-lg\" routerLink=\"/breakfast\" routerLinkActive=\"active\" role=\"button\">MENU DESAYUNO</a>\n</div>\n<br>\n<br>\n<br>\n\n<div>\n    <a type=\"button\" class=\"btn-danger btn-lg \" routerLink=\"/lunch\" routerLinkActive=\"active\">MENU ALMUERZO</a>\n</div>\n<br>\n<br>\n<br>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg btn btn-danger\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/img/burger-icon.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top letr\" alt=\"\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <!-- utilizo la directiva para comprobar el valor de una propiedad -->\n            <li class=\"nav-item\" *ngIf=\"isLogged \">\n                <a class=\"nav-link letr h4\" routerLink=\"/home\">Home</a>\n            </li>\n            <li class=\" nav-item \" *ngIf=\"isLogged\">\n                <a class=\" nav-link letr h5\" routerLink=\"/profile\">Perfil</a>\n            </li>\n            <li class=\" nav-item \" *ngIf=\"!isLogged\">\n                <a class=\" nav-link letr h5\" routerLink=\"/login\">Login</a>\n            </li>\n            <li class=\" nav-item \" *ngIf=\"!isLogged\">\n                <a class=\" nav-link letr h5\" routerLink=\"/register\">Register</a>\n            </li>\n            <li class=\" nav-item \" *ngIf=\"isLogged\">\n                <a class=\" nav-link letr h5\" routerLink=\"/menu\">Menu</a>\n            </li>\n            <li class=\" nav-item \" *ngIf=\"isLogged\">\n                <a class=\" nav-link letr h5\" routerLink=\"/kitchen\">Cocina</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"isLogged\">\n                <a href=\"#\" class=\"nav-link letr h5\" (click)=\"onLogout()\">Salir\n                </a>\n\n        </ul>\n\n\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"profile\" class=\"container\">\n    <div class=\"row mt-5\">\n        <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center card\">\n            <div class=\"row\">\n\n                <div class=\"col-lg-12 col-sm-12 col-12 profile-header\"></div>\n            </div>\n            <div class=\"row user-details\">\n                <div class=\"col-12\">\n                    <img src=\"{{user.photoUrl}}\" class=\"rounded-circle img-thumbnail\" alt=\"profile\">\n                    <h5 *ngIf=\"providerId != 'password'\">{{user.name}}</h5>\n                    <p>\n                        {{user.email}}\n                    </p>\n\n                    <hr>\n                    <span>Recuerda La Empatia es Ponerse en el lugar del otro</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"register\" class=\"mb-5 mt-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n                <div class=\"card_register\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <form #formRegister=\"ngForm\" (ngSubmit)=\"onAddUser()\">\n                                <h1 class=\"h3 mb-3 font-weight-normal\">Registrar</h1>\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                                    {{msgError}}\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\" required minlength=\"8\">\n                                </div>\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.touched && !email.valid\">\n                                    <div *ngIf=\"email.errors.required\">Se requiere correo electronico </div>\n                                    <div *ngIf=\"email.errors.minlength\"> El correo electrónico debe tener al menos 8 caracteres</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Contraseña\" [(ngModel)]=\"password\" required minlength=\"5\" maxlength=\"10\">\n                                </div>\n\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"password.touched && !password.valid\">\n                                    <div *ngIf=\"password.errors.required\">Se requiere la contraseña</div>\n                                    <div *ngIf=\"password.errors.minlength\">La contraseña debe tener al menos 5 caracteres</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <h5>Seleccionar imagen:</h5>\n                                    <input type=\"file\" accept=\".png, .jpg\" (change)=\"onUpload($event)\">\n                                </div>\n                                <div class=\"progress\">\n                                    <div [style.visibility]=\"(uploadPercent == 0) ? 'hidden' : 'visible'\" class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadPercent | async) +'%'\">\n\n                                        <!-- <span class=\"progressText\" *ngIf=\"urlImage | async\">\n                                        Ok!!</span> -->\n                                    </div>\n                                </div>\n                                <br>\n                                <input #imageUser type=\"hidden\" [value]=\"urlImage | async\">\n                                <button *ngIf=\"urlImage | async; else btnDisabled\" type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Register</button>\n                                <ng-template #btnDisabled>\n                                    <button type=\"submit\" disabled=true class=\"btn btn-lg btn-secondary btn-block\">Register</button>\n                                </ng-template>\n\n                                <div class=\"form-group\">\n                                    <a routerLink=\"/user/login\" class=\"form-control login-user\">Tienes cuenta?</a>\n                                </div>\n                                <div class=\"form-group\">\n                                    <button class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\">\n                                      <span class=\"fa fa-facebook\"></span>\n                                      FACEBOOK\n                                    </button>\n                                    <button class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\">\n                                      <span class=\"fa fa-google\"></span>\n                                      GOOGLE\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tables/tables.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tables/tables.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tables works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let AppComponent = class AppComponent {
    constructor(db) {
        this.db = db;
        this.title = 'Burger Queen';
        this.items = db.collection('items').valueChanges(); //conectando con la base de datos y que me traiga los valores de la base(devuelve un valor de arreglo)
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _servicios_orden_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicios/orden.service */ "./src/app/servicios/orden.service.ts");
/* harmony import */ var _servicios_ordenTwo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicios/ordenTwo.service */ "./src/app/servicios/ordenTwo.service.ts");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tables/tables.component */ "./src/app/components/tables/tables.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_breakfast_breakfast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/breakfast/breakfast.component */ "./src/app/components/breakfast/breakfast.component.ts");
/* harmony import */ var _components_lunch_lunch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/lunch/lunch.component */ "./src/app/components/lunch/lunch.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/kitchen/kitchen.component */ "./src/app/components/kitchen/kitchen.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




// rutas

// servicios



// componentes












//firebase
 // para conectarnos a los servicios de firibase





// environment config

// configuracion a donde me voy a conectar 
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__["TablesComponent"],
            _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
            _components_breakfast_breakfast_component__WEBPACK_IMPORTED_MODULE_13__["BreakfastComponent"],
            _components_lunch_lunch_component__WEBPACK_IMPORTED_MODULE_14__["LunchComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavBarComponent"],
            _components_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_16__["KitchenComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTING"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_24__["AngularFireDatabaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__["AngularFirestore"],
            _servicios_orden_service__WEBPACK_IMPORTED_MODULE_5__["OrdenService"],
            _servicios_ordenTwo_service__WEBPACK_IMPORTED_MODULE_6__["OrdenTwoService"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tables/tables.component */ "./src/app/components/tables/tables.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_breakfast_breakfast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/breakfast/breakfast.component */ "./src/app/components/breakfast/breakfast.component.ts");
/* harmony import */ var _components_lunch_lunch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/lunch/lunch.component */ "./src/app/components/lunch/lunch.component.ts");
/* harmony import */ var _components_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/kitchen/kitchen.component */ "./src/app/components/kitchen/kitchen.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");











const APP_ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'tables', component: _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_5__["TablesComponent"] },
    { path: 'menu', component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"] },
    { path: 'breakfast', component: _components_breakfast_breakfast_component__WEBPACK_IMPORTED_MODULE_7__["BreakfastComponent"] },
    { path: 'lunch', component: _components_lunch_lunch_component__WEBPACK_IMPORTED_MODULE_8__["LunchComponent"] },
    { path: 'kitchen', component: _components_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_9__["KitchenComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
const APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/breakfast/breakfast.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/breakfast/breakfast.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJlYWtmYXN0L2JyZWFrZmFzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/breakfast/breakfast.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/breakfast/breakfast.component.ts ***!
  \*************************************************************/
/*! exports provided: BreakfastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakfastComponent", function() { return BreakfastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_orden_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/orden.service */ "./src/app/servicios/orden.service.ts");



let BreakfastComponent = class BreakfastComponent {
    constructor(ordenService) {
        this.ordenService = ordenService;
        this.editing = false;
        this.product = {};
        this.item = {
            name: '',
            order: [],
            total: 0
        };
    }
    ngOnInit() {
        // Accediendo a los datos que estan almacenados en firestore
        this.productsSubscription = this.ordenService.getProducts().subscribe(products => {
            console.log(products);
            // Filrando productos segun menu desayuno
            this.products = products.filter((element) => element.type === 'desayuno');
        });
    }
    deleteProduct(event, product) {
        console.log(product);
        this.ordenService.deleteProduct(product);
    }
    editProduct(event, product) {
        this.editingProduct = product;
        this.editing = !this.editing;
    }
    updateProduct(event, product) {
        console.log(this.editingProduct);
        this.ordenService.updateProduct(this.editingProduct);
        this.editingProduct = {};
        this.editing = false;
    }
    add(value) {
        this.item.name = value;
        console.log(this.item);
    }
    clickedButton(value, product) {
        (this.item.order).push({ "value": value, "cost": product });
        console.log(this.item.order);
        this.item.total += product;
    }
    //enviar a cocina
    addItem() {
        if (this.item.name !== '' && this.item.order !== '' && this.item.total !== 0) {
            this.ordenService.addItem(this.item);
            this.item = {};
            console.log(this.item);
        }
    }
    ngOnDestroy() {
        this.productsSubscription.unsubscribe();
    }
};
BreakfastComponent.ctorParameters = () => [
    { type: src_app_servicios_orden_service__WEBPACK_IMPORTED_MODULE_2__["OrdenService"] }
];
BreakfastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breakfast',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breakfast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/breakfast/breakfast.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./breakfast.component.css */ "./src/app/components/breakfast/breakfast.component.css")).default]
    })
], BreakfastComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.anio = new Date().getFullYear();
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-image {\n    background-image: url('hamburguesa-papas-fritas-plato-pizarra.jpg');\n    background-repeat: no-repeat;\n    width: 100%;\n    height: 650px;\n    background-size: cover;\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1FQUF1RjtJQUN2Riw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2hhbWJ1cmd1ZXNhLXBhcGFzLWZyaXRhcy1wbGF0by1waXphcnJhLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/kitchen/kitchen.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/kitchen/kitchen.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva2l0Y2hlbi9raXRjaGVuLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/kitchen/kitchen.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/kitchen/kitchen.component.ts ***!
  \*********************************************************/
/*! exports provided: KitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenComponent", function() { return KitchenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_ordenTwo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/ordenTwo.service */ "./src/app/servicios/ordenTwo.service.ts");



let KitchenComponent = class KitchenComponent {
    constructor(ordenTwoService) {
        this.ordenTwoService = ordenTwoService;
        this.status = 'loading';
    }
    ngOnInit() {
        // agregar ordenes y listar
        this.itemSubscription = this.ordenTwoService.itemList().subscribe(item => {
            console.log(item);
            this.items = item;
            this.status = 'loaded';
        });
    }
    deleteItem(event, item) {
        console.log(item);
        this.ordenTwoService.deleteItem(item);
    }
};
KitchenComponent.ctorParameters = () => [
    { type: _servicios_ordenTwo_service__WEBPACK_IMPORTED_MODULE_2__["OrdenTwoService"] }
];
KitchenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kitchen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kitchen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/kitchen/kitchen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kitchen.component.css */ "./src/app/components/kitchen/kitchen.component.css")).default]
    })
], KitchenComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control.login-user {\n    border: 0 solid #fff !important;\n}\n\n.btn-social {\n    position: relative;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #fff;\n    border-color: rgba(0, 0, 0, 0.2);\n}\n\n.btn-facebook {\n    background: #3b5998;\n}\n\n.btn-google {\n    background: #dd4b39;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcbiAgICBib3JkZXI6IDAgc29saWQgI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXNvY2lhbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XG59XG5cbi5idG4tZ29vZ2xlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    //  metodo iniciar sesion 
    onLogin() {
        this.authService.loginEmailUser(this.email, this.password)
            .then((res) => {
            this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
    }
    onLoginGoogle() {
        this.authService.loginGoogleUser()
            .then((res) => {
            this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
    }
    onLoginFacebook() {
        this.authService.loginFacebookUser()
            .then((res) => {
            this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
    }
    // metodo cerrar sesion
    onLogout() {
        this.authService.logoutUser();
    }
    //metodo Redirigir  al iniciar sesion 
    onLoginRedirect() {
        this.router.navigate(['profile']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/lunch/lunch.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/lunch/lunch.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imag {\n    width: 300px;\n}\n\n.cardme {\n    width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sdW5jaC9sdW5jaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2x1bmNoL2x1bmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZyB7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4uY2FyZG1lIHtcbiAgICB3aWR0aDogMzAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/lunch/lunch.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/lunch/lunch.component.ts ***!
  \*****************************************************/
/*! exports provided: LunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LunchComponent", function() { return LunchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_orden_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/orden.service */ "./src/app/servicios/orden.service.ts");



let LunchComponent = class LunchComponent {
    constructor(ordenService) {
        this.ordenService = ordenService;
        this.editing = false;
        this.product = {};
        this.item = {
            name: '',
            order: [],
            total: 0
        };
    }
    ngOnInit() {
        // Accediendo a los datos que estan almacenados en firestore
        this.productsSubscription = this.ordenService.getProducts().subscribe(products => {
            console.log(products);
            // Filrando productos segun menu Almuerzo
            this.products = products.filter((element) => element.type === 'almuerzo');
        });
    }
    deleteProduct(event, product) {
        console.log(product);
        this.ordenService.deleteProduct(product);
    }
    editProduct(event, product) {
        this.editingProduct = product;
        this.editing = !this.editing;
    }
    updateProduct(event, product) {
        console.log(this.editingProduct);
        this.ordenService.updateProduct(this.editingProduct);
        this.editingProduct = {};
        this.editing = false;
    }
    add(value) {
        this.item.name = value;
        console.log(this.item);
    }
    clickedButton(value, product) {
        console.log(product);
        (this.item.order).push({ "value": value, "cost": product });
        this.item.total += product;
    }
    addItem() {
        if (this.item.name !== '' && this.item.order !== '' && this.item.total !== 0) {
            this.ordenService.addItem(this.item);
            this.item = {};
        }
    }
    deleteOrder(i, order) {
        console.log(order);
        console.log(i);
        this.item.order.splice(i, 1);
        this.item.total -= order;
        console.log(this.item.order);
    }
    ngOnDestroy() {
        this.productsSubscription.unsubscribe();
    }
};
LunchComponent.ctorParameters = () => [
    { type: src_app_servicios_orden_service__WEBPACK_IMPORTED_MODULE_2__["OrdenService"] }
];
LunchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lunch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lunch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lunch/lunch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lunch.component.css */ "./src/app/components/lunch/lunch.component.css")).default]
    })
], LunchComponent);



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n    color: #ffffff;\n    background-color: #252222;\n}\n\n.form-control.login-user {\n    border: 0px solid #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjIyMjtcbn1cblxuLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_orden_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/orden.service */ "./src/app/servicios/orden.service.ts");



let MenuComponent = class MenuComponent {
    constructor(ordenService) {
        this.ordenService = ordenService;
        this.product = {};
        this.adding = false;
    }
    ngOnInit() {
    }
    addProduct() {
        if (this.product.name !== '' && this.product.type !== '' && this.product.price !== 0) {
            this.ordenService.addProducts(this.product);
            this.product = {};
            this.adding = true;
        }
    }
};
MenuComponent.ctorParameters = () => [
    { type: _servicios_orden_service__WEBPACK_IMPORTED_MODULE_2__["OrdenService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");




let NavBarComponent = class NavBarComponent {
    constructor(authService, afsAuth) {
        this.authService = authService;
        this.afsAuth = afsAuth;
        this.isLogged = true;
    }
    ngOnInit() {
        this.getCurrentUser();
    }
    //propiedad obtener usuario actual
    getCurrentUser() {
        this.authService.isAuth().subscribe(auth => {
            if (auth) {
                console.log('user logged');
                this.isLogged = true;
            }
            else {
                console.log('NOT user logged');
                this.isLogged = false;
            }
        });
    }
    //cerrar sesion
    onLogout() {
        this.afsAuth.auth.signOut();
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-section {\n    border: 1px solid #007bff;\n    background: #fff;\n}\n\n.profile-header {\n    background: #007bff;\n    height: 150px;\n}\n\n.user-detail {\n    margin: -50px 0 30px 0;\n}\n\nimg {\n    height: 100px;\n    width: 100px;\n}\n\n.user-details h5 {\n    margin: 15px 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNlY3Rpb24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnByb2ZpbGUtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi51c2VyLWRldGFpbCB7XG4gICAgbWFyZ2luOiAtNTBweCAwIDMwcHggMDtcbn1cblxuaW1nIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLnVzZXItZGV0YWlscyBoNSB7XG4gICAgbWFyZ2luOiAxNXB4IDAgNXB4IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
        this.providerId = 'null';
    }
    ngOnInit() {
        this.authService.isAuth().subscribe(user => {
            if (user) {
                this.user.name = user.displayName;
                this.user.email = user.email;
                this.user.photoUrl = user.photoURL;
                this.providerId = user.providerData[0].providerId;
            }
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control.login-user {\n    border: 0 solid #fff !important;\n}\n\n.btn-social {\n    position: relative;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #fff;\n    border-color: rgba(0, 0, 0, 0.2);\n}\n\n.btn-facebook {\n    background: #3b5998;\n}\n\n.btn-google {\n    background: #dd4b39;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcbiAgICBib3JkZXI6IDAgc29saWQgI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXNvY2lhbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XG59XG5cbi5idG4tZ29vZ2xlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let RegisterComponent = class RegisterComponent {
    constructor(router, authService, storage) {
        this.router = router;
        this.authService = authService;
        this.storage = storage;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    // al subir fichero
    onUpload(e) {
        //  console.log('subir',e);
        const id = Math.random().toString(36).substring(2);
        const file = e.target.files[0];
        const filePath = `uploads/profile_${id}`;
        const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.urlImage = ref.getDownloadURL())).subscribe();
    }
    // agregar usuario 
    onAddUser() {
        this.authService.registerUser(this.email, this.password)
            .then((res) => {
            this.router.navigate(['profile']);
        }).catch(err => console.log('err', err.message));
    }
    ;
    onLoginGoogle() {
        this.authService.loginGoogleUser()
            .then((res) => {
            this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
    }
    onLoginFacebook() {
        this.authService.loginFacebookUser()
            .then((res) => {
            this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
    }
    //metodo Redirigir  al iniciar sesion 
    onLoginRedirect() {
        this.router.navigate(['profile']);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/tables/tables.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/tables/tables.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/tables/tables.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tables/tables.component.ts ***!
  \*******************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TablesComponent = class TablesComponent {
    constructor() { }
    ngOnInit() {
    }
};
TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tables',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tables/tables.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tables.component.css */ "./src/app/components/tables/tables.component.css")).default]
    })
], TablesComponent);



/***/ }),

/***/ "./src/app/servicios/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





let AuthService = class AuthService {
    constructor(afsAuth) {
        this.afsAuth = afsAuth;
    }
    // registar nuevo usuario
    registerUser(email, pass) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData), err => reject(err));
        });
    }
    // contraseña y email
    loginEmailUser(email, pass) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData), err => reject(err));
        });
    }
    // iniciar sesion con google
    loginGoogleUser() {
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider());
    }
    //faceboock
    loginFacebookUser() {
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider());
    }
    // salir
    logoutUser() {
        return this.afsAuth.auth.signOut();
    }
    isAuth() {
        return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(auth => auth));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/servicios/orden.service.ts":
/*!********************************************!*\
  !*** ./src/app/servicios/orden.service.ts ***!
  \********************************************/
/*! exports provided: OrdenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenService", function() { return OrdenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_data_products_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/products.json */ "./src/assets/data/products.json");
var _assets_data_products_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/products.json */ "./src/assets/data/products.json", 1);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let OrdenService = class OrdenService {
    constructor(db) {
        this.db = db;
        // Variable para guardar data de json
        this.orden = [{ products: _assets_data_products_json__WEBPACK_IMPORTED_MODULE_2__
            }];
        // peticion de base datos firestore collection produts
        this.productsCollection = this.db.collection('products');
        this.products = this.productsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        // peticion de base datos firestore collection items
        this.itemsCollection = this.db.collection('items', ref => ref.orderBy('id'));
        this.items = this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        })));
    }
    // Retorna los productos desde base de datos firestore
    getProducts() {
        return this.products;
    }
    // Metodo creado para agregar un producto nuevo en la data firestore
    addProducts(product) {
        return this.productsCollection.add(product);
    }
    // Metodo creado para eliminar un producto que esta dentro de la data firestore
    deleteProduct(product) {
        this.productDoc = this.db.doc(`products/${product.id}`);
        this.productDoc.delete();
    }
    // Metodo creado para actualizar un producto dentro de la data firestore
    updateProduct(product) {
        this.productDoc = this.db.doc(`products/${product.id}`);
        this.productDoc.update(product);
    }
    // metodo para guardar los productos de lista de ordenes en firestore 
    itemList() {
        return this.items;
    }
    // metodo para agregar pedido a la bd en firestore para coleccion items
    addItem(item) {
        this.itemsCollection.add(item);
    }
    deleteItem(item) {
        this.itemDoc = this.db.doc(`items/${item.order}`);
        this.itemDoc.delete();
    }
    updateItem(item) {
        this.itemDoc = this.db.doc(`items/${item.id}`);
        this.itemDoc.update(item);
    }
};
OrdenService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
OrdenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OrdenService);



/***/ }),

/***/ "./src/app/servicios/ordenTwo.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/ordenTwo.service.ts ***!
  \***********************************************/
/*! exports provided: OrdenTwoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenTwoService", function() { return OrdenTwoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let OrdenTwoService = class OrdenTwoService {
    constructor(afs) {
        this.afs = afs;
        this.itemsCollection = afs.collection('items');
        this.items = this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        })));
    }
    itemList() {
        return this.items;
    }
    // metodo para agregar item
    addItem(item) {
        this.itemsCollection.add(item);
    }
    //metodo para actualizar 
    updateList() {
    }
    deleteItem(item) {
        this.itemDoc = this.afs.doc(`items/${item.id}`);
        this.itemDoc.delete();
    }
};
OrdenTwoService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
OrdenTwoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrdenTwoService);



/***/ }),

/***/ "./src/assets/data/products.json":
/*!***************************************!*\
  !*** ./src/assets/data/products.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"001\",\"img\":\"assets/img/cafe.png\",\"type\":\"desayuno\",\"name\":\"Café americano\",\"price\":500},{\"id\":\"002\",\"img\":\"assets/img/cafe-con-leche.png\",\"type\":\"desayuno\",\"name\":\"Café con leche\",\"price\":700},{\"id\":\"003\",\"img\":\"assets/img/sandwich.png\",\"type\":\"desayuno\",\"name\":\"Sandwich de jamón y queso\",\"price\":1000},{\"id\":\"004\",\"img\":\"assets/img/jugos-naturales.png\",\"type\":\"desayuno\",\"name\":\"Jugo de frutas natural\",\"price\":700,\"option\":[\"mango\",\"lechoza\",\"guanabana\",\"parchita\"]},{\"id\":\"005\",\"img\":\"assets/img/hamburguesa-sencilla.png\",\"type\":\"almuerzo\",\"name\":\"hamburguesa sencilla\",\"price\":1000,\"option\":[\"carne\",\"pollo\"]},{\"id\":\"006\",\"img\":\"assets/img/hamburguesa-doble.png\",\"type\":\"almuerzo\",\"name\":\"hamburguesa doble\",\"price\":1500,\"option\":[\"carne\",\"pollo\"]},{\"id\":\"007\",\"img\":\"assets/img/papas-fritas.png\",\"type\":\"almuerzo\",\"name\":\"Papas fritas\",\"price\":500},{\"id\":\"008\",\"img\":\"assets/img/aros-cebolla.png\",\"type\":\"almuerzo\",\"name\":\"aros de cebolla\",\"price\":500},{\"ide\":\"009\",\"img\":\"assets/img/agua.png\",\"type\":\"almuerzo\",\"name\":\"Agua grande\",\"price\":700}]");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDgiL2Z-nO0BCqzmayPk2Qr_w1A4RBO98g",
        authDomain: "burgerqueen-62c12.firebaseapp.com",
        databaseURL: "https://burgerqueen-62c12.firebaseio.com",
        projectId: "burgerqueen-62c12",
        storageBucket: "burgerqueen-62c12.appspot.com",
        messagingSenderId: "908739636665",
        appId: "1:908739636665:web:aa57c659d00aa04a7c9a68",
        measurementId: "G-03MT5XQZG9"
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/laboratoria129/Desktop/proyecto-angular/SCL011-Burger-Queen/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map