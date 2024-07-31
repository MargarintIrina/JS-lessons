

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





const yearsUntilRetirement1  = (birthYear, firstName) => {
        const age = 2037 -birthYear;
        const retirement = 65 - age;
     // return retirement;
        return `${firstName} retires in ${retirement} years`;

}

console.log(yearsUntilRetirement1(1991, 'Jonas'));
console.log(yearsUntilRetirement1(1988, 'Sarah'));

