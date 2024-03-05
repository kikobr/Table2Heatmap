import createShapesHandler from './onmessage/create-shapes';
import * as csvFileHandler from './onmessage/csv-file';
import * as heatmapHandler from './onmessage/heatmap/heatmap';

import { postMessage } from '../utils/utils';
import {test} from '../utils/test-module';
import * as Papa from 'papaparse';

export default async () => {

    // This shows the HTML page in "ui.html".
    figma.showUI(__html__);
    figma.ui.resize(500, 600); 

    // By default, read local saved csv
    let csvFile = await csvFileHandler.csvFileRead();
    csvFileHandler.csvParse(csvFile);

    // Calls to "parent.postMessage" from UI
    figma.ui.onmessage = (msg) => {
        
        switch(msg.name){
            case 'create-shapes':
                createShapesHandler(msg); break;
            case 'csv-file:save':
                csvFileHandler.csvFileSave(msg); break;
            case 'heatmap:generate':
                heatmapHandler.heatmapGenerate(msg); break;
            default:
                console.log('Outro evento');
        }

    }

}