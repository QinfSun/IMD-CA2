(function($) {
    "use strict";
     $(document).on('ready', function() {	
		// Porgress Bar JS  //
		$('.progress.two .progress-bar').each(function () {
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition': 'width 3s'
			});
			setTimeout(function () {
				$this.appear(function () {
					$this.css('width', width + '%');
				});
			}, 900);
		});
		

	});
	
})(jQuery);
