$(function(){
  // nooption
  $('.box').resizable();

  //alsoresize
  $(".also-resize").resizable({
    alsoResize: ".mirror"
  });
  $('.mirror').resizable();

  // animate
  $('.animate').resizable({
    animate: true
  });

  // animateDuration
  $('.animateDuration-slow').resizable({
    animate: true,
    animateDuration: "slow"
  });
  $('.animateDuration-fast').resizable({
    animate: true,
    animateDuration: "fast"
  });

  // animateEasing
  $('.animateEasing-swing').resizable({
    animate: true,
    animateEasing: 'swing'
  });
  $('.animateEasing-easeOutBounce').resizable({
    animate: true,
    animateEasing: 'easeOutBounce'
  });

  //aspectRatio
  $('.aspectRatio').resizable({
    aspectRatio: true
  });

  // autoHide
  $('.autoHide').resizable({
    autoHide: true
  });

  // containment
  $('.containment').resizable({
    containment: '.containment-container'
  });

  // delay
  $('.delay').resizable({
    delay: 300
  });

  // distance
  $('.distance').resizable({
    distance: 30
  });

  // ghost
  $('.ghost').resizable({
    ghost: true
  });

  // grid
  $('.grid').resizable({
    grid: [ 20, 10 ]
  });

  // handles
  $('.handles-all').resizable({
    handles: 'all'
  });

  // helper
  $('.helper').resizable({
    helper: 'ui-resizable-helper'
  });

  // maxHeight, maxWidth, minHeight, minWidth
  $('.width-height').resizable({
    maxHeight: 200,
    maxWidth: 300,
    minHeight: 50,
    minWidth: 50
  });

  // events
  // resize
  $('.resize').resizable({
    resize: function( event, ui ) {
      $('.div-resize').text('width:' + ui.size.width + ' height:' + ui.size.height);
    }
  });

  // stop
  $('.stop').resizable({
    stop: function(event, ui){
      $('.div-stop').text('width:' + ui.size.width + ' height:' + ui.size.height);
    }
  });
});
