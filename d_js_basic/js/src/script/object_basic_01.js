// object_basic_01.js

// javascript에서는 배열과, 객체 모두 형타입을 object

var mic = "microphone";
var arr = [1, 5, 'apple', mic];
// console.log(arr);

var fruits = ['durian', 'mango','starfruits', 'gyul','ggingg-gang'];
// console.log(fruits);

// console.log(fruits[2]);

var drink = [ 
              ['esspreso', 'americano','latte'], 
              ['appleJuice', 'kiwiJuice', 'tomatoJuice'], 
              ['blackfirst', 'liptone'] 
            ];
// console.log(drink[0]);

var mydrink = drink[2];
// console.log(drink[2][0]);

// ========================================================
var obj = { 'U S A': "캡틴아메리카",  'korea':'이순신', "india":"gandy"  };
console.log(obj['U S A']);
console.log(obj);
