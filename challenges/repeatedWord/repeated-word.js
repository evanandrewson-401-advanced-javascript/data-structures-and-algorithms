const repeatedWord = (string) => {
  string = string.replace(/[.,?!]/g, '');
  const wordArray = string.split(' ');
  const library = {};
  let firstRepeat;
  for( let word of wordArray) {
    word = word.toLowerCase();
    if(library[word]) {
      firstRepeat = word;
      break;
    } else {
      library[word] = 1;
    }
  }
  return firstRepeat;
};

module.exports = repeatedWord;