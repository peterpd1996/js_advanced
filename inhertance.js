class Animal {
	constructor(name) {
		this.name = name;
	}
	eat() {
		console.log(`${this.name} eating...`);
	}
	run() {
		console.log('I running');
	}
}

class Bird extends Animal {
	fly() {
		console.log(`${this.name} flying....`);
	}
	run() {
		console.log('I not running'); // overriding
	}
}

const bird = new Bird('pepe');
bird.eat()