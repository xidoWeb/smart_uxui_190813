// grammer_basic.js
// javascript 기초이해하기

/** 문법
 * 조건문: 특정한 조건을 이용하여 해당 조건이 참이면 수행하고, 
           거짓이면 수행하지 않도록 처리하게 만드는 것
 * 반복문: 2번이상의 반복수행할 경우, 단순반복하여 수행하게 하는것이 아니라 자동으로 수행하도록 처리
 */

 // 조건문 - 단순분기(하나의 조건을 기준으로 참/거짓)- if ~ else, 다수분기(다양한 조건중에 하나)- switch
//  if(조건을 비교){ 조건이 참일경우 수행}

/*
var myNum = function(par){
  var i = par;
  var text;

  if (i < 10){
    text = "주어진 숫자는 10보다 작은 수 입니다.";
  } else if (i === 10){
    text = "주어진 숫자는 10 입니다.";
  } else {
    text = "주어진 수는 10보다 큰 수 입니다.";
  }

  return console.log(text);
};

myNum(10);
*/

var i = 10;
switch (i){
  case 1:
    text = "숫자는 1입니다";
    break;
  default:
    text = "집에가셔도됩니다.";
    break;
}
console.log(text);