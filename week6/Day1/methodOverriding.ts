class BrowserParent{
    browserVersion(){
        console.log("Parent : browser version");
        
    }
}

class ChromeChild extends BrowserParent{
     browserVersion(){
        console.log("Child : browser version");
        super.browserVersion()
        
    }

}

let version = new ChromeChild()
version.browserVersion()