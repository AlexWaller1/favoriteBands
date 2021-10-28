// practice
console.log('Hi, Bodhi!!!');
// Hi, Bodhi!!!
let nums1 = [1, 3, 5, 2];

let dachshunds = ['Beezer', 'Chipper', 'Bodhi',
 'Jake', 'Star'];

if (nums1[0] == 1){
    let max = 0;
    for (let hh1 = 0; hh1 < nums1.length; hh1++){
         max = Math.max(0, nums1[hh1]);
    }
    console.log(max);
    // 2 so we don't want to use math.max
}

getVoteCount1 = { upVotes: 37, downVotes: 44 };

getVoteCount2 = { upVotes: 104, downVotes: 34};

console.log(getVoteCount1.upVotes);
// 37
console.log(getVoteCount1.downVotes);
// 44
voteDifference1 = getVoteCount1.upVotes - getVoteCount1.downVotes;
console.log(voteDifference1);
// -7
voteDifference2 = getVoteCount2.upVotes - getVoteCount2.downVotes;
console.log(voteDifference2);
// 70
console.log(Math.random());
// .1387
console.log(Math.random());

// console.log(nums1.random());
// can't use random() method on this array

function getRandom(array2) {
    return array2[Math.floor((Math.random() * array2.length))];
}

console.log(getRandom(nums1));
// generates random number from array
console.log(getRandom(dachshunds));
// will generate different dachshund name each time

// the Math.floor() function returns the largest
// integer less than or equal to a given number.
console.log(9.65);
// 9.65
console.log(Math.floor(9.65));
// 9
console.log(12.34);
// 12.34
// Math.floor() will always round an integer down
console.log(Math.random() * 10);
// Math.random() on its own will return decimal 
// number less than 1
// let's say you multiply Math.random() by 9
// then you will get any decimal number between
// 0 and 9
// given that the number always rounds down
// you do not have to worry about being out of
// scope for the array.
// let's say the length of the array is ten
// so the array indexes are 0 to 9
// the number generated will always be less than 10
// and even it is 9.8 or 9.7, etc. 
// It will always round down to 9, so you'll
// always be within scope
console.log(Math.floor(9.76));
// 9
console.log(Math.random() * 37);
// 16.17
// 11.03
// 35.62
let officeMax = ['ballpoint pens', 'stapler', 'pen holder',
'pencils', 'pencil sharpener', 'erasers', 'printer', 'usb drive',
'blank CDs', 'file folder', 'briefcase', 'backpack', 'printer',
'scanner', 'calculator'];

console.log(officeMax);
/* 

['ballpoint pens', 'stapler', 'pen holder', 'pencils', 
'pencil sharpener', 'erasers', 'printer', 'usb drive', 
'blank CDs', 'file folder', 'briefcase', 'backpack', 
'printer', 'scanner', 'calculator']

*/

console.log(officeMax.length);
// 15

if (officeMax[2] === 'pen holder'){
    let office1 = officeMax.filter(function(office2){
        return office2 == 'scanner';
    }).map(function(office3){
        return office3;
    })
    console.log(office1);
}
// ['scanner']

let officeChair = 'Office Chair';
console.log(officeChair);
officeChair = officeChair.split('');
console.log(officeChair);
// ['O', 'f', 'f', 'i', 'c', 'e', ' ', 'C', 'h', 'a', 'i', 'r']
officeChair = officeChair.reverse();
console.log(officeChair);
// ['r', 'i', 'a', 'h', 'C', ' ', 'e', 'c', 'i', 'f', 'f', 'O']
officeChair = officeChair.join('');
console.log(officeChair);
// riahC eciffO
let testInt = '37'
parseInt(testInt);
console.log(testInt);
console.log(parseInt(testInt));
// 37
console.log(Math.random() * 5);
// 4.61
// 4.82
// 2.27
// 1.13

