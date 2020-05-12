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

function filterLength(words: string[], selector: string = 'below', length: number = 7) {
  return words.filter((word: string) => {
    if (selector === 'below') return word.length < length;
    if (selector === 'exact') return word.length === length;
    if (selector === 'above') return word.length > length;
    return true;
  });
}

export function givePunctuation(words: string[]) {
  return words.map((word: string) => {
    if (Math.floor(Math.random() * 100) > 90) return word + '.';
    if (Math.floor(Math.random() * 100) > 95) return word + ',';

    return word;
  });
}

export function giveCapitalLetters(words: string[]) {
  return words.map((word: string) => {
    if (Math.floor(Math.random() * 100) > 65) return word[0].toUpperCase() + word.slice(1);

    return word;
  });
}

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
