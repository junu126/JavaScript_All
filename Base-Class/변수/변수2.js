    // // let currentTempC = 22; //섭씨온도
    // // currentTempC = 22.5;
    // // //let TargetTempC; // let TargetTempC = currentTempC; 와 같다.
    // // let targetTempC, room1 = "conference_room_a", room2 = "lobby";
    // // console.log(room1);
    // // console.log(room2);
    // // console.log(targetTempC);

    // const small = Number.EPSILON;
    // console.log(small);
    // const bigInt = Number.MAX_SAFE_INTEGER;
    // console.log(bigInt);
    // const max = Number.MAX_VALUE;
    // console.log(max);
    // const minInt = Number.MIN_SAFE_INTEGER;
    // console.log(minInt);
    // const min = Number.MIN_VALUE;
    // console.log(min);
    // const nInf = Number.NEGATIVE_INFINITY;
    // console.log(nInf);
    // const non = Number.NaN;
    // console.log(non);
    // const inf = Number.POSITIVE_INFINITY;
    // console.log(inf);

    // console.log(`New in ES6: \` strings.`);

    // let currentTemp = 19.5;
    // // 00b0는 온도를 나타내는 유니코드 코드 포인트입니다.
    // const message = `The current temperature is ${currentTemp}\u00b0C`;
    // console.log(message);

    // const multline = "line1\n"+"line2\n"+"line3"
    // console.log(multline)

    // const multline2 = `line1
    // line2
    // line3`
    // console.log(multline2)

    // const multline3 = `${message}` + `line2`
    // console.log(multline3)

    // const result1 = 3 + '30';
    // const result2 = 3 * '30';
    // console.log(result1);
    // console.log(result2);

    // const obj = {};
    // obj.color = "yellow";
    // obj.backgorund-color="green"

    // obj["not an identifier"] = 3;
    // obj["not an identifier"];
    // obj["color"];
    // obj["background-color"];

// const sam1 = {
//     name : 'Sam',
//     age : 4,
// };

// const sam2 = { name : 'Sam', age : 4 };

// const sam3 = {
//     name : 'Sam',
//     classification: {
//         kingdom : 'Anamalia',
//         phylun : 'Chordata',
//         class : 'Mamalia',
//         order : 'Carnivoria',
//         family : 'Felidae',
//         subfamily : 'Felinae',
//         genus : 'Felis',
//         species : 'catus',
//     },
// };

// console.log(sam3.name);
// console.log(sam3.classification.phylun);

// sam3.speak = function() { return "Meow!" };
// console.log(sam3.speak());

// //2018.03.25 시작

// delete sam3.speak;
// delete sam3.classification;
// console.log(sam3.speak);
// console.log(sam3.classification);

// const s = "hello";
// console.log(s.toUpperCase());

// const c ="hello";
// c.rating = 3;
// console.log(c.rating);

// // 배열 크기는 고정되지 않는다. 언제든 추가, 제거 가능하다.
// // 요소의 데이터 타입을 가리지 않는다. 문자열만 쓸 수 있는 배열이라던가 숫자만 쓸 수 있는 배열 같은 개념이 아예 없다.
// // 배열 요소는 0으로 시작한다. ex) a[1,2,3,4]  =>  a[0] = 1

// const a1 = [1,2,3,4];
// console.log(a1[0]);
// const a2 = [1, 'twp', 3, null];
// console.log(a2[1]);
// const a3 = [
//     "What the hammer? What the chain?",
//     "In what furnace was thy brain?",
//     "What the anvil? What dread grasp",
//     "Dare its deadly terrors clasp?",
// ];
// console.log(a3[2]);
// const a4 = [
//     { name : "Ruby", hardness : 9},
//     { name : "Diamond", hardness : 10},
//     { name : "Topaz", hardness : 8},
// ];
// console.log(a4[1]);
// const a5 = [
//     [1,3,5],
//     [2,4,6],
// ];
// console.log(a5[1][1]);

// let arr = ['a','b','c'];
// console.log(arr.length);
// console.log(arr[arr.length]);
// console.log(arr[arr.length-1]);
// console.log(arr[0]);

