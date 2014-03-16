//var ingredients_list = newArray();
var output="";
var querySearch="";
var ingredients = new Array();
var i;
var recipes = new Array();
var check = 0;
var checkMatches = 0;
var checkRecipeList = 0;
var recipeList = new Array();

// This will display the ingredients that the user added to the text area 
function displayIngredient(){
	var name = document.getElementById('query').value;
	if(checkIngredient(name)==1){
		alert("You already entered that!");
		return;
	}
	if(name!=""){
		name = name.split(' ').join("+");
		ingredients.push(name);
		output = "";
		for(i = 0; i<ingredients.length; i++){
			output += (ingredients[i].split('+').join(' ') + "\n");
		}
		document.getElementById('input_target').innerHTML = output;
		document.getElementById('input_target').placeholder=null;
	}
	else{
		alert("Enter an ingredient!");
		document.getElementById('input_target').innerHTML = output;
	}
}

// Checks whether or not the ingredient was already inputted or not
function checkIngredient(name){
	for(i=0; i<ingredients.length; i++){
		if(ingredients[i]==name){
			return 1;
		}
	}
	return 0;
}

// these functions change the image of the buttons based on the press
function changeImageAdd(){
	var target = document.getElementById('addImage');
	target.src = "images/add_pressed.png";
}

function revertImageAdd(){
	var target = document.getElementById('addImage');
	target.src = "images/add_unpressed.png";
}

function changeImageSearch(){
	var target = document.getElementById('searchImage');
	target.src = "images/search_pressed.png";
}

function revertImageSearch(){
	var target = document.getElementById('searchImage');
	target.src = "images/search_unpressed.png";
}
// This function makes the query string, then calls the api object to make a api search
// Then it gets the matches and displays them

function querySearch(arrayOfParams, callback, output){
	if(arrayOfParams.length==0) 
		return callback(output);
	if(!output)
		output = [];
	api();
	api().searchRecipe(arrayOfParams.pop(),function(data)
	{
		output.push(data);
		querySearch(arrayOfParams, callback,output);
	});
}

function recurse(input, callback, output) {
	if(!output)
		output = [];
	if(input.length == 0)
	{
		return callback(output);
	}
	var data = input.pop();
	api().searchRecipe(data, function(data){
	output.push(data);
	recurse(input,callback,output);
	});
}

