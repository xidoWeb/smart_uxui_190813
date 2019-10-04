// data_type_01.js

/*
// 변수의 기초 개념이해하기

var int;
console.log(int);

var 댕댕이;
console.log(댕댕이);

댕댕이 = "멍멍이";
console.log(댕댕이);

console.log(멍댕이);

* 결과값을 참고하여 
* 값이 undefined라면, 변수명은 선언했지만 값은 지정하지 않은 형태
* 값이 not defined라면, 변수를 생성조차 하지 않은것
*/
// console.log(멍댕이);


// 스크립트기반 또는 언어라고 불리우는 프로그래밍은 하나의 에러가나면 이후의 내용은 동작하지 않는다.

/* 
let rel = "10시 40분";
console.log(rel);

rel = "10시 49분";
console.log(rel);
 */
/*
var: 오래전부터 사용하던 변수
     * hoist현상이 생김(호출하기 이전에도 해당하는 
                        변수가 존재하는 것처럼 인지)


let: ECMA2015(es6) 버전부터 생성된 변수
     * hoist현상이 생기지 않는다.(현재 많이 사용하는 변수)

const: ECMA2015(es6) 버전부터 생성된 변수
     * 변수로 불리지만 한번 지정 후에는 값을 변경할 수 없는 변수
*/



/*

var card = 1000;
var chu = 500;
card = card - chu;
console.log(card);

card += 50000;  // card = card + 5000;
console.log(card);

card -= 13000;  // card = card - 13000;
// console.log(card);

// 조건 ? 조건이참일경우 : 조건이거짓일경우 ;
(card < 0) ?  console.log('잔액부족입니다.') : console.log(card);
*/

/*
 * 사칙연산( +, -, *, /, % )
 * +=, -=, *=, /=
 * ++ , --
 * ==, ===, !=, !==
 * < , >
*/

// 기본 연산자 ============================================
/*
var int;
int = 10;
console.log(int);

// var rel = int + 10;
int = int + 10;
int = int - 5;
int = int * 4;
int = int / 10;

int = int % 4;  // 몫을 뽑아내는게아닌 나머지를

console.log(int);
// -----------------------
var int2 = 50125487;
int2 = int2 % 2;
console.log(int2);

(int2 == 0) ? 
console.log("짝수"): 
console.log("홀수");
// -----------------------


var i = 100;
i = i + 2019;
console.log(i);

var now_year_month_date = 20191014;
now_year_month_date %= 8;
console.log(now_year_month_date);
*/



/*
var now = 1207;
now += 1;
now += 1;
console.log(now);

now++;
now++;
now++;
now++;
console.log(now);

now--;
now--;
now--;
now--;
console.log(now);

++now;
++now;
++now;
++now;
console.log(now);

--now;
--now;
--now;
--now;
--now;
console.log(now);
*/
/*
 * 증감연산자
   1씩 더하거나, 빼는 기능
 * 1씩 더하거나, 뺄때 (++,--)는 앞(전치연산) 또는 뒤(후치연사)에 붙일 수 있다.

 * 전치는 먼저 연산후 결과를 도출
 * 후치는 먼저 결과를 도출후 연산

*/
/* 
var myi = 100;
console.log(myi);
console.log(++myi);
console.log(++myi);
console.log(--myi);
console.log(--myi);
console.log("결과:", myi);
console.log(myi++);
console.log(myi++);
console.log(myi++);
console.log(myi++);
console.log("결과2:", myi);
console.log(myi--);
console.log(myi--);
console.log(myi--);
console.log(myi--);
console.log(myi--);
console.log(myi--);
console.log(myi--);
console.log("결과3:", myi);
console.log(++myi);
console.log(myi++);
console.log(myi--);
console.log(myi++);
console.log("결과4:", myi);

 */


 var ls = 07;
 var tx = "번방의 선물";

var myMv = ls + tx;

ls = 10.0002;
tx = "번가 5번지";
myMv = ls + tx;

(ls < 10) ? (myMv = "0" + ls + tx) : (myMv = ls + tx);

console.log(myMv);


var myN = parseInt(myMv);
console.log(myN);
