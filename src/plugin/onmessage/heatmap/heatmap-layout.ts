import { isAbsolute } from "path";

const fontSize = 16;
const fontName = {
    regular: { family: "Inter", style: "Regular" },
    bold: { family: "Inter", style: "Bold" }
}
const defaults = {
    cornerRadius: 10
}

export function setPadding (frame: FrameNode, padding: number){
    frame.paddingBottom = frame.paddingTop = frame.paddingLeft = frame.paddingRight = padding;
}

export function spot (opts:any = {}){
    
    // set options
    const name = opts.name ? opts.name : '';
    const width = opts.width ? opts.width : 100;
    const height = opts.height ? opts.height : 100;
    const padding = opts.padding ? opts.padding : 16;
    const index = opts.index ? opts.index : 0;
    const percentage = opts.percentage ? opts.percentage : 0;
    // tries to replicate reference frame cornerRadius
    const cornerRadius = opts.cornerRadius ? opts.cornerRadius : defaults.cornerRadius;

    // create frames and insert children
    const frame = figma.createFrame();
    const text = figma.createText();
    frame.appendChild(text);

    // adding text into the frame and 
    frame.name = name;
    frame.x = width * index + (padding * index);
    frame.y = height + 200;
    frame.cornerRadius = cornerRadius;
    frame.layoutMode = 'VERTICAL';
    frame.primaryAxisAlignItems = 'CENTER';
    frame.counterAxisAlignItems = 'CENTER';
    frame.layoutSizingVertical = 'FIXED';
    frame.clipsContent = false;
    frame.blendMode = "MULTIPLY";
    setPadding(frame, padding);
    frame.resize(width, height);

    // change its color
    // doc changing colors: https://www.figma.com/plugin-docs/editing-properties/#changing-colors
    // doc rgba: https://www.figma.com/plugin-docs/api/properties/figma-util-rgba/
    const fills = JSON.parse(JSON.stringify(frame.fills))
    fills[0] = figma.util.solidPaint(figma.util.rgba(`rgb(255 0 0 / ${percentage})`))
    frame.fills = fills;

    // adding a text to the frame referencing its percentage
    text.characters = (percentage * 100)+"%";
    text.fontSize = fontSize
    text.fontName = fontName.bold;
    text.fills = [figma.util.solidPaint(figma.util.rgba(`rgb(0 0 0 / 0.8)`))]
    text.name = "Users Percent";

    // add after layout is applied to parent
    const spotIndexFrame = spotIndex({ 
        index: index,
        parentFrame: frame,
        isAbsolute: true,
    })

    return frame;
}

export function spotIndex (opts:any = {}){
    
    // defaults
    const index = opts.index ? opts.index : 0;
    const padding = opts.padding ? opts.padding : 8;
    const parentFrame:FrameNode = opts.parentFrame ? opts.parentFrame : null;
    const width = opts.width ? opts.width : 32;
    const height = opts.height ? opts.height : width;
    const isAbsolute = opts.isAbsolute ? opts.isAbsolute : false;

    // create frames and insert children
    const frame = figma.createFrame();
    const text = figma.createText();
    frame.appendChild(text);
    
    // create a frame and text
    if(parentFrame && parentFrame.type == "FRAME") {
        parentFrame.appendChild(frame);
    }

    // adding text into the frame and 
    frame.name = String(index);
    // frame.x = width * index + (padding * index);
    // frame.y = height + 200;
    frame.cornerRadius = 999;
    frame.layoutMode = 'VERTICAL';
    frame.primaryAxisAlignItems = 'CENTER';
    frame.counterAxisAlignItems = 'CENTER';
    frame.layoutSizingVertical = 'HUG';
    frame.layoutSizingHorizontal = 'HUG';
    if(isAbsolute) {
        frame.layoutPositioning = "ABSOLUTE";
        // Center the circle on the top-right corner of the frame
        frame.x = -5;
        frame.y = -5;
        // Make the circle stick to the top-right corner of the frame
        frame.constraints = { horizontal: 'MIN', vertical: 'MIN' }
    }

    setPadding(frame, padding);
    frame.resize(width, height);

    const fills = JSON.parse(JSON.stringify(frame.fills))
    fills[0] = figma.util.solidPaint(figma.util.rgba(`rgb(0 0 0 / 1)`))
    frame.fills = fills;

    // adding a text to the frame referencing its percentage
    text.characters = String(index);
    text.fontSize = fontSize
    text.fontName = fontName.bold;
    text.fills = [figma.util.solidPaint(figma.util.rgba(`rgb(255 255 255 / 0.8)`))]
    text.name = "Users Percent";

    return frame;
}

