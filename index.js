// zadanie 1
const x = "Hello";
const y = "World!";

sayHelloToWorld = () => console.log(`${x} ${y}`);

sayHelloToWorld();

/*
function sayHelloToWorld() {
     console.log(`${x} ${y}`);
}

sayHelloToWorld();
*/

//zadanie 2
multiply = (a, b = 1) => console.log(`${a*b}`);
multiply(2,3);
multiply(3);

/*
function multiply(a,b) {
	console.log(a*b)
}
*/

//zadanie 3

const average = (...arg) => {
	let sum = 0;
	for (let i=0; i < arg.length; i++) {
		sum += arg[i];
	}
	return sum / arg.length;
}

console.log (average(6,6,6));


//zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const [...rest] = grades;

console.log (average(...rest));

//zadanie 5

const name = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , surname] = name;

console.log (`${firstname} ${surname}`);