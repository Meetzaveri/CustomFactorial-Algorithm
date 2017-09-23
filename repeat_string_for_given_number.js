
function repeatStringNumTimes(str, num) {
  // repeat after me
  var storage = "";
  
  if (num > 0){ //for ensuring positive values get real return while negative gets empty string
  for(i=1 ; i <= num ; i++) {  // iterates till given number is out of boundary
    storage+= str; // for str ="abc" --> "" + "abc" = "abc" i.e. for 1st time
    console.log(storage); //just for ensurity 
  }
   return storage; //return real answer
  }
  else{
    return ""; //return empty string for negative value
  }
 
}

repeatStringNumTimes("abc", 3);
