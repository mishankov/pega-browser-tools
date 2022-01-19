function sleep(ms: number) {
    return new Promise(r => setTimeout(r, ms));
}

function copyToClipboard(textContent: string) {
    var target = document.createElement("textarea");
    target.style.position = "fixed";
    target.textContent = textContent;
    document.body.appendChild(target);

    target.select();
    document.execCommand("copy");

    document.body.removeChild(target);
}

function getElementByXpath(path: string) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

export { sleep, copyToClipboard, getElementByXpath }
