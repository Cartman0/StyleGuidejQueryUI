$(function(){
  // options
  $('.button-nooption').button();

  // disabled
  $('.button-disabled').button({
    disabled: true
  });

  // icons
  $('.button-icons').button({
    icons: { primary: "ui-icon-gear", secondary: "ui-icon-triangle-1-s" }
  });

  // label
  $('.button-label').button({
    label: "custom label"
  });

  // sample
  //checkbox
  $('.button-checkbox').button();
  $('.button-checkbox-set').buttonset();

  // radio
  // radio click
  $('.button-radio-click').buttonset();

  $('.button-radio-click input[type=radio]').each(function(index, el) {
    if($(el).attr('checked') === 'checked'){
      console.log($(el));
      $('.div-button-radio-click').text('id: ' + $(el)[0].id);
    }
  });

  $('.button-radio-click input[type=radio]').click( function(){
    $('.button-radio-click label').each(function(index, el) {
      if( $(el).attr('aria-pressed') === 'true' ){
        $('.div-button-radio-click').text( 'id: ' + $(el).attr('for'));
      }
    });
  });

  // toolbar
  $('.button-toolbar .beginning').button({
    text: false,
    icons: {
      primary: "ui-icon-seek-start"
    }
  });
  $('.button-toolbar .rewind').button({
    text: false,
    icons: {
      primary: "ui-icon-seek-prev"
    }
  });
  // play
  $('.button-toolbar .play').button({
    text: false,
    icons: {
      primary: "ui-icon-play"
    }
  })
  .click(function() {
    var options = {};
    if ( $( this ).text() === "play" ) {
      options = {
        label: "pause",
        icons: {
          primary: "ui-icon-pause"
        }
      };
    } else {
      options = {
        label: "play",
        icons: {
          primary: "ui-icon-play"
        }
      };
    }
    $( this ).button('option', options);
  });

  $('.button-toolbar .stop').button({
    text: false,
    icons: {
      primary: "ui-icon-stop"
    }
  })
  .click(function() {
    $('.button-toolbar .play').button('option', {
      label: 'play',
      icons: {
        primary: "ui-icon-play"
      }
    });
  });
  $('.button-toolbar .forward').button({
    text: false,
    icons: {
      primary: "ui-icon-seek-next"
    }
  });
  $('.button-toolbar .end').button({
    text: false,
    icons: {
      primary: "ui-icon-seek-end"
    }
  });
  $('.button-toolbar .shuffle').button();

});
