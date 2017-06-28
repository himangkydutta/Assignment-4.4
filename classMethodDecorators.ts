/**
 * Method and class Decorator
 */

@ClassDecorator(101, "Himangky")
class MethodClassDecorator {
    @MethodDecorator
    method(num: number): number {
        return 0;
    }
}

/**
 * Function for Method Decorator
 * @param {Object}
 * @param {string}
 * @param {number)
 */
function MethodDecorator(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<(num: number) => number>
    ) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

/**
 * Function for class decorator with parameter
*/

function ClassDecorator(param1: number, param2: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecorator(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}
