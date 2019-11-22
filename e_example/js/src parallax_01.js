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
    let scroll = win.scrollTop()/4 *3;
    // console.log(scroll);
    $(par[0]).css({backgroundPositionY: -scroll/8 });
    $(par[1]).css({backgroundPositionY: -scroll/7 });
    $(par[2]).css({backgroundPositionY: -scroll/6 });
    $(par[3]).css({backgroundPositionY: -scroll/5 });
    $(par[4]).css({backgroundPositionY: -scroll/4 });
    $(par[5]).css({backgroundPositionY: -scroll/3 });
    $(par[6]).css({backgroundPositionY: -scroll/2 });
    $(par[7]).css({backgroundPositionY: -scroll });
    $(par[8]).css({backgroundPositionY: -scroll });
  }); 
})(jQuery);