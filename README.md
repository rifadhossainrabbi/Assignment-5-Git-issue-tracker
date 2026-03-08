    - 1️⃣ What is the difference between var, let, and const?
    - 2️⃣ What is the spread operator (...)?
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    - 4️⃣ What is an arrow function?
    - 5️⃣ What are template literals?


  ---------------------------------------------------Question-1:--------------------------------------------------------
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



   ---------------------------------------------------Question-2:--------------------------------------------------------
   2️⃣ What is the spread operator (...)?

   Ans: 
   Modern Javascript a spread operator use kora hoy object ba array er element gulo k alada kora choriye dite.Eta rest operator hisabeo use kora hoy. Use case a etar nam kokhon spread operator abar kokhno rest operator bola hoy.

   keno etai use korbo?
   1. duita array k notun array te merge korte. 
   2. array copy kore notun array banate.
   3. object separate kore notun object banate.
   4. duita notun object banate.
   5. function a parameter nirdisto kintu argument jodi tar beshi hoy tobe extra argument gulo rest operator a diya dawa jay.


    ---------------------------------------------------Question-3:--------------------------------------------------------
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


     ---------------------------------------------------Question-4:--------------------------------------------------------
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

     
      ---------------------------------------------------Question-5:--------------------------------------------------------
      5️⃣ What are template literals?

      Ans:
      template literals holo Javascript er modern syntax. Er sign holo `` (backticks) bole. Purono string '' ba "" a code likha onek jahmel hoto sothik vabe space na dile code thikvabe output a dekhato na. Pore template literals a ei somossar somadhan hoy.

     template literals er subidha somuho
     1. er moddhe ${varibale} ei vabe variable expression likhae jay.
     2. multiple string sohoje likha jay.
     3. code choto o sundor hoy.
     4. dynamic vabe html toiri te valo kaj kore.