$(function(){
  // optionなし
  $('.box').draggable();
  // axis
  $('.axis-x').draggable({
    axis: 'x'
  });
  $('.axis-y').draggable({
    axis: 'y'
  });
  // cancel
  $('.box-cancel').draggable({
    cancel: '.cancel'
  });
  // cursol
  $('.cursor').draggable({
    cursor: 'crosshair'
  });
  // delay
  $('.delay').draggable({
    delay: 300
  });
  // grid
  $( '.grid' ).draggable({
    grid: [ 50, 20 ]
  });
  // handle
  $('.box-handle').draggable({
    handle: '.handle'
  });

  // helper
  $('.helper-clone').draggable({
    helper: 'clone'
  });

  // opacity
  $( '.opacity' ).draggable({
    opacity: 0.5
  });
  // revert
  $('.revert').draggable({
    revert: true
  });
  // revertDuration
  $('.revert-duration').draggable({
    revert: true,
    revertDuration: 1000
  });
  // scroll
  $('.scroll').draggable({
    scroll: false
  });
  // snap
  $('.snap').draggable({
    snap: true
  });
  // event
  // drag
  $('.drag').draggable({
    drag: function(event, ui){
      $('.div-drag').text('top:' + ui.position.top + ' left:' + ui.position.left);
    }
  });
});
