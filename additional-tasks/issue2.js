const studentNames = ['John', 'Mary', 'Tom' ];

const studentAges = [21, 19, 20];


{
const students = studentNames.map((student, index) => [student, studentAges[index]]);
console.log(students);
}
//-----------------------------------------------------------------------------------------------
{
const students = [];

for(let s = 0; s < studentNames.length; s++){
        students.push([studentNames[s], studentAges[s]]);

}
console.log(students);
}
//-----------------------------------------------------------------------------------------------

{
const students = [];

studentNames.forEach((student, index) =>{
        students.push([student, studentAges[index]]);
});
console.log(students);
}

/////////////////////////////////////////////////////////////////////////////////////////
{
        const studentNames = ['John', 'Mary', 'Tom' ];

        const studentAges = [21, 19, 20];

        const students =[];

        for(i = 0; i < studentNames.length; i++){
               students.push({name: studentNames[i], age: studentAges[i]});
        }
        console.log(students);
}

//-----------------------------------------------------------------------------------------------
{
        const studentNames = ['John', 'Mary', 'Tom' ];

        const studentAges = [21, 19, 20];

        const students =[];

        studentNames.forEach((student, index) => {
                students.push({name: student, age: studentAges[index]});
        });
        console.log(students);
}
