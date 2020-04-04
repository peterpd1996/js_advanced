// destructuring =  tai cau truc
const arr = [10, 20, 30, 40];
const [a, b] = arr;
const [d, , ,c] = arr // no se bo 2 thang 20 va 30 di 
const [f, ...e] = arr // no se gan bien dau tien cho f, tat ca cac bien con lai thi se gan cho e, e luc nay la mang
console.log(f,e)


const obj = {
	a: 1,
	b: 2,
	c: 3,
}
const {a:n, b:m, c:z} = obj; // key cua oject phai giong nhau voi gan dc neu khong no se undefined
console.log(n,m,z)
const {a:x, ...b} = obj;
console.log(x,b);