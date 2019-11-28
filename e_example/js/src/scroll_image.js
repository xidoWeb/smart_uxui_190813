(function($){
  const win = $(window);
  const wrap = $('#wrap');
  
  const viewBox = $('#viewBox');
  viewBox.css({position:'fixed', top:0, backgroundColor:'#fff'});
  viewBox.find('.title').css({position:'relative', top:0});
  
  // 이미지 담기
  const viewFix = viewBox.find('.fix_img');
  let url = '../img/apple/';
  
  
  
  
  //-- 스크롤기능
  win.on('scroll',function(){
    let thisS = $(this).scrollTop();
    
    // 글씨 투명해지게 만들기
    let op = 1 - ( thisS *  0.001);
    if(op < 0){op = 0}    
    viewBox.find('.title').css({top:(-thisS / 4)+'px', opacity:op});    
    // -----------------------------------------------------------
    
    
  });
  
})(jQuery);