"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
var sanu = "Abhishek";
console.log(sanu);
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("Abhishek"));
function signUp(name, email, password, age, char) {
    return { name: name, email: email, password: password, age: age, char: char };
}
console.log(signUp("abhi", "haeloi", "jkasd", 89, "hjsgd"));
var loginUser = function (name, ph, isActive) {
    if (isActive === void 0) { isActive = false; }
    return { name: name, ph: ph, isActive: isActive };
};
console.log(loginUser("SANU", 786));
