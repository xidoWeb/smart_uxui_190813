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

$('.box p')
$('.box').find('p')

$('.box > p')
$('.box').children('p')

$('dl > dt + dd')
$('dl').children('dt').next('dd')

$('dl > dt ~ dd')
$('dl').children('dt').nextAll('dd')

$('ul > li:nth-child(1)')
$('ul').children('li:nth(0)')
$('ul').children('li').eq(0)


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