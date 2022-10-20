/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (!s) {
        throw 'illegal input';
    }
    const len = s.length;
    if (len < 1 || len > 15) {
        throw 'illegal input length';
    }
    const allowedLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const unallowedLetters = Array.from(s).filter(i => allowedLetters.indexOf(i) === -1);
    if (unallowedLetters.length > 0) {
        throw 'illegal input characters';
    }
    const mappings = {
        'I': { value: 1, pre: ['V', 'X']},
        'V': { value: 5},
        'X': { value: 10, pre: ['L', 'C']},
        'L': { value: 50},
        'C': { value: 100, pre: ['D', 'M']},
        'D': { value: 500},
        'M': { value: 1000}
    };
    let sum = 0;
    for (let i = 0; i < len; i++) {
        const letter = s[i];
        const mapping = mappings[letter];
        if (mapping.pre && mapping.pre.indexOf(s[i+1]) > -1) {
            // use subtraction
            const nextLetter = s[i+1];
            const nextLetterMapping = mappings[nextLetter];
            sum += (nextLetterMapping.value - mapping.value);
            i++;
        } else {
            sum += mapping.value;
        }
    }
    return sum;
};
