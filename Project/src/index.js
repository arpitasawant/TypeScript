// // console.log("typescript is here")
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // Classes
// class User{
//     email:string
//     name:string
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name
//     }
// }
// const arpita = new User(email:"a@gmail.com",name:"arpita");
// arpita.city = "pune";
// Private and public
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "goa";
    }
    User.prototype.deleteToken = function () {
        console.log("Token deleted");
    };
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4;
    };
    return SubUser;
}(User));
var arpita = new User("a@gmail.com", "arpita");
