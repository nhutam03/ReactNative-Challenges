// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

// Your tasks:
// 1.  Store Mark's and John's mass and height in variables
// 2.  Calculate both their BMIs using the formula (you can even implement both versions)
// 3.  Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

const getBMI = (mass, height) => mass / height ** 2;

let markBMI = getBMI(markMass, markHeight);
let johnBMI = getBMI(johnMass, johnHeight);

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);