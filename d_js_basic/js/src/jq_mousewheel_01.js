(function($){
/*
  let myarr  = [];
  let myplus = [11,'aa', 900];
  myarr.push(10);       // 뒤에 추가
  myarr.pop();          // 마지막요소 제거
  myarr.unshift(10023); // 앞에 추가
  myarr.shift();        // 앞요소 제거
  let myarrPlus = myarr.concat(myplus); // 두개의 배열을 합치기
*/
const htmlEl = $('html, body');
const wrap = $('#wrap');
const scrollEl = wrap.find('.scroll');

htmlEl.animate({scrollTop:0});
let myScrollElTop = [];
let scrollLen = scrollEl.length;
let timed = 500;

for(let i = 0; i < scrollLen; i++){
  let scTop = scrollEl.eq(i).offset().top;
  myScrollElTop.push(scTop);
}
// console.log(myScrollElTop);
// ---------------------------------------------
let myStatus = true, n, useN=0;
// ================================================
const ScrollMagic = function(){
  htmlEl.animate({scrollTop:myScrollElTop[useN]},
                 timed,'easeOutSine',function(){
                myStatus = true;
  });
 };// ScrollMagic() 
// ================================================

$(window).on('mousewheel DOMMouseScroll', function(e){
  if(e.originalEvent.wheelDelta){
    n = e.originalEvent.wheelDelta * -1;
  }else{    n = e.originalEvent.detail * 40;  }
 
  if(myStatus){
    myStatus = false;
    if(n > 0){useN++;
      if(useN >= scrollLen){useN = scrollLen-1;}  ScrollMagic();
    }else{useN--;
      if(useN < 0){useN = 0;}  ScrollMagic(); }
  }
}); //마우스 휠

// --------------------------------------------------
const gnb = $('#gnb');
const gnbUl = gnb.find('ul');
const gnbLi = gnbUl.find('li');
const gnbLink = gnbLi.find('a');

gnbLink.on('click', function(e){
  e.preventDefault();
  // let thisLink = $(this).attr('href'); // 경로가 있어야 가능
  // let thisOffset = $(thisLink).offset().top;
  // htmlEl.animate({scrollTop:thisOffset}, timed, 'easeOutElastic');
  useN = $(this).parent('li').index();
  ScrollMagic();
});
// -------------------------------------------
// 터치 사용시
let startP,endP;
$(window).on('touchstart', function(e){
  startP = e.originalEvent.touches[0].pageY;  
});// touchstart---------------------------------------
$(window).on('touchmove', function(){ 
  htmlEl.animate({scrollTop:myScrollElTop[useN]},0);
});// touchmove

$(window).on('touchend', function(e){
  endP = e.originalEvent.changedTouches[0].pageY;
  if(myStatus){
    myStatus = false;
    if(startP > endP){
      useN++;
      console.log(useN);
      if(useN >= scrollLen){useN = scrollLen-1;}  
      ScrollMagic();
    }else{
      useN--;
      if(useN < 0){useN = 0;}  
      ScrollMagic(); 
    }
  }
});// touchend-----------------------------------------
// -------------------------------------------
})(jQuery);