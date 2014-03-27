describe("Scripts", function () {	
	
	var addButton;
	var query;
	var textArea;
	var results;
	var searchButton;
	var addImgSrc;
	var searchImgSrc;
	
	it('should have no children', function() {
		console.log(results.firstChild);
	});
	
	beforeEach(function() {
		addButton = document.getElementById('addImage');
		query = document.getElementById('query');
		textArea = document.getElementById('input_target');
		results = document.getElementById('results_target');
		searchButton = document.getElementById('searchImage');
		addImgSrc = addButton.src;
		searchImgSrc = searchButton.src;
	});
	
	describe("when a new ingredient is submitted", function() {
		it("should update the text area", function() {
			query.value = "corn";
			addButton.click();
			expect(textArea.innerHTML).toBe(output);
			query.value = "peas";
			addButton.click();
			expect(textArea.innerHTML).toBe(output);
			query.value = "chicken";
			addButton.click();
			expect(textArea.innerHTML).toBe(output);
		});
	});
	
	describe("when an ingredient is already added", function () {	
		it("should return 1", function () {
			expect(checkIngredient('corn')).toBe(true);
		});
	});
	
	describe("when an ingredient isn't already added", function() {
		it("should return false", function() {
			expect(checkIngredient('ham')).toBe(false);
		});
	});
	
	describe("when search button is clicked", function() {
		
		it("should post results", function() {
			expect(results.hasChildNodes()).toBe(true);
		});
	});
	
	describe("when update is called", function() {
		it("should update check", function() {
			expect(update()).toBe(1);
			// expect(check).toBe(1);
		});
	});
	
	describe("when updateMatches is called", function() {
		it("should update checkMatches", function() {
			updateMatches();
			expect(checkMatches).toBe(1);
		});
	});
	
	describe("when showImage() is called", function() {
		it("should display a spinning tomato", function() {
			showImage();
			expect(document.getElementById("Tomato").style.display).toBe('block')
		});
	});
	
});