function sum(){
  let sum = 0;
  Object.values(arguments).forEach(function(ele){
    sum += ele;
  });
  return sum;
}

// sum(2,2,3);

function sumRest(...arguments){
  let sum = 0;
  (arguments).forEach(function(ele){
    sum+=ele;
  });
  return sum;
}

// console.log(sumRest(2,2,3));




Function.prototype.myBind = function(){
  let that = this;
  let ctxt = arguments[0];
  let outerArgs = Array.from(arguments).slice(1);

  return function(){
    let innerArgs = Array.from(arguments);
    let args = outerArgs.concat(innerArgs);
    that.apply(ctxt,args );
  }
}

Function.prototype.myBindRest = function(...outerArgs){
  let that = this;
  let ctxt = outerArgs[0];
  outerArgs = outerArgs.slice(1);
    return function(...innerArgs){
      let args = outerArgs.concat(innerArgs);
      that.apply(ctxt, args);
    }
}

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBindRest(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBindRest(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBindRest(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBindRest(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs) {
  
  numArgs = numArgs;
  let numbers = [];

  
  return function _curriedSum(num) {
    numbers.push(num);
    numArgs -= 1;
    if (numArgs === 0) {
      let sum = 0;
      numbers.forEach(function(n) {
        sum += n;
      });
      return sum;
    } else {
    return _curriedSum;
    }
  };
}

// ex = curriedSum(3);


Function.prototype.curry = function(numArgs) {
  numArgs = numArgs;
  let that = this;
  let args = [];

  return function dummy(argu) {
    args.push(argu);
    numArgs -= 1;
    if (numArgs === 0) {
      return that.apply(this, args);
    } else {
      return dummy;
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

Function.prototype.curryRest = function (numArgs) {
  numArgs = numArgs;
  let that = this;
  let args = [];

  return function dummy(argu) {
    args.push(argu);
    numArgs -= 1;
    if (numArgs === 0) {
      return that.call("any", ...args);
    } else {
      return dummy;
    }
  };
};

f1 = sumThree.curryRest(3);