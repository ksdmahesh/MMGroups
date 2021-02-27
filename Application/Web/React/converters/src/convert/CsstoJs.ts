//#region Properties

const SPACE = '    ';
// const whitespc = ['\r\n', '\n\r', '\n', '\r'];
// const specialChars = ["{", "}", ":", ";", ","];
// const specialCharsPB = ["{", "}", ";"];

//#endregion

//#region Types

enum Chars {
	Comment = '/',
	Class = '.',
	Id = '#',
	Media = '@',
	Name = '',
	Value = ':'
}

enum SpecialChars {
	Value = ';',
	Property = ':',
	SingleComment1 = '\r',
	SingleComment2 = '\n',
	MultiComment = '/',
	SelectorOrMediaOpen = '{',
	SelectorOrMediaClose = '}'
}

enum CssTypes {
	comment = 'comment', // /** */, //
	media = 'media-query', // @media
	selector = 'selector', // .css, #css, css, css[type=""]
	property = 'property', // margin, padding
	value = 'value' // 0, 0px 0px
}

enum CssSubTypes {
	keyFrames = 'KeyFrames',
	class = 'class', // .css
	id = 'id', // #css
	element = 'element', // css
	nested = 'nested', // css[type=""]
	singleLineComment = 'singleLineComment', // //
	multiLineComment = 'multiLineComment' // /** */
}

type CssRule = {
	type?: CssTypes,
	subType?: CssSubTypes,
	actualValue?: string,
	value?: string
}

type Item = {
	originalValue: string,
	selectors: Array<string>,
	values: { [x: string]: Array<string> }
};

type ActionProps = {
	actualItem?: Item,
	actualProp?: string,
	items: Array<Item>
};

// type TokenType = {
// 	path: Array<string>,
// 	value: string
// };

// type IteratorProps = {
// 	tokens: Array<TokenType>,
// 	token: TokenType,
// 	lastChar: string,
// 	nextChar: string,
// 	char: string,
// 	sc?: Array<string>,
// 	inBrackets: boolean,
// 	currentPath: Array<string>
// };

type ConvertionProps = {
	/**
	 * @type default: as defined in css
	 * @type camel: property names as camel case
	 * @type pascal: property names as pascal case
	 */
	caseType?: 'camel' | 'pascal',
	/**
	 * @type default: true
	 * @type true: includes css property names as on top of object
	 * @type false: not includes css property names as on top of object
	 */
	includeCssKeys?: boolean,
	/**
	 * @type default: true
	 * @type true: includes css comments
	 * @type false: excludes css comments
	 */
	keepComments?: boolean,
	/**
	 * @type default: true
	 * @type true: includes css commented lines as object
	 * @type false: leave as it is css commented lines
	 */
	includeComments?: boolean,
	/**
	 * @type default: true
	 * @type true: convert as material theme object
	 * @type false: convert as plain object
	 */
	useMaterialThemeStructure?: boolean
};

//#endregion

//#region Private Functions

const clone = (data: object) => JSON.parse(JSON.stringify(data));

const toProperty = (name: string) => {
	if (name.charAt(0) === "-") name = name.slice(0);

	return name.replace(/[^a-z0-9]([a-z0-9])?/gi, (_, l) => l ? l.toUpperCase() : '');
}

const toSelectors = (name: string) => {
	return name.split(",").map(nameMap);
}

const nameMap = (currentName: string) => {
	currentName = currentName.trim();
	let newName = "";

	if (currentName.charAt(0) === ".") {
		newName += "Class";
		currentName = currentName.slice(1);
	} else if (currentName.charAt(0) === "#") {
		newName += "Id";
		currentName = currentName.slice(1);
	} else {
		newName += "Element";
	}

	return `${currentName.replace(/([^a-z0-9])([a-z0-9])?/gi, (_, c, l) => (l ? ((c === "," || c === " ") ? l.toLowerCase() : l.toUpperCase()) : ''))}${newName}`;
}

