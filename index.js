(function(){

  'use strict';

  var frame = $('.frame'),
      text = $('.text');

  frame
    .on('mouseenter', function(event) {
      text.pause();
    })
    .on('mouseleave', function(event) {
      text.resume();
    });

  function animate() {
    text
      .css({
        left: frame.width() + 10
      })
      .animate({
        left: - text.width() - frame.width() - 10
      }, {
        duration: 10000,
        easing: 'linear',
        complete: animate
      });
  }

  animate();

}());
