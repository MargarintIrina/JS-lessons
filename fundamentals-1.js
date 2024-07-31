/*let js = 'amazing';
console.log(40+820-10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);*/







/*true;
console.log(true);

let javacriptIsFun = true; // new variable
console.log(javacriptIsFun);

console.log(typeof true);  // boolean
console.log(typeof javacriptIsFun);  // boolean
console.log(typeof 23);  // number
console.log(typeof 'Jonas');  // string

javacriptIsFun = 'YES!'  // new value for existing variable;

let year;
console.log(year);
console.log(typeof year);

year =1991;
console.log(typeof year);

console.log(typeof null);*/






/*let age =30;
age = 31;


const birthYear = 1991;
birthYear = 1991;

var job = 'programer';
job= 'teacher';*/

/*
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3 );

const firstName = 'Jonas';
const lastName = 'Schmedmann';
console.log(firstName + ' ' + lastName);


// Assignment operators
let x = 10 + 5;  // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1
x --; // x = x -1
x--;
console.log(x);


// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);*/

/*
// Challenge 1

let markMass = 95;
let markHeight = 1.88;

markBMI = markMass / markHeight ** 2;


let johnMass = 85;
let johnHeight = 1.76;

johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

*/


/*

const firstName = 'Irina';
const job = 'programer';
const birthYear = 1991;
const year = 2037;

const irina = "i'm " + firstName + ', a ' + (year - birthYear)  + " years old " + job + '!';
console.log(irina);

const irinaNew = `i'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(irinaNew);

console.log(`Just a regular string...`);

console.log('string with\n\
multiple\n\
lines');

console.log(`String
multiple
lines`);*/



/*
// IF

const age = 17;
const isOldEnough = age >= 18;

if(isOldEnough){
console.log('Sarah can start driving lisence');
}else{
        const yearsLeft = 18 - age;
console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

let century;
const birthYear = 1991;
if(birthYear <= 2000){
        century = 20;
}else{
        century = 21;
}

console.log(century);*/


/*
// Challenge 2


let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);


if(markBMI > johnBMI){
        console.log("John's BMI is higher than Mark's!");
    
}else{
     
        console.log("Mark's BMI is higher than John's!");
};

if(markBMI > johnBMI){
     
        console.log(`John's BMI (${markBMI}) is higher than Mark's (${johnBMI})!`)

}else{
        console.log(`Mark's BMI (${johnBMI}) is higher than John's (${markBMI})!`)  

}*/
/*
// Type of conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear );
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type of coertion
console.log('i am  + 23 + years old');
console.log('i am  + "23" + years old');
console.log('22' - '10' -3);
console.log('23' / '2');

let n = '1' + 1; // 11
n = n - 1;       // 11 - 1 = 10
console.log(n);
 
// 5 falsy values : 0, '', undifiend, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 0;
if(money){
        console.log("don't spend it all");
}else{
        console.log("you should get a job");
}

let height;
if(height){
        console.log("yay! height defined");
}else{
        console.log("height is undefined");
}
*/
/*

const age = 18;
if(age === 18) console.log("you just became an adult"); // strict

if(age == 18) console.log("you just became an adult");  // loose


const favorite = prompt("whta's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23){
        console.log('cool! 23 is an amazing number!')
}else if (favorite == 7){
        console.log('7 is also a cool number ')
}else if (favorite == 9){
        console.log('9 is also a cool number')
}else{
       console.log('number is not 23 or 7 or 9')
}

if(favorite != 23) console.log('why not 23?');*/


/*
const hasDriversLicense = true;   // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;


// if(shouldDrive){
//         console.log('Sarah is able to drive');

// }else{
//         console.log('Someone else should drive')
// }


const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
        console.log('Sarah is able to drive');

}else{
        console.log('Someone else should drive')
}
*/

/*

// Chalange 3


const averageDolfins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;  


// const averageDolfins = (97 + 112 + 101) /3;
// const averageKoalas = (109 + 95 +123) / 3;

// const averageDolfins = (97 + 112 + 101) /3;
// const averageKoalas = (109 + 95 +106) / 3;

console.log(averageDolfins, averageKoalas);

if(averageDolfins > averageKoalas && averageDolfins >= 100){
        console.log('Dolfins are the winers!');
}else if( averageDolfins < averageKoalas && averageKoalas >=100){
        console.log('Koalas are the winers!');
}else if(averageDolfins == averageKoalas && averageKoalas >=100 && averageDolfins >= 100 ){
        console.log("it's a draw!");

}else{
        console.log('nobody won!');
}*/





/*

const day = 'monday';

switch(day){
        case 'monday':  //day === monday
                console.log('Plan course structure');
                console.log('Go to coding meetup');
                break;
        case 'tuesday':
                console.log('Prepare theory videos');
                break;
        case 'wednesday':
        case 'thirsday':
                console.log('Wroite code example');
                break;
        case 'friday':
                console.log('Record videos');
        case 'saturday':         
        case 'sunday':
                console.log('Enjoy the weekend');
                break;
        default:
                console.log('Not a valid day');
}



if(day === 'monday'){
        console.log('Plan course structure');
        console.log('Go to coding meetup');
}else if(day === 'tuesday'){
        console.log('Prepare theory videos');
}else if(day === 'wednesday' || day === 'thursday'){
        console.log('Wroite code example');
}else if(day === 'friday'){
        console.log('Record videos');
}else if(day === 'saturday' || day === 'sunday'){
        console.log('Enjoy the weekend');
}else{
        console.log('Not a valid day');
}*/

/*
const age = 20;

// age >=18 ? console.log('I like to drink wine'):
// console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18){
        drink2 = 'wine';
}else {
        drink2 = 'water';
}

console.log(drink2);

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);*/


/*

// Challenge 4

// let bill=275;
// let tip;

// if(bill >= 50 && bill<=300){
//         tip = bill * 0.15;
// }else{
//         tip = bill * 0.20; 
// }

// let total = bill + tip;
// console.log(bill, tip, total);
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`);


const bill = 40;

const tip= bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.20;
const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`);

*/


