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

	const setTr = (key, value) => {
		return (
			`
				<tr style="display: flex;flex-direction: row;border-top: 1px solid;" >
					<td style='width: 50%;display: flex;flex-direction: column;justify-content: center;align-items: flex-end;' >
						<input type='text' value='${key}' style="width: 100%;text-align: right;padding: 10px;margin: 10px;" />
					</td>
					<td style='width: 50%;display: flex;flex-direction: column;justify-content: center;align-items: flex-start;'>
						${value.value.map(val => (
				"<input type='text' value='" + val + "' style='width: 100%;text-align: right;padding: 10px;margin: 10px;' />"
			)).join('')}
					</td>
				</tr>
			`
		);
	}

	const regex = /^[\W|\w|\d|\D]{1}$/igm;

	const transliteration = {
		keyMapping: {
			'~a': { type: 'vowel', value: ['ऄ', ''] },
			'`a': { type: 'vowel', value: ['ॲ', ''] },
			'a': { type: 'vowel', value: ['अ', ''] },
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
			'`e': { type: 'vowel', value: ['ऍ', 'ॅ'] },
			'`E': { type: 'vowel', value: ['एॕ', 'ॕ'] },
			'ai': { type: 'vowel', value: ['ऐ', 'ै'] },
			'ay': { type: 'vowel', value: ['ꣾ', 'ꣿ'] },
			'o': { type: 'vowel', value: ['ऒ', 'ॊ'] },
			'O': { type: 'vowel', value: ['ओ', 'ो'] },
			'`O': { type: 'vowel', value: ['ऑ', 'ॉ'] },
			'au': { type: 'vowel', value: ['औ', 'ौ'] },
			'aw': { type: 'vowel', value: ['ॵ', 'ॏ'] },
			'oe': { type: 'vowel', value: ['ॳ', 'ऺ'] },
			'Oe': { type: 'vowel', value: ['ॴ', 'ऻ'] },
			'ue': { type: 'vowel', value: ['ॶ', 'ॖ'] },
			'Ue': { type: 'vowel', value: ['ॷ', 'ॗ'] },

			'\\': { type: 'appender', value: ['्'] },
			'.m': { type: 'appender', value: ['ं'] },
			'.h': { type: 'appender', value: ['ः'] },
			'.n': { type: 'appender', value: ['ँ'] },
			'.N': { type: 'appender', value: ['ऀ'] },
			',': { type: 'appender', value: ['़'] },
			'\'': { type: 'appender', value: ['॑'] },
			'_': { type: 'appender', value: ['॒'] },
			'(': { type: 'appender', value: ['॓'] },
			')': { type: 'appender', value: ['॔'] },
			'[': { type: 'appender', value: ['ॎ'] },
			'=': { type: 'appender', value: ['◌𑆼'] },
			']': { type: 'appender', value: ['𑆳'] },

			'?': { type: 'breaker', value: ['ॽ'] },
			'~A': { type: 'breaker', value: ['ऽ'] },
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

			'~^': { type: 'vedic', value: ['᳐'] },
			'~`^': { type: 'vedic', value: ['᳑'] },
			'~-': { type: 'vedic', value: ['᳒'] },
			'~~"': { type: 'vedic', value: ['᳓'] },
			'~+': { type: 'vedic', value: ['᳔'] },
			'~w': { type: 'vedic', value: ['᳕'] },
			'~_': { type: 'vedic', value: ['᳖'] },
			'~-': { type: 'vedic', value: ['᳗'] },
			'~u': { type: 'vedic', value: ['᳘'] },
			'~~^': { type: 'vedic', value: ['᳙'] },
			'~"': { type: 'vedic', value: ['᳚'] },
			'~`"': { type: 'vedic', value: ['᳛'] },
			'~,': { type: 'vedic', value: ['᳜'] },
			'~.': { type: 'vedic', value: ['᳝'] },
			'~..': { type: 'vedic', value: ['᳞'] },
			'~...': { type: 'vedic', value: ['᳟'] },
			'~--': { type: 'vedic', value: ['᳠'] },
			'~$': { type: 'vedic', value: ['᳡'] },
			'~:': { type: 'vedic', value: ['᳢'] },
			'~c': { type: 'vedic', value: ['᳣'] },
			'~C': { type: 'vedic', value: ['᳤'] },
			'~`c': { type: 'vedic', value: ['᳥'] },
			'~`C': { type: 'vedic', value: ['᳦'] },
			'~\'c': { type: 'vedic', value: ['᳧'] },
			'~_c': { type: 'vedic', value: ['᳨'] },
			'~@': { type: 'vedic', value: ['ᳩ'] },
			'~`@': { type: 'vedic', value: ['ᳪ'] },
			'~#': { type: 'vedic', value: ['ᳫ'] },
			'~#-': { type: 'vedic', value: ['ᳬ'] },
			'~~': { type: 'vedic', value: ['᳭'] },
			'~*': { type: 'vedic', value: ['ᳮ'] },
			'~*-': { type: 'vedic', value: ['ᳯ'] },
			'~8': { type: 'vedic', value: ['ᳰ'] },
			'~s': { type: 'vedic', value: ['ᳱ'] },
			'~x': { type: 'vedic', value: ['ᳲ'] },
			'~~x': { type: 'vedic', value: ['ᳳ'] },
			'~~u': { type: 'vedic', value: ['᳴'] },
			'~X': { type: 'vedic', value: ['ᳵ'] },
			'~~w': { type: 'vedic', value: ['ᳶ'] },
			'~|': { type: 'vedic', value: ['᳷'] },
			'~\'': { type: 'vedic', value: ['᳸'] },
			'~\'\'': { type: 'vedic', value: ['᳹'] },
			'~@@': { type: 'vedic', value: ['ᳺ'] },

			'^0': { type: 'extension', value: ['꣠'] },
			'^1': { type: 'extension', value: ['꣡'] },
			'^2': { type: 'extension', value: ['꣢'] },
			'^3': { type: 'extension', value: ['꣣'] },
			'^4': { type: 'extension', value: ['꣤'] },
			'^5': { type: 'extension', value: ['꣥'] },
			'^6': { type: 'extension', value: ['꣦'] },
			'^7': { type: 'extension', value: ['꣧'] },
			'^8': { type: 'extension', value: ['꣨'] },
			'^9': { type: 'extension', value: ['꣩'] },
			'^a': { type: 'extension', value: ['꣪'] },
			'^u': { type: 'extension', value: ['꣫'] },
			'^ka': { type: 'extension', value: ['꣬'] },
			'^na': { type: 'extension', value: ['꣭'] },
			'^pa': { type: 'extension', value: ['꣮'] },
			'^ra': { type: 'extension', value: ['꣯'] },
			'^vi': { type: 'extension', value: ['꣰'] },
			'^A': { type: 'extension', value: ['꣱'] },
			'^n': { type: 'extension', value: ['ꣲ'] },
			'^n0': { type: 'extension', value: ['ꣳ'] },
			'^n1': { type: 'extension', value: ['ꣴ'] },
			'^n2': { type: 'extension', value: ['ꣵ'] },
			'^n3': { type: 'extension', value: ['ꣶ'] },
			'^nA': { type: 'extension', value: ['ꣷ'] },
			'^E': { type: 'extension', value: ['꣸'] },
			'^e': { type: 'extension', value: ['꣹'] },
			'^^': { type: 'extension', value: ['꣺'] },
			'^-': { type: 'extension', value: ['ꣻ'] },
			'^.': { type: 'extension', value: ['꣼'] },
			'{om}': { type: 'extension', value: ['ॐ'] },
			'{OM}': { type: 'extension', value: ['ꣽ'] },

			'k': { type: 'consonant', value: ['क'] },
			',k': { type: 'consonant', value: ['क़'] },
			'kh': { type: 'consonant', value: ['ख'] },
			',kh': { type: 'consonant', value: ['ख़'] },
			'g': { type: 'consonant', value: ['ग'] },
			',g': { type: 'consonant', value: ['ग़'] },
			'_g': { type: 'consonant', value: ['ॻ'] },
			'gh': { type: 'consonant', value: ['घ'] },
			'~n': { type: 'consonant', value: ['ङ'] },
			'c': { type: 'consonant', value: ['च'] },
			'ch': { type: 'consonant', value: ['छ'] },
			'j': { type: 'consonant', value: ['ज'] },
			',j': { type: 'consonant', value: ['ज़'] },
			'_j': { type: 'consonant', value: ['ॼ'] },
			',J': { type: 'consonant', value: ['ॹ'] },
			'jh': { type: 'consonant', value: ['झ'] },
			'~N': { type: 'consonant', value: ['ञ'] },
			't': { type: 'consonant', value: ['ट'] },
			'th': { type: 'consonant', value: ['ठ'] },
			'd': { type: 'consonant', value: ['ड'] },
			',d': { type: 'consonant', value: ['ड़'] },
			'_d': { type: 'consonant', value: ['ॾ'] },
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
			'_B': { type: 'consonant', value: ['ॿ'] },
			'bh': { type: 'consonant', value: ['भ'] },
			'm': { type: 'consonant', value: ['म'] },
			'y': { type: 'consonant', value: ['य'] },
			',y': { type: 'consonant', value: ['य़'] },
			'Y': { type: 'consonant', value: ['ॺ'] },
			'r': { type: 'consonant', value: ['र'] },
			'R': { type: 'consonant', value: ['ऱ'] },
			'l': { type: 'consonant', value: ['ल'] },
			'L': { type: 'consonant', value: ['ळ'] },
			',L': { type: 'consonant', value: ['ऴ'] },
			'v': { type: 'consonant', value: ['व'] },
			'S': { type: 'consonant', value: ['श'] },
			'sh': { type: 'consonant', value: ['ष'] },
			's': { type: 'consonant', value: ['स'] },
			'h': { type: 'consonant', value: ['ह'] }
		}
	};

	const setValue = (lhsValue, rhsValue) => {
		let count = (result.to.length) - (lhsValue.length);
		result.to = result.to.substr(0, count) + lhsValue + rhsValue + result.to.substr(count + 1, result.to.length - 1);
	}

	const setToValue = () => {
		let previousChars = [].reverse();
		let prevChar = '';
		let prevType = '';
		let from = [...result.from, ' '];

		result.to = '';

		for (let index = 0; index < from.length; index++) {
			const char = from[index];
			let lhs = '';
			let rhs = char;
			let type = '';

			if (Object.keys(transliteration.keyMapping).find(a => a.startsWith(prevChar + char))) {
				prevChar += char;
			} else {
				debugger
				const curentObject = transliteration.keyMapping[prevChar];
				if (curentObject) {
					if (prevType === 'consonant' && curentObject.type === 'vowel') {
						result.to += curentObject.value[1];
					} else {
						result.to += curentObject.value[0];
					}
					prevType = curentObject.type;
					prevChar = char;
				} else {
					result.to += prevChar;
					prevType = '';
					prevChar = char;
				}
			}
			continue;
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

	$('#showKeyMap').on('click', function (e) {
		let tr = '';
		for (const key in transliteration.keyMapping) {
			if (transliteration.keyMapping.hasOwnProperty(key)) {
				const element = transliteration.keyMapping[key];
				tr += setTr(key, element);
			}
		}
		tr += `<tr style="display: flex;flex-direction: row;border-top: 1px solid;"><td colspan="2"> </td></tr>`;
		$('#trans').hide();
		$('#keyMap').html(tr).show();
	});

	$('#keyMapOk, keyMapClose').on('click', function (e) {
		$('#trans').show();
		$('#keyMap').hide();
	});

});