export class Employee {
    constructor(
        public EmpNo:number,
        public EmpName:string,
        public Salary:number,
        public DeptName:string,
        public Designation:string
    ) {}
}

export const Departments:string[]=[
    "IT","HRD","Sales","Accounts"
];
export const Designations:string[]=[
    "Lead","Manager","Director"
];

export class EmployeeOperations {
    private emp:Employee;
    private emps:Array<Employee>;
    constructor() {
        this.emp = new Employee(0,"",0,"","");
        this.emps = new Array<Employee>();

        this.emps.push(new Employee(101,"Ajay",12000,"IT","Lead"));
        this.emps.push(new Employee(102,"Bjay",72000,"Sales","Director"));
        this.emps.push(new Employee(103,"Cjay",22000,"HRD","Manager"));
        this.emps.push(new Employee(104,"Djay",52000,"Accounts","Manager"));
    }
    getEmployees():Array<Employee> {
        return this.emps;
    }
    saveEmployee(e:Employee):Array<Employee> {
        this.emps.push(e);
        return this.emps;
    }
}

