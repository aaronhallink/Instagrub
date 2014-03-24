/**
This class contains functions necessary to the registration of a new user.
@class register
**/

/**
Updates the page to show an error when a form with invalid fields is submitted.

@event showError
**/
function showError()
{
	document.getElementById("form_error_msg").style.display = 'block';

}

/**
Checks the registration form to see if all fields are valid.
@event validateForm
**/
function validateForm()
{ 
	delete window.error_msg;
	var error_msg = '<h4 style="font-size:16px;">The following errors occurred while processing your submission. Please make the following corrections to finish your submission.</h4>';
	var uname = document.forms["reg_form"]["name"].value;
	var email = document.forms["reg_form"]["email"].value;
	var pass1 = document.forms["reg_form"]["pass1"].value;
	var pass2 = document.forms["reg_form"]["pass2"].value;
	var php_email = "<?php echo $_GET['dup']; ?>";
	console.log(php_email);
	//Check if they're all valid
	if (email==null || email=="" || uname==null || uname=="" || pass1==null || pass1=="" || pass2==null || pass2=="" || pass1 !== pass2 || php_email==1)
	{
		//Check each line of the form
		if (uname==null || uname=="")
	    {
			error_msg += '<p>The field "Your Name" was left blank.</p>';
		}
		if (email==null || email=="")
		{
		    error_msg += '<p>The field "Your Email" was left blank.</p>';
		}
		if (pass1==null || pass1=="")
		{
		    error_msg += '<p>The field "Password 1" was left blank.</p>';
		}
		if (pass2==null || pass2=="")
		{
		    error_msg += '<p>The field "Password 2" was left blank.</p>';
		}
		if (pass1 !== pass2)
		{
			error_msg += '<p>Your passwords did not match.</p>';
		}
		if (php_email==1)
		{
			error_msg += '<p>Your email is already in use.</p>';
		}
		showError();
		document.getElementById('form_error_msg').innerHTML = error_msg;
		return false;
	}
}