function recipeSearch(){
	/*recurse(ingredients,function(d)
	{
		console.log(d)
		if(check == 1){
			while(document.getElementById('results_target').hasChildNodes()){
				document.getElementById('results_target').removeChild(document.getElementById('results_target').lastChild);
			}
		}
		var correctMatches = new Array();
		for(var i = 0; i < d.length; i++)
		{
			for(var j = 0; j < d[i].matches.length; j++)
			{
				var match = true;
				if(d[i].matches.id == "Beer-Can-Chicken-511561")
				{
					console.log("It's here!");
				}
				for(var k = 0; k<d[i].matches[j].ingredients.length && match; k++)
				{

					if(ingredients.indexOf(d[i].matches[j].ingredients[k].replace(' ',"+"))<0)
					{
						match = false;
					}
				}
				if(match){
					correctMatches.push(d[i].matches[j]);
				}
			}
		}
		updateMatches();
		console.log(correctMatches.length);
		for(var i=0; i<correctMatches.length; i++)
		{
			var recipeImg = new Image(100,100);
			recipeImg.src = correctMatches[i].smallImageUrls[0];
			recipeImg.border = 1;
			var recipeName=document.createTextNode(correctMatches[i].recipeName);

			var ingredientsList = "Ingredients:\n";

			var List = document.createTextNode(ingredientsList);


			document.getElementById('results_target').appendChild(recipeImg);
			document.getElementById('results_target').appendChild(recipeName);
			document.getElementById('results_target').appendChild(document.createElement('br'));
			document.getElementById('results_target').appendChild(document.createTextNode('Ingredients:'));
			document.getElementById('results_target').appendChild(document.createElement('br'));
			for(var j=0; j<correctMatches[i].ingredients.length; j++){
				document.getElementById('results_target').appendChild(document.createTextNode(j + ". " + correctMatches[i].ingredients[j]));
				document.getElementById('results_target').appendChild(document.createElement('br'));
			}
		}
		update();
	});*/
	/*console.log(recipeList.length);*/
	for(i=0;i<ingredients.length;i++){
		if(i!=ingredients.length-1)
			querySearch += ingredients[i] + "+";
		else
			querySearch += ingredients[i];
	}
	if(querySearch==""){
		alert("Please enter ingredients!");
		return;
	}
	api().searchRecipe(querySearch, 
		function(data){
			console.log(data);
			if(check == 1){
				while(document.getElementById('results_target').hasChildNodes()){
					document.getElementById('results_target').removeChild(document.getElementById('results_target').lastChild);
				}
			}
			var correctMatches = new Array();
			for(var i = 0; i<data.matches.length; i++)
			{
				var match = true;
				for(var j = 0; j<data.matches[i].ingredients.length && match; j++)
				{
					console.log(data.matches[i].ingredients[j].split(' ').join("+"));
					if(ingredients.indexOf(data.matches[i].ingredients[j].split(' ').join("+"))<0)
					{
						match = false;
					}

				}
				if(match){
					correctMatches.push(data.matches[i]);
				}

			}
			updateMatches();
			console.log(correctMatches.length);
			for(var i=0; i<correctMatches.length; i++)
			{
				var recipeImg = new Image(100,100);
				recipeImg.src = correctMatches[i].smallImageUrls[0];
				recipeImg.border = 1;
				var recipeName=document.createTextNode(correctMatches[i].recipeName);

				var ingredientsList = "Ingredients:\n";

				var List = document.createTextNode(ingredientsList);


				document.getElementById('results_target').appendChild(recipeImg);
				document.getElementById('results_target').appendChild(document.createElement('br'));
				document.getElementById('results_target').appendChild(recipeName);
				document.getElementById('results_target').appendChild(document.createElement('br'));
				document.getElementById('results_target').appendChild(document.createTextNode('Ingredients:'));
				document.getElementById('results_target').appendChild(document.createElement('br'));
				for(var j=0; j<correctMatches[i].ingredients.length; j++){
					document.getElementById('results_target').appendChild(document.createTextNode((j+1) + ". " + correctMatches[i].ingredients[j]));
					document.getElementById('results_target').appendChild(document.createElement('br'));
				}
			}
			update();

		});
	/*querySearch = "";
	if(document.getElementById('results_target').hasChildNodes()){
	}*/
}

function update(){
	check = 1;
}
function updateMatches(){
	checkMatches = 1;
}
/*function updateRecipeList()
{
	 for(var i = 0; i < recipeList.length; i++)
	 {
	 	console.log(recipeList[i].length);
	 }
}*/
// Old way of displaying
/*function resultsCreate(){	
	for(var i = 0; i<recipes.length; i++){
		var recipeImg = new Image(100,100);
		recipeImg.src = recipes[i].smallImageUrls[0];
		recipeImg.border = 1;
		var recipeName=document.createTextNode(recipes[i].recipeName);

		var ingredientsList = "Ingredients:\n";

		var List = document.createTextNode(ingredientsList);
		document.getElementById('results_target').appendChild(recipeImg);
		document.getElementById('results_target').appendChild(recipeName);
		document.getElementById('results_target').appendChild(document.createElement('br'));
		document.getElementById('results_target').appendChild(document.createTextNode('Ingredients:'));
		document.getElementById('results_target').appendChild(document.createElement('br'));
		for(var j=0; j<recipes[i].ingredients.length; j++){
			document.getElementById('results_target').appendChild(document.createTextNode(j + ". " + recipes[i].ingredients[j]));
			document.getElementById('results_target').appendChild(document.createElement('br'));
		}
	}
}*/
/*
Ingredients:
beer
chicken
thyme
olive oil
*/

