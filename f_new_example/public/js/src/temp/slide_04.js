// slide_04.js
(function($){
// 이미지 경로, 이미지파일명
  const url = "../img/slide_01/"
  const imgList = ['mySlideImage_01.jpg',
                  'mySlideImage_02.jpg',
                  'mySlideImage_03.jpg',
                  'mySlideImage_04.jpg',
                  'mySlideImage_05.jpg'];
// -----------------------------------------------------
// 기본선택자 및 내용(기본틀) 생성

const slide_04 = $('#viewBox_04');
slide_04.append('<div class="slide_form"></div>');
const slideForm = slide_04.children('.slide_form');
slideForm.append('<ul></ul>');
const slideGuide = slideForm.children('ul');

let imglen = imgList.length;
for(let i = 0; i < imglen; i++){
  slideGuide.append(`<li class="slide_4th_0${i+1}"></li>`);
  slideGuide.children('li').eq(i).text(imgList[i]);
}
let cloneLi = slideGuide.children('li').eq(-1).clone(true);
cloneLi.prependTo(slideGuide);

imglen++;  // li마지막요소 추가하여 갯수 다시 파악
const slide4thLi = slideGuide.children('li');

slideGuide.css({'width':100 * imglen+'%'});
slide4thLi.css({'width': 100 / imglen + '%',
                'boxSizing':'border-box',
                'border':'1px solid #5ff'});






}(jQuery));