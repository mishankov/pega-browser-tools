<script lang="ts">
import { Config, browserNamespace } from "../common";

import { FormGroup, Input, Button, Card, CardBody, CardHeader, CardTitle, CardSubtitle, Alert, Container, Tooltip } from "sveltestrap";

function saveConfig() {
    let config: Config = {
        copyRuleKeyEnabled: copyRuleKeyEnabled,
        closeTabWithMiddleClickEnabled: closeTabWithMiddleClickEnabled,
        tracerSettingsRulesetSelectionEnabled: tracerSettingsRulesetSelectionEnabled,
        debugModeEnabled: debugModeEnabled
    }

    browserNamespace.storage.local.set({ config }, function() {
        settingsSaved = true;
    });
    // window.close();
}

let copyRuleKeyEnabled: boolean;
let closeTabWithMiddleClickEnabled: boolean;
let tracerSettingsRulesetSelectionEnabled: boolean;
let debugModeEnabled: boolean;

let settingsSaved = false;

browserNamespace.storage.local.get("config", function(data) {
    copyRuleKeyEnabled = data["config"].copyRuleKeyEnabled;
    closeTabWithMiddleClickEnabled = data.config.closeTabWithMiddleClickEnabled;
    tracerSettingsRulesetSelectionEnabled = data.config.tracerSettingsRulesetSelectionEnabled;
    debugModeEnabled = data.config.debugModeEnabled;
})

</script>

<main>

    <Card>
        <CardHeader> <CardTitle> Pega Browser Tools settings </CardTitle> </CardHeader>
        <CardBody>

            <Alert color="success" isOpen={settingsSaved} toggle={() => (settingsSaved = false)}>
                Settings saved
            </Alert>

            <CardSubtitle>Features</CardSubtitle>

            <FormGroup>
                <Input id="copyRuleKeyEnabled" type="checkbox" label="Copy rule pzInsKey" bind:checked={copyRuleKeyEnabled}/>
                <Tooltip target="copyRuleKeyEnabled" placement="top">Feature will be enabled or disabled in new Dev Studio tabs</Tooltip>
            </FormGroup>
        
            <FormGroup>
                <Input id="closeTabWithMiddleClickEnabled" type="checkbox" label="Close tab with middle click" bind:checked={closeTabWithMiddleClickEnabled}/>
                <Tooltip target="closeTabWithMiddleClickEnabled" placement="top">Feature will be enabled or disabled on new Dev Studio tabs</Tooltip>
            </FormGroup>
        
            <FormGroup>
                <Input type="checkbox" label="Tracer setting Pega ruleset selection" bind:checked={tracerSettingsRulesetSelectionEnabled}/>
            </FormGroup>

            <!-- <CardSubtitle>Debug</CardSubtitle>
        
            <FormGroup>
                <Input id="debugModeEnabled" type="checkbox" label="Debug mode" bind:checked={debugModeEnabled}/>
                <Tooltip target="debugModeEnabled" placement="top">console.log() stuff for debug</Tooltip>
            </FormGroup> -->
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
