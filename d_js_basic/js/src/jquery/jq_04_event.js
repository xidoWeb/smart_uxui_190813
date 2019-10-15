// jq_04_event.js
(function($) {
  //  jquery 이벤트 이해하기

//  선택.on('이벤트', function(){ 해당이벤트를 처리시(예:클릭) 수행하는 기능 )});
/* #contentBox:hover {background-color:#aaf;} */

  const conBox = $('#contentBox');
  
/*  // 이벤트 개념파악하기
 conBox.on('mouseenter', function(){
    $(this).css({'backgroundColor':'#fff', transition:'all 400ms ease'});
  });

  conBox.on('mouseleave', function () {
    $(this).stop().animate({ 'backgroundColor': 'transparent' }, 100);
  });
 */
  // click, dblclick, mousedown, mouseup, mousewheel(DOMMouseScroll)
  // keypress, keydown, keyup
  // focus, hover, selected, changed
  // scroll, resize
  // load

  const con = $('#contentBox');
  const conUl = con.children('ul');
  const conLi = conUl.children('li');

  // console.log(conLi);
  // conLi.eq(0).css({'backgroundColor':'#fff'});
  conLi.eq(0).on('click', function(){
    $(this).css({ 'backgroundColor': '#fff' });
  });

  conLi.eq(1).on('dblclick', function(){
    $(this).css({'backgroundColor':'#777'});
  });

  conLi.eq(2).on('mousedown', function (evt) {
    // console.log(evt.button);
    // $(this).css({ 'backgroundColor': '#07f' });
/*
    switch (evt.button){
      case 0:
        $(this).css({ 'backgroundColor': '#07f' });
        break;
      case 1:
        $(this).css({ 'backgroundColor': '#f70' });
        break;
      case 2:
        $(this).css({ 'backgroundColor': '#000', 'color':'#fff' });
        break;
      default:
        $(this).css({ 'backgroundColor': '#aaa' });
        break;
    }
*/

    if (evt.button === 0){
      $(this).css({ 'backgroundColor': '#07f' });
    } else if (evt.button === 1){
      $(this).css({ 'backgroundColor': '#f70' });
    } else if (evt.button === 2){
      $(this).css({ 'backgroundColor': '#000', 'color':'#fff' });
    }else{
      $(this).css({ 'backgroundColor': '#aaa' });
    }


  });

  conLi.eq(2).on('mouseup', function () {
    $(this).css({ 'backgroundColor': '#fa0' });
  });


  conLi.eq(3).on('mousewheel DOMMouseScroll', function (evt) {
    console.log(evt);
    $(this).css({ 'backgroundColor': '#04f' });
  });




  conLi.eq(4).on('mousemove', function(event){
    // console.log(event.offsetX, event.offsetY);  // $(this)의 왼쪽 상단을 기준좌표 0,0
    // console.log(event.pageX, event.pageY);      // 브라우저기준으로 왼쪽상단 0,0
    // console.log(event);

    let x = event.offsetX;
    let y = event.offsetY;

    // $('.ball').css({"transform":'translate('+ -x +'%,' + -y +'%)'});

    $('.ball').css({"transform":`translate(-${x}%,-${y}%)`});
  });


  conLi.eq(5).children('input').on('keyup', function(evt){
    console.log(evt.key,  evt.keyCode);
  });


})(jQuery);