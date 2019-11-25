// join.js
(function($){
  // id란 입력하지 않을때 상황
  const userName = $('#userName');
  userName.on('blur', function(){
    let thisVal = $(this).val();
    if(thisVal == ""){
      $(this).closest('li').addClass('error');
    }
  });
  // -----------------------------------------------
  // pw 비교해서 일치여부 
  const userPw   = $('#userPw');
  const userPwRe = $('#userPwre');
  let beforePwVal, afterPwVal;
  userPw.on('keyup', function(){ 
   beforePwVal = userPw.val();
   let thisVal = $(this).val();
   let thisLi = $(this).closest('li');
   if(thisVal == ""){
     thisLi.find('.narr').text('비밀번호를 입력하세요.');
     thisLi.addClass('error');
    }if(thisVal.length <= 5){
      thisLi.find('.narr').text('비밀번호는 6~15입니다.');
      thisLi.addClass('error');
   }else{
      thisLi.removeClass('error');
   }
  });  
  
  //비밀번호 확인
  userPwRe.on('keyup', function(){ 
   afterPwVal = userPwRe.val();
    if(beforePwVal !== afterPwVal){
      $(this).closest('li').addClass('error');
    }else{
      $(this).closest('li').removeClass('error');
    }
  });
  
    
   
 
 
 
 
})(jQuery);