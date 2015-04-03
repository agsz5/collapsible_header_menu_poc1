(function() {
  $(document).ready(function() {
    return $('#header-handle').click(function() {
      return $('header').toggleClass('expanded');
    });
  });

}).call(this);
