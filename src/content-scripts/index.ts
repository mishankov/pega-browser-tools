import { sleep } from "./utils";
import { addCopyRuleKeyIcons, addMiddleMouseTabClose } from "./dev-studio";
import { addDeselectPegaButton } from "./tracer-settings";
import { Config } from "../common";


async function mainContentLoop() {

    let config: Config = (await chrome.storage.local.get("config")).config;

    if (document.title.indexOf("Tracer Settings") != -1 && config.tracerSettingsRulesetSelectionEnabled) {
        addDeselectPegaButton();
    }

    while (true) {
        await sleep(1000);
        config = (await chrome.storage.local.get("config")).config;

        if (document.title.indexOf("Dev Studio") != -1) {
            if (config.copyRuleKeyEnabled) addCopyRuleKeyIcons();
            if (config.closeTabWithMiddleClickEnabled) addMiddleMouseTabClose();
        }
    }
}

console.log("Pega Chrome Tools is here!")

mainContentLoop();