function reverseStringsArray(array3){
    for (let hh1 = 0; hh1 < array3.length; hh1++){
        let rString = array3[hh1];
        // all elements of given array parameter
        rString = rString.split('');
        rstring = rString.reverse();
        rString = rString.join('');
        console.log(rString);
    }
}

reverseStringsArray(officeMax);
/*

 snep tniopllab
 relpats
 redloh nep
 slicnep
 reneprahs licnep
 sresare
 retnirp
 evird bsu
 sDC knalb
 redlof elif
 esacfeirb
 kcapkcab
 retnirp
 rennacs
 rotaluclac


*/

console.log(officeMax);
console.log(officeMax[0]);
// ballpoint pens
console.log(officeMax[6]);
// printer

function reverseNumberArray(array4){
    if (array4.length == 0) console.log('Array is Empty.');
    // edge case
    let rNumber = 0;
    for (let hh1 = 0; hh1 < array4.length; hh1++){
        rNumber = array4[hh1];
        rNumber = rNumber.toString();
        rNumber = rNumber.split('');
        rNumber = rNumber.reverse();
        rNumber = rNumber.join('');
        console.log(parseInt(rNumber));
    }
}

let numsArray4 = [34, 56, 98, 76, 54];

let numsArray5 = [90, -12, 20, 210, -20, 37];

reverseNumberArray(numsArray4);
// 43
// 65
// 89
// 67
// 45
console.log('-----------------------------------------');

reverseNumberArray(numsArray5);
// 9
// 21
// 2
// 12
// 2
// 73
console.log('------------------------------------------');

console.log(Math.floor(37.94));
// 37
console.log(Math.round(37.6));
// 38
console.log('-----------------------------------------');
let decimalNums = [34.5, 27.49, 24.87, 96.12, 23.32];

function roundNum(arrayParam){
    let rNumber = 0;
    let hh1 = 0;
    for (; hh1 < arrayParam.length; hh1++){
        rNumber = arrayParam[hh1];
        console.log(Math.round(rNumber));
    }
}

roundNum(decimalNums);
// 35
// 27
// 25
// 96
// 23
console.log('-----------------------------------------');

console.log(isNaN(37));
// false, the function is asking if 37 is not a number
// since it is, the function will return false
console.log(isNaN('Office Max'));
// true
let isNotNumber = (input1 = 37) => console.log(isNaN(input1));

isNotNumber();
// false
isNotNumber('Play Station 5');
// true
isNotNumber('Rogue Trooper');
// true
isNotNumber(34.76);
// false
isNotNumber(.549);
// false

let twoWords = [{firstWord: 'pencil', lastWord: 'sharpener'},
{firstWord: 'dodge', lastWord: 'camry'},
{firstWord: 'chevy', lastWord: 'camaro'},
{firstWord: 'volkswagen', lastWord: 'gti'},
{firstWord: 'sony', lastWord: 'playstation'},
{firstWord: 'tony', lastWord: 'soprano'},
{firstWord: 'sony', lastWord: 'boombox'}];

console.log(twoWords);
console.log(twoWords[3].lastWord);
// gti
console.log(twoWords[4].lastWord);
// playstation
console.log(twoWords[4].lastWord.charAt(0).toUpperCase());
// P
console.log(twoWords[4].lastWord.replace('p', 'P'));
// Playstation
console.log(twoWords[4].lastWord.replace(twoWords[4].lastWord.charAt(0), 
twoWords[4].lastWord.charAt(0).toUpperCase()));
// Playstation
let fr1 = 'crash';
console.log(fr1.concat('Bandicoot'));
console.log('-------------------------------------------');

function camelCase(array54){
    if (array54.length == 0) console.log('Array is Empty');
    let hh1 = 0;
    let a1 = '';
    let a2 = '';
    for (; hh1 < array54.length; hh1++){
        a1 = array54[hh1];
      //  console.log(a1.firstWord.concat(a1.lastWord));
        a2 = array54[hh1].firstWord;
        
        a1 = a1.lastWord.replace(a1.lastWord.charAt(0),
        a1.lastWord.charAt(0).toUpperCase());
       // a1 = a1.firstWord.concat(a1.lastWord);
        
        console.log(a2.concat(a1));

        
    }
}

