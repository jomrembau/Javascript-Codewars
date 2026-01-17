function positiveSum(arr) {
  var positiveList = [];
  var sum = 0;
  for ( var x = 0; x < arr.length; x++ ) {
    if (arr[x] > 0) {
      positiveList.push(arr[x]);
    }
  }
  positiveList.forEach(function (value) {
    sum = sum + value;
    });
  return sum;
}
