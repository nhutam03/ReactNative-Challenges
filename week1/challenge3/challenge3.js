// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1.  Calculate the average score for each team, using the test data below
let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;
let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

const getAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let dolphinsAverage = getAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
let koalasAverage = getAverage(koalasScore1, koalasScore2, koalasScore3);
console.log("Dolphins average score: " + dolphinsAverage);
console.log("Koalas average score: " + koalasAverage);

// 2.  Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
if (dolphinsAverage > koalasAverage)
    console.log("Dolphins win the trophy!");
else if (koalasAverage > dolphinsAverage)
    console.log("Koalas win the trophy!");
else
    console.log("It's a draw!");
// 3.  Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks 
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100)
    console.log("Dolphins win the trophy!");
else if (koalasAverage > dolphinsAverage && koalasAverage >= 100)
    console.log("Koalas win the trophy!");
else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100)
    console.log("It's a draw!");
else
    console.log("No team wins the trophy!");
// 4.  Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100)
    console.log("Dolphins win the trophy!");
else if (koalasAverage > dolphinsAverage && koalasAverage >= 100)
    console.log("Koalas win the trophy!");
else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100)
    console.log("It's a draw!");
else
    console.log("No team wins the trophy!");