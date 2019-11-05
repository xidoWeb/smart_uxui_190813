// indicator_test_01.js
(function($){
  const miniProduct = $('#miniProduct');
  const indicator   = miniProduct.children('.indicator');
  const indiLi      = indicator.children('li');
  const indiLink    = indiLi.children('a');
  
  const adverBanner = miniProduct.find('.product').children('ul');
  const adverNth    = adverBanner.children('li');
  
  indiLi.eq(0).addClass('active');
  // -----------------------------------------------
  indiLink.on('focus', function(e){
    e.preventDefault();
    let i = $(this).parent().index();
    adverBanner.animate({marginLeft: (-100 * i) + '%' });
    
    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
    // $(this).parent().addClass('active');
    // $(this).parent().siblings('li').addClass('active');
    
    $(this).on('click', function(e){
      e.preventDefault();
      adverNth.eq(i).children('a').focus();
    });
    
  });

})(jQuery);