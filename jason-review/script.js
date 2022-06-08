// declare a variable 
/*
1-    let - holds data (to put data inside use "=") able to be changed later.
2-    const - (constant, not be able to change) if you try to change the data later it will give an error.
3-    var - (use as little as possible) a box to store information.
*/

//data types
/* 
PRIMITIVE----------
1.  strings = [anything in 'quotes' "quotes"]
2.  numbers = [2, -2, 0.2]
3.  booleans = [True / False]
4.  undefined = [no value assigned]
5.  null = [doesnt have any value / value has been removed]

REFERENCE----------
1.  objects = [ to create an object use the {}]     {key value OBJECTS}  use single name! for ease 

const person = {
    name: "Monique",
    age: 21,
    gender: female,
};
>console.log(person);
display=     [ name: "Monique", age: "21", gender: "female"]

>console.log(person.gender);
displays=   [female]

2.  arrays = a list of items (use [] for arrays)  [ARRAY] * use plural name! *

const numbers = [1, 2, 3, 4 , 5];
console.log(numbers);
0: 1
1: 2
2: 3
3: 4
4: 5
length: 5

* index: array items *

--updates--
numbers[2] = 10
console.log(numbers);
0: 1
1: 2
2: 10
3: 4
4: 5
length: 5

* array items also start at 0  *

3.  functions =




*/

//  console.log() = [tells console to view whatever is inside the brackets]

//  console.table() = [tabulate the array in the console]

//  [Document Object Model = DOM]


// PRIMITIVES
// let name = "Jason"; // String
// let age = 28; // number
// let isPensioner = false; // Boolean
// let canDance; // Undefined
// let awards = null; // Null

// Reference Types

// Object
// const person = {
//   name: "Jason",
//   age: 28,
//   isPensioner: false,
// };

// console.log(person);

// Array
// const projects = [
//   {
//     title: "Project 1",
//     imgURL: "https://picsum.photos/200/300?random=1",
//     description: "Lorem ipsum",
//     technologies: "HTML/CSS/JS",
//     links: {
//       github: "Link",
//       live: "Link",
//     },
//   },
//   {
//     title: "Project 2",
//     imgURL: "https://picsum.photos/200/300?random=2",
//     description: "Lorem ipsum",
//     technologies: "HTML/CSS/JS",
//     links: {
//       github: "Link",
//       live: "Link",
//     },
//   },
//   {
//     title: "Project 3",
//     imgURL: "https://picsum.photos/200/300?random=3",
//     description: "Lorem ipsum",
//     technologies: "HTML/CSS/JS",
//     links: {
//       github: "Link",
//       live: "Link",
//     },
//   },
//   {
//     title: "Project 4",
//     imgURL: "https://picsum.photos/200/300?random=4",
//     description: "Lorem ipsum",
//     technologies: "HTML/CSS/JS",
//     links: {
//       github: "Link",
//       live: "Link",
//     },
//   },
//   {
//     title: "Project 5",
//     imgURL: "https://picsum.photos/200/300?random=5",
//     description: "Lorem ipsum",
//     technologies: "HTML/CSS/JS",
//     links: {
//       github: "Link",
//       live: "Link",
//     },
//   },
//   {
//     title: "Project 6",
//     imgURL: "https://picsum.photos/200/300?random=6",
//     description: "Lorem ipsum",
//     technologies: "HTML/CSS/JS",
//     links: {
//       github: "Link",
//       live: "Link",
//     },
//   },
// ];

// const projectContainer = document.getElementById("projects");

// projects.forEach((project) => {
//   projectContainer.innerHTML += `
//     <h3>${project.title}</h3>
//     <img src=${project.imgURL} />
//   `;
// });


// function numberOne(){
//   document.getElementById("output").innerHTML = 1;
// }

// function numberTwo(){
//   document.getElementById("output").innerHTML = 2;
// }
// function numberThree(){
//   document.getElementById("output").innerHTML = 3;
// }

'use strict';
const container = document.querySelector('.container');
const textarea = document.querySelector('.text');
const alphabet = document.querySelectorAll('.alpha');
const key = document.querySelectorAll('.key');


//Event listener
container.addEventListener('click', function (e) {
  if (e.target.classList.contains('key')) {
    if (e.target.classList.contains('spaceBar')) {
      textarea.textContent += ' ';
    }
    if (e.target.classList.contains('caps')) {
      caps();
    }
    if (e.target.classList.contains('content')) {
      const getContent = e.target.textContent;
      textarea.textContent += getContent;
    }
    if (e.target.classList.contains('backSpace')) {
      textarea.textContent = textarea.textContent.substring(
        0,
        textarea.textContent.length - 1
      );
    }
  }
});
