const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let word = '';

    function check(letter) {
        let code = '';
        for (j = 0; j < letter.length; j += 2) {

            if (letter.slice(j, j + 2) == '10') {
                code += '.';
            } else if (letter.slice(j, j + 2) == '11') {
                code += '-';
            }
        }
        word += MORSE_TABLE[code];
    }

    for (i = 0; i < expr.length; i += 10) { //берем 10 символов, проверяем значения
        let letter = expr.slice(i, i + 10);
        if (letter === '**********') {
            word += ' ';
        } else {
            check(letter);
        }
    }


    return word;
}


module.exports = {
    decode
}