$(function(){
  // options
  // nooptin
  $('.slider-nooption').slider();

  // animate
  $('.slider-animate-slow').slider({
    animate: "slow"
  });
  $('.slider-animate-fast').slider({
    animate: "fast"
  });

  // disabled
  $('.slider-disabled').slider({
    disabled: true
  });

  // max, min
  $('.slider-maxmin').slider({
    max: 200,
    min: 50
  });

  // orientation
  $('.slider-orientation-horizontal').slider({
    orientation: "horizontal"
  });
  $('.slider-orientation-vertical').slider({
    orientation: "vertical"
  });

  // range
  $('.slider-range').slider({
    range: true
  });

  // step
  $('.slider-step').slider({
    step: 10
  });

  // value
  $('.slider-value').slider({
    value: 50
  });

  // values
  $('.slider-values').slider({
    values: [ 25, 75 ]
  });

  // methods
  // value
  $('.slider-methods-value').slider();
  $('.btn-slider-methods-value')
  .button()
  .click(function() {
    var v = $('.slider-methods-value').slider( "value" );
    $('.input-slider-methods-value').val(v);
  });

  // events
  // change
  $('.slider-change').slider({
    change: function(event, ui){
      $('.input-slider-change').val(ui.value);
    }
  });

  // slide
  $('.slider-slide').slider({
    slide: function(event, ui){
      $('.input-slider-slide').val(ui.value);
    }
  });

  // samples
  // progressbar and slider
  $('.slider-slider-progressbarandslider').slider({
    slide: function(event, ui){
      $('.slider-progressbar-progressbarandslider').progressbar( 'option', 'value', ui.value);
    }
  });
  $('.slider-progressbar-progressbarandslider').progressbar();

});
