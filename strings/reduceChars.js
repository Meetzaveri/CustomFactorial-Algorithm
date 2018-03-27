// Reduce unnecessary waste
function super_reduced_string(s){
    // Complete this function
    var finalarr = [];
    var splitted = s.split('');
    console.log('Splitted',splitted);
    splitted.forEach((item,index) => {
        console.log(item,index);
        console.log('Arr len',finalarr.length)
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
                console.log('Item',item,'arr at current',finalarr[j],'Occurences',occ);
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
    console.log('FInal Arr',finalarr);
    var f = finalarr.join('');
    console.log(f);
    return f;
}
