//
// navbar.js
// Theme module
//

'use strict';

(function() {

  //
  // Variables
  //

  var navbarToggle = document.querySelectorAll('.navbar-nav [data-toggle="collapse"]');

  //
  // Functions
  //

  function toggleAccordion(el) {
    var collapses = el.closest('.navbar-nav, .navbar-nav .nav, .collapse').querySelectorAll('.collapse');

    [].forEach.call(collapses, function(currentEl) {
      if (currentEl !== el) {
        $(currentEl).collapse('hide');
      }
    });
  }

  //
  // Events
  //

  [].forEach.call(navbarToggle, function(el) {
    el.addEventListener('click', function() {
      toggleAccordion(el);
    });
  });

})();
