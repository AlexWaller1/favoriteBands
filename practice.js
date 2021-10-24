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

