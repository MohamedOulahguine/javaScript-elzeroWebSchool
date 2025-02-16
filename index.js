// ===========================
// =بسم الله الرحمان الرحيم=
// ===========================

let nav__tag = document.querySelectorAll(".nav__tag");
let nav__ul = document.querySelector("ul");
let main__logo = document.querySelector(".logo");
let logo__img = main__logo.querySelector("img");

window.addEventListener("resize", () => {
  if (window.innerWidth <= 833) {
    logo__img.src = "logo trasparent - Copy.png";
    logo__img.style.width = "70px";
    nav__tag.forEach((element) => {
      element.children[0].addEventListener("click", () => {
        nav__ul.style.display = "flex";
        element.children[0].style.display = "none";
        element.children[1].style.display = "block";
      });
      element.children[1].addEventListener("click", () => {
        nav__ul.style.display = "none";
        element.children[0].style.display = "block";
        element.children[1].style.display = "none";
      });
    });
  } else {
    nav__ul.style.display = "flex";
    logo__img.src = "logo trasparent - Copy1.png";
    logo__img.style.width = "300px";
  }
});

// =======================
// assignment 1 "week-> 1"
// =======================

console.error("assignment 1 week-> 1");

console.log(
  " the code will not be working where is at 1st one because will not be able to  \n find the element, not like the second one that has window.onload but if we wanna make \n the first code works we need to put it at the end of the body"
);

/*
  "the code will not be working where is at 1st
  one because will not be able to find the elm-
  ent, not like the second one that has window.
  onload but if we wanna make the first code
  works we need to put it at the end of the body"
*/

// =======================
// assignment 2 "week-> 1"
// =======================

console.error("assignment 2 week-> 1");

console.log(`<h1 style="color: #000;
border-top:solid 1px #fff;
background-color: rgb(185, 185, 16);
font-size: 50px;
font-weight: bold;
text-align: center;
display:none;>SiMo</h1>`);

console.log("<= You Will See It On Page");

// =======================
// assignment 3 "week-> 1"
// =======================

console.error("assignment 3 week-> 1");

console.log(
  "%csimo %cweb %cschool",
  "text-transform: capitalize;color: red; font-size: 40px;",
  "text-transform: capitalize;color: green; font-size: 40px; font-weight: bold;",
  "text-transform: capitalize;color: white;background-color: blue; font-size: 40px;"
);

// =======================
// assignment 4 "week-> 1"
// =======================

console.error("assignment 4 week-> 1");

console.groupCollapsed("Group 1 ");

console.log("Message One");
console.log("Message Two");

console.groupCollapsed("Child Group");

console.log("Message One");
console.log("Message Two");

console.group("Grand Child Group");

console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");

console.log("Message One");
console.log("Message Two");

// =======================
// assignment 5 "week-> 1"
// =======================

console.error("assignment 5 week-> 1");

console.table(["SiMo", "Morocco", "Mohamed", "Philistine"]);

// =======================
// assignment 6 "week-> 1"
// =======================

console.error("assignment 6 week-> 1");

// console.log("Iam In Console");

/*console.log("Iam In Page");*/

console.log("=> You Will See It in Code");

// =======================
// assignment 1 "week-> 2"
// =======================

console.error("assignment 1 week-> 2");
// Add Variables Here
let NumberOne = 10;
let NumberTwo = 20;

// Ouput
console.log(NumberOne + "" + NumberTwo); // Normal Concatenate => 1020
console.log(typeof (NumberOne + "" + NumberTwo)); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof `${NumberOne}${NumberTwo}`); // Template Literals Way => String

console.log(NumberOne + "\n" + NumberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${NumberOne}
${NumberTwo}`);
/*
  Template Literals Way
  20
  10
*/

// =======================
// assignment 2 "week-> 2"
// =======================

console.error("assignment 2 week-> 2");

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// =======================
// assignment 3 "week-> 2"
// =======================

console.error("assignment 3 week-> 2");

console.log(
  '`I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""``'
);

/*
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
*/

// =======================
// assignment 4 "week-> 2"
// =======================

console.error("assignment 4 week-> 2");

let a = 21;
let b = 20;

console.log(`_${a}_${b + "" + a}_${b}${a}_${b}${a}_${b}_`);

//===========================================
//== Variables And Concatenation Challenge ==
//===========================================
console.error("Variables And Concatenation Challenge");
console.log("on screen");

let titleVar = "elzero";
let descVar = "elzero web school";
let dataVar = "25/10";

let markUp = `
<div class="mark__up">
   <h3 class="title__var">${titleVar}</h3>
   <p class="desc__var">${descVar}</p>
   <span class="data__var">${dataVar}</span>
</div>
`;

