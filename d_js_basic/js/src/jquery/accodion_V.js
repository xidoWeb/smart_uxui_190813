// (function(){
//   const menuV = $('.accordion_menu_v');
//   const menuDt = menuV.find('dt') ;
//   const menuDd = menuV.find('dd') ;

//   menuDd.eq(0).show();

//   menuDt.on('click', function(){
//     $(this).siblings('dd').hide();
//     $(this).next('dd').show();
//   });
// })(jQuery);


(function($){
  const menuV = $('.accordion_menu_v');
  const menuDt = menuV.find('dt');
  const menuDd = menuV.find('dd');

  menuDd.eq(0).show();

  menuDt.on('click', function(){
    $(this).next(menuDd).siblings('dd').stop().slideUp();
    $(this).next( menuDd ).stop().slideToggle(); 
  });



})(jQuery);
