(function($){
  let win = $(window);
  let par = [];
 
  const vb = $('#viewBox');
  for(let i=0; i<vb.children().length; i++){
    let p = '.par_0' + i;
    par.push(p);
  }
  
  let winH = win.outerHeight();
  
  win.on('scroll', function(e){
    e.preventDefault();
    let scroll = win.scrollTop();
    // console.log(scroll);
    for(let j=0; j < par.length; j++){
      $(par[j]).css({top: -scroll / (par.length - j -1) });
    }
  }); 
  // ------------------------------------------------------
  
  const conBox = $('#conBox');
  const conList = conBox.find('li');
  const liOffset = [];
  
  for(let i=0; i<conList.length; i++){
    //liOffset.push(conList.eq(i).offset().top);
    liOffset[i] = conList.eq(i).offset().top;
  }
  console.log(liOffset);
  
  
  win.on('scroll', function(e){
    e.preventDefault();
    let scroll = win.scrollTop();
    let scRel  = [];
    for(let i=0; i<conList.length; i++){
     scRel[i] = liOffset[i] - scroll - (winH/4);      
     conList.eq(i).find('span')
            .css({transform:'translateY(-'+ -scRel[i]/4 +'px)'});
    }    
    console.log(scRel[0])
  });
  
})(jQuery);