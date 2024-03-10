import { useState, useRef, Fragment } from 'react';
// import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { postMessage } from '../utils/utils';
import { FigmaUIMessage } from '../utils/types';
import { parsePastedTable } from '../utils/table-utils';

import "./ui.css";
import 'figma-plugin-ds/dist/figma-plugin-ds.css'
import { Button, SectionTitle } from 'react-figma-ui';
import * as Papa from 'papaparse';
import {test} from '../utils/test-module';

const App = () => {

	const [localCsv, setLocalCsv] = useState({ data: [] });
	const [formError, setFormError] = useState('');

	const formFileRef = useRef(null);

    const onCsvLocalUpdated = (message: FigmaUIMessage) => {
        let csv = Papa.parse(message.value, { dynamicTyping: true });
        setLocalCsv(csv);
    }

    /* inside each callback theres a condition to filter whether they are showed or not */
    const onMessageHandler = onmessage = msg => {
        let message = msg.data.pluginMessage.pluginMessage;

        switch(message.name){
            case 'csv-file:read':
                onCsvLocalUpdated(message); break;
            default:
                console.log('Outro evento');
        }
        
    }    
  
	const submitForm = (evt) => {
		evt.preventDefault();

		// load file from input element reference
		let file = formFileRef.current.files[0];

		if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            // after loading the content, send it through emit to main thread
            reader.onload = (evt:any) => {
                postMessage('csv-file:save', evt.target.result);
            }
            // logs an error if something bad happened
            reader.onerror = (evt) => {
                setFormError('error reading files');
            }
        }
		// prevent closing
		evt.preventDefault();
	}

	const heatmapGenerate = (evt) => {
		postMessage('heatmap:generate', null);
	}

	const pasteField = useRef(null);
  const paste = async (evt) => {

    // Get pasted data via clipboard API
    const clipboardData = evt.clipboardData;
    const pastedData = clipboardData.getData('Text');
    // const clipboardContents = await navigator.clipboard.read();
    // console.log(evt);
    // console.log(pastedData)
    console.log(parsePastedTable(pastedData));
  }

	return (
		<main>

			<h1>Table2Heatmap</h1>

            {/* <Button tint="secondary" onClick={paste}>Paste</Button> */}
            <textarea onPaste={paste}></textarea>

            <form id="table-form" onSubmit={submitForm}>
              <label htmlFor="table-file">Upload CSV</label>
              <input type="file" id="table-file" ref={formFileRef} />
              <Button tint="secondary" type="submit">Read CSV</Button>
            </form>
            <Button tint="primary" onClick={heatmapGenerate}>Generate Heatmap</Button>

            {
              localCsv.data.length > 0 ? 
              <Fragment>
                <table id="fileContents" >
                  <tbody>
                  {
                    localCsv.data.map((row:any, index) => {
                      return <tr key={index}>
                        {
                          row.map((column:any, index) => {
                            return <td key={index}>{column}</td>
                          })
                        }
                      </tr>
                    })
                  }
                  </tbody>
                </table>
              </Fragment> : ''
            }
            {localCsv.data.length}

		</main>
	)
}

export default function () {
    ReactDOM.createRoot(document.getElementById("react-page")).render(<App />);
}