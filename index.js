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

let friends3 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter1 = 0;

while (index1 < friends3.length) {
  if (
    typeof friends3[index1] === "number" ||
    friends3[index1].toLowerCase().startsWith("a")
  ) {
    index1++;
    continue;
  }
  console.log(friends3[index1]);
  index1++;
}

//====================
//== Loop Challenge ==
//====================
console.error("Loop Challenge");

let myAdmins = ["Ahmed", "Osama", "Sayed", "somi", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

// this is after i learn DOM

let createContentForLoopChllg = document.createElement("div");
let createTitleForLoopChllg = document.createElement("h1");
let createContentForAdmins = document.createElement("div");
let mainContainer = document.querySelector(".main__container");

createContentForLoopChllg.className = "loop__challenge";
createContentForAdmins.className = "admins";
createTitleForLoopChllg.className = "main__title";

mainContainer.appendChild(createContentForLoopChllg);
createContentForLoopChllg.appendChild(createTitleForLoopChllg);
createContentForLoopChllg.appendChild(createContentForAdmins);

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i].toLowerCase() === "stop") {
    break;
  }
  createTitleForLoopChllg.innerHTML = `We Have ${i + 1} Admins`;
  let createTitleForAdmins = document.createElement("h3");
  createTitleForAdmins.innerHTML = `the admin for team ${i + 1} is ${
    myAdmins[i]
  }`;
  createContentForAdmins.appendChild(createTitleForAdmins);

  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0].toLowerCase() === myEmployees[j][0].toLowerCase()) {
      let createNameOfEmloyees = document.createElement("p");
      createNameOfEmloyees.innerHTML += myEmployees[j];
      createContentForAdmins.appendChild(createNameOfEmloyees);
    }
  }
}

// BEFORE THAT I MADE ONE LIKE THIS:::

console.log(" on screen ");

// let myAdminsS = ["Ahmed", "Osama", "sayed", "Stop", "omar", "simo"];
// let myWorker = ["Amgad", "simo", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// let s = 0;
// document.write(`<div class="mainDiv" style = "width:100%;">`);

// document.write(
//   `<h1 style = " padding:15px; text-align:center; background-color:#5cd322; color:white;">Loop, White, Do challenge</h1>`
// );
// for (; s < myAdminsS.length; s++) {
//   if (myAdminsS[s].toLowerCase() === "stop") break;
// }
// document.write(
//   `<p style="padding:20px; width:100%; background-color:rgb(185, 185, 16);">We Have ${s} Admins</p>`
// );
// document.write(`<hr>`);
// document.write(`<div class="nestedDiv" style="100%">`);
// mainLoop: for (let k = 0; k < s; k++) {
//   document.write(
//     `<div style="padding:20px; background-color:rgb(185, 185, 16);">We Admin For Team ${
//       k + 1
//     } Is ${myAdminsS[k]}</div>`
//   );
//   document.write(
//     `<h3 style="padding:15px; background-color:rgb(185, 185, 16);">Team Members:</h3>`
//   );
//   nestedLoop: for (let l = 0; l < myWorker.length; l++) {
//     if (
//       myAdminsS[k][0] === myWorker[l][0] ||
//       myAdminsS[k][0].toUpperCase() === myWorker[l][0].toUpperCase() ||
//       myAdminsS[k][0].toLowerCase() === myWorker[l][0].toLowerCase()
//     ) {
//       document.write(
//         `<p style="padding:10px; background-color:rgb(185, 185, 16);">=> ${myWorker[l]}</p>`
//       );
//     }
//   }
//   document.write(`<hr>`);
// }
// document.write(`</div>`);
// document.write(
//   `<h1 style = " padding:15px; text-align:center; background-color:#5cd322; color:white;">DONE,</h1>`
// );
// document.write(`</div>`);

// =======================
// assignment 1 "week-> 8"
// =======================
console.error("assignment 1 week-> 8");

function sayHello(theName, theGender) {
  return theGender === "Male"
    ? `Hello Mr ${theName}`
    : theGender === undefined
    ? `Hello ${theName}`
    : `Hello Miss ${theName}`;
}

// Needed Output
console.log(sayHello("Osama", "Male")); // "Hello Mr Osama"
console.log(sayHello("Eman", "Female")); // "Hello Miss Eman"
console.log(sayHello("Sameh")); // "Hello Sameh"

// =======================
// assignment 2 "week-> 8"
// =======================
console.error("assignment 2 week-> 8");

function calculate(firstNum, secondNum, operation) {
  if (firstNum === undefined || secondNum === undefined) {
    return `Second Number Not Found`;
  } else {
    if (operation === "add" || operation === undefined) {
      return firstNum + secondNum;
    } else if (operation === "subtract") {
      return firstNum - secondNum;
    } else if (operation === "multiply") {
      return firstNum * secondNum;
    }
  }
  console.log(firstNum === "");
}

// Needed Output
console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600

// =======================
// assignment 3 "week-> 8"
// =======================
console.error("assignment 3 week-> 8");

function ageInTime(theAge) {
  if (theAge <= 10 || theAge >= 100) {
    return `Age Out OF Range`;
  } else {
    return `Details About Your Age
  Your Age Is ${theAge} => ${theAge * 12} Months
  Your Age Is ${theAge} => ${theAge * 365.25} Days
  Your Age Is ${theAge} => ${theAge * 365.25 * 24} Hours
  Your Age Is ${theAge} => ${theAge * 365.25 * 24 * 60} Minutes
  Your Age Is ${theAge} => ${theAge * 365.25 * 24 * 60 * 60} Seconds
  `;
  }
}