camelCase(twoWords);
// pencilSharpener
// dodgeCamry
// chevyCamaro
// volkswagenGti
// sonyPlaystation
// tonySoprano

console.log(twoWords);
console.log(twoWords[5]);
// {firstWord: 'tony', lastWord: 'soprano'}

if (twoWords[5].firstWord == 'tony'){
    let tony1 = twoWords.filter(function(tony2){
        return tony2.firstWord == 'tony';
    }).map(function(tony3){
        return tony3;
    }) 
    console.log(tony1);
    // [{firstWord: 'tony', lastWord: 'soprano'}]
}

console.log(twoWords[4]);
// {firstWord: 'sony', lastWord: 'playstation'}

if (twoWords[4].lastWord == 'playstation'){
    let sony1 = twoWords.filter(function(sony2){
        return sony2.firstWord == 'sony';
    }).map(function(sony3){
        return sony3;
    })
    console.log(sony1);
    /* 
    
    {firstWord: 'sony', lastWord: 'playstation'}
    {firstWord: 'sony', lastWord: 'boombox'}
    
    */
}

const robots = ['Hank-44', 'Warren-21', 'Mellon-Tech',
'Eggplant-Head'];

if (robots[2] == 'Mellon-Tech'){
    let r1 = 0;
    while (r1 < robots.length){
        console.log(robots[r1]);
        r1++;
    }
    // Hank-44
    // Warren-21
    // Mellon-Tech
    // Eggplant-Head
}

if (robots[1] == 'Warren-21'){
    let r1 = 0;
    do {
        console.log(robots[r1]);
        r1++;
    }while(r1 < robots.length);
    // Hank-44
    // Warren-21
    // Mellon-Tech
    // Eggplant-Head

}

if (robots[2] == 'Mellon-Tech'){
    console.log(Math.floor(9.8));
    // 9
    console.log(Math.round(9.87));
    // 10
    console.log(Math.random() * 37);
    // 31.23
    // 36.95
    // 19.10
    // 4.34
}

const randObjects = [37, '!', '#', null, 
undefined, 65, '96', 9];



if (robots[0] == 'Hank-44') {
    let hh1 = 0;
    for (; hh1 < randObjects.length; hh1++){
        let rObject = randObjects[hh1];
        if (isNaN(rObject) === true){
            console.log(`${rObject} is not a number.`);
        }
        else 
           console.log(`${rObject} is a number.`);
    }
    // 37 is a number
    // ! is not a number
    // # is not a number
    // null is a number ???
    // undefined is not a number
    // 65 is a number
    // 96 is a number
    // 9 is a number
}

console.log(isNaN(null));
// false

let NaN1 = (object3) => console.log(isNaN(object3));

NaN1();
// true
NaN1(undefined);
// true
console.log(isNaN('!'));
// true
console.log(36);
// 36
NaN1(37);
// false
console.log('Hello');

let y1 = '';
console.log(y1);
// blank row in console
y1 = 37;
console.log(y1);
// 37
console.log(robots.length);
// 4
if (robots.length == 4){
    let hh1 = 37;
    let sum = 0;
    console.log(hh1);
    // 37 as a number
    hh1 = hh1.toString();
    console.log(hh1);
    // 37 as a string
    hh1 = hh1.split('');
    console.log(hh1);
    // ['3', '7']
    for (let i = 0; i < hh1.length; i++){
        let num1 = hh1[i];
        num1 = parseInt(num1);
        sum = sum + num1;
        

    }
    console.log(sum);
    // 10

}








