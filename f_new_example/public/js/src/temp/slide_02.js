// slide_02.js
(function($){
  const viewBox2 = $('#viewBox_02');
  const indicator = viewBox2.find('.indicator');
  const indiLi = indicator.find('li');
  const indiLiLink = indiLi.children('a');
  const viewBtn = viewBox2.find('.view_btn');
  const pause  = viewBtn.find('.pause');
  const play  = viewBtn.find('.play');

  const slideForm = viewBox2.find('.slide_02_form');
  const slideGuide = slideForm.children('.guide');
  const slideEach = slideGuide.children('.banner_area');

  let timed = 500;
  let myn = 0, maxn = slideEach.length;
  let mybool = true;
// ------------------------------------------------------------
// 일정시간마다 광고배너 움직이게하기
let go;
const GoSlide = function(){
  go = setInterval(function(){
    myn++;
    if(myn >= maxn){ myn = 0; }
    MoveSlide(myn);
  }, timed * 4);
}; // GoSlide();
const StopSlide = function(){ clearInterval(go); };
const PlayBanner = function(bool){
  if(bool){ GoSlide(); }else{ StopSlide(); }
};// PlayBanner()

// ----------------------------------------------------------
// 공통기능 수행 

// 버튼부 수행
const showBtn = function(bool){
 // play, stop 버튼 동작유무 판단
 if(bool){  
    play.hide();  
    pause.show(); 
    console.log('play')
  }else{  
    pause.hide();  
    play.show();   
    console.log('stop')
  }
  PlayBanner(bool);
};// showBtn(true);
showBtn(true);

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
// -----------------------------------------------------------
viewBox2.on('mouseenter',function(){ 
  mybool = false;
  showBtn(mybool); 
});
viewBox2.on('mouseleave',function(){ 
  showBtn(mybool); 
});
pause.on('click', function(){ 
  mybool = false;
  showBtn(mybool); 
});
play.on('click', function(){  
  mybool = true;
  showBtn(mybool);
});

// -----------------------------------------------------------
// 클릭시 배너 움직이게 만들기
indiLiLink.on('click focus', function(e){
  e.preventDefault();
  e.stopPropagation();
  myn = $(this).parent('li').index();
  // MoveSlide(myn);
  PlayBanner(false);
});
// -----------------------------------------------------------

})(jQuery);
