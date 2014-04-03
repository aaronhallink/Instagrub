<?php
	session_start();

	$ingredient_name = htmlspecialchars($_POST['ingredient_name']);

	$conn = mysql_connect('localhost:3306', 'root', '' );

	mysql_select_db('jamjam', $conn);

	//insert ingredient and user_id into database

	$query = "SELECT ingredient_name FROM ingredients WHERE user_id ='".$_SESSION['user_id']."' AND ingredient_name='$ingredient_name';";
	
	$added = mysql_query($query);
	
	$added_val = mysql_num_rows($added);

	if($ingredient_name == '')
	{
		header('Location: ingredients.php');
	}
	else if($added_val < 1)
	{
		$query = "INSERT INTO ingredients(ingredient_name, user_id) VALUES ('$ingredient_name', '".$_SESSION['user_id']."');";
		mysql_query($query);
		mysql_close();
		header('Location: ingredients.php');
	}
	else
	{
		mysql_close();
		header('Location: ingredients.php?added=true');
	}
	
	
?>