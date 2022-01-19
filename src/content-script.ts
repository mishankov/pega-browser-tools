import { sleep, copyToClipboard } from "./utils"

async function addCopyRuleKeyIcons() {
    let ruleIframe = <HTMLIFrameElement> document.querySelector("#PEGA_TABBED0 > div.yui-content.contents.tabContent > div.iframe-wrapper[aria-hidden=false] > iframe");
        
    if (ruleIframe !== null) {
        let ruleIframeSrc = ruleIframe.getAttribute("src");

        if (ruleIframeSrc === undefined || ruleIframeSrc === "about:blank") return;

        let ruleKeyParameter = "&key="
        if ( ruleIframeSrc.includes("action=openRuleSpecific")) {
            ruleKeyParameter = "&openHandle=";
        }

        let ruleKey = "";
        try {
            ruleKey = ruleIframe.getAttribute("src").split(ruleKeyParameter)[1].split("&")[0].replace(/%20/g, " ").replace(/%23/g, "#");
        } catch {
            return;
        }
        
        let copyRuleElementId = "pct_copy_" + ruleKey.replace(/ /g, "_");
        let ruleDocument = ruleIframe.contentWindow.document;

        if (ruleDocument.getElementById(copyRuleElementId) === null) {
            let middleSpanList = ruleDocument.querySelectorAll("#harness-container > tbody > tr > td > div > div > span")
            if (middleSpanList.length > 1) {
                let ruleHeaderDiv = middleSpanList[1].querySelector("div > div > span > div > div > div > div > div > div > div > div > div > div > div > div > div > div");

                if (ruleHeaderDiv !== null) {
                    let copyRuleElement = ruleDocument.createElement("i");
                    copyRuleElement.setAttribute("class", "pi pi-copy");
                    copyRuleElement.setAttribute("id", copyRuleElementId);
                    copyRuleElement.setAttribute("pct-rule-key", ruleKey);
                    copyRuleElement.style.cursor = "pointer";

                    copyRuleElement.addEventListener('click', event => {
                        copyToClipboard(copyRuleElement.getAttribute("pct-rule-key"));
                    });

                    ruleHeaderDiv.appendChild(copyRuleElement);
                }
            }
        }
    }
}

async function addMiddleMouseTabClose() {
    let tabs = document.querySelectorAll("div.dc-header ul[role=tablist] li[role=tab]");

    for (let tab of tabs) {
        if (tab.getAttribute("title") !== "Home" && tab.getAttribute("pct-middle-click-close") !== "true") {
            tab.setAttribute("pct-middle-click-close", "true");
            tab.addEventListener('auxclick', event => {
                if ((event as MouseEvent).which == 2) {
                    (tab.querySelector('#close') as HTMLElement).click();
                }
            });
        }
    }
}

async function mainContentLoop() {
    while (true) {
        await sleep(1000);

        addCopyRuleKeyIcons();
        addMiddleMouseTabClose();
    }
}

console.log("Pega Chrome Tools is here!")

mainContentLoop();
