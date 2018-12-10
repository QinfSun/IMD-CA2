(function($) {
  "use strict";

  /*---------------------------------------------------------------------------------
   collapse for work experience drop down links e.g. Tallaght University Hospital
  -----------------------------------------------------------------------------------*/
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function() {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

})(jQuery);