let getMainSect = document.querySelector(".challenge__var");

getMainSect.innerHTML = markUp.repeat(4);

// =======================
// assignment 1 "week-> 3"
// =======================

console.error("assignment 1 week-> 3");

// Replace ? With Arithmetic Operators
console.log(((10 - 20) * (15 + 3) + (190 - 10)) * 400); // 0

// =======================
// assignment 2 "week-> 3"
// =======================

console.error("assignment 2 week-> 3");

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * (num - true)); // 6

// Soultion Three
console.log(Math.pow(num, true + true) - num); // 6

// Soultion Four
console.log(num ** (num - true) - num); // 6

// Solution Five
console.log(num * num - num); // 6

// Solution Six
console.log(num * --num); // 3 << 1 = 6

// =======================
// assignment 3 "week-> 3"
// =======================

console.error("assignment 3 week-> 3");

let numW3 = "10";

// Solution One
console.log(+numW3 + +numW3); // 20

// Solution Two
console.log(numW3 * (true + true)); // 20

// Solution Three
console.log(numW3 * numW3.length); // 20

// Solution Four
console.log(+numW3 << true); // 20

// =======================
// assignment 4 "week-> 3"
// =======================

console.error("assignment 4 week-> 3");

let points = 10;

// Write Your Code Here

points += "zyx".length;

console.log(points); // 13

// Write Your Code Here

points -= "hello".length;

console.log(points); // 8;

//==========================
//== Operators Challenges ==
//==========================
console.error("Operators Challenges");

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d + ++e * ++g + ++f); // 173

// =======================
// assignment 1 "week-> 4"
// =======================

console.error("assignment 1 week-> 4");

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(100000.0); // 100000
console.log(1e3 * 1e2); // 100000
console.log(1e4 * 1e1); // 100000
console.log(5e4 + 5e4); // 100000
console.log(10 ** 5); // 100000 )
console.log(Math.pow(10, 5)); // 100000
console.log(Math.round(99999.5)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.trunc(100000.99)); // 100000
console.log(parseInt("100000")); // 100000
console.log(Number("100000")); // 100000
console.log(+"100000"); // 100000
console.log(10e4); // 100000
console.log(50000 * 2); // 100000

// =======================
// assignment 2 "week-> 4"
// =======================

console.error("assignment 2 week-> 4");

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// =======================
// assignment 3 "week-> 4"
// =======================

console.error("assignment 3 week-> 4");

console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

// =======================
// assignment 4 "week-> 4"
// =======================

console.error("assignment 4 week-> 4");

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// =======================
// assignment 5 "week-> 4"
// =======================

console.error("assignment 5 week-> 4");

let numW4 = 10;

console.log(Number.isInteger(numW4) + Number.isInteger(numW4)); // 2

// =======================
// assignment 6 "week-> 4"
// =======================

console.error("assignment 6 week-> 4");

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.ceil(--flt)); // 10

// =======================
// assignment 7 "week-> 4"
// =======================

console.error("assignment 7 week-> 4");

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// =======================
// assignment 8 "week-> 4"
// =======================

console.error("assignment 8 week-> 4");

let userName = "Elzero".toLowerCase();
console.log(userName[0]); // e
console.log(userName.charAt(0)); // e
console.log(userName.slice(0, 1)); // e
console.log(userName.split("")[0]); // e
console.log(userName.substring(0, 1)); // e
console.log(userName.substr(0, 1).repeat(3)); // eee

// =======================
// assignment 9 "week-> 4"
// =======================

console.error("assignment 9 week-> 4");

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.includes(letterE.toUpperCase())); // True
console.log(word.includes(letterO.toLowerCase())); // True

//======================
//== String Challenge ==
//======================
console.error("String Challenge");

let aa = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(aa.charAt(2).toUpperCase() + aa.slice(3, 6)); // Zero

// 8 H
console.log(aa.charAt(aa.indexOf("h")).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(aa.split(" ")[0].split(" ")); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(
  `${aa.substr(0, aa.split(" ")[0].length)} ${aa.substr(aa.length - 6)}`
); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  `${aa.charAt(0).toLowerCase()}${aa.substr(1, aa.length - 2).toUpperCase()}${aa
    .slice(-1)[0]
    .toLowerCase()}`
); // eLZERO WEB SCHOOl

//======================
//== number Challenge ==
//======================
console.error("number Challenge");

let aaa = 100;
let bb = 2_00.5;
let cc = 1e2;
let dd = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(aaa, bb, cc, dd))); //2

