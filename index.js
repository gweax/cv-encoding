const vowels = 'aeiou'.split('');
const consonants = 'bdfghklmnprst'.split('');

const syllables = consonants.reduce((arr, c) => arr.concat(vowels.map((v) => c + v)), []);
const base64 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/+='.split('');

function encode(str) {
    if (/[^a-zA-Z0-9=\/\+]/.test(str)) {
        throw new Error('invalid input');
    }

    return str.split('').map((c) => syllables[base64.indexOf(c)])
        .reduce((str, syl, i) => str + (i % 2 == 0 && i > 0 ? '-' : '') + syl);
}

function decode(str) {
    return str.toLowerCase().replace(/[^a-z]/g, '').match(/[a-z]{2}/g)
        .map((s) => base64[syllables.indexOf(s)])
        .join('');
}

module.exports = {
    encode,
    decode
};
