<?php
	session_start();

	$del = htmlspecialchars($_GET['ingredient_id']);

	$conn = mysql_connect('localhost:3306', 'root', '' );
	mysql_select_db('jamjam', $conn);
				
	$query = "DELETE FROM `ingredients` WHERE `ingredient_id` =  '".$del."';";

	$result = mysql_query($query);
	header('Location: ingredients.php');
?>