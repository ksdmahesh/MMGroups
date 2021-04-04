const toCsv = (data: any) => {
    return '';
}

const toJson = (data: any, json: any) => {
   
}

/**
 * For JSON to CSV Conversion
 * @param data JSON Object
 * @returns string
 */
export const JsontoCsv = (data: object) => {
    const csv =  toCsv(data);

    return csv;
}

/**
 * For CSV to JSON Conversion
 * @param data Csv string
 * @param includeDefault If true return string with import/export, if false returns plain object
 * @returns string or object
 */
export const CsvtoJson = (data: string, includeDefault: boolean = true) => {
    const json = {};
    toJson(data, json);

    if (includeDefault) {
        return `export const Json: any = ${JSON.stringify(json)}`;
    }

    return json;
}