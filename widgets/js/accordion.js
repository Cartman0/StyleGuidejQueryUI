$(function(){
  // options
  // nooption
  $('.accordion-nooption').accordion();

  // active
  $('.accordion-active').accordion({
    active: 1
  });

  // animate
  $('.accordion-animate').accordion({
    animate: 100
  });

  // collapsible
  $('.accordion-collapsible').accordion({
    collapsible: true
  });

  // event
  $('.accordion-event').accordion({
    event: "mouseover"
  });

  // heightStyle
  $('.accordion-heightStyle-auto').accordion({
    heightStyle: 'auto'
  });
  $('.accordion-heightStyle-fill').accordion({
    heightStyle: 'fill'
  });
  $('.accordion-heightStyle-content').accordion({
    heightStyle: 'content'
  });

  // icon
  $('.accordion-icons').accordion({
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
  });

  // events
  // activate
  $('.accordion-activate').accordion({
    activate: function(event, ui){
      var old_header = ui.oldHeader.text();
      var old_panel = ui.oldPanel.text();

      ui.newHeader.text('activate Header');
      ui.newPanel.text('activate Panel');

      ui.oldHeader.text(old_header);
      ui.oldPanel.text(old_panel);
    }
  });
});
