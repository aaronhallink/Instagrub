<?php


	//Generate Query
	$query = htmlspecialchars($_GET["q"]);
	$parameters = htmlspecialchars($_GET["p"]);

	if ($query == "search"){

		//Build URL
		$api_call = "http://api.yummly.com/v1/api/recipes?_app_id=0fb30730&_app_key=bccfb71afea23ecc5c9f68cc7174ffc6&q=".$parameters."";
		
		//get the json of recipes from yummly
		$recipies =  file_get_contents($api_call);

		//echo on the page for front end to parse
		echo $recipies;
	}

	if ($query == "get"){
		//Build URL
		$api_call = "http://api.yummly.com/v1/api/recipe/".$parameters."?_app_id=0fb30730&_app_key=bccfb71afea23ecc5c9f68cc7174ffc6";

		//get the json of a single recipe from yummly
		$recipe = file_get_contents($api_call);

		//echo on the page for front end to parse
		echo $recipe;

	}

?>