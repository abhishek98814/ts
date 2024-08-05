"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Abhishek",
    email: "avi@gmail.com",
    isActive: true
};
function createUser(_a) {
    var String = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'Abhishekl', isPaid: false });
function createCourse(course) {
    return {
        name: course.name,
        price: course.price
    };
}
console.log(createCourse({ name: 'Abhishek', price: 79 }));
