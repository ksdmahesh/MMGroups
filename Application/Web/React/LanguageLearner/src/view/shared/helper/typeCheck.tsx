export class HelperClass {
    // tslint:disable-next-line: no-any
    static isObjectEmpty(value: any) {
        if (TypeCheck.isNullOrUndefined(value)) {
            return true;
        } else {
            return Object.entries(value).length === 0;
        }
    }

    // tslint:disable-next-line: no-any
    static containsKey(object: any, key: string) {
        return object.hasOwnProperty(key);
    }

    static convertToBoolean(value: string) {
        return !!value;
    }
}

export default class TypeCheck {

    // tslint:disable-next-line: no-any
    static isBoolean(value: any) {
        return typeof value === 'boolean';
    }

    // tslint:disable-next-line: no-any
    static isString(value: any) {
        return typeof value === 'string' || value instanceof String;
    }

    // tslint:disable-next-line: no-any
    static isNumber(value: any) {
        return typeof value === 'number' && isFinite(value);
    }

    // tslint:disable-next-line: no-any
    static isArray(value: any) {
        if (!Array.isArray) {
            return (Object.prototype.toString.call(value) === '[object Array]') ||
                (value && typeof value === 'object' && value.constructor === Array);
        } else {
            return Array.isArray(value);
        }
    }

    // tslint:disable-next-line: no-any
    static isFunction(value: any) {
        return typeof value === 'function';
    }

    // tslint:disable-next-line: no-any
    static isObject(value: any) {
        return value && typeof value === 'object' && value.constructor === Object;
    }

    // tslint:disable-next-line: no-any
    static isNull(value: any) {
        return value === null;
    }

    // tslint:disable-next-line: no-any
    static isNullOrUndefined(value: any) {
        return value === null || typeof value === 'undefined' || value === undefined;
    }

    // tslint:disable-next-line: no-any
    static isUndefined(value: any) {
        return typeof value === 'undefined' || value === undefined;
    }

    // tslint:disable-next-line: no-any
    static isRegExp(value: any) {
        return value && typeof value === 'object' && value.constructor === RegExp;
    }

    // tslint:disable-next-line: no-any
    static isError(value: any) {
        return value instanceof Error && typeof value.message !== 'undefined';
    }

    // tslint:disable-next-line: no-any
    static isDate(value: any) {
        return value instanceof Date;
    }

    // tslint:disable-next-line: no-any
    static isSymbol(value: any) {
        return typeof value === 'symbol';
    }
}