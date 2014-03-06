describe('API', function() {
	
	var API;
	
	beforeEach( function() {
		API = new api();
	});
	
	it('should not be null', function() {
		expect(API).not.toBe(null);
	});
	
	it('should be static', function() {
		expect(new api()).toEqual(API);
	});
	
	
});