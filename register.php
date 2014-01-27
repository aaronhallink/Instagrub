<!DOCTYPE html>
<html>
<head>
<link rel='stylesheet' type='text/css' href='css/style.css' />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400' rel='stylesheet' type='text/css'>
	<title>Instagrub</title>
</head>
<body>
<div id="wrap">
		<div id="login">
			<a href="login.php">Login</a> or <a href="register.php">Sign up</a>
		</div>
	<div id="header">Instagrub</div>

	<div id="wrapper">
	<h3>Sign up!</h3>
	<form name="register" action="add_new_user.php" method="post">
	    Name: <input type="text" name="name" maxlength="30" /><br />
	    Email: <input type="text" name="email" maxlength="30" /><br />
	    Password: <input type="password" name="pass1" /> <br />
	    Password Again: <input type="password" name="pass2" /> <br/>
	    <input type="submit" value="register" id="register" />
	</form>

	<a href="index.php">Back home</a>
	</div>
</div>
</body>
</html>