// Use Variables aaa + dd One Time To Get The Needed Output
console.log(Math.pow(aaa, Math.trunc(Math.min(aaa, bb, cc, dd)))); // 10000

// Get Integer "2" From dd Variable With 4 Methods
console.log(parseInt(dd));
console.log(Math.floor(dd));
console.log(Math.trunc(dd));
console.log(Math.ceil(dd)); //--dd

// Use Variables bb + dd To Get This Valus
console.log((Math.trunc(bb) / Math.ceil(dd)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.trunc(bb) / Math.ceil(dd))); // 67 => Number

// =======================
// assignment 1 "week-> 5"
// =======================

console.error("assignment 1 week-> 5");

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 - 100 + 10 === 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 === typeof +"-40"); // true
console.log(typeof 10 === typeof -"-40"); // true
console.log(typeof "10" !== typeof 10); // true
console.log(typeof 20 !== false); // true

// =======================
// assignment 2 "week-> 5"
// =======================

console.error("assignment 2 week-> 5");

let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log(typeof num1 === typeof num2); // true
console.log(num2 > num1); // true
console.log(num1 !== num2); // true
console.log(num1 * (true + true) === num2); // true

// =======================
// assignment 3 "week-> 5"
// =======================

console.error("assignment 3 week-> 5");

let aaaa = 20;
let bbb = 30;
let c = 10;

console.log((aaaa < bbb && aaaa > c) || aaaa == bbb); // true
console.log(aaaa < bbb || aaaa > c); // true
console.log(!(aaaa > bbb) && !(aaaa > bbb) && !(aaaa == c) && !(aaaa <= c)); // true

// =======================
// assignment 4 "week-> 5"
// =======================

console.error("assignment 4 week-> 5");

// Test Case 1
let numm = 11;

console.log(
  numm < 10 ? `00${numm}` : numm >= 10 && numm < 100 ? `0${numm}` : numm
);

// =======================
// assignment 5 "week-> 5"
// =======================

console.error("assignment 5 week-> 5");

// try it
let num11 = 9;
let str = "15";

if (num11 == str) {
  if (typeof num11 === typeof str) {
    console.log(`${num11} Is The Same Value As ${str}`);
  } else {
    console.log(`${num11} Is The Same Value As ${str} But Not The Same Type`);
  }
} else if (num11 != str) {
  if (typeof num11 === typeof str) {
    console.log(`${str} Is The Same Type As ${str} But Not The Same Value`);
  } else {
    console.log(`${num11} Is Not The Same Value Or The Same Type As ${str}`);
  }
}

// =======================
// assignment 6 "week-> 5"
// =======================

console.error("assignment 6 week-> 5");

let num111 = 10;
let num22 = 30;
let num3 = "30";

if (num3 > num111 && typeof num3 !== typeof num111) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
  if (num3 > num111 && typeof num3 !== typeof num22 && num3 == num22) {
    console.log(
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    );
    if (
      num3 != num111 &&
      typeof num3 !== typeof num111 &&
      typeof num3 !== typeof num22
    ) {
      console.log(
        "{num3} Value And Type Is Not The Same As {num111} And Type Is Not The Same As {num2}"
      );
    }
  }
}

// =======================
// assignment 7 "week-> 5"
// =======================

console.error("assignment 7 week-> 5");

// Edit What You Want Here

let num1111 = 7;
let num222 = 5;
let num33 = 7;
let num4 = 30;

// Condition 1

if (num1111 > num222) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1111 > num222 && num1111 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1111 > num222 && num1111 === num33) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1111 + num222 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1111 + num33 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1111 + num222 + num33 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1111 + num33) + num222 === 21) {
  console.log("True");
} else {
  console.log("False");
}

// =======================
// assignment 8 "week-> 5"
// =======================

console.error("assignment 8 week-> 5");

let day = "try it";

switch (day.trim()[0].toUpperCase() + day.trim().slice(1)) {
  case "Saturday":
  case "Sunday":
  case "Friday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
}

//============================
//== If Condition Challenge ==
//============================
console.error("If Condition Challenge");

/*
  If Condition Challenge
*/

let a1 = 10;

a1 < 10
  ? console.log(10)
  : a1 >= 10 && a1 <= 40
  ? console.log("10 To 40")
  : a1 > 40
  ? console.log("> 40")
  : console.log("Unknown");

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if ((st.length + st.length).toString() === "34") {
  console.log("Good0");
}

// W Position May Change
if (st[st.toLowerCase().indexOf("w")].toLowerCase() === "w") {
  console.log("Good1");
}

if (!typeof st !== "string") {
  console.log("Good2");
}

if (typeof st.length === "number") {
  console.log("Good3");
}

