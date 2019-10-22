// make_spigen_main_pc
(function($){
  // 1. #gnb영역내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여넣기
  // clone() 메서드를 사용


  const gnb = $('#gnb');
  const sideGnbArea = $('.side_gnb_area');

  let gnbContents = gnb.contents().clone();
  // console.log(gnbContents);
  sideGnbArea.append(gnbContents);
// ---------------------------------------------
// 버튼클릭시 .side_gnb 나타나게 만들기/사라지게 만들기

  const openGnbBtn   = $('.gnb_btn > button');
  const closeGnbBtn  = $('.close_gnb_btn > button');
  const sideGnb      = $('.side_gnb');
  const gnbDl        = gnb.find('dl');
  const gnbDd        = gnb.find('dd');
  const gnbDt        = gnb.find('dt');
  const gnbTitleLink = gnbDt.children('a');
  const gnbListLink  = gnbDd.children('a');
  
  let time           = 600;

  openGnbBtn.on('click', function(e){
    e.preventDefault();
    sideGnb.stop().fadeIn(time/2, function(){
      closeGnbBtn.focus();
      $(this).on('keyup', function(e){
        // esc => 27
        console.log(e.key.toLowerCase() );

        // 영문글자를 강제로 대/소문자로 치환하는 함수
        // 대문자로 변환  toUpperCase()
        // 소문자로 변환  toLowerCase()

        if( e.keyCode  ==  27 ){ 
          sideGnb.fadeOut(time); 
          openGnbBtn.focus();
        }
      });
    });   
  });

  closeGnbBtn.on('click', function (e) {
    e.preventDefault();
    sideGnb.fadeOut(time);
    openGnbBtn.focus();
  });


// #gnb에 마우스 올렸을 경우 dd를 나오게 만들기

const addAction = function () {
  let li = $(this).parents('li');
  li.find(gnbTitleLink).addClass('action');
  li.siblings().find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideDown();
};

const removeAction = function () {
  $(this).parents('li').find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideUp();
};

/*
  gnbDl.on('mouseenter', addAction);
  gnbDl.on('mouseleave', removeAction);
*/
  gnbDl.on({ 'mouseenter': addAction, 'mouseleave': removeAction});

// #gnb에 dt에 focus 처리되면 dd가 나타나게 만들기
// a, button, form(input, textarea, select)
  gnbTitleLink.on('focus', addAction);
  gnbListLink.on('blur', addAction);
  gnbListLink.eq(-1).on('blur', removeAction);

// .side_gnb_area 내부의 마지막 a요소에서 blur처리되면, 
// .close_gnb_btn위치로 다시 focus 처리되어라
// 단, 전체 페이지에서 추가로 focus 처리되는 항목이 있어야 가능

const sideLink = sideGnbArea.find('a');
const sideLastLink = sideLink.eq(-1);

  sideLastLink.on('blur', function () {
    closeGnbBtn.focus();
  }); 


// .side_gnb_area 에서 키보드  esc 키를 누르면, 빠져 나가고, 이전의 위치로 돌아가라
// -> .side_gnb_area가 보이는 곳에서 수행

})(jQuery);