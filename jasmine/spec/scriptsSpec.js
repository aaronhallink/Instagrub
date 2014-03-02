describe("Scripts", function () {	
	
	var addButton;
	var query;
	var textArea;
	var results;
	var searchButton;
	var addImgSrc;
	var searchImgSrc;
	
	beforeEach(function() {
		addButton = document.getElementById('addImage');
		query = document.getElementById('query');
		textArea = document.getElementById('input_target');
		results = document.getElementById('results_target');
		searchButton = document.getElementById('searchImage');
		addImgSrc = addButton.src;
		searchImgSrc = searchButton.src;
	});
	
	// describe("when the add button is clicked", function() {
		// it("should change to a pressed button", function() {
		// addButton.mousedown(addButton);
			// expect(addImgSrc).toBe("images/add_pressed.png");
		// });
	// });
	
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
			expect(checkIngredient('corn')).toBe(1);
		});

	});
	
	describe("when an ingredient isn't added", function() {
		it("should return 0", function() {
			expect(checkIngredient('ham')).toBe(0);
		});
	});
	
	describe("when search button is clicked", function() {
		it("should post results", function() {
			expect(results.hasChildNodes()).toBe(true);
		});
	});
	
});