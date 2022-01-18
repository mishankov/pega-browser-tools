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

            let ruleIframe = <HTMLIFrameElement> document.querySelector("#PEGA_TABBED0 > div.yui-content.contents.tabContent > div.iframe-wrapper[aria-hidden=false] > iframe");
            
            console.log(ruleIframe);
            
            if (ruleIframe !== null) {
                // src="/prweb/app/test-cosmos_/8-wjN6771Z4s56SjWJe4WUkt6KfhDunu*/!TABTHREAD0?pyActivity=%40baseclass.doUIAction&action=openRuleSpecific&openHandle=RULE-OBJ-REPORT-DEFINITION%20BANK-LOAN-WORK-LOAN%20TST%20%2320220116T085439.861%20GMT&Format=harness&contentID=cf3a71e4-4395-9582-d62b-27617c4bc812&dynamicContainerID=de12ecd7-b2b3-4849-bff1-ee2797014513&tabIndex=2&portalThreadName=STANDARD&portalName=Developer&eventSrcSection=%40baseclass.pyFatListItems&pzHarnessID=HIDC1CD9EA8E995D1D5CB767538A9C9831A"
                // src="/prweb/app/test-cosmos_/8-wjN6771Z4s56SjWJe4WUkt6KfhDunu*/!TABTHREAD0?pyActivity=%40baseclass.doUIAction&action=displayOnPage&renderAction=displayOnPage&harnessName=RuleForm&pzPrimaryPage=RH_1&contentID=cf3a71e4-4395-9582-d62b-27617c4bc812&dynamicContainerID=de12ecd7-b2b3-4849-bff1-ee2797014513&tabIndex=2&className=Rule-Obj-Report-Definition&label=Tst&key=RULE-OBJ-REPORT-DEFINITION%20BANK-LOAN-WORK-LOAN%20TST%20%2320220116T085439.861%20GMT&portalThreadName=STANDARD&portalName=Developer&pzHarnessID=HID676F4DED8FFEB9391EEAAF2A5283338D"
                let ruleIframeSrc = ruleIframe.getAttribute("src");

                let ruleKeyParameter = "&key="
                if ( ruleIframeSrc.includes("action=openRuleSpecific")) {
                    ruleKeyParameter = "&openHandle=";
                }
                
                let ruleKey = ruleIframe.getAttribute("src").split(ruleKeyParameter)[1].split("&")[0].replaceAll("%20", " ").replaceAll("%23", "#");
                console.log(ruleKey);

                let ruleTable = ruleIframe.contentWindow.document.getElementById("harness-container");
                let myDiv = ruleIframe.contentWindow.document
                    .querySelectorAll("#harness-container > tbody > tr > td > div > div > span")[1]
                    .querySelector("div > div > span > div > div > div > div > div > div > div > div > div > div > div > div > div > div");

                console.log(myDiv);
            }
        }

        isBusyPrevious = isBusy;
        
        await sleep(2000);
    }
}

console.log("Pega Chrome Tools is here!")

run();
