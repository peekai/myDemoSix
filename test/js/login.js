function formValidate(){
	var userName = document.forms["loginform"]["username"].value;
	var firstname = document.forms["loginform"]["firstname"].value;
	var lastname = document.forms["loginform"]["lastname"].value;
	var password = document.forms["loginform"]["password"].value;
	var birthday = document.forms["loginform"]["birthday"].value;
	var confirmpassword = document.forms["loginform"]["confirmpassword"].value;
    if (userName == null || userName == "") {
        alert("Enter a Valid E-mail");
       return false;
    }else{
    	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    if (!filter.test(userName)) {
	    alert('Please provide a valid email address');
	    return false;
	 }    
}
	
if((password == null || password == "") || password.length <6 ){
        alert('password cannot be empty and must 6 characters length');
	    return false;	
    }
    if((confirmpassword == null || confirmpassword == "") || confirmpassword.length <6 ){
        alert('confirmpassword cannot be empty and must 6 characters length');
	    return false;	
    }else{
    	if (password != confirmpassword){
    		alert('password doesnt match');
    		return false;
    	}
    }

    if (firstname == null || firstname == "") {
        alert("FirstName cannot be empty");
       return false;
    }else{
    	var filter = /^[A-z]+$/;
	    if (!filter.test(firstname)) {
	    alert('FirstName should only be characters');
	    return false;
	 }    
}
    if(lastname != null || lastname != ""){
    	var filter = /^[A-z]+$/;
	    if (!filter.test(lastname)) {
	    alert('Lastname should only be characters');
	    return false;	
    }
}
    
    if(birthday == null || birthday == ""){
        alert('Date is not in a valid format');
	    return false;	
    }
 
//Basic check for format validity

//Detailed check for valid date ranges
var monthfield=birthday.split("/")[0];
var dayfield=birthday.split("/")[1];
var yearfield=birthday.split("/")[2];
var dayobj = new Date(yearfield, monthfield-1, dayfield);
if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield)) {
alert("Invalid Day, Month, or Year range detected. Please correct and submit again.");
return false;
}
    var d = new Date();

    var curday = d.getDate();
    var curmonth = d.getMonth()+1;
    var curyear = d.getFullYear();

    var age = curyear - yearfield;
    
    if((curmonth < monthfield) || ( (curmonth == monthfield) && curday < dayfield   
)){
        age--;
    }
    
if(age < 14 || age > 150)
 {
alert("Persons of age less than 14 and more than 150 cannot register");
return false;
}

return true;
}

