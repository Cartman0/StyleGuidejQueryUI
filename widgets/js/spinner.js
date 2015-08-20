$(function(){
  // options
  // nooptin
  $('#spinner-nooption').spinner();

  // disabled
  $('#spinner-disabled').spinner({
    disabled: true
  });

  // icons
  $('#spinner-icons').spinner({
    icons: {
      down: "ui-icon-arrow-1-s",
      up: "ui-icon-arrow-1-n"
    }
  });

  // max, min
  $('#spinner-maxmin').spinner({
    min: 0,
    max: 50
  });

  // step
  $('#spinner-step').spinner({
    step: 5
  });

  // page
  $('#spinner-page').spinner({
    page: 15
  });

  // culture, numberFormat
  $('#spinner-numberFormat-n-jaJP').spinner({
    culture: 'ja-JP',
    numberFormat: "n",
    step: 1,
    min: 0,
    max: 100
  });
  $('#spinner-numberFormat-n-enUS').spinner({
    culture: 'en-US',
    numberFormat: "n",
    step: 1,
    min: 0,
    max: 100
  });

  $('#spinner-numberFormat-d-jaJP').spinner({
    culture: 'ja-JP',
    numberFormat: "d",
    step: 1,
    min: 0,
    max: 100
  });
  $('#spinner-numberFormat-d-enUS').spinner({
    culture: 'en-US',
    numberFormat: "d",
    step: 1,
    min: 0,
    max: 100
  });

  $('#spinner-numberFormat-c-jaJP').spinner({
    culture: 'ja-JP',
    numberFormat: "c",
    step: 1,
    min: 0,
    max: 100
  });
  $('#spinner-numberFormat-c-enUS').spinner({
    culture: 'en-US',
    numberFormat: "c",
    step: 1,
    min: 0,
    max: 100
  });

  $('#spinner-numberFormat-p-jaJP').spinner({
    culture: 'ja-JP',
    numberFormat: "p",
    step: 0.01,
    min: 0.0,
    max: 1.0
  });
  $('#spinner-numberFormat-p-enUS').spinner({
    culture: 'en-US',
    numberFormat: "p",
    step: 0.01,
    min: 0.0,
    max: 1.0
  });

  // methods
  // value()
  $('#spinner-methods-value').spinner();
  $('.btn-spinner-methods-value')
  .button()
  .click( function() {
    var val = $('#spinner-methods-value').spinner('value');
    $('.input-spinner-methods-value').val(val);
  });

  // events
  // change
  $('#spinner-change').spinner({
    change: function(event, ui) {
      var val = $(this).spinner('value');
      $('.input-spinner-change').val(val);
    }
  });

  // spin
  $('#spinner-spin').spinner({
    spin: function(event, ui) {
      var val = $(this).spinner('value');
      $('.input-spinner-spin').val(val);
    }
  });


});
