var app = (function() {
	var s;
	var app = {
		settings: {
			$mobileMenu: $('#menu')
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
			})
		},

		handleHeadingState: function() {
			if ($(window).scrollTop() > 50 && Foundation.MediaQuery.atLeast('medium')) {
				$('.header-heading').addClass('is-scrolled');
			} else {
				$('.header-heading').removeClass('is-scrolled');
			}
		}
	};

	return app;
})();

app.init();


			
		
