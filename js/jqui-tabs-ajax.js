$(window).load(function(){
  console.log('jqui-tabs-ajax.js');

  // click
  var jqui_tabs_ajax_a_array = $(".jqui-tabs-ajax > ul > li > a");
  var filename = $(jqui_tabs_ajax_a_array[0]).attr('href').replace(/\.html/g,'.js');


  $(".jqui-tabs-ajax > ul > li > a").click(function(){
    filename = $(this).attr('href');
    filename = filename.replace(/\.html/g,'.js');
    console.log(filename);
  });

  // ハッシュでAjaxページを切り替え
  var hash = window.location.hash;
  var jqui_tabs_active = 0;
  if(hash){
    if(hash === '#?droppable'){
      jqui_tabs_active = 1;

    }
    filename = hash.replace(/#\?/g, '') +'.js';
    console.log(filename);
  }

  $(".jqui-tabs-ajax").tabs({
    active: jqui_tabs_active,
    beforeLoad: function(event, ui) {
      ui.jqXHR.fail(function() {
        ui.panel.html(
          "Couldn't load this tab. We'll try to fix this as soon as possible.");
      });
      ui.jqXHR.done(function() {
        ui.panel.html(
          "Now Loading...");
      });
    },
    load: function(event, ui){
      $.when(
        $.getScript('../js/collapse_sidebar.js'),
        $.getScript('js/' + filename)
      ).done(function(){
        return true;
      });
    }
  });
});
