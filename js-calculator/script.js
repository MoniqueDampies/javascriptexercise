// function Monique(){
//     var numberofhours= document.getElementById("numberofhours").value;
//     var rateperhour = document.getElementById("rateperhour").value;

//     var calculate = numberofhours*rateperhour
//     document.getElementById("show").innerText = calculate;
//   }


//   function buttons(){
//     document.getElementById("show").innerText = '';
//     document.getElementById("myForm").reset();
//   }


  let age = 18;
let salary = 5000;
let bonus = 500;
if((age >= 18)  && (salary >= 5000)) {
    salary += bonus;
    console.log("Your Salary is: ".concat(salary))
} else {
    console.log('Please try again later')
}