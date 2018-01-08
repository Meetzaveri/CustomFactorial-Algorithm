const repeatStringNumTimes = (str, num) => {
  // repeat after me
  let i;
  
  let strdup = ''; // created a duplicate string
  
  // loop through the 
  for (i=1;i<=num;i++){
    strdup = strdup + str; // concatenate the duplicate string and actual string
  }
  
  //return a resultant string
  return strdup;
}

repeatStringNumTimes("abc", 3);
