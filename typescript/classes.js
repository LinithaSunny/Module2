var Employee = /** @class */ (function () {
    // constructor()
    // {
    //     this.empno = 101;
    //     this.ename = "abcd";
    //     this.sal = 20000;
    //     this.attendance = 50;
    // }
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
// var emp = new Employee();
// var emp1 = new Employee();
// emp1.empno = 101;
// var emp2 = new Employee();
// emp2.empno = 102;
var emp = new Employee(1, "dcf", 30000, 20);
var emp1 = new Employee(2, "hjk", 40000, 40);
var emp2 = new Employee(3, "tyu", 50000, 70);
emp.print();
emp1.print();
emp2.print();
