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
			'a': { type: 'vowel', value: ['అ', ''] },
			'A': { type: 'vowel', value: ['ఆ', 'ా'] },
			'i': { type: 'vowel', value: ['ఇ', 'ి'] },
			'I': { type: 'vowel', value: ['ఈ', 'ీ'] },
			'u': { type: 'vowel', value: ['ఉ', 'ు'] },
			'U': { type: 'vowel', value: ['ఊ', 'ూ'] },
			'~r': { type: 'vowel', value: ['ఋ', 'ృ'] },
			'~R': { type: 'vowel', value: ['ౠ', 'ౄ'] },
			'e': { type: 'vowel', value: ['ఎ', 'ె'] },
			'E': { type: 'vowel', value: ['ఏ', 'ే'] },
			'ai': { type: 'vowel', value: ['ఐ', 'ై'] },
			'o': { type: 'vowel', value: ['ఒ', 'ొ'] },
			'O': { type: 'vowel', value: ['ఓ', 'ో'] },
			'au': { type: 'vowel', value: ['ఔ', 'ౌ'] },

			'\'m': { type: 'appender', value: ['ం'] },
			'\'h': { type: 'appender', value: ['ః'] },
			'\'n': { type: 'appender', value: ['ఁ'] },
			'.': { type: 'appender', value: ['్'] },

			'0': { type: 'number', value: ['౦'] },
			'1': { type: 'number', value: ['౧'] },
			'2': { type: 'number', value: ['౨'] },
			'3': { type: 'number', value: ['౩'] },
			'4': { type: 'number', value: ['౪'] },
			'5': { type: 'number', value: ['౫'] },
			'6': { type: 'number', value: ['౬'] },
			'7': { type: 'number', value: ['౭'] },
			'8': { type: 'number', value: ['౮'] },
			'9': { type: 'number', value: ['౯'] },

			'k': { type: 'consonant', value: ['క'] },
			'kh': { type: 'consonant', value: ['ఖ'] },
			'g': { type: 'consonant', value: ['గ'] },
			'gh': { type: 'consonant', value: ['ఘ'] },
			'~n': { type: 'consonant', value: ['ఙ'] },
			'c': { type: 'consonant', value: ['చ'] },
			'ch': { type: 'consonant', value: ['ఛ'] },
			'j': { type: 'consonant', value: ['జ'] },
			'jh': { type: 'consonant', value: ['ఝ'] },
			'~N': { type: 'consonant', value: ['ఞ'] },
			't': { type: 'consonant', value: ['ట'] },
			'th': { type: 'consonant', value: ['ఠ'] },
			'd': { type: 'consonant', value: ['డ'] },
			'dh': { type: 'consonant', value: ['ఢ'] },
			'N': { type: 'consonant', value: ['ణ'] },
			'T': { type: 'consonant', value: ['త'] },
			'Th': { type: 'consonant', value: ['థ'] },
			'D': { type: 'consonant', value: ['ద'] },
			'Dh': { type: 'consonant', value: ['ధ'] },
			'n': { type: 'consonant', value: ['న'] },
			'p': { type: 'consonant', value: ['ప'] },
			'ph': { type: 'consonant', value: ['ఫ'] },
			'b': { type: 'consonant', value: ['బ'] },
			'bh': { type: 'consonant', value: ['భ'] },
			'm': { type: 'consonant', value: ['మ'] },
			'y': { type: 'consonant', value: ['య'] },
			'r': { type: 'consonant', value: ['ర'] },
			'R': { type: 'consonant', value: ['ఱ'] },
			'l': { type: 'consonant', value: ['ల'] },
			'L': { type: 'consonant', value: ['ళ'] },
			'v': { type: 'consonant', value: ['వ'] },
			'S': { type: 'consonant', value: ['శ'] },
			'sh': { type: 'consonant', value: ['ష'] },
			's': { type: 'consonant', value: ['స'] },
			'h': { type: 'consonant', value: ['హ'] }
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