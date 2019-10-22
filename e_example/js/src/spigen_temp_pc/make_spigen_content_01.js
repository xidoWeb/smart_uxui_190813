// make_spigen_content_01.js


(function($){
  
  // console.log('load');
  const conArea = $('.content_area');
  const conDt = conArea.find('dt');
  // const conDtBtn = conDt.children('button');
  const conDd = conArea.find('dd');

  conDt.children('button').on('click focus', function(e){
    e.preventDefault();
    let btn = $(this);
    let btnParent = btn.parent(); 
    let parNext = btnParent.next('dd');

    btn.addClass('action');
    btnParent.siblings('dt').children('button').removeClass('action');
 // step_1
    // parNext.addClass('action');
    // parNext.siblings('dd').removeClass('action');

   // step_2
    parNext.stop().fadeIn();
    parNext.siblings('dd').stop().fadeOut();
    // action 클래스이름으로 구분만 할 수 있도록 처리하고, 
    // css에서 동작하지 않도록 처리
  });


})(jQuery);