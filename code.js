var smartPeople = [
  "Shane Stevens",
  "Marshalino Jankowski",
  "Reagan Carolussen",
  "Emile Van Wyk",
  "Amanda Gudwla",
  "Ikhlaas Rawoot",
];

var ul =
document.createElement("ul");
document.getElementById("myList").appendChild(ul);

smartPeople.forEach(function (name) {
  var li = document.createElement("li");

  ul.appendChild(li);
  li.innerHTML += name;
});

// to view in console only, *comment* the code above. 

var ul = document.createElement("ul");

let names = [
  " Shane Stevens ",
  " Marshalino Jankowski ",
  " Reagan Carolussen ",
  " Emile Van Wyk ",
  " Amanda Gudwla ",
  " Ikhlaas Rawoot ",
];

function smartPeople() {
  console.log(ul + names);
}

smartPeople();
