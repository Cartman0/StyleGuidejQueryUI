// selectable.js
// $(window).load(function(){
$(function(){
  // nooption
  $('.selectable-nooption').selectable();

  // delay
  $('.selectable-delay').selectable({
    delay: 150
  });

  // distance
  $('.selectable-distance').selectable({
    distance: 100
  });

  // tolerance
  $('.selectable-tolerance-touch').selectable({
    tolerance: 'touch'
  });
  $('.selectable-tolerance-fit').selectable({
    tolerance: "fit"
  });

  // events
  // selected
  $('.selectable-selected').selectable({
    selected: function(event, ui){
      $('.ui-selected', this ).each(function() {
        var index = $('.selectable-selected li').index(this);
        $('.div-selectable-selected').text(index);
      });
    }
  });

  // selecting
  $('.selectable-selecting').selectable({
    selecting: function(event, ui){
      $('.ui-selecting', this).each(function() {
        var index = $('.selectable-selecting li').index(this);
        $('.div-selectable-selecting').text(index);
      });
    }
  });

  // stop
  $('.selectable-stop').selectable({
    stop: function(event, ui){
      $('.ui-selected', this).each(function() {
        var index = $('.selectable-stop li').index(this);
        $('.div-selectable-stop').text(index);
      });
    }
  });

  // unselected
  var selected_idx_array = new Array();
  $('.selectable-unselected').selectable({
    selected: function(event, ui){
      $('.ui-selected', this).each(function() {
        var idx = $('.selectable-unselected li').index(this);
        if(selected_idx_array.indexOf(idx)==-1){
          selected_idx_array.push(idx);
        }
      });
      $('.div-selectable-unselected').text(selected_idx_array);
      // console.log(selected_idx_array);
    },
    unselected: function(event, ui){
      console.log($('.selectable-unselected li').not('.ui-selected'));
      $($('.selectable-unselected li').not('.ui-selected'), this).each(function() {
        var idx = $('.selectable-unselected li').index(this);
        selected_idx_array.splice(selected_idx_array.indexOf(idx), 1);
      });
    }
  });

});
