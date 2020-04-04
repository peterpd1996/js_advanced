<!DOCTYPE html>
<html>
<head>
	<title>callback</title>
</head>
<script type="text/javascript">
	/*
	function first(print,second) {
		setTimeout( function(){
		    console.log(`${print}`);
		    second();	
		  }, 500);
	}		
	first('1',function(){
		console.log('2');
	});
	*/
	function getMoney(address,result){
		$.get(address,(error, respon, res) => {
			if(error) return result(error,null);
			return result(null, JSON.parse(res).data.result);
		});
	}

    getMoney('wwww.getMoney?id=2', (error, res) =>{
		if(res){
			console.log(res);
		}
	});
	// luc console.log(test) ra no se khong nhan duoc ket qua gi boi mk return o thang callback, nen minh can truyen mot function vao

	
</script>
<body>

</body>
</html>