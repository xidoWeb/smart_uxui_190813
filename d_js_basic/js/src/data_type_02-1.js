// data_type_02-1.html

/** javascript 기본형 내용 정리하기
 * 
 * 변수: 
 * var(오래도록 사용한변수, hoist현상문제), 
 * let(hoist현상을 막기위해 생성된 변수), 
 * const(최초에 생성후에 변경이 불가능하도록 처리된 변수-상수의 개념을 가짐)
 * 
 * 숫자( 0 ), 문자( '0' ), 참(true)/거짓(false), null/undefined
 * array([]), object({})
 * --------------------------------------------------
 * 연산자: opperator, opperation, reteral
 */

/*
  var num = 100;
  console.log( typeof(num) );

  var str = '100';
  console.log( typeof (str) );

  var bool = false;
  console.log( typeof(bool) );

  var myrel;
  console.log( typeof(myrel) );

  console.log(' ================================================== ');

  var arr = [1,2,3];
  console.log( typeof(arr) );

  var obj = { "a more": "pen", "컴퓨터보조": "mouse", "c": "microphone" };
  console.log( typeof(obj) );

  // console.log( arr[2]);
  // console.log(obj["a more"]);
  // console.log(obj.c);

  var reset = null;
  // console.log( typeof(reset) );

  console.log(arr.constructor.name);
  console.log(obj.constructor.name );
  console.log(reset);
*/

var i = 10 + 2; // i=12
    i -= 6; // i = i - 6;  // 6 
    i *= 2; // i = i * 2;  // 12
    i /= 4; // i = i / 4;  // 3
    i %= 2; // i = i % 2;  // 1
    i += 2; // i = i + 2;  // 3

// console.log(i);

var n = 10;
++n;  // 1을 더하다
++n;  // 1을 더하다
n++;  // 1을 더하다
console.log(n++);
console.log(n);
--n;
--n;
--n;
console.log(n--);
console.log(n);

for(var i=0; i < 10; i++){
  console.log(i);
}

// 함수
