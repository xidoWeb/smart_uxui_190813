// grammer_basic_02.js
// 반복문

// while () {}
/*
let n = 0;
// console.log(n);

while ( n <= 100 ){
  console.log(n);
  n++;
}
console.log(n);
*/
/*
//  do{ } while()
 var n = 0;
 do{
  console.log(n);
  n++;
   } while(n < 10)
 console.log(n);
*/

// var n = 0;
// for (; n <= 10 ;) {
//   console.log(n);
//   n++;
// }



// var n = 0;
/*
for (let n = 0; n <= 10; n++){
  console.log(n);
}

console.log(n);
*/

// for~in
/*
let arr = ['사과', '배', '바나나', '오렌지', '키위'];

for (let i=0; i < 5; i++){
  console.log(arr[i]);
}
// 배열에서는 for~in을 사용하지 않는다!!!
*/
/*
let obj = {
  "red"     : "사과",
  "yellow"  : "바나나",
  "orange"  : "오렌지",
  "green"   : "키위",
  "purple"  : "포도"
};

 for (let i in obj) {
   console.log(obj[i]);
 }
*/




// [].forEach()
/* let myArr = ['빨강', '파랑', '노랑', '녹색', '보라'];

myArr.forEach(function (data){
  console.log(data);
} ); */


// for(let i = 0; i<10; i++ ){}  // 일반형식, 배열
// for(let i in object){}  // 객체일때 사용
// [].forEach( function(){} );

// for 테스트 --------------------------------

// var product = document.getElementById('product');
let product = document.querySelector('#product');
product.style.width = "100%";
product.style.height = "auto";
product.style.minHeight = "300px";
product.style.backgroundColor = "#f96";

let ul = document.createElement('ul');
product.appendChild(ul);
ul = document.querySelector('#product>ul');
ul.style.width = "90%";
ul.style.height = "auto";
ul.style.minHeight = "400px";
ul.style.backgroundColor = "#77f";

let ar = ['우유', '쥬스', '차', '커피', '슬러시', '요거트', '디저트'];
// console.log( ar.length );

for (let i = 0; i < ar.length; i++){
  // console.log(i);
  let li = document.createElement('li');
  let myText = document.createTextNode(ar[i]);
  li.appendChild(myText);
  ul.appendChild(li);
} 