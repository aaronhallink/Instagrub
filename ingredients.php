<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=320">
<link rel='stylesheet' type='text/css' href='css/style.css' />
	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<!--
	<script type="text/javascript" src="src/api.js"></script>
	<script type="text/javascript" src="src/scripts.js"></script>
	-->
	
	<script type="text/javascript" src="build/Instagrub.min.js"></script>

	
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400' rel='stylesheet' type='text/css'>
	<title>Instagrub</title>
</head>
<body>

<img src="images/Tomato.gif" id="Tomato" style="position:absolute;margin-left:50%;margin-top:200px;">

<?php
	session_start();
	require('config.php');
?>
<div id="header"><h1 style="color:white;margin-top:-5px;float:left;">Instagrub</h1>
	<div style="float:right;">
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
		</div>
</div>
<div id="wrap">

		

	<div id="search_box">
		<form name="add_ingredient" action="add_ingredients.php" method="post">
			Add Ingredient: <input type="text" name="ingredient_name" maxlength="30" /><br />
			<input type="submit" class="small_btn" /><br/>
		</form>
	</div>
	<br/>
	<h2>My Ingredients</h2>
	<div id="my_ingredients">
	<?php

		$user_id = $_SESSION['user_id'];

		$conn = mysql_connect('localhost:3306', 'root', '' );
		mysql_select_db('jamjam', $conn);
				
		$query = "SELECT ingredient_id, ingredient_name FROM ingredients WHERE user_id = '".$_SESSION['user_id']."';";

		$result = mysql_query($query);
		while ($ingredients = mysql_fetch_array($result))
		{
			echo $ingredients['ingredient_name']."<span style='float:right;'><a href='delete.php?ingredient_id=".$ingredients['ingredient_id']."'>[X]</a></span><br/>";
			//echo $ingredients['ingredient_name'];

		}

	?>	
	</div>
	<div id="search_and_btn">
				<center>
					<select id="filter">
  						<option value="relevance" selected>Most Relevant</option>
				  		<option value="rating">Highest Rated</option>
				  		<option value="preptime">Shortest Time</option>
					</select>
				</center>
			</div>
		<center><span id="searchImage" onclick="search()" />Find Recipes</span></center>
		<div id="results_target" style="padding:15px;">
		</div>
</div>

<script>
	document.getElementById("Tomato").style.display = 'none';
	
</script>

</body>
</html>