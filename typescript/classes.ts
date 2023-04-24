class Employee1
{
    
    private fname: string;
    private mname: string;
    private lname: string;


    constructor(fname: string,mname: string,lname: string){
    
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
    }

    getMname(): string{
        return this.mname;
    }
}

let e1 = new Employee1('a','b','c');
console.log(e1.getMname);








class Employee{
    private readonly empno: number;
    private ename: string;
    private sal: number;
    private attendance: number;

    public getEmpno(): number{
        return this.empno; //=800 not possible
    }

    public getEname(): string{
        return this.ename;
    }

    public getSal(): number{
        return this.sal;
    }

    public getAttendance(): number{
        return this.attendance;
    }

    // constructor()
    // {
    //     this.empno = 101;
    //     this.ename = "abcd";
    //     this.sal = 20000;
    //     this.attendance = 50;
    // }

    constructor(empno: number,ename: string,sal: number,attendance: any)
    {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }

    print():void{
        console.log(this.empno,this.ename,this.sal,this.attendance);
    }

}
    // var emp = new Employee();
    // var emp1 = new Employee();
    // emp1.empno = 101;
    // var emp2 = new Employee();
    // emp2.empno = 102;

    let emp = new Employee(1,"dcf",30000,20);
    let emp1 = new Employee(2,"hjk",40000,40);
    let emp2 = new Employee(3,"tyu",50000,70);
    

    emp.print();
    emp1.print();
    emp2.print();

    var emparray : Employee[] = [emp,emp1,emp2];



