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
				$inputName.removeClass('success').addClass('error');
				$inputName.next('.contact-form__check').removeClass('hide').addClass('icon-remove');
				$inputName.parents('.contact-form__block').next('.contact-form__error-message').removeClass('hide');
				valid = false;
			} else {
				$inputName.removeClass('error').addClass('success');
				$inputName.next('.contact-form__check').removeClass('hide').removeClass('icon-remove').addClass('icon-checkmark');
				$inputName.parents('.contact-form__block').next('.contact-form__error-message').addClass('hide');
			}

			if (!this.validEmail($inputEmail.val())) {
				$inputEmail.removeClass('success').addClass('error');
				$inputEmail.next('.contact-form__check').removeClass('hide').addClass('icon-remove');
				$inputEmail.parents('.contact-form__block').next('.contact-form__error-message').removeClass('hide');
				valid = false;
			} else {
				$inputEmail.removeClass('error').addClass('success');
				$inputEmail.next('.contact-form__check').removeClass('hide').removeClass('icon-remove').addClass('icon-checkmark');
				$inputEmail.parents('.contact-form__block').next('.contact-form__error-message').addClass('hide');
			}

			if (!this.validPhoneNumber($inputPhone.val())) {
				$inputPhone.removeClass('success').addClass('error');
				$inputPhone.next('.contact-form__check').removeClass('hide').addClass('icon-remove');
				$inputPhone.parents('.contact-form__block').next('.contact-form__error-message').removeClass('hide');
				valid = false;
			} else {
				$inputPhone.removeClass('error').addClass('success');
				$inputPhone.next('.contact-form__check').removeClass('hide').removeClass('icon-remove').addClass('icon-checkmark');
				$inputPhone.parents('.contact-form__block').next('.contact-form__error-message').addClass('hide');
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


			
		
