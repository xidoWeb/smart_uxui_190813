// jq_05_event_02.js

(function($){
  let menu = $('.menu');
  let menuUl = menu.children('ul');
  let menuLi = menuUl.children('Li');
  let menuLink = menuLi.children('a');

  let mLiBg = menuLi.css('backgroundColor');
  let mLiBdr = menuLi.css('borderRadius');
  let mLinkColor = menuLink.css('color');
  let mLinkWeight = menuLink.css('fontWeight');
  menuLink.css({'outline':0});
  console.log(mLiBg ,mLiBdr ,mLinkColor ,mLinkWeight);
// focus:초점이 잡힌상태(a, button, form내부의 요소)
  menuLink.on('focus', function(){
    let mythis = $(this);
    mythis.parent('li').css({'backgroundColor':'#0af','borderRadius':'0.5rem'});
    mythis.css({'color':'#fff', 'fontWeight':'bold'});
  });

// blur: 초점이 잡힌요소가 풀리는 상황
  menuLink.on('blur', function(){
    let mythis = $(this); 
    mythis.parent('li').css({ 'backgroundColor': mLiBg, 'borderRadius': mLiBdr});
    mythis.css({ 'color': mLinkColor, 'fontWeight': mLinkWeight});
  });



}(jQuery));
