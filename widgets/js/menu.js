$(function(){
  // options
  // mooption
  $('.menu-nooption').menu();

  // icons
  $('.menu-icons').menu({
    icons: {
      submenu: "ui-icon-circle-triangle-e"
    }
  });

  // position
  $('.menu-position').menu({
    position: {
     at: 'center bottom',
     my: 'left top'
    }
  });

  // events
  // focus
  $('.menu-focus').menu({
    focus: function( event, ui ) {
      $('.div-menu-focus').text('item: ' + ui.item.context.innerText);
    }
  });

  // select
  $('.menu-select').menu({
    select: function( event, ui ) {
      $('.div-menu-select').text('item: ' + ui.item.context.innerText);
    }
  });
});
