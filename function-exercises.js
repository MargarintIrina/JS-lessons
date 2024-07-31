// from TO ARROW FUNCTION

//Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
        if (confirm(question)) yes();
        else no();
      }
      
      ask("Do you agree?", function() { alert("You agreed."); }, function() { alert("You canceled the execution."); });
 

let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask("Do you agree?",  () => console.log('you agreed'), () => console.log('you canceled'));



////////////////////////////////////////////////////////////////////////

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



////////////////////////////////////////////////////////////////////////

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



/////////////////////////////////////////////////////////////////////////

function checkAge(age){
        if(age > 18){
                return true;
        }else{
                return confirm('did parents allow you?')
        }
}



// Will the function work differently if else is removed?
// Is there any difference in the behavior of these two variants?



function checkAge(age){
        if(age > 18){
                return true;
        }
                return confirm('did parents allow you?')

}

                   // NO DIFFERENCE!

//////////////////////////////////////////////////////////////////////



// Rewrite the function using '?' or '||'

function checkAge(age) {
       return age > 18 ? true : confirm('did parents ... ');
}



function checkAge(age) {
        return age > 18 || confirm('did parents ... ');
 }


checkAge(16);



/////////////////////////////////////////////////////////////////////////

// Write a function min(a,b) which returns the least of two numbers a and b.

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


/////////////////////////////////////////////////////////////////////////////


// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
// P.S. In this task the function should support only natural values of n: integers up from 1.


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

///////////////////////////////////////////////////////////////////////////////

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.



function sumInput(value){
        let numbers =[];
        while(true){
                let value = prompt("A number please", 0);
                if(value === "" || value === null || !isFinite(value) ) break;
                numbers.push(+value);
        }
        let sum = 0;
        for(let number of numbers){
                sum += number;
        }
        console.log(numbers);
        return sum;
    
}
console.log(sumInput());

///////////////////////////////////////////////////////////////////////////

// CIRCLE AREA

function calcCircleArea(radius){
   //   let area = 3.14 * (radius * radius);
        let area = 3.14 * radius ** 2

        return area;
}
// console.log(calcRadius(13));

const circleArea1 = calcCircleArea(5);
console.log(circleArea1);

