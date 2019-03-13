function update() {
	var city =  document.forms['formU']['city'].value;
	var zip =  document.forms['formU']['zip'].value;
	var sql;

	var params;
//	if(!city == null) {
//		//params=[city];
//		sql = "SELECT * FROM bar";
//	}else if(!zip == null) {
//		//params=[zip];
//		sql = "SELECT * FROM bar";
//	}else{
//		 document.getElementById('req').innerHTML = "Please fill either city or zip!";
//	}
//
//	connection.connect(function (error){
//		if (error) {
//			console.log('connection error');
//			throw error;
//		}
//		console.log('connected!');
//		connection.query(sql, function (error, result) {
//				if (error) {
//					console.error('An error occurred while executing the query');
//					throw error;
//				}
//				console.log(result);
//		});
//	});
}	