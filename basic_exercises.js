"use strict";
// EXERCISE 1

// Задача 1. Определить сколько раз каждый элемент встречается в массиве.

{const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// what we need to obtain :  {kiwi: 3, apple: 2, orange: 1}


const count = {};

fruits.forEach(f => {
        if(!count[f]){
count[f] = 1;
        }else{
                count[f]++;
        }
});

console.log(fruits);
console.log(count);

//------------------------------------------------------------------------------------

const vegetables = ['potatoes', 'tomatos', 'potatoes', 'tomatos', 'potatoes', 'carots', 'cucumbers', 'broccoli', 'potatoes'];


// make the cod universal for other situations

const countItems = (list) => {
        const count = {};

        list.forEach(f => {
                if(!count[f]){
                        count[f] = 1;
                        
                }else{
                        count[f]++;
                }
                
        });
        return count;

}
const countResult = countItems(vegetables);
console.log(countResult);

}

/////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE 2

// Задача 2. Создать массив который содержит только уникальные значения исходного массива.

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// Задача 2. Вариант 1. Используем конструктор Set.

const fruitsUnique = new Set(fruits);
//Set(3) ['kiwi', 'apple', 'orange']



// Чтобы получить массив мы можем обернуть наш результат в метод Array.from().
{
const fruitsUnique = Array.from(new Set(fruits));
console.log(fruitsUnique);
// fruitsUnique = ['kiwi', 'apple,', 'orange']
}

//------------------------------------------------------------------------------------------
// Задача 2. Вариант 2. Используем пустой объект и цикл forEach.
{const myFruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

        const unique = [];

        myFruits.forEach(item =>{
                unique[item] = true;
        });
        console.log(unique);
        // Object { kiwi: true, apple: true, orange: true }

//Чтобы получить массив из ключей объекта можно использовать метод Object.keys():

const uniqueArray = Object.keys(unique);
console.log(uniqueArray);


//-----------------------------------------------------------------------------------

// Таким образом мы можем повторно использовать нашу новую функцию uniqueItems в разных частях нашего кода с разными исходными массивами:
const vegetables = ['potatoes', 'tomatos', 'potatoes', 'tomatos', 'potatoes', 'carots', 'cucumbers', 'broccoli', 'potatoes'];
const uniqueItems =(list) =>{
        const unique = {};

        list.forEach(item => {
                unique[item] = true;
        
        });
        return Object.keys(unique);
}

        const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

        const fruitsUnique = uniqueItems(fruits);

        console.log(fruitsUnique);
}

////////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE 3

// Задача 3. Создать функцию, которая группирует студентов по возрасту.

// На выходе требуется получить объект, где ключ - возраст, а значение - массив студентов, которые относятся к данной возрастной группе.

// Исходный массив:

const students = [
        {name: 'alex', age: 20},
        {name: 'mike', age: 24},
        {name: 'masha', age: 20},
        {name: 'stas', age: 18},
];

// Требуется получить ответ в следующем формате:

// '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
// '24': [{ name: 'mike', age: 24 }],
// '18': [{ name: 'stas', age: 18 }],

const grouped = {};

students.forEach(s =>{
        if(!grouped[s.age]){
                grouped[s.age] = [s];
                // console.log([s.age], [s]);
        }else{
                grouped[s.age].push(s);
        }
});
console.log(grouped);

// Если ключ (s.age) отсутствует, то добавляем его в объект grouped. В этом случае значением ключа будет объект текущего студента (переменная s) в массиве [s].

// Если ключ ранее уже был добавлен в объект, то значение ключа уже содержит массив, в который нам остается добавить текущий объект студента с помощью метода push.


//////////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE 4

// Требуется написать функцию, которая отвечает следующим требованиям:

// Функция принимает 2 аргумента - массив из уникальных целых чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива из 1-го аргумента равна числу, которое приходит 2-м аргументом, функция должна вернуть новый массив из этих двух чисел в любом порядке.
// Если решения нет, вернуть пустой массив.

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;


// Результат работы нашей функции должен иметь следующий формат:

// [-1, 11] или [11, -1] - так как -1 + 11 = 10;

const findPairs = (nums, target) => {
        for(let i =0; i < nums.length; i ++){
const numFirst = nums[i];


for(let j = i + 1; j < nums.length; j++){
        const numSecond = nums[j];

        if(numFirst + numSecond === target){
                return [numFirst, numSecond];
        }
}
        }
        return [];
}