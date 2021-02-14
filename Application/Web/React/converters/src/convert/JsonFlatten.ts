const flatten = (data: object) => {

// data
}

export const JsonFlatten = (data: object) => {
    return `export const resultJson = ${JSON.stringify(flatten(data))}`;
}