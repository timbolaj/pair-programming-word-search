const transpose = function(matrix) {
    let iteratorMax; // set a max iteration value which takes the larger of the matrix's height or width
    matrix.length > matrix[0].length ? iteratorMax = matrix.length : iteratorMax = matrix[0].length;
      
    let newMatrix = []; // initialize an output array that will store the new rows
      
    for (let i = 0; i < iteratorMax; i++) {
      let newRow = []; // initialize a new row to be added to the new matrix
      for (const row of matrix) { // for each matrix row, add the item at the given position to the new row
        if (i < row.length) {
          newRow.push(row[i]);
        }
      }
      if (newRow.length > 0) { // add the new row to the output array
        newMatrix.push(newRow);
      }
    }
      
    return newMatrix;
  };
    
  const findWord = (letters, word) => {
    const joined = letters.map(ls => ls.join(''));
    for (const l of joined) {
      if (l.includes(word)) return true;
    }
  };
      
  const reverseWord = word => {
    const newWord = word.split('').reverse().join('');
    return newWord;
  };
    
  const wordSearch = (letters, word) => {
    if (findWord(letters, word) || findWord(letters, reverseWord(word))) {
      return true;
    } else if (findWord(transpose(letters), word) || findWord(transpose(letters), reverseWord(word))) {
      return true;
    }
    return false;
  };
    
  module.exports = wordSearch;