# Q : 자바스크립트에서는 모듈을 어떻게 불러오나요?

> A : 자바스크립트에서는 `import`를 이용해서 모듈을 불러옵니다.

자바스크립트에서도 다른 언어들 처럼 모듈을 불러올 수 있습니다. 모듈을 불러오는 방법은 ES6문법이 들어오면서 간편화되었습니다.

## ES6 모듈 시스템의 이점
ES6문법이 업데이트되면서 새로 들어온 `import`나 `from`, `export`, `default`등의 문법들은 모듈의 내보내기와 불러오기에 정말 많은 도움을 줍니다. 이처럼 모듈 전용 키워드가 생기면서 가독성이 좋아졌고, 또한 비동기 방식으로 작동하고, 모듈의 일부분만 불러오기 때문에 메모리 성능면에서도 도움이 됩니다. 또한 ES5에서 이용했던 common.js에서는 지원하지 않는 기능들이 상당히 있습니다.

## 내보내기 
모듈을 내보내는 방식에는 `복수객체를 내보내는 방법`과, `단일객체를 내보내는 방법`으로 나뉩니다. 

복수 객체를 내보낼 때에는 `export` 키워드를 사용합니다.
```javascript
// 모듈명 MOD_A

// 안 내보냄
function a() {
  return console.log('a');
};

// 내보냄
export function b() {
  return console.log('b');
};

// 내보냄
const c = function () {
  return console.log('c');
};
export { c };
```

단일 겍체를 내보낼 때에는 `export`키워드와 `defalut`키워드를 사용합니다. 단일 객체를 내보낼 때에는 변수명을 지정을 하지않기 때문에 불러올때 변수명을 지정해 줍니다.
```javascript
// 모듈명 MOD_B

// 안 내보냄
function a() {
  return console.log('a');
};

// 내보냄
export default {
  b () {
  return console.log('b');
}};
```
하지만 궂이 변수명을 지정해 주고 싶다면 다음과 같이 사용하시면 됩니다.
```javascript
// 내보냄
const c = function () {
  return console.log('c');
};
export default { c };
```

## 불러오기
모듈을 불러오는 방식은 `복수객체를 불러오는 방법`과, `단일객체를 불러오는 방법`으로 나뉩니다. 

먼저 복수 객체를 불러올 때에는 미리 변수명을 갖고있는 것을 불러옵니다.
```javascript
// 하나하나 불러오기
import { b, c } from 'MOD_A';

// 전체 불러오기
import * from 'MOD_A';
```
여기서 'MOD_A'는 모듈 파일명입니다. 그리고 괄호안에는 미리 선언해뒀던 b변수와 c변수를 넣습니다. 또 전체를 부르고 싶다면 `*`키워드를 입력해 주시면 됩니다.

> 파일명의 확장자는 붙이지 않습니다.

단일 객체를 불러오는 방법은 미리 변수명이 선언되어 있지 않기 때문에 직접 변수명을 지정해 줘야 합니다.
```javascript
import ConsB from 'MOD_B';
```
여기서 ConsB는 모듈 MOD_B안에서 export default해준 것을 포함합니다.