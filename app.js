// console.log('sum');

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








// console.log('avg');    


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









// console.log('greaterThan');

// function greaterthan (first, second) {
//     if (first < second) {
//         return true;
//     }else{
//         return false;
//     }        
// }

// let answer = greaterthan(4, 5);
// console.log(answer);











// console.log('second largest');


// function secondlargest (items){
//     let biggest = 0;
//     for (let i = 0; i < items.length; i++) {         // if first item in the array is bigger than 
//       if(items[i] > biggest){

//                                                        // the next then move on. If not then start with the next number

//          }                    
//     }
// }

// let numbers = [77, 5, 9, 18]; 








// console.log('contains vowel');

// function containsvowel (items) {

// for(let i = 0; i < items.length; i++) {
//     if (items[i].match(/[a, e, i, o, u]/i)) {    // this means if all items in an 
//         return true;                             // array has an a, e, i, o, u, then display true 
// }else{
//     return false;
// } 
// }
// }


// let word = ['Landon'];

// let answer = containsvowel(word);
// console.log(answer);








console.log('longest word');

function find (sentence) {

let sentencesplit = sentence.split(" ");
let longestword = 0; 
let word = "";

for (let i = 0; i < sentencesplit.length; i++) {
    // if this is the longest weve seen so far, save it
    if (sentencesplit[i].length > longestword) {
        longestword = sentencesplit[i].length; 
        word = sentencesplit[i]; 
    }
}
return word;
}
 
let answer = find('What is the longest word?');
console.log(answer);
