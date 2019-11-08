(function($){
  const slide   = $('#miniProduct');
  const product = $('.product');
  const productUl = product.find('ul');
  let   productLi = productUl.find('li');  
    
// =============================================
// 버튼 생성
let btnIn = '<div class="btn"><button type="button" class="next"><i class="fas fa-angle-right"></i><span>다음내용보기</span></button><button type="button" class="prev"><i class="fas fa-angle-left"></i><span>이전내용보기</span></button></div>';
slide.prepend(btnIn);

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
// z-index 기능을 통해 fadeIn 처리되게 만들기
const ZIndexSlide = function(){
  productUl.css({'position':'relative', width:'100%'});
  productLi.css({'position':'absolute', width:'100%'});
  productLi.eq(0).nextAll().hide();

  let productLen = productLi.length;
  let i = 0;
  btn.on('click', function(e){
    e.preventDefault();
    let btnL = $(this).hasClass('next');
    if(btnL){
    // next
      i++;
      if(i >= productLen){ i = 0; }
    }else{
    // prev
      i--;
      if(i < 0){ i = productLen-1 }  
    }
    productLi.eq(i).css({'zIndex':100});
    productLi.eq(i).fadeIn();
    productLi.eq(i).siblings().fadeOut(function(){
      productLi.css({zIndex:0});
    });  
  });// btn.on('click')
}; // ZIndexSlide()
// ---------------------------------------------
// product.css({overflow:'hidden'});
// ----------------------------------------------
const slideList = {
  basic : BasicSlide,
  fade  : ZIndexSlide,
  horizon :HorizonSlide,
  vertical : VerticalSlide
};

slideList.fade();




})(jQuery);