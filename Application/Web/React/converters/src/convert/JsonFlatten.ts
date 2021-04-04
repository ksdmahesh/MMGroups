import TypeCheck from "./TypeChecker";

const flatten = (data: any, path: string[], flat: any) => {
    if (TypeCheck.isObject(data)) {
        Object.entries(data).forEach(x => {
            const isSubPath = x[0].includes('.') || x[0].includes('[') || x[0].includes(']');
            flatten(data[x[0]], [...path, `${isSubPath ? '"' : ''}${x[0]}${isSubPath ? '"' : ''}`], flat);
        });
    } else if (TypeCheck.isArray(data)) {
        data.forEach((x: any, index: number) => {
            flatten(x, [...path, `[${index}]`], flat);
        });
    } else {
        flat[path.join('.')] = data;
    }
}

const deFlatten = (data: any, deflat: any) => {
    try {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                let element = deflat;
                let isOpened = false;
                let prevChar = '';
                let currentPath = '';
                const path: string[] = [];
                const chars = key.split('')?.slice(2);
                const keyLength = chars.length;
                chars.forEach((char, index) => {
                    if (char === '"' && prevChar !== '\\') {
                        isOpened = !isOpened;
                    }
                    if (!isOpened && char === '.') {
                        path.push(currentPath);
                        currentPath = '';
                    } else if (!isOpened && index === keyLength - 1) {
                        currentPath += char;
                        path.push(currentPath);
                        currentPath = '';
                    } else {
                        currentPath += char;
                    }
                    prevChar = char;
                });

                const lastIndex = path.length - 1;
                let lastKey = path[lastIndex];
                if (lastKey.startsWith('[') && lastKey.endsWith(']')) {
                    lastKey = lastKey.slice(1, lastKey.length - 1);
                }

                for (let index = 0; index < path?.length; index++) {
                    let currentPath = path[index];

                    if (currentPath.startsWith('[') && currentPath.endsWith(']')) {
                        currentPath = currentPath.slice(1, currentPath.length - 1);
                    }

                    if (!element[currentPath]) {
                        if (index < lastIndex) {
                            const nextPath = path[index + 1];
                            if (nextPath.startsWith('[') && nextPath.endsWith(']')) {
                                element[currentPath] = [];
                            } else {
                                element[currentPath] = {};
                            }
                        }
                    }

                    if (index === lastIndex) {
                        element[lastKey] = data[key];
                    } else if (index < lastIndex) {
                        element = element[currentPath];
                    }
                }
            }
        }
    } catch (er) {

    }
}

/**
 * For Flattening JSON
 * @param data JSON Object to Flatten
 * @param includeDefault If true return string with import/export, if false returns plain object
 * @returns string or object
 */
export const JsonFlatten = (props: { data: object, includeDefault: boolean }) => {
    const flat = {};
    flatten(props.data, ['$'], flat);

    if (props.includeDefault) {
        return `export const resultJson: { [x: string]: string | number | bigint | boolean | null | undefined | symbol } = ${JSON.stringify(flat)}`;
    }

    return flat;
}

/**
 * For Deflattening JSON
 * @param data JSON Object to Deflatten
 * @param includeDefault If true return string with import/export, if false returns plain object
 * @returns string or object
 */
export const JsonDeflatten = (props: { data: object, includeDefault: boolean }) => {
    const deFlat = {};
    deFlatten(props.data, deFlat);

    if (props.includeDefault) {
        return `export const resultJson: any = ${JSON.stringify(deFlat)}`;
    }

    return deFlat;
}