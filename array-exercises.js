////////////////////////////////////////////////////////////////////////////

// 1.Create an array styles with items “Jazz” and “Blues”.
// 2.Append “Rock-n-Roll” to the end.
// 3.Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// 4.Strip off the first value of the array and show it.
// 5.Prepend Rap and Reggae to the array.

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
styles[Math.floor((styles.length -1) / 2)] = "Classics";  // find the middle value in odd array
let shifted = styles.shift();
console.log(shifted);
styles.unshift("Rap", "Reggae");
console.log(styles);


///////////////////////////////////////////////////////////////////////
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