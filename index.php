<!DOCTYPE html>
<html>
<head>
<link rel='stylesheet' type='text/css' href='css/style.css' />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400' rel='stylesheet' type='text/css'>
	<title>Instagrub</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>


<script type="text/javascript" src="build/Instagrub.min.js"></script>

<!--
<script type="text/javascript" src="js/api.js"></script>
<script type="text/javascript" src="js/scripts.js"></script>
-->

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
echo "Hello, ". $_SESSION['valid_user'];
echo "<br/><a href='logout.php'>Log out</a>";

}
else
{
?>

<div id="login">
<a href="login.php">Login</a> or <a href="register.php">Sign up</a>
</div>

<?php
}
?>
		<div id="header"></div>
	<!--This is where the buttons and area where the ingredients are listed-->
	<div id="search_box">
		<form name="post_msg" method="post">
			<input type="text" id="query" name="query" maxlength="150" placeholder="Enter ingredient here"/>
			<img id="addImage" src="images/add_unpressed.png"  onclick="displayIngredient()" onmousedown="changeImageAdd()" onmouseup="revertImageAdd()" height="35px" align="middle"/><br />
			<textarea readonly rows="30" cols="50" id="input_target" alignment="center" placeholder="This will display what has already been inputted above" style="background-color:#ffeabd">
			</textarea>
			<img src="images/search_unpressed.png" id="searchImage" onclick="recipeSearch()" onmousedown="changeImageSearch()"  onmouseup="revertImageSearch()"  width="200px"/>
	</div>
	<!--This is where the results will be displayed-->
	<div id="results_target">
	</div>


</div>
</body>
</html>