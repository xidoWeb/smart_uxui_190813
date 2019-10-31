// main.js
(function($){
  const body   = $('body'); // body
  const wrap   = $('#wrap'); // #wrap
  // script 내용 간편작성함수 생성
  const JsLink = (temp) => {
    return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
  };

  // 광고 영역 생성 ======================================================
  wrap.append('<section id="viewBox"></section>'); // #viewBox생성
  const viewBox = $('#viewBox');
  viewBox.load('./temp/slide_01.html', () => {
    return JsLink('slide_01');
  });
// ======================================================
// 광고영역2 생성
wrap.append('<section id="viewBox_02"></section>');
const vB2 = $('#viewBox_02');
vB2.load('./temp/slide_02.html', function(){
  return JsLink('slide_02');
});
//- 자동슬라이드 내용에서 중첩기능 수정요망

// ======================================================
// 광고영역 3 생성

wrap.append('<section id="viewBox_03"></section>');
const vB3 = $('#viewBox_03');
vB3.load('./temp/slide_03.html', function(){
  return JsLink('slide_03');
});
// ============================================================
// 광고영역 4 생성 

wrap.append('<section id="viewBox_04"></section>');
const vB4 = $('#viewBox_04');
vB4.load('./temp/slide_04.html', function(){
  return JsLink('slide_04');
});

})(jQuery);