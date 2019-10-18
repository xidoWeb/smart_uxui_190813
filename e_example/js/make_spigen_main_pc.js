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
    sideGnb.fadeIn(time/2);
  });
  closeGnbBtn.on('click', function (e) {
    e.preventDefault();
    sideGnb.fadeOut(time);
  });


// #gnb에 마우스 올렸을 경우 dd를 나오게 만들기

const addAction = function () {
  let li = $(this).parents('li');
  li.find(gnbTitleLink).addClass('action');
  li.siblings().find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideDown();
}
const removeAction = function () {
  $(this).parents('li').find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideUp();
}
  gnbDl.on('mouseenter', addAction);
  gnbDl.on('mouseleave', removeAction);

// #gnb에 dt에 focus 처리되면 dd가 나타나게 만들기
// a, button, form(input, textarea, select)
  gnbTitleLink.on('focus', addAction);
  gnbListLink.on('blur', addAction);
  gnbListLink.eq(-1).on('blur', removeAction);



})(jQuery);