const a = [1, 2, 3];
const b = [0, ...a, 4]; //no se nhu kieu gop mang lai cua thang a theo kieu dai ra
console.log(b);

const ob1 = {
	a: 1,
	b: 2,
	c: 3,
	d: { e: 10}
}

let ob2 = {
	...ob1,
	z: 10
}

console.log({ob1, ob2});