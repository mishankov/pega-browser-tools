<script lang="ts">
import { Config } from "../common";

import { FormGroup, Input, Button, Card, CardBody, CardHeader, CardTitle, CardSubtitle, Alert, Container } from "sveltestrap";

function saveConfig() {
    let config: Config = {
        copyRuleKeyEnabled: copyRuleKeyEnabled,
        closeTabWithMiddleClickEnabled: closeTabWithMiddleClickEnabled,
        tracerSettingsRulesetSelectionEnabled: tracerSettingsRulesetSelectionEnabled,
        debugModeEnabled: debugModeEnabled
    }

    settingsSaved = true;

    chrome.storage.local.set({ config });
    // window.close();
}

let copyRuleKeyEnabled: boolean;
let closeTabWithMiddleClickEnabled: boolean;
let tracerSettingsRulesetSelectionEnabled: boolean;
let debugModeEnabled: boolean;

let settingsSaved = false;

chrome.storage.local.get("config", function(data) {
    copyRuleKeyEnabled = data["config"].copyRuleKeyEnabled;
    closeTabWithMiddleClickEnabled = data.config.closeTabWithMiddleClickEnabled;
    tracerSettingsRulesetSelectionEnabled = data.config.tracerSettingsRulesetSelectionEnabled;
    debugModeEnabled = data.config.debugModeEnabled;
})

</script>

<main>

    <Card>
        <CardHeader> <CardTitle> Pega Chrome Tools settings </CardTitle> </CardHeader>
        <CardBody>

            <Alert color="success" isOpen={settingsSaved} toggle={() => (settingsSaved = false)}>
                Settings saved. Reload page to apply
            </Alert>

            <CardSubtitle>Features</CardSubtitle>

            <FormGroup>
                <Input type="checkbox" label="Copy rule pzInsKey" bind:checked={copyRuleKeyEnabled}/>
            </FormGroup>
        
            <FormGroup>
                <Input type="checkbox" label="Close tab with middle click" bind:checked={closeTabWithMiddleClickEnabled}/>
            </FormGroup>
        
            <FormGroup>
                <Input type="checkbox" label="Tracer setting Pega ruleset selection" bind:checked={tracerSettingsRulesetSelectionEnabled}/>
            </FormGroup>

            <CardSubtitle>Debug</CardSubtitle>
        
            <FormGroup>
                <Input type="checkbox" label="Debug mode" bind:checked={debugModeEnabled}/>
            </FormGroup>
        </CardBody>

        <Container>
            <Button style="margin-bottom: 10px" class="save-button" color="primary" on:click={saveConfig}>Save settings</Button>
        </Container>
    </Card>

</main>

<style>
    main {
        width: 300px;
    }
</style>
