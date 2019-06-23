document.addEventListener('submit', encode);
function encode(event) {
  event.preventDefault();
  let sentence = document.querySelector('#sentence');
  let normalizedDiv = document.querySelector('#normalizedText');
  let encodedDiv = document.querySelector('#encodedMessage');
  let secondRectangleDiv = document.querySelector('#secondRectangle');
  let normalizedSentence = normalize(sentence.value);
  let sentenceLength = normalizedSentence.length;
  let { row, column } = getSquare(sentenceLength);
  let words = formatRowsColumns(normalizedSentence, column, row);
  let encoded = words.shift().split(''); //shift the first index value made an array of it
  for (word of words) {
    for (counter = 0; counter < encoded.length; counter++) {
      encoded[counter] += word[counter];
    }
  }
  let rectangle = getRectangle(encoded);
  console.log(rectangle);//rectangle

}

/**
 *
 *
 * @param {string} sentence
 * @returns string
 */
function normalize(sentence) {
	return sentence.replace(/\W/g, '').toLowerCase();
}

/**
 *
 *
 * @param {integer} number
 * @returns object
 *  if length of sentence would form a perfect square a matrix that 
 *  has equal rows and equal columns e.g 64 would form an 8 by 8 i.e a number that has a square root wihtout a remainder
 *  matrix return the column,
 * the row is always one less of the column, but if the length of the string doesn't form 
 * a perfect square find the next i.e does not have a square root without a remainder find the 
 * next perfect square say for a sentence of length 8 we would use 9 since it has a square root hence
 * a perfect square
 * 
 */
function getSquare(number) {
	let numberCopy = number;
	let column = null;

	let root = Math.sqrt(numberCopy);
	if (numberCopy % root === 0) {
		column = Math.sqrt(numberCopy);
		return { column, row: column - 1 };
	}
	while (true) {
		root = Math.sqrt(numberCopy);

		if (numberCopy % root === 0) {
			break;
		} else {
			numberCopy += 1;
			root == 1;
		}
	}
	column = Math.sqrt(numberCopy);
	return { column, row: column - 1 };
}

/**
 *
 *
 * @param {string} sentence
 * @param {integer} columns
 * @param {integer} rows
 * @returns
 */
function formatRowsColumns(sentence, columns, rows) {
	let sentenceLength = sentence.length;
	let sentenceCopy = sentence + ' '.repeat(rows * columns - sentenceLength); //added space to make up for rows that are characters short
	let formatted = [];
	let word = '';
	let count = 0;
	for (let index = 0; index < sentenceCopy.length; index++) {
		word += sentenceCopy[index];
		count += 1;
		if (count === columns) {
			formatted.push(word);
			word = '';
			count = 0;
		}
	}
	return formatted;
}
function getRectangle(arr) { 
  multi = [];
  for (code of arr) { 
    multi.push(code.split(''));
  }
  return multi;

}
