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



