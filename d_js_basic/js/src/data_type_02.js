// data_type_02.js

// 자료형 파악하기

let i = 0;
let myType = typeof(i);
console.log(i, myType);

let s = "mytext";
let myType2 = typeof(s);
console.log(s, myType2);

let is = i+s;
let myT3 = typeof(is);
console.log(myT3);

let n = null;
let myT4 = typeof(n);
console.log(n);

let bool = true;
let myT5 = typeof(bool);
console.log(myT5);

//  ===============================

var arr = ['samsung', 'lg', 'apple'];
var arrT = typeof(arr);
console.log(arrT);
console.log(arr[2]);
/*
  arr = {
    0:"samsung",
    1:"lg",
    2:"apple"
  }
*/

var obj = {'samsung':'gallaxy',
           'lg':'v50s',
           'apple':'iphone' };
var objT = typeof (obj);
console.log(objT);
console.log(obj['lg']);