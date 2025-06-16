const COLORS: Record<string, string[]> = {
	'#FFEA00': ['C'],
	'#67E4A6': ['A', 'I', 'L', 'M', 'F', 'W', 'Y', 'V', 'P'],
	'#C4C4C4': ['G'],
	'#FC9CAC': ['D', 'E'],
	'#BB99FF': ['K', 'R'],
	'#80BFFF': ['S', 'T', 'H', 'Q', 'N']
}

export const CHAR_COLOR_MAP = Object.entries(COLORS).reduce((acc, [color, letters]) => {
	letters.forEach(letter => {
		acc[letter] = color
	})
	return acc
}, {} as Record<string, string>)

export const FORM_ERRORS = {
	required: 'Обязательное поле',
	aminoAcid: 'Допустимые символы (A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V, -)',
	lengthMismatch: 'Последовательности должны совпадать по длине'
}

export const AMINO_ACID_REGEX = /^[ARNDCEQGHILKMFPSTWYV-]*$/
