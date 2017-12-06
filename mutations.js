function mutation(arr) {
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
   for(var i = 0; i< str2.length; i++){
     if(str1.indexOf(str2[i]) != (-1) ){
			if(str2[i] == str2[(str2.length) -1]){
				return true;	
			}
			else { 
				continue;	
			}
     }
	else {
		return false;
	}
   }
}

mutation(["hello", "hey"]);
