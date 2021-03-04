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
};

type JsRule = {
	// default, media, keyframes
	[x: string]: {
		// selector
		[x: string]: {
			// React.CSSProperties
			[x: string]: string | number
		}
	}
};

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

enum MediaTypes {
	all = 'all',
	print = 'print',
	screen = 'screen',
	speech = 'speech',
	tty = 'tty',
	tv = 'tv',
	projection = 'projection',
	handheld = 'handheld',
	braille = 'braille',
	embossed = 'embossed',
	aural = 'aural'
}

enum MediaFeatures {
	/**
	 * @typedef MediaAnyHover
	 */
	anyHover = 'any-hover',
	/**
	 * @typedef MediaAnyPointer
	 */
	anyPointer = 'any-pointer',
	/**
	 * @type Ratio
	 * @example (aspect-ratio: 1/1)
	 */
	aspectRatio = 'aspect-ratio',
	/**
	 * @type Ratio
	 * @example (min-aspect-ratio: 1/1)
	 */
	minAspectRatio = 'min-aspect-ratio',
	/**
	 * @type Ratio
	 * @example (max-aspect-ratio: 1/1)
	 */
	maxAspectRatio = 'max-aspect-ratio',
	/**
	 * @type None
	 * @example (color)
	 */
	color = 'color',
	/**
	 * @type Integer
	 * @example (min-color: 8)
	 */
	minColor = 'min-color',
	/**
	 * @type Integer
	 * @example (max-color: 8)
	 */
	maxColor = 'max-color',
	/**
	 *@typedef MediaColorGamut
	 */
	colorGamut = 'color-gamut',
	/**
	 * @type None
	 * @example (color-index)
	 */
	colorIndex = 'color-index',
	/**
	 * @type Integer
	 * @example (min-color-index: 8)
	 */
	minColorIndex = 'min-color-index',
	/**
	 * @type Integer
	 * @example (max-color-index: 8)
	 */
	maxColorIndex = 'max-color-index',
	deviceAspectRatio = 'device-aspect-ratio',
	deviceHeight = 'device-height',
	deviceWidth = 'device-width',
	displayMode = 'display-mode',
	forcedColors = 'forced-colors',
	grid = 'grid',
	height = 'height',
	hover = 'hover',
	invertedColors = 'inverted-colors',
	monochrome = 'monochrome',
	orientation = 'orientation',
	overflowBlock = 'overflow-block',
	overflowInline = 'overflow-inline',
	pointer = 'pointer',
	prefersColorScheme = 'prefers-color-scheme',
	prefersContrast = 'prefers-contrast',
	prefersReducedMotion = 'prefers-reduced-motion',
	prefersReducedTransparency = 'prefers-reduced-transparency',
	resolution = 'resolution',
	scan = 'scan',
	scripting = 'scripting',
	update = 'update',
	width = 'width'
}

enum MediaAnyHover {
	none,
	hover
}

enum MediaAnyPointer {
	none,
	coarse,
	fine
}

enum MediaColorGamut {
	srgb,
	p3,
	rec2020
}

enum MediaOperators {
	not = 'not',
	and = 'and',
	only = 'only'
}

//#endregion

//#region 

const testRule: CssRule[] = [];
let isSelector = false;
let isMedia = false;
let isProperty = false;
let rule: CssRule = {};
const path: { type: CssTypes, value: string, actualValue: string }[] = [];
let jsRule: JsRule = {};
let convertionAttributes: ConvertionProps | undefined;
const pattern = /-|\.|#|=|\]|\[|\)|\(|:/igm;

const getPath = (value: string) => {
	switch (rule.type) {
		case CssTypes.selector:
			switch (convertionAttributes?.caseType) {
				case 'pascal':
					return value.split(',')[0].split(pattern).map(result => result.replace(/^\w/, c => c.toUpperCase())).join('');
				case 'camel':
					return value.split(',')[0].split(pattern).filter(a => a).map((result, index) => result.replace(/^\w/, c => index ? c.toUpperCase() : c)).join('');
				default:
					break;
			}
			return value.split(',')[0].split(pattern).join('');
		case CssTypes.media:
			return value;
		case CssTypes.property:
			return value.split(',')[0].split(pattern).filter(a => a).map((result, index) => result.replace(/^\w/, c => index ? c.toUpperCase() : c)).join('');
		default:
			break;
	}

	return value;
}

const assignRule = () => {
	let currentRule: any = jsRule;
	let prevPath: { type: CssTypes, value: string } | undefined = undefined;
	if ((path?.[0]?.type === CssTypes.comment && (convertionAttributes?.keepComments || convertionAttributes?.keepComments === undefined)) || path?.[0]?.type !== CssTypes.comment) {
		path?.forEach((activePath, index) => {
			try {
				if (!index) {
					if (activePath.type === CssTypes.media) {

					} else {
						if (!currentRule.default) {
							currentRule.default = {};
						}

						prevPath = activePath;
						currentRule = currentRule.default;
					}
				} else {
					if (activePath.type === CssTypes.value) {
						if (prevPath) {
							currentRule[prevPath.value] = `${(convertionAttributes?.includeCssKeys || convertionAttributes?.includeCssKeys === undefined) ? `${activePath.actualValue || ''}\r\n` : ''}${activePath.value || ''}`;
						}
					} else {
						if (!currentRule[activePath.value]) {
							currentRule[activePath.value] = {};
						}

						prevPath = activePath;
						currentRule = currentRule[activePath.value];
					}
				}
			} catch (er) {

			}
		});
	}

	testRule.push(rule);
}

