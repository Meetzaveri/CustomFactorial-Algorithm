function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newarr = arr.slice(howMany,arr.length);
  console.log(arr.slice(howMany,arr.length));
  return newarr;
}

slasher([1, 2, 3], 2);