console.log(ageInTime(100));

// =======================
// assignment 4 "week-> 8"
// =======================
console.error("assignment 4 week-> 8");

function checkStatus(a, b, c) {
  // Your Code Here
  let userData = [a, b, c];
  let name, age, boolean;
  for (let i = 0; i < userData.length; i++) {
    if (typeof userData[i] === "string") {
      name = userData[i];
    } else if (typeof userData[i] === "number") {
      age = userData[i];
    } else if (typeof userData[i] === "boolean") {
      boolean = userData[i];
    }
  }
  if (boolean === true) {
    return ` Hello ${name}, Your Age Is ${age}, You Are Available For Hire`;
  } else {
    return ` Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`;
  }
}

// Needed Output
console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// =======================
// assignment 5 "week-> 8"
// =======================
console.error("assignment 5 week-> 8");
console.log("on screen");

// you will know after learn DOM

function createSelectBox(startYear, endYear) {
  let createSelect = document.createElement("select");
  mainContainer.appendChild(createSelect);
  createSelect.className = "select__box__year";
  for (let i = startYear; i <= endYear; i++) {
    let createOption = document.createElement("option");
    createSelect.appendChild(createOption);
    createOption.textContent = `${i}`;
    createOption.value = `${i}`;
  }
}
createSelectBox(2000, 2021);

// old one is

// function createSelectBox(startYear, endYear) {
//   document.write(
//     `<div style = "padding:15px; text-align:center; background-color:rgb(185, 185, 16); color:white;">`
//   );
//   document.write(
//     `<select name="years" id="years"style = "padding:15px 30px; text-align:center; background-color:#5cd322; color:white;border:none;outline:0; font-size:20px;">`
//   );
//   for (let i = startYear; i <= endYear; i++) {
//     document.write(`<option>${i}</option>`);
//   }
//   document.write(`</select>`);
//   document.write("</div>");
// }

// createSelectBox(2002, 2024);

// =======================
// assignment 6 "week-> 8"
// =======================
console.error("assignment 6 week-> 8");

function multiply(...nums) {
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "string") {
      continue;
    }
    result *= Math.trunc(nums[i]);
  }
  return result;
}

console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000

