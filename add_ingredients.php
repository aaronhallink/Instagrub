<?php
	session_start();

	$ingredient_name = htmlspecialchars($_POST['ingredient_name']);

	require_once('config.php');
	
	$conn=mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	if (mysqli_connect_errno())
	{
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	//insert ingredient and user_id into database			

	$query = "INSERT INTO ingredients(ingredient_name, user_id) VALUES ('$ingredient_name', '".$_SESSION['user_id']."');";

	mysqli_query($conn, $query);
	mysqli_close($conn);
	header('Location: ingredients.php');
?>
