# Q : 자바스크립트에서 호이스팅이란 무엇인가요?

> A : Hoisting(호이스팅)은 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는 것을 의미합니다.

자바스크립트에선 모든 변수 할당을 할 때 호이스팅이 발생합니다. 즉 변수가 함수내에 정의되었을때 선언이 함수의 최상위로, 함수 밖에서 정의되었을 때 루트에 선언이 됩니다.

## 변수 호이스팅
변수를 선언할 때 사용하는 `var`는 사용하는 즉시 호이스팅에 의해서 루트함수에서 선언식이 실행 됩니다. 다음은 `var`의 역할에 대한 코드입니다.
```javascript
function EXvar() {
  console.log(x); // undefined
  var x = 2;
  console.log(x); // 2
};
```
위의 코드를 다시 해석해 보면 다음과 같습니다.
```javascript
function EXvar() {
  var x;
  console.log(x); // undefined
  x = 2;
  console.log(x); // 2
};
```
위와 같이 호이스팅이 진행되기 때문에 var선언식을 선호하지 않는 이유도 있습니다.

## 함수 호이스팅
함수를 1000번째 라인에서 선언을 해도 1번째 라인에서 호출 할 수 있습니다. 이러한 것 처럼 함수또한 최고 루트에 호이스팅 됩니다. 다음음 함수 호이스팅에 대한 코드입니다.
```javascript
foo();
function foo() {
  console.log('Hello');
};

출력 > Hello
```
하지만 변수를 이용해 만든 함수는 호이스팅 되지 않습니다.
```javascript
foo();
foo = function() {
  console.log('Hello');
};

출력 > System error!
```
