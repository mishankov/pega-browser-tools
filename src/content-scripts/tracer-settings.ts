import { getElementByXpath } from "./utils";

async function addDeselectPegaButton() {
    //Creating Elements
    var btn = document.createElement("button");
    var buttonLeft = document.createElement('span');
    buttonLeft.setAttribute('class', 'buttonLeft');

    var buttonText = document.createElement('span');
    buttonText.setAttribute('class', 'buttonText');
    var t = document.createTextNode("Deselect Pega");
    buttonText.appendChild(t);

    var buttonMiddle = document.createElement('span');
    buttonMiddle.setAttribute('class', 'buttonMiddle');
    buttonMiddle.appendChild(buttonText);

    var buttonRight = document.createElement('span');
    buttonRight.setAttribute('class', 'buttonRight');

    btn.type = "button";
    btn.title = "Deselect Pega"
    btn.appendChild(buttonLeft)
    btn.appendChild(buttonMiddle)
    btn.appendChild(buttonRight)

    btn.onclick = function () {
        var ruleSetList = (getElementByXpath("//*[@id=\"RuleSetDisplay\"]/table/tbody/tr/td/table/tbody/tr/td/table/tbody") as HTMLTableElement).rows;
        for (var i = ruleSetList.length - 2; i >= 0; i--) {
            var ruleSetName = ruleSetList[i].cells[0].innerText.trim();
            if (ruleSetName.startsWith("Pega")) {
                try {
                    (ruleSetList[i].cells[1].lastChild as HTMLInputElement).checked = false;
                } catch (e) {
                    (ruleSetList[i].cells[0].firstChild as HTMLInputElement).checked = false;
                }
            };
        }
    };
    //Appending to DOM 
    document.getElementById("RuleSetDisplay").children[0].appendChild(btn);
}

export { addDeselectPegaButton }
