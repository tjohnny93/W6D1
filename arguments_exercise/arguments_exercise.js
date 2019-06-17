function sum(){
  let sum = 0;
  Object.values(arguments).forEach(function(ele){
    sum += ele;
  });
  return sum;
}

sum(2,2,3);

function sumRest(...arguments){
  let sum = 0;
  (arguments).forEach(function(ele){
    sum+=ele;
  });
  return sum;
}
console.log(sumRest(2,2,3));