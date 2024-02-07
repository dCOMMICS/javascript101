# This is a  Learning  Curve for JavaScript Programming...

# Prerequisites
 * ` HTML `
 * ` CSS `
  * ` Computer  and Internet `
* ` Eager to Learn`


# linking JS 

```HTML
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript </title>
</head>
<body>
    
    <script src="/js/pure.js"></script>
</body>
</html>

```
# Topics Covered by JavaScript 

# Day 1️⃣ 🌱
- ` values and variables`
a value is the smallest unit of information while a variable is a container for storing information which can be used over and over again.

# rules for naming variables
- ` cannot start with numbers. `
- ` cannot start with a uppercase letter. `
- ` cannot start with a javascript reserved keywords `
- ` must start with a lowercase letter`
- ` cannot contain spaces. `

always name your variables with rememberable names and descrptive ..... 😂💯

```javascript
// right way
let mylastLocation = "Osaka";
let desiredLocation = " Okinawa "
// wrong way
let locationA = "osaka";
let locationB = " okinawa";
```

``` javascript
let dogs_name = "bruno"; // right way to name variables.
let 3years = 14; // wrong way of naming variables ❌❎ SyntaxError. 
let name = " Maria"; // allowed javascript reserved keywords but not recommended.
```
- `data types`

javascript has two data types

# primitive types

- `number`
floating point number 👉🏻 used for decimal and integer
```javascript
let patientAge = 10;
```
- `string`
sequence of characters 👉🏻 used for text
```javascript
let patientName  = "monica";
```
- `boolean`
logical type that can only be true or false 👉🏻 used for taking decision..
```javascript
let patientAge = true;
```
- `undefined`
value taken by a variable that is not yet defined ('empty value') 
```javascript
let patientName;
```
- `null`
empty value 
- `symbol`
not used anymore
- `big init`
larger intergers than the Number type can hold

# things learnt on day 1️⃣
```javascript
// alert("Error")

// console.log("Jerry");
// console.log(12);

let firstName = " Jerry";
console.log(firstName); 


// lecture 101

let countryName = "United States";
let continent = " North America";
let population =  331900000
console.log(countryName, continent, population)


// data types in JS

let isIsland = true;

let language;

console.log(isIsland, language)

console.log(typeof language, isIsland, population, countryName)

```


<!-- # 👋🏻 Hello World in JavaScript -->

```javascript
    console.log("bright of JavaScript");
    alert("Hello World"); //alert
    let firstName = " Jerry";
    if (firstName=="Jerry") alert("Go Jere");

    lastName = " Kimberly";



```




# Day 2️⃣ 🌱
 <!-- var const and let are used to declare variables in JS  -->
- `let`
let is used when the variable can change later or mutate a variable (block-scoped).
- `const`
const is used when the variable wont change later or unmutable variable.
- `var`
old way of naming variable not recommended....but you might find it on old codebase or tutorials.... (function-scoped).
**AVOID  USING VAR**



```javascript
const user_birthYear = 1901;

let user_age = 30;
user_age = 41;
```

 # things covered 
```javascript

const user_birthYear = 1901;

// let is used when the variable can change later or mutate a variable

let user_age = 30;
user_age = 41;

// //  operators  allows us to transform or combine multiple values...
//  - arithmetic / mathematical operator
//  - 

// math operators
const age_pete = 2014 - 2000;
const age_miley = age_pete + 11;
console.log(age_miley, age_pete)
// console.log(age_pete)

console.log(age_miley * 2, age_pete / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const given_name = 'Ayaka';
const sur_name = 'Chiyo';
console.log(given_name + ' ' + sur_name)

// assignment operator

const mangos_received = 125;
const mangos_wasted = 20;
const mangos_arrived = mangos_received - mangos_wasted;
console.log(mangos_arrived)

let x = 10 +5 ;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x)

// comparison operator

console.log(age_miley > age_pete);
console.log(age_pete >= 18);

const isFullage = age_pete >= 18 ; 
```

#  JavaScript Interview Prep: Functions, Closures, Curryingfunctions in JS 
```javascript
class Dictionary {
  constructor(wordsArray) {
    this.dict = new Set(...Dictionary.apply.words);
  }

  isInDict(word) {
    return this.dict.has(word);
  }
}

const test = new Dictionary(['cat', 'car', 'bar']);
console.log(test.isInDict('cat')); // true
console.log(test.isInDict('dog')); // false


// function in javascript
// q4 = what is IIFE
const h = 124;
function trapezium(num) {
    console.log(num + num / 2 * h)
}

trapezium(15);

(function () {
    return (function () {
        console.log(object)
    })();
})();
```







## 📦 Technologies

- `Vite`
- `React.js`
- `TypeScript`
- `CSS`
- `JavaScript`

## 💭 The Idea

The main idea behind this project was my desire to gain a deeper understanding of how to learn and get a deep understanding of JavaScript language.......

Luminance is calculated by converting a color from its hexadecimal representation to RGB values and then applying the sRGB gamma correction.

By the way, this course is beginner friendly and suits everyone with nice approach and well designed. for 🌱🧒🏻



```javascript
    console.log("bright of JavaScript");

```



## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run start` or `yarn start` to get the project started.
4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.



