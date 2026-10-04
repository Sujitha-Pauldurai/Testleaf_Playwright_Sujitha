import { BankAccount } from "./banking";


// Inherits properties and methods from BankAccount
class Customer extends BankAccount{

    // Protected property can be accessed by child class
    printCustomerDetails(){
        console.log(`Custome Name : ${this.accountHolder}`);
        console.log(`Customer Address : ${this.customerAddress}`)
        
    }
}

// Creates an object of the child class
let customerDetail = new Customer()

// Calls the child class method
customerDetail.printCustomerDetails()