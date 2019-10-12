module.exports = function multiply(first, second) {

  const firstArr = first.split('');
  const secondArr = second.split('');

  const resultRows = [];

  for (let i = secondArr.length - 1; i >= 0; i--) {

    const factor = Number(secondArr[i]);
    const resultRow = [];
    let buff = 0;

    for (let j = firstArr.length - 1; j >= 0; j--) {

      const multiplicand = Number(firstArr[j]);

      const result = multiplicand * factor + buff;
      buff = Math.trunc(result / 10);
      const fract = result / 10 - buff;

      if (j === 0) {
        resultRow.push(Math.round(fract * 10));

        if (buff > 0) {
          resultRow.push(Math.round(buff));
        }
        buff = 0;
      } else {
        resultRow.push(Math.round(fract * 10));
      }
    }

    resultRows.push(resultRow.reverse());
  }

  
  const adoptedRows = resultRows
    .map(function (row, i) {
      for (let index = 0; index < i; index++) {
        row.push(0);
      }
      return row;
    })
    .map(function (row, i, array) {
      const longestLength = array[array.length - 1].length;
      const current = row.length;
      const diff = longestLength - current;

      for (let j = 0; j < diff; j++) {
        row.unshift(0);
      }
      return row;
    });
  

  const longest = adoptedRows[adoptedRows.length - 1];
  
  const res = [];
  let buff = 0;

  for (let i = longest.length - 1; i >= 0; i--) {
    
    for (let j = 0; j < adoptedRows.length; j++) {
      
      buff = adoptedRows[j][i] + buff;
      
    }

    if (buff < 10) {
      res.unshift(buff);
      buff = 0;
    } else {
      const delenie = buff / 10;
      const toBuff = Math.floor(delenie);
      const fact = delenie - Math.floor(delenie);
      buff = toBuff;
      res.unshift(Math.round(fact * 10));
    }

  }

  return res.join('').toString();
}