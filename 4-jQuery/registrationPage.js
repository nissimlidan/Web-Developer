function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
};

function isPhoneNumber(phoneNumber) {
    var regex = /^0\d([\d]{0,1})([-]{0,1})\d{8}$/;
    return regex.test(phoneNumber);
};

function isPassword(password) {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
};

$("#password").click(function(){

    $("#passwordMassage").html("*Your Password must be Minimum 8 characters, at least one letter and one number");
        
    });


$("#signupBtn").click(function(){

    $("#passwordMassage").html("");

    var errorMassage = "";

     if(!(isEmail($("#email").val()))){

        errorMassage += "<p>Your Email address is not valid</p> ";
         
     }

     if(!(isPhoneNumber($("#phone").val()))){

        errorMassage += "<p>Your Phone Number is not valid</p> ";

    }

    if(!(isPassword($("#password").val()))){

        errorMassage += "<p>Your Password is not valid <br>chack if your password have:<br> *Minimum 8 characters <br>*At least one letter <br>*At least one number</p> ";

    }

    if($("#password").val() != $("#passwordConfrim").val()){

        errorMassage += "<p>Your confrim password not equel to your password</p> ";
        
    }


    if(!(errorMassage == "")){

        $("#errorMassage").html(errorMassage);

    }

    else{

        errorMassage = " "
        $("#errorMassage").html(errorMassage);
        $("#succeededMassage").html("Registration succeeded!");
    }


});