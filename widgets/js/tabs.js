$(function(){
  // options
  // nooptin
  $('.tabs-nooption').tabs();

  //active
  $('.tabs-active').tabs({
    active: 1
  });

  //collapsible
  $('.tabs-collapsible').tabs({
    collapsible: true
  });

  // disabled
  $('.tabs-disabled').tabs({
    disabled: [ 0, 2 ]
  });

  // event
  $('.tabs-event').tabs({
    event: 'mouseover'
  });

  // heightStyle
  // auto
  $('.tabs-heightStyle-auto').tabs({
    heightStyle: 'auto'
  });
  // fill
  $('.tabs-heightStyle-fill').tabs({
    heightStyle: 'fill'
  });
  // content
  $('.tabs-heightStyle-content').tabs({
    heightStyle: 'content'
  });

  // hide
  // explode
  $('.tabs-hide-explode').tabs({
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
  // fadeOut
  $('.tabs-hide-fadeOut').tabs({
    hide: {
      effect: 'fadeOut',
      duration: 1000
    }
  });
  // fold
  $('.tabs-hide-fold').tabs({
    hide: {
      effect: 'fold',
      duration: 1000
    }
  });
  // slideUp
  $('.tabs-hide-slideUp').tabs({
    hide: {
      effect: 'slideUp',
      duration: 1000
    }
  });

  // show
  // blind
  $('.tabs-show-blind').tabs({
    show: {
      effect: "blind",
      duration: 1000
    }
  });
  // fadeOut
  $('.tabs-show-fadeIn').tabs({
    show: {
      effect: 'fadeIn',
      duration: 1000
    }
  });
  // fold
  $('.tabs-show-fold').tabs({
    show: {
      effect: 'fold',
      duration: 1000
    }
  });
  // slideDown
  $('.tabs-show-slideDown').tabs({
    show: {
      effect: 'slideDown',
      duration: 1000
    }
  });

  // events
  // activate
  $('.tabs-activate').tabs({
    activate: function( event, ui ) {
      var txt = ui.newTab.text();
      $('.div-tabs-activate').text(txt);
    }
  });

  // beforeLoad
  $('.tabs-beforeLoad').tabs({
    beforeLoad: function(event, ui) {
      ui.jqXHR.fail(function() {
        ui.panel.html(
          "Couldn't load this tab. We'll try to fix this as soon as possible. ");
      });
    }
  });

  // load
  $('.tabs-load').tabs({
    load: function( event, ui ) {
      var txt = ui.panel.text();
      $('.div-tabs-load').text('panel:' + txt);
    }
  });

});
