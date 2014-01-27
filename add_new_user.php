<?php
		$name = htmlspecialchars($_POST['name']);
		$email = htmlspecialchars($_POST['email']);
		$pass1 = htmlspecialchars($_POST['pass1']);
		$pass2 = htmlspecialchars($_POST['pass2']);
	
		if(strlen($pass1) > 30 || strlen($pass1) < 6 )
	    	header('Location: register.php');
		if ($pass1!=$pass2)
		    header('Location: register.php');
		if(strlen($username) > 30)
	    	header('Location: register.php');
		
		$password = sha1($pass1);
		
		$conn = mysql_connect('localhost:3306', 'root', '' );
		mysql_select_db('jamjam', $conn);
		$username = mysql_real_escape_string($username);
		$query = "INSERT INTO `user`(`name`, `email_address`, `password`) VALUES ('$name',  '$email',  '$password');";
		mysql_query($query);
		mysql_close();
		header('Location: index.php');
?>
