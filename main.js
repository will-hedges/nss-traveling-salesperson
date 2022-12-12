// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [50, 100, 65, 82];

// Declare a variable to store the total. Initial value is 0.
let totalMiles = 0;
/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const mileage of weeklyMiles) {
  totalMiles += mileage;
}

// Declare a new variable to store the average miles over time
const averageMiles = totalMiles / weeklyMiles.length;

// Output the average miles and the total miles to the console
console.log(`I average ${averageMiles} miles per week.
I have driven a total of ${totalMiles} miles.`);