if (st.split(" ")[0].repeat(2) === "ElzeroElzero") {
  console.log("Good4");
}

//=======================================
//== Switch And If Condition Challenge ==
//=======================================
console.error("Switch And If Condition Challenge");

/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

switch (job.trim().charAt(0).toUpperCase() + job.trim().slice(1)) {
  case "Manager":
    console.log("salary is 8000$");
    break;
  case "IT":
  case "Support":
    console.log("salary is 6000$");
    break;
  case "Developer":
  case "Designer":
    console.log("salary is 7000$");
    break;
  default:
    console.log("salary is 4000$");
}

/*
  If Challenge
*/

let holidays = 0;
let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}

let fruits = ["apple", "banana", "cherry", "banana", "elderberry"];
fruits.slice(2, -1);

console.log(fruits.slice(2, -1));

// =======================
// assignment 1 "week-> 6"
// =======================
console.error("assignment 1 week-> 6");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num12 = 3;

// Method 1
console.log(myFriends.slice(false, num12)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.splice(num12, true);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// =======================
// assignment 2 "week-> 6"
// =======================
console.error("assignment 2 week-> 6");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

// =======================
// assignment 3 "week-> 6"
// =======================
console.error("assignment 3 week-> 6");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

// =======================
// assignment 4 "week-> 6"
// =======================
console.error("assignment 4 week-> 6");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// =======================
// assignment 5 "week-> 6"
// =======================
console.error("assignment 5 week-> 6");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.indexOf(needle) !== -1) {
  console.log("found");
} else {
  console.log("not found");
}

if (haystack.includes(needle) === true) {
  console.log("found");
} else {
  console.log("not found");
}

if (haystack.splice(haystack.indexOf(needle), 1).join("") === needle) {
  console.log("found");
} else {
  console.log("not found");
}

// =======================
// assignment 6 "week-> 6"
// =======================
console.error("assignment 6 week-> 6");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(
  allArrs.concat(arr1, arr2).sort().slice(-arr1.length).join("").toLowerCase()
); // fxy

//=====================
//== Array Challenge ==
//=====================
console.error("Array Challenge");

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero, counter + true).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(true, counter).reverse()); // ["Elham", "Mazero"]

console.log(
  my
    .slice(true, counter)
    .reverse()
    .shift()
    .slice(zero, counter - 1) +
    my
      .slice(true, counter)
      .reverse()
      .pop()
      .slice(-counter - true)
); // "Elzero"

console.log(); // "rO"

// =======================
// assignment 1 "week-> 7"
// =======================
console.error("assignment 1 week-> 7");

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}

// =======================
// assignment 2 "week-> 7"
// =======================
console.error("assignment 2 week-> 7");

let start1 = 10;
let end1 = 0;
let stop = 3;

for (let i = start1; i > end1; i--) {
  if (i < start1) {
    console.log(`0${i}`);
    if (i === stop) {
      break;
    }
  } else {
    console.log(i.toString());
  }
}

// =======================
// assignment 3 "week-> 7"
// =======================
console.error("assignment 3 week-> 7");

let start2 = 1;
let end2 = 6;
let breaker = 2;

for (let i = start2; i <= end2; i++) {
  console.log(i.toString());
  for (let j = breaker; j < end2; j += breaker) {
    console.log(`-${j}`);
  }
}

// =======================
// assignment 4 "week-> 7"
// =======================
console.error("assignment 4 week-> 7");

let index = 10;
let jump = 2;

for (;;) {
  if (index > jump) {
    console.log(index);
  } else {
    break;
  }
  index -= jump;
}

// =======================
// assignment 5 "week-> 7"
// =======================
console.error("assignment 5 week-> 7");

let friends1 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = letter.indexOf(letter); i < friends1.length; i++) {
  if (friends1[i].toLowerCase().startsWith(letter)) {
    continue;
  }
  console.log(`${i + letter.length}=>${friends1[i]}`);
}

// =======================
// assignment 6 "week-> 7"
// =======================
console.error("assignment 6 week-> 7");

let start3 = 0;
let swappedName = "elZerO";
let result = "";
for (let i = start3; i < swappedName.split("").length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else {
    result += swappedName[i].toLowerCase();
  }
}

console.log(result);

// =======================
// assignment 7 "week-> 7"
// =======================
console.error("assignment 7 week-> 7");

let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start4; i < mix.length; i++) {
  if (typeof mix[i] === "string" || mix[i] === mix[start4]) continue;
  console.log(mix[i]);
}

// =======================
// assignment 8 "week-> 7"
// =======================
console.error("assignment 8 week-> 7");
