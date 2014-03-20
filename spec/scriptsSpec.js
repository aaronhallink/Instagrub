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
	
});