describe("Register.php", function() {

	describe("when an error is displayed", function() {
		it("should have a block form", function() {
			expect(document.getElementById("form_error_msg").style.display).not.toBe('block');
			showError();
			expect(document.getElementById("form_error_msg").style.display).toBe('block');
		});
	});
	
	

});