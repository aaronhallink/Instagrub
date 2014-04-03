describe("Scripts", function () {	
	
	var addButton;
	var query;
	var textArea;
	var results;
	var searchButton;
	var addImgSrc;
	var searchImgSrc;
	
	it('should have one child', function() {
		expect(results.firstChild).toBe(results.lastChild);
	});
	
	beforeEach(function() {
		addButton = document.getElementById('addImage');
		query = document.getElementById('query');
		textArea = document.getElementById('input_target');
		results = document.getElementById('results_target');
		searchButton = document.getElementById('searchImage');
		addImgSrc = addButton.src;
		searchImgSrc = searchButton.src;
		spy = {
			'f' : function() {
				return 0;
			}
		};
		spyOn(spy, 'f');
	});
	
	describe("when a new ingredient is submitted", function() {
		it("should update the text area", function() {
			var prev = textArea.innerHTML;
			query.value = "corn";
			addButton.click();
			expect(textArea.innerHTML).not.toBe(prev);
			prev = textArea.innerHTML;
			expect(prev).toBe(textArea.innerHTML);
			query.value = "peas";
			addButton.click();
			expect(textArea.innerHTML).not.toBe(prev);
			prev = textArea.innerHTML;
			query.value = "chicken";
			addButton.click();
			expect(textArea.innerHTML).not.toBe(prev);
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
	
	describe("when an ingredient is removed", function() {
		it("should update the text area", function() {
			var prev = textArea.innerHTML;
			removeIngredient(0);
			expect(textArea.innerHTML).not.toBe(prev);
			prev = textArea.innerHTML;
			expect(prev).toBe(textArea.innerHTML);
			removeIngredient(1);
			expect(textArea.innerHTML).not.toBe(prev);
			prev = textArea.innerHTML;
			removeIngredient(0);
			expect(textArea.innerHTML).not.toBe(prev);
		});
	});
	

	
	describe("when search button is clicked", function() {
		
		it("should post results", function() {
			expect(results.hasChildNodes()).toBe(true);
		});
	});
	
	describe("when update is called", function() {
		it("should update check", function() {
			expect(check).toBe(0);
			// expect(update()).toBe(1);
			
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
			expect(document.getElementById("Tomato").style.display).toBe('block');
		});
	});
	
	describe("when hideImage() is called", function() {
		it("should hide the spinning tomato", function() {
			hideImage();
			expect(document.getElementById("Tomato").style.display).toBe('none');
			expect(document.getElementById("Tomato").style.visibility).toBe('hidden');
		});
	});
	
	describe("recurse", function() {
		it("should call the function passed to its callback argument", function() {
			recurse([], spy.f, []);
			expect(spy.f).toHaveBeenCalled();
		});
	});
	
});