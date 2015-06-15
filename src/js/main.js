;(function(window) {
  var $beer1 = $('.beer1'),
      $beer2 = $('.beer2'),
      $beer3 = $('.beer3'),
      $beer4 = $('.beer4'),
      $beer5 = $('.beer5'),
      $beer1info = $('.beer1info'),
      $beer2info = $('.beer2info'),
      $beer3info = $('.beer3info'),
      $beer4info = $('.beer4info'),
      $beer5info = $('.beer5info');
      // $percentage = $('.percentage');

// $.when(
//   $.getJSON('../api/styles.json')
//   // $.getJSON('../api/calc.json')
// ).then(function(styles){
//   console.log(styles);
//   $beer1.text(styles.data[0].name);
//
//   $beer2.text(styles.data[1].name);
//
//   $beer3.text(styles.data[2].name);
//
//   $beer4.text(styles.data[3].name);
//
//   $beer5.text(styles.data[4].name);
//
//   $beer1info.text(styles.data[0].description);
//
//   $beer2info.text(styles.data[1].description);
//
//   $beer3info.text(styles.data[2].description);
//
//   $beer4info.text(styles.data[3].description);
//
//   $beer5info.text(styles.data[4].description);
//
//   // $percentage.text(calc.percentage);
// });

$.getJSON('../api/styles.json')
  .then (function(styles) {
      console.log(styles);

      $beer1.text(styles.data[0].name);

      $beer2.text(styles.data[1].name);

      $beer3.text(styles.data[2].name);

      $beer4.text(styles.data[3].name);

      $beer5.text(styles.data[4].name);

      $beer1info.text(styles.data[0].description);

      $beer2info.text(styles.data[1].description);

      $beer3info.text(styles.data[2].description);

      $beer4info.text(styles.data[3].description);

      $beer5info.text(styles.data[4].description);

  });

  // $.getJSON('../api/calc.json')
  //   .then (function(calc) {
  //     $percentage.text(calc.percentage);
  //   });

})(window);
