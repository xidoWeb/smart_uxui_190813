// make_spigen_main_pc
(function($){
  // 1. #gnb영역내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여넣기
  // clone() 메서드를 사용


  const gnb = $('#gnb');
  const sideGnbArea = $('.side_gnb_area');

  let gnbContents = gnb.contents().clone();
  // console.log(gnbContents);
  sideGnbArea.append(gnbContents);


})(jQuery);