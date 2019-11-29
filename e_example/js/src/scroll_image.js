(function($){
  const win = $(window); 
  const viewBox = $('#viewBox');
  
  viewBox.find('.fix_img').wrap('<div class="outer_wrap"></div>');
  $('.outer_wrap').css({height:'2000px'});
  
  viewBox.find('.fix_img').css({position:'sticky', top:'50px'});
  
  // 이미지 담기
  const viewFix = viewBox.find('.fix_img');
  let url = '../img/apple/large_';
  let j;
  for(let i=0; i<122; i++){
    if(i < 10){ j='000'+i; }else if(i < 100){
      j='00'+i; }else if(i < 1000){ j='0'+i; }      
    j += '.jpg';    
  viewFix.append(`<img src="${url+j}" alt="0001이미지">`);
  viewFix.children('img').eq(i).css({zIndex:122-i});
  }// for
  viewFix.css({zIndex:50});
  viewFix.children('img').eq(0).show();
  
// =======
  let imgH = viewBox.find('.title').outerHeight() +
             viewFix.children('img').eq(0).outerHeight();
  viewFix.next('p').css({marginTop: imgH + 'px'});


  //-- 스크롤기능
  win.on('mousewheel',function(){
    let thisS = $(this).scrollTop();
    
    // 글씨 투명해지게 만들기
    let op = 1 - ( thisS *  0.001);
    if(op < 0){op = 0}    
    
    viewBox.find('.title').css({top:(-thisS / 7)+'px', opacity:op});    
    
    // -----------------------------------------------------------
    // 이미지 교체하기
    let imgI = parseInt(thisS / 2000 * 121);
    if(imgI >= 121){ imgI = 121; }
    // console.log(imgI);
    viewFix.children('img').eq(imgI).siblings().hide();
    viewFix.children('img').eq(imgI).show();   

  });
  
})(jQuery);