const fs = require('fs');
const path = require('path');
const wordList: string[] = fs.readFileSync(path.resolve('assets', 'en.txt'))
  .toString().split('\n');

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
    if (Math.floor(Math.random() * 100) > 85) return word + '.';
    if (Math.floor(Math.random() * 100) > 90) return word + ',';

    return word;
  });
}

export function giveCapitalLetters(words: string[]) {
  return words.map((word: string) => {
    if (Math.floor(Math.random() * 100) > 65) return word[0].toUpperCase() + word.slice(1);

    return word;
  });
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

  const filteredWords: string[] = filterLength(wordList, options.wordLength.selector, options.wordLength.length);
  let words: string[] = [];

  for (let i = 1; i < length; i++) {
    const word: string = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    words.push(word);
  }

  if (options.punctuation) words = givePunctuation(words);
  if (options.caps) words = giveCapitalLetters(words);

  return words;
}
