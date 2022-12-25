interface Config {
    copyRuleKeyEnabled: boolean
    closeTabWithMiddleClickEnabled: boolean
    tracerSettingsRulesetSelectionEnabled: boolean
    debugModeEnabled: boolean
}

let config = {
    copyRuleKeyEnabled: true,
    closeTabWithMiddleClickEnabled: true,
    tracerSettingsRulesetSelectionEnabled: true,
    debugModeEnabled: false
}

const browserNamespace = function() {
    try {
        return browser;
    } catch {
        return chrome;
    }
}();


export { config, Config, browserNamespace }
