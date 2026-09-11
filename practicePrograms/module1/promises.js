function fetchUser(){
    let user = false
    let userPromise = new Promise((resolve,reject)=>{
        /* setTimeout(() =>{
            resolve("User Data given successfully")
        },2000) */
        setTimeout(() =>{
            if (user === true)
            resolve("User Data given successfully")
            else 
            reject("Failed")
        },2000)

    }
    )
return userPromise

}

fetchUser()
.then((result)=>{
    console.log(result)
})

.catch((error)=>{
    console.log(error)
})