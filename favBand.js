console.log('Hi, Bodhi!');
// Hi, Bodhi!
let favoriteBands = ['Smashing Pumpkins', 'White Stripes',
'Red Hot Chili Bands', 'Hum', 'Rolling Stones'];
console.log(favoriteBands);
// ['Smashing Pumpkins', 'White Stripes', 'Red Hot Chili Bands', 'Hum', 'Rolling Stones']
console.log(favoriteBands.includes('Smashing Pumpkins'));
// true
console.log(favoriteBands.includes('Journey'));
// false
let humInlet = favoriteBands.includes('Hum');
console.log(humInlet);
// true
console.log('-------------------------------------------');
console.log('-------------------------------------------');
console.log('-------------------------------------------');

const bandButton = document.querySelector('#favorite-band-button');
const bandInput1 = document.querySelector('#favorite-band');
const msg = document.querySelector('.msg');
const bandList = document.querySelector('#favorite-bands-list');

console.log(bandButton);

console.log(bandInput1);

console.log(msg);

console.log(bandList);

bandButton.addEventListener('click', onSubmit);

function onSubmit(e){

    if (bandInput1.value.trim() === '') {
        msg.innerHTML = 'Please Fill Out Form.';
    }
    else if (favoriteBands.includes(bandInput1.value)){
        msg.innerHTML = 'YEAH I LOVE THEM!';
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
        ${bandInput1.value}`));
        bandList.appendChild(li);

        // clear fields
        bandInput1.value = '';
    }
    else {
        msg.innerHTML = "Nah, they're pretty lame.";
        const li1 = document.createElement('li');
        li1.appendChild(document.createTextNode(`
        ${bandInput1.value}`));
        bandList.appendChild(li1);

        // clear fields
        bandInput1.value = '';
    }

}


