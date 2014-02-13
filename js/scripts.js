//var ingredients_list = newArray();
var output="";
var querySearch="";
var ingredients = new Array();
var i;
var recipes = new Array();

// This will display the ingredients that the user added to the text area 
function displayIngredient(){
	var name = document.getElementById('query').value;
	if(checkIngredient(name)==1){
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
		document.getElementById('input_target').innerHTML = null;
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
function recipeSearch(){
	for(i=0;i<ingredients.length;i++){
		if(i!=ingredients.length-1)
			querySearch += ingredients[i] + "+";
		else
			querySearch += ingredients[i];
	}
	api();
	api().SearchRecipe(querySearch, 
		function(data){
			console.log(data);
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
					document.getElementById('results_target').appendChild(document.createTextNode(j+1 + ". " + data.matches[i].ingredients[j]));
					document.getElementById('results_target').appendChild(document.createElement('br'));
				}
			}
		});
	querySearch = "";
}
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



