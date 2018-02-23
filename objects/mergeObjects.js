let oldCollection = [{name:'abc',value:15},{name:'xyz',value:15},{name:'code', value:20}];
let newCollection  = [{name:'abc',value:15},{name:'xyz',value:45},{name:'ess', value:67}];
let mergedCollection = [];

for(let i =0; i <= oldCollection.length - 1; i++ ){
  

        if(oldCollection[i].name == newCollection[i].name){
			mergedCollection.push(newCollection[i]);
          oldCollection[i] = newCollection[i];
			
        }
      else{
        console.log('',newCollection[i]);
		mergedCollection = (newCollection[i]);
      }
     
   
}
oldCollection.push(mergedCollection);
console.log(oldCollection);

console.log(mergedCollection);
