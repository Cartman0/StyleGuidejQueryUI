$(function(){
  // addClass
  $('.effeccts-addClass-box').click( function() {
    $(this).addClass('effeccts-addClass__big-danger', 1000, "easeOutBounce" );
  });

  // removeClass
  $('.effeccts-removeClass-box').click(function() {
    console.log(1);
    $( this ).removeClass('effeccts-removeClass__big-info', 1000, 'easeInBack');
  });

});
