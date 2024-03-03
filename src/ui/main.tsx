import { useState, useRef, Fragment } from 'react';
// import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { postMessage } from '../generic/utils';
import { FigmaUIMessage } from '../generic/types';

import "./ui.css";
import 'figma-plugin-ds/dist/figma-plugin-ds.css'
import { Button, SectionTitle } from 'react-figma-ui';
import * as Papa from 'papaparse';
import {test} from '../generic/test-module';

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

	return (
		<main>

			<h1>Table2Heatmap</h1>

            <form id="table-form" onSubmit={submitForm}>
              <label htmlFor="table-file">Upload CSV</label>
              <input type="file" id="table-file" ref={formFileRef} />
              <Button tint="primary" type="submit">Read CSV</Button>
            </form>

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