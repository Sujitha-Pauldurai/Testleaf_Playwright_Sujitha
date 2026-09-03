launchBrowser("Chrome")
launchBrowser("Safari")
launchBrowser("firefox") //This is not working beacuse the input paramenter case is not matching
runTest("sanity")
runTest("smoke")
runTest("regression")




function launchBrowser(browserName){
    if(browserName=="Chrome"){
        console.log("Open the browser "+browserName)
    }
    else if(browserName=="Firefox"){
        console.log("Open the browser "+browserName)
    }
    else if(browserName=="Safari"){
        console.log("Open the browser "+browserName)
    }
}

function runTest(testType){
    
    switch(testType){
        case "sanity":
            console.log("Sanity testing");
            break;
        case "regression":
            console.log("Regression testing");
             break;
        default:
            console.log("Smoke testing");
             break;
    }
}