import TypeCheck from "./TypeChecker";

const flatten = (data: any, path: string[], flat: any) => {
    if (TypeCheck.isObject(data)) {
        Object.entries(data).forEach(x => {
            flatten(data[x[0]], [...path, x[0]], flat);
        });
    } else if (TypeCheck.isArray(data)) {
        data.forEach((x: any, index: number) => {
            flatten(x, [...path, `${index}`], flat);
        });
    } else {
        flat[path.join('.')] = data;

    }
}

export const JsonFlatten = (data: object) => {
    const flat = {};
    flatten(data, ['$'], flat);
    console.log(flat);
    return `export const resultJson: { [x: string]: string | number | bigint | boolean | null | undefined | symbol } = ${JSON.stringify(flat)}`;
}