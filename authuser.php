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


			if(sha1($password)!=$realpass['password'])
			{
				echo "Error! Invalid username or password, plz try again.";
			}
			else
			{
				$_SESSION['valid_user'] = $username;
				header('Location: index.php');
			}
?>