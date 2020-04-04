function result(a, b) {
	let c =  a + b;
	return function(){
		console.log(`sum ${a} + ${b} = ${c}`); // co the tham chieu duoc ngoai ham chua no
	}
}
result(1,2)();

function debug(name) {
	return function (str) {
		console.log(`[${name}] ${str}`);
	}
}
const log = debug('Message'); // no se goi ra funcuton o dong 10 va giu lai cai bien name
log('error'); // den day thi no se truyen string vao cai function o dong 10 vua gan duoc