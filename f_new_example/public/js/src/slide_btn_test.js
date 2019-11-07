(function($){

  const product = $('.product');
  const productUl = product.find('ul');
  let   productLi = productUl.find('li');  
  const btn = $('.btn').find('button');  
// =============================================
  
// 가로형 슬라이드 기능
const HorizonSlide = function(){
    productLi.eq(-1).clone().prependTo(productUl);
    productLi = productUl.find('li');
    
    let productLen = productLi.length;
    
    productUl.css({'marginLeft':'-100%', 
                  'width': 100 * productLen + '%',
                  'position':'relative','left':0,
                  });
    productLi.css({'width':100 / productLen + '%'});

    // --------------------------------------------------------
    let i = 0;
    btn.on('click', function(e){
      e.preventDefault();
      let btnL = $(this).hasClass('next');
      if(btnL){
      // 다음버튼
      i++;
        if(i >= productLen-1){
          productUl.css({left:100+'%'});
          i = 0;
        }    
        productUl.animate({'left':-100 * i + '%'});
      }else{
      // 이전버튼
      i--;
        productUl.animate({'left':-100 * i + '%'}, function(){
          if(i <= -1){
            productUl.css({left:-100 * (productLen-2)+'%'});
            i = productLen-2;
          }    
        }); // productUl.animate()
      }    
    });
};// HorizonSlide(); // ================================
// 세로형 슬라이드 기능
const VerticalSlide = function(){
  productLi.eq(-1).clone().prependTo(productUl);
  productLi = productUl.find('li');  
  let productH = product.outerHeight();
  let productLen = productLi.length; 
  // console.log(productH);
  
  productUl.css({width:'100%', height:100 * productLen +'%',
                transform:`translateY(${-productH}px)`,
                position:'relative', left:0, top:0});
  productLi.css({width:'100%', height:productH});
  
  let i =0; 
  btn.on('click', function(e){
    e.preventDefault();
    let btnL = $(this).hasClass('next');
    if(btnL){
    // next 버튼
      i++;
      if(i >= productLen-1){
        productUl.css({'top':productH + 'px'});
        i = 0;
      }
      productUl.animate({'top':-productH * i + 'px'});
    }else{
    // prev 버튼
      i--; 
      productUl.animate({'top':-productH * i + 'px'},function(){
        if(i <= -1){
          i= productLen -2;
          productUl.css({'top':-productH*i+'px'}); }
      });
    }// if    
  }); // btn.on('click')
}; // VerticalSlide(); // =============================  
// 간단하게 화면만 바뀌는 기능
const BasicSlide = function(){
  let productLen = productLi.length;
  let i = 0;
  btn.on('click', function(){
    let btnL = $(this).hasClass('next');
    if(btnL){i++;
      if( i >= productLen ){ i=0 }
    }else{i--;
      if( i <= -1){ i = productLen-1 }
    }  
    productUl.css({marginLeft: -100 * i +'%'});  
  });
}; // BasicSlide() // ============================
product.css({overflow:'hidden'});

})(jQuery);