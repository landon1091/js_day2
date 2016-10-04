let _ = require('lodash');

//  console.log('sum 1');

// function add (items) {
// let sum = 0;

// for (let i = 0; i < items.length; i++) {
// sum = sum + items[i].number1 + items[i].number2;
// }

// return sum;
// }

// let input = [];
// input.push({
//     number1: 357,
//     number2: 289,
// });


// let answer = add(input);
// console.log(answer);








// console.log('avg 2');    


// function avg (items) {
// let end = 0;

// for (let i = 0; i < items.length; i++) {
//     end = end + items[i] / items.length; // items[i] means all the items in the array
   
// }
// return end;
// }


// let numbers = [6, 5, 13];

// let answer2 = avg(numbers);
// console.log(answer);









// console.log('greaterThan 3');

// function greaterthan (first, second) {
//     if (first < second) {
//         return true;
//     }else{
//         return false;
//     }        
// }

// let answer = greaterthan(4, 5);
// console.log(answer);











// console.log('second largest 4');


// function secondlargest (items){
//     let biggest = 0;
//     for (let i = 0; i < items.length; i++) {         // if first item in the array is bigger than 
//       if(items[i] > biggest){

//                                                        // the next then move on. If not then start with the next number

//          }                    
//     }
// }

// let numbers = [77, 5, 9, 18]; 








// console.log('contains vowel 5');

// function containsvowel (items) {

// for(let i = 0; i < items.length; i++) {
//     if (items[i].match(/[a, e, i, o, u]/i)) {    // this means if all items in an 
//         return true;                             // array has an a, e, i, o, u, then display true 
// }else{
//     return false;
// } 
// }
// }


// let word = ['x'];

// let answer = containsvowel(word);
// console.log(answer);








// console.log('longest word 7');

// function find (sentence) {

// let sentencesplit = sentence.split(" ");   //turning it into a number and then that number into a word.
// let longestword = 0; 
// let word = "";

// for (let i = 0; i < sentencesplit.length; i++) {
//     // if this is the longest weve seen so far, save it
//     if (sentencesplit[i].length > longestword) {
//         longestword = sentencesplit[i].length; 
//         word = sentencesplit[i]; 
//     }
// }
// return word;
// }
 
// let answer = find('What is the longest word?');
// console.log(answer);








// console.log('multiples-14')

// let x = _.range(0,101)

// function multiples(test){
// console.log(test.length) 
// }
// console.log(multiples(x));






// console.log('divisors 16')

// let numb3r = 60;


//         function divisors1 (items) {
//             let x = 0;
//             // let y = [];
//                 if(items % 2 === 0) {
//                     x = x + items / 2;
//                     // y.push(x)[0];
//                 }
                
//             return x;
//         }
//                     function divisors2 (items) {
//                     let x1 = 0;
//                     // let y = [];
//                         if(items % 3 === 0) {
//                             x1 = x1 + items / 3;
//                             // y.push(x);
//                         }
//                     return x1;
//                     }


//                             function divisors3 (items) {
//                             let x2 = 0;
//                             // let y = [];
//                                 if(items % 4 === 0) {
//                                     x2 = x2 + items / 4;
//                                     // y.push(x);
//                                 }
//                             return x2;
//                             }
                
//                                     function divisors4 (items) {
//                                     let x3 = 0;
//                                     // let y = [];
//                                         if(items % 5 === 0) {
//                                             x3 = x3 + items / 5;
//                                             // y.push(x);
//                                         }
//                                     return x3;
//                                     }
//                                             function divisors5 (items) {
//                                             let x4 = 0;
//                                             // let y = [];
//                                                 if(items % 6 === 0) {
//                                                     x4 = x4 + items / 6;
//                                                     // y.push(x);
//                                                 }
//                                             return x4;
//                                             }
//                                                     function divisors6 (items) {
//                                                     let x5 = 0;
//                                                     // let y = [];
//                                                         if(items % 7 === 0) {
//                                                             x5 = x5 + items / 7;
//                                                             // y.push(x);
//                                                         }
//                                                     return x5;
//                                                     }
//                                                             function divisors7 (items) {
//                                                             let x6 = 0;
//                                                             // let y = [];
//                                                                 if(items % 8 === 0) {
//                                                                     x6 = x6 + items / 8;
//                                                                     // y.push(x);
//                                                                 }
//                                                             return x6;
//                                                             }
//                                                                     function divisors8 (items) {
//                                                                     let x7 = 0;
//                                                                     // let y = [];
//                                                                         if(items % 9 === 0) {
//                                                                             x7 = x7 + items / 9;
//                                                                             // y.push(x);
//                                                                         }
//                                                                     return x7;
//                                                                     }

// let answer1 = divisors1(numb3r);
// let answer2 = divisors2(numb3r);
// let answer3 = divisors3(numb3r);
// let answer4 = divisors4(numb3r);
// let answer5 = divisors5(numb3r);
// let answer6 = divisors6(numb3r);
// let answer7 = divisors7(numb3r);
// let answer8 = divisors8(numb3r);

// let array = [];
// array.push(answer1);
// array.push(answer2);
// array.push(answer3);
// array.push(answer4);
// array.push(answer5);
// array.push(answer6);
// array.push(answer7);
// array.push(answer8);
// // math 
// console.log(array); 









// console.log('weave 11'); 
// function weave(x, y) {
//     x = x.split("");
    
//     for (let i = y - 1; i < x.length; i = i + y) {
//         x[i] = "x"; 
//     }
//     return x;
// }
// console.log(weave("spaghetti jhgjgjh jgygyug", 5));






// console.log('Find 20')    // two parameters, first one is an array. second one is just a number
//                        // Make a fucntion that finds the number in the array and displays its index.
// let array = [];
// let numb3r = 2;

// function find(array, numb3r) {

// }








// console.log('Bonus 12');

// let total = 10.88;
// function bonus (amount){
// let x = (amount * .2); 
// amount = amount + x;

// return Math.ceil(amount);
// }
// let answer = bonus(total);
// console.log(answer)