
function palindrome(str) {
  // Good luck!
  var rg =/[\W_]/g;
  var low_rep=str.toLowerCase().replace(rg,'');
  //Converted to form in which no non-alphanumeric character is present i.e. string which           is to be compared
  

  var final= low_rep.split('').reverse().join('');
  //converted to palindrome form in which characters will be reversed and will be 
  //compared to non-alphanumeric string
  return final == low_rep;
}



palindrome("eye");
