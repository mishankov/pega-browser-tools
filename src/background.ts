import { config, browserNamespace } from "./common";


browserNamespace.runtime.onInstalled.addListener(() => {
    browserNamespace.storage.local.set({ config }, function() {
        console.log("Default config is saved");
        console.log(config)
    });
});
