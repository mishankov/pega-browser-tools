async function sleep(ms: number) {
    return new Promise(r => setTimeout(r, ms));
}

async function run() {
    let isBusyPrevious = false;
    while (true) {
        let el = document.getElementsByClassName('document-statetracker')[0];
        let isBusy = el.getAttribute("data-state-busy-status") === "busy";

        if (isBusyPrevious && !isBusy) {
            console.log("Now we are ready to do stuff");

            let ruleIframe = document.querySelector("#PEGA_TABBED0 > div.yui-content.contents.tabContent > div.iframe-wrapper[aria-hidden=false] > iframe");
            let ruleKey = ruleIframe.getAttribute("src").split("&key=")[1].split("&")[0].replaceAll("%20", " ").replaceAll("%23", "#");
            
            console.log(ruleIframe);
            console.log(ruleKey);
        }

        isBusyPrevious = isBusy;
        
        await sleep(2000);
    }
};

console.log("Pega Chrome Tools is here!")

run();
