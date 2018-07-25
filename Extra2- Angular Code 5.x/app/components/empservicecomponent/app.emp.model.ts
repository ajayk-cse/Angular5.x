export class Employee {
    constructor(
        public EmpNo:number,
        public EmpName:string,
        public Salary:number,
        public DeptName:string,
        public Designation:string
    ) {}
}

export const Departments:Array<string>=
        ["IT","HRD","System","Accounts"];
export const Designations:Array<string>=
        ["Lead","Manager","Engineer","Developer"];

