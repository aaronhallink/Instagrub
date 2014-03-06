<!DOCTYPE html>
<html>
<head>
<link rel='stylesheet' type='text/css' href='css/style.css' />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400' rel='stylesheet' type='text/css'>
	<title>Instagrub</title>

<script>
function showError()
{
	document.getElementById("form_error_msg").style.display = 'block';

}

function validateForm()
{ 
	delete window.error_msg;
	var error_msg = '<h4 style="font-size:16px;">The following errors occurred while processing your submission. Please make the following corrections to finish your submission.</h4>';
	var uname = document.forms["reg_form"]["name"].value;
	var email = document.forms["reg_form"]["email"].value;
	var pass1 = document.forms["reg_form"]["pass1"].value;
	var pass2 = document.forms["reg_form"]["pass2"].value;
	var php_email = "<?php echo $_GET['dup']; ?>";
	//Check if they're all valid
	if (email==null || email=="" || uname==null || uname=="" || pass1==null || pass1=="" || pass2==null || pass2=="" || pass1!=pass2)
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
		if (pass1!=pass2)
		{
			error_msg += '<p>Your passwords did not match.</p>';
		}
		if (php_email==1)
		{
			error_msg += '<p>Your is already in use.</p>';
		}
		showError();
		document.getElementById('form_error_msg').innerHTML = error_msg;
		return false;
	}
}
</script>


</head>
<body>
<div id="wrap">
		<div id="login">
			<a href="login.php">Login</a> or <a href="register.php">Sign up</a>
		</div>
	<div id="header">Instagrub</div>

	<div id="wrapper">
	<h3>Sign up!</h3>

	<div id="form_error_msg" style="padding:5px;background-color: #FFBABA; border:1px solid #E53E46;margin-bottom:10px;">
						
	</div>

	<form name="register" action="add_new_user.php" onsubmit="return validateForm()" method="post" id="reg_form">
	    Name: <input type="text" name="name" maxlength="30" /><br />
	    Email: <input type="text" name="email" maxlength="30" /><br />
	    Password: <input type="password" name="pass1" /> <br />
	    Password Again: <input type="password" name="pass2" /> <br/>
	    <input type="submit" value="register" id="register" />
	</form>

	<a href="index.php">Back home</a>
	</div>
</div>
<script>

document.getElementById("form_error_msg").style.display = 'none';
</script>

</body>
</html>