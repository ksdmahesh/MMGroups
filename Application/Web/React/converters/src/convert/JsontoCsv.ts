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
export const CsvtoJson = (props: { data: string, includeDefault: boolean }) => {
    const json = {};
    toJson(props.data, json);

    if (props.includeDefault) {
        return `export const Json: any = ${JSON.stringify(json)}`;
    }

    return json;
}