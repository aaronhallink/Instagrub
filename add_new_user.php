<?php
		$name = htmlspecialchars($_POST['name']);
		$email = htmlspecialchars($_POST['email']);
		$pass1 = htmlspecialchars($_POST['pass1']);
		$pass2 = htmlspecialchars($_POST['pass2']);
		
		/*Some error checking
	
		*/	
			//check if email is already in the database
			/*function doubleEmail($email)
			{
				$conn = mysql_connect('localhost:3306', 'root', '' );
				mysql_select_db('jamjam', $conn);

				$query = "SELECT email_address FROM user WHERE email_address = '$email';";
				$result = mysql_query($query);
				$row = mysql_fetch_row($result);


			}*/
			function checkEmail($email_f) 
			{
				//Query Database and check if the username is taken
				//Email address is the username
				$conn = mysql_connect('localhost:3306', 'root', '' );
				mysql_select_db('jamjam', $conn);
				
				$query = "SELECT email_address FROM user WHERE email_address = '$email_f';";
				echo $query;
				$result = mysql_query($query);
				echo "<br/>".$result."<br/>";
				$email_from_db = mysql_num_rows($result);
				echo $email_from_db;
				
				//Check if the email is there
				if($email_from_db!=0)
				{
					return true;
				}
				else
					return false;
			}
			
			if (checkEmail($email)==false)  
			{
				$conn = mysql_connect('localhost:3306', 'root', '' );
				mysql_select_db('jamjam', $conn);
				//Hash password and save user account in database
				$password = sha1($pass1);
				
				$query = "INSERT INTO `user`(`name`, `email_address`, `password`) VALUES ('$name',  '$email',  '$password');";
				mysql_query($query);
				mysql_close();
				header('Location: index.php');
			}
			else 
				echo "email is already in the database";
				header('Location: register.php');
?>
