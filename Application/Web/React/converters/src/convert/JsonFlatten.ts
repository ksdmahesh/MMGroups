import TypeCheck from "./TypeChecker";

const flatten = (data: any, path: string) => {
    if (TypeCheck.isObject(data)) {
        Object.entries(data).forEach(x => {
            flatten(data[x[0]], `${path}.${x[0]}`);
        });
    } else if (TypeCheck.isArray(data)) {
        data.forEach((x: any, index: number) => {
            flatten(x, `${path}.${index}`);
        });
    } else {
        return data;
    }
}

export const JsonFlatten = (data: object) => {
    const result = flatten(data, '$');
    console.log(result);
    return `export const resultJson = ${JSON.stringify(result)}`;
}