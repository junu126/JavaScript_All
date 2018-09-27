# Q : 자바스크립트의 참조방법은 무엇무엇이 있나요?

> A : 자바스크립트의 참조방법에는 `var`, `let`, `const`가 있습니다.

자바스크립트에서의 참조에는 함수스코프를 취하는 var와, 블록스코프를 취하는 let, 상수를 뜻하는 const가 존재합니다.

자바스크립트에서 조건없이 참조를 하고싶다면 var대신 const를 사용합니다.
```javascript
// 좋지 않은 코드
var a = 1;
var b = 2;

// 좋은 코드
const a = 1;
const b = 2;
```
만약 참조를 재할당 해야한다면 const나 var대신 let을 사용합니다.
```javascript
// 좋지 않은 코드
var count = 1;
if (true) {
  count += 1;
}

// 좋은 코드
let count = 1;
if (true) {
  count += 1;
}
```
var보다 let과 const를 많이 사용하는 이유는 var는 함수스코프를 취하기 때문에 스코프내에서 선언했지만 스코프 밖에서도 사용할 수 있기 때문에 혼란이 올 수 있기 때문입니다.

```javascript
{
  let a = 1;
  const b = 1;
}
console.log(a); // Error
console.log(b); // Error
```
이와 같이 블록에서 선언하면 블록에서 호출해야 합니다.
```javascript
{
  let a = 1;
  const b = 1;
  console.log(a); // 1
  console.log(b); // 1
}
```