// TODO: need to refactor how the tables are parsed and saved locally,
// so there's consistency between loading a csv file or pasting it from clipboard

export function parsePastedTable (string) {

    // Check if the input string starts with "<table>"
    if (string.trim().startsWith("<table")) return parsePastedHtmlTable(string);
    // Treat as tab-separated table
    else return parsePastedTabTable(string);
    
}

export function parsePastedHtmlTable(string) {

    // Parse the HTML table
    const parser = new DOMParser();
    const doc = parser.parseFromString(string, "text/html");
    const table = doc.querySelector("table");

    if (!table) {
        console.error("Invalid HTML table format.");
        return null;
    }

    // Initialize an array to store the processed rows
    const parsedRows = [];

    // Iterate through the rows in the table
    const rows = table.querySelectorAll("tr");
    rows.forEach((row) => {
        const columns = Array.from(row.querySelectorAll("td, th")).map((cell) => {
            const value = cell.textContent;
            return parseColumnValue(value);
        });
        parsedRows.push(columns);
    });

    return parsedRows;
}

export function parsePastedTabTable(string) {

    // Split the string into lines based on the newline character
    const lines = string.split('\n');

    // Initialize an array to store the processed rows
    const parsedRows = [];

    // Iterate through the lines
    for (const line of lines) {
        // Remove escape characters (\r)
        const cleanedLine = line.replace(/\r/g, '');

        // Split each line into columns based on the tab character
        const columns = cleanedLine.split('\t');

        // Convert column values to integers or floats if possible
        const parsedColumns = columns.map(parseColumnValue);

        // Add the array of columns to the rows array
        parsedRows.push(parsedColumns);
    }

    return parsedRows;
}

function parseColumnValue(value) {

    const trimmedValue = value.trim();
    if (/^\d+$/.test(trimmedValue)) {
        return parseInt(trimmedValue, 10); // Integer value
    } else if (/^\d+\.\d+$/.test(trimmedValue)) {
        return parseFloat(trimmedValue); // Decimal value
    } else {
        return trimmedValue; // Keep the original value
    }
}