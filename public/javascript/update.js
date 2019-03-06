//function update() {
//	var city = document.forms['form']['city'].value;
//    if (city==null || city==="") {
//        document.getElementById('req').innerHTML = "Please fill all fields!";
//        return false;
//    }
//    var zip = document.forms['form']['zip'].value;
//    if (zip==null || zip==="") {
//        document.getElementById('req').innerHTML = "Please fill all fields!";
//        return false;
//    }	
//}

connection.query('SELECT * FROM bar', (error, bar, fields) => {
  if (error) {
    console.error('An error occurred while executing the query')
    throw error
  }
  console.log(bar)
})