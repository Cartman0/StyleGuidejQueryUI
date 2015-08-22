$(function(){
  // addClass
  $('.effeccts-addClass-box').click( function() {
    $(this).addClass('effeccts-addClass__big-danger', 1000, "easeOutBounce" );
  });

  // removeClass
  $('.effeccts-removeClass-box').click(function() {
    $( this ).removeClass('effeccts-removeClass__big-info', 1000, 'easeInBack');
  });

  // switchClass
  $('.effects-switch-box').click(function() {
    $('.effects-switchClass-info').switchClass('effects-switchClass-info',  'effects-switchClass-danger', 1000, 'easeInBack');
    $('.effects-switchClass-danger').switchClass('effects-switchClass-danger', 'effects-switchClass-info', 1000, 'easeInBack');
  });

  // toggleClass
  $('.effects-toggleClass-box').click(function() {
    $(this).toggleClass('effects-toggleClass-danger', 1000, "easeOutSine" );

  });

});
