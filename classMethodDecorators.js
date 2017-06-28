/**
 * Method and class Decorator
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MethodClassDecorator = (function () {
    function MethodClassDecorator() {
    }
    MethodClassDecorator.prototype.method = function (num) {
        return 0;
    };
    return MethodClassDecorator;
}());
__decorate([
    MethodDecorator
], MethodClassDecorator.prototype, "method");
MethodClassDecorator = __decorate([
    ClassDecorator(101, "Himangky")
], MethodClassDecorator);
/**
 * Function for Method Decorator
 * @param {Object}
 * @param {string}
 * @param {number)
 */
function MethodDecorator(target, // The prototype of the class
    propertyKey, // The name of the method
    descriptor) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}
/**
 * Function for class decorator with parameter
*/
function ClassDecorator(param1, param2) {
    return function (target // The class the decorator is declared on
    ) {
        console.log("ClassDecorator(" + param1 + ", '" + param2 + "') called on: ", target);
    };
}
