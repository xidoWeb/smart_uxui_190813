(function($){
  const thumnailImg = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];  
  const big        = $('.big');
  const smallLi    = $('.small').find('li');
  const view       = $('.view');
  const mylocation = $('.location');
  const mLocation  = $('.mouse_location');  
  const myper      = $('.per');  
  let bigW         = big.outerWidth();
  let bigH         = big.outerHeight();
  let url          = "../img/money/";
  
  mLocation.hide();
  
  const imgSet = function(i){
    big.css({backgroundImage:'url('+ url + thumnailImg[i] + ')'});
    view.css({backgroundImage:`url('${url+thumnailImg[i]}')`});
    mLocation.css({backgroundImage:`url('${url+thumnailImg[i]}')`});
  }
  imgSet(0);

  smallLi.on('mouseenter focus', function(){
    let i = $(this).index();
    imgSet(i);
  });
  
  
  // offsetX(), offsetY()
  // pageX(), pageY()
  // clientX(), clientY()
  // screenX(), screenY() 
  
  // 위치값 %로 전환  
  // 좌표 / 기준크기 * 100
  

  
  big.on('mousemove', function(e){
    let ofx = e.offsetX;
    let ofy = e.offsetY;
    mylocation.find('span').text(ofx + ' , ' + ofy);
    
    let perX = parseInt(ofx / bigW * 100);
    let perY = Math.floor(ofy / bigH * 100);
    myper.find('span').text(perX + ' , ' + perY);
    
    view.css({backgroundPosition: perX +'%' + ' ' + perY + '%' });
    mLocation.show();
    mLocation.css({top:(ofy + 10) +'px', left:(ofx + 10) + 'px',
                   backgroundPosition: perX +'%' + ' ' + perY + '%' });
  });
  
  big.on('mouseleave', function(){
    mLocation.fadeOut();
  });
  
  // Math함수
  /*  Math.round()  -> 반올림
      Math.ceil()   -> 올림
      Math.floor()  -> 내림
      Math.random() -> 0~1까지 랜덤숫자
      
      소수점 3자리숫자에서 올림
      Math.ceil( ()*100 ) / 100
  */
  
  
})(jQuery);