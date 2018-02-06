

$(document).ready(function() 
{
    $("#submit").prop("disabled", true);
    jQuery("#submit").addClass("inactiveSubmit");
    jQuery("#submit").removeClass("activeSubmit");

    var toValidate = jQuery('#first_name_input, #last_name_input, #comments, #email_input, #reason');
    var checkLength = jQuery('#first_name_input, #last_name_input, #comments');
    var email = jQuery('#email_input');
    var reason = jQuery('#reason');
    var valid = false;
    
toValidate.change(function () {
    console.log("Now in the form validation function");
    
    checkLength.change(function(){
        if (jQuery(this).val().length > 0) {
            jQuery(this).data('valid', true);
            console.log("true data value: ", $(this).val());
            console.log("true data length: ", $(this).val().length);
        } else {
            console.log("Data value is not valid");
            jQuery(this).data('valid', false);
    }
        
    });
    
    
    reason.change(function(){

        var r = jQuery(this).val();
        console.log("reason", r);

        if(r != null){

            jQuery(this).removeClass("error");
            jQuery(this).addClass("ok");
            jQuery(this).data('valid', true);
        }

        else 
            {
            $(this).addClass("error"); 
            jQuery(this).data('valid', false);
            }



    });
    
    email.change(function(){

            var e = jQuery(this).val();

            if(e.match(/^[A-z0-9]+@[A-z0-9]+\.[A-z]{3}$/)){
                jQuery(this).removeClass("error");
                jQuery(this).addClass("ok");
                jQuery(this).data('valid', true);

            }

            else if(e == ""){
                 jQuery(this).addClass("error"); 
                 jQuery(this).data('valid', false);

            }

            else{
            jQuery(this).addClass("error");
            jQuery(this).data('valid', false);

            }

    });

    

    
    toValidate.each(function () {
            //console.log(jQuery(this).val());
            if (jQuery(this).data('valid') == true) {
                console.log("Data is valid: ", jQuery(this).val());
                valid = true;
                jQuery(this).removeClass("error");
                jQuery(this).addClass("ok");
            } 

            else {
                console.log("Something is wrong!", jQuery(this).val());
                valid = false;
                jQuery(this).addClass("error");
                jQuery(this).removeClass("ok");
            }
        });
    
        if (valid === true) {
            console.log("Launch the torpedos!");
            jQuery("#submit").prop('disabled', false);
            jQuery("#submit").removeClass("inactiveSubmit");
            jQuery("#submit").addClass("activeSubmit");
        } else {
            jQuery("#submit").prop('disabled', true);
            jQuery("#submit").removeClass("activeSubmit");
            jQuery("#submit").addClass("inactiveSubmit");
            console.log("Something isn't right here");
        }
    });

       
toValidate.focus(function(){
    jQuery(this).removeClass("ok");
    jQuery(this).removeClass("error");
        
       
});  
    
toValidate.blur(function(){
    if(jQuery(this).data("valid") == true){
        jQuery(this).addClass("ok");
        jQuery(this).removeClass("error");
        jQuery(this).data('valid', true);
    }
        
    else{
        jQuery(this).removeClass("ok");
        jQuery(this).addClass("error");
        jQuery(this).data('valid', false);
    }
       
       
});    
	
    
    
    
    
    
    
    
    
/*$("#register").click(function() {
    //event.preventDefault();
var email = $("#email_input").val();
var fn = $("#first_name_input").val();
var ln = $("#last_name_input").val();
if (email == ''|| fn == '' || ln == '' ) {
alert("Please fill all fields...!!!!!!");

    
    else {
    $.ajax({
        url: '../contact_submit.php',
        type: "POST",
        async: false,
        data: {
        fn1: fn,
        ln1: ln,
        email1: email,
    }, 
        success: function(data) {
            console.log(data);
               if(data === "Error"){
                $("#email_input").addClass("error");

                $("#email_input").before('<span class="info">Something went wrong :( </span>');
               }
            else{
                
                $("#email_input").before('<span class="info">Thank You! </span>');
                $("form")[0].reset();
        $("#last_name_input").removeClass("ok");
        $("#first_name_input").removeClass("ok");
        $("#email_input").removeClass("ok");
            }
            }
      //*  error: function(){
       // alert("Error Function");
    //}
    });
    }
    });
    
  */  
   
});