const tokenizer = (code: string[]) => {
	const rules: CssRule[] = [];
	let rule: CssRule = clone(rules[0] || {});
	let prevRule: CssRule = {};
	let isSelectorOpened = false;
	let isSelectorClosed = false;
	let isPropertyClosed = false;

	for (const char of code) {
		if (rule.type) {
			switch (char) {
				case SpecialChars.Value:
					if (rule.type !== CssTypes.value) {
						rule.actualValue += char;
						rule.value += char;
					} else {
						rules.push(rule);
						prevRule = clone(rule);
						rule = {};
					}
					continue;
				case SpecialChars.Property:
					if (rule.type !== CssTypes.property) {
						rule.actualValue += char;
						rule.value += char;
					} else {
						rules.push(rule);
						prevRule = clone(rule);
						rule = {};
						isPropertyClosed = true;
					}
					continue;
				case SpecialChars.SelectorOrMediaClose:
					if (rule.subType === CssSubTypes.keyFrames) {
						rule.actualValue += char;
						rule.value += char;
						const startLength = rule.actualValue?.split('{').length;
						const endLength = rule.actualValue?.split('}').length;
						if (startLength === endLength) {
							rules.push(rule);
							prevRule = clone(rule);
							rule = {};
						}
					} else {
						rules.push(rule);
						prevRule = clone(rule);
						rule = {};
						isSelectorClosed = true;
					}
					continue;
				case SpecialChars.SelectorOrMediaOpen:
					if (rule.type !== CssTypes.media && rule.type !== CssTypes.selector) {
						rule.actualValue += char;
						rule.value += char;
					} else {
						if (rule.subType === CssSubTypes.keyFrames) {
							rule.actualValue += char;
							rule.value += char;
						} else {
							rules.push(rule);
							prevRule = clone(rule);
							rule = {};
							isSelectorOpened = rule.type === CssTypes.selector;
						}
					}
					continue;
				case SpecialChars.SingleComment1:
				case SpecialChars.SingleComment1:
					rule.actualValue += char;
					rule.value += char;
					if (rule.type === CssTypes.comment && rule.subType === CssSubTypes.singleLineComment) {
						rules.push(rule);
						prevRule = clone(rule);
						rule = {};
					}
					continue;
				case SpecialChars.MultiComment:
					rule.actualValue += char;
					rule.value += char;
					if (rule.type === CssTypes.comment && rule.subType === CssSubTypes.multiLineComment) {
						const startLength = rule.actualValue?.split('/*').length;
						const endLength = rule.actualValue?.split('*/').length;
						if (startLength === endLength) {
							rules.push(rule);
							prevRule = clone(rule);
							rule = {};
						}
					}
					continue;
				default:
					break;
			}
		} else {
			if (char === SpecialChars.SelectorOrMediaClose) {
				isSelectorClosed = true;
				continue;
			}
		}

		switch (rule.type) {
			case CssTypes.comment:
				if (!rule.value) {
					if (char === '/') {
						rule.subType = CssSubTypes.singleLineComment;
					} else {
						rule.subType = CssSubTypes.multiLineComment;
					}
					rule.value = rule.actualValue;
				}
				rule.value += char;
				rule.actualValue += char;
				break;
			case CssTypes.media:
				if (!rule.value) {
					if (char === '-' || char === 'k') {
						rule.value = rule.actualValue;
						rule.subType = CssSubTypes.keyFrames;
					}
				}
				rule.value += char;
				rule.actualValue += char;
				break;
			case CssTypes.selector:
				rule.value += char;
				rule.actualValue += char;
				break;
			case CssTypes.property:
				rule.value += char;
				rule.actualValue += char;
				break;
			case CssTypes.value:
				rule.value += char;
				rule.actualValue += char;
				break;
			default:
				if (prevRule.type !== CssTypes.property) {
					switch (char) {
						case Chars.Class:
							rule = {
								type: CssTypes.selector,
								subType: CssSubTypes.class,
								value: '',
								actualValue: `${char}`
							}
							break;
						case Chars.Id:
							rule = {
								type: CssTypes.selector,
								subType: CssSubTypes.id,
								value: '',
								actualValue: `${char}`
							}
							break;
						case Chars.Comment:
							rule = {
								type: CssTypes.comment,
								subType: undefined,
								value: ``,
								actualValue: `${char}`
							}
							break;
						case Chars.Media:
							rule = {
								type: CssTypes.media,
								subType: undefined,
								value: '',
								actualValue: `${char}`
							}
							break;
						default:
							// '\s,-,[,\\,|,*,:'
							if (char !== ' ' && char != SpecialChars.SingleComment1 && char != SpecialChars.SingleComment2) {
								if (prevRule.type === CssTypes.selector || isSelectorOpened) {
									isSelectorOpened = false;
									rule = {
										type: CssTypes.property,
										subType: undefined,
										value: `${char}`,
										actualValue: `${char}`
									}
								} else {
									rule = {
										type: CssTypes.selector,
										subType: CssSubTypes.element,
										value: `${char}`,
										actualValue: `${char}`
									}
								}
							}
							break;
					}
				} else {
					if (prevRule.type === CssTypes.property && isPropertyClosed) {
						isPropertyClosed = false;
						rule = {
							type: CssTypes.value,
							subType: undefined,
							value: `${char}`,
							actualValue: `${char}`
						}
					}
				}
				break;
		}
	}

	console.log(rules);

	return [''];// iteratorProps.tokens.map(token => token.value.trim()).filter(token => token);
}

