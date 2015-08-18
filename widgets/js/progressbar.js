$(function(){
  // options
  // value
  $('.progressbar-value').progressbar({
    value: 37
  });

  // disabled
  $('.progressbar-disabled').progressbar({
    value: 37,
    disabled: true
  });

  // max
  $('.progressbar-max').progressbar({
    max: 1024,
    value: 512
  });

  // methods
  // value
  $('.btn-progressbar-methods-value').button();
  $('.progressbar-methods-value').progressbar({
    value: 50
  });
  $('.btn-progressbar-methods-value').click( function(){
    var value = Number($('.input-progressbar-methods-value').val());
    $('.progressbar-methods-value').progressbar('option','value', value);
  });

  // events
  // change
  $('.btn-progressbar-change').button();
  $('.progressbar-change').progressbar({
    value: 50,
    change: function(event, ui){
      $('.div-progressbar-change').text('changed!');
    }
  });
  $('.btn-progressbar-change').click( function(){
    var value = Number($('.input-progressbar-change').val());
    $('.progressbar-change').progressbar('option','value', value);
  });

  // complete
  $('.btn-progressbar-complete').button();
  $('.progressbar-complete').progressbar({
    value: 50,
    complete: function(event, ui){
      $('.div-progressbar-complete').text('completed!');
    }
  });
  $('.btn-progressbar-complete').click( function(){
    var value = Number($('.input-progressbar-complete').val());
    console.log($('.input-progressbar-complete'));
    $('.progressbar-complete').progressbar('option','value', value);
  });

});
