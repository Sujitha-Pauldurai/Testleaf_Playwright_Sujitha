/* Create calculateBill(units); ₹5/unit first 100, ₹7/unit next 100, ₹10/unit above 200; add ₹100 service charge. */
const serviceCharge = 100
function calculateBill(units){
 
    let electricCharge
    if (units > 200){
        units = units - 200
        electricCharge = (100*5) + (100*7) +  (units*10) + serviceCharge
    
    }
    else if (units > 100 && units<=200){
        units = units - 100
        electricCharge = (100*5) + units * 7 + serviceCharge
    }
    else if(units > 0 &&  units <=100){
         electricCharge = units * 5 + serviceCharge
    }
    else{
        console.log("Invalid unit value");
        
    }
    return electricCharge
}

console.log(calculateBill(50));
console.log(calculateBill(100));
console.log(calculateBill(101));
console.log(calculateBill(150));
console.log(calculateBill(200));
console.log(calculateBill(201));

