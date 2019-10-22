// make_spigen_content_01.js


(function($){
  
  // console.log('load');
  const conArea = $('.content_area');
  const conDt = conArea.find('dt');
  // const conDtBtn = conDt.children('button');
  const conDd = conArea.find('dd');

  conDt.children('button').on('click focus', function(e){
    e.preventDefault();
    let btn = $(this);
    let btnParent = btn.parent(); 
    let parNext = btnParent.next('dd');

    btn.addClass('action');
    btnParent.siblings('dt').children('button').removeClass('action');
 // step_1
    // parNext.addClass('action');
    // parNext.siblings('dd').removeClass('action');

   // step_2
    parNext.stop().fadeIn();
    parNext.siblings('dd').stop().fadeOut();
    // action 클래스이름으로 구분만 할 수 있도록 처리하고, 
    // css에서 동작하지 않도록 처리
  });
// ========================================================
  const bmText = '\
    <div class="album">\
      <a href = "#" >\
        <h4></h4>\
        <p class="con"></p>\
        <p class="date"></p>\
      </a >\
    </div >';
/*    
var arr = ['apple', 'banana','graph'];
   arr[1]
var obj = {'sam':'gallexy', 'app':'iphong'};
   obj.app 
*/
const mediaList = [
      {text:'[youtube] 아마존으로 2600먹 매출', date:'2019.10.22'},
      {text:'슈피겐코리아 미국 아마존 독점유통', date:'2019.10.20'}, 
      {text:'[youtube] \'취업비자\' 기업탐방', date:'2019.10.10'} 
      ];
// mediaList[0].text
// mediaList[1].date



// const blogList = ;

const media =  conArea.find('.media');
// for(최초의 값;조건비교;값의증감){}
for(let i = 0; i < mediaList.length ; i++){
  media.append(bmText);
  let myNth = media.children('.album').eq(i);

  myNth.find('h4').text('media');
  myNth.find('.con').text( mediaList[i].text );
  myNth.find('.date').text( mediaList[i].date );
}


// ========================================================

})(jQuery);