// ARRAYS

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years1 = new Array(1991, 1892, 2000, 2023);
console.log(years1);


console.log(friends[0]);  // Michael

console.log(friends.length);
console.log(friends[friends.length - 1]);  


friends[2] = 'Jay';
console.log(friends);  

///////////////////////////////////////////////////////////


const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 -1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);


/////////////////////////////////////////////////////////////////////


const friends = ['Michael', 'Steven', 'Peter'];


// PUSH method  - add element at the end of array

const newLegth = friends.push('Jay');
console.log(friends);
console.log(newLegth);


// UNSHIFT method - add element at the beggining of array

friends.unshift('John');
console.log(friends);

// POP method - remove elements from the end of array
friends.pop();
const popped = friends.pop();
 console.log(popped);
 console.log(friends);

// SHIFT method - remove firs element from the array

friends.shift();
console.log(friends);


// Verify the index of element in array

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


// Verify if the element exists in array

friends.push(23);
console.log(friends);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if(friends.includes('Steven')){
        console.log('You have a friend called Steven');
}





