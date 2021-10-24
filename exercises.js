// exercises
let numbers1 = [1 , 3, 5, 7, 9, 11, 13, 15];

let numbers2 = [2, 4, 6, 8, 10, 12, 14, 16];

let numbers3 = [37];

let testArray = [];

function maxMin(numsArray = testArray){
    if (numsArray.length == 0) console.log('Array is Empty.');
    if (numsArray.length == 1) console.log('Array only has 1 number');
    let max = numsArray[0];
    let min = numsArray[0];
    for (let i = 1; i < numsArray.length; i++){
        let currentNum = numsArray[i];
        if (currentNum > max){
            max = currentNum;
        }
        if (currentNum < min){
            min = currentNum;
        }

    }
    console.log(`The max number is ${max} and the
    min number is ${min}.`) ;
    
}

maxMin();
// Array is Empty.
// The max number is undefined and the min number
// is undefined

maxMin(numbers1);
// The max number is 15 and the min number is 1.
maxMin(numbers2);
// The max number is 16 and the min number is 2.

maxMin(numbers3);
// Array only has 1 number.
// The max number is 37 and the min number is 37
console.log('-----------------------------------');
console.log('-----------------------------------');

let voteCount1 = { upVotes: 37, downVotes: 42};
console.log(voteCount1);
// { upVotes: 37, downVotes: 44}
let voteCount2 = { upVotes: 24, downVotes: 26};

let voteCount3 = { upVotes: 9, downVotes: 5};

let voteCounter = (voteParams) => console.log(voteParams.upVotes - voteParams.downVotes);

voteCounter(voteCount1);
// -5
voteCounter(voteCount2);
// -2
voteCounter(voteCount3);
// 4

console.log('------------------------------------');
console.log('------------------------------------');

function fizzBuzzCount(num1 = 3, num2 = 9){
    for (let i = num1; i <= num2; i++){
        if (i % 5 == 0 && i % 3 == 0 ){
            console.log('FizzBuzz');
        }
        else if (i % 5 == 0){
            console.log('Fizz');
        }
        else if (i % 3 == 0){
            console.log('Buzz');
        }
        else
            console.log(i);
    }
}

fizzBuzzCount();
// Buzz
// 4
// Fizz
// Buzz
// 7
// 8
// Buzz

fizzBuzzCount(15, 20);
// FizzBuzz
// 16
// 17
// Buzz
// 19
// Fizz
console.log('----------------------------------');

let getRandom = (params1) => console.log(params1[Math.floor(Math.random() * params1.length)]);

getRandom(numbers1);
// will print random numbers1 element every time 
// console is loaded
getRandom(numbers2);
// will print random numbers2 element every time
// console is loaded
console.log('------------------------------------');
console.log('------------------------------------');