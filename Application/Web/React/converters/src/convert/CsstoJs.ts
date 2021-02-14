//#region Properties

const SPACE = '    ';
const whitespc = ['\r\n', '\n\r', '\n', '\r'];
const specialChars = ["{", "}", ":", ";", ","];
// const specialCharsPB = ["{", "}", ";"];

//#endregion

//#region Types

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

type TokenType = {
	path: Array<string>,
	value: string
};

type IteratorProps = {
	tokens: Array<TokenType>,
	token: TokenType,
	lastChar: string,
	nextChar: string,
	char: string,
	sc?: Array<string>,
	inBrackets: boolean,
	currentPath: Array<string>
};

type ConvertionProps = {
	caseType?: 'camel' | 'pascal',
	keepComments?: boolean
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

const tokenizer = (code: string) => {
	debugger;
	let iteratorProps: IteratorProps = {
		tokens: [],
		token: { path: [], value: '' },
		lastChar: '\0',
		nextChar: '\0',
		char: '\0',
		sc: undefined,
		inBrackets: false,
		currentPath: []
	};

	for (let i = 0; i < code.length; i++) {
		if (i) {
			iteratorProps.lastChar = code.charAt(i - 1);
		}

		iteratorProps.char = code.charAt(i);

		if (i + 1 < code.length) {
			iteratorProps.nextChar = code.charAt(i + 1);
		}

		if (~whitespc.indexOf(iteratorProps.char) && ~whitespc.indexOf(iteratorProps.lastChar)) {
			continue;
		}

		iteratorProps.sc = specialChars;// iteratorProps.inBrackets ? specialChars : specialCharsPB;
		if (~iteratorProps.sc.indexOf(iteratorProps.char)) {
			iteratorProps.tokens.push(clone(iteratorProps.token));
			if (iteratorProps.char === "{") {
				iteratorProps.tokens.push({ value: iteratorProps.char, path: clone(iteratorProps.currentPath) });
				iteratorProps.currentPath.push(iteratorProps.token.value);
				iteratorProps.inBrackets = true;
			} else if (iteratorProps.char === "}") {
				iteratorProps.currentPath.pop();
				iteratorProps.tokens.push({ value: iteratorProps.char, path: clone(iteratorProps.currentPath) });
				iteratorProps.inBrackets = false;
			} else {
				iteratorProps.tokens.push({ value: iteratorProps.char, path: clone(iteratorProps.currentPath) });
			}
			iteratorProps.token = { value: '', path: clone(iteratorProps.currentPath) };
			continue;
		}

		iteratorProps.token.value += iteratorProps.char;
	}

	if (iteratorProps.token.value) {
		iteratorProps.tokens.push(clone(iteratorProps.token));
	}

	return iteratorProps.tokens.map(token => token.value.trim()).filter(token => token);
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
	return convertoToJS(tokenizer(css));
}

//#endregion
