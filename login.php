<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=320">
<link rel='stylesheet' type='text/css' href='css/style.css' />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400' rel='stylesheet' type='text/css'>
	<title>Instagrub</title>
</head>
<body>

		<div id="header"><h1 style="color:white;margin-top:-5px;float:left;"><a href="index.php" style="color:white;text-decoration:none;">Instagrub</a></h1><div id="login" style="float:right;">
			<a href="register.php">Don't have an account?<br/> Sign up!</a>
		</div></div>
		<div id="wrap">
		<br/>
	

	<form name="register" action="auth_user.php" method="post">
	    Email: <br/><input type="text" name="email" maxlength="30" id="query"/><br />
	    Password: <input type="password" name="pass1" id="query"/> <br />
	    <br/>
	    <br/>
	    <br/>
	    <input type="submit" value="Login" id="register" class="small_btn"/>
	</form>
	<br/><br/>
	<a href="index.php">Back home</a>
</div>
</body>
</html>