import { sleep } from "./utils";
import { addCopyRuleKeyIcons, addMiddleMouseTabClose } from "./dev-studio";
import { addDeselectPegaButton } from "./tracer-settings"


async function mainContentLoop() {
    if (document.title.indexOf("Tracer Settings") != -1) {
        addDeselectPegaButton();
    }

    while (true) {
        await sleep(1000);

        if (document.title.indexOf("Dev Studio") != -1) {
            addCopyRuleKeyIcons();
            addMiddleMouseTabClose();
        }
    }
}

console.log("Pega Chrome Tools is here!")

mainContentLoop();
