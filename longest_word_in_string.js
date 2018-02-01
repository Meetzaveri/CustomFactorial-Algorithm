function findLongestWord(str) {
  // First We Split it into word as allowing one space as ' ' in split 
  //  argument as it will contain array of words
  var spl=str.split(' ') ;
  var foo=[];
  spl.map(i => foo.push(i.length));
  //Using Spread Operator to calculate max. no. from array
  var max = Math.max(...foo);
  // Or We can use arr.reduce function to compare and return max from an array
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


//Note : Here there is ESlint(ECMAScript 2015) operator.
