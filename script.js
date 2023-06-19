// answer 1//
function Parent() {}
// Method attached to the parent object <br>
Parent.prototype.parentMethod = function() {
  console.log("This is a method defined in the parent object."); 
};
// Child object constructor
function Child() {}
// Inheriting from the parent object
Child.prototype = Object.create(Parent.prototype);
// Creating an instance of the child object
var childObject = new Child();
// Using the method from the parent object through the child object
childObject.parentMethod();


// answer2//
const parent1 =
{
    display: function()
    {
        console.log("Hii....." );
    }
}
parent1.display();
const child= Object.create(parent1);
child.name= function()
{
    console.log("this is first child")
}
child.name()
child.display()
const child3= Object.create(child);
child3.name()
child3.display()



// answer3//
const array1 = [1, 2, 3, 4];
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator * currentValue);

console.log(sumWithInitial);

// answer4//
const object1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  
  console.log(Object.getOwnPropertyNames(object1));

  