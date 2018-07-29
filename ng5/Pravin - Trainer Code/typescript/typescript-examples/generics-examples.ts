interface SynePerson {
    contactName: string;
    address: string;
    city: string;
}

interface CrudOpertations<T> {
    getAll(): Array<T>;
    getSingle(id: number): T;
    addNew(T: T): void;
    update(T: T): void;
    delete(T: T): void;
}

class GenericRepository<T extends SynePerson> implements CrudOpertations<T>{
    private _localStorage: Array<T> = new Array<T>();
    getAll(): Array<T> {
        return this._localStorage;
    }
    getSingle(id: number): T {
        return this._localStorage[0];
    }
    addNew(T: T): void {
        this._localStorage.push(T);
    }
    update(T: T): void {
        //Update Logic
    }
    delete(T: T): void {
        //Delete Logic
    }
}

class Customer implements SynePerson {
    constructor(
        public customerId: number,
        public contactName: string,
        public address:string,
        public city: string) { }
}
class SyneEmployee implements SynePerson {
    constructor(
        public employeeId: number,
        public contactName: string,
        public address:string,
        public city: string) { }
}

let c1: Customer = new Customer(1, "Pravin R. D.","ABC", "Pune");
let c2: Customer = new Customer(2, "Manish Kaushik","ABC", "Raipur");

let e1: SyneEmployee = new SyneEmployee(23678, "John Mark","XYZ", "London");
let e2: SyneEmployee = new SyneEmployee(23679, "Ali Hasan","XYZ", "Dubai");

let customerRepo: GenericRepository<Customer> = new GenericRepository<Customer>();
customerRepo.addNew(c1);
customerRepo.addNew(c2);

let employeeRepo: GenericRepository<SyneEmployee> = new GenericRepository<SyneEmployee>();
employeeRepo.addNew(e1);
employeeRepo.addNew(e2);

for (const cust of customerRepo.getAll()) {
    console.log(cust.contactName);
}
console.log("");
for (const emp of employeeRepo.getAll()) {
    console.log(emp.contactName);
}
