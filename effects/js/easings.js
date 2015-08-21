$(function(){
  // easings
  // linear
  $('.easings-linear').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'linear')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'linear');
    });
  });

  // swing
  $('.easings-swing').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'swing')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'swing');
    });
  });

  // easeInQuad
  $('.easings-easeInQuad').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInQuad')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInQuad');
    });
  });

  // easeOutQuad
  $('.easings-easeOutQuad').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeOutQuad')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeOutQuad');
    });
  });

  // easeInOutQuad
  $('.easings-easeInOutQuad').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInOutQuad')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInOutQuad');
    });
  });

  // easeInCubic
  $('.easings-easeInCubic').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInCubic')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInCubic');
    });
  });

  // easeOutCubic
  $('.easings-easeOutCubic').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeOutCubic')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeOutCubic');
    });
  });

  // easeInOutCubic
  $('.easings-easeInOutCubic').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInOutCubic')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInOutCubic');
    });
  });

  // easeInQuart
  $('.easings-easeInQuart').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInQuart')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInQuart');
    });
  });

  // easeOutQuart
  $('.easings-easeOutQuart').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeOutQuart')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeOutQuart');
    });
  });

  // easeInOutQuart
  $('.easings-easeInOutQuart').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInOutQuart')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInOutQuart');
    });
  });

  // easeInQuint
  $('.easings-easeInQuint').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInQuint')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInQuint');
    });
  });

  // easeOutQuint
  $('.easings-easeOutQuint').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeOutQuint')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeOutQuint');
    });
  });

  // easeInOutQuint
  $('.easings-easeInOutQuint').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInOutQuint')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInOutQuint');
    });
  });

  // easeInExpo
  $('.easings-easeInExpo').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInExpo')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInExpo');
    });
  });

  // easeOutExpo
  $('.easings-easeOutExpo').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeOutExpo')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeOutExpo');
    });
  });

  // easeInOutExpo
  $('.easings-easeInOutExpo').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInOutExpo')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInOutExpo');
    });
  });

  // easeInSine
  $('.easings-easeInSine').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInSine')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInSine');
    });
  });

  // easeOutSine
  $('.easings-easeOutSine').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeOutSine')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeOutSine');
    });
  });

  // easeInOutSine
  $('.easings-easeInOutSine').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInOutSine')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInOutSine');
    });
  });

  // easeInCirc
  $('.easings-easeInCirc').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInCirc')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInCirc');
    });
  });

  // easeOutCirc
  $('.easings-easeOutCirc').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeOutCirc')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeOutCirc');
    });
  });

  // easeInOutCirc
  $('.easings-easeInOutCirc').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInOutCirc')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInOutCirc');
    });
  });

  // easeInElastic
  $('.easings-easeInElastic').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInElastic')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInElastic');
    });
  });

  // easeOutElastic
  $('.easings-easeOutElastic').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeOutElastic')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeOutElastic');
    });
  });

  // easeInOutElastic
  $('.easings-easeInOutElastic').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInOutElastic')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInOutElastic');
    });
  });

  // easeInBack
  $('.easings-easeInBack').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInBack')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInBack');
    });
  });

  // easeOutBack
  $('.easings-easeOutBack').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeOutBack')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeOutBack');
    });
  });

  // easeInOutBack
  $('.easings-easeInOutBack').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInOutBack')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInOutBack');
    });
  });

  // easeInBounce
  $('.easings-easeInBounce').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInBounce')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInBounce');
    });
  });

  // easeOutBounce
  $('.easings-easeOutBounce').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeOutBounce')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeOutBounce');
    });
  });

  // easeInOutBounce
  $('.easings-easeInOutBounce').click(function() {
    $.when(
      $(this).animate({
        left: $(this).parent().width() - $(this).width() + 10
      }, 1000, 'easeInOutBounce')
    )
    .done(function(){
      $(this).animate({
        left: 5
      }, 1000, 'easeInOutBounce');
    });
  });

});
