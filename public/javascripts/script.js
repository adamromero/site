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
				$inputMessage = $('#inputMessage')
				valid = true;

			if (!this.validName($inputName.val())) {
				$inputName.next('.contact-form__check').attr('class', 'icon-remove');
				valid = false;
			} else {
				$inputName.next('.contact-form__check').attr('class', 'icon-checkmark');
			}

			if (!this.validEmail($inputEmail.val())) {
				$inputEmail.next('.contact-form__check').attr('class', 'icon-remove');
				valid = false;
			} else {
				$inputEmail.next('.contact-form__check').attr('class', 'icon-checkmark');
			}

			if (!this.validPhoneNumber($inputPhone.val())) {
				$inputPhone.next('.contact-form__check').attr('class', 'icon-remove');
				valid = false;
			} else {
				$inputPhone.next('.contact-form__check').attr('class', 'icon-checkmark');
			}

			if (!this.validMessage($inputMessage.val())) {
				valid = false;
			}

			return valid;
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

		validMessage: function(message) {
			return message !== "" && message.length >= 10 && message.length <= 400;
		}






	};

	return app;
})();

app.init();


			
		
