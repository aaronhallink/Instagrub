jQuery( document ).ready(function( $ ) {});

//keeps the api prototype static, we only need one copy.
function api() {
	if(window.sharedAPI)
		return window.sharedAPI;
	else if( !(this instanceof api) )
		return window.sharedAPI = new api;
}

//usses the php backend to request a json that will have 10 recipes based on the search terms
api.prototype.SearchRecipe = function(args, callback){
	var backend = "../backend.php?q=search&p=";
	var apiJson= $.getJSON(backend, {p : args }, callback);
}

//use the php backend to search for a specific recipe must use the recipies uniqe id
api.prototype.getRecipe = function(args, callback){
	var backend = "../backend.php?q=get&p=";
	var apiJson= $.getJSON(backend, {p : args }, callback);
}

