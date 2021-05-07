var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function (args) {
        var salary = 0;
        var shifts = 0;
        var savings = 0;
        var __in = new java.util.Scanner(java.lang.System["in"]);
        salary = __in.nextInt();
        shifts = __in.nextInt();
        if (salary > 8000)
            console.info("Salary too large ");
        else if (shifts < 0)
            console.info("Shifts too small\n");
        else if (salary < 0)
            console.info("Salary too small");
        else {
            savings = (salary * 0.5) + (salary * 0.02 * shifts);
            console.info("%.0f");
        }
    };
    return Main;
}());
Main["__class"] = "Main";
Main.main(null);
