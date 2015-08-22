$(function(){
  // eefect
  // hide
  $('.effects-hide').click(function() {
    $(this).hide( "drop", { direction: "down" }, "slow" );
  });

  // show
  $('.effects-show').click(function() {
    $.when(
      $(this).css('display', 'none')
    ).done(function(){
      $(this).show( "fold", 1000);
    });
  });

  // toggle
  $('.btn-toggle').button();
  $('.btn-toggle').click( function() {
     $('.effects-toggle').toggle( "fold", 1000 );
  });

});
