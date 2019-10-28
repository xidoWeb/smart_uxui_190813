// slide_01.js
(function($){
  // .view_indicator 내부의 li(a)를 선택하면,
  // #viewBox 내부의 .guide 박스가 이동하게 만들어라.

  // index() 순서 가져오는 것, eq() 순서를 주는것
  // margin-left: -100%, -200%  || position:relative; left:-100%, -200% ...

  const viewBox   = $('#viewBox');
  const indicator = viewBox.find('.view_indicator');
  const indiLi    = indicator.find('li');
  const indiLink  = indiLi.children('a');
  const slideForm = viewBox.find('.slide_form');
  const guideBox  = viewBox.find('.guide');

  // slideForm.css({'overflow':'hidden'});
  // indicator.css({'zIndex': 500});  
  guideBox.css({'position':'relative','top':0,'left':0});

  indiLink.on('focus', function(evt){
    evt.preventDefault();
    // let parLi = $(this).parent('li');
    let i = $(this).parent('li').index();
    console.log(i);

    indiLink.removeClass('action');
    $(this).addClass('action');
    guideBox.stop(true, false).animate({'marginLeft':-100 * i + '%'});
  });


})(jQuery);