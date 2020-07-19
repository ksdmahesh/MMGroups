$(document).ready(function () {

	const result = {
		start: '',
		end: '',
		oldValue: '',
		char: '',
		replacedChar: '',
		value: '',
		from: '',
		to: '',
		pasted: false,
		previousChar: ''
	};

	const regex = /^[\W|\w|\d|\D]{1}$/igm;

	const transliteration = {
		keyMapping: {
			'~a': { type: 'vowel', value: ['ऄ', ''] },
			'~A': { type: 'vowel', value: ['ॲ', ''] },
			'a': { type: 'vowel', value: ['अ', 'ऽ'] },
			'A': { type: 'vowel', value: ['आ', 'ा'] },
			'i': { type: 'vowel', value: ['इ', 'ि'] },
			'I': { type: 'vowel', value: ['ई', 'ी'] },
			'u': { type: 'vowel', value: ['उ', 'ु'] },
			'U': { type: 'vowel', value: ['ऊ', 'ू'] },
			'~r': { type: 'vowel', value: ['ऋ', 'ृ'] },
			'~R': { type: 'vowel', value: ['ॠ', 'ॄ'] },
			'~l': { type: 'vowel', value: ['ऌ', 'ॢ'] },
			'~L': { type: 'vowel', value: ['ॡ', 'ॣ'] },
			'e': { type: 'vowel', value: ['ऎ', 'ॆ'] },
			'E': { type: 'vowel', value: ['ए', 'े'] },
			'~e': { type: 'vowel', value: ['ऍ', 'ॅ'] },
			'~E': { type: 'vowel', value: ['एॕ', 'ॕ'] },
			'ai': { type: 'vowel', value: ['ऐ', 'ै'] },
			'o': { type: 'vowel', value: ['ऒ', 'ॊ'] },
			'O': { type: 'vowel', value: ['ओ', 'ो'] },
			'~O': { type: 'vowel', value: ['ऑ', 'ॉ'] },
			'au': { type: 'vowel', value: ['औ', 'ौ'] },
			'oe': { type: 'vowel', value: ['ॳ', 'ऺ'] },
			'Oe': { type: 'vowel', value: ['ॴ', 'ऻ'] },
			'aw': { type: 'vowel', value: ['ॵ', 'ॏ'] },
			'ay': { type: 'vowel', value: ['ꣾ', 'ꣿ'] },
			'ue': { type: 'vowel', value: ['ॶ', 'ॖ'] },
			'Ue': { type: 'vowel', value: ['ॷ', 'ॗ'] },

			'.m': { type: 'appender', value: ['ं'] },
			'.h': { type: 'appender', value: ['ः'] },
			'.n': { type: 'appender', value: ['ँ'] },
			'.N': { type: 'appender', value: ['ऀ'] },
			'.': { type: 'appender', value: ['्'] },
			'.': { type: 'appender', value: ['़'] },
			'\'': { type: 'appender', value: ['॑'] },
			'_': { type: 'appender', value: ['॒'] },
			'`': { type: 'appender', value: ['॓'] },
			'`': { type: 'appender', value: ['॔'] },
			'_': { type: 'appender', value: ['ॎ'] },
			'`': { type: 'appender', value: ['◌𑆼'] },
			'`': { type: 'appender', value: ['𑆳'] },

			'?': { type: 'breaker', value: ['ॽ'] },
			'"': { type: 'breaker', value: ['॰'] },
			'*': { type: 'breaker', value: ['ॱ'] },
			'|': { type: 'breaker', value: ['।'] },
			'||': { type: 'breaker', value: ['॥'] },

			'0': { type: 'number', value: ['०'] },
			'1': { type: 'number', value: ['१'] },
			'2': { type: 'number', value: ['२'] },
			'3': { type: 'number', value: ['३'] },
			'4': { type: 'number', value: ['४'] },
			'5': { type: 'number', value: ['५'] },
			'6': { type: 'number', value: ['६'] },
			'7': { type: 'number', value: ['७'] },
			'8': { type: 'number', value: ['८'] },
			'9': { type: 'number', value: ['९'] },

			'01': { type: 'vedic', value: ['᳐'] },
			'02': { type: 'vedic', value: ['᳑'] },
			'03': { type: 'vedic', value: ['᳒'] },
			'04': { type: 'vedic', value: ['᳓'] },
			'05': { type: 'vedic', value: ['᳔'] },
			'06': { type: 'vedic', value: ['᳕'] },
			'07': { type: 'vedic', value: ['᳖'] },
			'08': { type: 'vedic', value: ['᳗'] },
			'09': { type: 'vedic', value: ['᳘'] },
			'10': { type: 'vedic', value: ['᳙'] },
			'11': { type: 'vedic', value: ['᳚'] },
			'12': { type: 'vedic', value: ['᳛'] },
			'13': { type: 'vedic', value: ['᳜'] },
			'14': { type: 'vedic', value: ['᳝'] },
			'15': { type: 'vedic', value: ['᳞'] },
			'16': { type: 'vedic', value: ['᳟'] },
			'01': { type: 'vedic', value: ['᳠'] },
			'02': { type: 'vedic', value: ['᳡'] },
			'03': { type: 'vedic', value: ['᳢'] },
			'04': { type: 'vedic', value: ['᳣'] },
			'05': { type: 'vedic', value: ['᳤'] },
			'06': { type: 'vedic', value: ['᳥'] },
			'07': { type: 'vedic', value: ['᳦'] },
			'08': { type: 'vedic', value: ['᳧'] },
			'09': { type: 'vedic', value: ['᳨'] },
			'10': { type: 'vedic', value: ['ᳩ'] },
			'11': { type: 'vedic', value: ['ᳪ'] },
			'12': { type: 'vedic', value: ['ᳫ'] },
			'13': { type: 'vedic', value: ['ᳬ'] },
			'14': { type: 'vedic', value: ['᳭'] },
			'15': { type: 'vedic', value: ['ᳮ'] },
			'16': { type: 'vedic', value: ['ᳯ'] },
			'01': { type: 'vedic', value: ['ᳰ'] },
			'02': { type: 'vedic', value: ['ᳱ'] },
			'03': { type: 'vedic', value: ['ᳲ'] },
			'04': { type: 'vedic', value: ['ᳳ'] },
			'05': { type: 'vedic', value: ['᳴'] },
			'06': { type: 'vedic', value: ['ᳵ'] },
			'07': { type: 'vedic', value: ['ᳶ'] },
			'08': { type: 'vedic', value: ['᳷'] },
			'09': { type: 'vedic', value: ['᳸'] },
			'10': { type: 'vedic', value: ['᳹'] },
			'11': { type: 'vedic', value: ['ᳺ'] },

			'0': { type: 'extension', value: ['꣠'] },
			'1': { type: 'extension', value: ['꣡'] },
			'2': { type: 'extension', value: ['꣢'] },
			'3': { type: 'extension', value: ['꣣'] },
			'4': { type: 'extension', value: ['꣤'] },
			'5': { type: 'extension', value: ['꣥'] },
			'6': { type: 'extension', value: ['꣦'] },
			'7': { type: 'extension', value: ['꣧'] },
			'8': { type: 'extension', value: ['꣨'] },
			'9': { type: 'extension', value: ['꣩'] },
			'1': { type: 'extension', value: ['꣪'] },
			'2': { type: 'extension', value: ['꣫'] },
			'3': { type: 'extension', value: ['꣬'] },
			'4': { type: 'extension', value: ['꣭'] },
			'5': { type: 'extension', value: ['꣮'] },
			'6': { type: 'extension', value: ['꣯'] },
			'0': { type: 'extension', value: ['꣰'] },
			'1': { type: 'extension', value: ['꣱'] },
			'2': { type: 'extension', value: ['ꣲ'] },
			'3': { type: 'extension', value: ['ꣳ'] },
			'4': { type: 'extension', value: ['ꣴ'] },
			'5': { type: 'extension', value: ['ꣵ'] },
			'6': { type: 'extension', value: ['ꣶ'] },
			'7': { type: 'extension', value: ['ꣷ'] },
			'8': { type: 'extension', value: ['꣸'] },
			'9': { type: 'extension', value: ['꣹'] },
			'1': { type: 'extension', value: ['꣺'] },
			'2': { type: 'extension', value: ['ꣻ'] },
			'3': { type: 'extension', value: ['꣼'] },
			'om': { type: 'extension', value: ['ॐ'] },
			'om': { type: 'extension', value: ['ꣽ'] },

			'k': { type: 'consonant', value: ['क'] },
			',k': { type: 'consonant', value: ['क़'] },
			'kh': { type: 'consonant', value: ['ख'] },
			',kh': { type: 'consonant', value: ['ख़'] },
			'g': { type: 'consonant', value: ['ग'] },
			',g': { type: 'consonant', value: ['ग़'] },
			',G': { type: 'consonant', value: ['ॻ'] },
			'gh': { type: 'consonant', value: ['घ'] },
			'~n': { type: 'consonant', value: ['ङ'] },
			'c': { type: 'consonant', value: ['च'] },
			'ch': { type: 'consonant', value: ['छ'] },
			'j': { type: 'consonant', value: ['ज'] },
			',j': { type: 'consonant', value: ['ज़'] },
			',jh': { type: 'consonant', value: ['ॼ'] },
			',J': { type: 'consonant', value: ['ॹ'] },
			'jh': { type: 'consonant', value: ['झ'] },
			'~N': { type: 'consonant', value: ['ञ'] },
			't': { type: 'consonant', value: ['ट'] },
			'th': { type: 'consonant', value: ['ठ'] },
			'd': { type: 'consonant', value: ['ड'] },
			',d': { type: 'consonant', value: ['ड़'] },
			',Dh': { type: 'consonant', value: ['ॾ'] },
			',D': { type: 'consonant', value: ['ॸ'] },
			'dh': { type: 'consonant', value: ['ढ'] },
			',dh': { type: 'consonant', value: ['ढ़'] },
			'N': { type: 'consonant', value: ['ण'] },
			'T': { type: 'consonant', value: ['त'] },
			'Th': { type: 'consonant', value: ['थ'] },
			'D': { type: 'consonant', value: ['द'] },
			'Dh': { type: 'consonant', value: ['ध'] },
			'n': { type: 'consonant', value: ['न'] },
			',n': { type: 'consonant', value: ['ऩ'] },
			'p': { type: 'consonant', value: ['प'] },
			'ph': { type: 'consonant', value: ['फ'] },
			',p': { type: 'consonant', value: ['फ़'] },
			'b': { type: 'consonant', value: ['ब'] },
			',B': { type: 'consonant', value: ['ॿ'] },
			'bh': { type: 'consonant', value: ['भ'] },
			'm': { type: 'consonant', value: ['म'] },
			'y': { type: 'consonant', value: ['य'] },
			',y': { type: 'consonant', value: ['य़'] },
			',Y': { type: 'consonant', value: ['ॺ'] },
			'r': { type: 'consonant', value: ['र'] },
			'R': { type: 'consonant', value: ['ऱ'] },
			'l': { type: 'consonant', value: ['ल'] },
			'L': { type: 'consonant', value: ['ळ'] },
			',l': { type: 'consonant', value: ['ऴ'] },
			'v': { type: 'consonant', value: ['व'] },
			'S': { type: 'consonant', value: ['श'] },
			'sh': { type: 'consonant', value: ['ष'] },
			's': { type: 'consonant', value: ['स'] },
			'h': { type: 'consonant', value: ['ह'] }
		},
		consonants: [
			'k', 'kh', 'g', 'gh', '~n', 'c', 'ch', 'j', 'jh', '~N', 't', 'th', 'd', 'dh', 'N', 'T', 'Th', 'D', 'Dh', 'n', 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'R', 'l', 'L', 'v', 'S', 'sh', 's', 'h'
		],
		vowels: [
			'a', 'A', 'i', 'I', 'u', 'U', '~r', '~R', 'e', 'E', 'ai', 'o', 'O', 'au'
		],
		numbers: [
			'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
		],
		appender: [
			'\'m', '\'h', '\'n', '.'
		],
		all: [
			'k', 'kh', 'g', 'gh', '~n', 'c', 'ch', 'j', 'jh', '~N', 't', 'th', 'd', 'dh', 'N', 'T', 'Th', 'D', 'Dh', 'n', 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'R', 'l', 'L', 'v', 'S', 'sh', 's', 'h', 'a', 'A', 'i', 'I', 'u', 'U', '~r', '~R', 'e', 'E', 'ai', 'o', 'O', 'au', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '\'m', '\'h', '\'n', '.'
		]
	};

	const setValue = (lhsValue, rhsValue) => {
		let count = (result.to.length) - (lhsValue.length);
		result.to = result.to.substr(0, count) + lhsValue + rhsValue + result.to.substr(count + 1, result.to.length - 1);
	}

	const setToValue = () => {
		let previousChars = [].reverse();
		let from = [...result.from];

		result.to = '';

		for (let index = 0; index < from.length; index++) {
			const char = from[index];
			let lhs = '';
			let rhs = char;
			let type = '';

			for (let previousChar of previousChars) {
				if (!lhs && transliteration.all.find(a => a.startsWith(previousChar + rhs))) {
					rhs = previousChar + rhs;
					continue;
				}
				if (rhs) {
					type = transliteration.keyMapping[rhs]?.type;
					if (!type) {
						if (transliteration.all.find(a => a.startsWith(rhs))) {
							rhs += from[index + 1] || '';
							continue;
						} else {
							rhs = rhs.substr(0, rhs.length - 2);
							break;
						}
					}
					if (type === 'vowel') {
						lhs = previousChar + lhs;
						if (!transliteration.all.find(a => a.startsWith(lhs + char))) {
							break;
						}
						continue;
					}
					break;
				}
				break;
			}

			let lhsValue = '';
			let rhsValue = '';
			if (lhs) {
				lhsValue = (transliteration.keyMapping[lhs]?.value?.[0] || char);
				rhsValue = (transliteration.keyMapping[rhs]?.value?.[1] || '');
				setValue(lhsValue, rhsValue);
			} else if (rhs) {
				rhsValue = (transliteration.keyMapping[rhs]?.value?.[0] || char);
				setValue(lhsValue, rhsValue);
			}

			previousChars.splice(0, 0, char);
		}

		$('textarea:eq(1)').val(result.to);
	};

	$('textarea:eq(0)').on('input', function (e) {
		if (result.pasted) {
			result.pasted = false;
		} else {
			let start = e.target.value.lastIndexOf(' ', e.target.selectionStart - 1);
			let newLine = e.target.value.lastIndexOf('\n', e.target.selectionStart - 1);

			if (newLine > -1 && newLine > start) {
				start = newLine;
			}

			if (e.target.selectionStart) {
				result.previousChar = e.target.value.substr(start + 1, e.target.selectionStart - (start + 1) - 1);
			} else {
				result.previousChar = '';
			}
			result.char = e.target.value.substr(e.target.selectionStart - 1, e.target.selectionEnd - e.target.selectionStart + 1);
		}

		result.replacedChar = result.oldValue.substr(result.start, result.end - result.start);
		result.from = e.target.value;

		setToValue();

	});

	$('textarea:eq(0)').on('paste', function (e) {
		result.pasted = true;
		result.char = e.originalEvent.clipboardData.getData('text');

		let start = e.target.value.lastIndexOf(' ', e.target.selectionStart);
		let newLine = e.target.value.lastIndexOf('\n', e.target.selectionStart - 1);

		if (newLine > -1 && newLine > start) {
			start = newLine;
		}

		if (e.target.selectionStart) {
			result.previousChar = e.target.value.substr(start + 1, e.target.selectionStart - (start + 1));
		} else {
			result.previousChar = '';
		}
	});

	$('textarea:eq(0)').on('keydown', function (e) {
		result.start = e.target.selectionStart;
		result.end = e.target.selectionEnd;

		result.oldValue = e.target.value;
	});

});