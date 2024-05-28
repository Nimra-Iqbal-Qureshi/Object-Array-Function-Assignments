//         ******************************  Object , Array and function *****************************
// // 2. Student List:
var students = [
    { name: "Asfa", seniorStatus: true, completeAssignments: true },
    { name: "Malaiqa", seniorStatus: false, completeAssignments: false },
    { name: "Asad", seniorStatus: false, completeAssignments: true },
    { name: "Qasim", seniorStatus: true, completeAssignments: true },
    { name: "Hadi", seniorStatus: false, completeAssignments: false }
];
console.log(students);
// // 3. Find Senior Students with Assignments 
function seniorStudents(students) {
    return students.filter(function (student) { return student.seniorStatus && student.completeAssignments === true; });
}
console.log(seniorStudents(students));
// // 4. Class List Update and removes students who haven't completed their assignments
function removeStudents(student) {
    return students.filter(function (student) { return student.completeAssignments === false; });
}
console.log(removeStudents(students));
