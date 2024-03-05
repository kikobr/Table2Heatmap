import { error } from "console";
import { FigmaUIMessage } from "../../utils/types";
import { postMessage } from "../../utils/utils";
import * as Papa from 'papaparse';

// saves a csv locally from the UI
export const csvFileSave = (msg: FigmaUIMessage, data = {} ) => {
  	// save .csv contents in the local storage
    figma.clientStorage.setAsync('csv-file', msg.value).then(()=>{ 
      console.log('CSV saved locally under key "csv-local".');
      csvFileRead();
    });
}

// loads the csv and passes to UI     
export async function csvFileRead (data = { postMessage: true }) {
	let value = '';
	return figma.clientStorage.getAsync('csv-file').then((contents)=>{
		if(contents) {
			value = contents;
			/* communicates to UI */
			if(data.postMessage) postMessage('csv-file:read', value);
			return value;
		}
	});
}

export async function csvParse(value) {
	// csv as an object { data: [col1, col2], errors: [], meta: {} }
	const csvPapa = Papa.parse(value, { 
		dynamicTyping: true
	});

	let dataFrame:any = {
		columns: [],
		items: [],
		papaData: [],
	};

	if(csvPapa.data.length){
		
		// save original data
		dataFrame.papaData = csvPapa.data;

		// save columns
		const columns = csvPapa.data[0];
		dataFrame.columns = columns;

		// transform array of arrays into an array of objects representing the rows
		const items = csvPapa.data.slice(1) // after first line
		dataFrame.items = items.map((row: Array<any>, rowIndex)=>{

			let rowObj = {};
			row.forEach((col, colIndex) => {
				rowObj[ columns[colIndex] ] = col;
			});

			return rowObj;
		});

	} else {
		console.log('Error parsing CSV.')
	}

	return dataFrame;
}