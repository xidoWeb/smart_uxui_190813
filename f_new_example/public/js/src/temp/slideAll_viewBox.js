// slideAll_viewBox.js
(function($){
  const viewBox = $('#viewBox');
  const slideWrap = viewBox.find('.slide_wrap');
  let slideEach = slideWrap.children('div');
  
  slideEach.eq(-1).clone(true).prependTo(slideWrap);
  
  slideEach = slideWrap.children('div');
  let slideLen = slideEach.length;
  console.log(slideLen);
  slideWrap.css({width:100 * slideLen + '%'});
  slideEach.css({width:100 / slideLen + '%'});
  
})(jQuery);