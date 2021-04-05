//#region Enums

enum SpecialChars {
    Quotes = '"',
    Escape = "\\"
}

//#endregion

//#region Types

type ConvertionProps = {
    /**
     * @type default: true
     * @type true: considering first row as headers
     * @type false: convert without headers using uuid
     */
    containsHeaders?: boolean,
    /**
     * @type default: any of \r, \n, \r\n
     * @throws if provides quotes(") or spaces(' ')
     */
    rowSplitter?: string[],
    /**
     * @type default: comma(,)
     * @throws if provides quotes(") or spaces(' ')
     */
    columnSplitter?: string[],
    /**
     * @type default: undefined
     * @type columns: considering all rows and columns as columns
     * @type rows: considering all rows and columns as rows
     */
    considerEverythingAs?: 'columns' | 'rows',
    /**
     * @type default: true
     * @type true: considering space after comma as started new column
     * @example column1, "column2, column2" => taken as {{(1)column1, (2)column2, (3)column2}} instead of {{(1)column1, (2)[column2, column2]}}
     * @type false: skipping spaces until next column or row splitters
     */
    considerSpaceBetweenCommaAndQuotes?: boolean
}

//#endregion

//#region Members

let convertionAttributes: ConvertionProps | undefined;

let withinQuotes = false;

let allValues: { value?: string, withinQuotes?: boolean }[] = [];

const regExpEscapeChars: string[] = [
    '\\\d', '\\\D', '\\\f', '\\\n', '\\\r', '\\\s', '\\\S', '\\\t', '\\\v', '\\\w', '\\\W', '\\\0', '\\\\xhh', '\\\\uhhhh', '\\\\uhhhhh', '[\\\b]', '\\\b', '\\\B', '\\\cX', '\\\p', '\\\P', '\\^', '\\$', '\\(', '\\)', '\\<', '\\>', '\\[', '\\]', '\\{', '\\}', '\\?', '\\=', '\\!', '\\:', '\\|', '\\*', '\\+', '\\\\', '\\.'
];

let rowIndex = 0;
let colIndex = -1;

//#endregion

//#region private functions

const validate = () => {
    if (convertionAttributes?.columnSplitter?.some(col => col.includes('"') || col.includes(' ')) || convertionAttributes?.rowSplitter?.some(row => row.includes('"') || row.includes(' '))) {
        throw new Error('quotes not to be used as row or column splitters');
    }
}

const toCsv = (data: any) => {
    return '';
}

const toJson = (data: string[], json: any) => {
    validate();
    let prevChar = '';
    const rowSplitters = convertionAttributes?.rowSplitter || ['\r', '\n', '\r\n'];
    const columnSplitters = convertionAttributes?.columnSplitter || [','];
    const rowRegExp = new RegExp(rowSplitters.map(row => row.replace(regExpEscapeChars.join('|'), '\\$&')).join('|'), 'igm');
    const colRegExp = new RegExp(columnSplitters.map(row => row.replace(regExpEscapeChars.join('|'), '\\$&')).join('|'), 'igm');
    let valueIndex = 0;
    for (let index = 0; index < data.length; index++) {
        const char = data[index];
        if (char === SpecialChars.Quotes) {
            if (!withinQuotes) {
                valueIndex++;
                withinQuotes = true;
                continue;
            } else if (prevChar !== SpecialChars.Escape) {
                valueIndex++;
                withinQuotes = false;
                continue;
            }
        }

        if (!allValues[valueIndex]) {
            allValues[valueIndex] = {};
        }
        allValues[valueIndex].value = `${allValues[valueIndex].value || ''}${char}`;
        allValues[valueIndex].withinQuotes = withinQuotes;
    }
    rowIndex = 0;
    const result = allValues.flatMap(a => {
        if (!a.withinQuotes) {
            const rows = a.value?.split(rowRegExp);

            return rows?.filter(row => row).map((row, index) => {
                if (index) {
                    rowIndex++;
                }
                return { ...a, value: row, rowIndex };
            }) || { ...a, value: rows?.[0], rowIndex };
        } else {
            return { ...a, value: a.value, rowIndex };
        }
    }).flatMap(a => {
        if (a.rowIndex !== rowIndex) {
            colIndex = -1;
        }
        rowIndex = a.rowIndex;
        if (!a.withinQuotes) {
            const cols = a.value?.split(colRegExp);

            return cols?.filter(col => col).map(col => ({ ...a, value: col, colIndex: col?.trim() ? ++colIndex : colIndex })) || { ...a, value: cols?.[0], colIndex: cols?.[0]?.trim() ? ++colIndex : colIndex };
        } else {
            return { ...a, value: a.value, colIndex: a.value?.trim() ? ++colIndex : colIndex };
        }
    });
    debugger
    colIndex = Math.max(...result.map(a => a.colIndex));

    for (let index = 0; index <= colIndex; index++) {
        result.filter(a => a.colIndex === index).forEach(element => {
            if (!json[element.rowIndex]) {
                json[element.rowIndex] = [];
            }

            if (element.value?.trim()) {
                json[element.rowIndex][element.colIndex] = element.value;
            }
        });
    }

    console.log(result, json);
}

//#endregion

/**
 * For JSON to CSV Conversion
 * @param data JSON Object
 * @returns string
 */
export const JsontoCsv = (props: { data: object }) => {
    const csv = toCsv(props.data);

    return csv;
}

/**
 * For CSV to JSON Conversion
 * @param data Csv string
 * @param includeDefault If true return string with import/export, if false returns plain object
 * @returns string or object
 */
export const CsvtoJson = (props: { data: string, includeDefault: boolean, options: ConvertionProps }) => {
    const json: string[][] = [];
    toJson(props.data.split(''), json);

    if (props.includeDefault) {
        return `export const Json: any = ${JSON.stringify(json)}`;
    }

    return json;
}