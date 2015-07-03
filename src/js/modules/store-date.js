(function(strann){
  strann.storeDate = function() {
    var date = strann.getDate();

    for (var prop in date) {
      if (date.hasOwnProperty(prop)) {
        if (localStorage.getItem(prop) === date[prop]) {
          continue;
        }

        localStorage.setItem(prop, date[prop]);
      }
    }
  };

  strann.storeDate();

  // Update the date every minute

  window.setInterval(strann.storeDate, 60000);
})(window.strann = window.strann || {});
