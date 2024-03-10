import { FigmaUIMessage } from "../../../utils/types";
import { postMessage } from "../../../utils/utils";
import { csvFileRead, csvParse } from '../csv-file';
import * as layout from './heatmap-layout';

// creates the heatmap
export async function heatmapGenerate (msg: FigmaUIMessage, data = {} ) {
    
    console.log('heatmap generate');
    const csvFile = await csvFileRead(data = { postMessage: false });
    const dataFrame = await csvParse(csvFile);
    const nodes: SceneNode[] = [];
    const tablePadding = 50;

    // selected Frame
    const selectedFrame = figma.currentPage.selection[0];
    if(!selectedFrame || selectedFrame.type != "FRAME"){
        alert('No frame selected! Select one to continue.'); // todo: toast
        return;
    }

    // load the fonts first
    await loadFonts();

    // create a table object
    let table = [];
    // loop through columns and add them to table array
    for(let i = 0; i < dataFrame.columns.length; i++){
        let series = { column: '', items: [] };
        series.column = dataFrame.columns[i];
        // for each row, get the column corresponding to the [i] column
        series.items = dataFrame.items.map((item) => {
            return item[dataFrame.columns[i]];
        });
        table.push(series);
    }

    // create table frame
    const tableFrame = layout.tableFrame({
        columns: dataFrame.columns
    });
    nodes.push(tableFrame);

    /* loop through rows to create frames */
    dataFrame.items.forEach(async (item, index) => {

        if(index < 100){

            const percentage = item["Users Percent"];

            // resize it over selected frame matched children
            if(selectedFrame.type == "FRAME"){
                let selectedFrameSpotNodes = selectedFrame.findAll(n => n.name === item['Destination Page'])
                selectedFrameSpotNodes.forEach((spotNode: FrameNode, matchIndex) => {

                    // create a spotFrame for each matching spotNodes
                    const spotFrame = layout.spot({
                        name: item["Destination Page"],
                        percentage: percentage,
                        index: index,
                        cornerRadius: spotNode.cornerRadius
                    });
                    
                    // add spot frame to selection
                    nodes.push(spotFrame);

                    // resizes and moves the original frame
                    spotFrame.x = spotNode.absoluteBoundingBox.x;
                    spotFrame.y = spotNode.absoluteBoundingBox.y;
                    spotFrame.resize(spotNode.width, spotNode.height);
                });

            }

            // -----------------------------------
            // add each column for this row in the table frame
            dataFrame.columns.forEach((column, columnIndex) => {
                
                // layout table cell
                const cellFrame = layout.tableCell({ 
                    text: { characters: String(item[column]) },
                    percentage: percentage,
                    parentFrame: tableFrame.children[columnIndex]
                });                
                
            });

        }
    });

    // move table to the right of the selection frame
    tableFrame.x = selectedFrame.absoluteBoundingBox.x + selectedFrame.absoluteBoundingBox.width + tablePadding;
    tableFrame.y = selectedFrame.absoluteBoundingBox.y;

    // copy selected frame and manipulate it
    const innerFrameClone = selectedFrame.clone();
    innerFrameClone.blendMode = "LUMINOSITY";
    innerFrameClone.opacity = 0.5;
    // create a blank background so that the luminosity can show up as a grayscale image
    const outerFrameClone = figma.createFrame();
    outerFrameClone.resize(innerFrameClone.width, innerFrameClone.height);
    outerFrameClone.x = innerFrameClone.absoluteBoundingBox.x;
    outerFrameClone.y = innerFrameClone.absoluteBoundingBox.y;
    outerFrameClone.appendChild(innerFrameClone);
    // outerFrameClone.blendMode = "NORMAL";
    innerFrameClone.x = 0;
    innerFrameClone.y = 0;

    // return;
    nodes.push(outerFrameClone);

    // group created items
    const group = figma.group(nodes, figma.currentPage);
    
    // const parentChildrenLength = selectedFrameClone.parent.children.length;
    // const zIndex = selectedFrameClone.parent.children.indexOf(selectedFrameClone);
    // add frame to the bottom of the page
    outerFrameClone.parent.insertChild(0, outerFrameClone);
    

    // zoom to nodes
    // figma.currentPage.selection = nodes;
    // figma.viewport.scrollAndZoomIntoView(nodes);
    figma.currentPage.selection = [group];
    figma.viewport.scrollAndZoomIntoView([group]);

    // close plugin
    figma.closePlugin();
}

const loadFonts = async () => {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" })
    await figma.loadFontAsync({ family: "Inter", style: "Bold" })
}