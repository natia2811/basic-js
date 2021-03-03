const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let countCats = 0,
    arr = [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ],
    catLetter = '^^';
    for(i=0;i <= arr.length -1 ; i++){
        arr[i].find(i => {
      if(i==catLetter){
      countCats +=1;
      }
      })
    }
};
