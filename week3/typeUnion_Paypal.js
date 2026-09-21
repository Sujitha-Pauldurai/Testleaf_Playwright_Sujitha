"use strict";
/* Learn how to use Union Types in TypeScript by restricting a variable or function parameter to a fixed set of values. */
let payment = "UPI";
function makePayment(paymentWay) {
    console.log(paymentWay);
}
makePayment(payment);
makePayment("CreditCard");
makePayment("PayPal");
let employee1 = [
    {
        name: "Sujitha",
        age: 32,
        role: "Tester",
        isActive: true
    },
    {
        name: "Rahul",
        age: 28,
        role: "Developer",
        isActive: true
    }
];
function printUser(emp) {
    if (emp.isActive) {
        console.log("Name :", emp.name);
        console.log("Role: ", emp.role);
    }
    // console.log(emp.age as string)
}
let title = "Employee Details", id = 10001;
let title1 = title, id1 = id;
console.log(title1, id1);
printUser(employee1[0]);
printUser(employee1[1]);
