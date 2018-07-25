function Person(socialId1){
    // public members
    this.socialId = _socialId;
    this.personName = "";
    this.city = "";
    this.contactNumber="";

    // private members
    var _socialId = socialId1;
}

var p1 = new Person()