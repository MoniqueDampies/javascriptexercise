// const friends = ["Amanda", "Bulelani", "Charles", "Emile", "Frank", "Gary", "Harry", "Ikhlaas", "James", "King"];



// document.getElementById("demo").innerHTML = friends[4];

// console.table(friends);
// console.log(friends[friends.length/2]);
// console.log(friends[friends.length-1]);


let marks = 40;
// >, >= , <, <=
// &&, ||, !
switch(true) {
    case 100:
      console.log("A+");
    break;

   case (marks <= 99 && marks >=50):
      console.log("Passed");
    break;

    case (marks <= 50 && marks >= 0):
      console.log("Failed");
    break;

    case marks = 0:
      console.log("Failed miserably");
    break;

    default:
      console.log("out of range");
}

