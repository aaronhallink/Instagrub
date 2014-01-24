<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php

	$APP_ID = "0fb30730";
	$APP_KEY = "bccfb71afea23ecc5c9f68cc7174ffc6";

	//Generate Query
	$query = htmlspecialchars($_POST['query']);

	//Build URL
	$api_call = "http://api.yummly.com/v1/api/recipes?_app_id=".$APP_ID."&_app_key=".$APP_KEY."&q=".$query."";
	
	var_dump(json_decode(file_get_contents($api_call)));;
?>
</body>
</html>