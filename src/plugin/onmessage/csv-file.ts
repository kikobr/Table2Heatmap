import { FigmaUIMessage } from "../../utils/types";
import { postMessage } from "../../utils/utils";

// saves a csv locally from the UI
export const csvFileSave = (msg: FigmaUIMessage, data = {} ) => {
  	// save .csv contents in the local storage
    figma.clientStorage.setAsync('csv-file', msg.value).then(()=>{ 
      console.log('CSV saved locally under key "csv-local".');
      csvFileRead();
    });
}  

// loads the csv and passes to UI     
export const csvFileRead = (data = {}) => {
	let value = '';
	figma.clientStorage.getAsync('csv-file').then((contents)=>{
		if(contents) {
			value = contents;
			postMessage('csv-file:read', value);
		}
	});
}