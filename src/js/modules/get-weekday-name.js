(function(strann){
  strann.getWeekdayName = function(weekdayVal) {
    var weekdays = [
      'sun',
      'mon',
      'tues',
      'wed',
      'thurs',
      'fri',
      'sat'
    ];

    return weekdays[weekdayVal];
  };
})(window.strann = window.strann || {});
