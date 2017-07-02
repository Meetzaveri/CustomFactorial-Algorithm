
function factorialize(num) {
  
  var res=[];
  var product = 1;
  var restotal;
  for(j=1;j<=num;j+=2){
    
    res.push(j*(j-1));
       
  }
  for(i=0;i<res.length;i++){
    if(res[i] === 0){
      
    }
    else
      product *= res[i];
  }
  resodd=product;
  reseven=product*num;
  reszero=1;
if(num === 0){
  return reszero;
}
  else if(num % 2 === 0)
  {
    return reseven;
  }
  else
  {
    return resodd;
  }
  
}


factorialize(10);
console.log(factorialize(4));