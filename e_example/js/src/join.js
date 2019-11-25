// join.js
(function($){
  // 영문대/소문자 및 숫자(특수문자) 포함하여 6~15글자
  let checkPw = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{6,15}$/
  // 이메일형식 체크( 이름@주소.지역 )
  let emailCk = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
  // 전화번호 형식
  let numCk = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/


//-------------------------------------------
  // id란 입력하지 않을때 상황
  const userName = $('#userName');
  userName.on('keyup', function(){
    let thisVal = $(this).val();
    let thisLi = $(this).closest('li');
    if(thisVal == ""){
      thisLi.addClass('error');
    }else if(!emailCk.test(thisVal)){
      thisLi.addClass('error');
      thisLi.find('.narr').text('이메일형식에 맞게 내용을 입력하세요.');
    }else{
      thisLi.removeClass('error');
    }
  });
  // -----------------------------------------------
  // pw 비교해서 일치여부 
  const userPw   = $('#userPw');
  const userPwRe = $('#userPwre');
  const pwlabel  = $('label[for="userPw"]');
  //------------------------
  pwlabel.on('mousedown', function(e){
    if(e.which){
      userPw.attr({type:'text'});
    }
  });
  pwlabel.on('mouseup keyup mousemove', function(e){
    userPw.attr({type:'password'});  
  });
  
  // ---------------------------------
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
    }else if( !checkPw.test(thisVal) ){
      thisLi.find('.narr').text('영문대소문자,특수문자혼용');
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
  
    
  //  정규 표현식 : RegExp (regular expression)
 
  let a = 10;
  let b = 4;
  let c = 8;
  let re = /a + c/;
  // let re2 = new RegExp('a + c');
  
  // 정규표현식 메소드
  // 1. exec    : 대응되는 문자열을 찾는 메소드(배열반환)
  // 2. test    : 해당하는 문자열의 유무 파악(t/f)
  // 3. match   : 해당하는 문자열의 유무 파악(배열반환)
  // 4. search  : 해당하는 문자열의 유무 파악(인덱스반환)
  // 5. replace : 찾아 바꾸기
  // 6. split   : 문자열을 배열로 반환(string메소드)


  
})(jQuery);