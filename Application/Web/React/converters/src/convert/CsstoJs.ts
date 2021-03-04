//#region Enums

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

export enum MediaForcedSystemColors {
	ActiveText = 'ActiveText',
	ButtonFace = 'ButtonFace',
	ButtonText = 'ButtonText',
	Canvas = 'Canvas',
	CanvasText = 'CanvasText',
	Field = 'Field',
	FieldText = 'FieldText',
	GrayText = 'GrayText',
	Highlight = 'Highlight',
	HighlightText = 'HighlightText',
	LinkText = 'LinkText',
	Mark = 'Mark',
	MarkText = 'MarkText',
	VisitedText = 'VisitedText'
}

export enum CssUnits {
	cap = 'cap',
	ch = 'ch',
	em = 'em',
	ex = 'ex',
	ic = 'ic',
	lh = 'lh',
	rem = 'rem',
	rlh = 'rlh',
	vh = 'vh',
	vw = 'vw',
	vi = 'vi',
	vb = 'vb',
	vmin = 'vmin',
	vmax = 'vmax',
	px = 'px',
	cm = 'cm',
	mm = 'mm',
	Q = 'Q',
	in = 'in',
	pc = 'pc',
	pt = 'pt',
	mozmm = 'mozmm',
	percent = '%'
}

export enum CssResolutions {
	dpi = 'dpi',
	dpcm = 'dpcm',
	dppx = 'dppx',
	x = 'x'
}

