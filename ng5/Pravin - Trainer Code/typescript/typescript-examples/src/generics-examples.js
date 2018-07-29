var GenericRepository = /** @class */ (function () {
    function GenericRepository() {
        this._localStorage = new Array();
    }
    GenericRepository.prototype.getAll = function () {
        return this._localStorage;
    };
    GenericRepository.prototype.getSingle = function (id) {
        return this._localStorage[0];
    };
    GenericRepository.prototype.addNew = function (T) {
        this._localStorage.push(T);
    };
    GenericRepository.prototype.update = function (T) {
        //Update Logic
    };
    GenericRepository.prototype.delete = function (T) {
        //Delete Logic
    };
    return GenericRepository;
}());
var Customer = /** @class */ (function () {
    function Customer(customerId, contactName, address, city) {
        this.customerId = customerId;
        this.contactName = contactName;
        this.address = address;
        this.city = city;
    }
    return Customer;
}());
var SyneEmployee = /** @class */ (function () {
    function SyneEmployee(employeeId, contactName, address, city) {
        this.employeeId = employeeId;
        this.contactName = contactName;
        this.address = address;
        this.city = city;
    }
    return SyneEmployee;
}());
var c1 = new Customer(1, "Pravin R. D.", "ABC", "Pune");
var c2 = new Customer(2, "Manish Kaushik", "ABC", "Raipur");
var e1 = new SyneEmployee(23678, "John Mark", "XYZ", "London");
var e2 = new SyneEmployee(23679, "Ali Hasan", "XYZ", "Dubai");
var customerRepo = new GenericRepository();
customerRepo.addNew(c1);
customerRepo.addNew(c2);
var employeeRepo = new GenericRepository();
employeeRepo.addNew(e1);
employeeRepo.addNew(e2);
for (var _i = 0, _a = customerRepo.getAll(); _i < _a.length; _i++) {
    var cust = _a[_i];
    console.log(cust.contactName);
}
console.log("");
for (var _b = 0, _c = employeeRepo.getAll(); _b < _c.length; _b++) {
    var emp = _c[_b];
    console.log(emp.contactName);
}
