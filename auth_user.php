<?php
	session_start();
	require('config.php');
	//Get email and password
	$username = htmlspecialchars($_POST['email']);
	$password = htmlspecialchars($_POST['pass1']);

	$username = mysql_real_escape_string($username);
	
	$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

	//Get Password
	$query = "SELECT password FROM user WHERE email_address='$username';";
	$result = mysqli_query($conn, $query);
	$realpass = mysqli_fetch_array($result);

	//Get Name
	$query2 = "SELECT name FROM user WHERE email_address='$username';";
	$result2 = mysqli_query($conn, $query2);
	$uname = mysqli_fetch_array($result2);
	
	$name = $uname['name'];

	//Get user_id
	$query2 = "SELECT user_id FROM user WHERE email_address='$username';";
	$result2 = mysqli_query($conn, $query2);
	$uname = mysqli_fetch_array($result2);

	mysqli_close($conn);

	$user_id = $uname['user_id'];

	if(sha1($password)!=$realpass['password'])
	{
		echo "Error! Invalid username or password, please try again.";
		echo "Redirecting...";
		//gives delay before redirecting
		header('refresh:3;url=login.php');
	}
	else
	{
		$_SESSION['uname'] = $name;
		$_SESSION['valid_user'] = $username;
		$_SESSION['user_id'] = $user_id;
		header('Location: index.php');
	}
?>
