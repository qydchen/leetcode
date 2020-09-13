function validateFormatting(str, format) {
    if (format[0] !== str[0]) return false;
    if (format[format.length - 1] !== str[str.length - 1]) return false;
    const lengthInBetween = Number(format.slice(1, format.length - 1)); // 18
    const middle = str.slice(1, str.length - 1);
    let counter = 0;
    for (let i = 0; i < middle.length; i += 1) {
        // '4nati2aliza3' i = 0
        const char = middle[i]; // '4'
        if (!Number(char)) {
            // 'n'
            counter += 1;
        } else {
            let numString = ""; // '412543'
            for (let j = i; j < middle.length; j += 1) {
                // j = 1
                if (!Number(middle[j])) {
                    // 'n'
                    break;
                } else {
                    numString += middle[j];
                }
                i = j;
            }
            console.log(numString);
            counter += Number(numString); // counter 4 = 0 + Number(numString) 4
        }
    }
    return lengthInBetween === counter;
}

console.log(validateFormatting("i17on", "i18n"));
