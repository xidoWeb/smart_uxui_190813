// jq_03.js
(function($){
//  $()
  $('#myBox').css({'width':'80%', 'height':'900px', 
                    'margin':'auto','backgroundColor':'#ddd'});

// 생성(요소, 값)
/* ES6기반의 코드   
  const myBox = document.querySelector('#myBox');
  const myh2 = document.createElement('h2'); 
  let   h2Text = document.createTextNode('jquery text 생성하기');
  myh2.appendChild(h2Text);
  myBox.appendChild(myh2); */

const myBox = $('#myBox');
myBox.append('<h2></h2>');
const myh2 = myBox.children('h2');
myh2.text('jquery를 통해 글자를 생성하였습니다.');

// html(), append(), prepend(), appendTo(), prependTo(), before(), after()
// text()

// let con = myBox.html();    // 내용을 파악
// console.log(con);
  myBox.html('<p>요소를 생성하였습니다.</p>');  // 기존 요소를 삭제하고, 새롭게 추가
  myBox.append('<p>요소를 추가생성하였습니다.</p>');  // 기존요소를 두고, 내부에 뒤에 추가
  myBox.prepend('<p>요소를 추가로 앞에 생성하였습니다.</p>'); // 기존요소를 두고, 내부에 앞에 추가


  myBox.append('<p>요소를 추가생성하였습니다.</p>');    // 방에 아버지께서 들어가신다.

  let myt = $('h2');
  myt.appendTo(myBox);  // 아버지께서 들어가신다 방에 
  myt.prependTo(myBox);

// append, prepend, appendTo prependTo  : 
// 값을 내부에 삽입하는 기능, 해당요소를 만들어서 삽입 or 기존의 요소를 끌어와서 삽입하는 기능
// To 가 붙으면, 주어의 위치가 바뀌는 것을 의미


// before, after
  myBox.before( '<div class="beforeBox"></div>');
  myBox.after( '<div class="afterBox"></div>');
 
  let myBefore = myBox.prev();
  let myAfter = myBox.next();
  console.log(myBefore, myAfter);



// 확인(크기, 속성) ===============================================================================
// width(), height(), 
// innerWidth(), outerWidth(), outerWidth(true), innerHeight(), outerHeight(), outerHeight(true)
// 위와 유사: css('width'), css('height')
// attr(), removeAttr()

// parseInt(), parseFloat();

  const resultBox = $('#resultBox');
  // let resultWidth = resultBox.width();  // padding, border를 제외한 width값
  // console.log(resultWidth);
  // let resultinnerWidth = resultBox.innerWidth();  // padding 값을 포함한 width
  // console.log(resultinnerWidth); 
  // let resultouterWidth = resultBox.outerWidth();  // border 값을 포함한 width
  // console.log(resultouterWidth); 
  // let resultoutertrueWidth = resultBox.outerWidth(true);  // border 값을 포함한 width
  // console.log(resultoutertrueWidth);  // margin값을 포함한 가로값

/*
  let resultBoxWidth = resultBox.css('width');
  let resultPaddingWidth = parseInt(resultBox.css('paddingLeft')) + parseInt(resultBox.css('paddingRight')) ;
  let pasWidth = parseInt(resultBoxWidth) + resultPaddingWidth;

  console.log(pasWidth);
*/
  let url = "http://www.naver.com";
  resultBox.attr({ 'class': 'adC', 'data-class': url });
  // console.log(myat);

  resultBox.on('click', function(){
    //  resultBox.after('<a href="' + url + '">클릭하면 이동합니다.</a>');
    resultBox.after(`<a href="${url}">클릭하면 이동합니다.2</a>`);
    resultBox.removeAttr('id');
  });


// 변경, 삭제
  // myBox.empty();  // 선택한것 제외 내부의 기능을 삭제
  // myBox.remove();   // 선택한것을 그대로 삭제


// jquery 기초개념:  메소드 체인, 콜백
// * 메소드체인 :하나의 함수 또는 메소드를 체인처럼 연결하여 처리하는 것
// $().find().animate();  


//  콜백 함수: 하나의 함수내에서 다시 함수를 호출하여 사용하는기능
/* $().animate({}, function(){
    $().animate({}, function(){
      $().animate();
    });
  }); */

// 이벤트
// show(), hide(), fadeIn, fadeout, slideUp, slideDown, toggle, hasClass ....

})(jQuery);