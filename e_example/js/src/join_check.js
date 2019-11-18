// join_check.js
(function($){
  //form 기능에서 사용하는 jQuery 메소드
  // val(); -> value 값을 가져오는 기능
  // $('#box').hasClass('link') -> class이름의 유무 판단
  // is(':checked')  -> 속성의 기능의 상태를 파악
  // prop('checked', true)  -> 속성의 상황묘사해서 역할 부여
  
  //-----------------------------------------------------
  // 전체 동의를 클릭하면 전체가 체크되게 만들기
  const allCheck = $('#allCheck');
  const cbSel = $('.cb_sel');
  let ck;
  // ----------------------------------------------------------
  const allCheckT = function(ck){
    if(ck){
      cbSel.prop('checked', true);      cbSel.attr('checked', true);
      allCheck.prop('checked', true);   allCheck.attr('checked', true);
     }else{
    cbSel.prop('checked', false);     cbSel.attr('checked', false);
    allCheck.prop('checked', false);  allCheck.attr('checked', false);
     }
  }
  // -------------------------------------------
  allCheck.on('click', function(e){
    ck = allCheck.is(':checked');
    allCheckT();
  });
  // ----------------------------------------------------------
  cbSel.on('click', function(){
  // --------------------------------------
    let idCheck = $(this).attr('id');
    let idN = $('#' + idCheck);
    let idnIs = idN.is(':checked');
    ( idnIs ) ? idN.attr('checked',true).prop('checked',true):
    idN.attr('checked', false).prop('checked', false); 
  // --------------------------------------  
    for(let i=0; i<cbSel.length; i++){
      ck = cbSel.eq(i).is(':checked');      
      (ck) ? allCheck.prop('checked',true).attr('checked',true):
      allCheck.prop('checked',false).attr('checked',false); break;
    }
   }); // cbSel.on('click')   
})(jQuery);