// const repeat = (char: string, times: number): string => times ? `${repeat(char, times - 1)}${char}` : ''

const convertoToJS = (tokens: Array<string>) => {
	const items: Array<Item> = [];

	let nextAction = readSelector;
	tokens.forEach(token => {
		nextAction = nextAction(token, { actualItem: undefined, actualProp: undefined, items });
	});

	return renderJS(items);
}

const readSelector = (token: string, props: ActionProps) => {
	const selectors = toSelectors(token);

	props.actualItem = {
		originalValue: token,
		selectors,
		values: {}
	};

	props.actualProp = undefined;
	props.items.push(props.actualItem);

	return readBracketO;
}

const readBracketO = (token: string, _: ActionProps) => {
	if (token !== "{") {
		throw new Error("Era esperado um '{' ");
	}

	return readProperty;
}

const readProperty = (token: string, props: ActionProps) => {
	if (token === "}") {
		return readBracketC(token, props);
	}

	const property = toProperty(token);
	props.actualProp = property;

	if (props.actualItem && !props.actualItem.values?.[property]) {
		props.actualItem.values[property] = [];
	}

	return readDefinition;
}

const readDefinition = (token: string, _: ActionProps) => {
	if (token !== ":") {
		throw new Error("Era esperado um ':' ");
	}

	return readValue;
}

const readValue = (token: string, props: ActionProps) => {
	if (props.actualItem) {
		props.actualItem.values[props.actualProp || ''].push(token);
	}

	return readFinal;
}

const readFinal = (token: string, props: ActionProps) => {
	if (token === "}") {
		return readBracketC(token, props);
	}

	if (token !== ";") {
		throw new Error("Era esperado um ';' ");
	}

	return readProperty;
}

const readBracketC = (token: string, _: ActionProps) => {
	if (token !== "}") {
		throw new Error("Era esperado um '}' ");
	}

	return readSelector;
}

const renderJS = (items: Array<Item>) => `const styles = {\n${items.map(renderItem).join(",")}\n}`

const renderItem = (item: Item) => {
	const code = ["\n//" + item.originalValue];

	let properties: Array<string> = [];

	for (const prop in item.values) {
		const propitem = {
			name: prop,
			value: item.values[prop][item.values[prop].length - 1]
		};

		let markup = '"';
		if (~propitem.value.indexOf('"')) {
			markup = "'";
			propitem.value = propitem.value.replace(/'/gi, "\\'");
		}

		properties.push(SPACE + SPACE + propitem.name + ": " + markup + propitem.value + markup);
	}

	properties = properties.map(x => `${SPACE}${x}`);

	item.selectors.forEach(i => {
		code.push(`${SPACE}${i}: {`);
		code.push(properties.join(",\n"));
		code.push(`${SPACE}}`);
	});

	return code.join("\n");
}

//#endregion

//#region Public Functions

export const CsstoJs = (css: string, convertionProps?: ConvertionProps) => {
	return `export const resultJson: { [x: string]: { [x: string]: React.CSSProperties } } = ${convertoToJS(tokenizer(css.split('')))}`;
}

//#endregion
