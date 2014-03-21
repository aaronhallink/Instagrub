describe('API', function() {
	
	var a;
	var spy;
	var data = null;
	
	beforeEach( function() {
		API = new api();
		console.log(API);
		spy = {
			'f' : function(data) {
				return 0;
			}
		};
		spyOn(spy, 'f');
	});
	
	it('should not be null', function() {
		expect(API).not.toBe(null);
	});
	
	it('should be static', function() {
		expect(new api()).toEqual(API);
	});
	
	it('should call the callback function', function() {
		API.SearchRecipe("corn", spy.f(data));
		expect(spy.f).toHaveBeenCalled();
	});
	
	
});