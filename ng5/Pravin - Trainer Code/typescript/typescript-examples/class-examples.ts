abstract class Person {
    constructor() {

    }
    private _socialId: number;
    private _name: string;
    private _city: string = "Pune";
    private _phone: string;

    get socialId() {
        return this._socialId;
    }
    set socialId(value) {
        this._socialId = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    printPersonInformation(): void {
        console.log("City is " + this._city);
    }

    abstract changeAddress(socialId: number, newAddress): boolean;
    // constructor(public socialId?: number,
    //     public name?: string,
    //     public city?: string,
    //     public phone?: string) {

    // }
    // socialId: number;
    // name: string;
    // city: string;
    // phone: string;
}

class Employee extends Person {
    constructor() {
        super();
    }
    changeAddress(socialId: number, newAddress): boolean {
        return true;
    }
    employeeId: number = 0;
}

let person = new Employee();

person.city = "Mumbai";
console.log(person.city);
console.log(person.changeAddress(person.socialId, "New Address"));
