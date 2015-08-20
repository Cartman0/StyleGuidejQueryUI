$(function(){
  // options
  // nooptin
  $('#tooltip-nooption').tooltip();

  // content
  $('#tooltip-content').tooltip({
    content: 'set msg on content'
  });

  // disabled
  $('#tooltip-disabled').tooltip({
    disabled: true
  });

  // hide
  // explode
  $('#tooltip-hide-explode').tooltip({
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
  // fadeOut
  $('#tooltip-hide-fadeOut').tooltip({
    hide: {
      effect: 'fadeOut',
      duration: 1000
    }
  });
  // fold
  $('#tooltip-hide-fold').tooltip({
    hide: {
      effect: 'fold',
      duration: 1000
    }
  });
  // slideUp
  $('#tooltip-hide-slideUp').tooltip({
    hide: {
      effect: 'slideUp',
      duration: 1000
    }
  });

  // show
  // blind
  $('#tooltip-show-blind').tooltip({
    show: {
      effect: "blind",
      duration: 1000
    }
  });
  // fadeIn
  $('#tooltip-show-fadeIn').tooltip({
    show: {
      effect: 'fadeIn',
      duration: 1000
    }
  });
  // fold
  $('#tooltip-show-fold').tooltip({
    show: {
      effect: 'fold',
      duration: 1000
    }
  });
  // slideDown
  $('#tooltip-show-slideDown').tooltip({
    show: {
      effect: 'slideDown',
      duration: 1000
    }
  });


  // items
  $('.tooltip-items').tooltip({
    items: 'img[alt]',
    content: 'This is img[alt] attribute.'
  });

  // position
  $('#tooltip-position').tooltip({
    position: {
      at: 'right center',
      my: 'left+15 center',
    }
  });

  // tooltipClass
  $('#tooltip-tooltipClass').tooltip({
    tooltipClass: 'danger'
  });

  // track
  $('#tooltip-track').tooltip({
    track: true
  });

  // events
  // close
  $('#tooltip-close').tooltip({
    close: function( event, ui ) {
      $('.div-tooltip-close').text(ui.tooltip.text());
    }
  });

  // open
  $('#tooltip-open').tooltip({
    open: function( event, ui ) {
      $('.div-tooltip-open').text(ui.tooltip.text());
    },
    close: function( event, ui ) {
      $('.div-tooltip-open').text('msg:');
    }
  });

});
