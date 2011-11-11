# Capturing click events the right way

### Usage

```javascript
$('my-selector').on('click:left', function(e) {
  // ...
});

$('my-selector').trigger('click:left');

$('my-selector').off('click:left');
```