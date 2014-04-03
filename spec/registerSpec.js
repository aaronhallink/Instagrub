describe("Register.php", function() {

	describe("when an error is displayed", function() {
		it("should have a block form", function() {
			expect(document.getElementById("form_error_msg").style.display).not.toBe('block');
			showError();
			expect(document.getElementById("form_error_msg").style.display).toBe('block');
		});
	});
	
	describe("when no fields are entered", function() {
		it("should throw an error", function() {
			expect(validateForm()).toBe(false);
		});
	});
	
	describe("Error checking", function() {
		beforeEach(function() {
			document.forms["reg_form"]["name"].value = 'bob';
			document.forms["reg_form"]["email"].value = 'bob@bob.bob';
			document.forms["reg_form"]["pass2"].value = 'bob';
			document.forms["reg_form"]["pass1"].value = 'bob';
		});
		
		describe("valid fields", function() {
			it("should not return an error", function() {
				expect(validateForm()).toBe(true);
			});
		});
		
		describe("Two empty fields", function() {
			it("should return an error", function() {
				document.forms["reg_form"]["name"].value = '';
				document.forms["reg_form"]["email"].value = '';
				expect(validateForm()).toBe(false);
				expect(document.getElementById('form_error_msg').innerHTML).toBe('<h4 style="font-size:16px;">The following errors occurred while processing your submission. Please make the following corrections to finish your submission.</h4><p>The field "Your Name" was left blank.</p><p>The field "Your Email" was left blank.</p>');
			})
		});
		
		describe("Three empty fields", function() {
			it("should return an error", function() {
				document.forms["reg_form"]["name"].value = '';
				document.forms["reg_form"]["pass2"].value = '';
				document.forms["reg_form"]["pass1"].value = '';
				expect(validateForm()).toBe(false);
				expect(document.getElementById('form_error_msg').innerHTML).toBe('<h4 style="font-size:16px;">The following errors occurred while processing your submission. Please make the following corrections to finish your submission.</h4><p>The field "Your Name" was left blank.</p><p>The field "Password 1" was left blank.</p><p>The field "Password 2" was left blank.</p>');
			});
		});
		
		describe("No name entered", function() {
			it("should return an error", function() {
				document.forms["reg_form"]["name"].value = '';
				expect(validateForm()).toBe(false);
				expect(document.getElementById('form_error_msg').innerHTML).toBe('<h4 style="font-size:16px;">The following errors occurred while processing your submission. Please make the following corrections to finish your submission.</h4><p>The field "Your Name" was left blank.</p>');
			});
		});
		
		describe("No email entered", function() {
			it("should return an error", function() {
				document.forms["reg_form"]["email"].value = '';
				expect(validateForm()).toBe(false);
				expect(document.getElementById('form_error_msg').innerHTML).toBe('<h4 style="font-size:16px;">The following errors occurred while processing your submission. Please make the following corrections to finish your submission.</h4><p>The field "Your Email" was left blank.</p>');
			});
		});
		
		describe("No pass1 entered", function() {
			it("should return an error", function() {
				document.forms["reg_form"]["pass1"].value = '';
				expect(validateForm()).toBe(false);
				expect(document.getElementById('form_error_msg').innerHTML).toBe('<h4 style="font-size:16px;">The following errors occurred while processing your submission. Please make the following corrections to finish your submission.</h4><p>The field "Password 1" was left blank.</p><p>Your passwords did not match.</p>');
			});
		});
		
		describe("No pass2 entered", function() {
			it("should return an error", function() {
				document.forms["reg_form"]["pass2"].value = '';
				expect(validateForm()).toBe(false);
				expect(document.getElementById('form_error_msg').innerHTML).toBe('<h4 style="font-size:16px;">The following errors occurred while processing your submission. Please make the following corrections to finish your submission.</h4><p>The field "Password 2" was left blank.</p><p>Your passwords did not match.</p>');
			});
		});
		
		describe("Different passwords", function() {
			it("should return an error", function() {
				document.forms["reg_form"]["pass2"].value = 'notbob';
				expect(validateForm()).toBe(false);
				expect(document.getElementById('form_error_msg').innerHTML).toBe('<h4 style="font-size:16px;">The following errors occurred while processing your submission. Please make the following corrections to finish your submission.</h4><p>Your passwords did not match.</p>');
			})
		});
	});
	
	

});