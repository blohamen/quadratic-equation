module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
  var a = parseInt(arr[0]);
  var b = (arr[3] === '-') ? -arr[4] : arr[4]; 
  var c = (arr[7] === '-') ? -arr[8] : arr[8]; 
  var discriminant = (b*b) - (4*a*c);
   var x1 = Math.round(-b + (Math.sqrt(discriminant)))/(2*a);
   var x2 = Math.round(-b - (Math.sqrt(discriminant)))/(2*a);
  arr.length = 0;
  arr.push(x2);
  arr.push(x1);
  arr.sort(function(a,b){
    return a-b;
  });
  return arr;

  // your implementation
}
