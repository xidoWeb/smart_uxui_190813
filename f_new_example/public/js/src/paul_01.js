(function($){
  const body = $('body');
  const wrap = $('#wrap');
  wrap.append('<header id="headBox"></header>');
  wrap.append('<section id="viewBox"></section>');
  wrap.append('<article id="conBox"></article>');
  wrap.append('<footer id="footBox"></footer>');
  
  const file = ['headBox', 'viewBox', 'conBox', 'footBox'];
  let url = './temp/paul_';
  let jsUrl = '../js/src/temp/paul_';
  let scriptSam = function(file){
    return body.append(`<script src="${jsUrl + file }.js"></script>`);
  };
  
  for(let i=0; i<file.length; i++){
    $('#'+file[i]).load(url + file[i]+'.html', function(){
      scriptSam(file[i]);
    });
  }
})(jQuery);