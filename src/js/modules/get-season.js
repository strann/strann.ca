(function(strann){
  strann.getSeason = function(monthVal) {
    var season;

    // Super ghetto way to figure out the rough season
    // @todo look into incorporating this dude's script
    // http://stackoverflow.com/questions/5670678/javascript-coding-input-a-specific-date-output-the-season/5671172#5671172

    if (monthVal >= 11 || monthVal < 2) {
      season = 'winter';
    } else if (monthVal >= 8 && monthVal < 11) {
      season = 'autumn';
    } else if (monthVal >= 5 && monthVal < 8) {
      season = 'summer';
    } else if (monthVal >= 2 && monthVal < 5) {
      season = 'spring';
    }

    return season;
  };
})(window.strann = window.strann || {});
