// function counter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// const increment = counter();

// console.log(increment());
// console.log(increment());
// console.log(increment());


// function outer() {
//     let outerVar = "i am in outer scope";

//     function inner() {
//         console.log(outerVar);
//         outerVar = "updated in innervar";
//     }
//     return inner;
// }
// const closure1 = outer();
// // console.log(closure());
// closure1();
// closure1();

//Closures allow a function to keep variables hidden and only accessible within that function.
//  This is often used when creating modules to protect certain data from being accessed or modified by other parts of the program.


/*Closures and IIFE
IIFEs (Immediately Invoked Function Expressions) use closures to hide data inside the function. This helps keep certain information private and prevents
 it from being accessed outside the function, allowing you to create self-contained modules.*/

function Person(name) {
    this.name = name;

    this.sayName = function() {
        console.log(this.name);

    };

    setTimeout(function() {
        console.log(this.name);
    }.bind(this), 1000);
}
const G = new Person("GFG");
G.sayName();