var babe = {
	name: 'huong',
	say: function love() {
		console.log('I love ',this.name); 
	}
}
var cat = {
	name: 'tom'
}
var talk = babe.say.bind(cat); // bind chinh la truyen vao cai bien this
talk();