function armStrongNumber(input2 = 371){
    let string1 = '';
    string1 = input2;
    console.log(input2);
    string1 = string1.toString();
    console.log(string1);
    string2 = string1.split('');
    console.log(string2);
    let rString = '';
    
    let sum = 0;
    for (let i = 0; i < string2.length; i++){
        let newNum = string2[i];
        
        newnum = parseInt(newNum);
        console.log(newNum);
        sum = sum + Math.pow(newNum, 3);
        if (sum == input2){
            rString = `${sum} is an armstrong number.`;
        }
        else  
            rString = `${sum} is not an armstrong number.`;

    }
    console.log(rString);
}

armStrongNumber();
// 371 is an armstrong number
armStrongNumber(9);
// 729 is not an arstrong number

console.log(81 * 9);
// 729
armStrongNumber(153);
// 153 is an armstrong number
armStrongNumber(407);
// 407 is an armstrong number

function isPrimeNumber(num4 = 3) {
    if (num4 < 2) return ('Number out of range');
    if (num4 == 2) return ('2 is a prime number.');
    let hh1 = 2;
    let primeString = '';
    for (; hh1 < num4; hh1++){
        if (num4 % hh1 == 0) return primeString = (`${num4} is not a
        prime number.`);
        else
          return primeString = (`${num4} is a prime number.`);
    }
    
}

console.log(isPrimeNumber());
// 3 is a prime number
isPrimeNumber(2);
// 2 is a prime number
console.log(isPrimeNumber(4));
// 4 is not a prime number
console.log(isPrimeNumber(5));
// 5 is prime number
console.log(isPrimeNumber(6));
// 6 is not a prime number
console.log(isPrimeNumber(7));
// 7 is prime number
console.log(isPrimeNumber(1));
// Number out of range
console.log(isPrimeNumber(23));
// 23 is a prime number

function addDigits(num6 = 37) {
    numString = num6.toString();
    // number converted to string
    numString = numString.split('');
    // string converted to array of its letters
    let sum = 0;
    let hh1 = 0;
    for (; hh1 < numString.length; hh1++){
        let newNum1 = numString[hh1];
        newNum1 = parseInt(newNum1);
        sum = sum + newNum1;
    }
    console.log(sum);
}

addDigits();
// 10
addDigits(100);
// 1
addDigits(108);
// 9
addDigits(222);
// 6

console.log(Math.PI);

// circumference of a circle is 2 PI r

let circumference = (radius = 5) => console.log(2 * Math.PI * radius);

circumference(6);
// 37.7

circumference();
// 31.42

circumference(9);
// 56.55

if (robots[3] == 'Eggplant-Head'){
    let sampleNum = 28;
    for (let i = 1; i < sampleNum; i++){
        if (sampleNum % i == 0){
            console.log(i);
            // 1
            // 2
            // 4
            // 7
            // 14
            
        }
    }
}

function perfectNumber(num7){
    let sum = 0;
    let divisibles = 0;
    for (let i = 1; i < num7; i++){
        if (num7 % i == 0){
             
             sum = sum + i;
            
            }
    }
    if (sum == num7){
        return `${num7} is a perfect number.`;
    }
    else
        return `${num7} is not a perfect number.`;

}

console.log(perfectNumber(28));
// 28 is a perfect number
console.log(perfectNumber(9));
// 9 is not a perfect number
console.log(perfectNumber(6));
// 6 is a perfect number
console.log(perfectNumber(496));
// 496 is a perfect number
console.log(perfectNumber(8128));
// 8128 is a perfect number

console.log('------------------------------------------');
console.log('-------------------------------------------');

console.log(robots[2].slice('-'));
// Mellon-Tech
console.log(robots[2]);
// Mellon-Tech
console.log(robots[2].fontsize());
// size="undefined"

