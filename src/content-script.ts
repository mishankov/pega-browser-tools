import { sleep, copyToClipboard } from "./utils"

async function mainContentLoop() {
    while (true) {
        await sleep(1000);

        let ruleIframe = <HTMLIFrameElement> document.querySelector("#PEGA_TABBED0 > div.yui-content.contents.tabContent > div.iframe-wrapper[aria-hidden=false] > iframe");
        
        if (ruleIframe !== null) {
            let ruleIframeSrc = ruleIframe.getAttribute("src");

            if (ruleIframeSrc === undefined || ruleIframeSrc === "about:blank") continue;

            let ruleKeyParameter = "&key="
            if ( ruleIframeSrc.includes("action=openRuleSpecific")) {
                ruleKeyParameter = "&openHandle=";
            }
            
            let ruleKey = ruleIframe.getAttribute("src").split(ruleKeyParameter)[1].split("&")[0].replaceAll("%20", " ").replaceAll("%23", "#");
            let copyRuleElementId = "pct_copy_" + ruleKey.replaceAll(" ", "_");
            let ruleDocument = ruleIframe.contentWindow.document;

            if (ruleDocument.getElementById(copyRuleElementId) === null) {
                let middleSpanList = ruleDocument.querySelectorAll("#harness-container > tbody > tr > td > div > div > span")
                if (middleSpanList.length > 1) {
                    let ruleHeaderDiv = middleSpanList[1].querySelector("div > div > span > div > div > div > div > div > div > div > div > div > div > div > div > div > div");

                    if (ruleHeaderDiv !== null) {
                        let copyRuleElement = ruleDocument.createElement("i");
                        copyRuleElement.setAttribute("class", "pi pi-copy");
                        copyRuleElement.setAttribute("id", copyRuleElementId);
                        copyRuleElement.setAttribute("rule-key", ruleKey);
                        copyRuleElement.style.cursor = "pointer";

                        copyRuleElement.addEventListener('click', event => {
                            copyToClipboard(copyRuleElement.getAttribute("rule-key"));
                        });

                        ruleHeaderDiv.appendChild(copyRuleElement);
                    }
                }
            }
        }
    }
}

console.log("Pega Chrome Tools is here!")

mainContentLoop();
