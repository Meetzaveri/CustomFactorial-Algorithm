
const titleCase = (str) => {
 //First Converted to lowercase in case of test cases are tricky ones
  var spl=str.toLowerCase();
 
  //Then  Splitted in one word format as leaving one space as ' '
  spl = spl.split(' ');
 
  for(var i=0;i<spl.length;i++){
 
    //Again Splitting done to split one letter from that respective word   
    var spl2= spl[i].split('');  
    
    // In specific word's letter looping has to be done in order to 
    // convert 0th index character to uppercase
    for(var j=0;j<spl2.length;j++){
      
    spl2[0]= spl2[0].toUpperCase();
    }
    // Then Joined Those letters to form into word again
    spl[i] = spl2.join('');   
  }
  // Then joined those words to form string
  str = spl.join(' ');
  return str;
}

titleCase("sHoRt AnD sToUt");
