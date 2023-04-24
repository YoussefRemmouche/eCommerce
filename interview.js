// exercise 3
/*
 * Q3.1.1: What is closure?
 * Q3.1.2: What happens to the variables declared inside a
 * function after it called?
 */

/*
 * Q3.2: What will be console output and why?
 */
function sumWithFive(a) {
  let num = 5;
  return a + num;
}

/* Uncomment when Q3.2 answered */

// console.log(sumWithFive(2));
// console.log(num);

/*
 * Q3.3: What will be console output and why?
 */

function createIteration(array) {
  let i = 0;
  return function iterateThrough() {
    let element = array[i];
    i++;
    return element;
  };
}

const iterateFunction = createIteration([1, 2, 3]);

/* Uncomment when Q3.3 answered */

// console.log(iterateFunction());
// console.log(iterateFunction());
// console.log(iterateFunction());

/*
 * Bonus* Q3.4: Where does array and i variables stored?
 */

// // exercise 6
// /*
//  * Q6: write function which outputs 6 to the console at the end.
//  */

// const one = () => {};

// const two = () => {};

// const three = (cb) => {};

// const plus = () => {};

// console.log(one(plus(two(plus(three())))));

// // exercise 7
// console.log(a);

// var a = 2;

// /*
//  * Q7.1: What is Hoisting?
//  * Q7.2: What will be console output and why?
//  * Q7.3: What is Temporal Dead Zone?
//  */

// /*
//  * Variables
//  */
// console.log(a1);
// var a1 = 5;

// console.log(a2);
// let a2 = 5;

// console.log(a3);
// const a3 = 5;

// /*
//  * Functions
//  */

// test1();

// function test1() {
//   console.log("1");
// }

// test2();

// let test2 = function () {
//   console.log("1");
// };

// test3();

// var test3 = function () {
//   console.log("1");
// };
