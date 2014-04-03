<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=320">
<link rel='stylesheet' type='text/css' href='css/style.css' />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400' rel='stylesheet' type='text/css'>
	<title>Instagrub</title>
<script type="text/javascript" src="build/Instagrub.min.js"></script>

</head>
<body>

		
	<div id="header"><h1 style="color:white;margin-top:-5px;float:left;">Instagrub</h1><div id="login" style="float:right;"><a href="login.php">Login</a> or <a href="register.php">Sign up</a>
		</div></div>
<br/><div id="wrap">
	<div id="wrapper">
	<h3>Sign up!</h3>
<br/>
	<div id="form_error_msg" style="padding:5px;background-color: #FFBABA; border:1px solid #E53E46;margin-bottom:10px;">
						
	</div>
<?php
if (isset($_GET['dup'])==1){
 ?>
 <div id="form_error_msg" style="padding:5px;background-color: #FFBABA; border:1px solid #E53E46;margin-bottom:10px;">
      <h3>Email already in use</h3>
 </div>
<?php
 } 

 ?>
	<form name="register" action="add_new_user.php" onsubmit="return validateForm()" method="post" id="reg_form">
	    Name: <br/><input type="text" name="name" maxlength="30" id="query"/><br/>
	    YourEmail: <br/><input type="text" name="email" maxlength="30" id="query"/><br/>
	    Password: <br/><input type="password" name="pass1" id="query"/> <br />
	    Password Again: <br/><input type="password" name="pass2" id="query"/> <br/>
	    
	    <br/>
<br/>
	    <br/>
	    <input type="submit" value="register" id="register" class="small_btn"/>
	    <br/>
	    <br/>
	</form>

	<a href="index.php">Back home</a>
	</div>
</div>
<script>

document.getElementById("form_error_msg").style.display = 'none';
</script>

</body>
</html>