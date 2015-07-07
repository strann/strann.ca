(function(strann){
  var body = document.querySelector('body');

  strann.setDateClasses = function() {
    if (localStorage.length > 0) {
      var hour = parseInt(localStorage.getItem('currentHour'));
      var day = parseInt(localStorage.getItem('currentDay'));
      var weekday = parseInt(localStorage.getItem('currentWeekday'));
      var month = parseInt(localStorage.getItem('currentMonth'));
      var year = parseInt(localStorage.getItem('currentYear'));

      body.classList.add(
        'weekday-' + strann.getWeekdayName(weekday),
        'day-' + day,
        'month-' + strann.getMonthName(month),
        'season-' + strann.getSeason(month),
        'year-' + year
      );
    }
  };
  strann.setDateClasses();
})(window.strann = window.strann || {});
