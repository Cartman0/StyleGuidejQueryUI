// $(window).load(function(){
$(function(){

  // optionなし
  $('.box').draggable();
  $('.target').droppable();

  //accept
  $('.accept').droppable({
    accept: '.box1',
    drop: function(event, ui){
      $('.div-accept').text('dropped box1.');
    }
  });

  // greedy
  $( ".greedy" ).droppable({
    greedy: true,
    drop: function(event, ui){
      $('.div-greedy').text('dropped box on greedy.');
    }
  });
  $('.greedy-nest-target').droppable({
    drop: function(event, ui){
      $('.div-greedy').text('dropped box on nest.');
    }
  });

  // hoverClass
  $('.hoverClass').droppable({
    hoverClass: 'hoverClass-hover'
  });

  // scope
  $('.scope-box').draggable({
    scope: 'scope-box'
  });
  $('.scope').droppable({
    scope: 'scope-box',
    drop: function(event, ui){
      $('.div-scope').text('dropped scope-box');
    }
  });

  // tolerance
  $('.tolerance-fit').droppable({
    tolerance: 'fit',
    drop: function(event, ui){
      $('.div-fit').text('dropped fit.');
    }
  });
  $('.tolerance-intersect').droppable({
    tolerance: 'intersect',
    drop: function(event, ui){
      $('.div-intersect').text('dropped intersect.');
    }
  });
  $('.tolerance-pointer').droppable({
    tolerance: 'pointer',
    drop: function(event, ui){
      $('.div-pointer').text('dropped pointer.');
    }
  });
  $('.tolerance-touch').droppable({
    tolerance: 'touch',
    drop: function(event, ui){
      $('.div-touch').text('dropped touch.');
    }
  });

  // events
  // drop
  $('.drop').droppable({
    drop: function(event, ui){
      $('.div-drop').text('top:' + ui.position.top + ' left:' + ui.position.left);
    }
  });
});
