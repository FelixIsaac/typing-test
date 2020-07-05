"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
;
const wordList = {
    short: fs.readFileSync(path.resolve('assets', 'en-short.txt')).toString().split('\n'),
    medium: fs.readFileSync(path.resolve('assets', 'en-medium.txt')).toString().split('\n'),
    long: fs.readFileSync(path.resolve('assets', 'en-long.txt')).toString().split('\n')
};
/**
 * Filter words that have do not have a specified length
 * @param words
 * @param selector
 * @param length
 */
function filterLength(words, selector = 'below', length = 7) {
    return words.filter((word) => {
        if (selector === 'below')
            return word.length < length;
        if (selector === 'exact')
            return word.length === length;
        if (selector === 'above')
            return word.length > length;
        return true;
    });
}
/**
 * Generates punctuation to a given array of words
 * @param words
 */
function givePunctuation(words) {
    return words.map((word) => {
        // 10% chance that the current word will have period
        if (Math.floor(Math.random() * 100) > 90)
            return word + '.';
        // 15% chance that the current word will have a comma
        // if it doesn't have a period already
        if (Math.floor(Math.random() * 100) > 95)
            return word + ',';
        return word;
    });
}
exports.givePunctuation = givePunctuation;
/**
 * Generates capital letters to given array of words
 * @param words
 */
function giveCapitalLetters(words) {
    return words.map((word) => {
        // 20% percent chance that the current word will have capital letter on its first character
        if (Math.floor(Math.random() * 100) > 80)
            return word[0].toUpperCase() + word.slice(1);
        return word;
    });
}
exports.giveCapitalLetters = giveCapitalLetters;
/**
 * Depending on the length, give the appropriate word list
 * @param length
 */
function selectWordList(length) {
    if (length <= 5)
        return wordList.short;
    if (length <= 9)
        return wordList.medium;
    return wordList.long;
}
exports.selectWordList = selectWordList;
/**
 * Generate a array of words and depending on its options provided
 * @param length
 * @param options
 */
function generate(length, options) {
    if (isNaN(length))
        length = 50;
    if (isNaN(options.wordLength.length))
        options.wordLength.length = 7;
    if (options.wordLength.selector === 'undefined')
        options.wordLength.selector = 'below';
    const filteredWords = filterLength(selectWordList(options.wordLength.length), options.wordLength.selector, options.wordLength.length);
    let words = [];
    for (let i = 0; i < length; i++) {
        const word = filteredWords[Math.floor(Math.random() * filteredWords.length)];
        words.push(word);
    }
    if (options.punctuation)
        words = givePunctuation(words);
    if (options.caps)
        words = giveCapitalLetters(words);
    return words;
}
exports.generate = generate;
//# sourceMappingURL=generate.js.map