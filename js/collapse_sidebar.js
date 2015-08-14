$(function() {
  console.log('collapse_sidebar.js');
  $('body').scrollspy({offset: 100});

  $('div[aria-hidden=false] .sidebar').affix({
    offset: {
      top: 300
    }
  });

  $('div[aria-hidden=false] .sidebar > li').children('.collapse').collapse('show');


  $('div[aria-hidden=false] .sidebar > li').click(function(e){
    $(this).children('.collapse').collapse('toggle');
  });

  $('div[aria-hidden=false] .sidebar > li li').click(function(e){
    e.stopPropagation();
  });

  // サイドバー固定
  var tab = $('div[aria-hidden=false] .sidebar');
  var offset = tab.offset();
  $(window).scroll(function() {
    if ($(window).scrollTop() > offset.top) {
      tab.css('top', '10%');
    } else {
      tab.css('top', '');
    }
  });

  // サイドバーのcollapseを自動で開く
  $(window).scroll(function() {
    var sidebar_li = $('div[aria-hidden=false] .sidebar > li');
    if (sidebar_li.hasClass('active')) {
      var a_idx = $('div[aria-hidden=false] .sidebar > li.active').index();
      for (var i = 0; i < sidebar_li.length; i++) {
        var collapse = $(sidebar_li[i]).children('.collapse');
        if (collapse){
          if (i === a_idx) {
            collapse.collapse('show');
          } else {
            collapse.collapse('hide');
          }
        }
      }
    } else {
      sidebar_li.each(function(i, el) {
        $(sidebar_li[i]).children('.collapse').collapse('hide');
      });
    }
  });
});
