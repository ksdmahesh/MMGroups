export default class TypeCheck {
    
    static isBoolean(value: any) {
        return typeof value === 'boolean';
    }

    static isString(value: any) {
        return typeof value === 'string' || value instanceof String;
    }

    static isNumber(value: any) {
        return typeof value === 'number' && isFinite(value);
    }

    static isBigInt(value: any) {
        return typeof value === 'bigint';
    }

    static isArray(value: any) {
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

    static isFunction(value: any) {
        return typeof value === 'function';
    }

    static isObject(value: any) {
        return (value && typeof value === 'object' && value.constructor === Object);
    }

    static containsKey(object: Object, key: string) {
        return object.hasOwnProperty(key);
    }

    static isNull(value: any) {
        return value === null;
    }

    static isUndefined(value: any) {
        return typeof value === 'undefined' && value === undefined;
    }

    static isEmpty(value: any) {
        return !value;
    }

    static isEmptyObject(value: any) {
        return !Object.entries(value || {}).length;
    }

    static isRegExp(value: any) {
        return (value && typeof value === 'object' && value.constructor === RegExp);
    }

    static isError(value: any) {
        return (value && typeof value.message !== 'undefined' && value.constructor === Error && value instanceof Error);
    }

    static isDate(value: any) {
        return (value && value.constructor === Date && value instanceof Date);
    }

    static isSymbol(value: any) {
        return (value && typeof value === 'symbol');
    }

    static defaultValue(value: any) {
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

    static toBoolean(value: any) {
        return !!value;
    }

    static toNumber(value: string | boolean) {
        return +value;
    }

    static toString(value: bigint | boolean | Function | null | number | object | string | any[] | symbol | undefined | Date) {
        if (typeof value === 'object') {
            return JSON.stringify(value);
        }

        return `${value || TypeCheck.defaultValue(value)}`;
    }

    static clone(value: object | any[]) {
        JSON.parse(JSON.stringify(value || {}));
    }

}