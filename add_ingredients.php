<?php
	session_start();

	$ingredient_name = htmlspecialchars($_POST['ingredient_name']);

	$conn = mysql_connect('localhost:3306', 'root', '' );

	mysql_select_db('jamjam', $conn);

	//insert ingredient and user_id into database			

	$query = "INSERT INTO ingredients(ingredient_name, user_id) VALUES ('$ingredient_name', '".$_SESSION['user_id']."');";

	mysql_query($query);
	mysql_close();
	header('Location: ingredients.php');
?>