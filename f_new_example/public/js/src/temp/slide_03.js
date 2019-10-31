// slide_03.js

(function($){
  const slideForm = $('.slide_03_form');
  const slideGuide = slideForm.children('ul');
  let slideLi = slideGuide.find('li');


// ---------------------------------------
//li에 이름을 부여 (.slide_03_con_0$)
for(let i=0; i < slideLi.length; i++){
  let classname = 'slide_03_con_' + (i+1);
  slideLi.eq(i).addClass(classname);
}
// ---------------------------------------
  let cloneLi = slideLi.eq(-1).clone(true); 
  // clone()사용시 true이면 기능까지 복제

  cloneLi.prependTo(slideGuide);
/**
  //1. prepend, prependTo 의 역할을 정확하게 구분
    * 감싸는영역.prepend(담는 내용);
    * 담는내용.prependTo(감싸는영역)

  //2. 마지막영역을 복제(clone)후에 앞에 담아라!
  //3. css작업시 nth-child()를 이용하여 이미지/기능을 담으면
      순서값에의해 원하는 결과물이 나오지 않으므로, 각각 class이름을 부여하여
      이미지/기능을 처리해라!
      (복제전에 이름을 부여!!!!!!!!!!!)
  //4. 또한, 그 부모인영역의 넓이는 기존갯수 + 1만큼의 크기값으로 재설정
  */
//----------------------------------------------------------------
const slide03Btn = $('.slide_03_btn');
const nextBtn    = slide03Btn.children('.next');
const prevBtn    = slide03Btn.children('.prev');
      slideLi    = slideGuide.find('li');  // li가 새로 갱신된 내용으로 처리(6개)

let myn          = 0;
const bannerLen  = slideLi.length; //
console.log(bannerLen); //
 
nextBtn.on('click', function(e){   
  e.preventDefault();
  myn++;
  if(myn >= bannerLen-1){ 
    slideGuide.css({'left':'100%'});
    myn = 0; }
  let per = -100*myn + '%';
  slideGuide.stop().animate({'left':per},1000);
});

prevBtn.on('click', function(e){
  e.preventDefault();
  myn--;
  let per = -100*myn + '%';
  slideGuide.stop().animate({'left':per},1000,function(){
    if(myn <= -1){ myn = bannerLen-2; }  //-600%
    per = -100*myn + '%';
    slideGuide.css({'left':per});
  }); 
});

})(jQuery);