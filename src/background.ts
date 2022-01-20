import { config } from "./common";


chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ config }, function() {
        console.log("Default config is saved");
        console.log(config)
    });
});
