// slideAll_viewBox.js
(function($){
  const viewBox   = $('#viewBox');
  const slideForm = viewBox.find('.slide_form');
  const slideWrap = viewBox.find('.slide_wrap');
  let slideEach   = slideWrap.children('div');

  // 마지막 요소 복제 및 정리------------------------
  slideEach.eq(-1).clone(true).prependTo(slideWrap);
  
  slideEach       = slideWrap.children('div');
  let slideLen    = slideEach.length;
  console.log(slideLen);
  slideWrap.css({width:100 * slideLen + '%', 
                 marginLeft:'-100%'});
  slideEach.css({width:100 / slideLen + '%'});
  slideForm.css({overflow:'hidden'});
    
  // 버튼부 생성 ===================================
  // 좌/우 버튼
  const slideBtn = function(rel){    
    if(rel){ slideForm.before('\
          <div class="view_btn">\
            <button type="button" class="next">\
            <i class="fas fa-arrow-alt-circle-right"></i>\
            <span>다음내용 보기</span>\
            </button>\
            <button type="button" class="prev">\
            <i class="fas fa-arrow-alt-circle-left"></i>\
            <span>이전내용 보기</span>\
            </button>\
          </div>'); }
  };
  slideBtn(true);
  
// 인디케이터 영역 --------------------------------------------
slideForm.before('<ul class="indicator"></ul>');
const indi = viewBox.find('.indicator');
for(let i=0; i < slideLen-1; i++){
  indi.append('<li><a href="#"><span></span></a></li>');
  let indiLi = indi.children('li').eq(i);
  indiLi.find('span').text( slideEach.eq(i+1).text() );
  indiLi.find('span').css({display:'block',width:0,height:0,overflow:'hidden'});
}




  
  
})(jQuery);