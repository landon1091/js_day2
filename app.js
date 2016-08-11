console.log('sum');



function add (items) {
let sum = 0;

for (let i = 0; i < items.length; i++) {
sum = sum + items[i].number1 + items[i].number2;
}

return sum;
}

let input = [];
input.push({
    number1: 357,
    number2: 289,
});


let answer = add(input);
console.log(answer);


