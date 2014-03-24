<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=320">
<link rel='stylesheet' type='text/css' href='css/style.css' />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400' rel='stylesheet' type='text/css'>
	<title>Instagrub</title>
</head>
<body>
<div id="wrap">
		<div id="login">
			<a href="register.php">Don't have an account? Sign up!</a>
		</div>
		<br/>
	<div id="header"><h1 style="color:white;margin-top:-5px;float:left;">Instagrub</h1></div>

	<form name="register" action="auth_user.php" method="post">
	    Email: <input type="text" name="email" maxlength="30" /><br />
	    Password: <input type="password" name="pass1" /> <br />
	    <input type="submit" value="Login" id="register" />
	</form>

	<a href="index.php">Back home</a>
</div>
</body>
</html>