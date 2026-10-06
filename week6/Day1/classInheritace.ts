class Browser{

    //browserT:string
    //browerV:number
    Browser(){}
    
    browserType(){

        console.log(`Parent class browser Type`);
        

    }

    browserVersion(){

         console.log(`Parent class browser Version`);

    }
}

class Chrome extends Browser {

    launchBrowser(){

         console.log(`Child chrome`);

    }
}
console.log("First child:");
 const chromeB = new Chrome()
    chromeB.browserType()
    chromeB.browserVersion()
    chromeB.launchBrowser()

class Edge extends Chrome{

    launchBrowser(){

        console.log(`Child Edge`);

    }
}

console.log("Second child:");

const edgeB= new Edge()
edgeB.browserType()
edgeB.browserVersion()
edgeB.launchBrowser()