export enum MediaTypes {
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

export enum MediaOperators {
	not = 'not',
	and = 'and',
	only = 'only'
}

export enum MediaFeatures {
	/**
	 * @typedef MediaAnyHover
	 * @example (any-hover: hover)
	 */
	anyHover = 'any-hover',
	/**
	 * @typedef MediaAnyPointer
	 * @example (any-pointer: none)
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
	 * @typedef MediaColorGamut
	 * @example (color-gamut: srgb)
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
	/**
	 * @type Ratio
	 * @example (device-aspect-ratio: 1/1)
	 */
	deviceAspectRatio = 'device-aspect-ratio',
	/**
	 * @type Ratio
	 * @example (min-device-aspect-ratio: 1/1)
	 */
	minDeviceAspectRatio = 'min-device-aspect-ratio',
	/**
	 * @type Ratio
	 * @example (max-device-aspect-ratio: 1/1)
	 */
	maxDeviceAspectRatio = 'max-device-aspect-ratio',
	/**
	 * @typedef CssUnits
	 * @example (device-height: 1px)
	 * @example (device-height <= 1px)
	 */
	deviceHeight = 'device-height',
	/**
	 * @typedef CssUnits
	 * @example (min-device-height: 1px)
	 * @example (min-device-height <= 1px)
	 */
	minDeviceHeight = 'min-device-height',
	/**
	 * @typedef CssUnits
	 * @example (max-device-height: 1px)
	 * @example (max-device-height <= 1px)
	 */
	maxDeviceHeight = 'max-device-height',
	/**
	 * @typedef CssUnits
	 * @example (device-width: 1px)
	 * @example (device-width <= 1px)
	 */
	deviceWidth = 'device-width',
	/**
	 * @typedef CssUnits
	 * @example (min-device-width: 1px)
	 * @example (min-device-width <= 1px)
	 */
	minDeviceWidth = 'min-device-width',
	/**
	 * @typedef CssUnits
	 * @example (max-device-width: 1px)
	 * @example (max-device-width <= 1px)
	 */
	maxDeviceWidth = 'max-device-width',
	/**
	 * @typedef MediaDisplayMode
	 * @example (display-mode: fullscreen)
	 */
	displayMode = 'display-mode',
	/**
	 * @typedef MediaForcedColors
	 * @typedef MediaForcedSystemColors
	 * @example (forced-colors: active)
	 */
	forcedColors = 'forced-colors',
	/**
	 * @type Boolean
	 * @example (grid: 0)
	 * @example (grid: 1)
	 */
	grid = 'grid',
	/**
	 * @typedef CssUnits
	 * @example (height: 1px)
	 * @example (height <= 1px)
	 */
	height = 'height',
	/**
	 * @typedef CssUnits
	 * @example (min-height: 1px)
	 * @example (min-height <= 1px)
	 */
	minHeight = 'min-height',
	/**
	 * @typedef CssUnits
	 * @example (max-height: 1px)
	 * @example (max-height <= 1px)
	 */
	maxHeight = 'max-height',
	/**
	 * @typedef MediaAnyHover
	 * @example (hover: hover)
	 */
	hover = 'hover',
	/**
	 * @typedef MediaInvertedColors
	 * @example (inverted-colors: none)
	 */
	invertedColors = 'inverted-colors',
	/**
	 * @type Integer
	 * @example (monochrome: 1)
	 */
	monochrome = 'monochrome',
	/**
	 * @type Integer
	 * @example (min-monochrome: 1)
	 */
	minMonochrome = 'min-monochrome',
	/**
	 * @type Integer
	 * @example (max-monochrome: 1)
	 */
	maxMonochrome = 'max-monochrome',
	/**
	 * @typedef MediaOrientation
	 * @example (orientation: portrait)
	 */
	orientation = 'orientation',
	/**
	 * @typedef MediaOverflowBlock
	 * @example (overflow-block: none)
	 */
	overflowBlock = 'overflow-block',
	/**
	 * @typedef MediaOverflowInline
	 * @example (overflow-inline: none)
	 */
	overflowInline = 'overflow-inline',
	/**
	 * @typedef MediaAnyPointer
	 * @example (pointer: none)
	 */
	pointer = 'pointer',
	/**
	 * @typedef MediaPrefersColorScheme
	 * @example (prefers-color-scheme: light)
	 */
	prefersColorScheme = 'prefers-color-scheme',
	/**
	 * @typedef MediaPrefersContrast
	 * @example no-preference => (prefers-contrast)
	 * @example (prefers-contrast: high)
	 */
	prefersContrast = 'prefers-contrast',
	/**
	 * @typedef MediaPrefersReducedMotion
	 * @example no-preference => (prefers-reduced-motion)
	 * @example (prefers-reduced-motion: reduce)
	 */
	prefersReducedMotion = 'prefers-reduced-motion',
	/**
	 * @typedef MediaPrefersReducedMotion
	 * @example no-preference => (prefers-reduced-transparency)
	 * @example (prefers-reduced-transparency: reduce)
	 */
	prefersReducedTransparency = 'prefers-reduced-transparency',
	/**
	 * @typedef CssResolutions
	 * @example (resolution: 1dpi)
	 * @example (resolution <= 1dpi)
	 */
	resolution = 'resolution',
	/**
	 * @typedef CssResolutions
	 * @example (min-resolution: 1dpi)
	 * @example (min-resolution <= 1dpi)
	 */
	minResolution = 'min-resolution',
	/**
	 * @typedef CssResolutions
	 * @example (max-resolution: 1dpi)
	 * @example (max-resolution <= 1dpi)
	 */
	maxResolution = 'max-resolution',
	/**
	 * @typedef MediaScan
	 * @example (scan: progressive)
	 */
	scan = 'scan',
	/**
	 * @typedef MediaScripting
	 * @example (scripting: enabled)
	 */
	scripting = 'scripting',
	/**
	 * @typedef MediaUpdate
	 * @example (scripting: none)
	 */
	update = 'update',
	/**
	 * @typedef CssUnits
	 * @example (width: 1px)
	 * @example (width <= 1px)
	 */
	width = 'width',
	/**
	 * @typedef CssUnits
	 * @example (min-width: 1px)
	 * @example (min-width <= 1px)
	 */
	minWidth = 'min-width',
	/**
	 * @typedef CssUnits
	 * @example (max-width: 1px)
	 * @example (max-width <= 1px)
	 */
	maxWidth = 'max-width'
}

export enum MediaAnyHover {
	none = 'none',
	hover = 'hover'
}

export enum MediaAnyPointer {
	none = 'none',
	coarse = 'coarse',
	fine = 'fine'
}

export enum MediaColorGamut {
	srgb = 'srgb',
	p3 = 'p3',
	rec2020 = 'rec2020'
}

export enum MediaDisplayMode {
	fullscreen = 'fullscreen',
	standalone = 'standalone',
	minimalUi = 'minimal-ui',
	browser = 'browser',
	none = 'none'
}

export enum MediaForcedColors {
	none = 'none',
	active = 'active'
}

export enum MediaInvertedColors {
	none = 'none',
	inverted = 'inverted'
}

export enum MediaOrientation {
	portrait = 'portrait',
	landscape = 'landscape'
}

export enum MediaOverflowBlock {
	none = 'none',
	scroll = 'scroll',
	optionalPaged = 'optional-paged',
	paged = 'paged'
}

export enum MediaOverflowInline {
	none = 'none',
	scroll = 'scroll'
}

export enum MediaPrefersColorScheme {
	light = 'light',
	dark = 'dark'
}

export enum MediaPrefersContrast {
	noPreference = 'no-preference',
	more = 'more',
	high = 'high',
	less = 'less',
	low = 'low'
}

export enum MediaPrefersReducedMotion {
	noPreference = 'no-preference',
	reduce = 'reduce'
}

export enum MediaScan {
	interlace = 'interlace',
	progressive = 'progressive'
}

export enum MediaScripting {
	none = 'none',
	initialOnly = 'initial-only',
	enabled = 'enabled'
}

export enum MediaUpdate {
	none = 'none',
	slow = 'slow',
	fast = 'fast'
}

//#endregion

//#region Types

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

//#endregion

//#region Functions

const testRule: CssRule[] = [];
const path: { type: CssTypes, value: string, actualValue: string }[] = [];
const pattern = /-|\.|#|=|\]|\[|\)|\(|:|>|<|\s/igm;

let isSelector = false;
let isMedia = false;
let isProperty = false;
let rule: CssRule = {};
let jsRule: JsRule = {};
let convertionAttributes: ConvertionProps | undefined;

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
	path?.forEach((activePath, index) => {
		try {
			if (!index && activePath.type !== CssTypes.media) {
				if (!currentRule.default) {
					currentRule.default = {};
				}

				currentRule = currentRule.default;
			}

			if (activePath.type === CssTypes.value) {
				if (prevPath) {
					currentRule[prevPath.value] = !isNaN(+activePath.value) ? +activePath.value : `${activePath.value || ''}`;
				}
			} else {
				if (!currentRule[activePath.value]) {
					currentRule[activePath.value] = {};
				}

				prevPath = activePath;
				if (activePath.type !== CssTypes.property) {
					currentRule = currentRule[activePath.value];
				}
			}
		} catch (er) {

		}
	});

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
						path.push({ type: rule.type, value: `${rule.actualValue}`, actualValue: `${rule.actualValue}` });
						assignRule();
						path.pop();
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
				assignRule();
				path.pop();
				isMedia = false;
			} else {
				assignRule();
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
