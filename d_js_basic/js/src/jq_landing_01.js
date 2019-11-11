// jq_landing_01.js
(function($){
 
  const win = $(window);
  const headBox = $('#headBox');
  const viewBox = $('#viewBox');
  const con_01  = $('#conBox_01');
  const con_02  = $('#conBox_02');
  const con_03  = $('#conBox_03');
  
  let winH     = win.outerHeight(); //브라우저의 높이값
  let headBoxH = headBox.outerHeight();
  let con_01_offset = con_01.offset().top;
  
  // con_01의 위치에서 브라우저의 2/3 높이만큼 전에서 구동처리
  let myCon01_offset = con_01_offset - (winH/3*2);
  
  win.on('scroll', function(){
   let winScroll = win.scrollTop();
   // headBox 기능
   if(winScroll > headBoxH){ headBox.addClass('action'); 
   }else{ headBox.removeClass('action'); }
   
   // viewBox 나타나기 만들기
   if(winScroll > headBoxH/2){
     viewBox.find('h2').addClass('action');              
     viewBox.find('p').addClass('action');
   }else{
    viewBox.find('h2').removeClass('action');
    viewBox.find('p').removeClass('action');
   }
   // conBox_01내용
   let conImg = con_01.find('.narr').children('.img_box');
   let conNar = con_01.find('.narr').children('.nar_box');
   if(winScroll > myCon01_offset){
      conImg.addClass('action');
      conNar.addClass('action');
    }else{
      conImg.removeClass('action');
      conNar.removeClass('action');
   }
  });
  
  
})(jQuery);