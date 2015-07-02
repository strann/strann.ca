(function(strann){
  strann.storeDate = function() {
    var date = strann.getDate();

    // @todo Loop over localStorage and compare date info,
    //       update if needed.

    for (var prop in date) {
      if (date.hasOwnProperty(prop)) {
        localStorage.setItem(prop, date[prop]);
      }
    }
  };
})(window.strann = window.strann || {});
