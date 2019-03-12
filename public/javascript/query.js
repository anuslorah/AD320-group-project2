

function respond(){
  var response = document.getElementByID('response');
  response.innerHTML = "Thank you for your input. Your bar has been added to the database. Please feel free to add additional awesome bars.";
}

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
