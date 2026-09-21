/* Learn how to use Union Types in TypeScript by restricting a variable or function parameter to a fixed set of values. */

// type union declaration
type paymentMethod = "UPI" | "CreditCard" | "PayPal"

let payment:paymentMethod ="UPI"

function makePayment(paymentWay:paymentMethod){
    console.log(paymentWay);
    
}

makePayment(payment)
makePayment("CreditCard")
makePayment("PayPal")
//makePayment("GPay")// It will not accept the values not mentioned in type paymentMethod


// Type script Object
type employee = {
    name: string
     age: number
     role: string
     isActive: boolean
}

let employee1:employee[]=[
{
    name:"Sujitha",
    age:32,
    role:"Tester",
    isActive:true
},
{
    name: "Rahul",
    age: 28,
    role: "Developer",
    isActive: true
 }
]

function printUser(emp:employee){
    
    if(emp.isActive){
        console.log("Name :",emp.name);
        console.log("Role: ",emp.role)
        
    }
   // console.log(emp.age as string)
}
let title = "Employee Details", id:unknown = 10001
let title1 = title as string , id1 = id as string
console.log(title1,id1);
printUser(employee1[0])
printUser(employee1[1])