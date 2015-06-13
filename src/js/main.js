;(function(window) {
  var $beer1 = $('.beer1'),
      $beer2 = $('.beer2'),
      $beer3 = $('.beer3'),
      $beer4 = $('.beer4'),
      $beer5 = $('.beer5');

  $.getJSON('/../api/styles.json')
    .then (function(beer) {
      var beer1Tpl = _.template($(‘.beer1’).text());

    $(‘.beer1’).html(beer1Tpl({‘beer’:beer}));

  })

})(window);
