// fs = require('promise-fs');

// function onDone(song) {
// 	console.log(song);
// }
// function onError(error) {
// 	console.log(error);
// }
// function readFile(path) {
// 	return fs.readFile(path,{ encoding:'utf8'})
// }

// readFile('song1.txt')
//     .then(onDone)
//     .then(function(){
//     	return readFile('song2.txt')
//     })
//     .then(onDone)
//     .catch(onError)
// ======================================================================
var fs = require('fs'); // cai nay la cua node

function readFilePromise(path) {
	return new Promise(function(reslove, reject) {
		fs.readFile(path, {encoding: 'utf8'}, (error, data) => {
			if(data) {
				reslove(data); // cai bien data nay se duoc truyen vao thang then
			}else {
				reject(error); // con cai nay se truyen thang catch
			}
		})
	});
}
readFilePromise('song1.txt')
	.then(song => console.log(song))
	.then( ()=> {return readFilePromise('song2.txt')} )
	.then(song => console.log(song))
	.catch(error => console.log(error));

// ==================================================================

var promise = new Promise(function(resolve, reject) { 
  const x = "geeksforgeeks"; 
  const y = "geeksforgeeks"
  if(x === y) { 
    resolve(); 
  } else { 
    reject(); 
  } 
}); 
  
promise. 
    then(function () { 
        console.log('Success, You are a GEEK'); 
    }). 
    catch(function () { 
        console.log('Some error has occured'); 
    }); 