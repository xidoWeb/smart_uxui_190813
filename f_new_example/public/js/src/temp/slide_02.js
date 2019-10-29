// slide_02.js
(function($){
  const viewBox2 = $('#viewBox_02'),
        indicator = viewBox2.find('.indicator'),
        indiLi = indicator.find('li'),
        indiLiLink = indiLi.children('a'),
        viewBtn = viewBox2.find('.view_btn'),
        pause  = viewBtn.find('.pause'),
        play  = viewBtn.find('.play');

  const slideForm = viewBox2.find('.slide_02_form'),
        slideGuide = slideForm.children('.guide'),
        slideEach = slideGuide.children('.banner_area');

  let timed = 500,
      myn = 0, maxn = slideEach.length,
      mybool = true, linkFocus = true,  go;
// ---------------------------------------------------------------
// action class이름 첨부기능수행
const MoveSlide = function(n){
  indiLiLink.removeClass('action');
  indiLi.eq(n).children('a').addClass('action');
  slideGuide.animate({'marginLeft':(-100 * n)+'%'}, function(){
    slideEach.removeClass('action');  
    setTimeout(function(){
      slideEach.eq(n).addClass('action');
    }, timed);
  }); 
};// MoveSlide()   //=========================================
MoveSlide(0);
// ------------------------------------------------------------
// 일정시간마다 광고배너 움직이게하기

const GoSlide = function(){
  go = setInterval(function(){
    myn++;
    if(myn >= maxn){ myn = 0; }
    MoveSlide(myn);
  }, timed * 4);
}; // GoSlide();---------------------------------------

const StopSlide = function(){ clearInterval(go); };

const PlayBanner = function(bool){
  if(bool){ 
    GoSlide(); 
  }else{ 
    StopSlide(); 
  }
  mybool = bool;
};// PlayBanner()

// ----------------------------------------------------------
// 공통기능 수행 

// 버튼부 수행
const showBtn = function(bool){
 // play, stop 버튼 동작유무 판단
 if(bool){  
    play.hide();  
    pause.show(); 
    console.log('play');
  }else{  
    pause.hide();  
    play.show();   
    console.log('stop');
  }
};// showBtn(true);
showBtn(mybool);
PlayBanner(mybool);

// ----------------------------------------------------------
viewBox2.on('mouseenter',function(){ 
  PlayBanner(false);
});
viewBox2.on('mouseleave',function(){ 
  (linkFocus) ? PlayBanner(true) :PlayBanner(false);
  console.log(linkFocus);
});
pause.on('click', function(){
  showBtn(false); play.show().focus();
});
play.on('click', function(){  
  showBtn(true); pause.show().focus();
});

// -----------------------------------------------------------
// 클릭시 배너 움직이게 만들기
indiLiLink.on('click focus', function(e){
  e.preventDefault();
  e.stopPropagation();
  myn = $(this).parent('li').index();
  linkFocus = false;
  PlayBanner(false);
  MoveSlide(myn);
});

indiLiLink.off('focus', function(){
  linkFocus = false;
})
// -----------------------------------------------------------

})(jQuery);
