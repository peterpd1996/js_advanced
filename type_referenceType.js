// lieu luu bien binh thuong thi la kieu value type nhu kieu int, string, boolen, null
let a1 = 1;
let a2 = 1;

console.log('number',a1 === a2);

// kieu luu nhung gia tri nhu mang hoac object thi no se luu kieu referece 
let obj1 = { a: 1 };
let obj2 = { a: 1 };
// nhu kieu { a: 1 } la mot cai nha thang obj1 chi la luu dia chi cua cai nha day thoi, chu no khong chua duoc ca cai nha
console.log('object',obj1 === obj2); // 2 thang nay no dang so sanh dia chi
let obj3 = obj1;
obj3.a = 2;
console.log(obj1); // luc nay thi obj1.a = 2 vi 2 thang nay cung chung dia chi nen thay doi gt a thi thang kia cung thay doi

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log('array', arr1 === arr2);

