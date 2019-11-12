(function($){
  const wrap       = $('#wrap');
  const myForm     = wrap.find('.mouse_form');
  const myLocation = wrap.find('.mouse_location');
  const myMvBtn    = wrap.find('.mv_btn');
  const myBtn      = myMvBtn.find('button');

  let url          = '../../img/gear/';
  let j            =0;
  for(let i=0; i<100; i++){  
    if(i < 9){ j = '00' + (i+1); 
    }else if(i < 99){ j = '0' + (i+1);
    }else{ j = (i+1); }
    myForm.append(`<img src="${url}gear_${j}.png" \
                  alt="이미지 삽입">`);  
  }
  const myImg = myForm.find('img');
  myImg.parent().css({position:'relative',overflow:'hidden'});
  myImg.css({position:'absolute',top:0,left:0});
  myImg.eq(0).siblings().hide();

/*   myLocation.on('mousemove', function(e){
    let mv = e.originalEvent.offsetX;
    let thisWidth = $(this).outerWidth();
    let myi = Math.floor( mv / thisWidth * 100 );    
    myImg.eq(myi).siblings('img').hide();
    myImg.eq(myi).show();
  }); */
  let thisWidth = myForm.outerWidth();
  const ChangeImg = function(){
    let myi = Math.floor( mv / thisWidth * 100 );    
    myImg.eq(myi).siblings('img').hide();
    myImg.eq(myi).show();
  };

  let is_draggable = false;
  let mv=0;
  $('head').append('<style class="samStyle"></style>');
  const samStyle = $('.samStyle');
  const Mvbtn = function(){
    if(is_draggable){
      // is_draggable = true;
      samStyle.text(`.mouse_location:after{left:${mv-10}px}`);
      // console.log(mv);
      ChangeImg();
    }
  }// Mvbtn();
  myLocation.on('mousemove', function(e){
    mv = e.originalEvent.offsetX;
    if(mv < 0){mv = 0}else if(mv > thisWidth){ mv = thisWidth}
    Mvbtn();
  });  
  
  myLocation.on('mousedown', function(e){
    e.preventDefault();
    mv = e.originalEvent.offsetX;    
    is_draggable = true;
    Mvbtn();
  });
  
  myLocation.on('mouseup', function(e){
    e.preventDefault();
    is_draggable = false;
  });

  
})(jQuery);