(function($){
  const win = $(window);
  const wrap = $('#wrap');
  
  const viewBox = $('#viewBox');
  
  // viewBox.css({position:'fixed', top:0, backgroundColor:'#fff'});
  viewBox.find('.fix_img').children('img').css({position:'sticky', top:'40px', backgroundColor:'#0ff'});
  
  /* const subConBox = $('#sub_conBox');  
  const videoConBox = $('#video_conBox');
  const graphConBox = $('#graph_conBox');
  const osConBox = $('#os_conBox');

  subConBox.css({ position: 'fixed', bottom: '100%', zIndex:4});
  videoConBox.css({ position: 'fixed', bottom: '100%', zIndex:3});
  graphConBox.css({ position: 'fixed', bottom: '100%', zIndex:2});
  osConBox.css({ position: 'fixed', bottom: '100%', zIndex:1});

  let totalH = viewBox.outerHeight(true) +
               subConBox.outerHeight(true) +
               videoConBox.outerHeight(true) +
               graphConBox.outerHeight(true) +
               osConBox.outerHeight(true);

  wrap.css({ height: totalH });

  viewBox.css({position:'fixed', top:0, backgroundColor:'#fff'}); */
  
  viewBox.find('.title').css({position:'relative', top:0});
  
  // 이미지 담기
  const viewFix = viewBox.find('.fix_img');
  let url = '../img/apple/large_';
  let j;
  for(let i=0; i<122; i++){
    if(i < 10){ j='000'+i; }else if(i < 100){
      j='00'+i; }else if(i < 1000){ j='0'+i; }      
    j += '.jpg';    
  viewFix.append(`<img src="${url+j}" alt="0001이미지">`);
  viewFix.children('img').eq(i).css({zIndex:122-i});
  }// for
  viewFix.css({zIndex:50});
  viewFix.children('img').eq(0).show();
  
// =======
  let imgH = viewBox.find('.title').outerHeight() +
             viewFix.children('img').eq(0).outerHeight();
  viewFix.next('p').css({marginTop: imgH + 'px'});
// =======
  /* 
  let winH  = win.outerHeight();
  let viewH = viewBox.outerHeight();
  let viewOfH =  viewH + 122;
  console.log(viewOfH); */
// ---------------------------------------------------------



  //-- 스크롤기능

  win.on('mousewheel',function(){
    let thisS = $(this).scrollTop();
    
    // 글씨 투명해지게 만들기
    let op = 1 - ( thisS *  0.001);
    if(op < 0){op = 0}    
// <<<<<<< 
    // viewBox.find('.title').css({opacity:op});    
    viewBox.find('.title').css({top:(-thisS / 3)+'px', opacity:op});    
    // -----------------------------------------------------------
    // 이미지 교체하기
    let imgI = parseInt(thisS / 2000 * 121);
    if(imgI >= 121){ imgI = 121; }
    // console.log(imgI);
    viewFix.children('img').eq(imgI).siblings().hide();
    viewFix.children('img').eq(imgI).show();   
// =======
    //----------------------------------------
    /* 
    viewBox.find('.title').css({top:(-thisS / 3)+'px', opacity:op});    
    // -----------------------------------------------------------
    let indI = Math.ceil(thisS / (viewH+122) * 100);
    let indIP = parseInt(indI);
    viewFix.children('img').eq(indIP).show();
    viewFix.children('img').eq(indIP).siblings().hide();

    let viewMv = 0;
    if (thisS >= viewOfH){
      viewMv = (thisS - viewOfH) / 2;
      viewBox.css({top:-viewMv + 'px'});
    }
    console.log(thisS, viewOfH);

    // -----------------------------------------------------
    let viewEndOffset =  viewBox.offset().top - winH;
    if (thisS >= viewEndOffset){
      subConBox.css({ top: -viewMv+ 'px'});
    }
 */
  });
  
})(jQuery);