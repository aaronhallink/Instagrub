<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=320">
<link rel='stylesheet' type='text/css' href='css/style.css' />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400' rel='stylesheet' type='text/css'>
	<title>Instagrub</title>
<script>var test = <?php echo $_GET['dup']; ?>;</script>
<script src="src/register.js"></script>


</head>
<body>
<div id="wrap">
		<div id="login">
			<a href="login.php">Login</a> or <a href="register.php">Sign up</a>
		</div>
	<div id="header"><h1 style="color:white;margin-top:-5px;float:left;">Instagrub</h1></div>

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
