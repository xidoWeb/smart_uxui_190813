// jq_05_event_02.js

(function($){
  let menu = $('.menu');
  let menuUl = menu.children('ul');
  let menuLi = menuUl.children('Li');

// focus:초점이 잡힌상태(a, button, form내부의 요소)
  menuLi.children('a').on('focus', function(){
    let mythis = $(this);
    mythis.parent('li').css({'backgroundColor':'#0af', 
                              'borderRadius':'0.5rem'});
    mythis.css({'color':'#fff', 'fontWeight':'bold', 'outline':'0'});
  });

// blur: 초점이 잡힌요소가 풀리는 상황
  menuLi.children('a').on('focus', function(){
    
  });



}(jQuery));
