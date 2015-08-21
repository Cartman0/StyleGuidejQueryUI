$(function(){
  // Color Animation
  // backgroundColor
  $('.animate-backgroundColor').click(function() {
    $(this).animate({
      backgroundColor: 'rgb( 20, 20, 20 )'
    });
  });

  // borderBottomColor
  $('.animate-borderBottomColor').click(function() {
    $(this).animate({
      borderBottomColor: 'rgb( 150, 20, 20 )'
    });
  });

  // borderLeftColor
  $('.animate-borderLeftColor').click(function() {
    $(this).animate({
      borderLeftColor: 'rgb( 20, 150, 20 )'
    });
  });

  // borderRightColor
  $('.animate-borderRightColor').click(function() {
    $(this).animate({
      borderRightColor: 'rgb( 20, 20, 150 )'
    });
  });

  // borderTopColor
  $('.animate-borderTopColor').click(function() {
    $(this).animate({
      borderTopColor: 'rgb( 150, 150, 20 )'
    });
  });

  // color
  $('.animate-color').click( function() {
    $(this).animate({
      color: 'rgb( 20, 150, 150 )'
    });
  });

  // columnRuleColor
  // $('.animate-columnRuleColor').click( function() {
  //   $(this).animate({
  //     // WebkitColumnRuleColor: 'rgb( 30, 200, 30 )',
  //     // MozColumnRuleColor: 'rgb( 30, 200, 30 )',
  //     columnRuleColor: 'rgb( 30, 200, 30 )'
  //   });
  // });

  // outlineColor
  $('.animate-outlineColor').click( function() {
    $(this).animate({
      outlineColor: 'rgb( 30, 200, 30 )'
    });
  });

  // text-decoration
  // $('.animate-textDecorationColor').click( function() {
  //   console.log('text-decoration');
  //   $(this).animate({
  //     textDecorationColor: 'rgb( 30, 200, 30 )'
  //   });
  // });

  // textEmphasisColor
  // $('.textEmphasisColor').click( function() {
  //   console.log('textEmphasisColor');
  //   $(this).animate({
  //     textEmphasisColor: 'rgb( 30, 200, 30 )'
  //   });
  // });

});