// arr = ['a','b','c',4,5];
// console.log(arr[3]);

// alert("hello World");

// const now = new Date();
// console.log(now);
// document.write(now, "\n");

// const nowing = new Date(2016,9,31);
// console.log(nowing);

// const halloween = new Date(2016, 9 , 31, 19 , 0);
// console.log(halloween);
// console.log(halloween.getFullYear());
// console.log(halloween.getMonth());
// console.log(halloween.getDate());
// console.log(halloween.getDay());
// console.log(halloween.getHours());
// console.log(halloween.getMinutes());
// console.log(halloween.getSeconds());

// const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/; // 우라나라 이메일 정규표현식 뭘까..?
// console.log(email);
// const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/; // 미국 전화번호 정규표현식...
// console.log(phone);

// //문자열을 숫자로 ㄱ

// const numStr = "33.3";
// const num = Number(numStr);
// console.log(numStr); //문자
// console.log(num); // 숫자

// const a = parseInt("16 volts", 10); // volts 무시, 10진수 16이다.
//                                    // 뒤에 있는 10이 10진수를 나타냄
// console.log(a);
// const b = parseFloat("15.5 kph"); // kph는 무시, Float는 기수가 무조껀 10이다.
// console.log(b);
// const c = parseInt("3a", 16); //16진수 3a를 10진수로 = 58
//                               // 뒤에 있는 16이 16진수를 나타냄
// console.log(c);
// const d = new Date(); // 현재 시간
// console.log(d,"(지금시각)");
// const ts = d.valueOf(); // UTC 1970년 1월 1일 자정으로부터 몇 밀리세컨드가 지났는지
// console.log(ts); // 2018.03.25.19시 19분 56초 = 48.26145347161974년
// document.write('<br>' + d);

// const ex = true;
// console.log(ex);
// const n = ex ? 1 : 0; // ?는 ex가 true경우 1을, 그렇지 않은 경우 0을 출력
// console.log(n);

// const k = 33.5;
// console.log(k);
// k;  // 33.5 - 숫자

// const p = k.toString();
// console.log(p);
// p;  // "33.5" - 문자열

// const arrs = [1, true, "hello"];
// console.log(arrs.toString);
// document.write('<br>' + '<p>',arrs.toString);

// const l = 0; //거짓 같은 값
// const b1 = !!n; // false ( n = 0 , n = 1, n = 0 순서대로 변화)
// const b2 = Boolean(n); // false , Boolean(0) = false

// 자바스크립트에는 문자열, 숫자, 불리언, null, undefined, 심볼의 여섯 가지 원시 타입과 객체 타입이 있다.
// 자바스크립트의 모든 숫자는 배정도 부동소수점 숫자(더블)이다.
// 배열은 특수한 객체이며, 객체와 마찬가지로 매우 강력하고 유연한 데이터 이다.
// 날짜, 맵, 셋, 정규표현식 등 자주 사용할 다른 데이터 타입들을 특수한 객체 타입이다.

let a = 1; // 원본
let b = a; // 사본. b는 1이다. a가 아니다.
a = 2; // 원본의 값을 바꿈.
console.log(b); // 원본 값을 복사/전달할 때 값 자체를 복사/전달해서 값이 바뀌어도 1이 출력됨.

a === 2 //true (값 자체를 복사해서 변수와 값은 일치한다.)

function change (a1){
    a1 = 5;
}
a1 = 3;
console.log(a1);

let o = {a : 1};
let p = o; //p = {a : 1}
o.a = 2; // o객체 안에 있는 key a의 값을 바꿈.
console.log(p);

let o1 = {a : 1};
let p1 = o1; //p1 = {a : 1}
    p1 === o1; // true
o1 = {a : 2}; //o1에 값을 부여해서 o1의 값이 바뀜. {a : 1}을 수정한게 아님. 
    p1 === o1; // false
console.log(p1); // {a : 1}

let q = {a : 1};
q === {a : 1}; //false

function change_o (o2) {
    o2.a = 999;
}

let o2 = {a : 1};
change_o(o2);
console.log(o2); // {a : 999}

