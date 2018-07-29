var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        this._city = "Pune";
    }
    Object.defineProperty(Person.prototype, "socialId", {
        get: function () {
            return this._socialId;
        },
        set: function (value) {
            this._socialId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (value) {
            this._phone = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.printPersonInformation = function () {
        console.log("City is " + this._city);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super.call(this) || this;
        _this.employeeId = 0;
        return _this;
    }
    Employee.prototype.changeAddress = function (socialId, newAddress) {
        return true;
    };
    return Employee;
}(Person));
var person = new Employee();
person.city = "Mumbai";
console.log(person.city);
console.log(person.changeAddress(person.socialId, "New Address"));
