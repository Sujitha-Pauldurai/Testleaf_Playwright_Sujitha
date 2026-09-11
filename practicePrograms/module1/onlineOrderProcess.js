/* Online Order Processing System

The requirement is:

Build a validate → payment → shipping → confirmation flow with Promise chaining, errors, status updates, 
   and a success message. */





const order = {
    item: "Laptop",
    quantity: 1,
    price: 50000
};

function validateOrder(order){
    let validatePromise = new Promise((resolve,reject) => {
        /* let orderKeys = Object.keys(order)
        console.log(orderKeys/length); */
        let numOfKeys = Object.keys(order).length
        if ( numOfKeys !== 0 && order.quantity >= 1 && order.price > 0 ){
            console.log("The order is valid");
            
            resolve(50000)
        }
        else{
            reject("The order is invalid")
        }
    }) 
    return validatePromise
}

function processPayment(order,paidAmount){
    
    let paymentPromise = new Promise((resolve,reject) => {
        if (order.price === paidAmount){
            console.log("Payment Success")
            resolve(627357)
        }
        else
            reject("Payment not success")
        
    })
     return paymentPromise
}

function orderShipping(pincode){

    let shippingPromise = new Promise((resolve,reject) => {
        console.log(pincode.toString().length);
        
        if(pincode.toString().length === 6)
            resolve(true)
        else
            reject("Invalid address : Shipping Cancelled")

    })
    return shippingPromise

}

function orderCompleted(isDelivered){

    let completePromise = new Promise((resolve,reject) => {
       
        
        if(isDelivered === true)
            resolve("The order is completed Successfully")
        else
            reject("The order is not completed")

    })
    return completePromise

}



validateOrder(order)
.then((paidAmount) => {
    //console.log(result);
    return processPayment(order, paidAmount)
})
.then((pincode) => {
        //console.log(result);
    return orderShipping(pincode)
})
.then((isDelivered) => {
            //console.log(result);
    return orderCompleted(isDelivered)
})
.then((result) =>{
      console.log(result);
})
 
.catch((error) => {
    console.log(error);
    
})