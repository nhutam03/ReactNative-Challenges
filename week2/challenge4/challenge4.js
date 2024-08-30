// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
let tips = [];
let totals = [];
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
let pushTipAndTotal = (bill) => {
    tips.push(calcTip(bill));
    totals.push(bill + calcTip(bill));
}
bills.forEach(pushTipAndTotal);
let printTipAndTotal = (value, index) => console.log(`Bill ${bills[index]} => Tip ${tips[index]} => Total ${value}`);
totals.forEach(printTipAndTotal);