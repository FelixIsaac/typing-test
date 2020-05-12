const fs = require('fs');
const path = require('path');

interface WordList {
  short: string[];
  medium: string[];
  long: string[];
};

const wordList: WordList = {
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
function filterLength(words: string[], selector: string = 'below', length: number = 7) {
  return words.filter((word: string) => {
    if (selector === 'below') return word.length < length;
    if (selector === 'exact') return word.length === length;
    if (selector === 'above') return word.length > length;
    return true;
  });
}

/**
 * Generates punctuation to a given array of words
 * @param words
 */
export function givePunctuation(words: string[]) {
  return words.map((word: string) => {
    // 10% chance that the current word will have period
    if (Math.floor(Math.random() * 100) > 90) return word + '.';
    // 15% chance that the current word will have a comma
    // if it doesn't have a period already
    if (Math.floor(Math.random() * 100) > 95) return word + ',';

    return word;
  });
}

/**
 * Generates capital letters to given array of words
 * @param words
 */
export function giveCapitalLetters(words: string[]) {
  return words.map((word: string) => {
    // 20% percent chance that the current word will have capital letter on its first character
    if (Math.floor(Math.random() * 100) > 80) return word[0].toUpperCase() + word.slice(1);

    return word;
  });
}

/**
 * Depending on the length, give the appropriate word list
 * @param length
 */
export function selectWordList(length: number) {
  if (length <= 5) return wordList.short;
  if (length <= 9) return wordList.medium;
  return wordList.long;
}

interface GenerateOptions {
  punctuation: boolean;
  caps: boolean;
  wordLength: {
    length: number;
    selector: string;
  };
}

/**
 * Generate a array of words and depending on its options provided
 * @param length
 * @param options
 */
export function generate(length: number, options: GenerateOptions) {
  if (isNaN(length)) length = 50;
  if (isNaN(options.wordLength.length)) options.wordLength.length = 7;
  if (options.wordLength.selector === 'undefined') options.wordLength.selector = 'below';

  const filteredWords: string[] = filterLength(selectWordList(options.wordLength.length), options.wordLength.selector, options.wordLength.length);
  let words: string[] = [];

  for (let i = 1; i < length; i++) {
    const word: string = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    words.push(word);
  }

  if (options.punctuation) words = givePunctuation(words);
  if (options.caps) words = giveCapitalLetters(words);

  return words;
}
