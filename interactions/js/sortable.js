$(function(){
  // nooption
  $('.sortable-nooption').sortable();

  // axis
  $( ".sortable-axis-x" ).sortable({
    axis: 'x'
  });
  $( ".sortable-axis-y" ).sortable({
    axis: 'y'
  });

  // connectWith
  $('.sortable-connectA, .sortable-connectB').sortable({
    connectWith: '.connectedSortable'
  });

  // cursor
  $('.sortable-cursor').sortable({
    cursor: 'move'
  });

  // cursorAt
  $('.sortable-cursorAt').sortable({
    cursorAt: { left: 5 }
  });

  // delay
  $('.sortable-delay').sortable({
    delay: 300
  });

  // distance
  $('.sortable-distance').sortable({
    distance: 30
  });

  // forceHelperSize
  $('.sortable-forceHelperSize').sortable({
    helper: "clone",
    start: function(event, ui){
      ui.item.css("display", "block");
    },
    forceHelperSize: true
  });

  // forcePlaceholderSize
  $('.sortable-forcePlaceholderSize').sortable({
    forcePlaceholderSize: true,
    start: function(event, ui){
      ui.item.css("display", "block");
    }
  });

  // grid
  $('.sortable-grid').sortable({
    grid: [ 20, 10 ]
  });

  // handle
  $('.sortable-handle').sortable({
    handle: '.handle'
  });

  // helper clone
  $('.sortable-helper').sortable({
    helper: "clone",
    start: function(event, ui){
      ui.item.css("display", "block");
    }
  });

  // opacity
  $('.sortable-opacity').sortable({
    opacity: .5
  });

  // placeholder
  $('.sortable-placeholder').sortable({
    placeholder: "ui-state-highlight"
  });

  // revert
  $('.sortable-revert').sortable({
    revert: true
  });

  // scrollSenstivity
  $('.sortable-scrollSenstiviy').sortable({
    scrollSensitivity: 100
  });

  // scrollSpeed
  $('.sortable-scrollSpeed').sortable({
    scrollSpeed: 100
  });

  // tolerance
  $('.sortable-tolerance-intersect').sortable({
    tolerance: 'intersect'
  });
  $('.sortable-tolerance-pointer').sortable({
    tolerance: 'pointer'
  });

  // event
  // update
  $('.sortable-update-serialize').sortable({
    update: function(event, ui) {
      //  id名が item名_index 出ないと動かない。
      $('.div-sortable-update-serialize').text($(this).sortable('serialize'));
    }
  });
  $('.sortable-update-toArray').sortable({
    update: function(event, ui) {
      $('.div-sortable-update-toArray').text($(this).sortable('toArray'));
    }
  });
});
