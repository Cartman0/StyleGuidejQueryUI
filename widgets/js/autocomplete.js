$(function(){
  var langs = ['ja', 'en', 'cn', 'sp', '日本語', '英語', '中国語', 'フランス語'];
  $('.autocomplete-source').autocomplete({
    source: langs
  });

  // autoFocus
  $('.autocomplete-autoFocus').autocomplete({
    source: langs,
    autoFocus: true
  });

  // delay
  $('.autocomplete-delay').autocomplete({
    source: langs,
    delay: 600
  });

  // minLength
  $('.autocomplete-minLength-0').autocomplete({
    source: langs,
    minLength: 0
  });
  $('.autocomplete-minLength-2').autocomplete({
    source: langs,
    minLength: 2
  });

  // position
  $('.autocomplete-position').autocomplete({
    source: langs,
    position: { my : "right top", at: "right bottom" }
  });

  // label
  var data = [
    { label: 'acceptsメソッド', value: 'accepts' },
    { label: 'action_nameメソッド', value: 'action_name' },
    { label: 'addメソッド', value: 'add' },
    { label: 'add_columnメソッド', value: 'add_column' },
    { label: 'add_indexメソッド', value: 'add_index' },
    { label: 'add_timestampsメソッド', value: 'add_timestamps' },
    { label: 'after_createメソッド', value: 'after_create' },
    { label: 'after_destroyメソッド', value: 'after_destroy' }
  ];
  $('.autocomplete-label').autocomplete({
    source: data
  });


  // events
  // change
  $('.autocomplete-change').autocomplete({
    source: langs,
    change: function( event, ui ) {
      $('.div-autocomplete-change').text('label: ' + ui.item.label + ' value: ' + ui.item.value);
    }
  });

  // close
  // $('.autocomplete-close').autocomplete({
  //   source: langs,
  //   close: function( event, ui ) {
  //     console.log(ui);
  //     // $('.div-autocomplete-close').text('label: ' + ui.item.label + ' value: ' + ui.item.value);
  //   }
  // });

  // focus
  $('.autocomplete-focus').autocomplete({
    source: langs,
    focus: function( event, ui ) {
      // console.log(ui);
      $('.div-autocomplete-focus').text(
        'label: ' + ui.item.label +
        ' value: ' + ui.item.value
      );
    }
  });

  // select
  $('.autocomplete-select').autocomplete({
    source: langs,
    select: function( event, ui ) {
      $('.div-autocomplete-select').text(
        'label: ' + ui.item.label +
        ' value: ' + ui.item.value
      );
    }
  });
});
