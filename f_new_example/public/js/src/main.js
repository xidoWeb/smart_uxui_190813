// main.js
(function($){
  const body = $('body'); // body
  const wrap = $('#wrap'); // #wrap
  // script 내용 간편작성함수 생성
  const JsLink = (temp) => {
    return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
  };

  // 광고 영역 생성 ======================================================
  wrap.append('<section id="viewBox"></section>'); // #viewBox생성
  const viewBox = $('#viewBox');

  viewBox.load('./temp/slide_01.html', () => {
    JsLink('slide_01');
  });
// ======================================================


})(jQuery);