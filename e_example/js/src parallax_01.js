(function($){
  let win = $(window);
  let par = [];
 
  const vb = $('#viewBox');
  for(let i=0; i<vb.children().length; i++){
    let p = '.par_0' + i;
    par.push(p);
  }
  
  let winH = win.outerHeight();
  
  win.on('scroll', function(){
    let scroll = win.scrollTop();
    // console.log(scroll);
    for(let j=0; j < par.length; j++){
      $(par[j]).css({top: -scroll / (par.length - j) });
    }
  }); 
  // ------------------------------------------------------
  
  
})(jQuery);