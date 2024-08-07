"use strict"
const arrayWihtNames = [];

function addName(arrayWihtNames, name){
        console.log(name);

        if(!arrayWihtNames.includes(name)){
                arrayWihtNames.push(name);
        }

        
}

console.log(arrayWihtNames);
addName(arrayWihtNames, "irina");
addName(arrayWihtNames, "ana");
addName(arrayWihtNames, "irina");