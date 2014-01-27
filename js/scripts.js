//var ingredients_list = newArray();
var output="" ;
var ingredients = new Array();
var amount = new Array();
var i;

function displayIngredient(){
/*if (e.keyCode == 13) {*/
	var name = document.getElementById('ingredients').value;
	var quantity = document.getElementById('amount').value;
	//for(i = 0; i<ingredients_list.length; i++){
	//}
	if (quantity == "")
		quantity = "1";
	if(checkIngredient(name)==1){
		alert("You already entered that!");
		return;
	}
	if(name!=""){
		ingredients.push(name);
		amount.push(quantity);
		output = "";
		console.log(ingredients[0]);
		for(i = 0; i<ingredients.length; i++){
			if(i!=ingredients.length-1)
				output += (amount[i] + ":" + ingredients[i] + "\n");
			else
				output += (amount[i] + ":" + ingredients[i]  "\n");
		}
		document.getElementById('input_target').innerHTML = output;
		document.getElementByid('input_target').placeholder=null;
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
function changeImage(){
	console.log("TEST");
	var target = document.getElementById('addImage');
	target.src = "images/add_pressed.png";
}

function revertImage(){
	var target = document.getElementById('addImage');
	target.src = "images/add_unpressed.png";
}
	/*function outputName(){
	var name = document.getElementById('name').value;
	if(name!="")
		document.getElementById('name_target').innerHTML = "<p> Hello " + name + "</p>";
	else{
		alert("Please enter your name!");
		document.getElementById('name_target').innerHTML = null;
	}
}*/
	/*return false;*/
// }

