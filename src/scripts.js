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
var checkMatches = 0;
var checkRecipeList = 0;
var recipeList = new Array();
var prepArray = new Array();

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
		name = name.split(' ').join("+");
		ingredients.push(name);
		output = "";
		for(i = 0; i<ingredients.length; i++){
			output += "<span style='float:left;'>"+(ingredients[i].split('+').join(' ') + "</span><span onClick='removeIngredient("+i+")' style='float:right;'>[X]</span><br/>");
		}
		document.getElementById('input_target').innerHTML = output;
        //Clear the form after adding the ingredient
        document.getElementById('query').value = "";
	}
	else{
		alert("Enter an ingredient!");
		document.getElementById('input_target').innerHTML = output;
	}
}

/**
 Removes the ingredient when the X is clicked in the text area
@method removeIngredient
@param ing_id {int} The place of the ingredient in the list, starting from 0.
**/
// Removes an ingredient from the list when the user clicks [X]
function removeIngredient(ing_id) 
{   
    for (i = 0; i < ingredients.length; i++)
    {
        if (ing_id==i)
        {   
            ingredients.splice(i, 1);
            output = "";
            for(i = 0; i < ingredients.length; i++)
            {
                output += "<span style='float:left;'>"+(ingredients[i].split('+').join(' ') + "</span><span onClick='removeIngredient("+i+")' style='float:right;'>[X]</span><br/>");
            }
        }
    }
    document.getElementById('input_target').innerHTML = output;
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

/**
Recursively makes an api search call for each ingredient submitted. Needed to deal with asynchronous API calls.
@method recurse

@param input {Array} Array of strings, containing recipe search terms.
@param callback {function} The function to be called when this function finishes executing.
@param output {Array} An array of arrays of query searches, 1 for each ingredient.

@return The output of the `callback` function, called with arguments `output`
**/
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

/**
Gets the ingredients, filters the html out and calls recipeSeach.
@method search
**/
function search()
{
    var my_ingredients = document.getElementById('my_ingredients');
    console.log (ingredients);
    ingredients = my_ingredients.innerHTML.replace(/\n|<.*?>/g,'').split(" ").join("+").split("[X]");
    console.log (ingredients);
    recipeSearch();
}

/**
This function makes the query string, then calls the api object to make a api search
Then it gets the matches and displays them.

@method recipeSearch
**/
function recipeSearch(){

	//show image
	showImage();

    var selectBox = document.getElementById('filter');
    var filter = selectBox.options[selectBox.selectedIndex].value;
    var ingredients_copy = new Array();
    for(var i=0; i<ingredients.length; i++)
    {
        ingredients_copy.push(ingredients[i]);
    }
    recurse(ingredients_copy,function(d)
    {
        console.log(d)
        if(check == 1){
            while(document.getElementById('results_target').hasChildNodes()){
                document.getElementById('results_target').removeChild(document.getElementById('results_target').lastChild);
            }
        }
        var correctMatches = new Array();
        var recipeIds = new Array();
        var recipes = new Array();
        for(var i = 0; i<6; i++)
        {
            var dummy = new Array();
            recipes.push(dummy);
        }
        var test_count = 0;
        for(var i = 0; i < d.length; i++)
        {
            for(var j=0; j < d[i].matches.length; j++)
            {
                var count = 0;
                if(test_count<10)
                {
                    console.log(d[i].matches[j].id);
                }
                for(var k = 0; k<d[i].matches[j].ingredients.length; k++)
                {
                    if(test_count<10){
                        console.log(ingredients.indexOf(d[i].matches[j].ingredients[k].split(' ').join("+")));
                    }
                    if(ingredients.indexOf(d[i].matches[j].ingredients[k].split(' ').join("+"))<0)
                    {
                        count++;
                        if(count>5)
                        {
                            break;
                        }
                    }
                }
                test_count++;
                if(count<6)
                {
 
                    if(recipeIds.indexOf(d[i].matches[j].id)==-1)
                    {
                        recipes[count].push(d[i].matches[j]);  
                        recipeIds.push(d[i].matches[j].id);            
                    }
                }
 
            }
        }
        for(var i = 0; i<6; i++)
        {
            for(var j=0; j<recipes[i].length; j++)
            {
                correctMatches.push(recipes[i][j]);
            }
        }
        updateMatches();
        if(filter=="preptime")
        {
            prepSort(correctMatches);
        }
        else if(filter=="rating")
        {
            rateSort(correctMatches);
        }
        for(var i=0; i<correctMatches.length; i++)
        {
            var recipeImg = new Image(100,100);
            var star = new Image(100,16);
            var starNums = correctMatches[i].rating;
            if(starNums == 0)
            {
                star.src = ("../images/rating_00.jpg");
            }
            else if(starNums == 1)
            {
                star.src = ("../images/rating_10.jpg");
            }
            else if(starNums == 2)
            {
                star.src = ("../images/rating_20.jpg");
            }
            else if(starNums == 3)
            {
                star.src = ("../images/rating_30.jpg");
            }
            else if(starNums == 4)
            {
                star.src = ("../images/rating_40.jpg");
            }
            else if(starNums == 5)
            {
                star.src = ("../images/rating_50.jpg");
            }
            else
            {
                star.src = ("../images/rating_05.jpg");
            }
            recipeImg.src = correctMatches[i].smallImageUrls[0];
            recipeImg.border = 1;
            var recipeName=document.createTextNode(correctMatches[i].recipeName);
            var recipeId = document.createTextNode(correctMatches[i].id);
            var prepTime;
            if(correctMatches[i].totalTimeInSeconds == null)
                prepTime = document.createTextNode("Not Available");
            else
                prepTime = document.createTextNode((correctMatches[i].totalTimeInSeconds/60));
            //var rating   = document.createTextNode(correctMatches[i].rating);
            //if(i==0)
              //  console.log(recipeId);
            var yummlyUrl= "http://www.yummly.com/recipe/external/";
            var hrefLink = yummlyUrl.concat(recipeId);
            var link = document.createElement('a');
            link.appendChild(recipeImg);
            yummlyUrl+=String(correctMatches[i].id);
            link.href = yummlyUrl;
            link.target="_blank";

            //link.href()
            var ingredientsList = "Ingredients:\n";
 
            var List = document.createTextNode(ingredientsList);
    
 
            document.getElementById('results_target').appendChild(link);
            document.getElementById('results_target').appendChild(document.createElement('br'));
            document.getElementById('results_target').appendChild(recipeName);
            document.getElementById('results_target').appendChild(document.createElement('br'));
            document.getElementById('results_target').appendChild(document.createTextNode('Ingredients:'));
            document.getElementById('results_target').appendChild(document.createElement('br'));
            for(var j=0; j<correctMatches[i].ingredients.length; j++){
                document.getElementById('results_target').appendChild(document.createTextNode((j+1) + ". " + correctMatches[i].ingredients[j]));
                document.getElementById('results_target').appendChild(document.createElement('br'));
            }
            //document.getElementById('results_target').appendChild(document.createElement('br'));
            document.getElementById('results_target').appendChild(document.createTextNode("Preparation Time in minutes:"));
            document.getElementById('results_target').appendChild(document.createElement('br'));
            document.getElementById('results_target').appendChild(prepTime);
            document.getElementById('results_target').appendChild(document.createElement('br'));

            document.getElementById('results_target').appendChild(document.createTextNode("Rating:"));
            document.getElementById('results_target').appendChild(document.createElement('br'));
            document.getElementById('results_target').appendChild(star);
            document.getElementById('results_target').appendChild(document.createElement('br'));
            document.getElementById('results_target').appendChild(document.createElement('br'));


        }
        update();
    });
}

/**
Resets check variable to 1.
@method update
**/
function update(){
    check = 1;
    
    // Hide the loading ticker
    hideImage();
	return check;
}

/**
Resets checkMatches variable to 1.
@method updateMatches
**/
function updateMatches(){
    checkMatches = 1;
}

/**
Displays the spinning tomato gif.
Called by recipeSearch when the search begins.
@method showImage
**/
function showImage() {
    document.getElementById("Tomato").style.display = 'block';
    document.getElementById("Tomato").style.visibility = 'visible';
}

/**
Hides the spinning tomato gif.
Called by update, when the search finishes.
@method hideImage
**/
function hideImage() {
    document.getElementById("Tomato").style.display = 'none';
    document.getElementById("Tomato").style.visibility = 'hidden';
}

function prepSort(input)
{
    input.sort(function(a,b){
        if(a.totalTimeInSeconds==null)
        {
            return (a.totalTimeInSeconds+1000000000)-b.totalTimeInSeconds
        }
        else if(b.totalTimeInSeconds == null)
        {
            return a.totalTimeInSeconds-(b.totalTimeInSeconds+1000000000)
        }
        else 
        {
            return a.totalTimeInSeconds-b.totalTimeInSeconds
        }
    });
}

function rateSort(input)
{
    input.sort(function(a,b){return b.rating-a.rating});
}

/*
Ingredients:
beer
chicken
thyme
olive oil
*/
/*
0. herbs
1. olive oil
2. kosher salt
3. lemon
4. chicken
*/
