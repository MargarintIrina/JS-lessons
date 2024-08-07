"use strict"

const arrayWithNames = [];
function addName(){
        for(let x =1; x <= 5; x++){
    let name = prompt(`write name`);
if(!arrayWithNames.includes(name)){
        arrayWithNames.push(name);
     
}
}}
console.log(arrayWithNames);
addName();