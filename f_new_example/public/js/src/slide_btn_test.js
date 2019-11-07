(function($){

  const product = $('.product');
  const productUl = product.find('ul');
  let   productLi = productUl.find('li');
  
  productLi.eq(-1).clone().prependTo(productUl);
  productLi = productUl.find('li');
  
  let productLen = productLi.length;
  productUl.css({'marginLeft':'-100%', 
                 'width': 100 * productLen + '%'});
  productLi.css({'width':100 / productLen + '%'});
  
})(jQuery);