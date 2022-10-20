/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if (!num) {
        throw 'illegal input';
    }
    if (num < 1 || num > 3999) {
        throw 'illegal input number';
    }
    const mappings = {
        '1': { value: 'I'},
        '5': { value: 'V', post: {value: 4, letter: 'I'}},
        '10': { value: 'X', post: {value: 9, letter: 'I'}},
        '50': { value: 'L', post: {value: 40, letter: 'X', divisor: 10}},
        '100': { value: 'C', post: {value: 90, letter: 'X', divisor: 10}},
        '500': { value: 'D', post: {value: 400, letter: 'C', divisor: 100}},
        '1000': { value: 'M',post:  {value: 900, letter: 'C', divisor: 100}}
    };
    const values = ['1000', '500', '100', '50', '10', '5', '1'];
    const len = values.length;

    const repeat = function(c, count) {
        let s = c;
        for (let i = 1; i < count; i++) {
            s += c;
        }
        return s;
    }
    let result = "";
    for (let i = 0; i < len; i++) {
        const value = values[i];
        const mapping = mappings[value];
        const letter = mapping.value;
        const intValue = (+value);
        const remainder = num % intValue;
        const modulo = Math.floor(num / intValue);
        console.log({num, result, value, letter, intValue, remainder, modulo});
        if (modulo > 0) {
            result += repeat(letter, modulo);
            console.log({result});
        }
        if (remainder > 0) {
            num = remainder;
            if (mapping.post) {
                const moduloPost = Math.floor(num / mapping.post.value);
                if (moduloPost > 0) {
                    result += mapping.post.letter + letter;
                    if (mapping.post.divisor) {
                        num = remainder % mapping.post.divisor;
                    } else {
                        return result;
                    }
                }
            }
        } else if (remainder >= 0) {
            return result;
        }
    }
    return result;
};

console.log(intToRoman(1994));
console.log(intToRoman(5));