const convertToJS = (code: string[]) => {
	for (const char of code) {
		if (rule.type) {
			switch (char) {
				case SpecialChars.Value:
					if (rule.type !== CssTypes.value) {
						rule.actualValue += char;
						rule.value += char;
					} else {
						path.push({ type: rule.type, value: `${rule.actualValue}`, actualValue: `${rule.actualValue}` });
						assignRule();
						path.pop();
						path.pop();
						isProperty = false;
						rule = {};
					}
					continue;
				case SpecialChars.Property:
					if (rule.type !== CssTypes.property) {
						rule.actualValue += char;
						rule.value += char;
					} else {
						path.push({ type: rule.type, value: getPath(`${rule.actualValue}`), actualValue: `${rule.actualValue}` });
						assignRule();
						isProperty = rule.type === CssTypes.property;
						rule = {};
					}
					continue;
				case SpecialChars.SelectorOrMediaClose:
					if (rule.subType === CssSubTypes.keyFrames) {
						rule.actualValue += char;
						rule.value += char;
						const startLength = rule.actualValue?.split('{').length;
						const endLength = rule.actualValue?.split('}').length;
						if (startLength === endLength) {
							assignRule();
							if (isSelector) {
								isSelector = false;
								path.pop();
							}
							if (isProperty) {
								isProperty = false;
								path.pop();
							}
							if (rule.type === CssTypes.media) {
								isMedia = false;
								path.pop();
							}
							rule = {};
						}
					} else {
						assignRule();
						if (isSelector) {
							isSelector = false;
							path.pop();
						}
						if (isProperty) {
							isProperty = false;
							path.pop();
						}
						if (rule.type === CssTypes.media) {
							isMedia = false;
							path.pop();
						}
						rule = {};
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
							path.push({ type: rule.type, value: getPath(`${rule.actualValue}`), actualValue: `${rule.actualValue}` });
							assignRule();
							isSelector = rule.type === CssTypes.selector;
							isMedia = rule.type === CssTypes.media;
							isProperty = false;
							rule = {};
						}
					}
					continue;
				case SpecialChars.SingleComment1:
				case SpecialChars.SingleComment2:
					rule.actualValue += char;
					rule.value += char;
					if (rule.type === CssTypes.comment && rule.subType === CssSubTypes.singleLineComment) {
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
							rule = {};
						}
					}
					continue;
				default:
					break;
			}
		} else if (char === SpecialChars.SelectorOrMediaClose) {
			if (isMedia) {
				path.pop();
				isMedia = false;
			} else {
				path.pop();
				isSelector = false;
				isProperty = false;
			}

			continue;
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
				if (!isProperty && !isSelector) {
					switch (char) {
						case Chars.Class:
							rule = {
								type: CssTypes.selector,
								subType: CssSubTypes.class,
								value: '',
								actualValue: `${char}`
							};
							break;
						case Chars.Id:
							rule = {
								type: CssTypes.selector,
								subType: CssSubTypes.id,
								value: '',
								actualValue: `${char}`
							};
							break;
						case Chars.Comment:
							rule = {
								type: CssTypes.comment,
								subType: undefined,
								value: ``,
								actualValue: `${char}`
							};
							break;
						case Chars.Media:
							rule = {
								type: CssTypes.media,
								subType: undefined,
								value: '',
								actualValue: `${char}`
							};
							break;
						default:
							if (char !== ' ' && char !== SpecialChars.SingleComment1 && char !== SpecialChars.SingleComment2) {
								rule = {
									type: CssTypes.selector,
									subType: CssSubTypes.element,
									value: `${char}`,
									actualValue: `${char}`
								};
							}
							break;
					}
					break;
				} else if (char !== ' ' && char !== SpecialChars.SingleComment1 && char !== SpecialChars.SingleComment2) {
					if (isProperty) {
						rule = {
							type: CssTypes.value,
							subType: undefined,
							value: `${char}`,
							actualValue: `${char}`
						};
					} else if (isSelector) {
						rule = {
							type: CssTypes.property,
							subType: undefined,
							value: `${char}`,
							actualValue: `${char}`
						};
					}
				}
		}
	}

	console.log(jsRule)
}

//#endregion

//#region Public Functions

export const CsstoJs = (css: string, convertionProps?: ConvertionProps) => {
	convertionAttributes = convertionProps;
	jsRule = {};
	convertToJS(css.split(''));
	return `export const resultJson: { [x: string]: { [x: string]: React.CSSProperties } } = ${JSON.stringify(jsRule)}`;
}

//#endregion
