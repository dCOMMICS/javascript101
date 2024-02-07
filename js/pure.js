// alert("Error")

// console.log("Jerry");
// console.log(12);

let firstName = " Jerry";
console.log(firstName);


// lecture 101

let countryName = "United States";
let continent = " North America";
let population = 331900000
console.log(countryName, continent, population)


// data types in JS

let isIsland = true;

let language;

console.log(isIsland, language)

console.log(typeof language, isIsland, population, countryName)


let year;
console.log(year)
console.log(typeof year);

year = 2024;
console.log(year)

// day 2️⃣

// var const and let are used to declare variables in JS 

// const is used when the variable wont change later or unmutable variable.

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


// lecture : let const and var
const spokenLanguages = "English";
const countryNames = "German";
const continentNames = "Europe";

// basic operations

let myCountryPopulation = 10000000;


// class Dictionary (){
//     construcror (){
//         isInDict(word) {

//         }
//     }
// }

// const test = new Dictionary (['cat', 'car', 'bar' ])
// console.log(test .isInDict('cat'));


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

// function scope

