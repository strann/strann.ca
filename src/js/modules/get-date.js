(function(strann){
  strann.getDate = function() {
    var currentDate = new Date();

    var date = {
      currentHour: currentDate.getHours(),
      currentMinutes: currentDate.getMinutes(),
      currentSeconds: currentDate.getSeconds(),
      currentWeekday: currentDate.getDay(),
      currentDay: currentDate.getDate(),
      currentMonth: currentDate.getMonth(),
      currentYear: currentDate.getFullYear(),
      fullDate: currentDate.toDateString()
    };

    return date;
  };
})(window.strann = window.strann || {});
