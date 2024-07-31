'use strict';
/*let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');*/

// const private = 543; 
// const interface = 'audio';


/*


//FUNCTIONS

 function logger(){
        console.log('my name is jonas');
 }


// calling  / running / invoking the function
 logger();

 function fruitProcessor(apples, oranges){
        console.log(apples,oranges);
        const juice = `Juice with ${apples} apples and ${oranges} oranges`;
        return juice;
 }

 const appleJuice = fruitProcessor(5, 0); 
 console.log(appleJuice);


 const appleOrangeJuice = fruitProcessor(2, 4);
 console.log(appleOrangeJuice);



// Function declaration
function calcAge1(birthYear){
        return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);


// Function expression
const calcAge2 = function (birthYear){
        return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age2);


// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);





const yearsUntilRetirement  = (birthYear, firstName) => {
        const age = 2037 -birthYear;
        const retirement = 65 - age;
     // return retirement;
        return `${firstName} retires in ${retirement} years`;

}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1988, 'Sarah'));

*/


/*


function cutFruitPieces(fruit){
        return fruit * 5;
}

function fruitProcessor(apples, oranges){
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

        console.log(apples,oranges);
        const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
        return juice;
 }

console.log(fruitProcessor(2, 3))

*/

/*
const calcAge = function(birthYear){
        return 2037 - birthYear;
}

const yearsUntilRetirement  = function(birthYear, firstName) {
        const age = calcAge(birthYear);
        const retirement = 65 - age;
     //   return retirement;
     //   return `${firstName} retires in ${retirement} years`;

if(retirement >0){
     
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
}else{

console.log(`${firstName} is already retired`);
return -1;
}



}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Bob"));


*/



// Challenge 5


// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolpfins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolpfins, scoreKoalas);

// const checkWinner = function(avgDolfins, avgKoalas){
//         if(avgDolfins >= 2 * avgKoalas){
//                 console.log(`Dolphins win (${avgDolfins} vs. ${avgKoalas})`);
//         }else if(avgKoalas >= 2 * avgDolfins){
//                 console.log(`Koalas win (${avgKoalas} vs. ${avgDolfins})`);

//         }else{
//                 console.log('No team wins...');
//         }
// }

// checkWinner(scoreDolpfins, scoreKoalas);

// checkWinner(234, 111);


// scoreDolpfins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolpfins, scoreKoalas);

// checkWinner(scoreDolpfins, scoreKoalas);




/*

////////////////////////////////////////////////////////

function checkAge(age){
        if(age > 18){
                return true;
        }else{
                return confirm('did parents allow you?')
        }
}



/////////////////////////////////////////////////////////

function checkAge(age){
        if(age > 18){
                return true;
        }
                return confirm('did parents allow you?')

}


/////////////////////////////////////////////////////////

function checkAge(age) {
       return age > 18 ? true : confirm('did parents ... ');
}



////////////////////////////////////////////////////////////

function checkAge(age) {
        return age > 18 || confirm('did parents ... ');
 }


checkAge(16);

*/




/*

//////////////////////////////////////////////////////////

function min(a, b){
        if(a < b){
                return a;
        }else{
                return b;
        }
}

console.log(min(9, 2));




///////////////////////////////////////////////////////////

function min(a, b){
return a < b ? a : b;
}

console.log(min(9, 2));


*/




/*

////////////////////////////////////////////////////////////////

//  *=	     x *= y	x = x * y

function pow(x, n){
        let result = x;

        for(let i=1; i < n; i++){
                result *=x;

        }
        return result;
}

let x = prompt('x?', "");
let n = prompt('n?', "");



if(n < 1){
alert(`Power ${n} is not supported, use a positive integer`)

}else{

alert(pow(x, n));
}

*/


//////////////////////////////////////////////////////////////////

// CALLENGE 5 BY MYSELF
/*

const caclAverage = (a, b, c) => ((a + b + c) / 3);

const averageDolphins = caclAverage(44, 150, 71);
const averageKoalas = caclAverage(44, 14, 71);

console.log(averageDolphins, averageKoalas);


function checkWinner(){
        if(averageDolphins > averageKoalas  *2){
                console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas})!`);
        }else if(averageKoalas > averageDolphins *2){

                console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins})!`)
                
        }else if( averageDolphins == averageKoalas){

                console.log(`It's a draw (${averageDolphins} = ${averageKoalas})!`)
        }else{
                console.log(`No team wins!`);
        }
}

checkWinner(averageDolphins, averageKoalas);

*/


////////////////////////////////////////////////////////////////////////

// CIRCLE AREA
/*

function calcCircleArea(radius){
   //   let area = 3.14 * (radius * radius);
        let area = 3.14 * radius ** 2

        return area;
}
// console.log(calcRadius(13));

const circleArea1 = calcCircleArea(5);
console.log(circleArea1);

*/



/*

///////////////////////////////////////////////////////////////////////

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



// Exercise 

const calcAge = function(birthYear){
        return 2037 -birthYear;

}
const years = [1991, 1689, 1945, 2020, 2028, 1993];


const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);

*/




/*


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


// Verify if yhe element exists in array

friends.push(23);
console.log(friends);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if(friends.includes('Steven')){
        console.log('You have a friend called Steven');
}

*/


/*
/////////////////////////////////////////////////////////////////////////////////////////

// Challenge ARRAY

function calcTip(bill){
        return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20;
};

// const calcTip = bill => bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] +  tips[0], bills[1] + tips[1], bills[2] + tips[2]]; 
console.log(bills, tips, totals);


/////////////////


function calcTip2(bill){
        let tip;
        if(bill >= 50 && bill <= 300){
                return tip = bill * 0.15;
                
        }else{
                return tip = bill * 0.20;        }
};

const bills = [100, 55, 44];
const tips = [calcTip2(bills[0]),calcTip2(bills[1]), calcTip2(bills[2])];
const totals = [bills[0] +  tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals );
*/


///////////////////////////////////////////////////////////////////////////////
/*
// from TO ARROW FUNCTION

function ask(question, yes, no) {
        if (confirm(question)) yes();
        else no();
      }
      
      ask(
        "Do you agree?",
        function() { alert("You agreed."); },
        function() { alert("You canceled the execution."); }
      );
 

let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask("Do you agree?",  () => console.log('you agreed'), () => console.log('you canceled'));

*/


/////////////////////////////////////////////////////////////////////////

// let styles = ["Jazz", "Blues"];

// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length -1) / 2)] = "Classics";  // find the middle value in odd array
// let shifted = styles.shift();
// console.log(shifted);
// styles.unshift("Rap", "Reggae");
// console.log(styles);



/////////////////////////////////////////////////////////////////////////////////

// function sumInput(value){
//         let numbers =[];
//         while(true){
//                 let value = prompt("A number please", 0);
//                 if(value === "" || value === null || !isFinite(value) ) break;
//                 numbers.push(+value);
//         }
//         let sum = 0;
//         for(let number of numbers){
//                 sum += number;
//         }
//         console.log(numbers);
//         return sum;
    
// }
// console.log(sumInput());


///////////////////////////////////////////////////////////////////////////////////
