const numbers = {
	keyin1: 1,
	keyin2: 2,
	keyin3: 3,
	keyin4: 4,
	keyin5: 5,
	keyin6: 6,
	keyin7: 7,
};

let filteredNumbers = Object.values(numbers).filter((value) => value >= 3);

console.log(filteredNumbers);