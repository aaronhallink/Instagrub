<!DOCTYPE html>
<html>
<head>
<link rel='stylesheet' type='text/css' href='css/style.css' />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400' rel='stylesheet' type='text/css'>
	<title>Instagrub</title>
</head>
<body>
<?php
	session_start();
	require('config.php');
?>
<div id="wrap">

		<?php
		if (isset($_SESSION['valid_user']))
		{
			echo "Hello, ". $_SESSION['valid_user'];
			echo "<br/><a href='logout.php'>Log out</a>";

		}
		else
		{
			?>

			<div id="login">
			<a href="login.php">Login</a> or <a href="register.php">Sign up</a>
			</div>

			<?php
		}
		?>
	<div id="header">Instagrub</div>

	<div id="search_box">
		<form name="post_msg" action="get.php" method="post">
			Search: <input type="text" name="query" maxlength="30" /><br />
			<input type="submit" value="submit" />
		</form>
	</div>
</div>
</body>
</html>