//var ingredients_list = newArray();
var output="" ;
var ingredients = new Array();
var amount = new Array();
var i;
//once an ingredient and quantity is entered in the text field, it gets displayed
function displayIngredient(){
	var name = document.getElementById('ingredients').value;
	var quantity = document.getElementById('amount').value;
	//if no or negative quantity is inputed, it sets to 1 as default
	if (quantity == "")
		quantity = "1";
	else if (quantity < 0)
		quantity = "1";
		
	//if the ingredient is already in the ingredients array
	if(checkIngredient(name)==1){
		console.log("HERE");
		alert("You already entered that!");
		return;
	}
	//ingredient gets added
	if(name!=""){
		ingredients.push(name);
		amount.push(quantity);
		output = "";
		console.log(ingredients[0]);
		for(i = 0; i<ingredients.length; i++){
			if(i!=ingredients.length-1)
				output += (amount[i] + " :" + ingredients[i] + "\n");
			else
				output += (amount[i] + " :" + ingredients[i] + "\n");
		}
		document.getElementById('input_target').innerHTML = output;
		document.getElementByid('input_target').placeholder=null;
	}
	//if nothing gets added
	else{
		alert("Enter an ingredient!");
		document.getElementById('input_target').innerHTML = null;
	}
}
//checks if the ingredient is already in the array
function checkIngredient(name){
	for(i=0; i<ingredients.length; i++){
		if(ingredients[i]==name){
			return 1;
		}
	}
	return 0;
}
//these two change the image whether the image is pressed or released
function changeImage(){
	console.log("TEST");
	var target = document.getElementById('addImage');
	target.src = "images/add_pressed.png";
}

function revertImage(){
	var target = document.getElementById('addImage');
	target.src = "images/add_unpressed.png";
}

