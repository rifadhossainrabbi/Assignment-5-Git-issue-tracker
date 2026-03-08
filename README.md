    - 1️⃣ What is the difference between var, let, and const?
    - 2️⃣ What is the spread operator (...)?
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    - 4️⃣ What is an arrow function?
    - 5️⃣ What are template literals?





________________________________Questions Answer by English____________________

 --------------------------------------------------------Question-1:--------------------------------------------------------------
  1️⃣ What is the difference between var, let, and const?

Ans:
var, let and const are JavaScript variables. Before ES6, only var was used. Later, let and const were introduced.

Features of var
i. Var is the old JavaScript variable.
ii. Var can be accessed anywhere, but not outside the function scope.
iii. Var is hoisted.
iv. Var can be redeclared.
v. Var can be reassigned.

Features of let
i. Let is used in modern JavaScript.
ii. Let has block scope. It cannot be accessed outside {}.
iii. Let is hoisted but stays in the Temporal Dead Zone (TDZ) until declared.
iv. Let cannot be redeclared.
v. Let can be reassigned.

Features of const
i. Const is used in modern JavaScript.
ii. Const has block scope. It cannot be accessed outside {}.
iii. Const is hoisted but stays in the Temporal Dead Zone (TDZ) until declared.
iv. Const cannot be redeclared.
v. Const cannot be reassigned, but values inside objects and arrays can be changed.




 ---------------------------------------------------------Question-2:------------------------------------------------------------
2️⃣ What is the spread operator (...)?

Ans:
In modern JavaScript, the spread operator is used to spread out the elements of an object or array. It is also used as the rest operator. Depending on the use case, it is called spread operator or rest operator.

Why do we use it?
1. To merge two arrays into a new array.
2. To copy an array and create a new array.
3. To separate an object and create a new object.
4. To create two new objects.
5. In a function, when parameters are fixed but arguments are more, the extra arguments can be passed using the rest operator.





 -------------------------------------------------------Question-3:---------------------------------------------------------------
  3️⃣ What is the difference between map(), filter(), and forEach()?

  Ans:
  map(), filter(), and forEach() are JavaScript array methods.

<---1: map()-->
The purpose of map() is to work on each element of an array and return a new array.

Why do we use map()?
1. To modify the data of an array and create a new array.
2. To modify the data of objects and create a new array.

<---2: filter()-->
The purpose of filter() is to select elements from an array based on a specific condition and create a new array.

Advantages of filter():
1. It allows easy selection of elements according to a condition.
2. The original array does not change.
3. The code is short and readable.

<---3: forEach()-->
forEach() is mainly used for looping through an array.

1. It works on each element of the array.
2. It does not create a new array
3. It can update the values of the array.





 -------------------------------------------------------Question-4:-------------------------------------------------------------
4️⃣ What is an arrow function?

Ans:
Arrow function is the new and modern syntax of JavaScript. It is mainly used to write less code.

Old syntax:
function add(x, y){
  return x + y;
}
console.log(add(5, 6));

New syntax:
const add = () => {
  return a + b;
}
console.log(add(7, 9));

1. Two arguments
Note: If written in a single line, return is not needed.
const add = (a, b) => a + b;
console.log(add(7, 3));

2. One argument
const divide = s => s / 3;
console.log(divide(9));

3. No argument
const greet = () => console.log("Hello Rifad");
greet();




 -------------------------------------------------------Question-5:-------------------------------------------------------------
 5️⃣ What are template literals?

 Ans:
Template literals are the modern syntax of JavaScript. Their sign is ``(backticks).
Writing code with old strings ('' or "") was very troublesome. If spaces were not correct, the code would not display properly in the output. Later, template literals solved this problem.