const nickToons = [{
    name: 'Dog',
    homeTown: 'Nearburg',
    show: 'CatDog'
}, {
    name: 'Cat',
    homeTown: 'Nearburg',
    show: 'CatDog'
}, {
    name: 'Rocko',
    homeTown: 'O-Town',
    show: "Rocko's Modern Life"
}, {
    name: 'Heffer',
    homeTown: 'O-Town',
    show: "Rocko's Modern Life"
}, {
    name: 'Filburt',
    homeTown: 'O-Town',
    show: "Rocko's Modern Life"
}, {
    name: 'Raymundo',
    homeTown: 'Ocean Shores',
    show: 'Rocket Power'
}, {
    name: 'Otto Rocket',
    homeTown: 'Ocean Shores',
    show: 'Rocket Power'
}, {
    name: 'Reggie Rocket',
    homeTown: 'Ocean Shores',
    show: 'Rocket Power'
}, {
    name: 'Spongebob Squarepants',
    homeTown: 'Bikini Bottom',
    show: 'Spongebob Squarepants'
}, {
    name: 'Patrick Star',
    homeTown: 'Bikini Bottom',
    show: 'Spongebob Squarepants'
}, {
    name: 'Dagget',
    homeTown: 'Wayouttatown',
    show: 'The Angry Beavers'
}, {
    name: 'Norbert',
    homeTown: 'Wayouttatown',
    show: 'The Angry Beavers'
}]

console.log(nickToons.indexOf('Norbert'));
// -1
console.log(nickToons);

if (nickToons[11].name == 'Norbert'){
    console.log('Hi, Norbert!');
    for (let hh1 = 0; hh1 < nickToons.length; hh1++){
        let name37 = nickToons[hh1].name;
        console.log(name37);
        // Dog
        // Cat
        // Rocko
        // Heffer
        // Filburt
        // Raymundo
        // Otto Rocket
        // Reggie Rocket
        // Spongebob Squarepants
        // Patrick Star
        // Dagget
        // Norbert
    }
}

if (nickToons[10].name == 'Dagget'){
    let toon1 = nickToons.filter(function(toon2){
        return toon2.homeTown == 'Ocean Shores';
    }).map(function(toon3){
        return toon3.name;
    })
    console.log(toon1);
    // ['Raymundo', 'Otto Rocket', 'Reggie Rocket']
}

console.log(officeMax);
// ['ballpoint pens', 'stapler', 'pen holder', 'pencils', 'pencil sharpener', 'erasers', 'printer', 'usb drive', 'blank CDs', 'file folder', 'briefcase', 'backpack', 'printer', 'scanner', 'calculator']
console.log(typeof(officeMax[3]));
// string

console.log(officeMax[4] == String);
// false

function wholeNumberSquareRoot(num1 = 4){
    rString = '';
    if (num1 % Math.sqrt(num1) == 0){
        rString = `${num1} has a whole number for a 
        square root.`;
    }
    else {
        rString = `${num1} does not have a whole number
        for a square root.`;
    }
    console.log(rString);
}

wholeNumberSquareRoot();
// 4 has a whole number for a square root

console.log(officeMax[6]);
// printer
let squareRootTest = [1, 2, 3, 4, 5, 6];

if (officeMax[6] == 'printer'){
    let hh1 = 0;
    let rString = '';
    for(; hh1 < squareRootTest.length; hh1++){
        rString = wholeNumberSquareRoot(squareRootTest[hh1]);
        console.log(rString);
    }
}

wholeNumberSquareRoot(81);
// 81 has a whole number for a square root
wholeNumberSquareRoot(121);
// 121 has a whole number for a square root
function evenOrOddNumber(num1 = 10){
    rString = '';
    if (num1 % 2 == 0){
        rString = `${num1} is an even number.`;
    }
    else {
        rString = `${num1} is an odd number`;
    }
    console.log(rString);
}

