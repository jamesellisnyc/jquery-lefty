# Capturing click events the right way

Inspired by [this article](http://mislav.uniqpath.com/2011/03/click-hijack/) and described in more detail [here](http://rawnet.github.com/2011/11/09/click-hijacking-in-jquery) and [here](http://rawnet.github.com/2011/11/11/click-hijacking-in-jquery-part-2)

### Usage

Simply bind to the `click:left` event instead of the usual `click`. Easy!

```javascript
// bind to the event...
$('my-selector').on('click:left', function(e) {
  // ...
});

// trigger the event...
$('my-selector').trigger('click:left');

// remove the event...
$('my-selector').off('click:left');
```

MIT License