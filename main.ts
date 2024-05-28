//         ******************************  Object , Array and function *****************************

// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.

// // 1. Define an object named people containing an empty array called friends.
let people={
    friends:[] as Friend[]
};

// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
type Friend={
    firstName:string,
    lastName:string,
    id?:number
};

let friend1:Friend={
    firstName:"Asad",
    lastName:"Iqbal",
    id:1
};
let friend2:Friend={
    firstName:"Shahneel",
    lastName:"Hassan",
    id:2
};
let friend3:Friend={
    firstName:"Rubina",
    lastName:"Shahid",
    id:3
};
// // 3. Add these friend objects to the friends array within the people object
people.friends.push(friend1,friend2,friend3)
console.log(people);

// **************************Assignment 2:Manipulating an Array: Rearranging Words*****************************************************************
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".

// 1. Scrambled Array:
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.length=0
scrambledArray.push("I","am","a","student","of","GIAIC")
console.log(scrambledArray.join('  '));

// *********************************** Assignment 3: Company Product Catalog****************************************************************
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.

// 1. Define an array named inventory to store product information.
let inventory:Product[]=[];

type Product={
    name:string,
    model:string,
    cost:number,
    quantity:number,
}

// 2. Create three separate objects, each representing a product, with properties like name,
// // model, cost, and quantity.
let product:Product={
    name:"Facial Kit",
    model:"new",
    cost:5000,
    quantity:5,
};

let product2:Product={
    name:"Sunscreen",
    model:"new",
    cost:1000,
    quantity:6,
};

let product3:Product={
    name:"Face Serum",
    model:"new",
    cost:3000,
    quantity:5
};

// // 3. Add these product objects to the inventory array using an appropriate array method.
inventory.push(product,product2,product3)
console.log(inventory);
console.log(inventory[2].quantity);
console.log(inventory[0].cost);
console.log(inventory[1].name);

// ********************************Assignment 4: Student List Organizer************************************************************************

// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

// 1. Student Data: The provided code defines an interface
interface Student{
    name:string,
    seniorStatus:boolean,
    completeAssignments:boolean,
}

// // 2. Student List:
let students: Student[] = [
    {name: "Asfa", seniorStatus: true, completeAssignments: true},
    {name: "Malaiqa", seniorStatus: false, completeAssignments: false},
    {name: "Asad", seniorStatus: false, completeAssignments: true},
    {name: "Qasim", seniorStatus: true, completeAssignments: true},
    {name: "Hadi", seniorStatus: false, completeAssignments:false}
];
console.log(students);

// // 3. Find Senior Students with Assignments 
function seniorStudents(students:Student[]) {
    return students.filter(student=>student.seniorStatus && student.completeAssignments===true)    
}
console.log(seniorStudents(students));

// // 4. Class List Update and removes students who haven't completed their assignments
function removeStudents(student:Student[]) {
    return students.filter(student=>student.completeAssignments===false)
}
console.log(removeStudents(students));
