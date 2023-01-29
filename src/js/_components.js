"use strict";
// const { name } = require("browser-sync");

console.log('components');
// let favoriteColor;
// favoriteColor = prompt('What is your favorite color?');
// console.log('My favorite color is ' + favoriteColor);

// let firstName;
// let lastName;
// let age;
// firstName = prompt('What is your name?');
// lastName = prompt('What is your last name?');
// age = prompt('What is your age?');

// console.log('My name is ' + firstName + ',' + ' My last name is ' + lastName + ',' + ' My age is ' + age + '. ');

// let weight = prompt('Enter your weight');
// let height = prompt('Enter your height');
// let bodyMassIndex = weight / Math.pow(height, 2);
// let overWeight = bodyMassIndex >= 25;
// alert('your overWeight ' + overWeight);

// let weight = prompt('Enter your weight');
// let height = prompt('Enter your height');
// let indexMassBody = weight / Math.pow(height, 2);
// if (indexMassBody >= 25) {
//   console.log('Yor IBM more ' + (indexMassBody - 25));
// }else console.log('твой индекс меньше');

// let age = prompt('Enter your age');
// age >= 18 ? console.log('you can bay the alcohole')+ alert('you can not bay the alcohole'): console.log('you can bay the alcohole, you are too young')+ alert('you can not bay the alcohole, you are too young')


// let getAverage = (sale1, sale2, sale3) => (sale1 + sale2 + sale3)/3;

// let dept1AverageQuarter1 = getAverage(35467, 29842, 38501);
// console.log(dept1AverageQuarter1);
// let dept2AverageQuarter1 = getAverage(70533, 500121, 33899);
// console.log(dept2AverageQuarter1);

// let dept1AverageQuarter2 = getAverage(50301, 21984, 19207);
// console.log(dept1AverageQuarter2);
// let dept2AverageQuarter2 = getAverage(72381, 41562, 29465);
// console.log(dept2AverageQuarter2);

// let printBonus = (dept1AverageQuarter1, dept2AverageQuarter1) => {

//   if (dept1AverageQuarter1 > dept2AverageQuarter1 && dept1AverageQuarter1 >= 1.3 * dept2AverageQuarter1) {
//     let diff = dept1AverageQuarter1 - dept2AverageQuarter1;
//     let percent = (diff / dept2AverageQuarter1) * 100;
//       console.log(`Dept 1 will get a bonus of ${percent}%`);
//   }
//   else if (dept1AverageQuarter1 < dept2AverageQuarter1 && dept2AverageQuarter1 >= 1.3 * dept1AverageQuarter1) {
//     let diff = dept2AverageQuarter1 - dept1AverageQuarter1;
//     let percent = (diff / dept2AverageQuarter1) * 100;
//       console.log(`Dept 2 will get a bonus of ${percent}%`)
//   } else {
//       console.log('Dept 2 will not get a bonus in this quarter');
//   }
// }
// printBonus(dept1AverageQuarter1, dept2AverageQuarter1);

// Tips Calculator Task
// You have to build a tips calculator.
// The calculator should calculate tips in following manner:
// If the bill value is less than 20, tips should be 20%. In other cases tips should be 15%.

// 1.	Create an arrow function calculateTips(), that takes a bill parameter and returns the corresponding tips.
// 2.	Create an array of bills with test data below.
// 3.	Create an array of tips for each bill.
// 4.	Create an array of total bills, that is bill + tips.

// Test data: 11, 20, 47.

// let tips = bill => bill < 20 ?  bill * 0.2 : bill * 0.15;

// let testTips = [11, 20, 47];

// let eachTips = [tips(testTips[0]), tips(testTips[1]), tips(testTips[2])];

// let billTips = [eachTips[0]+testTips[0], eachTips[1]+testTips[1], eachTips[2]+testTips[2]];
// console.log(eachTips, billTips);
let youraObject = {
   name: 'Pavel',
   lastname: 'Yakovlev',
   birthYear: 1984,
   job: 'programming instructor',
   familyMembers: ['Yulia', 'Alex', 'Pavel'],
   hasDriverLicense: false,
   calcAge: function() {
    this.age = 2023 - this.birthYear;
    return 2023 - this.birthYear;
   },
   getSummary: function() {
    return `${this.name} is a ${this.calcAge()}-year oid ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`
   }
}
console.log(youraObject.getSummary());
//YouRa is a 47-year old programming instructor and he has a/no driver license

// console.log(`${youraObject.name} has ${youraObject.familyMembers.length} family members and the first one is ${youraObject.familyMembers[0]}`);