export function tableFrame (opts: any = {}){
    
    // defaults
    const columns = opts.columns ? opts.columns : [];

    // create a frame
    const frame = figma.createFrame();

    // create a column for each column in the dataframe
    columns.forEach((column, index)=>{
        const columnFrame = tableColumn({
            parentFrame: frame
        });
        // add a cell for the column header
        const cellFrame = tableCell({ 
            header: true, 
            text: { characters: column },
            parentFrame: columnFrame
        });
    });
    
    // layout
    frame.name = 'Table';
    frame.layoutMode = 'HORIZONTAL';
    frame.layoutSizingVertical = 'HUG';
    frame.primaryAxisAlignItems = 'MIN';
    frame.counterAxisAlignItems = 'MIN';
    frame.cornerRadius = defaults.cornerRadius;

    return frame;
}

export function tableColumn (opts: any = {}){
    
    // defaults
    const parentFrame:FrameNode = opts.parentFrame ? opts.parentFrame : null;

    // create a frame and text
    const frame = figma.createFrame();
    if(parentFrame && parentFrame.type == "FRAME") {
        parentFrame.appendChild(frame);
    }

    // layout column frame
    frame.name = 'Column';
    frame.layoutMode = 'VERTICAL';
    frame.primaryAxisAlignItems = 'CENTER';
    frame.counterAxisAlignItems = 'CENTER';
    frame.layoutSizingVertical = 'HUG';
    frame.layoutSizingHorizontal = 'HUG';

    return frame;
}

export function tableCell (opts:any = {}) {

    // defaults
    const isHeader = opts.header ? opts.header : false;
    const textValue = opts.text && opts.text.characters ? opts.text.characters : '';
    const percentage = opts.percentage ? opts.percentage : 0;
    const parentFrame:FrameNode = opts.parentFrame ? opts.parentFrame : null;

    // adding a text to the frame referencing its percentage
    const text = figma.createText();
    const frame = figma.createFrame();
    frame.appendChild(text)
    
    // appending to column frame
    if(parentFrame && parentFrame.type == "FRAME") {
        parentFrame.appendChild(frame);
    }

    // layout outer frame
    frame.name = 'Cell';
    frame.layoutMode = 'VERTICAL';
    frame.primaryAxisAlignItems = 'CENTER';
    frame.counterAxisAlignItems = 'MIN';
    frame.layoutSizingVertical = 'HUG';
    frame.layoutSizingHorizontal = 'FILL';
    setPadding(frame, 10);
    if(isHeader) frame.fills = [figma.util.solidPaint(figma.util.rgba(`rgb(0 0 0 / 1)`))]
    else frame.fills = [figma.util.solidPaint(figma.util.rgba(`rgb(255 0 0 / ${percentage})`))]

    // layout inner text
    const texts = frame.children;
    texts.forEach((text:TextNode) => {
        
        text.name = 'Text';
        text.characters = textValue;
        text.fontSize = fontSize
        text.fontName = fontName.regular;
        if(isHeader) text.fills = [figma.util.solidPaint(figma.util.rgba(`rgb(255 255 255 / 1)`))]
        else [figma.util.solidPaint(figma.util.rgba(`rgb(0 0 0 / 0.8)`))]
        text.resize(50, 10);
        text.layoutSizingVertical = 'HUG';
        text.layoutSizingHorizontal = 'HUG';
    
    });

    return frame;
}