import { config } from "./common";


chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ config });
});
