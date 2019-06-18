
Function.prototype.inherits = function() {




}


// Surrogate
// constructor
// __proto__
// new
// Object.create

function inherits(ParentClass, ChildClass) { //Child = cat / Parent = animal
  function Surrogate() {} //blank object
  Surrogate.prototype = ParentClass.prototype; // assigning to parent's prototype
  ChildClass.prototype = new Surrogate(); // new instance of Surrogate
  ChildClass.prototype.constructor = ChildClass;
}

