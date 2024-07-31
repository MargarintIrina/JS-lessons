
// OBJECTS

const jonasArray = [
        'Jonas',
        'Shmedtmann',                   // Array
        2037-1991,
        'teacher',
        ['Michael', 'Peter', 'Steven']
];


const jonas ={
        firstName: 'Jonas',
        lastName: 'Shmedtmann',
        age: 2037 - 1991,               // Object
        job: 'teacher',
        friends: ['Michael', 'Peter', 'Stven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);


const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey);   error


const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends');


if(jonas[interestedIn]){
console.log(jonas[interestedIn]);
}else{console.log('Wrong request! Choose between firstName, lastName, age, job and friends')}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonascmed';
console.log(jonas);


// Challenge
//"Jonas has 3 friends,  and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


///////////////////////////////////////////////////////////////////////////////////////


// OBJECT methods

const jonas2 = {
        firstName: 'Jonas',
        lastName: 'Shmedtmann',
        birthYear: 1991,
        job: 'teacher',
        friends: ['Michael', 'Peter', 'Steven'],
        hasDriversLicense: true,

        // calcAge: function(birthYear){
        //         return 2037 -birthYear;
        // }

        // calcAge: function(){
        //         console.log(this);
        //         return 2037 -this.birthYear;
        // }

        calcAge: function(){
                console.log(this);

                this.age = 2037 -this.birthYear;
                return this.age;
        },
        getSumary: function(){
                return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence`;
                

        }

};
console.log(jonas2.calcAge());
console.log(jonas2.age);
console.log(jonas2.age);
console.log(jonas2.age);


// console.log(jonas2['calcAge'](1991));

// Challenge

// "Jonas is a 46-years old teacher, and he has a driver's license"

// console.log(`${jonas2.firstName} is a ${jonas2.age} old ${jonas2.job}, and he has ${jonas2.hasDriversLicense}`);


console.log(jonas2.getSumary());