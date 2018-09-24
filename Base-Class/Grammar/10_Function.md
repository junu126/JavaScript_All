# Q : 자바스크립트의 함수는 어떻게 쓰이나요?

> A : 자바스크립트에서는 화살표함수라고하는 ES6문법이 있습니다. 정말 유용하게 사용하는 기술입니다.

자바스크립트에서는 함수가 정말 중요합니다. 함수선언에는 함수선언식과 함수표현식이 있습니다. 함수 선언식은 함수를 정의하기 전에 먼저 선언하는 것 입니다. 다음은 예제입니다.

```javascript
function print() {
  return console.log('Hello JavaScript!');
};
```
또 다음은 함수를 미리 선언하지 않는 표현식 입니다.
```javascript
const printFunc = function print() {
  return console.log('Hello JavaScript!');
};
```
> 자바스크립트에서는 함수 표현식을 지향합니다.

## 화살표 함수
ES6문법에 추가된 화살표 함수는 함수를 적을때 불필요한 것들을 대폭 축소시켜주기 때문에 가독성도 좋아지고, 불편함이 없어집니다.

다음은 그 예시입니다.
```javascript
function HelloWorld() {
  return console.log('Hello World');
};
// 일반 함수

let a = () => {
  console.log('Hello World');
};
// 화살표 함수
```
화살표 함수에서는 `function`이라는 단어를 사용하지 않고 화살표로 나타냅니다. 또한 `return`을 따로 해줄 필요가 없습니다. 물론 return을 사용한다고 해서 문제가 되지 않습니다.