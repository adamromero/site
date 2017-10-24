var app = (function() {
	var s;
	var app = {
		settings: {
			$mobileMenu: $('#menu'),
			//validateEmail: require('rfc822-validate')
		},
	
		init: function() {
			s = this.settings;
			$(document).foundation();
			this.bindUIActions();
			s.$mobileMenu.mmenu();
		},

		bindUIActions: function() {
			app.handleHeadingState();
			$(document).scroll(function() {
				app.handleHeadingState();
			});

			$(window).resize(function() {
				app.handleHeadingState();
			});

			$('.contact-form__input').on('change keyup paste', function() {
				app.validateContactForm();
			});
		},

		handleHeadingState: function() {
			if ($(window).scrollTop() > 50 && Foundation.MediaQuery.atLeast('medium')) {
				$('.header-heading').addClass('is-scrolled');
			} else {
				$('.header-heading').removeClass('is-scrolled');
			}
		},

		validateContactForm: function() {
			if (this.validContactInputs()) {
				$('#inputSubmit').prop('disabled', false);
			} else {
				$('#inputSubmit').prop('disabled', true);
			}
		},

		validContactInputs: function() {
			var $inputName = $('#inputName'),
				$inputEmail = $('#inputEmail'),
				$inputPhone = $('#inputPhone'),
				$inputMessage = $('#inputMessage'),
				valid = true;

			if (!this.validInput(this.validName, $inputName)) {
				valid = false;
			}
			if (!this.validInput(this.validEmail, $inputEmail)) {
				valid = false;
			}
			if (!this.validInput(this.validPhoneNumber, $inputPhone)) {
				valid = false;
			}
			if (!this.validMessage($inputMessage)) {
				valid = false;
			}

			return valid;
		},

		validInput: function(valid, $input) {
			if (!valid($input.val())) {
				this.displayErrorMark($input);
				return false;
			} else {
				this.displaySuccessMark($input);
			}
			return true;
		},

		displaySuccessMark: function($input) {
			$input.removeClass('error').addClass('success');
			$input.next('.contact-form__check').removeClass('hide').removeClass('icon-remove').addClass('icon-checkmark');
			$input.parents('.contact-form__block').next('.contact-form__error').addClass('hide');
		},

		displayErrorMark: function($input) {
			$input.removeClass('success').addClass('error');
			$input.next('.contact-form__check').removeClass('hide').addClass('icon-remove');
			$input.parents('.contact-form__block').next('.contact-form__error').removeClass('hide');
		},

		validName: function(name) {
			return name !== "";
		},

		validEmail: function(email) {
			return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email);
		},

		validPhoneNumber: function(number) {
			return /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i.test(number);
		},

		validMessage: function($message) {
			if ($message.val() !== "" && $message.val().length >= 10 && $message.val().length <= 400) {
				$message.removeClass('error').addClass('success');
				$message.next('.contact-form__error').addClass('hide');
				return true;
			} else {
				$message.removeClass('success').addClass('error');
				$message.next('.contact-form__error').removeClass('hide');
			}
			return false;
		}
	};

	return app;
})();

app.init();


			
		
