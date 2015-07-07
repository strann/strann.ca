(function(strann){
  strann.getMonthName = function(monthVal) {
    var months = [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec'
    ];

    return months[monthVal];
  };
})(window.strann = window.strann || {});
