//var ingredients_list = newArray();
var output="";
var querySearch="";
var ingredients = new Array();
var i;

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
			/*if(i!=ingredients.length-1)
				output += (amount[i] + " :" + ingredients[i] + "\n");
			else
				output += (amount[i] + " :" + ingredients[i] + "\n");*/
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

function checkIngredient(name){
	for(i=0; i<ingredients.length; i++){
		if(ingredients[i]==name){
			return 1;
		}
	}
	return 0;
}
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

function recipeSearch(){
	for(i=0;i<ingredients.length;i++){
		if(i!=ingredients.length-1)
			querySearch += ingredients[i] + "+";
		else
			querySearch += ingredients[i];
	}
	api();
	api().SearchRecipe(querySearch, function(data){console.log(data)});

}


