// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
let calcBMIs = (mass, height) => mass / (height * height);
// 1.  For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
let mark_miller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
};
let john_smith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
};
// 2.  Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
mark_miller.calcBMI = calcBMIs(mark_miller.mass, mark_miller.height).toFixed(2);
john_smith.calcBMI = calcBMIs(john_smith.mass, john_smith.height).toFixed(2);
// 3.  Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
if (mark_miller.calcBMI > john_smith.calcBMI) {
    console.log(`${mark_miller.fullName}'s BMI (${mark_miller.calcBMI}) is higher than ${john_smith.fullName}'s (${john_smith.calcBMI})!`);
} else if (john_smith.calcBMI > mark_miller.calcBMI) {
    console.log(`${john_smith.fullName}'s BMI (${john_smith.calcBMI}) is higher than ${mark_miller.fullName}'s (${mark_miller.calcBMI})!`);
} else {
    console.log('They have the same BMI!');
}