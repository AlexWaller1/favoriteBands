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
{firstWord: 'tony', lastWord: 'soprano'}];

console.log(twoWords);
console.log(twoWords[3].lastWord);
// gti
console.log(twoWords[4].lastWord);
// playstation
console.log(twoWords[4].lastWord.charAt(0).toUpperCase());
// P
console.log(twoWords[4].lastWord.replace('p', 'P'));
// Playstation