Advantages of template literals:
1. Variables or expressions can be written inside ${variable}.
2. Multiple lines of strings can be written easily.
3. Code becomes shorter and cleaner.
4. Works well for dynamically creating HTML.




  -------------------------------------------------------Question-1:-------------------------------------------------------------
  1️⃣ What is the difference between var, let, and const?

  Ans:
  var,let and const holo javascript er variable. ES6 er age js a var use hoto shudhu pore let const ashse.

  var er boisisto gulo--- 
  i. Var holo puraton js variable
  ii. Var k sob jayga theke access kora jay kintu function scope er baire access  kora jay na
  iii. Var Hoist hoy
  iv. var k redeclare kora jay
  v. var k reassign o kora jay

  let er boisisto gulo---
  i.let modern js a use hoy
  ii. let holo Block scope. Mane {} er baire access kora jay na
  iii. let Hoist hoy but Temporal Dead Jone a thake
  iv. let k redeclare kora jay na
  v. let k reassign kora jay

  const er boisisto gulo---
  i.const modern js a use hoy
  ii. const holo Block scope. Mane {} er baire access kora jay na
  iii. const Hoist hoy but Temporal Dead Jone a thake
  iv. const k redeclare kora jay na
  v. const k reassign o kora jay na but object and array er moddhe value change kora jay



   -------------------------------------------------------Question-2:--------------------------------------------------------------
   2️⃣ What is the spread operator (...)?

   Ans: 
   Modern Javascript a spread operator use kora hoy object ba array er element gulo k alada kora choriye dite.Eta rest operator hisabeo use kora hoy. Use case a etar nam kokhon spread operator abar kokhno rest operator bola hoy.

   keno etai use korbo?
   1. duita array k notun array te merge korte. 
   2. array copy kore notun array banate.
   3. object separate kore notun object banate.
   4. duita notun object banate.
   5. function a parameter nirdisto kintu argument jodi tar beshi hoy tobe extra argument gulo rest operator a diya dawa jay.


    --------------------------------------------------------Question-3:-------------------------------------------------------------
    3️⃣ What is the difference between map(), filter(), and forEach()?

    Ans:
    map(), filter(), and forEach() eigulo holo Javascript er array method.

   <---1: map()-->
    map() er kaj holo ekta array er protita element er upor kaj kora notun array return kore.
    keno map() use korbo?
    1. array er data modify kore notun array banate.
    2. object er data modify kore notun array banate.

    <---1: filter()-->
    filter() er kaj holo array theke nirdisto sorto onujai element ber kore notun array banay
    filter() er subidha.
    1. sohoje sorto onujai element nirbachon kora jay.
    2. original array poriborton hoy na.
    3. code soto o redable hoy.

    <---1: forEach()-->
    forEach() diya muloto looping er kaj kora hoy.
    1. array er protita element er upor kaj kore.
    2. notun array banay na.
    3. array er value update kora.


     -------------------------------------------------------Question-4:-------------------------------------------------------------
     4️⃣ What is an arrow function?

     Ans:
     arrow function holo Javascript er notun o modern syntax.Code lekha komanor jonno muloto arrow function use kora hoy.

     purono syntax---
     <!-- function add (x,y){
      return x + y;
     }
     console.log(add(5,6)); -->

     notun syntax----
     <!-- const add = ()=>{
      return a + b;
     }
     console.log(add(7,9)); -->

    1. duita argument
     NB: jodi ek line a likhi tobe return use kora lage na
     <!-- const add = (a,b)=> a + b; -->
     <!-- console.log(add(7,3)); -->

     2. ekta argument
     <!-- const divide = s => s / 3;
     console.log(divide(9)); -->

     3. kono argument na thakle
     <!-- const greet = ()=> console.log("Hello Rifad");
     greet(); -->

     
      --------------------------------------------------------Question-5:-------------------------------------------------------------
      5️⃣ What are template literals?

      Ans:
      template literals holo Javascript er modern syntax. Er sign holo `` (backticks) bole. Purono string '' ba "" a code likha onek jahmel hoto sothik vabe space na dile code thikvabe output a dekhato na. Pore template literals a ei somossar somadhan hoy.

     template literals er subidha somuho
     1. er moddhe ${varibale} ei vabe variable expression likhae jay.
     2. multiple string sohoje likha jay.
     3. code choto o sundor hoy.
     4. dynamic vabe html toiri te valo kaj kore.