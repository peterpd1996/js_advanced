class Hero {
	constructor(name, hp, damage) {
		this.name = name;
		this.hp = hp;
		this.damage = damage;
	}

	applyDamage(damage) {
		this.hp -= damage; // this.hp nay la cua thang who
	}
	attack(who) {
		who.applyDamage(this.damage);
	}
}

const heroA = new Hero('D', 200, 100);
const heroB = new Hero('A', 400, 10);

// console.log({ heroA, heroB});
// heroA.attack(heroB);
// console.log({ heroA, heroB});

class SuperHero extends Hero { 
	constructor(name, hp, damage, rank) {
		super(name, hp, damage); // super ke thua
		this.rank = rank;
	}
	attack(who) {
		super.attack(who);
		this.hp += this.damage; // hut mau
	}
}

const hero = new SuperHero('Tung Duong', 1000, 100, 1);

console.log({ hero, heroB});
hero.attack(heroB);
console.log({ hero, heroB});