evenOrOddNumber();
// 10 is an even number
evenOrOddNumber(37);
// 37 is an odd number
evenOrOddNumber(9);
// 9 is an odd number
console.log(officeMax[10]);
// briefcase
console.log(officeMax[11]);
// backpack
console.log(officeMax[12]);
// printer
console.log(officeMax[13]);
// scanner
console.log(officeMax[13].indexOf('scan'));
// 0

const timberTron = ['Timber-Tron', 'Timber::Git', 'Timber_Io'];

function longestCommonPrefix(prefixArr){
    if (prefixArr.length == 0) console.log('Array is Empty');
    // edge case in the situation that array has no elements
    let prefix = prefixArr[0];
    // first array element will be compared to rest of
    // elements
    for (let i = 1; i < prefixArr.length; i++){
        while (prefixArr[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length == 0) console.log('no common prefix');
        }
    }
    console.log(prefix);
}

longestCommonPrefix(timberTron);
// Timber


console.log(timberTron[0]);
// Timber-Tron
let testString = '';
console.log(testString.concat('a'));
// a
console.log(timberTron[0].charAt(0) == timberTron[1].charAt(0));
// true
console.log(robots[2].charAt(robots[2].length - 1));
// h




const suffixWords = ['Wisconsinite', 'Kryptonite', 'prerequisite',
'infinite', 'indefinite', 'opposite'];

if (timberTron[0] == 'Timber-Tron'){
    let suffix = suffixWords[0];
    let index1 = suffix.length - 1;
    let rString = '';
    let i = 1;
    for (; i < suffixWords.length; i++){
        let fixString = suffixWords[i];
        let index2 = fixString.length - 1;
        while (suffix.charAt(index1--) == fixString.charAt(index2--)){
               rString = rString.concat(suffix.charAt(index1--));
               console.log(rString);


        }
    }
    console.log(rString);
   
}

function reverseString(string1){
    string1 = string1.split('');
    string1 = string1.reverse();
    string1 = string1.join('');
    return string1;
   
}

console.log(reverseString(robots[2]));
// hceT-nolleM
console.log(reverseString('robot'));
// tobor

let batmanBeyond = 'Batman Beyond';
console.log(typeof(batmanBeyond));
// string
batmanBeyond = batmanBeyond.split('');
console.log(typeof(batmanBeyond));
// object
batmanBeyond = batmanBeyond.reverse();
console.log(batmanBeyond);
// ['d', 'n', 'o', 'y', 'e', 'B', ' ', 'n', 'a', 'm', 't', 'a', 'B']
console.log(typeof(batmanBeyond));
// object
batmanBeyond = batmanBeyond.join('');
console.log(batmanBeyond);
// dnoyeB namtaB
console.log(typeof(batmanBeyond));
// string

function longCommonSuffixTest2(string){
    string = reverseString(string);
    return string;
    

}

console.log(longCommonSuffixTest2('Flash'));
// hsalF

function longestommonSuffix(jsArray){
    if (jsArray.length == 0) return 'Array is Empty';
    prefix = jsArray[0];
    // will compare rest of array elements to prefix
    suffix = reverseString(prefix);
    // have to reverse since we're testing for a suffix
    for (let i = 1; i < jsArray.length; i++){
        let jsString = jsArray[i];
        jsString = reverseString(jsString);
        while (jsString.indexOf(suffix) != 0){
            suffix = suffix.substring(0, suffix.length - 1);
            if (suffix.length == 0) return 'no common suffix';
        }
    }
    suffix = reverseString(suffix);
    return suffix;
    
    
}

console.log(longestommonSuffix(suffixWords));
// ite
console.log(longestommonSuffix(robots));
// no common suffix
console.log(longestommonSuffix(timberTron));
// no common suffix

let getRandom2 = (array5) => array5[Math.floor(Math.random() * array5.length )];

console.log(getRandom2(robots));
// Eggplant-head
// Warren-21
// Hank-44
// Mellon-Tech
// Eggplant-Head
// Warren-21
// Mellon-Tech
// Hank-44
// Mellon-Tech
// Hank-44
































