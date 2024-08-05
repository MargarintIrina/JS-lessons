{
        const students = [
                {name: 'alex', age: 20, specialty: 'it'},
                {name: 'mike', age: 24, specialty: 'design'},
                {name: 'masha', age: 20, specialty: 'it'},
                {name: 'stas', age: 18, specialty: 'design'},
        ];

        const groupedBySpeciality =[];

        students.forEach(student => {

                if(!groupedBySpeciality[student.specialty]){
                groupedBySpeciality[student.specialty] = [student];
                }else{
                        groupedBySpeciality[student.specialty].push(student);

                }
        });
        console.log(groupedBySpeciality);
}