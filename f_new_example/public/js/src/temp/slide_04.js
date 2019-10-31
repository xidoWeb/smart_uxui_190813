// slide_04.js
(function($){
// 이미지 경로, 이미지파일명
  const url = "../img/slide_01/";

  let imgList;  
  $.ajax({
    async:false,
    type:'GET',
    url:'../data/slide_04.json',
    dataType:'json',
    error:function(){ console.log('data error'); },
    success:function(data){ return imgList = data; }
  });  
  console.log(imgList);
// -----------------------------------------------------
// 기본선택자 및 내용(기본틀) 생성

const slide_04 = $('#viewBox_04');
slide_04.append('<div class="slide_form"></div>');
const slideForm = slide_04.children('.slide_form');
slideForm.append('<ul></ul>');
const slideGuide = slideForm.children('ul');

let imglen = imgList.length;
let slideCon = '<dl><dt></dt><dd class="con"></dd>\
                <dd class="link"><a href=""></a></dd></dl>';

for(let i = 0; i < imglen; i++){
  slideGuide.append(`<li class="slide_4th_0${i+1}"></li>`);
  let li_nth = slideGuide.children('li').eq(i);
 // li_nth.text(imgList[i].title);
  li_nth.html(slideCon);
  li_nth.css({'backgroundImage':`url(${url + imgList[i].bgimg})`});

  li_nth.find('dt').text(  imgList[i].title  );
  li_nth.find('.con').text(imgList[i].content);
  let link = li_nth.find('.link').children('a');
  link.text(imgList[i].linkTest);
  link.attr({'href':imgList[i].link, 'target':'_blank'});
}

let cloneLi = slideGuide.children('li').eq(-1).clone(true);
cloneLi.prependTo(slideGuide);

imglen++;  // li마지막요소 추가하여 갯수 다시 파악
const slide4thLi = slideGuide.children('li');

slideGuide.css({'width':100 * imglen+'%'});
slide4thLi.css({'width': 100 / imglen + '%',
                'boxSizing':'border-box',
                'border':'1px solid #5ff'});
// ----------------------------------------------------------------------
//버튼 요소 만들기
let btnMake = '<div class="slide_04_btn_area">\
                <button type="button" class="next">\
                  <span>다음내용</span>\
                </button>\
                <button type="button" class="prev">\
                  <span>이전내용</span>\
                  </button>\
               </div>';

slide_04.prepend(btnMake);
const btnArea = slide_04.find('.slide_04_btn_area');
const btn = btnArea.children('button');

slide_04.css({'position':'relative'});
btnArea.css({'position':'absolute', 'top':'-50px', 'left':0});
btn.css({'width':'100px', 'height':'30px'});
btn.eq(0).css({'float':'right'});
btn.eq(1).css({'float':'left','marginRight':'10px'});
// -------------------------------------------------------------
// 생성된 버튼을 이용하여, 좌우 슬라이드 기능수행


let num = 0;
/*
// next버튼 클릭
btn.eq(0).on('click', function(e){  
  e.preventDefault();
  num++; 
  // -----------------
  if(num >= imglen-1){ 
    slideGuide.css({'left':'100%'});
    num = 0;
  }
  // -----------------
  slideGuide.stop().animate({'left':-100 * num +'%'}, 600);
});

// prev버튼 클릭
btn.eq(1).on('click', function(e){  
  e.preventDefault();
  num--;
  slideGuide.stop().animate({'left':-100 * num +'%'}, 600,function(){
     // -----------------------------
      if(num <= -1){
        num = imglen-2;
        slideGuide.css({'left':-100 * num +'%'}, 600);
      }
  // -----------------------------
  });
});
*/
// next, prev 버튼을 하나로 구현
btn.on('click', function(e){
  e.preventDefault();
  if($(this).index() == 0){ num++;
    if(num >= imglen-1){ slideGuide.css({'left':'100%'});  num = 0; }
  }else{ num--;   }
  
  slideGuide.stop().animate({'left':-100 * num +'%'}, 600,function(){
    if(num <= -1){num = imglen-2;
      slideGuide.css({'left':-100 * num +'%'}, 600);}
  });
});
// ------------------------------------------------------
}(jQuery));



/*
  $.post()      : 서버에 데이터를 HTTP POST방식(보안처리)으로 전송한 후 서버측 응답 받을때 사용
  $.get()       : 서버에 데이터를 HTTP GET방식(오픈방식)으로 전송후 서버측 응답을 받을때
  $.getJSON()   : 서버에 데이터를 HTTP GET방식(오픈방식+json)으로 전송후 서버측 응답을 JSON형식으로받을때
  $.ajax()      : HTTP,POST,GET,JSON 등 모든 방식 전송가능한 통합함수(다양한파라미터존재)
  $.ajaxSetup() : 공통기본ajax요청을 미리 설정
  $.load()      : 외부컨텐츠를 가져올때

  $.ajax({
    async:false // 동기, 비동기
    type:'data방식',
    url:'data주소값',
    dataType:'data문서 형식(xml, json, html, text 등) 작성'
    error : function(){
      // data 에러시 발생하는 내용처리방법
    },
    success : function(){
      // data 불러오는 값 성공시 처리하는방법
    }
  });

 */