function Mouse(name) {
	this.name = name;
}

Mouse.prototype.run = function() {
	console.log(`${this.name} is running`)
};

const mouse = new Mouse('mickey');
mouse.run();

class Mouse {
	constructor(name) {
		this.name = name;
	}
	run() { // thang nay cung chinh la prototype
		console.log(`${this.name} is running`)
	}
}

const mouse = new Mouse('tom');
mouse.run();