// =======================
// assignment 1 "week-> 9"
// =======================
console.error("assignment 1 week-> 9");

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    return `${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}`;
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    return Math.trunc(parseInt(zAge));
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return zCountry.slice(0, 2).toUpperCase();
  }
  function fullDetails() {
    // Write Your Code Here
    return ` Hello ${namePattern(zName)}., Your Age Is ${ageWithMessage(
      zAge
    )}, You Live In ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// =======================
// assignment 2 "week-> 9"
// =======================
console.error("assignment 2 week-> 9");

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// =======================
// assignment 3 "week-> 9"
// =======================
console.error("assignment 3 week-> 9");

let checker =
  (zName = "unknow") =>
  (status = "unknow") =>
  (salary = "unknow") =>
    status === "Available"
      ? `${zName}, My Salary Is ${salary}`
      : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")()); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// =======================
// assignment 4 "week-> 9"
// =======================
console.error("assignment 4 week-> 9");

function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i])) {
      result += parseInt(data[i]);
    }
  }
  if (result == 0) {
    return `All Is Strings`;
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

//==============================
//== Arrow Function Challenge ==
//==============================
console.error("Arrow Function Challenge");

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = (...names) =>
  `There Are ${names.length} ${typeof names[0]} [${names.join(
    "] , ["
  )}] => Done!`;

console.log(names("Osama", "Mohamed", "Ali", "Ali", "Ibrahim"));

// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + nums[0];

console.log(calc(10, myNumbers[0], myNumbers[1])); //80

// ========================
// assignment 1 "week-> 10"
// ========================
console.error("assignment 1 week-> 10");

let mix1 = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let checkAndConcat = mix1
  .map(function (el) {
    return isNaN(parseInt(el)) ? el : "";
  })
  .reduce(function (acc, cur) {
    return acc + cur;
  });

console.log(checkAndConcat);

// Elzero

// ========================
// assignment 2 "week-> 10"
// ========================
console.error("assignment 2 week-> 10");

let myString = "EElllzzzzzzzeroo";

let filterRepeatLetter = myString
  .split("")
  .filter(function (el, index) {
    return myString.indexOf(el) === index ? el : "";
  })
  .reduce(function (acc, cur) {
    return acc + cur;
  });

// Elzero

console.log(filterRepeatLetter);

// ========================
// assignment 3 "week-> 10"
// ========================
console.error("assignment 3 week-> 10");

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let myArray1 = myArray
  .reduce(function (acc, cur) {
    return acc.concat(cur);
  }, [])
  .join("");

console.log(myArray1);

// Elzero

// ========================
// assignment 4 "week-> 10"
// ========================
console.error("assignment 4 week-> 10");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let filterAndMap = numsAndStrings
  .filter(function (el) {
    return !isNaN(parseInt(el));
  })
  .map(function (el) {
    return -el;
  });

// [-1, -10, 10, 20, -5, -3]

console.log(filterAndMap);

// ========================
// assignment 5 "week-> 10"
// ========================
console.error("assignment 5 week-> 10");

let nums = [2, 12, 11, 5, 10, 1, 99];

let retrunFiveHund = nums.reduce(function (acc, cur) {
  return cur % 2 === 0 ? acc * cur : acc + cur;
}, 1);

// 500

console.log(retrunFiveHund);

//=====================================
//== higher order Function Challenge ==
//=====================================
console.error("higher order Function Challenge");

/*
  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString1 = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString1
  .split(",")
  .filter(function (el) {
    return isNaN(el);
  })
  .map(function (el, index, array) {
    if (el.startsWith("_")) {
      return " ";
    }
    if (el.length === !false + !false) {
      return el.charAt(false);
    }
    if (index === array.length - true) {
      return "";
    }
    return el;
  })
  .reduce(function (acc, cur) {
    return acc + cur;
  });

console.log(solution); // Elzero Web School

// ========================
// assignment 1 "week-> 11"
// ========================
console.error("assignment 1 week-> 11");

// Create Your Object Here
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live In ${this.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// ========================
// assignment 2 "week-> 11"
// ========================
console.error("assignment 2 week-> 11");

// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

let objMethodTwo = new Object();
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({});
objMethodThree.property = "Method Three";

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({});
objMethodFour.property = "Method Four";

console.log(objMethodFour.property); // "Method Four"

// ========================
// assignment 3 "week-> 11"
// ========================
console.error("assignment 3 week-> 11");

let a11 = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({ a11 }, threeNums, twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

// ========================
// assignment 4 "week-> 11"
// ========================
console.error("assignment 4 week-> 11");

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log("#".repeat(20));
}

// Ouput

// ("The Game Name Is Trinity Universe");
// ("The Publisher Is NIS America");
// ("The Price Is 40");
// ("####################");
// ("The Game Name Is Titan Quest");
// ("The Publisher Is THQ");
// ("The Price Is 50");
// ("- Game Has Releases");
// ("First => Immortal Throne");
// ("Second => Ragnarök");
// ("Third => Atlantis");
// ("####################");
// ("The Game Name Is YS");
// ("The Publisher Is Falcom");
// ("The Price Is 40");
// ("- Game Has Releases");
// ("First => Oath in Felghana");
// ("Second => Ark Of Napishtim");
// ("Third => origin");
// ("####################");

// ========================
// assignment 1 "week-> 12"
// ========================
console.error("assignment 1 week-> 12");
console.log("look to code");

let firstWayToGetElement = document.getElementById("elzEro");
let secondWayToGetElement = document.getElementsByTagName("div")[0]; //
let thirdWayToGetElement = document.getElementsByName("elzEro")[0];
let forthWayToGetElement = document.getElementsByClassName("elzEro")[0];
let fifthWayToGetElement = document.querySelector(".elzEro");
let sixthWayToGetElement = document.querySelector("#elzEro");
let seventhWayToGetElement = document.querySelector("elzEro");
let eighthWayToGetElement = document.querySelector("div"); //
let ninethWayToGetElement = document.querySelectorAll(".elzEro")[0];
let tenthWayToGetElement = document.querySelectorAll("#elzEro")[0];
let eleventhWayToGetElement = document.querySelectorAll("elzEro")[0];
let twelvethWayToGetElement = document.querySelectorAll("div")[0]; //

// ========================
// assignment 2 "week-> 12"
// ========================
console.error("assignment 2 week-> 12");
console.log("read code you will find everything");

let getImg = document.getElementsByClassName("img");

let arrImg = [...getImg];

arrImg.forEach((element) => {
  element.firstElementChild.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  element.firstElementChild.setAttribute("alt", "Elzero Logo");
  element.style.display = "none";
});

// ========================
// assignment 3 "week-> 12"
// ========================
console.error("assignment 3 week-> 12");
console.log("on screen");

// form
let createFormWeekTweleve = document.createElement("form");

createFormWeekTweleve.setAttribute("action", "");

mainContainer.appendChild(createFormWeekTweleve);

createFormWeekTweleve.style.cssText = `
display:flex; 
flex-direction:column;
align-items:center;
width:100%;
gap:20px;
padding:20px 60px;`;

//input => number type

let createInputWeekTweleve = document.createElement("input");

createInputWeekTweleve.setAttribute("type", "number");
createInputWeekTweleve.setAttribute("name", "dollar");
createInputWeekTweleve.setAttribute("placeholder", "Usd Dollar");

createFormWeekTweleve.appendChild(createInputWeekTweleve);

createInputWeekTweleve.style.cssText = `
padding: 20px 10px;
border: 1px solid rgb(78, 134, 134);
outline: none;
border-radius: 15px;
font-size: 16px;
color:rgb(78, 134, 134);`;

// result

let createDivWeekTweleve = document.createElement("div");

createDivWeekTweleve.className = "result";
createDivWeekTweleve.innerHTML = `{<span>0</span>} USD Dollar = {<span>0</span>} Egyptian Pound`;

createFormWeekTweleve.appendChild(createDivWeekTweleve);

createDivWeekTweleve.style.cssText = `
font-size: 16px;
color:rgb(78, 134, 134);`;

//==============================
createInputWeekTweleve.addEventListener("input", function (el) {
  if (el.target.value === "") {
    createDivWeekTweleve.innerHTML = `{<span>0</span>} USD Dollar = {<span>0</span>} Egyptian Pound`;
  } else {
    createDivWeekTweleve.innerHTML = `{<span>${
      el.target.value
    }</span>} USD Dollar = {<span>${(el.target.value * 50.2).toFixed(
      2
    )}</span>} Egyptian Pound`;
  }
  createDivWeekTweleve.firstElementChild.style.cssText = `
  font-size: 16px;
  color:rgb(27, 100, 100);
  font-weight:bold;`;
  createDivWeekTweleve.lastElementChild.style.cssText = `
  font-size: 16px;
  color:rgb(27, 100, 100);
  font-weight:bold;`;
});
//==============================

// ========================
// assignment 4 "week-> 12"
// ========================
console.error("assignment 4 week-> 12");

let getOne = document.getElementsByClassName("one")[0];
let getTwo = document.getElementsByClassName("two")[0];

let getOneTitle = getOne.getAttribute("title");
let getTwoTitle = getTwo.getAttribute("title");
let getOneInner = getOne.innerHTML;
getOne.setAttribute("title", getTwoTitle);
getTwo.setAttribute("title", getOneTitle);

getOne.innerHTML = getTwo.innerHTML;
getTwo.innerHTML = `${getOneInner} ${getTwo.attributes.length}`;

console.log(getOne);
console.log(getTwo);

// ========================
// assignment 5 "week-> 12"
// ========================
console.error("assignment 5 week-> 12");

let checkAlt = document.querySelectorAll(".checkAlt");

let checkAltArr = [...checkAlt];

checkAltArr.forEach((element) => {
  if (element.hasAttribute("alt")) {
    element.setAttribute("alt", "old");
  } else {
    element.setAttribute("alt", "new alt");
  }
  console.log(element);
});

// ========================
// assignment 6 "week-> 12"
// ========================
console.error("assignment 6 week-> 12");
console.log("on screen");

// Get the main form and its input elements
let getMainForm = document.getElementsByClassName("create__elements")[0];
let getNumForm = getMainForm.querySelector("[name='elements']");
let getTextForm = getMainForm.querySelector("[name='texts']");

// Add a submit event listener to the form
getMainForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the section element once, outside the loop
  let getSection = document.getElementsByName("type")[0];
  if (!getSection) {
    console.error("Element with name 'type' not found");
    return;
  }

  // Get the results container
  let results = document.querySelector(".results12");
  if (!results) {
    console.error("Element with class 'results12' not found");
    return;
  }

  // Loop to create new elements based on the number provided
  for (let i = 0; i < parseInt(getNumForm.value); i++) {
    // Create a new element of the type specified in the section
    let createNewElement = document.createElement(getSection.value);
    createNewElement.id = `id-${i + 1}`;
    createNewElement.className = `box`;
    createNewElement.setAttribute("title", "Element");

    // Create a text node with the provided text
    let createNote = document.createTextNode(getTextForm.value);

    // Append the text node to the new element
    createNewElement.appendChild(createNote);

    // Append the new element to the results container
    results.appendChild(createNewElement);
  }
});

// ========================
// assignment 1 "week-> 13"
// ========================
console.error("assignment 1 week-> 13");

console.log("in index.html in head and check on screen");

// ========================
// assignment 2 "week-> 13"
// ========================
console.error("assignment 2 week-> 13");
console.log("on screen");

let assignment_2_week_13 = document.querySelector(".assignment_2_week_13");
let input_add = assignment_2_week_13.querySelector(".input_add");
let input_remove = assignment_2_week_13.querySelector(".input_remove");
let current_element = assignment_2_week_13.querySelector("#current_element");
let show__classes = assignment_2_week_13.querySelector("#show__classes");

// FROM AI 😁
function updatedisplay() {
  let classes = Array.from(show__classes.classList).sort();
  if (classes.length === 0) {
    show__classes.textContent = "no classes to show";
    show__classes.removeAttribute("class");
  } else {
    let spansHTML = "";
    for (let i = 0; i < classes.length; i++) {
      spansHTML += `<span>${classes[i]}</span> `;
    }
    show__classes.innerHTML = spansHTML.trim();
  }
}
//===============

function addClasses() {
  let result = "";
  result += input_add.value.toLowerCase().trim();
  show__classes.classList.add(...result.split(" ").sort());
  input_add.value = "";
  updatedisplay();
}

function removeClasses() {
  if (
    !show__classes.classList.contains(
      ...input_remove.value.toLowerCase().split(" ")
    )
  ) {
    input_remove.setAttribute("placeholder", "ops!! not found 💔");
    input_remove.value = "";
  } else {
    show__classes.classList.remove(
      ...input_remove.value.toLowerCase().trim().split(" ").sort()
    );
    show__classes.innerHTML = show__classes.className;
    input_remove.setAttribute("placeholder", "found💗, and still have some ");
    input_remove.value = "";
    if (show__classes.classList.length === 0) {
      input_remove.setAttribute("placeholder", "done! 💪");
    } else {
      input_remove.setAttribute(
        "placeholder",
        "ops! still have some classes 😁"
      );
    }
  }
  updatedisplay();
}

input_add.addEventListener("blur", addClasses);

input_remove.addEventListener("blur", removeClasses);

// ========================
// assignment 3 "week-> 13"
// ========================
console.error("assignment 3 week-> 13");
console.log("on screen");

let getElOurElement = document.querySelector(".our-element");
let assignment_3_week_13 = document.querySelector(".assignment_3_week_13");
let p = assignment_3_week_13.querySelector("p");
let createElementAndAttributes = function (t, c, ttls, dV, txt) {
  let element = document.createElement(t);
  element.className = c;
  element.title = ttls;
  element.setAttribute("data-value", dV);
  element.textContent = txt;
  return element;
};

let createELStart = createElementAndAttributes(
  "div",
  "start",
  "Start Element",
  "Start",
  "Start"
);
let createELEnd = createElementAndAttributes(
  "div",
  "end",
  "End Element",
  "End",
  "End"
);

getElOurElement.addEventListener("click", function () {
  getElOurElement.before(createELStart);
  getElOurElement.after(createELEnd);
  let assignment_3_week_13 = document.querySelector(".assignment_3_week_13");
  let p = assignment_3_week_13.querySelector("p");
  p.remove();
});

// ========================
// assignment 4 "week-> 13"
// ========================
console.error("assignment 4 week-> 13");

let assignment_4_week_13 = document.querySelector(".assignment_4_week_13");

console.log(assignment_4_week_13.lastChild.nodeValue.trim());

// ========================
// assignment 5 "week-> 13"
// ========================
console.error("assignment 5 week-> 13");

let assignment_5_week_13 = document.querySelector(".assignment_5_week_13");

let allElements = assignment_5_week_13.querySelectorAll(
  " div ,span ,p, article, section"
);

console.log([...allElements]);

[...allElements].forEach((element) => {
  element.addEventListener("click", function () {
    console.log(`this is ${element.nodeName.toLowerCase()} element`);
  });
});

//===================
//== DOM Challenge ==
//===================
console.error("DOM Challenge");

// ==================== header ======================
let createMainContainerDiv = document.createElement("div");
createMainContainerDiv.className = "container";
createMainContainerDiv.id = "mainContainer";

let createMainHeader = document.createElement("header");
createMainHeader.className = "main__header";
createMainHeader.id = "main__header";
createMainHeader.style.cssText =
  "background-color:rgb(78, 134, 134); color:#fff; width:100%;padding:0 60px;";

let createMainLogo = document.createElement("a");
createMainLogo.className = "main__logo";
createMainLogo.id = "main__logo";
createMainLogo.textContent = "Elzero";

let createMainNav = document.createElement("nav");
let createMainNavUl = document.createElement("ul");

let navListArr = ["home", "about", "service", "contact"];
for (let i = 0; i < navListArr.length; i++) {
  let createMainNavUlLi = document.createElement("li");
  createMainNavUlLi.innerHTML = navListArr[i];
  createMainNavUl.appendChild(createMainNavUlLi);
}

mainContainer.appendChild(createMainContainerDiv);
createMainContainerDiv.appendChild(createMainHeader);
createMainHeader.appendChild(createMainLogo);
createMainHeader.appendChild(createMainNav);
createMainNav.appendChild(createMainNavUl);

// ==================== content ======================

let createMainContent = document.createElement("div");
createMainContent.className = "content";

createMainContent.style.cssText = `
display:flex;
gap:20px;
flex-wrap:wrap;
justify-content:center;
margin:20px 0;
`;
createMainContainerDiv.appendChild(createMainContent);

for (let i = 0; i < 15; i++) {
  let createContentBoxes = document.createElement("div");
  createContentBoxes.className = `box ${i + 1}`;
  createContentBoxes.innerHTML = `<b style="font-size:45px;">${
    i + 1
  }</b> <span>product</span>`;
  createContentBoxes.style.cssText = `
  background-color:#fff;
  width:100%;
  min-width:300px;
  max-width:350px;
  display:flex;
  justify-content:center;
  gap:20px;
  flex-direction: column;
  align-items: center;
  padding:30px 20px;`;

  createMainContent.appendChild(createContentBoxes);
}

// ==================== footer ======================

let createMainFooter = document.createElement("footer");
createMainFooter.innerHTML = "copyright,2025 💗";
createMainContainerDiv.appendChild(createMainFooter);
createMainFooter.style.cssText =
  "background-color:rgb(78, 134, 134); color:#fff; width:100%;padding:20px 60px;text-align:center;";

console.log("on screen");
// ========================
// assignment 1 "week-> 14"
// ========================
console.error("assignment 1 week-> 14");
console.log("on screen");

function prompttt() {
  let promptValue;

  while (true) {
    promptValue = window.prompt("Type numbers from - to");

    if (promptValue === null) {
      console.log("User canceled the input.");
      break;
    }

    let inputValues = promptValue.split(" ");

    let arr = [];
    inputValues.forEach((num) => {
      if (!isNaN(parseInt(num))) {
        arr.push(parseInt(num));
      }
    });

    if (arr.length === 0) {
      window.alert("No valid numbers entered🤔. Please try again.");
      continue;
    }

    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);

    for (let i = minNum; i <= maxNum; i++) {
      console.log(i);
    }

    break;
  }
}

//setTimeout(prompttt, 5000);

// ========================
// assignment 2 "week-> 14"
// ========================
console.error("assignment 2 week-> 14");
console.log("on screen");

// setTimeout(() => {
//   let callPopup = document.querySelector("body .layout");
//   let btn = document.querySelector("body .layout button");
//   callPopup.style.display = "block";
//   btn.addEventListener("click", () => {
//     btn.parentElement.remove();
//   });
//   callPopup.addEventListener("click", () => {
//     btn.parentElement.remove();
//   });
// }, 5000);

// ========================
// assignment 3 "week-> 14"
// ========================
// ========================
// assignment 4 "week-> 14"
// ========================
// ========================
// assignment 5 "week-> 14"
// ========================
console.error("assignment 3 week-> 14");
console.error("assignment 4 week-> 14");
console.error("assignment 5 week-> 14");
console.log("on screen");

let counterSet = document.querySelector("main .counter");
let setCounterSet = setInterval(() => {
  counterSet.innerHTML -= 1;
  if (counterSet.innerHTML === "0") {
    clearInterval(setCounterSet);
  }
  if (counterSet.innerHTML === "5") {
    // open(
    //   "https://codepen.io/guine123",
    //   "_blank",
    //   "width=400 ,height=400, left=500,top=500"
    // );
  }
}, 1000);

// ========================
// just for try localStorge
// ========================

let gitList = document.querySelectorAll("ul li");
let exp = document.querySelector(".experience");
if (window.localStorage.getItem("background-color")) {
  exp.style.background = window.localStorage.getItem("background-color");
}
gitList.forEach((li) => {
  li.addEventListener("click", (event) => {
    window.localStorage.setItem(
      "background-color",
      event.currentTarget.dataset.color
    );
    exp.style.background = window.localStorage.getItem("background-color");
  });
});

// ========================
// assignment 1 "week-> 15"
// ========================
// ========================
// assignment 2 "week-> 15"
// ========================
console.error("assignment 1 week-> 15");
console.error("assignment 2 week-> 15");
console.log("on screen");

// font family

let getSelectFontFmly = document.querySelectorAll(
  "#fontsFamily optgroup option"
);
let first_assignment_1 = document.querySelector(".first_assignment_1");

// check if font family in local storge

if (window.localStorage.getItem("font-family")) {
  first_assignment_1.style.fontFamily =
    window.localStorage.getItem("font-family");
}

// Add event listeners to the select options

[...getSelectFontFmly].forEach((el) => {
  el.addEventListener("click", () => {
    first_assignment_1.style.fontFamily = el.value;
    window.localStorage.setItem("font-family", el.value);
    window.localStorage.getItem("font-family");
  });
});

// color

let getSelectColorType = document.querySelectorAll(
  "#colorType optgroup option"
);
let first_assignment_1_h1 = document.querySelector(
  ".first_assignment_1 .site h1"
);
let first_assignment_1_btn = document.querySelector(
  ".first_assignment_1 .site button"
);
let first_assignment_1_title = document.querySelectorAll(
  ".first_assignment_1 .settings optgroup"
);
let first_assignment_1_border_lft = document.querySelector(
  ".first_assignment_1 .settings"
);

// check if color in local storge

if (window.localStorage.getItem("background && color")) {
  first_assignment_1_h1.style.color = window.localStorage.getItem(
    "background && color"
  );
  first_assignment_1_btn.style.background = window.localStorage.getItem(
    "background && color"
  );
  [...first_assignment_1_title].forEach((ele) => {
    ele.style.color = window.localStorage.getItem("background && color");
  });
  first_assignment_1_border_lft.style.borderColor = window.localStorage.getItem(
    "background && color"
  );
}

// Add event listeners to the select options

[...getSelectColorType].forEach((el) => {
  el.addEventListener("click", () => {
    first_assignment_1_h1.style.color = el.value;
    first_assignment_1_btn.style.background = el.value;
    [...first_assignment_1_title].forEach((ele) => {
      ele.style.color = el.value;
    });
    first_assignment_1_border_lft.style.borderColor = el.value;
    window.localStorage.setItem("background && color", el.value);
  });
});

// font size

let getSelectFontSize = document.querySelectorAll("#fontSize optgroup option");
let first_assignment_1_h1_size = document.querySelector(
  ".first_assignment_1 .site h1"
);
let first_assignment_1_p_size = document.querySelector(
  ".first_assignment_1 .site p"
);
let first_assignment_1_btn_size = document.querySelector(
  ".first_assignment_1 .site button a"
);

let first_assignment_1_titleSize = document.querySelectorAll(
  ".first_assignment_1 .settings optgroup"
);

// check if font size in local storge

if (window.localStorage.getItem("font-size")) {
  first_assignment_1_h1_size.style.fontSize =
    window.localStorage.getItem("font-size");
  first_assignment_1_btn_size.style.fontSize =
    window.localStorage.getItem("font-size");
  [...first_assignment_1_titleSize].forEach((ele) => {
    ele.style.fontSize = window.localStorage.getItem("font-size");
  });
}

// Add event listeners to the select options

[...getSelectFontSize].forEach((el) => {
  el.addEventListener("click", () => {
    first_assignment_1_h1_size.style.fontSize = el.value;
    first_assignment_1_btn_size.style.fontSize = el.value;
    [...first_assignment_1_titleSize].forEach((ele) => {
      ele.style.fontSize = el.value;
    });
    window.localStorage.setItem("font-size", el.value);
  });
});

// =============
// BOM Challenge
// =============
console.error("BOM Challenge");
console.log("on screen");

let BOM_Challenge = document.querySelector(".BOM_Challenge");
let Input_field = BOM_Challenge.querySelector(".Input_field");
let textInput = Input_field.querySelector("input");
let inputBtn = Input_field.querySelector("button");
let output = BOM_Challenge.querySelector(".output");

let tasksArray = [];

getDataFromLocalStorge();

if (window.localStorage.getItem("task")) {
  tasksArray = JSON.parse(window.localStorage.getItem("task"));
}

inputBtn.addEventListener("click", () => {
  if (textInput.value !== "") {
    addTasksToArray(textInput.value);
    textInput.value = "";
  }
});

textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && textInput.value !== "") {
    addTasksToArray(textInput.value);
    textInput.value = "";
  }
});

function addTasksToArray(textInput) {
  let tasksObj = {
    id: Date.now(),
    text: textInput,
    completed: false,
  };
  tasksArray.push(tasksObj);
  addTasksToPage(tasksArray);
  addTasksToLocalStorage(tasksArray);
  clearAll();
}

function addTasksToPage(tasksArray) {
  output.innerHTML = "";
  tasksArray.forEach((task) => {
    let craeteLMainList = document.createElement("div");
    craeteLMainList.className = "task";
    craeteLMainList.setAttribute("data-id", task.id);
    let craeteOutputList = document.createElement("p");
    let craeteBtnList = document.createElement("button");
    craeteBtnList.innerHTML = "delete";
    removeTasksFromPage(craeteBtnList);
    output.appendChild(craeteLMainList);
    craeteLMainList.appendChild(craeteOutputList);
    craeteLMainList.appendChild(craeteBtnList);
    craeteOutputList.textContent = task.text;
  });
}

function addTasksToLocalStorage(tasksArray) {
  window.localStorage.setItem("task", JSON.stringify(tasksArray));
}

function getDataFromLocalStorge() {
  let data = window.localStorage.getItem("task");
  if (data) {
    let tasksArray = JSON.parse(data);
    addTasksToPage(tasksArray);
  }
}

function removeTasksFromPage(tasksbtn) {
  tasksbtn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "delete") {
      e.target.parentElement.remove();
      removeTasksFromLocalStorage(
        e.target.parentElement.getAttribute("data-id")
      );
    }
  });
}
function removeTasksFromLocalStorage(tasksbtn) {
  tasksArray = tasksArray.filter((task) => {
    return task.id != tasksbtn;
  });
  addTasksToLocalStorage(tasksArray);
  clearAll();
}

if (output.children.length !== 0) {
  document.querySelector(".BOM_Challenge > button").style.display = "block";
}
function clearAll() {
  if (output.children.length !== 0) {
    document.querySelector(".BOM_Challenge > button").style.display = "block";
  } else {
    document.querySelector(".BOM_Challenge > button").style.display = "none";
  }
  document
    .querySelector(".BOM_Challenge > button")
    .addEventListener("click", () => {
      output.innerHTML = "";
      localStorage.removeItem("task");
    });
}

// ========================
// assignment 1 "week-> 16"
// ========================
console.error("assignment 1 week-> 16");
let myNumberss = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [aaaaa, , , , ee] = myNumberss;

console.log(aaaaa * ee); // 5

// ========================
// assignment 2 "week-> 16"
// ========================
console.error("assignment 2 week-> 16");

let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here
let [aaaaaa, bbbb, ccc, [ddd, eee, [ff, gg]]] = mySkills;

console.log(
  `My Skills: ${aaaaaa}, ${bbbb}, ${ccc}, ${ddd}, ${eee}, ${ff}, ${gg}`
);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// ========================
// assignment 3 "week-> 16"
// ========================
console.error("assignment 3 week-> 16");

let arr11 = ["Ahmed", "Sameh", "Sayed"];
let arr22 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
let bestFriend = [...arr3.slice(1), arr11[0]];

let [a2, b2, c2] = bestFriend;

console.log(`My Best Friends: ${a2}, ${b2}, ${c2}`);

// My Best Friends: Shady, Mahmoud, Ahmed

// ========================
// assignment 4 "week-> 16"
// ========================
console.error("assignment 4 week-> 16");

let memberr = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

let {
  age: a4,
  working: w,
  country: c1,
  hobbies: [h1, , h3],
} = memberr;
// Write Your Destructuring Assignment Here

console.log(`My Age Is ${a4} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c1}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

