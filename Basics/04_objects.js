"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "arpita",
    email: "arpita@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = {
    name: "arpita",
    isPaid: false,
    email: "arpita@gmail.com"
};
createUser(newUser);
//       object :       return type :             defination
function createCourse() {
    return { name: "reactjs", price: 399 };
}
var myUser = {
    _id: "123",
    name: "a",
    email: "a@gmail.com",
    isActive: true
};
myUser.email = "a@gmail.com";
