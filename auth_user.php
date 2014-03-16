<?php
	session_start();
	require('config.php');
	//Get email and password
	$username = htmlspecialchars($_POST['email']);
	$password = htmlspecialchars($_POST['pass1']);

	$username = mysql_real_escape_string($username);
	
	$conn = mysql_connect($_SESSION['db_name'], $_SESSION['db_username'], $_SESSION['db_password'] );
	mysql_select_db($_SESSION['db_table'], $conn);

	//Get Password
	$query = "SELECT password FROM user WHERE email_address='$username';";
	$result = mysql_query($query);
	$realpass = mysql_fetch_array($result);

	//Get Name
	$query2 = "SELECT name FROM user WHERE email_address='$username';";
	$result2 = mysql_query($query2);
	$uname = mysql_fetch_array($result2);
	
	$name = $uname['name'];

	//Get user_id
	$query2 = "SELECT user_id FROM user WHERE email_address='$username';";
	$result2 = mysql_query($query2);
	$uname = mysql_fetch_array($result2);

	$user_id = $uname['user_id'];

	if(sha1($password)!=$realpass['password'])
	{
		echo "Error! Invalid username or password, please try again.";
	}
	else
	{
		$_SESSION['uname'] = $name;
		$_SESSION['valid_user'] = $username;
		$_SESSION['user_id'] = $user_id;
		header('Location: index.php');
	}
?>