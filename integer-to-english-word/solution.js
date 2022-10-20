var numberToWords = function (input) {
    if (input < 0 || input > (Math.pow(2, 32) - 1)) {
        throw 'illegal input';
    }
    if (input === 0) {
        return 'Zero';
    }
    let num = input;
    const numbers = {
        '1': 'One',
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine',
        '10': 'Ten',
        '11': 'Eleven',
        '12': 'Twelve',
        '13': 'Thirteen',
        '14': 'Fourteen',
        '15': 'Fifteen',
        '16': 'Sixteen',
        '17': 'Seventeen',
        '18': 'Eighteen',
        '19': 'Nineteen',
        '20': 'Twenty',
        '30': 'Thirty',
        '40': 'Forty',
        '50': 'Fifty',
        '60': 'Sixty',
        '70': 'Seventy',
        '80': 'Eighty',
        '90': 'Ninety',
        '100': 'Hundred'
    };
    const mappings = {
        '100': {text: 'Hundred', magnitude: 3},
        '1000': {text: 'Thousand', magnitude: 4},
        '1000000': {text: 'Million', magnitude: 6},
        '1000000000': {text: 'Billion', magnitude: 9}
    };
    const moreThanHundred = Object.keys(mappings).map(i => +i);
    let index = moreThanHundred.length - 1;
    const lessThanHundred = Object.keys(numbers).map(i => +i);
    let indexLessThanHundred = lessThanHundred.length - 1;
    let result = [];
    while (num > 0) {
        // console.log(num);
        if (num >= 100) {
            const pivot = moreThanHundred[index];
            let modulo = Math.floor(num / pivot);
            if (modulo > 0) {
                const coef = modulo <= 1 && numbers[modulo + ''] ? (modulo === 100 || numbers[modulo + ''] === 'Hundred' ? 'One ' : '') +  numbers[modulo + ''] + ' ' : '';
                if (!coef) {
                    console.log(coef);
                    let result2 = [];
                    for (let i = lessThanHundred.length - 1; i >= 0; i--) {
                        const pivotInner = lessThanHundred[i];
                        const modulo2 = Math.floor(modulo / pivotInner);
                        if (modulo2 > 0) {
                            const coef2 = modulo2 !== 1 && numbers[modulo2 + ''] ? (modulo2 === 100 ? 'One ' : '') + numbers[modulo2 + ''] + ' ' : '';
                            result2.push(coef2 + (coef2 === '' && numbers[pivotInner] === 'Hundred' ? 'One ' + numbers[pivotInner] : numbers[pivotInner]));
                            modulo = modulo % pivotInner;
                        }
                    }
                    result.push(coef + (result2.length > 0 ? result2.join(' ') + ' ' : '') + mappings[pivot].text);
                } else {
                    result.push(coef + mappings[pivot].text);
                }
            }
            num = num % pivot;
            index--;
        } else {
            const pivot = lessThanHundred[indexLessThanHundred];
            const modulo = Math.floor(num / pivot);
            if (modulo > 0) {
                result.push(numbers[pivot]);
                num = num % pivot;
            } else if (numbers[num + '']) {
                result.push(numbers[num + '']);
                num = 0;
            }
            indexLessThanHundred--;
        }
        // console.log(result);
    }
    return result.join(' ');
};

// console.log(numberToWords(100));
// console.log(numberToWords(123));
// console.log(numberToWords(12345));
// console.log(numberToWords(1234567));
// console.log(numberToWords(100000));
// console.log(numberToWords(100000000));
// console.log(numberToWords(1050));
// console.log(numberToWords(10050));
// console.log(numberToWords(23));
// console.log(numberToWords(223123));
// unpassed
console.log(numberToWords(123123));
