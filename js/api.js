jQuery( document ).ready(function( $ ) {});
/** 
This class defines an object used to interact with the Yummly API

@class api
@static
@constructor
**/

/**
Keeps the api prototype static, we only need one copy.
@constructor api
**/
//
function api() {
	if(window.sharedAPI)
		return window.sharedAPI;
	else if( !(this instanceof api) )
		return window.sharedAPI = new api;
}
/**
Uses the PHP backend to request a JSON that will have 10 recipes based on the search terms.
@method SearchRecipe
@param args {String} The parameters for the searchRecipe Yummly API call.
@param callback {function} The function excuted with the returned JSON.
**/
api.prototype.SearchRecipe = function(args, callback){
	var backend = "../backend.php?q=search&p=";
	var apiJson= $.getJSON(backend, {p : args }, callback);
}
/**
Use the PHP backend to search for a specific recipe must use the recipe's unique ID.
@method getRecipe
@param args {String} The parameters for the getRecipe Yummly API call.
@param callback {function} The function executed with the returned JSON.
**/
api.prototype.getRecipe = function(args, callback){
	var backend = "../backend.php?q=get&p=";
	var apiJson= $.getJSON(backend, {p : args }, callback);
}

