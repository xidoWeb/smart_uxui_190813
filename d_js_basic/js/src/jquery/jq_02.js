// jq_02.js
( function($){
// jQuery 내용작성하는 곳.
// 선택자

/*
document.getElementById('box');
document.querySelector('#box');
$('#box')

document.getElementsByTagName('p')[0];
document.querySelector('p');
$('p')
*/

/*
$('.box p').css({"padding":"0.5rem", "backgroundColor":"#fa0"});
$('.box').find('p').css({"color":"#f03", "textShadow":"0.2rem 0.2rem 0.2rem rgba(0,0,0,0.7)"});

$('.box > p').css({"borderBottom":"2px solid #111"});
$('.box').children('p').css({"transform":"rotate(45deg)"});
*/

$('dl > dt + dd').css({"backgroundColor":"#acc"});
$('dl').children('dt').next('dd').css({"fontSize":"2rem"});

$('dl > dt ~ dd').css({"marginLeft":"2rem"});
$('dl').children('dt').nextAll('dd').css({"color":"#f03"});

$('ul > li:nth-child(1)').css({"backgroundColor":"#ffa"});
$('ul').children('li:nth(0)').css({"color":"#077"});
$('ul').children('li:nth(-1)').css({"color":"#f77"});
$('ul').children('li').eq(0).css({"borderBottom" : "2px solid #333"});
$('ul').children('li').eq(-1).css({"borderBottom" : "2px solid #f05"});

$('ul').find('li:eq(-2)').siblings().css({"borderLeft": "3px solid #f06"});

// 자식 : children
// 자손 : find
// 인접형제(동생) : next
// 형제(동생들) : nextAll

// 부모 : parent
// 조부모(그 위도 포함) : parents, parentsUntil, closest
// 형제(바로위 형) : prev
// 형제(형들) : prevAll
// 다른형제(나를제외) : siblings



} )(jQuery);