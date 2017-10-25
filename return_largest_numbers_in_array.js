


function largestOfFour(arr) {
  // You can do this!
  var largestnumbers=[0,0,0,0];
  for (var i = 0;i<arr.length;i++){       //Outer Loop Iteration
    for(var k = 0;k <arr[i].length;k++){   //Inner Loop Iteration
      if(arr[i][k] > largestnumbers[i]){    // Comparision between inner values of arrays
      largestnumbers[i] = arr[i][k];                // Result After Comparision
        }
      console.log(largestnumbers[i]);
    }
  }
  console.log('After for loop');
  return largestnumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
