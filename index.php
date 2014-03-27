<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=320">

<link rel='stylesheet' type='text/css' href='css/style.css' />



<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400' rel='stylesheet' type='text/css'>
	<title>Instagrub</title>
	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>


	<script type="text/javascript" src="src/api.js"></script>
	<script type="text/javascript" src="src/scripts.js"></script>


</head>
<body>

<!-- Image for spinner -->
<img src="images/Tomato.gif" id="Tomato" style="position:absolute;margin-left:50%;margin-top:200px;">

<?php
	session_start();
	require('config.php');
?>

	<div id="header">
		<div style="float:left;margin-top:-6px;color:white;">
			<h1>Instagrub</h1>
		</div>
		<?php
		if (isset($_SESSION['valid_user']))
		{
			echo "Hello, ".$_SESSION['uname'];
			echo "<br/><a href='logout.php'>Log out</a>  - <a href='ingredients.php'>Ingredients</a>";
		}
		else
		{
			?>

			<div id="login" style="float:right;">
			<a href="login.php" >Login</a> or <a href="register.php">Sign up</a>
			</div>

			<?php
		}
		?>
	</div>
<div id="wrap">
	<!--This is where the buttons and area where the ingredients are listed-->
	<div id="search_box">
		<form name="post_msg" method="post">
			<center><div id="search_and_btn"><input type="text" id="query" name="query" maxlength="150" placeholder="Enter ingredient here"/><span  class="small_btn"  onclick="displayIngredient()"/>Add</span></div></center>
			<br/>
			<center><div id="input_target">
				

			</div></center>
			<br/>
			<div id="search_and_btn">
				<center>
					<select id="filter">
  						<option value="relevance" selected>Most Relevant</option>
				  		<option value="rating">Highest Rated</option>
				  		<option value="preptime">Shortest Time</option>
					</select>
				</center>
			</div>
			<center><span id="searchImage" onclick="recipeSearch()" />Find Recipes</span></center>
	</div>

	<!--This is where the results will be displayed-->
	<div id="results_target" style="padding:15px;">
	</div>
</div>

<script>
	document.getElementById("Tomato").style.display = 'none';
	
</script>

</body>
</html>
