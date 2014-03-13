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
			echo "Hello, ".$_SESSION['uname'];
			echo "<br/><a href='logout.php'>Log out</a>";

		}
		else
		{
			header('Location: index.php');
		}
		?>
	<div id="header"></div>

	<div id="search_box">
		<form name="add_ingredient" action="add_ingredients.php" method="post">
			Add Ingredient: <input type="text" name="ingredient_name" maxlength="30" /><br />
			<input type="submit" value="submit" />
		</form>
	</div>
	<h2>Ingredients</h2>
	<?php

		$user_id = $_SESSION['user_id'];

		$conn = mysql_connect('localhost:3306', 'root', '' );
		mysql_select_db('jamjam', $conn);
				
		$query = "SELECT ingredient_id, ingredient_name FROM ingredients WHERE user_id = '".$_SESSION['user_id']."';";

		$result = mysql_query($query);
		while ($ingredients = mysql_fetch_array($result))

			echo $ingredients['ingredient_name']."<span style='float:right;'><a href='delete.php?ingredient_id=".$ingredients['ingredient_id']."'>[X]</a></span><br/>";

	?>
</div>
</body>
</html>