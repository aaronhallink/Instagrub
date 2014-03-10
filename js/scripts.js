/**
A collection of general functions used in the Intsagrub application
@module scripts
@class scripts

**/
var output="";
var querySearch="";
var ingredients = new Array();
var i;
var recipes = new Array();
var check = 0;

/**
Displays the ingredients that the user added to the text area. 
@method displayIngredients
**/
function displayIngredient(){
	var name = document.getElementById('query').value;
	if(checkIngredient(name)){
		alert("You already entered that!");
		return;
	}
	if(name!=""){
		ingredients.push(name);
		output = "";
		for(i = 0; i<ingredients.length; i++){
			output += (ingredients[i] + "\n");
		}
		document.getElementById('input_target').innerHTML = output;
		document.getElementById('input_target').placeholder=null;
	}
	else{
		alert("Enter an ingredient!");
		document.getElementById('input_target').innerHTML = output;
	}
}

/**
Checks whether or not the given ingredient was already inputted.

@method checkIngredient
@param {String} name The name of the ingredient to check.
@return {boolean} `true` if the ingredient **`name`** has been inputted by the user. Returns `false` otherwise.
**/
function checkIngredient(name){
	for(i=0; i<ingredients.length; i++){
		if(ingredients[i]==name){
			return true;
		}
	}
	return false;
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

/**
This function makes the query string, then calls the api object to make a api search
Then it gets the matches and displays them.

@method recipeSearch
**/
// This function makes the query string, then calls the api object to make a api search
// Then it gets the matches and displays them
function recipeSearch(){
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
	api();
	api().SearchRecipe(querySearch, 
		function(data){
			console.log(data);
			if(check == 1){
				while(document.getElementById('results_target').hasChildNodes()){
					document.getElementById('results_target').removeChild(document.getElementById('results_target').lastChild);
				}
			}
			for(var i=0; i<data.matches.length; i++){
				var recipeImg = new Image(100,100);
				recipeImg.src = data.matches[i].smallImageUrls[0];
				recipeImg.border = 1;
				var recipeName=document.createTextNode(data.matches[i].recipeName);

				var ingredientsList = "Ingredients:\n";

				var List = document.createTextNode(ingredientsList);


				document.getElementById('results_target').appendChild(recipeImg);
				document.getElementById('results_target').appendChild(recipeName);
				document.getElementById('results_target').appendChild(document.createElement('br'));
				document.getElementById('results_target').appendChild(document.createTextNode('Ingredients:'));
				document.getElementById('results_target').appendChild(document.createElement('br'));
				for(var j=0; j<data.matches[i].ingredients.length; j++){
					document.getElementById('results_target').appendChild(document.createTextNode(j + ". " + data.matches[i].ingredients[j]));
					document.getElementById('results_target').appendChild(document.createElement('br'));
				}
			}
			update();

		});
	querySearch = "";
	if(document.getElementById('results_target').hasChildNodes()){
	}
}

function update(){
	check = 1;
}