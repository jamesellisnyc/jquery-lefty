(function($){
  $.event.special['click:left'] = {
    setup: function() {
      $.event.add(this, 'click', $.event.special['click:left'].handler, {});
    },
    teardown: function() {
      $.event.remove(this, 'click', $.event.special['click:left'].handler);
    },
    handler: function(e) {
      if (e.which <= 1 && !e.metaKey && !e.shiftKey && !e.altKey && !e.ctrlKey) {
        // set correct event type
        e.type = "click:left";
        // trigger click:left handlers
        $.event.handle.apply(this, arguments);
      }
    }
  };
})(jQuery);