// indicator_test_01.js
(function($){
  const miniProduct = $('#miniProduct');
  const indicator   = miniProduct.children('.indicator');
  const indiLi      = indicator.children('li');
  const indiLink    = indiLi.children('a');
  let   indiLiLen   = indiLi.length;
  
  const adverBanner = miniProduct.find('.product').children('ul');
  const adverNth    = adverBanner.children('li');
  
  adverNth.find('a').attr({'tabIndex':-1});
  indiLi.eq(0).addClass('active');
  // -----------------------------------------------
  let i = 0;
  indiLink.on('focus click', function(e){
    e.preventDefault();
    i = $(this).parent().index();
    adverBanner.animate({marginLeft: (-100 * i) + '%' });
    
    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
    
    $(this).on('keyup', function(e){
      e.preventDefault();
      if(e.keyCode == 13){
        adverNth.eq(i).children('a').focus();
      }      
    });
  }); //   indiLink.on('focus click');
// ------------------------------------------------
   let go, timed=1000;
   const slideGo = function(){
     go = setInterval(function(){i++;
      if(i >= indiLiLen){ i=0; }
      adverBanner.animate({marginLeft: (-100 * i) + '%' });
      indiLi.eq(i).addClass('active');
      indiLi.eq(i).siblings('li').removeClass('active');
     }, timed); // 일정시간마다
   };     
   // setInterval을 취소
   const slideStop = function(){ clearInterval(go);   };      
  slideGo();  //일단 자동재생실행
   //----------------------------------
   miniProduct.on('mouseenter' ,function(){ slideStop(); });
   miniProduct.on('mouseleave', function(){ slideGo();   });
 

})(jQuery);