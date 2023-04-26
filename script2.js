// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope

const object4 = {
	a: function () {
		console.log(this);
	}
}
//instantiation
class Player {
	constructor(name, type) {
		console.log(this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`HI I am ${this.name}, I'm a ${this.type}`)
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
	}
	play() {
		console.log(`Weee I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard1 = new Wizard('Shawn', 'Dark Magic');


const square = (x) => x**2 //es7
////////////////////////////////// es8
.padStart()
.padEnd()

const fun = (a, b, c, d,) => {
	console.log(a);
}

fun(1,2,3,4,)

Object.values
Object.entries
Object.keys

let obj = {
	username0: 'santa',
	username1: 'rudolph',
	username2: 'mr. grinch'
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key])
})

Object.values(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).map(value=> {
	return value[1] + value[0].replace('username', '');
})

Async Await

const array = [1,[2,3],[4,5]
array2.flat(2)

const entries = ['bob', 'sally',,,,,,,'cindy']
entries.flat()

const jurassicParkChaos = jurassicPark.flatMap(creature => creature + 'trex')

const userEmail = '         eddytheeagle@gmail.com'
const userEmail2 = 'johnndangerous@gmail       '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

userProfiles = [['commanderTom', 23], ['derezlander', 40], ['hansel', 18]]
//convert to object
Object.fromEntries(userProfiles)

//allows an alternate function if a block of code fails
try {
  true + 'hi'
} catch {
	console.log('you messed up')
}
//looping
//1
const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples: 4,
	oranges: 10,
	grapes: 1000
}


for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}
//2
basket.forEach(item => {
	console.log(item);
})

// for of 
// iterating - arrays, strings
for (item of basket) {
	console.log(item);
}

//for in - properties
// enumerating - objects 
for (item in detailedBasket) {
	console.log(item);
}
//ES2020
//BigInt (new type) (lets us use numbers bigger than the max safe integer)
//nullish coalescing operator

let andrei_pokemon = {
	pikachu: {
		species: 'Mouse Poekmon',
		height: 0.4,
		weight: 6,
		power: 0
	}
}

let will_pokemon = {
	raichu: {
		species: 'Mouse Poekmon',
		height: 0.8,
		weight: 30
	}
}
 
let power = andrei_pokemon?.pikachu?.power || 'no power'

console.log(power)

//optional chaining
let weight3 = andrei_pokemon?.pikachu?. weight
console.log(weight3)
//nullish coalescing operator ?? (another version of ||)
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
(research on mdn)
//es2021
const str = "ztm is the best of the best"
str.replaceAll('best', 'worst')
const b = str.replaceAll('best', 'worst')
b
//es2022 (at method)
const arr = [100, 200, 400, 50000, 10]
arr[arr.length - 2]
arr.at(-2)