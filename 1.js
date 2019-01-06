
/**
 * Multiples of 3 and 5
 * 
 * Problem 1 : 
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23. 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * 
 */

//answer


let N = 1000;
let arr = [...Array(1000).keys()];
let final = [];

function sumOf3or5(array) {
	let final = [];
	for (var i = 0; i <= array.length - 1; i++) {
		if (array[i] % 3 === 0 || array[i] % 5 === 0) final.push(array[i]);
	}

	return final.reduce((a, c) => a + c);
}

final = sumOf3or5(arr);

console.log(final);