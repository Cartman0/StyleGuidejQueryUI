$(function(){
  // eefect
  // blind
  $('.effect-blind').click(function() {
    $(this).effect('blind', 1000, function(){
        setTimeout(function() {
          $('.effect-blind').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // bounce
  $('.effect-bounce').click(function() {
    $(this).effect('bounce', 1000, function(){
        setTimeout(function() {
          $('.effect-bounce').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // clip
  $('.effect-clip').click(function() {
    $(this).effect('clip', 1000, function(){
        setTimeout(function() {
          $('.effect-clip').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // drop
  $('.effect-drop').click(function() {
    $(this).effect('drop', 1000, function(){
        setTimeout(function() {
          $('.effect-drop').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // explode
  $('.effect-explode').click(function() {
    $(this).effect('explode', 1000, function(){
        setTimeout(function() {
          $('.effect-explode').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  //fade
  $('.effect-fade').click(function() {
    $(this).effect('fade', 1000, function(){
        setTimeout(function() {
          $('.effect-fade').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // fold
  $('.effect-fold').click(function() {
    $(this).effect('fold', 1000, function(){
        setTimeout(function() {
          $('.effect-fold').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // highlight
  $('.effect-highlight').click(function() {
    $(this).effect('highlight', 1000, function(){
        setTimeout(function() {
          $('.effect-highlight').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // puff
  $('.effect-puff').click(function() {
    $(this).effect('puff', 1000, function(){
        setTimeout(function() {
          $('.effect-puff').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // pulsate
  $('.effect-pulsate').click(function() {
    $(this).effect('pulsate', 1000, function(){
        setTimeout(function() {
          $('.effect-pulsate').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // scale
  $('.effect-scale').click(function() {
    $(this).effect('scale', {
      percent: 0
    }, 1000, function(){
        setTimeout(function() {
          $('.effect-scale').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // shake
  $('.effect-shake').click(function() {
    $(this).effect('shake', {
      percent: 0
    }, 1000, function(){
        setTimeout(function() {
          $('.effect-shake').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // size
  $('.effect-size').click(function() {
    $(this).effect('size', {
      to: {
        width: 50,
        height: 50
      }
    }, 1000, function(){
        setTimeout(function() {
          $('.effect-size').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // slide
  $('.effect-slide').click(function() {
    $(this).effect('slide', {
      to: {
        width: 50,
        height: 50
      }
    }, 1000, function(){
        setTimeout(function() {
          $('.effect-slide').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

  // transfer
  $('.effect-transfer').click(function() {
    $(this).effect('transfer', {
      to: '.div-effect-transfer',
      class: 'ui-effects-transfer'
    }, 1000, function(){
        console.log(1);
        setTimeout(function() {
          $('.effect-transfer').removeAttr( "style" ).hide().fadeIn();
        }, 2000 );
    });
  });

});
