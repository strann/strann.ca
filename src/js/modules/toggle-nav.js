(function(strann){
  var navEl = document.querySelector('.nav--primary');
  var wrapEl = document.querySelector('.wrap_inner');
  var activeClass = 'js-nav-primary--is-active';

  strann.toggleNav = function() {
    navEl.classList.toggle(activeClass);
    wrapEl.classList.toggle(activeClass);
  };
})(window.strann = window.strann || {});
