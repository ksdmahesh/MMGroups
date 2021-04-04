//#region Enums

import TypeCheck from "./TypeChecker";

enum Chars {
    StartTag = '<',
    EndTag = '>',
    ElementEnd = '/',
    DeclarationTag = '<?',
    CommentStartTag = '<!--',
    CommentEndTag = '-->',
    CDATAStart = '<![CDATA[',
    CDATAEnd = ']]>'
}

enum SpecialChars {
    value1 = '"',
    value2 = "'",
    attribute1 = ' ',
    attribute2 = '=',
    amp = '&',
    start = '<',
    end = '>',
    line = '\n',
    return = '\r'
}

enum XmlTypes {
    Element = 'Element',
    Attribute = 'Attribute',
    Declaration = 'Declaration',
    Value = 'Value',
    Text = 'Text',
    CDATA = 'CDATA',
    Comment = 'Comment',
    Unknown = 'Unknown'
}

//#endregion

//#region Types

type XmlType = {
    type?: XmlTypes,
    actualValue?: string,
    value?: string,
    isClosed?: boolean,
    isSelfClosed?: boolean
};

type JsType = {
    [x: string]: {
        value: JsType,
        path: string
    }
};

//#endregion

//#region Members

const allRules: XmlType[] = [];
const path: { type: XmlTypes, value: string, actualValue: string }[] = [];

let isElement = false;
let isSelfClosed = false;
let isAttribute = false;
let isDeclaration = false;
let isValue1 = false;
let isCData = false;
let rule: XmlType = {};
let resultIndex = 0;
const jsType: { rule: JsType } = {
    rule: {}
};

//#endregion

//#region private functions

const getTabs = () => `\r\n${new Array<string>(resultIndex).fill('\t').join('')}`;

const toXml = (data: any, path?: string, isArray?: boolean) => {
    let result = `${(data.Declaration?.join('\r\n') || '')}`;
    const props = {
        attribute: '',
        innerText: ''
    }
    try {
        if (TypeCheck.isObject(data)) {
            resultIndex++;
            Object.entries(data).forEach(key => {
                if (key[0] !== 'Declaration') {
                    if (key[0] === '@innerText') {
                        props.innerText += `${key[1]}`;
                    } else if (key[0].startsWith('@')) {
                        props.attribute += ` ${key[0].substring(1)}="${key[1]}"`;
                    } else {
                        result += toXml(key[1], key[0], !!TypeCheck.isArray(key[1] as any));
                    }
                }
            });
            resultIndex--;
        } else if (TypeCheck.isArray(data)) {
            data.forEach((x: any, index: number) => {
                result += toXml(x, path);
            });
        } else {
            result += `${data}`;
        }
    } catch (er) {

    }
    const textOrValue = result ? result : props.innerText;
    return (path && !isArray) ? `${getTabs()}<${path}${props.attribute}${textOrValue ? `>${textOrValue}${textOrValue.trim().startsWith('<') ? getTabs() : ''}</${path}>` : '/>'}` : textOrValue;
}

