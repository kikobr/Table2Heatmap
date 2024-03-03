import { FigmaUIMessage } from "./types";

export function postMessage (name:string, value:any) {
    
    /* figures out in which thread the script is running based on which global variable is available */
    let origin:string;
    try { if(figma) origin = 'plugin'; /* it's in the plugin thread */ } catch (err) {}
    try { if(parent) origin = 'ui'; /* it's in the ui thread */  } catch (err) {}

    /* sends the message via figma global object, if its in the plugin thread */
    if(origin == 'plugin'){
        return figma.ui.postMessage(
            { pluginMessage: { name: name, value: value } },
        );
    }
    /* sends the message via parent / window global object, if its in the ui thread */
    else if (origin == 'ui') {
        return parent.postMessage(
            { pluginMessage: { name: name, value: value } },
            "*"
        );
    }
}

