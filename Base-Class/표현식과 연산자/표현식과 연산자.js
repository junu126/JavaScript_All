// let x;
// x = 3 * 5;
// console.log(x);

// let x,y;
// y = x = 3 * 5;

//let x,y;
// y = x = 3 * 5;  // 원래 문
// y = x = 15;     // 곱셈 표현식을 평가했습니다.
// y = 15;         // 첫 번째 할당을 평가했습니다. x는 이제 15이고,
                // y는 아직 undefind입니다.
//15;             // 두 번째 할당을 평가했습니다. y는 이제 15입니다.
                // 전체 문의 결과는 15입니다. 이 값은 사용하지도 않았고
                // 어딘가에 할당하지도 않았으니 그냥 버려집니다.

//연산자

// const x = 5;
// const y = 3 - -x; // y는 8입니다.

// const s = "5";
// const y = 3 + s;    // y는 8입니다. 단항 플러스를 사용하지 않았다면
//                     // 문자열의 병합이 일어나서 겨로가는 "35"가 됩니다.

// // 여기서는 굳이 단항 플러스가 필요하지 않지만 줄을 잘 맞출 수 있습니다.
// const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
// const p1 = -x*1;    console.log(p1);
// const p2 = +x2*2;    console.log(p2);
// const p3 = +x3*3;    console.log(p3);
//const p4 = -x4*4;    console.log(p4);

// let x = 2;
// const r1 = x++ + x++; // 2 + 3 = 5
// const r2 = ++x + ++x; // 5 + 6 = 11
// const r3 = x++ + ++x; // 6 + 8 = 14
// const r4 = ++x + x++; // 9 + 9 = 18
// let y = 10;
// const r5 = y-- + y--; // 10 + 9 = 19
// const r6 = --y + --y; // 7 + 6 = 13
// const r7 = y-- + --y; // 6 + 4 = 10
// const r8 = --y + y--; // 3 + 3 = 6

// console.log(r1, r2, r3, r4, r5, r6, r7, r8);

// let x = 3, y;
// x += y = 6*5/2; // 1. 6*5/2  2.y = 15  3.x = 3 + 15
// console.log(x)

// const n = 5;
// const s = "5";
// n === s;
// n !== s;
// n === number(s);
// n !== number(s);
// n == s;
// n != s;

// const a = {name : "an object"};
// const b = {name : "an object"};
// a === b;
// a !== b;
// a == b;
// a != b;

// let n = 0;
// while(true) {
//     n += 0.1;
//     if(n === 0.3) break;
// }
// console.log(`stooped at ${n}`);

// let n = 0;
// while(true){
//     n += 0.1;
//     if(Math.abs(n-0.3) < Number.EPSILON) break;
// }

// let v , v0;
// v = v0 = 9.8;

// const nums = [3, 5, 15, 7, 5];
// let n , i = 0;
// while((n=nums[i]) < 10 && i++ < nums.length) {
//     console.log(`Number less than 10: ${n}`)
// }
// console.log(`Number greter than 10 found: ${n}`);
// console.log(`${nums.length - i - 1} numbers remain.`);

// // 1. n = nums[3] < 10 true && 0++ = 1 < nums.length = 4 true
// // 2. n = nums[5] < 10 true && 1++ = 2 < nums.length = 4 true
// // 3. n = nums[15] < 10 false

//nums.length -i -1 = 4 - 2 -1 = 2

// 객체 선언
const obj = { b:2, c:3, d:4};

// 해체 할당
const {a,b,c} = obj;
console.log(a); // undefined.(obj 상수에 a가 없음.)
console.log(b); // 2
console.log(c); // 3
console.log(d); // 없다. (abc 객체에 d강벗다)
