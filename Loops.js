// Iteration The for Loop


//  console.log('Lifting weight repetition 1');
//  console.log('Lifting weight repetition 2');
//  console.log('Lifting weight repetition 3');
//  console.log('Lifting weight repetition 4');
//  console.log('Lifting weight repetition 5');
//  console.log('Lifting weight repetition 6');
//  console.log('Lifting weight repetition 7');

for(let rep = 1; rep <= 7; rep++){
        console.log(`Lifting weight repetition  ${rep}`);
 };


 const jonasArray = [
        'Jonas',
        'Shmedtmann',                   // Array
        2037-1991,
        'teacher',
        ['Michael', 'Peter', 'Steven']
];

const types =[];

for(let i = 0; i < jonasArray.length; i++){
console.log(jonasArray[i], typeof jonasArray[i]);


//Filling types array
// types[i] = typeof jonasArray[i];

types.push(typeof jonasArray[i]);
};

console.log(types);


const years = [1991, 2007, 1969, 2020];

const ages = [];
for(let i = 0; i < years.length; i++){
        
        ages.push(2037 - years[i]);
}

console.log(ages);


//continue and break

console.log('--- ONLY STRINGS ---')

for( let i = 0; i < jonasArray.length; i++){
        if(typeof jonasArray[i] !== 'string') continue;
        console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- BREAK WITH NUMBER---')

for( let i = 0; i < jonasArray.length; i++){
        if(typeof jonasArray[i] === 'number') break;
        console.log(jonasArray[i], typeof jonasArray[i]);
}

/////////////////////////////////////////////////////////////////////

// Backward loops

const jonas = [
        'Jonas',
        'Shmedtmann',                   // Array
        2037-1991,
        'teacher',
        ['Michael', 'Peter', 'Steven']
];

for(let i = jonas.length -1; i >= 0; i--){
        console.log(i, jonas[i]);

};


// LOOPS in LOOPS

for(let exercise = 1; exercise < 4; exercise++ ){
        console.log(`-----------Starting exercise ${exercise}`);

        for(let rep = 1; rep < 6; rep++){
                console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
        }


}


// WHILE Loop


let rep = 1;
while(rep <= 10){
        rep++; 
        console.log(`WHILE: Lifting weights repetitions ${rep} `);
};


//////////////////////////////////////////////////////////////////

let dice = Math.trunc(Math.random() * 6) + 1 ;
console.log(dice);

while(dice !== 6){
        console.log(`you rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1 ;
        if(dice === 6){
                console.log('Loop is about end');
        }
}




// Challenge loops

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips =[];
const totals = [];



function calcTip(bill){
        return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20;
}
for(let i = 0; i < bills.length; i++){
        calcTip(bills[i]);
        tips.push(calcTip(bills[i]));
        totals.push(calcTip(bills[i]) + bills[i]);
        //  const tip = calcTip(bills[i]);
        //  tips.push(tip);
}
console.log(bills);
console.log(tips);
console.log(totals);


const calcAverage = function(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++ ){
                sum += arr[i];
        }
return sum / arr.length;

}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

