
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




// Challenge 2


let markMass2 = 78;
let markHeight2 = 1.69;
let johnMass2 = 92;
let johnHeight2 = 1.95;

markBMI = markMass2 / markHeight2 ** 2;
johnBMI = johnMass2 / (johnHeight2 * johnHeight2);

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
}




// Chalange 3


const averageDolfins1 = (96 + 108 + 89) / 3;
const averageKoalas1 = (88 + 91 + 110) / 3;  


// const averageDolfins = (97 + 112 + 101) /3;
// const averageKoalas = (109 + 95 +123) / 3;

// const averageDolfins = (97 + 112 + 101) /3;
// const averageKoalas = (109 + 95 +106) / 3;

console.log(averageDolfins1, averageKoalas1);

if(averageDolfins1 > averageKoalas1 && averageDolfins1 >= 100){
        console.log('Dolfins are the winers!');
}else if( averageDolfins1 < averageKoalas1 && averageKoalas1 >=100){
        console.log('Koalas are the winers!');
}else if(averageDolfins1 == averageKoalas1 && averageKoalas1 >=100 && averageDolfins1 >= 100 ){
        console.log("it's a draw!");

}else{
        console.log('nobody won!');
}




// Challenge 4

let bill=275;
let tip;

if(bill >= 50 && bill<=300){
        tip = bill * 0.15;
}else{
        tip = bill * 0.20; 
}

let total = bill + tip;
console.log(bill, tip, total);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`);



//    Challenge 5


const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolpfins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolpfins, scoreKoalas);

const checkWinner = function(avgDolfins, avgKoalas){
        if(avgDolfins >= 2 * avgKoalas){
                console.log(`Dolphins win (${avgDolfins} vs. ${avgKoalas})`);
        }else if(avgKoalas >= 2 * avgDolfins){
                console.log(`Koalas win (${avgKoalas} vs. ${avgDolfins})`);

        }else{
                console.log('No team wins...');
        }
}

checkWinner(scoreDolpfins, scoreKoalas);

checkWinner(234, 111);


scoreDolpfins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolpfins, scoreKoalas);

checkWinner(scoreDolpfins, scoreKoalas);



// CALLENGE 5 BY MYSELF


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



// Challenge ARRAY

function calcTip(bill){
        return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20;
};

// const calcTip = bill => bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] +  tips[0], bills[1] + tips[1], bills[2] + tips[2]]; 
console.log(bills, tips, totals);


///////////////////////////////////////////////

// function calcTip2(bill){
//         let tip;
//         if(bill >= 50 && bill <= 300){
//                 return tip = bill * 0.15;
                
//         }else{
//                 return tip = bill * 0.20;        }
// };

// const bills = [100, 55, 44];
// const tips = [calcTip2(bills[0]),calcTip2(bills[1]), calcTip2(bills[2])];
// const totals = [bills[0] +  tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills, tips, totals );



/////////////////////////////////////////////////////////////////////////////////

