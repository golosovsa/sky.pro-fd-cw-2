const numbers = {
	key1: {
		keyin1: 1,
		keyin2: 2,
		keyin3: 3,
	},
	key2: {
		keyin1: 4,
		keyin2: 5,
		keyin3: 6,
	},
}

let total = Object.values(numbers).reduce((akk, obj) => {
    return akk + Object.values(obj).reduce((akk, value) => akk + value, 0);
}, 0);

console.log(total);