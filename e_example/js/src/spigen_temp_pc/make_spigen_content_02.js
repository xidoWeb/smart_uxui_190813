// make_spigen_content_02.js
(function($){
  const conBox2 = $('#conBox2');
  const conBoxLink = conBox2.find('ul>li>a');
  // console.log( conBox2.offset().top );

  // .action
  conBoxLink.on('mouseenter focus', function(){
              $(this).addClass('action');
            })
            .on('mouseleave blur', function(){
              $(this).removeClass('action');
            });
  // ==============================================
/**
 * 스크롤바가 일정량 움직였을 경우에 
 * .top_move_btn 생성되게 만들기 
 * 사용된 이벤트는 scroll
 * scrollTop()  : 스크롤바의 움직인 위치값을 파악
 * offset().top   , offset().left   : 찾아오시면되어요~
 * mousewheel , DOMMouseScroll  : 어케하면 크로브라우징으로?
 * BOM , DOM ?? 
 * 상단 네비게이션 js기능으로 처리!!! ---> 과제
 * */
   let conBoxOffset = conBox2.offset().top;
  const topBtn = $('.top_move_btn');
  const win = $(window);
  win.on('scroll', () => {
    let scrollResult = $(this).scrollTop();
    if(scrollResult > conBoxOffset){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }
  });

  topBtn.on('click', (e) => {
    e.preventDefault();
    $('html, body')
     .stop()
     .animate({'scrollTop':0},500,'easeOutElastic', ()=>{
      $('h1>a').focus();
    });   
  });

 


})(jQuery);



/** 자주사용하는 이벤트1
 * mouseenter, mouseleave
 * click, focus, blur
 * keyup
 * ==========================
 * 자주사용하는 메소드
 * 선택자(자식, 부모, 형제)
 * show/hide  , addClass/removeClass
 * attr, removeAttr
 * ==========================
 * 불러오거나 삽입하는기능
 * text, append, prepend
 * load
 * ==========================
 * 자주사용하는 문법
 * 연산자
 * if, switch
 * for
 * function(){}
 * var, const, let
 * parseInt()
 * ==========================
 * eq(), index()
 */




/*  var json=(function(){
   var json = null;
   $.getJSON({
      'async': false,
      'url': "/data/test.json",
      'success': function (data) {
          json = data;
      }
  });
  return json;
 })();
 console.log(json); */