$(function(){
  // options
  // autoOpen
  $('.btn-dialog-autoOpen').button();
  $('.dialog-autoOpen').dialog({
    autoOpen: false
  });
  $('.btn-dialog-autoOpen').click(function(){
    $('.dialog-autoOpen').dialog('open');
  });

  // buttons
  $('.btn-dialog-buttons').button();
  $('.dialog-buttons').dialog({
    autoOpen: false,
    buttons: [
      {
        text: "OK!",
        icons: {
          primary: "ui-icon-heart"
        },
        click: function() {
          $( this ).dialog( "close" );
        }
      },
      {
        text: "Close!",
        click: function() {
          $( this ).dialog( "close" );
        }
      },
    ]
  });
  $('.btn-dialog-buttons').click(function(){
    $('.dialog-buttons').dialog('open');
  });

  // closeText
  $('.btn-dialog-closeText').button();
  $('.dialog-closeText').dialog({
    autoOpen: false,
    closeText: '閉じる'
  });
  $('.btn-dialog-closeText').click(function(){
    $('.dialog-closeText').dialog('open');
  });

  // height
  $('.btn-dialog-height').button();
  $('.dialog-height').dialog({
    autoOpen: false,
    height: 150
  });
  $('.btn-dialog-height').click(function(){
    $('.dialog-height').dialog('open');
  });
  // width
  $('.btn-dialog-width').button();
  $('.dialog-width').dialog({
    autoOpen: false,
    width: 100
  });
  $('.btn-dialog-width').click(function(){
    $('.dialog-width').dialog('open');
  });

  // hide
  // explode
  $('.btn-dialog-hide-explode').button();
  $('.dialog-hide-explode').dialog({
    autoOpen: false,
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
  $('.btn-dialog-hide-explode').click(function(){
    $('.dialog-hide-explode').dialog('open');
  });
  // fadeOut
  $('.btn-dialog-hide-fadeOut').click(function(){
    $('.dialog-hide-fadeOut').dialog('open');
  });
  $('.btn-dialog-hide-fadeOut').button();
  $('.dialog-hide-fadeOut').dialog({
    autoOpen: false,
    hide: {
      effect: "fadeOut",
      duration: 1000
    }
  });
  // fold
  $('.btn-dialog-hide-fold').click(function(){
    $('.dialog-hide-fold').dialog('open');
  });
  $('.btn-dialog-hide-fold').button();
  $('.dialog-hide-fold').dialog({
    autoOpen: false,
    hide: {
      effect: "fold",
      duration: 1000
    }
  });
  // slideUp
  $('.btn-dialog-hide-slideUp').click(function(){
    $('.dialog-hide-slideUp').dialog('open');
  });
  $('.btn-dialog-hide-slideUp').button();
  $('.dialog-hide-slideUp').dialog({
    autoOpen: false,
    hide: {
      effect: "slideUp",
      duration: 1000
    }
  });

  // show
  // blind
  $('.btn-dialog-show-blind').button();
  $('.dialog-show-blind').dialog({
    autoOpen: false,
    show: {
      effect: 'blind',
      duration: 1000
    }
  });
  $('.btn-dialog-show-blind').click(function(){
    $('.dialog-show-blind').dialog('open');
  });
  // fadeIn
  $('.btn-dialog-show-fadeIn').button();
  $('.dialog-show-fadeIn').dialog({
    autoOpen: false,
    show: {
      effect: 'fadeIn',
      duration: 1000
    }
  });
  $('.btn-dialog-show-fadeIn').click(function(){
    $('.dialog-show-fadeIn').dialog('open');
  });
  // fold
  $('.btn-dialog-show-fold').button();
  $('.dialog-show-fold').dialog({
    autoOpen: false,
    show: {
      effect: 'fold',
      duration: 1000
    }
  });
  $('.btn-dialog-show-fold').click(function(){
    $('.dialog-show-fold').dialog('open');
  });
  // slideDown
  $('.btn-dialog-show-slideDown').button();
  $('.dialog-show-slideDown').dialog({
    autoOpen: false,
    show: {
      effect: 'slideDown',
      duration: 1000
    }
  });
  $('.btn-dialog-show-slideDown').click(function(){
    $('.dialog-show-slideDown').dialog('open');
  });

  // modal
  $('.btn-dialog-modal').button();
  $('.dialog-modal').dialog({
    autoOpen: false,
    modal: true
  });
  $('.btn-dialog-modal').click(function(){
    $('.dialog-modal').dialog('open');
  });

  // position
  $('.btn-dialog-position').button();
  $('.dialog-position').dialog({
    autoOpen: false,
    position: {
      of: '.btn-dialog-position',
      at: 'center bottom',
      my: 'left top'
    }
  });
  $('.btn-dialog-position').click(function(){
    $('.dialog-position').dialog('open');
  });

  // resizable
  $('.btn-dialog-resizable').button();
  $('.dialog-resizable').dialog({
    autoOpen: false,
    resizable: false
  });
  $('.btn-dialog-resizable').click(function(){
    $('.dialog-resizable').dialog('open');
  });

  // title
  $('.btn-dialog-title').button();
  $('.dialog-title').dialog({
    autoOpen: false,
    title: 'Dialog Title'
  });
  $('.btn-dialog-title').click(function(){
    $('.dialog-title').dialog('open');
  });

  //events
  // beforeClose
  $('.btn-dialog-beforeClose').button();
  $('.dialog-beforeClose').dialog({
    autoOpen: false,
    beforeClose: function( event, ui ) {
      $('.div-dialog-beforeClose').text('閉じる直前にイベント!');
    }
  });
  $('.btn-dialog-beforeClose').click(function(){
    $('.dialog-beforeClose').dialog('open');
  });

  // close
  $('.btn-dialog-close').button();
  $('.dialog-close').dialog({
    autoOpen: false,
    close: function( event, ui ) {
      $('.div-dialog-close').text('閉じた後にイベント!');
    }
  });
  $('.btn-dialog-close').click(function(){
    $('.dialog-close').dialog('open');
  });

  // drag
  $('.btn-dialog-drag').button();
  $('.dialog-drag').dialog({
    autoOpen: false,
    drag: function( event, ui ) {
      $('.div-dialog-drag').text('top: ' + ui.position.top + ' left: ' + ui.position.left);
    }
  });
  $('.btn-dialog-drag').click(function(){
    $('.dialog-drag').dialog('open');
  });

  // open
  $('.btn-dialog-open').button();
  $('.dialog-open').dialog({
    autoOpen: false,
    open: function( event, ui ) {
      $('.div-dialog-open').text('開いた後にイベント!');
    }
  });
  $('.btn-dialog-open').click(function(){
    $('.dialog-open').dialog('open');
  });

  // resize
  $('.btn-dialog-resize').button();
  $('.dialog-resize').dialog({
    autoOpen: false,
    resize: function( event, ui ) {
      $('.div-dialog-resize').text('width: ' + Math.floor(ui.size.width) + ' height: ' + Math.floor(ui.size.height));
    }
  });
  $('.btn-dialog-resize').click(function(){
    $('.dialog-resize').dialog('open');
  });

});
