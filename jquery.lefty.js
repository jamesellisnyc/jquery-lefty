(function($){
  $.event.special['click:left'] = {
    setup: function() {
      $.event.add(this, 'click', $.event.special['click:left'].handler);
    },
    teardown: function() {
      $.event.remove(this, 'click');
    },
    handler: function(e) {
      if (e.which <= 1 && !e.metaKey && !e.shiftKey && !e.altKey && !e.ctrlKey) {
        e.type = "click:left";
        $.event.handle.apply(this, arguments);
      }
    }
  };
})(jQuery);