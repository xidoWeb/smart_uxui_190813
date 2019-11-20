// rwd_check.js
(function($){
  const conBox = $('#conBox');
  
  // 각 디바이스별 크기 기준 설정
  const mobile=768, tablet=1024, laptop=1366, pc=1600;
  // 기본 디바이스 명칭설정
  const device = ['mobile', 'tablet', 'laptop', 'pc','pcfull'];

  let nowSize;
  let beforeW = $(window).outerWidth(true);
 // 각 디바이스 상황에 맞는 data처리
  // -------------------------------------
  const DeviceDate = function(wid){
    switch(wid){
      case device[0]:
        conBox.load('./temp/main_mob.html');
        $('body').append('<script src="../js/viewBoxmob.js"></script>');
      break;
      case device[1]:
        conBox.load('./temp/main_tab.html', function(){
          $('body').append('<script src="../js/tab.js"></script>');
        });
      break;
      case device[2]:
      case device[3]:
      case device[4]:
        conBox.load('./temp/main_pc.html',function(){
          $('head').find('title')
           .before('<link rel="stylesheet" href="../css/pc.css">');
          $('body').append('<script>console.log("pc");</script>');
        });
      break;
    } 
  };  
  // -----------------------------------
  // 디바이스 크기 체크
  const DeviceSet = function(winW){
    if(winW <= mobile){
      nowSize = device[0];
    }else if(winW > mobile && winW <= tablet){
      nowSize = device[1];
    }else if(winW > tablet && winW <= laptop){
      nowSize = device[2];
    }else if(winW > laptop && winW <= pc){
      nowSize = device[3];
    }else{
      nowSize = device[4]; 
    }
    return nowSize;
  }  
  let beforeDevice = DeviceSet(beforeW);  
  // console.log(nowSize);  
  DeviceDate(beforeDevice);
  
  // 파이어폭스인가 아닌가 판단 ---------------------
  let browser = navigator.userAgent.toLowerCase();
  let nowb = null;
  if(browser.indexOf('firefox') !== -1){
    nowb = 'firefox';
  }else{
    nowb = 'other';
  }
  // console.log(nowb);
  // ----------------------------------------------
  
  // 브라우저크기변경시 새로고침  -------------------------------
  $(window).on('resize', function(){
    let afterW = $(window).outerWidth(true);
    let afterDevice = DeviceSet(afterW);     
    if(beforeDevice !== afterDevice){
      if(nowb == 'firefox'){
        window.location =  window.location;
      }else{
        location.reload(); 
      }    
    }
  });
  
  
})(jQuery);