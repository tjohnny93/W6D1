function sum(arguments){
  debugger;
  let sum = 0;
  Object.values(arguments).forEach(function(ele){
    sum += ele;
  });
  return sum;
}