const getName = (name: string) => {
    return name.replace(/\>|\<|\//img, '');
    // .split(':').map((split, index) => !index ? split : `${split[0].toUpperCase()}${split.substr(1)}`).join('');
}

const assignRule = () => {
    if (rule.type === XmlTypes.Element) {
        rule = { ...rule, value: getName(rule.value || ''), isClosed: rule.actualValue?.startsWith('</'), isSelfClosed: rule.actualValue?.endsWith('/>') };
    }
    allRules.push(rule);
}

const toJson = (code: string[]) => {
    let index = -1;
    for (const char of code) {
        index++;
        if (isSelfClosed && char !== SpecialChars.end) {
            isSelfClosed = false;
        }

        if (rule.type && rule.type !== XmlTypes.Unknown) {
            switch (char) {
                case SpecialChars.value1:
                case SpecialChars.value2:
                    if (rule.type !== XmlTypes.Value || (((isValue1 && char === SpecialChars.value2) || (!isValue1 && char === SpecialChars.value1)) && code[index - 1] !== '\\')) {
                        rule.actualValue += char;
                        rule.value += char;
                    } else {
                        isValue1 = false;
                        path.push({ type: rule.type, value: `${rule.value}`, actualValue: `${rule.actualValue}` });
                        assignRule();
                        path.pop();
                        path.pop();
                        isAttribute = false;
                        rule = {};
                    }
                    continue;
                case SpecialChars.attribute1:
                    if (rule.type !== XmlTypes.Element) {
                        rule.actualValue += char;
                        rule.value += char;
                        continue;
                    } else {
                        path.push({ type: rule.type, value: `${rule.value}`, actualValue: `${rule.actualValue}` });
                        assignRule();
                        isAttribute = true;
                        rule = {};
                        break;
                    }
                case SpecialChars.attribute2:
                    if (rule.type !== XmlTypes.Attribute) {
                        rule.actualValue += char;
                        rule.value += char;
                    } else {
                        path.push({ type: rule.type, value: `${rule.value}`, actualValue: `${rule.actualValue}` });
                        assignRule();
                        isAttribute = true;
                        rule = {};
                    }
                    continue;
                case SpecialChars.start:
                    if (rule.type !== XmlTypes.Element && rule.type !== XmlTypes.CDATA && rule.type !== XmlTypes.Declaration && rule.type !== XmlTypes.Comment && rule.type !== XmlTypes.Text) {
                        rule.actualValue += char;
                        rule.value += char;
                        continue;
                    } else {
                        path.push({ type: rule.type, value: `${rule.value}`, actualValue: `${rule.actualValue}` });
                        assignRule();
                        isElement = rule.type === XmlTypes.Element;
                        isCData = rule.type === XmlTypes.CDATA;
                        isDeclaration = rule.type === XmlTypes.Declaration;
                        isAttribute = false;

                        if (rule.type === XmlTypes.Text) {
                            rule = {};
                            break;
                        } else {
                            rule = {};
                            continue;
                        }
                    }
                case Chars.ElementEnd:
                    if (rule.type === XmlTypes.Attribute || rule.type === XmlTypes.Text || rule.type === XmlTypes.Value) {
                        rule.actualValue += char;
                        rule.value += char;
                    }
                    isSelfClosed = true;
                    continue;
                case SpecialChars.end:
                    rule.actualValue = `${rule.actualValue || ''}${isSelfClosed ? '/' : ''}${char}`;
                    rule.value = `${rule.value || ''}${isSelfClosed ? '/' : ''}${char}`;
                    if (rule.actualValue?.endsWith('/>')) {
                        rule.type = XmlTypes.Element;
                    } else if (rule.actualValue?.endsWith('-->')) {
                        rule.type = XmlTypes.Comment;
                    }
                    path.push({ type: rule.type, value: `${rule.value}`, actualValue: `${rule.actualValue}` });
                    assignRule();
                    if (isSelfClosed) {
                        path.pop();
                    }
                    if (isElement) {
                        isElement = false;
                        path.pop();
                    }
                    if (isAttribute) {
                        isAttribute = false;
                        path.pop();
                    }
                    if (rule.type === XmlTypes.Declaration) {
                        isDeclaration = false;
                        path.pop();
                    } else if (rule.type === XmlTypes.CDATA) {
                        isCData = false;
                        path.pop();
                    }
                    rule = {};
                    continue;
                default:
                    break;
            }
        } else if (char === SpecialChars.end) {
            rule.actualValue = `${rule.actualValue || ''}${isSelfClosed ? '/' : ''}${char}`;
            rule.value = `${rule.value || ''}${isSelfClosed ? '/' : ''}${char}`;
            if (rule.actualValue?.endsWith('/>')) {
                rule.type = XmlTypes.Element;
            } else if (rule.actualValue?.endsWith('-->')) {
                rule.type = XmlTypes.Comment;
            }
            if (isCData) {
                assignRule();
                isCData = false;
            }
            else if (isDeclaration) {
                assignRule();
                isDeclaration = false;
            } else {
                assignRule();
                isElement = false;
                isAttribute = false;
            }
            rule = {};
            path.pop();
            continue;
        }

        switch (rule.type) {
            case XmlTypes.Unknown:
                if (!rule.value) {
                    const actualLength = rule.actualValue?.length || 0;
                    if (actualLength <= 1 && `${rule.actualValue}${code.slice(index, 1 + index).join('')}` === Chars.DeclarationTag) {
                        rule.type = XmlTypes.Declaration;
                        rule.actualValue += char;
                        rule.value = rule.actualValue;
                        isDeclaration = true;
                        continue;
                    } else if (actualLength <= 4 && `${rule.actualValue}${code.slice(index, 4 + index).join('')}` === Chars.CommentStartTag) {
                        rule.type = XmlTypes.Comment;
                        rule.actualValue += char;
                        rule.value = rule.actualValue;
                        continue;
                    } else if (actualLength <= 9 && `${rule.actualValue}${code.slice(index, 9 + index).join('')}` === Chars.CDATAStart) {
                        rule.type = XmlTypes.CDATA;
                        rule.actualValue += char;
                        rule.value = rule.actualValue;
                        isCData = true;
                        continue;
                    } else {
                        rule.type = XmlTypes.Element;
                        isElement = true;
                    }
                    rule.value = rule.actualValue;
                }
                rule.value += char;
                rule.actualValue += char;
                break;
            case XmlTypes.Declaration:
            case XmlTypes.Element:
            case XmlTypes.Attribute:
            case XmlTypes.Text:
            case XmlTypes.Value:
                rule.value += char;
                rule.actualValue += char;
                break;
            default:
                const prevChar = char;
                if (!isAttribute && !isElement && prevChar === Chars.StartTag) {
                    rule = {
                        type: XmlTypes.Unknown,
                        value: '',
                        actualValue: `${char}`
                    };
                    isElement = false;
                    isCData = false;
                    isDeclaration = false;
                } else if (prevChar === SpecialChars.attribute1 && isElement) {
                    rule = {
                        type: XmlTypes.Attribute,
                        value: ``,
                        actualValue: ``
                    };
                } else if ((prevChar === SpecialChars.value1 || prevChar === SpecialChars.value2 || prevChar === SpecialChars.amp) && isElement && isAttribute) {
                    isValue1 = prevChar === SpecialChars.value1;
                    rule = {
                        type: XmlTypes.Value,
                        value: `${prevChar === SpecialChars.amp ? char : ''}`,
                        actualValue: `${prevChar === SpecialChars.amp ? char : ''}`
                    };
                } else if (prevChar === Chars.ElementEnd && isElement) {
                    isSelfClosed = true;
                } else if (prevChar !== SpecialChars.attribute1 && prevChar !== SpecialChars.line && prevChar !== SpecialChars.return) {
                    rule = {
                        type: XmlTypes.Text,
                        value: `${char}`,
                        actualValue: `${char}`
                    };
                }
                break;

        }
    }

    console.log(jsType.rule, allRules)
}

const assignToJson = (rules: XmlType[], rule: any, prevPath?: string) => {
    let isBreak = false;

    for (; resultIndex < rules.length; resultIndex++) {
        const currentRule = rules[resultIndex];
        if (currentRule.value) {
            switch (currentRule.type) {
                case XmlTypes.Element:
                case undefined:
                    if (currentRule.isClosed) {
                        isBreak = true;
                    } else if (!currentRule.type) {
                        continue;
                    } else if (currentRule.isSelfClosed) {
                        if (!rule[currentRule.value]) {
                            rule[currentRule.value] = {};
                        }
                    } else {
                        resultIndex++;
                        let ruleType;
                        if (!rule[currentRule.value]) {
                            rule[currentRule.value] = {};
                            ruleType = rule[currentRule.value];
                        } else if (TypeCheck.isObject(rule[currentRule.value])) {
                            const cloned = TypeCheck.clone(rule[currentRule.value]);
                            rule[currentRule.value] = [cloned];
                            rule[currentRule.value].push({});
                            ruleType = rule[currentRule.value][rule[currentRule.value].length - 1];
                        } else if (TypeCheck.isArray(rule[currentRule.value])) {
                            rule[currentRule.value].push({});
                            ruleType = rule[currentRule.value][rule[currentRule.value].length - 1];
                        }

                        const isText = rules[resultIndex].type === XmlTypes.Text || rules[resultIndex].type === XmlTypes.Value;
                        assignToJson(rules, isText ? rule : ruleType, isText ? currentRule.value : '');
                    }
                    break;
                case XmlTypes.Attribute:
                    resultIndex++;
                    assignToJson(rules, rule, `@${currentRule.value}`);
                    if (!rules[resultIndex]?.type || rules[resultIndex]?.isClosed || rules[resultIndex]?.isSelfClosed) {
                        isBreak = true;
                    }
                    break;
                case XmlTypes.Value:
                    if (prevPath) {
                        rule[prevPath] = currentRule.value;
                        prevPath = '';
                    }
                    break;
                case XmlTypes.Text:
                    if (prevPath) {
                        rule[prevPath] = currentRule.value;
                        prevPath = '';
                    } else {
                        rule['@innerText'] = currentRule.value;
                    }
                    break;
                case XmlTypes.Comment:
                    if (prevPath) {
                        if (!rule[prevPath]) {
                            rule[prevPath] = { comment: [] };
                        }
                        if (!rule[prevPath].comment) {
                            rule[prevPath].comment = [];
                        }
                        rule[prevPath].comment.push(currentRule.value);
                    }
                    break;
                case XmlTypes.Declaration:
                case XmlTypes.CDATA:
                    if (!rule[currentRule.type]) {
                        rule[currentRule.type] = [];
                    }
                    rule[currentRule.type].push(currentRule.value);
                    break;
                default:
                    break;
            }

            if (isBreak) {
                break;
            }
        } else if (currentRule.isSelfClosed) {
            break;
        }
    }
}

//#endregion

/**
 * For JSON to XML Conversion
 * @param data JSON Object
 * @param includeDefault If true returns with header <?xml version="1.0" encoding="UTF-8"?>, if false returns without header
 * @returns string
 */
export const JsontoXml = (props: { data: object, includeDefault: boolean }) => {
    resultIndex = -1;
    const xml = toXml(props.data);

    if (props.includeDefault) {
        return `<?xml version="1.0" encoding="UTF-8"?>\r\n${xml}`;
    }

    return xml;
}

/**
 * For XML to JSON Conversion
 * @param data Xml string
 * @param includeDefault If true return string with import/export, if false returns plain object
 * @returns string or object
 */
export const XmltoJson = (props: { data: string, includeDefault: boolean }) => {
    jsType.rule = {};
    toJson(props.data.split(''));
    resultIndex = 0;
    assignToJson(allRules, jsType.rule);
    if (props.includeDefault) {
        return `export const Json: any = ${JSON.stringify(jsType.rule)}`;
    }

    return jsType.rule;
}