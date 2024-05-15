const plusOne = (digits) => {
    const n = digits.length;
    let carry = 1, sum = 0;
    for (let i = n - 1; i >= 0; --i) {
        sum = carry + digits[i];
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);
    }

    return carry > 0 ? [carry, ...digits] : digits;
}

plusOne([1,2]);       // [1, 3]
plusOne([1,6]);       // [1, 7]
plusOne([1,9]);       // [2, 0]
plusOne([1,9,9,9,9]); // [2, 0, 0, 0, 0]
plusOne([9,9,9,9]);   // [1, 0, 0, 0, 0]
