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

			app.validateContactForm();

			if (window.location.pathname === "/contact") {
				app.initGoogleMap();
			}
		},

		handleHeadingState: function() {
			if ($(window).scrollTop() > 50 && Foundation.MediaQuery.atLeast('medium')) {
				$('.header-heading').addClass('is-scrolled');
			} else {
				$('.header-heading').removeClass('is-scrolled');
			}
		},

		validateContactForm: function() {
			var $inputName = $('#inputName'),
				$inputEmail = $('#inputEmail'),
				$inputPhone = $('#inputPhone'),
				$inputMessage = $('#inputMessage'),
				validName = false, 
				validEmail = false, 
				validPhone = false, 
				validMessage = false;

			$inputName.on('change keyup paste', function(e) {
				if (e.keyCode !== 9 && e.keyCode !== 16) {
					validName = app.validInput(app.validName, $inputName);
					app.handleSubmitButtonAccess(validName, validEmail, validPhone, validMessage);
				}
			});

			$inputEmail.on('change keyup paste', function(e) {
				if (e.keyCode !== 9 && e.keyCode !== 16) {
					validEmail = app.validInput(app.validEmail, $inputEmail);
					app.handleSubmitButtonAccess(validName, validEmail, validPhone, validMessage);
				}
			});

			$inputPhone.on('change keyup paste', function(e) {
				if (e.keyCode !== 9 && e.keyCode !== 16) {
					validPhone = app.validInput(app.validPhoneNumber, $inputPhone);
					app.handleSubmitButtonAccess(validName, validEmail, validPhone, validMessage);
				}
			});

			$inputMessage.on('change keyup paste', function(e) {
				if (e.keyCode !== 9 && e.keyCode !== 16) {
					validMessage = app.validMessage($inputMessage);
					app.handleSubmitButtonAccess(validName, validEmail, validPhone, validMessage);
				}
			});
		},

		handleSubmitButtonAccess: function(validName, validEmail, validPhone, validMessage) {
			if (validName && validEmail && validPhone && validMessage) {
				$('#inputSubmit').prop('disabled', false);
			} else {
				$('#inputSubmit').prop('disabled', true);
			}
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
		},

		initGoogleMap: function() {
			var latlng = new google.maps.LatLng(35.640556, -120.680008);
	        var map = new google.maps.Map(document.getElementById('map'), {
	        	center: latlng,
	        	zoom: 8
	        });
		}
	};

	return app;
})();

app.init();


			
		
