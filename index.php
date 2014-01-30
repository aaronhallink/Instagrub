<!DOCTYPE html>
<html>
<head>
<link rel='stylesheet' type='text/css' href='css/style.css' />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400' rel='stylesheet' type='text/css'>
	<title>Instagrub</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="js/scripts.js"></script>

</head>
<body>
<div id="wrap">
		<div id="login">
			<a href="login.php">Login</a> or <a href="register.php">Sign up</a>
		</div>
		<div id="header"></div>

	<div id="search_box">
		<form name="post_msg" action="get.php" method="post">
			<input type="text" id="query" name="query" maxlength="150" placeholder="Enter ingredient here"/>
			<img id="addImage" src="images/add_unpressed.png" onclick="displayIngredient()" onmousedown="changeImageAdd()" onmouseup="revertImageAdd()" height="35px" align="middle"/><br />
			<textarea readonly rows="30" cols="50" id="input_target" alignment="center" placeholder="This will display what has already been inputted above" style="background-color:#ffeabd">
			</textarea>
			<button type="submit"><img src="images/search_unpressed.png" id="searchImage" 
			onmousedown="changeSearchImage()" onmouseup="revertSearchImage()" width="200px"/></button>
		</form>
	</div>
</div>
</body>
</html>