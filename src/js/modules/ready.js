(function(strann) {
  strann.ready = function(fn) {
    if (document.readyState != 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };
})(window.strann = window.strann || {});
