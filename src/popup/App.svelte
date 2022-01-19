<script lang="ts">
import { Config } from "../common";

function saveConfig() {
    let config: Config = {
        copyRuleKeyEnabled: copyRuleKeyEnabled,
        closeTabWithMiddleClickEnabled: closeTabWithMiddleClickEnabled,
        tracerSettingsRulesetSelectionEnabled: tracerSettingsRulesetSelectionEnabled,
        debugModeEnabled: debugModeEnabled
    }

    chrome.storage.local.set({ config });
}

let copyRuleKeyEnabled: boolean;
let closeTabWithMiddleClickEnabled: boolean;
let tracerSettingsRulesetSelectionEnabled: boolean;
let debugModeEnabled: boolean;

chrome.storage.local.get("config", function(data) {
    copyRuleKeyEnabled = data["config"].copyRuleKeyEnabled;
    closeTabWithMiddleClickEnabled = data.config.closeTabWithMiddleClickEnabled;
    tracerSettingsRulesetSelectionEnabled = data.config.tracerSettingsRulesetSelectionEnabled;
    debugModeEnabled = data.config.debugModeEnabled;
})

</script>

<main>
    <div>
        <input type=checkbox name="copyRuleKeyEnabled" bind:checked={copyRuleKeyEnabled}>
        <label for="copyRuleKeyEnabled"> Copy rule pzInsKey </label>
    </div>

    <div>
        <input type=checkbox name="closeTabWithMiddleClickEnabled" bind:checked={closeTabWithMiddleClickEnabled}>
        <label for="closeTabWithMiddleClickEnabled"> Close tab with middle click </label>
    </div>

    <div>
        <input type=checkbox name="tracerSettingsRulesetSelectionEnabled" bind:checked={tracerSettingsRulesetSelectionEnabled}>
        <label for="tracerSettingsRulesetSelectionEnabled"> Tracer setting Pega ruleset selection </label>
    </div>

    <div>
        <input type=checkbox name="debugModeEnabled" bind:checked={debugModeEnabled}>
        <label for="debugModeEnabled"> Debug mode </label>
    </div>

    <button on:click={saveConfig}> Save settings </button>

</main>

<style>
    main {
        width: 300px;
    }
</style>
