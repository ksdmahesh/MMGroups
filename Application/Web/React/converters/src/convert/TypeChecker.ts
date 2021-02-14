type DefaultType = 'bigint' | 'boolean' | 'function' | 'null' | 'number' | 'object' | 'string' | 'array' | 'symbol' | 'undefined' | 'date' | 'error' | 'regExp';

type ConversionType = bigint | boolean | Function | null | number | object | string | any[] | undefined | Date | never | Error;

export default class TypeCheck {

    static isBoolean(value: ConversionType) {
        return typeof value === 'boolean';
    }

    static isString(value: ConversionType) {
        return typeof value === 'string' || value instanceof String;
    }

    static isNumber(value: ConversionType) {
        return typeof value === 'number' && isFinite(value);
    }

    static isBigInt(value: ConversionType) {
        return typeof value === 'bigint';
    }

    static isArray(value: ConversionType) {
        if (!Array.isArray) {
            return (
                Object.prototype.toString.call(value) === '[object Array]'
                ||
                (value && typeof value === 'object' && value.constructor === Array)
            );
        } else {
            return Array.isArray(value);
        }
    }

    static isFunction(value: ConversionType) {
        return typeof value === 'function';
    }

    static isObject(value: ConversionType) {
        return (value && typeof value === 'object' && value.constructor === Object);
    }

    static isNull(value: ConversionType) {
        return value === null;
    }

    static isUndefined(value: ConversionType) {
        return typeof value === 'undefined' && value === undefined;
    }

    static isEmpty(value: ConversionType) {
        return !value;
    }

    static isEmptyObject(value: ConversionType) {
        return !Object.entries(value || {}).length;
    }

    static isRegExp(value: ConversionType) {
        return (value && typeof value === 'object' && value.constructor === RegExp);
    }

    static isError(value: any) {
        return (value && typeof value.message !== 'undefined' && value.constructor === Error && value instanceof Error);
    }

    static isDate(value: ConversionType) {
        return (value && value.constructor === Date && value instanceof Date);
    }

    static isSymbol(value: ConversionType) {
        return (value && typeof value === 'symbol');
    }

    static defaultValue(value: ConversionType) {
        switch (typeof (value)) {
            case 'bigint': return BigInt(0);
            case 'boolean': return false;
            case 'function': return function () { };
            case 'number': return 0;
            case 'object': {
                if (TypeCheck.isArray(value)) {
                    return [];
                } else if (TypeCheck.isNull(value)) {
                    return null;
                } else if (TypeCheck.isRegExp(value)) {
                    return /(?:)/;
                } else if (TypeCheck.isDate(value)) {
                    return new Date();
                } else if (TypeCheck.isError(value)) {
                    return new Error();
                } else {
                    return {};
                }
            }
            case 'string': return '';
            case 'symbol': return Symbol();
            case 'undefined': return undefined;
        }
    }

    static defaultValueByType(type: DefaultType) {
        switch (type) {
            case 'bigint': return BigInt(0);
            case 'boolean': return false;
            case 'function': return function () { };
            case 'number': return 0;
            case 'object': return {};
            case 'array': return [];
            case 'null': return null;
            case 'regExp': return /(?:)/;
            case 'date': return new Date();
            case 'error': return new Error();
            case 'string': return '';
            case 'symbol': return Symbol();
            case 'undefined': return undefined;
            default: return type;
        }
    }

    static toBoolean(value: ConversionType) {
        return !!value;
    }

    static toNumber(value: string | boolean) {
        return +value;
    }

    static toString(value: ConversionType) {
        if (TypeCheck.isObject(value) || TypeCheck.isArray(value)) {
            return JSON.stringify(value);
        } else if (TypeCheck.isNull(value) || TypeCheck.isUndefined(value)) {
            return '';
        }

        return `${value}`;
    }

    static containsKey(object: Object, key: string) {
        return object.hasOwnProperty(key);
    }

    static clone<T = ConversionType>(value: object | Array<T>) {
        JSON.parse(JSON.stringify(value || {}));
    }

    static removeItemByKey(object: any, key: string | number, withClone: boolean = false) {
        const currentObject: any = {};

        for (const currentItem in object) {
            if (`${key}` !== `${currentItem}`) {
                if (Object.prototype.hasOwnProperty.call(object, currentItem)) {
                    currentObject[currentItem] = object[currentItem];
                }
            }
        }

        return withClone ? TypeCheck.clone(currentObject) : currentObject;
    }

    static removeItemByIndex(array: any[], index: number, insertItem?: ConversionType) {
        return array.splice(index, 1, insertItem);
    }

    static insertItemAtIndex(array: any[], index: number, insertItem?: ConversionType) {
        return array.splice(index, 0, insertItem);
    }

}
