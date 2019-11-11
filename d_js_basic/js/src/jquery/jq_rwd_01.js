(function($){
  // ------------------------
  // 현재 디바이스 크기 파악하여 정의
  let mob = 480, tab = 768, pc = 1280, laptop = 1366;
  let nowDevice = null;
  const DeviceCheck = function(w){  
    if(w <= mob){ nowDevice = 'mobile'; 
    }else if(w > mob && w <= tab){ nowDevice = 'tablet';
    }else if(w > tab && w <= pc){nowDevice = 'pc'; 
    }else if(w > pc && w <= laptop){nowDevice = 'laptop';
    }else{nowDevice = 'pcfull'; }
    return nowDevice;
  }// DeviceCheck();
// ------------------------
  const win = $(window);
  let winW = win.outerWidth();
  //  console.log(winW);  
  let beforeDevice = DeviceCheck(winW);
  console.log('beforeDevice', beforeDevice);
  // ------------------------
  win.on('resize', function(){
    let nowWinW = win.outerWidth();
    let afterDevice = DeviceCheck(nowWinW);
    console.log(afterDevice);
    
    if(winW !== nowWinW && beforeDevice !== afterDevice){
      location.reload(); // 새로고침
    }
  });
  


})(jQuery);