function Person(sociId) {
    //public members
    
    Object.defineProperty(this, "socialId", {
        get: function () {
            return _sId;
        },
        set: function (value) {
            _sId = value*2;
        }
    });
    //private members
    var _sId = sociId,
        _name = "",
        _city = "",
        _phone = "";
}

var p1 = new Person(23928);
p1.socialId = 1000;
console.log(p1.socialId);