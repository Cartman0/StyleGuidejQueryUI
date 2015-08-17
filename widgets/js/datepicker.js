$(function(){
  // options
  // nooption
  $('.datepicker-nooption').datepicker();

  // alt
  // altField, altFormat
  $('.datepicker-alt').datepicker({
    altField: ".datepicker-alt-alternate",
    altFormat: "DD, d MM, yy" /* ex. Tuesday, 4 August, 2015 */
  });

  // appendText
  $('.datepicker-appendText').datepicker({
    appendText: '[mm/dd/yyyy]'
  });

  // autoSize
  $('.datepicker-autoSize').datepicker({
    autoSize: true
  });

  // beforeShow
  $(".datepicker-beforeShow").datepicker({
    // カレンダーがレンダリングされる直前に呼び出される
    beforeShow: function(input, inst) {
      // テキストフィールドに値が入っていればその日付を、入っていなければ今日の日付を取得
      var date = $(input).datepicker("getDate");
      $('.div-datepicker-beforeShow-getDate').text('getDate: ' + date);
    }
  });

  //  changeMonth
  $('.datepicker-changeMonth').datepicker({
    changeMonth: true
  });

  // changeYear
  $('.datepicker-changeYear').datepicker({
    changeYear: true,
    yearRange: '2010:2020'
  });

  // dateFormat
  $('.datepicker-dataFormat').datepicker({
    dateFormat: "yy-mm-dd"
  });

  // dayNames
  $('.datepicker-dayNames').datepicker({
    dateFormat: "yy-mm-dd-DD",
    dayNames: ['日', '月', '火', '水', '木', '金', '土']
  });

  // dayNamesMin
  $('.datepicker-dayNamesMin').datepicker({
    dayNamesMin: ['日', '月', '火', '水', '木', '金', '土']
  });

  // defaultDate
  $('.datepicker-defaultDate').datepicker({
    defaultDate: -7
  });

  // duration
  $('.datepicker-duration').datepicker({
    duration: "slow"
  });

  // firstday
  $('.datepicker-firstday').datepicker({
    firstDay: 1
  });

  // maxDate, minDate
  $('.datepicker-maxminDate').datepicker({
    maxDate: '+1m',
    minDate: '-2w'
  });

  // monthNames
  $('.datepicker-monthNames').datepicker({
    dateFormat: 'yy-MM-dd',
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  });

  // nextText, prevText
  $('.datepicker-nextprevText').datepicker({
    nextText: '次へ',
    prevText: '前へ'
  });

  // numberOfMonths
  $('.datepicker-numberOfMonths').datepicker({
    numberOfMonths: 3
  });

  // showAnim
  $('.datepicker-showAnim-show').datepicker({
    showAnim: 'show'
  });
  $('.datepicker-showAnim-slideDown').datepicker({
    showAnim: 'slideDown'
  });
  $('.datepicker-showAnim-fadeIn').datepicker({
    showAnim: 'fadeIn'
  });
  $('.datepicker-showAnim-fold').datepicker({
    showAnim: 'fold'
  });

  // showButtonPanel
  $('.datepicker-showButtonPanel').datepicker({
    showButtonPanel: true
  });

  // showCurrentAtPos
  $('.datepicker-showCurrentAtPos').datepicker({
    numberOfMonths: 3,
    showCurrentAtPos: 3
  });

  // showMonthAfterYear
  $('.datepicker-showMonthAfterYear').datepicker({
    showMonthAfterYear: true
  });

  // showOn
  $('.datepicker-showOn-button').datepicker({
    showOn: 'button'
  });
  $('.datepicker-showOn-both').datepicker({
    showOn: 'both'
  });

  // buttonText
  $('.datepicker-buttonText').datepicker({
    showOn: 'both',
    buttonText: 'click!'
  });

  // showOtherMonths
  $('.datepicker-showOtherMonths').datepicker({
    showOtherMonths: true
  });

  // selectOtherMonths
  $('.datepicker-selectOtherMonths').datepicker({
    showOtherMonths: true,
    selectOtherMonths: true
  });

  // showWeek
  $('.datepicker-showWeek').datepicker({
    showWeek: true
  });

  // stepMonths
  $('.datepicker-stepMonths').datepicker({
    stepMonths: 3
  });

  // weekHeader
  $('.datepicker-weekHeader').datepicker({
    showWeek: true,
    weekHeader: '週'
  });

  // yearSuffix
  $('.datepicker-yearSuffix').datepicker({
    yearSuffix: '年'
  });
});
