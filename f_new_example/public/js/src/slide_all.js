// slide_all.js

(function($){
  const body = $('body');
  const wrap = $('#wrap');
  wrap.append('<section id="viewBox"></section>');
  const viewBox = wrap.find('#viewBox');
  
  viewBox.load('./temp/slideAll_viewBox.html', function(){
    body.append('<script src="../js/src/temp/slideAll_viewBox.js">\
                </script>');
  });
  

})(jQuery);