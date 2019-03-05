


function val(){

    var name = document.forms['form']['name'].value;
    if (name==null || name===""){
        document.getElementById('req').innerHTML = "Please fill all fields!";
        return false;
    }
    var streetAddress = document.forms['form']['street'].value;
    if (streetAddress==null || streetAddress==="") {
        document.getElementById('req').innerHTML = "Please fill all fields!";
        return false;
    }
    var city = document.forms['form']['city'].value;
    if (city==null || city==="") {
        document.getElementById('req').innerHTML = "Please fill all fields!";
        return false;
    }
    var zip = document.forms['form']['zip'].value;
    if (zip==null || zip==="") {
        document.getElementById('req').innerHTML = "Please fill all fields!";
        return false;
    }
    var phone = document.forms['form']['phone'].value;
    if (phone==null || phone==="") {
        document.getElementById('req').innerHTML = "Please fill all fields!";
        return false;
    }
    var happyHour = document.forms['form']['hh'].value;
    if (happyHour==null || happyHour==="") {
        document.getElementById('req').innerHTML = "Please fill all fields!";
        return false;
    }
    var awesome = document.forms['form']['awesome'].value;
    if (awesome==null || awesome==="") {
        document.getElementById('req').innerHTML = "Please fill all fields!";
        return false;
    }

    return true;


connection.connect(function(err){
  if (err) throw err;
  console.log('Connected..');
  var sql = "INSERT INTO bar (barName, streetAddress, city, zipcode, phone, happyHour, awesome) VALUES ('"bar"', '"streetAddress"', '"city"', '"zip"', '"phone"', '"happyHour"', '"awesome"')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
}
