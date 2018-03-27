// Reduce unnecessary waste
function super_reduced_string(s){
    // Complete this function
    var finalarr = [];
    var splitted = s.split('');
    splitted.forEach((item,index) => {
        if(finalarr.length === 0){
            finalarr.push(item);
        }
        var accum = null;
        var occ = 0;
        for(let j = 0; j<finalarr.length;j++){
            
            if(finalarr[j] === item){
                occ = occ + 1;
            }
            else{
                accum = item;
                if(accum === finalarr[finalarr.length - 1]){

                }
                else {
                    if(occ > 0){
                        
                    }
                    else{
                        finalarr.push(accum);
                        occ = 0;
                    }
                    
                }
                
            }
        }
            
    })
    var f = finalarr.join('');
    return f;
}
