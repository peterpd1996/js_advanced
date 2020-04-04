function log(a, ...numbers) { // bat dau voi dau 3 cham 
	console.log(a);
	console.log(numbers); // khi ma minh truyen tham so ma no khong co dinh thi mk dung thang nay
	console.log(arguments); // no la mot object like array gom cac key tu 0 -> n ma cac gi tri tuong ung
}

log(1, 2, 3, 4);