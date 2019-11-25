// join.js
(function($){
  // id란 입력하지 않을때 상황
  const userName = $('#userName');
  userName.on('blur', function(){
    let thisVal = $(this).val();
    if(thisVal == ""){
      $(this).closest('li').addClass('error');
    }
  // -----------------------------------------------
  // pw 비교해서 일치여부 
  
    
  });
})(jQuery);