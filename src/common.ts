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

export { config, Config }