// ========================
// assignment 5 "week-> 16"
// ========================
console.error("assignment 5 week-> 16");

let game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

let { title: t, developer: d1, releases: r } = game;
let { "Oath In Felghana": o, "Ark Of Napishtim": a3, Origin: or } = r;
let [u, j] = o;
let { US: u_price, JAP: j_price } = a3;
// Write Your Destructuring Assignment/s Here

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d1} Games`);
// And I Love Falcom Games

console.log(
  `My Best Release Is ${Object.keys(r)[0]} It Released in ${u} & ${j}`
);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${Object.keys(r)[1]}`);
// Although I Love Ark Of Napishtim

console.log(`${Object.keys(r)[1]} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${Object.keys(r)[1]} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

// ========================
// assignment 6 "week-> 16"
// ========================
console.error("assignment 6 week-> 16");

let chosen = 2;

let myFriendsss = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

function chose(num) {
  if (chosen > myFriendsss.length) {
    console.log(
      `sorry we only have ${myFriendsss.length} members, 🌚so choose from 1 to ${myFriendsss.length}`
    );
  } else {
    let {
      title: t,
      age: a,
      available: av,
      skills: [, second],
    } = myFriendsss[num - 1];
    console.log(t);
    console.log(a);
    console.log(av ? "Available" : "Not Available");
    console.log(second);
  }
}

chose(chosen);

// ========================
// assignment 1 "week-> 17"
// ========================
console.error("assignment 1 week-> 17");

let setOfNumbers = new Set([10]);

console.log(setOfNumbers.add(20).add(setOfNumbers.size));
console.log([...setOfNumbers].pop());

// ========================
// assignment 2 "week-> 17"
// ========================
console.error("assignment 2 week-> 17");

let myFriends1 = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
//(4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

console.log(Array.from(new Set(myFriends1)).sort());

// ========================
// assignment 3 "week-> 17"
// ========================
console.error("assignment 3 week-> 17");

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
console.log(new Map(Object.entries(myInfo)));
console.log(new Map(Object.entries(myInfo)).size);
console.log(new Map(Object.entries(myInfo)).has("role"));
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

// ========================
// assignment 4 "week-> 17"
// ========================
console.error("assignment 4 week-> 17");

let theNumber = 100020003000;

console.log(
  Number(
    Array.from(new Set([...theNumber.toString()]))
      .sort()
      .join("")
  )
);

// Needed Output
// 123;

// ========================
// assignment 5 "week-> 17"
// ========================
console.error("assignment 5 week-> 17");

let theName = "Elzero";
console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));
console.log(Object.assign([], theName));
console.log([...new Set([...theName])]);

// Needed Output
// ["E", "l", "z", "e", "r", "o"];

// ========================
// assignment 6 "week-> 17"
// ========================
console.error("assignment 6 week-> 17");

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

let charsNum = chars.filter((num) => (typeof num === "number" ? num : ""));
let charsStr = chars.filter((str) => (typeof str === "string" ? str : ""));

console.log(
  [...charsNum, ...charsStr].copyWithin(
    0,
    [...charsNum, ...charsStr].findIndex((str) => typeof str === "string"),
    charsNum.length * 2
  )
);

// ========================
// assignment 7 "week-> 17"
// ========================
console.error("assignment 7 week-> 17");

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
console.log(Array.from([...numsOne, ...numsTwo]));
console.log([numsOne, numsTwo].flatMap((x) => x));

// ========================
// assignment 8 "week-> 17"
// ========================
console.error("assignment 8 week-> 17");

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n2));

// ========================
// assignment 1 "week-> 18"
// ========================
console.error("assignment 1 week-> 18");

let ip = "2001:db8::1234:5678:5.6.7.8 ";

let IPReg =
  /(\d{4}:\w{2}\d*)?::?(([0-9a-fA-F]{1,4}(.|::?)){1,5}[0-9a-fA-F]{1,4})?/gi;

console.log(IPReg.test(ip));
console.log(ip.match(IPReg));

// ========================
// assignment 2 "week-> 18"
// ========================
console.error("assignment 2 week-> 18");

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/\bos\d*o\b/gim));

// Output
// ['Os10O', 'OsO', 'Os100O']

// ========================
// assignment 3 "week-> 18"
// ========================
console.error("assignment 3 week-> 18");

let phone = "+(995)-123 (4567)";

console.log(/^\+\(\d{3}\)\-\d{3}\s\(\d{4}\)$/.test(phone));
console.log(phone.match(/^\+\(\d{3}\)\-\d{3}\s\(\d{4}\)$/));

// ========================
// assignment 4 "week-> 18"
// ========================
console.error("assignment 4 week-> 18");

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

console.log(`/.../ => Regular Expression Literal`);
console.log(
  `https => HyperText Transfer Protocol Secure is a secure version of HTTP that encrypts data using SSL/TLS to protect information exchanged between a web browser and a server.`
);
console.log(`https"?"=>  Zero or one`);
console.log(`\/ => to scape`);
console.log(`[] => Character set`);
console.log(`+ =>  One or more`);
console.log(`\. => literal dot `);
console.log(`() => grouping`);
console.log(`* => Zero or more`);
console.log(`. => any character`);
console.log(`^ => start of string`);
console.log(`$ => end of string`);
console.log(`\d => add digit(0-9)`);
console.log(`\w => Any word character (a-z, A-Z, 0-9, _)`);
console.log(`\s => any whitespace`);
console.log(`{n,m} => between n and m times`);

// ========================
// assignment 5 "week-> 18"
// ========================
console.error("assignment 5 week-> 18");

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let regex = /(\d{1,2}\s?-?\s?\/?){2}\d{2,4}$/; // Write Pattern Here

console.log(date1.match(regex)); // "25/10/1982"
console.log(date2.match(regex)); // "25 - 10 - 1982"
console.log(date3.match(regex)); // "25 10 1982"
console.log(date4.match(regex)); // "25 10 82"

// ========================
// assignment 6 "week-> 18"
// ========================
console.error("assignment 6 week-> 18");

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let regEx = /^(http|https)?(:\/\/)?(www.)?\w+.\w{2,6}(:\d+)?(\/\S*)?$/; // Write Your Pattern Here

console.log(url1.match(regEx));
console.log(url2.match(regEx));
console.log(url3.match(regEx));
console.log(url4.match(regEx));
console.log(url5.match(regEx));

// ========================
// assignment 1 "week-> 19"
// ========================
console.error("assignment 1 week-> 19");

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run() {
    return `The ${this.n} is running now`;
  }

  stop() {
    return `The ${this.n} is stopped now`;
  }
}

let firstObjectCar = new Car("Toyota", "2022", "20000");
let secondObjectCar = new Car("BMW", "2021", "30000");

console.log(
  `The First Car Name Is ${firstObjectCar.n}, Model Is ${firstObjectCar.m} And Price Is ${firstObjectCar.p}`
);
console.log(firstObjectCar.run());

console.log(
  `The Second Car Name Is ${secondObjectCar.n}, Model Is ${secondObjectCar.m} And Price Is ${secondObjectCar.p}`
);
console.log(secondObjectCar.stop());

// ========================
// assignment 2 "week-> 19"
// ========================
console.error("assignment 2 week-> 19");

class Phone extends Car {
  constructor(name, serial, price) {
    super(name, "", price);
    this.s = serial;
  }
}

class Tablet extends Phone {
  constructor(name, serial, price, size = "Unkown") {
    super(name, serial, price);
    this.sz = size;
  }
  fullDetails() {
    return `Tablet Name ${this.n}, its Serial is ${this.s}, its price ${this.p} And Size Is ${this.sz}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// ========================
// assignment 3 "week-> 19"
// ========================
console.error("assignment 3 week-> 19");

// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  getCard() {
    return this.#c;
  }

  setCard(card) {
    return card.match(/(\d{4}-){3}\d{4}/);
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
console.log(userOne.setCard());
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

console.log("hi");
