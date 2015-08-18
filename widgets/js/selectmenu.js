$(function(){
  // options
  // nooptin
  $('#selectmenu-nooption-speed, #selectmenu-nooption-files').selectmenu();

  // icons
  $('#selectmenu-icons-speed, #selectmenu-icons-files').selectmenu({
    icons: {
      button: "ui-icon-circle-triangle-s"
    }
  });

  // position
  $('#selectmenu-position-speed, #selectmenu-position-files').selectmenu({
    position: {
      at: 'right center',
      my: 'left+10 center'
    }
  });

  // width
  $('#selectmenu-width-speed, #selectmenu-width-files').selectmenu({
    width: 300
  });

  // events
  // change
  $('#selectmenu-change-speed').selectmenu({
    width: 200,
    change: function( event, ui ) {
      $('.div-selectmenu-change-speed').text(ui.item.value);
    }
  });
  $('#selectmenu-change-files').selectmenu({
    width: 200,
    change: function( event, ui ) {
      $('.div-selectmenu-change-files').text(ui.item.value);
    }
  });

  // focus
  $('#selectmenu-focus-speed').selectmenu({
    width: 200,
    focus: function( event, ui ) {
      $('.div-selectmenu-focus-speed').text(ui.item.value);
    }
  });
  $('#selectmenu-focus-files').selectmenu({
    width: 200,
    focus: function( event, ui ) {
      $('.div-selectmenu-focus-files').text(ui.item.value);
    }
  });

  // select
  $('#selectmenu-select-speed').selectmenu({
    width: 200,
    select: function( event, ui ) {
      $('.div-selectmenu-select-speed').text(ui.item.value);
    }
  });
  $('#selectmenu-select-files').selectmenu({
    width: 200,
    select: function( event, ui ) {
      $('.div-selectmenu-select-files').text(ui.item.value);
    }
  });

  // samples
  // circle
  var circle = $('.selectmenu-circle');

  $('#selectmenu-radius').selectmenu({
    width: 200,
    change: function( event, data ) {
      circle.css({
        width: data.item.value,
        height: data.item.value
      });
    }
   });

  $('#selectmenu-color').selectmenu({
    width: 200,
    change: function( event, data ) {
      circle.css( "background", data.item.value );
    }
   });

});
