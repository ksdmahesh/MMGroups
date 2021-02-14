import TypeCheck from "./TypeChecker";

const flatten = (data: any) => {
    if (TypeCheck.isObject(data)) {
        return Object.entries(data).forEach(x => {
            flatten(data[x[0]]);
        });
    } else if (TypeCheck.isArray(data)) {
        return data.forEach((x: any) => {
            flatten(x);
        });
    } else {
        return data;
    }
}

export const JsonFlatten = (data: object) => {
    return `export const resultJson = ${JSON.stringify(flatten(data))}`;
}